// Regenera favicon, apple-icon e imagen para compartir a partir de public/logo.png
import sharp from "sharp";
import { existsSync } from "node:fs";

const src = "public/logo.png";
if (!existsSync(src)) throw new Error("Falta public/logo.png");

const logo = (size) =>
  sharp(src).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

await sharp(await logo(256)).toFile("app/icon.png");
await sharp({ create: { width: 180, height: 180, channels: 4, background: "#ffffff" } })
  .composite([{ input: await logo(150), gravity: "center" }])
  .png().toFile("app/apple-icon.png");
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#E5E8EB" } })
  .composite([{ input: await logo(420), gravity: "center" }])
  .png().toFile("public/og.png");

console.log("Listo: app/icon.png, app/apple-icon.png, public/og.png");
