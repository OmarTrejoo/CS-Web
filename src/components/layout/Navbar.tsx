"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-white/95 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            href="#inicio"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <Image
              src="/assets/brand/logo-cs.png"
              alt="CS Computadoras y Sistemas"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span
              className={`text-[15px] font-semibold transition-colors duration-300 ${
                scrolled ? "text-[var(--color-text)]" : "text-white"
              }`}
            >
              CS Computadoras
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[var(--color-text-2)] hover:text-[var(--color-text)]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden ${
              scrolled
                ? "text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]"
                : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[68px] z-40 border-b border-[var(--color-border)] bg-white/98 shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
