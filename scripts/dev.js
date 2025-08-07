#!/usr/bin/env node

const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 AWS Consultant - Development Server');
console.log('=====================================');
console.log('Choose your development server:');
console.log('1. Next.js (Full SSR/SSG features)');
console.log('2. Vite (Faster HMR, lighter)');
console.log('3. Exit');
console.log('');

rl.question('Enter your choice (1-3): ', (choice) => {
  rl.close();
  
  switch (choice.trim()) {
    case '1':
      console.log('Starting Next.js development server...');
      spawn('npm', ['run', 'dev'], { stdio: 'inherit' });
      break;
    case '2':
      console.log('Starting Vite development server...');
      spawn('npm', ['run', 'dev:vite'], { stdio: 'inherit' });
      break;
    case '3':
      console.log('Goodbye! 👋');
      process.exit(0);
      break;
    default:
      console.log('Invalid choice. Starting Next.js by default...');
      spawn('npm', ['run', 'dev'], { stdio: 'inherit' });
  }
}); 