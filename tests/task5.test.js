const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('Task 5: Gaming Profiles & Clipboard Copy Toast Notification', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(htmlPath, 'utf8');

  // Section header
  assert.match(content, /Gaming\s+(IDs|Profiles)/i, 'Must have Gaming Profiles section');

  // Roblox & MLBB
  assert.match(content, /Roblox/i, 'Must have Roblox section/card');
  assert.match(content, /royyy289/, 'Must display Roblox username royyy289');
  assert.match(content, /Mobile Legends/i, 'Must have Mobile Legends card');
  assert.match(content, /mabar\?tag di discord/i, 'Must display MLBB ID slot');

  // Copy Buttons
  assert.match(content, /data-copy=["']royyy289["']/i, 'Must have copy button for Roblox');
  assert.match(content, /id=["']toast["']/i, 'Must have toast notification container');
  assert.match(content, /function\s+copyToClipboard|copyToClipboard\s*=/i, 'Must define copyToClipboard function');
  assert.match(content, /navigator\.clipboard\.writeText/i, 'Must use clipboard API');
});
