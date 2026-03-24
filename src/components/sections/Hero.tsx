"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HERO_SERVICES } from "@/data/services";
import { EASING } from "@/lib/animations";


export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  /* Precarga los fondos restantes en segundo plano */
  useEffect(() => {
    const preload = () => {
      HERO_SERVICES.slice(1).forEach((s) => {
        const el = document.createElement("img");
        el.src = s.image;
        el.fetchPriority = "low";
      });
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(preload, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(preload, 400);
    return () => clearTimeout(t);
  }, []);

  const current = HERO_SERVICES[bgIndex];

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[var(--color-dark)] pt-[68px]"
    >
      {/* Background carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.05, ease: EASING }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={`Servicio de ${current.label} — CS Computadoras y Sistemas Xalapa`}
              fill
              priority={bgIndex === 0}
              fetchPriority={bgIndex === 0 ? "high" : "low"}
              quality={72}
              sizes="100vw"
              className="scale-[1.03] object-cover blur-[1.5px]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(9,13,9,0.90)_12%,rgba(9,13,9,0.74)_48%,rgba(9,13,9,0.60)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,13,9,0.92),rgba(9,13,9,0.24)_45%,rgba(9,13,9,0.38))]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-68px)] max-w-7xl items-center px-5 py-12 md:py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASING }}
          className="mx-auto w-full max-w-[980px] text-center"
        >
          <h1 className="mx-auto max-w-[15ch] text-[clamp(42px,6.6vw,78px)] font-bold leading-[0.9] tracking-[-0.03em] text-white">
            Servicio técnico
            <br />
            <span className="text-[var(--color-accent-on-dark)]">
              para tu equipo.
            </span>
          </h1>

          <p className="mx-auto mt-6 hidden max-w-2xl text-[16px] leading-relaxed text-white/88 sm:block sm:text-[17px] md:text-[18px]">
            Reparación y mantenimiento de computadoras, laptops, impresoras y
            celulares. También realizamos ensambles gamer e instalación de
            cámaras.
          </p>

          <div className="mt-8 md:mt-9">
            <p className="eyebrow mb-3 text-white/72">Nuestros servicios</p>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
              {HERO_SERVICES.map((item) => (
                <a
                  key={item.id}
                  href={item.anchor}
                  className="btn-dark px-4 py-2 text-[14px] md:px-5 md:py-2.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#contacto"
              className="btn-primary min-w-[252px] px-7 py-4 text-[16px]"
            >
              Cotizar
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-[13px] text-white/74">
            Atención por WhatsApp
          </p>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-dark) 95%)",
        }}
      />
    </section>
  );
}
