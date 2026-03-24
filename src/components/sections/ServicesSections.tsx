"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { SERVICES } from "@/data/services";
import { EASING } from "@/lib/animations";


export default function ServicesSections() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <section className="overflow-hidden border-t border-white/10 bg-[var(--color-dark)]">
      {/* ════ DESKTOP — split screen ════ */}
      <div className="hidden lg:grid lg:min-h-screen lg:grid-cols-2">
        {/* Left — service list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: EASING }}
          className="flex flex-col justify-center border-r border-white/10 py-24 pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: EASING, delay: 0.08 }}
            className="mb-10 text-[clamp(34px,4.6vw,60px)] font-bold leading-[0.92] tracking-[-0.03em] text-white"
          >
            Lo que{" "}
            <span className="text-[var(--color-brand)]">hacemos</span>
          </motion.h2>

          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.42, ease: EASING, delay: i * 0.04 }}
              whileHover={{ x: 3 }}
              className={`relative border-t border-white/10 transition-colors duration-300 last:border-b ${
                active === i
                  ? "before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-[var(--color-accent-on-dark)] before:content-['']"
                  : ""
              }`}
            >
              <div className="cursor-default py-5 pl-4">
                <motion.span
                  className={`block text-[clamp(18px,2vw,26px)] font-bold leading-tight tracking-[-0.025em] transition-colors duration-300 ${
                    active === i ? "text-white" : "text-white/62"
                  }`}
                  animate={
                    active === i
                      ? { letterSpacing: "-0.02em" }
                      : { letterSpacing: "-0.025em" }
                  }
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {s.label}
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.38, ease: EASING }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-4 pr-2">
                      <p className="max-w-[420px] text-[14px] leading-relaxed text-white/60">
                        {s.tagline}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.features.map((f) => (
                          <motion.span
                            key={f}
                            className="chip-dark"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: EASING }}
                            whileHover={{
                              y: -1,
                              backgroundColor: "rgba(255,255,255,0.1)",
                            }}
                          >
                            {f}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Right — sticky image panel */}
        <div className="sticky top-0 h-screen min-h-screen overflow-hidden bg-[var(--color-dark)]">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0, scale: 1.08, filter: "blur(1.2px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.62, ease: EASING }}
            >
              <Image
                src={SERVICES[active].img}
                alt={SERVICES[active].imgAlt}
                fill
                sizes="50vw"
                quality={80}
                className="object-cover object-center"
                priority={active === 0}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-[min(28%,9rem)] bg-gradient-to-r from-[var(--color-dark)]/55 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-8 pt-24">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-on-dark)]/80">
                  Servicio
                </p>
                <p className="mt-1 text-[22px] font-bold tracking-[-0.025em] text-white">
                  {SERVICES[active].label}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ════ MOBILE — vertical accordion ════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: EASING }}
        className="px-5 pb-16 pt-12 lg:hidden"
      >
        <h2 className="mb-6 text-[clamp(28px,7vw,42px)] font-bold leading-[0.95] tracking-[-0.03em] text-white">
          Lo que{" "}
          <span className="text-[var(--color-brand)]">hacemos</span>
        </h2>

        {SERVICES.map((s, i) => (
          <motion.div
            key={s.id}
            id={`${s.id}-m`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: EASING, delay: i * 0.03 }}
            className="border-t border-white/10 last:border-b"
          >
            <button
              type="button"
              onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[17px] font-bold tracking-[-0.02em] text-white">
                {s.label}
              </span>
              <span
                className={`shrink-0 transition-colors ${
                  mobileOpen === i
                    ? "text-[var(--color-accent-on-dark)]"
                    : "text-white/35"
                }`}
              >
                {mobileOpen === i ? (
                  <Minus className="h-4 w-4" strokeWidth={2} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={2} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {mobileOpen === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: EASING }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                    <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md">
                      <Image
                        src={s.img}
                        alt={s.imgAlt}
                        fill
                        sizes="90vw"
                        quality={78}
                        loading="lazy"
                        className="object-cover object-center"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    </div>
                    <p className="mb-5 text-[14px] leading-relaxed text-white/60">
                      {s.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="chip-dark">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
