import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // 👇  print every warning in full
        console.warn('ROLLUP WARNING:', warning)
        warn(warning)
      },
    },
  },
})
