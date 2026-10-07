const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('Task 2: Ambient Glowing Liquid Background System', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(htmlPath, 'utf8');

  assert.match(content, /id=["']ambient-bg["']/i, 'Must have ambient-bg container');
  assert.match(content, /orb-1/i, 'Must have orb-1 animation/class');
  assert.match(content, /orb-2/i, 'Must have orb-2 animation/class');
  assert.match(content, /orb-3/i, 'Must have orb-3 animation/class');
  assert.match(content, /@keyframes floatOrb1/, 'Must define floatOrb1 keyframes');
  assert.match(content, /@keyframes floatOrb2/, 'Must define floatOrb2 keyframes');
  assert.match(content, /@keyframes floatOrb3/, 'Must define floatOrb3 keyframes');
  assert.match(content, /backdrop-filter:\s*blur/i, 'Must define backdrop-filter blur');
  assert.match(content, /-webkit-backdrop-filter:\s*blur/i, 'Must define webkit backdrop-filter');
});
