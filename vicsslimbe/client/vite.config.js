import { defineConfig } from "vite";

export default defineConfig({
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
  }
});
