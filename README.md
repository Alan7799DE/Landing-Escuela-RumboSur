# Rumbo Sur — Escuela de Canto

Sitio web institucional de **Rumbo Sur**, una escuela de canto en Belgrano, Buenos Aires. Presenta la propuesta de clases personalizadas y práctica escénica, el equipo de profesores, testimonios de alumnos, audios de práctica de la comunidad y un canal directo de contacto por WhatsApp.

🔗 **Sitio en producción:** [escueladecanto.net](https://escueladecanto.net/)

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:8080
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build de producción
```

## Marketing y adquisición de alumnos

El sitio tiene **Google Tag Manager** integrado, desde donde se configuraron **Google Analytics** y **Google Ads** para medir el comportamiento de los visitantes y correr campañas de adquisición orientadas a atraer nuevos alumnos a la escuela.

## Stack técnico

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui (Radix UI primitives)
- Optimizado para SEO (metadata, Open Graph, sitemap) dado que es un sitio orientado a captar tráfico orgánico y de campañas pagas
