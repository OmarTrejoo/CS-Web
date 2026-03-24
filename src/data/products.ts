export interface ProductCategory {
  title: string;
  description: string;
  image: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    title: "Componentes de PC",
    description:
      "RAM, SSD, discos duros, fuentes, procesadores, tarjetas y más opciones para mejorar tu equipo.",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Cables y Adaptadores",
    description:
      "HDMI, USB-C, DisplayPort, convertidores, extensiones, cargadores y adaptadores para laptop y celular.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Periféricos",
    description:
      "Teclados, mouse, bocinas, audífonos, cámaras web y accesorios para trabajo, estudio o gaming.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Energía y Almacenamiento",
    description:
      "Cargadores para laptop, baterías, memorias USB, microSD y soluciones de respaldo portátil.",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Seguridad y Monitoreo",
    description:
      "Cámaras, DVR, accesorios de instalación y elementos clave para sistemas de videovigilancia.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&fit=crop&auto=format&q=80",
  },
  {
    title: "Accesorios para celular",
    description:
      "Cables de carga, cargadores, micas, fundas, memorias y accesorios de uso diario.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&fit=crop&auto=format&q=80",
  },
];
