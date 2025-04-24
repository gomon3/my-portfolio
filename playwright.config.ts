import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/e2e',       // Carpeta de tests E2E
  timeout: 30_000,             // Timeout por test (ms)
  fullyParallel: true,         // Ejecuta tests en paralelo
  webServer: {                 // Inicia tu servidor de desarrollo
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
});