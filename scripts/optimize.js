#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Performance Optimizer - AWS Consultant');
console.log('=========================================');

// Función para limpiar caches
function cleanCaches() {
  console.log('🧹 Cleaning caches...');
  
  const dirsToClean = [
    '.next',
    'dist',
    'out',
    'node_modules/.cache',
    '.vite'
  ];
  
  dirsToClean.forEach(dir => {
    if (fs.existsSync(dir)) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
        console.log(`✅ Cleaned ${dir}`);
      } catch (error) {
        console.log(`⚠️  Could not clean ${dir}: ${error.message}`);
      }
    }
  });
}

// Función para optimizar dependencias
function optimizeDependencies() {
  console.log('\n📦 Optimizing dependencies...');
  
  try {
    // Reinstalar dependencias limpias
    execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
    console.log('✅ Removed old dependencies');
    
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Reinstalled dependencies');
    
    // Pre-bundle con Vite
    execSync('npx vite build --mode development', { stdio: 'pipe' });
    console.log('✅ Pre-bundled with Vite');
    
  } catch (error) {
    console.log(`❌ Error optimizing dependencies: ${error.message}`);
  }
}

// Función para analizar bundle
function analyzeBundle() {
  console.log('\n📊 Analyzing bundle...');
  
  try {
    // Build de producción
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Production build completed');
    
    // Analizar tamaño del bundle
    const outPath = path.join(__dirname, '../out');
    if (fs.existsSync(outPath)) {
      const size = getFolderSize(outPath);
      console.log(`📦 Bundle size: ${formatBytes(size)}`);
      
      if (size > 1024 * 1024) { // 1MB
        console.log('⚠️  Bundle is large. Consider optimization.');
      } else {
        console.log('✅ Bundle size is optimal');
      }
    }
    
  } catch (error) {
    console.log(`❌ Error analyzing bundle: ${error.message}`);
  }
}

// Función para obtener el tamaño de una carpeta
function getFolderSize(folderPath) {
  let size = 0;
  
  function calculateSize(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        calculateSize(filePath);
      } else {
        size += stat.size;
      }
    });
  }
  
  calculateSize(folderPath);
  return size;
}

// Función para formatear bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Función para generar recomendaciones
function generateRecommendations() {
  console.log('\n🎯 Optimization Recommendations:');
  console.log('================================');
  console.log('1. Use Vite for development (faster HMR)');
  console.log('2. Use Next.js for production (better SEO)');
  console.log('3. Enable gzip compression on server');
  console.log('4. Use CDN for static assets');
  console.log('5. Implement lazy loading for images');
  console.log('6. Consider using React.lazy() for code splitting');
  console.log('7. Optimize images with next/image');
  console.log('8. Use Tailwind JIT mode for faster builds');
}

// Función principal
async function optimize() {
  console.log('Starting optimization process...\n');
  
  // Limpiar caches
  cleanCaches();
  
  // Optimizar dependencias
  optimizeDependencies();
  
  // Analizar bundle
  analyzeBundle();
  
  // Generar recomendaciones
  generateRecommendations();
  
  console.log('\n✅ Optimization complete!');
  console.log('\n🚀 Ready for fast development:');
  console.log('   npm run dev:vite     # Ultra-fast development');
  console.log('   npm run dev:choose   # Interactive selection');
  console.log('   npm run dev          # Full Next.js features');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  optimize().catch(console.error);
}

module.exports = { optimize }; 