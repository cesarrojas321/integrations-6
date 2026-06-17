# Plantilla Yisuka — Cómo reutilizarla

Esta es una plantilla de sitio web hecha con **Next.js 16 + TypeScript + Tailwind CSS v4**.

## Para arrancar el proyecto desde esta plantilla

1. Descomprime el ZIP en la carpeta donde quieras tu nuevo proyecto.
2. Abre una terminal en esa carpeta.
3. Instala las dependencias (esto recrea `node_modules`):
   ```
   npm install
   ```
4. Arranca el servidor de desarrollo:
   ```
   npm run dev
   ```
5. Abre http://localhost:3000 en el navegador.

## Estructura

```
app/            → layout.tsx (fuentes, metadata) y page.tsx (arma las secciones)
components/     → cada sección del sitio (Nav, Hero, Catalog, etc.)
context/        → CartContext.tsx (carrito)
lib/            → data.ts (todos los datos: apps, catálogo, productos, equipo)
public/         → imágenes y logos (incluye /integrations con los SVG de marcas)
app/globals.css → todos los estilos
```

## Cosas que ya sabes cambiar

- **Fuente de la marca:** en `app/layout.tsx`, cambia el import y el bloque `brandFont`.
- **Logos de integraciones:** pon el SVG/PNG/WEBP en `public/integrations/` y conéctalo en `lib/data.ts`.
- **Logo principal:** reemplaza `public/yisuka-logo2.png`.

## Truco útil

Si editas CSS o configuración y los cambios NO aparecen en el navegador aunque recargues:
borra la carpeta `.next` y reinicia `npm run dev`. Eso limpia la caché de Turbopack.
