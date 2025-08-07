#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Performance Monitor - AWS Consultant');
console.log('=======================================');

// Función para medir el tiempo de build
function measureBuildTime(command, name) {
  console.log(`\n📊 Measuring ${name} build time...`);
  const start = Date.now();
  
  try {
    execSync(command, { stdio: 'pipe' });
    const end = Date.now();
    const duration = (end - start) / 1000;
    console.log(`✅ ${name} build completed in ${duration.toFixed(2)}s`);
    return duration;
  } catch (error) {
    console.log(`❌ ${name} build failed`);
    return null;
  }
}

// Función para medir el tamaño del bundle
function measureBundleSize() {
  const distPath = path.join(__dirname, '../dist');
  const outPath = path.join(__dirname, '../out');
  
  if (fs.existsSync(distPath)) {
    const size = getFolderSize(distPath);
    console.log(`📦 Vite bundle size: ${formatBytes(size)}`);
  }
  
  if (fs.existsSync(outPath)) {
    const size = getFolderSize(outPath);
    console.log(`📦 Next.js bundle size: ${formatBytes(size)}`);
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

// Ejecutar mediciones
async function runPerformanceTests() {
  console.log('Starting performance tests...\n');
  
  // Medir tiempo de build de Vite
  const viteTime = measureBuildTime('npm run build:vite', 'Vite');
  
  // Medir tiempo de build de Next.js
  const nextTime = measureBuildTime('npm run build', 'Next.js');
  
  // Medir tamaños de bundle
  console.log('\n📦 Bundle Size Analysis:');
  measureBundleSize();
  
  // Comparar resultados
  if (viteTime && nextTime) {
    console.log('\n📊 Comparison:');
    const difference = ((nextTime - viteTime) / nextTime * 100).toFixed(1);
    if (viteTime < nextTime) {
      console.log(`✅ Vite is ${difference}% faster than Next.js`);
    } else {
      console.log(`⚠️  Next.js is ${Math.abs(difference)}% faster than Vite`);
    }
  }
  
  console.log('\n🎯 Recommendations:');
  console.log('- Use Vite for faster development iterations');
  console.log('- Use Next.js for production builds with SSR/SSG');
  console.log('- Monitor bundle sizes regularly');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  runPerformanceTests().catch(console.error);
}

module.exports = { runPerformanceTests }; 