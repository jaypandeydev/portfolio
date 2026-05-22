import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // react-snap prerenders with an older bundled Chromium that lacks
    // optional chaining / nullish coalescing — transpile down so it can run.
    target: "es2015",
  },
})
