import { mkdirSync, readdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
mkdirSync('dist', { recursive: true });
for (const file of readdirSync('.')) {
  if (/\.(html|js|css|mp4|ico|svg)$/.test(file) && file !== 'app.js') copyFileSync(file, join('dist', file));
}
copyFileSync('api.demo.json', 'dist/api.demo.json');
