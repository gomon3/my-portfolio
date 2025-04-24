import { esbuildPlugin } from '@web/dev-server-esbuild';

// Configuración BASE (compartida)
const sharedConfig = {
  nodeResolve: true,
  plugins: [esbuildPlugin({ ts: true })], // Soporta TypeScript
  coverage: true, // Opcional: Reporte de cobertura
};

// Configuración para UNIT tests
export const unitConfig = {
  ...sharedConfig,
  files: ['test/unit/**/*.test.ts'], // Solo tests unitarios
};

// Configuración para INTEGRATION tests
export const integrationConfig = {
  ...sharedConfig,
  files: ['test/integration/**/*.test.ts'], // Solo tests de integración
};

// Exportamos por defecto UNIT (para compatibilidad)
export default unitConfig;