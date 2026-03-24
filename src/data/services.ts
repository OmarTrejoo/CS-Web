export interface Service {
  id: string;
  label: string;
  tagline: string;
  features: string[];
  img: string;
  imgAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: "servicios",
    label: "Computadoras y Laptops",
    tagline:
      "Diagnóstico profesional, reparación completa y mantenimiento preventivo para equipos de escritorio y portátiles de todas las marcas.",
    features: [
      "Optimización de sistemas",
      "Actualización de hardware",
      "Formateo e instalación",
      "Paquetería Office",
      "Antivirus y seguridad",
      "Limpieza y reballing",
      "Respaldo de información",
      "Cambio de pantalla y teclado",
      "Reparación de bisagras",
      "Baterías y cargadores",
    ],
    img: "/assets/images/servicios/laptop.jpg",
    imgAlt: "Técnico reparando laptop en taller",
  },
  {
    id: "celulares",
    label: "Celulares",
    tagline:
      "Reparación especializada con micro-soldadura y piezas de calidad. iPhone, Samsung, Motorola y más.",
    features: [
      "Equipos mojados",
      "Liberación de cuentas",
      "Software y desbloqueo",
      "Cambio de display",
      "Centros de carga",
      "Reballing",
      "Baterías y botones",
      "Electrónica y micro-soldadura",
    ],
    img: "/assets/images/servicios/celular5.jpg",
    imgAlt: "Reparación de celular con herramientas de precisión",
  },
  {
    id: "impresoras",
    label: "Impresoras",
    tagline:
      "Servicio integral para inyección de tinta y láser — desde atascos de papel hasta cambio de tarjeta lógica.",
    features: [
      "Lógica y scanner",
      "Sensores y engranajes",
      "Tintas y cartuchos",
      "Mantenimiento general",
      "Cambio de tarjeta",
      "Tónners",
      "Atascos de papel",
      "Almohadillas y reseteos",
    ],
    img: "/assets/images/servicios/impresora2.jpg",
    imgAlt: "Impresora en proceso de mantenimiento",
  },
  {
    id: "camaras",
    label: "Cámaras de seguridad",
    tagline:
      "Venta, instalación y configuración de sistemas DVR, IP y WiFi para hogar y negocio. Acceso remoto desde tu celular.",
    features: [
      "DVR con grabación 24/7",
      "Cámaras IP y WiFi HD",
      "Interior y exterior",
      "Acceso remoto desde celular",
    ],
    img: "/assets/images/hero/camara4.jpg",
    imgAlt: "Sistema de cámaras de seguridad instalado",
  },
  {
    id: "ensambles",
    label: "Ensamble PC gamer",
    tagline:
      "Armamos tu equipo ideal: asesoría, selección de componentes, ensamblado profesional, pruebas y sistema operativo listo.",
    features: [
      "Asesoría personalizada",
      "Intel · AMD · NVIDIA",
      "RAM DDR4 / DDR5 · NVMe",
      "Sistema operativo y drivers",
    ],
    img: "/assets/images/servicios/pc%20Gamer.jpg",
    imgAlt: "PC gamer ensamblada con iluminación RGB",
  },
];

export interface HeroService {
  id: string;
  label: string;
  anchor: string;
  image: string;
}

export const HERO_SERVICES: HeroService[] = [
  {
    id: "computadoras",
    label: "Computadoras",
    anchor: "#servicios",
    image: "/assets/images/hero/computadora.jpg",
  },
  {
    id: "impresoras",
    label: "Impresoras",
    anchor: "#impresoras",
    image: "/assets/images/hero/impresora.jpg",
  },
  {
    id: "celulares",
    label: "Celulares",
    anchor: "#celulares",
    image: "/assets/images/hero/celular3.jpg",
  },
  {
    id: "camaras",
    label: "Cámaras de seguridad",
    anchor: "#camaras",
    image: "/assets/images/hero/camara4.jpg",
  },
  {
    id: "ensambles",
    label: "Ensamble PC gamer",
    anchor: "#ensambles",
    image: "/assets/images/hero/pc.jpg",
  },
];

export const QUOTE_SERVICES = [
  "Reparación de laptop / PC",
  "Reparación de impresora",
  "Reparación de celular",
  "Instalación de cámaras",
  "Ensamble de equipo gamer",
  "Venta de accesorios o componentes",
  "Otro servicio",
] as const;
