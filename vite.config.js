import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['index.html', 'public/404.html'],
  },
  plugins: [react()],
})
