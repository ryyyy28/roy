const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('Task 4: Social Media Links (Liquid Glass Cards)', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(htmlPath, 'utf8');

  // Verify social links exist
  assert.match(content, /https:\/\/www\.instagram\.com\/royyyy_28\//, 'Instagram URL missing');
  assert.match(content, /https:\/\/www\.tiktok\.com\/@rooyyy28/, 'TikTok URL missing');
  assert.match(content, /https:\/\/discord\.gg\/QPMtCZfHaS/, 'Discord URL missing');
  assert.match(content, /https:\/\/t\.me\/ryuuxien/, 'Telegram URL missing');
  assert.match(content, /https:\/\/wa\.me\//, 'WhatsApp URL missing');

  // Target blank and security attributes
  assert.match(content, /target=["']_blank["']/i, 'Must have target="_blank"');
  assert.match(content, /rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/i, 'Must have rel="noopener noreferrer"');

  // Card classes
  assert.match(content, /interactive-card/i, 'Cards must have interactive-card class');
});
