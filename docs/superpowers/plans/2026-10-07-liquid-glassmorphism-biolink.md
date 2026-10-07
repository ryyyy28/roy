# Modern Liquid Glassmorphism Bio-Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance, single-page interactive personal bio-link and portfolio website with a Modern Liquid Glassmorphism aesthetic for "Roy".

**Architecture:** Single-file architecture (`index.html`) utilizing semantic HTML5, CDN-delivered Tailwind CSS with custom theme extensions, Lucide SVG icons, and hardware-accelerated CSS/JS for liquid glass backdrop filtering, moving ambient glowing orbs, 3D magnetic card tilt, and interactive clipboard toast notifications.

**Tech Stack:** HTML5, CSS3 (Backdrop-filter, 3D Transforms, Keyframe Animations), Tailwind CSS CDN, Lucide Icons CDN, Vanilla JavaScript (requestAnimationFrame, Clipboard API, localStorage).

**Spec:** `docs/superpowers/specs/2026-10-07-liquid-glassmorphism-biolink-design.md`

## Global Constraints
- Target deliverable is a self-contained, high-performance `index.html`.
- Must run cleanly in any modern web browser without build steps.
- Dark mode must default or synchronize with system `prefers-color-scheme`, saved to `localStorage`.
- All interactive cards must run at 60fps with zero layout stutter or jank.
- Social links: Instagram (`https://www.instagram.com/royyyy_28/`), TikTok (`https://www.tiktok.com/@rooyyy28`), Discord (`https://discord.gg/QPMtCZfHaS`), Telegram (`https://t.me/ryuuxien`), WhatsApp (`https://wa.me/6281234567890`).
- Gaming IDs: Roblox (`royyy289`), MLBB placeholder (`123456789 (2026)`), both with copy toast feedback.

## Review Focus
1. Backdrop filter browser compatibility: Ensure `-webkit-backdrop-filter` is applied alongside `backdrop-filter`.
2. Responsive overflow: Ensure glowing ambient orbs do not cause horizontal scrollbars (`overflow-x-hidden`).
3. Clipboard API fallback: Support secure context `navigator.clipboard` with textarea fallback for non-HTTPS local file testing.
4. Smooth 60fps tilt reset: Ensure cards smoothly interpolate back to neutral rotation when cursor leaves.
5. Contrast ratio accessibility: Ensure text remains crisp and readable (WCAG AA) in both dark and light modes.

---

### Task 1: HTML Skeleton, Head Meta, and Asset Imports

**Files:**
- Create: `index.html`

**Interfaces:**
- Produces: Base HTML5 structure with Open Graph meta tags, Tailwind CSS CDN with configuration script, Google Fonts (Inter, Plus Jakarta Sans), Lucide icons script.

- [ ] **Step 1: Write HTML5 base markup with SEO/OG meta and CDN tags**
Add charset, viewport, SEO description, Open Graph tags, font link, Tailwind CDN, and Lucide CDN in `index.html`.
- [ ] **Step 2: Add Tailwind configuration script**
Configure custom fonts (`sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif']`), glass colors, and animation keyframes.
- [ ] **Step 3: Verify document structure and script loading**
Verify that `index.html` contains valid HTML tags and correct CDN script references.

---

### Task 2: Ambient Glowing Liquid Background System

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Tailwind CDN setup from Task 1.
- Produces: Ambient liquid glowing orbs container with CSS animations and responsive positioning.

- [ ] **Step 1: Implement ambient background container and glowing orbs**
Add SVG/div background orbs with `filter: blur(...)`, deep navy background in dark mode, and soft slate background in light mode.
- [ ] **Step 2: Add CSS keyframes for floating fluid motion**
Define `@keyframes floatOrb1`, `@keyframes floatOrb2`, `@keyframes floatOrb3` with 60fps hardware acceleration (`transform: translate3d(...)`).
- [ ] **Step 3: Verify background rendering without horizontal scrollbar**
Verify that `overflow-x: hidden` prevents overflow on all screen widths.

---

