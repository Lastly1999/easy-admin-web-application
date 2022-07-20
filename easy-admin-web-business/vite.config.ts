import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun';

const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true
  },
  base: "/",
  plugins: [react(), qiankun("business", {
    useDevMode
  })]
})
