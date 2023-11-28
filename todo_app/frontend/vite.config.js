import { defineConfig, loadEnv } from "vite";
import { resolve, join } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig((mode) => {
  const env = loadEnv(mode, "..", "");

  const INPUT_DIR = "src";
  const OUTPUT_DIR = join("./static/", env.STATIC_URL_PREFIX);

  return {
    root: resolve(INPUT_DIR),
    base: "/static/" + env.STATIC_URL_PREFIX,
    resolve: {
      alias: {
        "@": resolve(INPUT_DIR),
      },
    },
    build: {
      manifest: true,
      emptyOutDir: true,
      // Relative to the root
      outDir: resolve(OUTPUT_DIR),
      rollupOptions: {
        input: {
          index: join(INPUT_DIR, "/index.js"),
          css: join(INPUT_DIR, "/css/index.css"),
        },
      },
    },
    server: {
      host: "localhost",
      port: env.VITE_PORT,
    },
    plugins: [
      react({
        include: "**/*.{.jsx,tsx}",
      }),
    ],
  };
});
