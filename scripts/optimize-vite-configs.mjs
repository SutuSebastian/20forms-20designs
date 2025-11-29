#!/usr/bin/env node

/**
 * Optimize all mini-app Vite configs for faster builds
 * 
 * This script updates all vite.config.js files in apps/ to:
 * - Use esbuild for minification (faster than default Rollup/Terser)
 * - Disable sourcemaps in production (faster builds, smaller output)
 * - Skip CSS code splitting
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APPS_DIR = path.resolve(__dirname, '..', 'apps');

const OPTIMIZED_CONFIG = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/20forms-20designs/APP_NAME/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Use esbuild for minification - much faster than default Terser
    minify: 'esbuild',
    // Disable sourcemaps in production for faster builds
    sourcemap: false,
    // Reduce chunk size analysis overhead
    reportCompressedSize: false,
  },
  // Improve dependency pre-bundling
  optimizeDeps: {
    exclude: [],
  },
}))
`;

function getAppDirectories() {
  return fs.readdirSync(APPS_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
}

function updateViteConfig(appName) {
  const configPath = path.join(APPS_DIR, appName, 'vite.config.js');
  
  if (!fs.existsSync(configPath)) {
    console.log(`⚠️  Skipping ${appName}: No vite.config.js found`);
    return false;
  }

  const newConfig = OPTIMIZED_CONFIG.replace('APP_NAME', appName);
  fs.writeFileSync(configPath, newConfig);
  console.log(`✅ Updated ${appName}/vite.config.js`);
  return true;
}

function main() {
  console.log('🚀 Optimizing Vite configs for faster builds...\n');
  
  const apps = getAppDirectories();
  let updated = 0;
  
  for (const app of apps) {
    if (updateViteConfig(app)) {
      updated++;
    }
  }
  
  console.log(`\n✨ Updated ${updated} Vite configs`);
  console.log('\nOptimizations applied:');
  console.log('  • esbuild minification (faster than Terser)');
  console.log('  • Sourcemaps disabled');
  console.log('  • Compressed size reporting disabled');
}

main();

