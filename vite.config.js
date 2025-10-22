import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // ✅ Tell Rollup not to try bundling the Tailwind plugin
      external: ['@tailwindcss/vite'],
    },
  },
})
