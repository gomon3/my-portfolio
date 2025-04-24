import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'ES2020'
  },
  optimizeDeps: {
    exclude: ['lit']
  }
});