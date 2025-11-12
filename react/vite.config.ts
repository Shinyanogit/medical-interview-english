import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 相対パスでビルド資産を参照（dist/index.htmlを直接開きやすくする）
  base: './',
});
