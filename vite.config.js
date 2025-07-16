import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(_ => ({
    plugins: [react()],
    build: {
        lib: {
            name: 'React19 Loading',
            formats: ['es'],
            entry: [
                resolve(__dirname, 'lib', 'react-loading.jsx'),
            ],
            fileName: (format, entryName) => `${entryName}.${format}.js`,
        },
        rollupOptions: {
            external: ['react'],
        },
    },
}))