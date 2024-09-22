import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'dist',
  build: {
    minify: true,
    compress: true,
    splitting: true,
    chunkSizeWarningLimit: 2048,
    dynamicImportVars: true,
  },
})
