"use client";

import { motion } from "framer-motion";
import { EASING, fadeUpSm } from "@/lib/animations";

const quickPoints = [
  {
    title: "Diagnóstico sin compromiso",
    description:
      "Revisamos tu equipo y te explicamos la falla antes de cualquier intervención.",
  },
  {
    title: "Todo en un solo lugar",
    description:
      "Computadoras, impresoras, celulares, cámaras de seguridad y ensambles gamer.",
  },
  {
    title: "Atención directa en Xalapa",
    description:
      "Trato personal, cotización por WhatsApp y seguimiento claro de tu servicio.",
  },
] as const;

export default function AboutIntro() {
  return (
    <section className="bg-white py-14 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASING }}
        className="mx-auto max-w-5xl px-5 text-center lg:px-8"
      >
        <p className="eyebrow text-[var(--color-text-3)]">Quiénes somos</p>
        <h2 className="mt-3 text-[clamp(28px,3.8vw,44px)] font-bold leading-[0.95] text-[var(--color-text)]">
          CS Computadoras y Sistemas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-2)]">
          Somos un taller técnico especializado en reparación y mantenimiento.
          Diagnóstico claro, tiempos reales y solución profesional.
        </p>
      </motion.div>

      <div className="mx-auto mt-8 max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASING, delay: 0.1 }}
          className="grid gap-5 border-y border-[var(--color-border)] py-6 sm:grid-cols-3 sm:gap-6"
        >
          {quickPoints.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpSm}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -2 }}
              className="text-left transition-transform duration-200"
            >
              <h3 className="text-[14px] font-semibold text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-2)]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
