import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { builtinModules } from 'module'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // ✅ Externalize Node core modules + Tailwind plugin
      external: [
        '@tailwindcss/vite',
        ...builtinModules,
      ],
    },
  },
  resolve: {
    alias: {
      fs: false,
      path: false,
      os: false,
      url: false,
      crypto: false,
    },
  },
})
