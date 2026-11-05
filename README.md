# Nexia Core

Landing page de **Nexia Core**, empresa **ficticia** creada para un trabajo universitario (Gestión del Conocimiento). El souvenir de la empresa lleva un **código QR** que apunta a esta web, por eso debe estar en una URL pública y estable (GitHub → Vercel → QR).

## Qué incluye

Header fijo con menú móvil, portada con gráfico animado, quiénes somos (misión y visión), 5 fases del servicio, métricas con contador, carrusel de comentarios, formulario de opiniones, contacto, pie de página y botón flotante de WhatsApp. Los comentarios y cifras son ilustrativos.

## Tecnología

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · motion · lucide-react.

## Estructura

```
app/          layout, página, estilos, robots, sitemap, iconos
components/   secciones y piezas de la página
lib/config.js datos editables (WhatsApp, correo, redes...)
scripts/      generador de logo derivado (npm run brand)
docs/         guía de Google Sheets
public/       logo.png (provisional), og.png
```

## Ejecutar en local

```bash
npm install
cp .env.example .env   # y completa los valores
npm run dev
```

Abre http://localhost:3000. Para probar el build: detén el servidor, borra `.next` y ejecuta `npm run build && npm start`.

## Qué editar

`lib/config.js`: número de WhatsApp, teléfono, correo, ubicación y redes (vacío = "Próximamente").

## Formulario de opiniones

Variables de entorno (ver `.env.example`):

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access Key de Web3Forms. Si falta, el formulario abre WhatsApp con la opinión. |
| `NEXT_PUBLIC_SHEETS_URL` | Opcional. URL del Apps Script para guardar también en Google Sheets ([guía](docs/google-sheets.md)). |

El archivo `.env` no se sube al repositorio.

## Cómo poner el logo

`public/logo.png` es un **marcador provisional**. Reemplázalo por el logo definitivo (PNG transparente de al menos 1000 px de ancho, o SVG) y ejecuta:

```bash
npm run brand
```

Esto regenera `app/icon.png`, `app/apple-icon.png` y `public/og.png`.

## Desplegar en Vercel

1. Sube el repositorio a GitHub (de la persona dueña del proyecto).
2. En Vercel: **Add New → Project → Import → Deploy**.
3. En **Settings → Environment Variables** agrega las variables de la tabla y redespliega.
4. No cambies el nombre ni el dominio del proyecto después de imprimir el QR. Cada `git push` a `main` actualiza la web sin cambiar el QR.

## Regenerar el QR

Con la URL final, genera el QR con corrección de errores alta (H), módulos en `#26292C` sobre blanco, en PNG y SVG dentro de `qr/`. Tamaño mínimo impreso: 2 × 2 cm, sin invertir colores.
