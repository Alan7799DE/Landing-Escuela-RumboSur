/**
 * Prerender de la landing (SPA) a HTML estático — Node puro, sin navegador.
 *
 * Corre DESPUÉS de `vite build` (cliente) y `vite build --ssr` (servidor).
 * Toma la función render() del bundle SSR, genera el HTML de la app y lo
 * inyecta en el <div id="root"> de dist/index.html. Así los buscadores y los
 * previews reciben el contenido completo sin ejecutar JavaScript.
 *
 * En el cliente se sigue usando createRoot: el HTML prerenderizado es para SEO
 * y first-paint; React monta limpio encima. No requiere Chromium, por lo que
 * funciona en cualquier entorno de build (Vercel, Netlify, CI, etc.).
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distIndex = path.join(root, "dist", "index.html");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

async function main() {
  const template = await readFile(distIndex, "utf-8");
  const { render } = await import(pathToFileURL(serverEntry).href);

  const appHtml = render("/");
  if (!appHtml.includes("Nuestra comunidad")) {
    throw new Error("El HTML renderizado no contiene el contenido esperado.");
  }

  const rootDiv = /<div id="root">\s*<\/div>/;
  if (!rootDiv.test(template)) {
    throw new Error('No se encontró <div id="root"></div> en dist/index.html.');
  }

  const html = template.replace(rootDiv, `<div id="root">${appHtml}</div>`);
  await writeFile(distIndex, html, "utf-8");
  console.log(`✓ Prerender OK — dist/index.html reescrito (${(html.length / 1024).toFixed(1)} KB)`);
}

main().catch((e) => {
  console.error("✗ Prerender falló:", e.message);
  process.exit(1);
});
