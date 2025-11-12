import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction ? '/medical-interview-english/' : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
