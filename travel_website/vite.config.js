import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.gohanworld.com',
      outDir: 'dist',
      generateRobotsTxt: false
    })
  ]
})