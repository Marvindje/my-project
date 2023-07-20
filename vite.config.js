import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Importer les plugins PostCSS de manière asynchrone
const tailwindcss = import('tailwindcss')
const autoprefixer = import('autoprefixer')

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})
