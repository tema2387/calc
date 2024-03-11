import { defineConfig } from 'vite';

export default defineConfig({
  base: "/calc",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `main.js`,
        assetFileNames: `assets/style.css`,
      },
    }
  }
});