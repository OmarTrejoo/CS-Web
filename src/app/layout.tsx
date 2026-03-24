import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  preload: true,
});

const siteUrl = "https://cs-computadoras-y-sistemas.vercel.app";

export const viewport: Viewport = {
  themeColor: "#090D09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} | Servicio Técnico en Xalapa`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Reparación de computadoras, laptops, impresoras y celulares en Xalapa, Veracruz. Instalación de cámaras de seguridad DVR e IP, ensamble de PC gamer y venta de accesorios. Diagnóstico sin compromiso.",
  keywords: [
    "reparación de computadoras xalapa",
    "servicio técnico laptop xalapa",
    "reparación celular xalapa",
    "reparación impresoras xalapa",
    "cámaras de seguridad xalapa veracruz",
    "instalación cámaras dvr ip xalapa",
    "ensamble pc gamer xalapa",
    "venta accesorios computadora xalapa",
    "mantenimiento laptop xalapa",
    "formateo computadoras xalapa",
    "servicio tecnico xalapa veracruz",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${SITE.name} | Servicio Técnico en Xalapa`,
    description:
      "Servicio técnico profesional en Xalapa — computadoras, impresoras, celulares, cámaras de seguridad y ensambles gamer.",
    url: siteUrl,
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/brand/logo-cs.png`,
        width: 512,
        height: 512,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Servicio Técnico en Xalapa`,
    description:
      "Reparación de computadoras, impresoras y celulares en Xalapa, Veracruz. Instalación de cámaras y ensambles gamer.",
    images: [`${siteUrl}/assets/brand/logo-cs.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: SITE.name,
  description:
    "Taller de servicio técnico en Xalapa especializado en reparación de computadoras, laptops, impresoras, celulares, instalación de cámaras de seguridad y ensamble de PC gamer.",
  url: siteUrl,
  telephone: `+${SITE.phoneRaw}`,
  image: `${siteUrl}/assets/brand/logo-cs.png`,
  logo: `${siteUrl}/assets/brand/logo-cs.png`,
  priceRange: "$$",
  currenciesAccepted: "MXN",
  paymentAccepted: "Cash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressStreet,
    addressLocality: "Xalapa",
    addressRegion: "Veracruz",
    postalCode: SITE.postal,
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.5308,
    longitude: -96.9175,
  },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [SITE.facebookUrl],
  areaServed: {
    "@type": "City",
    name: "Xalapa",
  },
  serviceType: [
    "Reparación de computadoras y laptops",
    "Reparación de impresoras",
    "Reparación de celulares",
    "Instalación de cámaras de seguridad DVR e IP",
    "Ensamble de PC gamer",
    "Venta de accesorios y componentes de cómputo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
