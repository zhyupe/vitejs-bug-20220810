import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: []
    },
    rollupOptions: {
      // this would throw error on build
      external: ['lodash'],

      // this is fine
      // external: [
      //   'lodash', 
      //   'lodash/debounce', 
      //   'lodash/throttle',
      //   'lodash/isEqual',
      // ]
    },
  },
  // enable esbuild pre-compile on build
  optimizeDeps: {
    disabled: false
  }
})
