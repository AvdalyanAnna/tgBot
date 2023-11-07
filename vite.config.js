import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
  },
  resolve: {
    symlinks: false,
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '../'
  : './'
})
