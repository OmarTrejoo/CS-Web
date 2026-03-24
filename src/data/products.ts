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
    image: "/assets/images/Productos/componente.jpg",
  },
  {
    title: "Cables y Adaptadores",
    description:
      "HDMI, USB-C, DisplayPort, hubs, convertidores, dongles y extensiones para conectar pantallas, periféricos y redes.",
    image: "/assets/images/Productos/cables.jpg",
  },
  {
    title: "Periféricos",
    description:
      "Teclados, mouse, bocinas, audífonos, cámaras web y accesorios para trabajo, estudio o gaming.",
    image: "/assets/images/Productos/cables.jpg",
  },
  {
    title: "Energía y Almacenamiento",
    description:
      "Baterías de laptop, cargadores para laptop y celular, memorias USB, microSD y almacenamiento portátil para respaldo.",
    image: "/assets/images/Productos/cargador.jpg",
  },
  {
    title: "Seguridad y Monitoreo",
    description:
      "Cámaras, DVR, accesorios de instalación y elementos clave para sistemas de videovigilancia.",
    image: "/assets/images/Productos/camara6.jpg",
  },
  {
    title: "Accesorios para celular",
    description:
      "Micas, fundas, soportes para auto y escritorio, anillos y complementos de protección y comodidad al día a día.",
    image: "/assets/images/Productos/celular4.jpg",
  },
];
