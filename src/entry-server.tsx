import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

/**
 * Render del árbol de la app a HTML estático. Lo usa scripts/prerender.mjs
 * (Node puro, sin navegador) para inyectar el contenido en dist/index.html.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
