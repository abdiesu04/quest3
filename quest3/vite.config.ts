import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Disable ESLint during build
      jsxRuntime: 'automatic',
      fastRefresh: true,
      babel: {
        plugins: [],
      }
    }),
  ],
  build: {
    // Disable type checking during build
    sourcemap: true,
    minify: 'terser',
    // Don't fail on warning
    reportCompressedSize: false,
  }
})
