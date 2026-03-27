#!/usr/bin/env node
/**
 * OG Image Generator
 *
 * Takes screenshots of the OG template in light and dark themes,
 * producing the shareable images used for Open Graph meta tags.
 *
 * Usage: node scripts/og/generate.mjs
 * Output: docs/public/og-image.png, docs/public/og-dark.png, docs/public/og-light.png
 */

import { createServer } from 'node:http';
import { readFileSync, copyFileSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const OUTPUT_DIR = resolve(ROOT, 'docs/public');

const WIDTH = 1200;
const HEIGHT = 630;

const MIME_TYPES = {
  '.html': 'text/html',
  '.json': 'application/json',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

/** Minimal static file server for the project root */
function startServer() {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, 'http://localhost');
      const filePath = resolve(ROOT, '.' + url.pathname);

      try {
        const data = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, {
          'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      resolvePromise({ server, port });
    });
  });
}

async function generate() {
  let puppeteer;
  try {
    puppeteer = await import('puppeteer');
  } catch {
    console.error('puppeteer is not installed. Run: npm install -D puppeteer');
    process.exit(1);
  }

  // Start local server so Lottie can fetch the animation JSON
  const { server, port } = await startServer();
  console.log(`Local server on port ${port}`);

  const browser = await puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const variants = [
    { theme: 'dark', output: 'og-dark.png' },
    { theme: 'light', output: 'og-light.png' },
  ];

  for (const { theme, output } of variants) {
    console.log(`Generating ${output}...`);

    const page = await browser.newPage();
    await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });

    const url = `http://127.0.0.1:${port}/scripts/og/template.html?theme=${theme}&animation=http://127.0.0.1:${port}/docs/public/animations/design-to-specs.json`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

    // Wait for Lottie to render (or timeout)
    await page.waitForFunction('window.__OG_READY === true', { timeout: 15000 }).catch(() => {
      console.warn(`  Warning: Lottie may not have loaded for ${theme} theme`);
    });

    // Extra pause for font rendering and canvas paint
    await new Promise(r => setTimeout(r, 1000));

    const outputPath = resolve(OUTPUT_DIR, output);
    await page.screenshot({ path: outputPath, type: 'png' });
    console.log(`  Saved: ${outputPath}`);

    await page.close();
  }

  // Copy dark variant as the default og-image.png (dark is the default site theme)
  copyFileSync(resolve(OUTPUT_DIR, 'og-dark.png'), resolve(OUTPUT_DIR, 'og-image.png'));
  console.log(`  Copied og-dark.png -> og-image.png (default OG image)`);

  await browser.close();
  server.close();
  console.log('Done! Generated OG images in docs/public/');
}

generate().catch(err => {
  console.error('Failed to generate OG images:', err);
  process.exit(1);
});
