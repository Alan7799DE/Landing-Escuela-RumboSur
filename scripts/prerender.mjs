/**
 * Prerender de la landing (SPA) a HTML estático.
 *
 * Corre DESPUÉS de `vite build`. Levanta un servidor estático mínimo sobre
 * `dist/`, carga la página en Chromium (puppeteer) para que resuelvan los
 * componentes cargados con React.lazy, y reescribe `dist/index.html` con el
 * HTML ya renderizado. Así los buscadores y los previews de redes reciben el
 * contenido completo sin depender de ejecutar JavaScript.
 *
 * En el cliente se sigue usando createRoot (no hydrate): el HTML prerenderizado
 * es para SEO y first-paint; React monta limpio encima.
 */
import http from "node:http";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    let filePath = path.join(DIST, urlPath);
    // SPA fallback: rutas sin extensión → index.html
    if (!path.extname(filePath)) filePath = path.join(DIST, "index.html");
    try {
      await stat(filePath);
    } catch {
      filePath = path.join(DIST, "index.html");
    }
    const body = await readFile(filePath);
    res.setHeader("Content-Type", MIME[path.extname(filePath)] || "application/octet-stream");
    res.end(body);
  } catch (e) {
    res.statusCode = 500;
    res.end(String(e));
  }
});

async function main() {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const base = `http://localhost:${port}/`;

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  try {
    const page = await browser.newPage();
    await page.goto(base, { waitUntil: "networkidle0", timeout: 45000 });
    // Espera a que las secciones lazy (hasta el final de la página) estén montadas.
    await page.waitForSelector("#contacto", { timeout: 20000 });
    await page.waitForSelector("footer", { timeout: 20000 });

    let html = await page.content();
    if (!html.includes("Nuestra comunidad")) {
      throw new Error("El HTML prerenderizado no contiene el contenido esperado.");
    }
    html = `<!doctype html>\n<!-- prerendered -->\n${html.replace(/^<!doctype html>/i, "").trim()}`;
    await writeFile(path.join(DIST, "index.html"), html, "utf-8");
    console.log(`✓ Prerender OK — dist/index.html reescrito (${(html.length / 1024).toFixed(1)} KB)`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((e) => {
  console.error("✗ Prerender falló:", e.message);
  server.close();
  process.exit(1);
});
