# CS Computadoras y Sistemas

Landing page en Next.js para servicio tecnico en Xalapa.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Estructura recomendada

- `src/app`: layout y rutas
- `src/components`: componentes de la landing
- `public/assets/brand`: logos e identidad visual
- `public/assets/images`: imagenes optimizadas del proyecto

## Estado actual de arquitectura

- Se eliminaron componentes no utilizados para evitar ruido.
- Se agrego carpeta de assets para escalar mejor.
- Se agrego logo base en `public/assets/brand/logo-cs.svg`.

## Siguiente paso recomendado

Cuando se agreguen mas secciones, separar en:

- `src/components/layout` (Navbar, Footer, WaButton)
- `src/components/sections` (Hero, ServicesSections, Products, WhyUs, Quote)
- `src/components/ui` (botones/chips/reutilizables)
