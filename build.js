import fs from 'fs';
import path from 'path';

fs.mkdirSync('build', { recursive: true });
fs.copyFileSync('src/server.js', 'build/server.js');
fs.cpSync('public', 'build/public', { recursive: true });

console.log('Build completed.');
