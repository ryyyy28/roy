const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('Task 1: HTML Skeleton, Head Meta, and Asset Imports', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'index.html should exist');

  const content = fs.readFileSync(htmlPath, 'utf8');
  assert.match(content, /<!DOCTYPE html>/i, 'Must have doctype html');
  assert.match(content, /<html/i, 'Must have html tag');
  assert.match(content, /<meta charset=["']UTF-8["']/i, 'Must specify UTF-8 charset');
  assert.match(content, /<meta name=["']viewport["']/i, 'Must specify viewport');
  assert.match(content, /<meta property=["']og:title["']/i, 'Must have OG title');
  assert.match(content, /cdn\.tailwindcss\.com/, 'Must import Tailwind CSS CDN');
  assert.match(content, /unpkg\.com\/lucide/, 'Must import Lucide Icons CDN');
  assert.match(content, /fonts\.googleapis\.com.*Plus\+Jakarta\+Sans/i, 'Must import Plus Jakarta Sans font');
  assert.match(content, /tailwind\.config\s*=/i, 'Must configure Tailwind CSS');
});
