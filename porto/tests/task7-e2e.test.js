const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('Task 7: Comprehensive End-to-End Quality and Compliance Verification', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(htmlPath, 'utf8');

  // 1. Semantic Markup Validation
  assert.match(content, /<header[\s>]/i, 'Header tag must exist');
  assert.match(content, /<main[\s>]/i, 'Main tag must exist');
  assert.match(content, /<section[\s>]/i, 'Section tag must exist');
  assert.match(content, /<footer[\s>]/i, 'Footer tag must exist');
  assert.match(content, /<h1[\s>]/i, 'H1 display name must exist');
  assert.match(content, /<h2[\s>]/i, 'H2 card titles must exist');

  // 2. Open Graph & SEO completeness
  assert.match(content, /<meta property=["']og:title["']/i);
  assert.match(content, /<meta property=["']og:description["']/i);
  assert.match(content, /<meta property=["']og:image["']/i);
  assert.match(content, /<meta name=["']twitter:card["']/i);
  assert.match(content, /<meta name=["']theme-color["']/i);

  // 3. Accessibility Checks
  assert.match(content, /aria-label=/i, 'Icon buttons must have aria-label');
  assert.match(content, /alt=["']Foto Profil Roy["']/i, 'Avatar must have descriptive alt text');
  assert.match(content, /role=["']status["']/i, 'Toast must have role="status"');
  assert.match(content, /aria-live=["']polite["']/i, 'Toast must have aria-live="polite"');

  // 4. External Links Security
  const linkMatches = content.match(/<a [^>]*>/gi) || [];
  assert.ok(linkMatches.length >= 5, 'Must have at least 5 anchor links');
  linkMatches.forEach((tag) => {
    if (tag.includes('href="http')) {
      assert.match(tag, /target=["']_blank["']/, `Link ${tag} must have target="_blank"`);
      assert.match(tag, /rel=["'][^"']*noopener[^"']*["']/, `Link ${tag} must have rel="noopener noreferrer"`);
    }
  });

  // 5. JavaScript Syntax Parsing Verification
  const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let inlineScriptsFound = 0;
  while ((match = scriptRegex.exec(content)) !== null) {
    const code = match[1];
    if (code.trim().length > 0) {
      inlineScriptsFound++;
      assert.doesNotThrow(() => {
        new vm.Script(code);
      }, 'Inline JavaScript must parse without syntax errors');
    }
  }
  assert.ok(inlineScriptsFound >= 1, 'Must find inline scripts');
});
