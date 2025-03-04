import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['bright-cameras-say.loca.lt', 'localhost'], // 'localhost'도 포함되어 있어야 합니다.
  },
})
