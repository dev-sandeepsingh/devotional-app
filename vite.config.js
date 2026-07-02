import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_TARGET = process.env.VITE_API_PROXY_TARGET || 'http://localhost:4000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API calls to the separate backend so the admin panel can call it
    // same-origin in dev (avoids CORS). Override target via VITE_API_PROXY_TARGET.
    proxy: {
      '/api': {
        target: API_TARGET,
        changeOrigin: true,
        // When the backend isn't running, return a clean JSON 502 instead of letting
        // an unhandled ECONNREFUSED crash/spam the dev server.
        configure: (proxy) => {
          proxy.on('error', (err, _req, res) => {
            console.warn(`[vite proxy] cannot reach backend at ${API_TARGET} (${err.code || err.message}) — is it running?`)
            if (res && typeof res.writeHead === 'function' && !res.headersSent) {
              res.writeHead(502, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({
                error: { message: `Backend is not reachable at ${API_TARGET}. Please start the API server.` },
              }))
            }
          })
        },
      },
    },
  },
})
