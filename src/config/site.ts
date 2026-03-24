export const SITE = {
  name: "CS Computadoras y Sistemas",
  phoneRaw: "522285465246",
  phoneDisplay: "+52 228 546 5246",
  city: "Xalapa, Veracruz",
  country: "México",
  hours: "Lun – Sáb · 10:00 – 18:00",
  addressStreet: "Calle H. Galeana #1, Col. Centro",
  addressLandmark: "Mercado Sauces",
  postal: "91000",
  addressFull:
    "Calle H. Galeana #1, Col. Centro, Xalapa, Veracruz, 91000 — Mercado Sauces",
  mapsUrl: "https://maps.app.goo.gl/zwmm7b6Nvp1CGjwYA",
  facebookUrl:
    "https://www.facebook.com/CS-Computadoras-y-Sistemas-105606395098110",
} as const;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cámaras", href: "#camaras" },
  { label: "Ensambles", href: "#ensambles" },
  { label: "Accesorios", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`;
}
