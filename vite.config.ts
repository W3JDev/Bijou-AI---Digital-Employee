import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // SECURITY: API keys moved to backend proxy - no client exposure
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.VITE_PUBLIC_SITE_URL': JSON.stringify(env.VITE_PUBLIC_SITE_URL || 'https://mybijou.xyz')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
