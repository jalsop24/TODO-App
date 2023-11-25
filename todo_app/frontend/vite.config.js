import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "templates",
  build: {
    // Relative to the root
    outDir: "../static/frontend",
  },
  plugins: [
    react({
      include: "**/*.{.jsx,tsx}",
    }),
  ],
});
