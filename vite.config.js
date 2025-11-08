import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // ✅ important for correct asset paths on Render
  build: {
    outDir: 'dist', // default build output folder (Render expects this)
    assetsDir: 'assets', // keep assets organized
  },
  server: {
    port: 5173, // default dev port, optional
    open: true, // auto open in browser during dev
  },
})
