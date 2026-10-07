const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('Task 3: Theme Switching System & Header Profile Component', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(htmlPath, 'utf8');

  // Theme toggle button
  assert.match(content, /id=["']theme-toggle["']/i, 'Must have theme-toggle button');
  assert.match(content, /data-lucide=["'](sun|moon)["']/i, 'Must have sun/moon Lucide icon for theme');

  // Header profile
  assert.match(content, /Roy/i, 'Must display name Roy');
  assert.match(content, /Creative Multimedia & Visual Creator/i, 'Must display tagline');
  assert.match(content, /Kreator konten visual yang berfokus pada multimedia dan teknologi, berpengalaman dalam desain grafis, fotografi, serta videografi dan editor video\./i, 'Must display full bio text');

  // Theme logic in JS
  assert.match(content, /localStorage\.getItem\(['"]theme['"]\)/i, 'Must check localStorage for theme');
  assert.match(content, /localStorage\.setItem\(['"]theme['"]/i, 'Must save theme to localStorage');
  assert.match(content, /prefers-color-scheme/i, 'Must check system prefers-color-scheme');
});
