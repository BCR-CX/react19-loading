import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(_ => ({
  plugins: [react()],
  build: {
    lib: {
      name: 'React Loading',
      entry:  resolve(__dirname, 'lib', 'react-loading.jsx'),
      formats: ['es'],
      fileName: _ => `react-loading.jsx`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
}))
