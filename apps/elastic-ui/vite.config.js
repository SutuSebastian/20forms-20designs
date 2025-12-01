import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/20forms-20designs/elastic-ui/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['@elastic/eui'],
  },
  // Fix for EUI's dynamic icon imports
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      // Don't modify CSS or HTML references
      if (hostType === 'css' || hostType === 'html') {
        return { relative: true }
      }
      // For JS dynamic imports, use relative paths
      return { relative: true }
    },
  },
}))
