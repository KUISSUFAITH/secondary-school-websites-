import { defineConfig } from "vite";

export default defineConfig({
<<<<<<< HEAD
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true
=======
  esbuild: {
    jsxInject: `import React from "react"`
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    }
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
  }
});
