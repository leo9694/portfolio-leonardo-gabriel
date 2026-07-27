import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  publicDir: "public",
  build: {
    outDir: "public_html",
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
