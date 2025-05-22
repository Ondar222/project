import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import path from 'path' // Для работы с путями

export default defineConfig({
  plugins: [react()],
  base: './', // Важно для корректных путей на хостинге
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Алиас для удобных импортов
    },
  },
  build: {
    outDir: 'dist', // Явно указываем папку сборки
    emptyOutDir: true, // Очищаем папку перед сборкой
    sourcemap: false, // Отключаем для production
    chunkSizeWarningLimit: 1000, // Увеличиваем лимит предупреждений
  },
  server: {
    port: 3000, // Порт для dev-сервера
    open: true, // Автооткрытие браузера
  }
})