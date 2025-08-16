import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/types': path.resolve(__dirname, './src/types'),
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    // Optimizaciones para desarrollo más rápido
    hmr: {
      overlay: false,
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          lucide: ['lucide-react'],
        },
      },
    },
    // Optimizaciones para build más rápido
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    // Pre-bundling optimizado
    force: true,
  },
  css: {
    devSourcemap: true,
    // Optimización de Tailwind
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  // Optimizaciones adicionales
  esbuild: {
    target: 'esnext',
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    'process.env.NEXT_PUBLIC_CONTACT_EMAIL': JSON.stringify(process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'rcasadodev@gmail.com'),
    'process.env.NEXT_PUBLIC_CONTACT_PHONE': JSON.stringify(process.env.NEXT_PUBLIC_CONTACT_PHONE || '+34664656038'),
  },
}) 