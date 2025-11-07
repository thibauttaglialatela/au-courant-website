import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  base: '/au-courant-website/',
  build: {
    outDir: 'dist',
  },
})
