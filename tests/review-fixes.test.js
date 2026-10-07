const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('Final Review Fixes: Animation lock removal, WCAG contrast, Focus rings, Tilt optimizations', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(htmlPath, 'utf8');

  // 1. Critical: Animation lock removal on animationend
  assert.match(content, /animationend/i, 'Must have animationend listener to release transform lock');

  // 2. Important: WCAG AA Light Mode contrast
  assert.match(content, /text-cyan-800/i, 'Must use darker cyan in light mode for WCAG AA');
  assert.match(content, /text-amber-800/i, 'Must use darker amber in light mode for WCAG AA');
  assert.match(content, /text-red-700/i, 'Must use darker red in light mode for WCAG AA');

  // 3. Important: Focus visible rings for accessibility
  assert.match(content, /focus-visible:ring-cyan-400/i, 'Cards and buttons must have focus visible rings');

  // 4. Important: Tactile active scale on cards
  assert.match(content, /active:scale-\[0\.98\]/i, 'Cards must have tactile active scale feedback');

  // 5. Important: Tilt transition handling (transition = none on hover, cached rect)
  assert.match(content, /card\.style\.transition\s*=\s*['"]none['"]/i, 'Must disable transition during cursor tracking for 1:1 response');
});
