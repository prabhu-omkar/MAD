#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// List of all modular app folders in the workspace
const apps = [
  { name: 'Calculator V1', dir: 'calculator_v1' },
  { name: 'Calculator V2 (Retro/Buttercream)', dir: 'calculator_v2' },
  { name: 'Calculator V3 (Cyber/Neon)', dir: 'calculator_v3' },
  { name: 'Chat V1 (React/Sender)', dir: 'chat_v1' },
  { name: 'Chat V2 (React/Dark Theme)', dir: 'chat_v2' },
  { name: 'Chat V3 (React/Sky Blue Theme)', dir: 'chat_v3' },
  { name: 'Weather V1', dir: 'weather_v1' },
  { name: 'Weather V2 (Warm Sand Theme)', dir: 'weather_v2' },
  { name: 'Weather V3 (Dark Slate Theme)', dir: 'weather_v3' },
  { name: 'Webpage V1 (Cookbook - Pure HTML/CSS)', dir: 'webpage_v1' },
  { name: 'Webpage V2 (Quiz - Pure HTML/CSS)', dir: 'webpage_v2' },
  { name: 'Webpage V3 (Survey Form - Pure HTML/CSS)', dir: 'webpage_v3' }
];

console.log('\n=======================================');
console.log('       MAD Modular Apps Launcher       ');
console.log('=======================================\n');
apps.forEach((app, idx) => {
  console.log(`${String(idx + 1).padStart(2, ' ')}. ${app.name}`);
});
console.log('');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Select an application to launch (1-12): ', (answer) => {
  const selection = parseInt(answer.trim(), 10) - 1;
  if (isNaN(selection) || selection < 0 || selection >= apps.length) {
    console.log('Invalid selection. Exiting.');
    rl.close();
    process.exit(1);
  }

  const selectedApp = apps[selection];
  const appPath = path.join(__dirname, selectedApp.dir);
  const PORT = process.env.PORT || 3000;

  const server = http.createServer((req, res) => {
    // Serve index.html as fallback for route path root
    let urlPath = req.url.split('?')[0];
    let filePath = path.join(appPath, urlPath === '/' ? 'index.html' : urlPath);

    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml'
    };
    const contentType = mimeTypes[ext] || 'text/plain';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1>', 'utf-8');
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  server.listen(PORT, () => {
    console.log(`\n🚀 Launched ${selectedApp.name}!`);
    console.log(`📡 Server running at http://localhost:${PORT}`);
    console.log('⌨️  Press Ctrl+C to stop');
  });

  rl.close();
});
