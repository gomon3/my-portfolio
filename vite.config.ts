import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  publicDir: 'public', // Directorio de archivos estáticos
  build: {
    outDir: 'dist', // Carpeta de salida para el build
    emptyOutDir: true, // Limpia el directorio antes de cada build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Punto de entrada principal
      }
    }
  },
  server: {
    port: 3000 // Puerto para el servidor de desarrollo
  }
});