import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages publishes project sites under /<repository>/.
  // Keep local/EdgeOne deployments at / while allowing Actions to inject the repo path.
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
