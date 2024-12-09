import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dubey123-sqw34.ondigitalocean.app/', // Backend API URL
        changeOrigin: true,
        secure: false, // Set to false for self-signed certificates
      },
    },
  },
});
