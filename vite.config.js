import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio2025/', // Remplace par le nom de ton dépôt
  plugins: [react()],
});
