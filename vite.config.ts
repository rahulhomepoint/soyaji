import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  server: {
    allowedHosts: ["40a713100a2b.ngrok-free.app"],
  },
  plugins: [
    react(),
    tailwindcss(),
    flowbiteReact(),
    command === "build"
      ? viteImagemin({
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false,
          },
          mozjpeg: {
            quality: 72,
          },
          pngquant: {
            quality: [0.65, 0.8],
            speed: 4,
          },
          svgo: {
            plugins: [
              {
                name: "removeViewBox",
              },
              {
                name: "removeEmptyAttrs",
                active: false,
              },
            ],
          },
          webp: {
            quality: 72,
          },
        })
      : null,
  ].filter(Boolean),
  build: {
    assetsInlineLimit: 4096,
  },
}));
