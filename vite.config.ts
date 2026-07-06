import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // manualChunks solo en el build del cliente: en SSR React es externo y
    // rollup no permite meterlo en un chunk manual.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // Separa el vendor de React en un chunk propio para mejorar el cacheo.
            manualChunks: {
              "react-vendor": ["react", "react-dom", "react-router-dom"],
            },
          },
        },
  },
}));