### Task 3: Theme Switching System & Header Profile Component

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Ambient background from Task 2.
- Produces: Interactive theme switch button, `localStorage` theme persistence, and profile header (avatar, verified badge, display name, bio, tagline).

- [ ] **Step 1: Implement Theme Toggle Switch**
Create glassmorphic toggle button in the top bar with Sun and Moon Lucide icons.
- [ ] **Step 2: Implement Theme Management JavaScript**
Write theme initialization and switch logic honoring `localStorage['theme']` and `window.matchMedia('(prefers-color-scheme: dark)')`.
- [ ] **Step 3: Implement Header Profile section**
Build circular avatar with animated liquid gradient border, "Roy" title, verified check badge, "Creative Multimedia & Visual Creator" badge, and bio text.
- [ ] **Step 4: Verify theme toggling and profile layout**
Verify theme class toggle on `<html>` and styling changes between light and dark modes.

---

### Task 4: Social Media Links (Liquid Glass Cards)

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Theme classes and Lucide icons.
- Produces: 5 interactive glass cards for Instagram, TikTok, Discord, Telegram, and WhatsApp.

- [ ] **Step 1: Create social links section container**
Create a semantic `<main>` / `<section>` containing the card stack with responsive gap and staggered entry animation classes.
- [ ] **Step 2: Implement 5 branded glass link cards**
Add Instagram, TikTok, Discord, Telegram, and WhatsApp cards featuring branded icon badges, title, handle, external link arrow, and translucent frosted glass styling.
- [ ] **Step 3: Verify link targets and Lucide icon rendering**
Ensure all links have `target="_blank" rel="noopener noreferrer"` and `lucide.createIcons()` executes cleanly.

---

### Task 5: Gaming Profiles & Clipboard Copy Toast Notification

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Glass card styles.
- Produces: Roblox card (`royyy289`), MLBB card (`123456789 (2026)`), copy-to-clipboard handler, and floating glass toast notification.

- [ ] **Step 1: Implement Gaming Profiles section**
Add section header and cards for Roblox and Mobile Legends with copy buttons.
- [ ] **Step 2: Implement Clipboard Copy logic with fallback**
Write `copyToClipboard(text, label)` function supporting `navigator.clipboard` with `document.execCommand` fallback.
- [ ] **Step 3: Implement Glass Toast Notification UI and auto-dismiss**
Create floating pill toast with checkmark icon and 2.5s auto-dismiss animation.
- [ ] **Step 4: Verify copy button triggers toast and copies correct text**
Test copy trigger and toast appearance.

---

### Task 6: 3D Magnetic Card Tilt & Touch Micro-Interactions

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Glass card elements (`.interactive-card`).
- Produces: 60fps 3D tilt tracking using `requestAnimationFrame`, smooth spring reset, and tactile touch active state.

- [ ] **Step 1: Implement 3D Tilt calculation in Vanilla JS**
Add mousemove listener on cards calculating rotation matrix (`rotateX`, `rotateY`) and smooth perspective depth.
- [ ] **Step 2: Add touch tactile feedback and ripple animation**
Add active state scale bounce and touch ripple styles.
- [ ] **Step 3: Implement Footer and copyright section**
Add clean footer: `© 2026 Roy. All rights reserved.` with liquid glass indicator.
- [ ] **Step 4: Verify 60fps tilt smoothness and reset behavior**
Test mouse leave resets transforms without glitching.

---

### Task 7: Comprehensive Testing & Quality Verification

**Files:**
- Test: `index.html`

**Interfaces:**
- Consumes: Completed single-page application.
- Produces: Verified production-ready portfolio.

- [ ] **Step 1: Check mobile responsive layout (360px to 4K)**
Verify container bounds, typography wrapping, and padding.
- [ ] **Step 2: Verify WCAG AA contrast in both Dark and Light modes**
Ensure slate-50 on dark navy and slate-900 on pastel slate are readable.
- [ ] **Step 3: Verify all interactive triggers (Theme toggle, 3D tilt, Copy toast, Links)**
Ensure complete functionality without runtime errors in browser console.
