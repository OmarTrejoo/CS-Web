import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Facebook } from "lucide-react";
import { SITE } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Link href="#inicio" className="flex items-center gap-2.5">
            <Image
              src="/assets/brand/logo-cs.png"
              alt={SITE.name}
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-[15px] font-semibold text-white">
              {SITE.name}
            </span>
          </Link>

          <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/40">
            Taller de servicio técnico en Xalapa. Reparación, mantenimiento y
            venta de accesorios para computadoras, impresoras y celulares.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-[13px] text-white/55">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/35" />
              <span>
                {SITE.addressStreet}
                <br />
                {SITE.addressLandmark} · {SITE.postal} · {SITE.city}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-white/35" />
              {SITE.hours}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-white/35" />
              <a
                href={`tel:+${SITE.phoneRaw}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30">
            Facebook
          </p>
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-[13px] font-medium text-white/75 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <Facebook className="h-4 w-4" />
            {SITE.name}
          </a>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-[11px] text-white/25 sm:flex-row lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <p>
            {SITE.city}, {SITE.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
