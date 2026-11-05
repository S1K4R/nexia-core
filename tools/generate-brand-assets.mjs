// Regenera favicon, apple-icon e imagen para compartir.
//  - public/logo-icon.png : ícono cuadrado (favicon y apple-icon)
//  - public/logo.png      : logo principal (imagen para compartir); si no existe usa el ícono
import sharp from "sharp";
import { existsSync } from "node:fs";

const icon = "public/logo-icon.png";
const main = existsSync("public/logo.png") ? "public/logo.png" : icon;
if (!existsSync(icon)) throw new Error("Falta public/logo-icon.png");

const fit = (src, w, h) =>
  sharp(src).resize(w, h, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

await sharp(await fit(icon, 256, 256)).toFile("app/icon.png");
await sharp({ create: { width: 180, height: 180, channels: 4, background: "#ffffff" } })
  .composite([{ input: await fit(icon, 150, 150), gravity: "center" }])
  .png().toFile("app/apple-icon.png");
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#ffffff" } })
  .composite([{ input: await fit(main, 1000, 450), gravity: "center" }])
  .png().toFile("public/og.png");

console.log("Listo: app/icon.png, app/apple-icon.png, public/og.png");
