const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('Task 6: 3D Magnetic Card Tilt & Touch Micro-Interactions and Footer', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(htmlPath, 'utf8');

  // 3D tilt logic
  assert.match(content, /requestAnimationFrame/i, 'Must use requestAnimationFrame for smooth 60fps tilt');
  assert.match(content, /rotateX/i, 'Must calculate rotateX');
  assert.match(content, /rotateY/i, 'Must calculate rotateY');
  assert.match(content, /perspective/i, 'Must have 3D perspective');

  // Footer
  assert.match(content, /©\s*2026\s+Roy\.\s*All\s+rights\s+reserved\./i, 'Must contain copyright 2026 Roy');
});
