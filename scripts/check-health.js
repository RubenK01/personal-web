#!/usr/bin/env node

const http = require('http');
const { spawn, execSync } = require('child_process');

console.log('🏥 Health Check - AWS Consultant');
console.log('================================');

// Función para verificar si un puerto está disponible
function checkPort(port) {
  return new Promise((resolve) => {
    const server = http.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on('error', () => resolve(false));
  });
}

// Función para hacer una petición HTTP
function makeRequest(url) {
  return new Promise((resolve) => {
    const request = http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    request.on('error', () => resolve({ status: 0, data: '' }));
    request.setTimeout(5000, () => {
      request.abort();
      resolve({ status: 0, data: '' });
    });
  });
}

// Función para verificar procesos en ejecución
function checkProcesses() {
  console.log('\n🔍 Checking running processes...');
  
  try {
    const processes = execSync('ps aux | grep -E "(vite|next)" | grep -v grep', { encoding: 'utf8' });
    if (processes.trim()) {
      console.log('✅ Development servers found:');
      processes.split('\n').filter(line => line.trim()).forEach(line => {
        const parts = line.split(/\s+/);
        const pid = parts[1];
        const command = parts.slice(10).join(' ');
        if (command.includes('vite')) {
          console.log(`   🚀 Vite (PID: ${pid})`);
        } else if (command.includes('next')) {
          console.log(`   ⚛️  Next.js (PID: ${pid})`);
        }
      });
    } else {
      console.log('⚠️  No development servers running');
    }
  } catch (error) {
    console.log('⚠️  Could not check processes');
  }
}

// Función para verificar la salud del servidor
async function checkServerHealth() {
  console.log('\n🌐 Checking server health...');
  
  const port = 3000;
  const isPortOccupied = !(await checkPort(port));
  
  if (isPortOccupied) {
    console.log(`✅ Port ${port} is in use`);
    
    const response = await makeRequest(`http://localhost:${port}`);
    if (response.status === 200) {
      console.log('✅ Server is responding correctly');
      
      // Verificar si es Vite o Next.js
      if (response.data.includes('<!DOCTYPE html>')) {
        if (response.data.includes('vite')) {
          console.log('🚀 Detected: Vite development server');
        } else {
          console.log('⚛️  Detected: Next.js development server');
        }
      }
    } else {
      console.log(`❌ Server error (Status: ${response.status})`);
    }
  } else {
    console.log(`❌ Port ${port} is not in use`);
  }
}

// Función para verificar archivos de configuración
function checkConfigFiles() {
  console.log('\n⚙️  Checking configuration files...');
  
  const configFiles = [
    { file: 'package.json', required: true },
    { file: 'next.config.js', required: true },
    { file: 'vite.config.ts', required: true },
    { file: 'tailwind.config.js', required: true },
    { file: 'tsconfig.json', required: true },
    { file: 'index.html', required: true },
    { file: 'src/main.tsx', required: true },
    { file: 'src/App.tsx', required: true },
  ];
  
  const fs = require('fs');
  configFiles.forEach(({ file, required }) => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`${required ? '❌' : '⚠️'} ${file} ${required ? '(required)' : '(optional)'}`);
    }
  });
}

// Función para mostrar recomendaciones
function showRecommendations() {
  console.log('\n💡 Recommendations:');
  console.log('===================');
  console.log('• For fastest development: npm run dev:vite');
  console.log('• For full features: npm run dev');
  console.log('• To switch servers: npm run dev:choose');
  console.log('• To check performance: npm run performance');
  console.log('• To optimize project: npm run optimize');
  
  console.log('\n🔧 Troubleshooting:');
  console.log('===================');
  console.log('• If CSS errors: Check @import order in globals.css');
  console.log('• If TypeScript errors: Run npm run type-check');
  console.log('• If slow builds: Try npm run optimize');
  console.log('• If port conflicts: Kill processes with pkill -f "vite\\|next"');
}

// Función principal
async function runHealthCheck() {
  console.log('Starting health check...\n');
  
  checkProcesses();
  await checkServerHealth();
  checkConfigFiles();
  showRecommendations();
  
  console.log('\n✅ Health check complete!');
  console.log('\n🚀 Your AWS Consultant landing page is ready for development!');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  runHealthCheck().catch(console.error);
}

module.exports = { runHealthCheck }; 