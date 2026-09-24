import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  // PostCSS не используется. Явный пустой конфиг отключает поиск postcss.config
  // вверх по родительским каталогам — иначе сборка падает там, где их нельзя читать.
  css: {
    postcss: {},
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
