import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["40a713100a2b.ngrok-free.app"],
  },
  plugins: [react(), tailwindcss(), flowbiteReact()],
});
