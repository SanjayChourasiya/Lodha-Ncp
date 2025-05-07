import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  plugins: [tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://valueproperties.tranquilcrmone.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
