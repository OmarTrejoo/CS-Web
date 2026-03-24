"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MapPin, MessageCircle } from "lucide-react";
import { SITE, buildWhatsAppUrl } from "@/config/site";
import { QUOTE_SERVICES } from "@/data/services";
import { fadeUp, stagger } from "@/lib/animations";

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  "Calle H. Galeana 1 Col Centro Xalapa Mercado Sauces Veracruz",
)}&output=embed`;

export default function Quote() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(QUOTE_SERVICES[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      "Hola, quiero cotizar un servicio.",
      `Nombre: ${name || "No especificado"}`,
      `Teléfono: ${phone || "No especificado"}`,
      `Servicio: ${service}`,
      `Detalle: ${message || "Sin detalle"}`,
    ].join("\n");
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  }

  const waDirect = buildWhatsAppUrl("Hola.");

  return (
    <section
      id="contacto"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid gap-8 lg:grid-cols-[1.05fr_1.35fr]"
        >
          {/* Map column */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="eyebrow text-[var(--color-text-3)]">Ubicación</p>
            <h3 className="text-[clamp(28px,3.5vw,40px)] font-bold leading-[0.95] text-[var(--color-text)]">
              Estamos en
              <span className="text-[var(--color-brand)]"> Xalapa.</span>
            </h3>

            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
              <div className="relative aspect-[4/3] w-full">
                <iframe
                  title="Ubicación de CS Computadoras y Sistemas"
                  src={MAP_EMBED_URL}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="border-t border-[var(--color-border)] px-4 py-3">
                <div className="flex items-start gap-2 text-[13px] leading-snug text-[var(--color-text-2)]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" />
                  <span>{SITE.addressFull}</span>
                </div>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-brand)]"
                >
                  Abrir en Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-7 lg:p-8">
              <p className="eyebrow text-[var(--color-text-3)]">Contacto</p>
              <h4 className="mt-2 text-[clamp(22px,2.8vw,30px)] font-bold leading-[1.05] text-[var(--color-text)]">
                WhatsApp o formulario
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-2)]">
                Puedes escribirnos directo al{" "}
                <a
                  href={waDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-brand)] underline decoration-[var(--color-brand)]/35 underline-offset-2 hover:decoration-[var(--color-brand)]"
                >
                  {SITE.phoneDisplay}
                </a>
                . Si prefieres detallar el servicio en un solo paso, usa el
                formulario y se armará el mensaje en WhatsApp automáticamente.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-7 lg:p-8"
            >
              <p className="text-[13px] font-medium text-[var(--color-text-2)]">
                Cotización con contexto
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col text-[13px] font-medium text-[var(--color-text-2)]">
                  Nombre
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    required
                    className="input-control"
                  />
                </label>

                <label className="flex flex-col text-[13px] font-medium text-[var(--color-text-2)]">
                  Teléfono
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Tu teléfono"
                    required
                    className="input-control"
                  />
                </label>

                <label className="flex flex-col text-[13px] font-medium text-[var(--color-text-2)] sm:col-span-2">
                  Servicio
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="input-control"
                  >
                    {QUOTE_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col text-[13px] font-medium text-[var(--color-text-2)] sm:col-span-2">
                  Detalle
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Modelo, síntomas, lo que necesitas…"
                    required
                    className="input-control resize-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary mt-5 w-full py-3.5 text-[15px]"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-[11px] text-[var(--color-text-3)]">
                Abre WhatsApp con el texto listo — no guardamos datos en
                servidor.
              </p>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
