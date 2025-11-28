import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  optimizeDeps: {
    exclude: ["react-vertical-timeline-component"],
  },

  assetsInclude: ["**/*.gltf", "**/*.glb"], // 🟢 IMPORTANT for 3D models
  
  server: {
    host: true,     // 🟢 Needed for mobile testing on your hotspot
  },
});
