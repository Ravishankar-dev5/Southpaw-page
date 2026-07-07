import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Repo name — required so assets load correctly on GitHub Pages
  base: '/Southpaw-page/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
