# Architecture & Design Spec: Modern Liquid Glassmorphism Bio-Link / Portfolio

- **Date**: 2026-10-07
- **Target File**: `index.html` (Standalone Single-File Web Application)
- **Author**: Senior Frontend Developer & UI/UX Designer

---

## 1. Executive Summary & Goals
Build a world-class, interactive personal bio-link & portfolio single-page application for "Roy" showcasing a "Modern Liquid Glassmorphism" aesthetic. The site provides high aesthetic appeal, 60fps performance across mobile and desktop devices, theme toggling (Light/Dark mode with persistence), 3D card tilt physics, tactile touch interactions, and seamless clipboard copy actions for gaming handles.

---

## 2. Technical Stack & Architecture
- **Document Structure**: Standalone `index.html` containing HTML5 semantic markup, embedded custom CSS variables & keyframe animations, and inline modular Vanilla JavaScript.
- **Styling**: Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) with custom tailwind configuration script for extended colors and glass backdrop filters.
- **Icons**: Lucide Icons CDN (`https://unpkg.com/lucide@latest`) with automatic SVG rendering via `lucide.createIcons()`.
- **Fonts**: Inter & Plus Jakarta Sans via Google Fonts.
- **State Management**: Lightweight client-side Vanilla JS managing:
  - Theme preference (`localStorage['theme']` + `matchMedia('(prefers-color-scheme: dark)')`)
  - 3D tilt tracking using `requestAnimationFrame`
  - Floating toast state with auto-timeout timer
  - Clipboard API interaction (`navigator.clipboard.writeText`) with fallback

---

## 3. Visual Design System

### 3.1 Color Tokens & Theming
- **Dark Mode (Default/Saved)**:
  - Background base: `#090d16` (Deep Navy Charcoal)
  - Ambient Orbs:
    - Orb 1 (Top Left): Neon Cyan (`#00f2fe`) with 50% opacity, 100px blur filter
    - Orb 2 (Middle Right): Vivid Indigo/Violet (`#7928ca`) with 45% opacity, 120px blur filter
    - Orb 3 (Bottom Center): Electric Fuchsia/Pink (`#ff0080`) with 35% opacity, 110px blur filter
  - Glass Card Fill: `rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.07)`
  - Glass Card Border: `1px solid rgba(255, 255, 255, 0.12)` with subtle gradient top-light
  - Glass Glow on Hover: `box-shadow: 0 10px 30px -10px rgba(0, 242, 254, 0.25)`
  - Typography: Primary text `#f8fafc` (slate-50), secondary text `#94a3b8` (slate-400)

- **Light Mode**:
  - Background base: `#f8fafc` (Clean porcelain / soft slate)
  - Ambient Orbs:
    - Orb 1: Soft pastel sky blue (`#38bdf8`) with 30% opacity, 100px blur
    - Orb 2: Soft lavender / violet (`#a855f7`) with 25% opacity, 120px blur
    - Orb 3: Soft peach / amber (`#fb923c`) with 20% opacity, 110px blur
  - Glass Card Fill: `rgba(255, 255, 255, 0.65)` to `rgba(255, 255, 255, 0.8)`
  - Glass Card Border: `1px solid rgba(255, 255, 255, 0.7)` with drop shadow
  - Glass Glow on Hover: `box-shadow: 0 12px 30px -10px rgba(99, 102, 241, 0.2)`
  - Typography: Primary text `#0f172a` (slate-900), secondary text `#475569` (slate-600)

### 3.2 Liquid Glassmorphism Core CSS
```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
```

---

## 4. Component Hierarchy & Details

### 4.1 Theme Toggle
- Position: Sticky/absolute top right (`top-5 right-5` or integrated header bar).
- Interaction: Smooth rotation and icon transition (Sun <-> Moon).
- Synced with `localStorage` and system preference.

### 4.2 Header Profile
- **Avatar Container**:
  - 100x100px circular avatar with liquid gradient glowing ring (`linear-gradient(135deg, #00f2fe, #9b51e0, #ff0080)`).
  - Floating breath animation.
  - Profile image with clean fallback avatar styling.
- **Display Name**: "Roy" with subtle gradient text accent and verified badge icon.
- **Tagline Badge**: Pill badge with frosted border: "Creative Multimedia & Visual Creator".
- **Bio Description**:
  > "Kreator konten visual yang berfokus pada multimedia dan teknologi, berpengalaman dalam desain grafis, fotografi, serta videografi dan editor video."

### 4.3 Social Links Section (Interactive Glass Cards)
Each card features brand icon with themed gradient tint, title, handle/description, right action arrow icon, 3D tilt hover, and tactile click:
1. **Instagram**: `https://www.instagram.com/royyyy_28/` (Instagram gradient glow)
2. **TikTok**: `https://www.tiktok.com/@rooyyy28` (TikTok cyan/magenta glow)
3. **Discord Community**: `https://discord.gg/QPMtCZfHaS` (Blurple glow)
4. **Telegram**: `https://t.me/ryuuxien` (Sky blue glow)
5. **WhatsApp Business**: `https://wa.me/6281188872129` (WhatsApp emerald glow)

### 4.4 Gaming Profiles & ID Badges
Section header: "Gaming IDs & Profiles"
1. **Roblox Card**:
   - Icon: Gamepad / Roblox
   - Username: `royyy289`
   - Action Button: "Salin ID" / Copy icon button.
   - On Click: Copies `royyy289` to clipboard and triggers interactive Toast.
2. **Mobile Legends (MLBB) Card**:
   - Icon: Swords / Trophy
   - Label: `ID: 123456789 (2026)` (Clean ready-to-fill slot)
   - Action Button: "Salin ID" button with copy confirmation Toast.

### 4.5 Interactive Toast Notification
- Minimalist glass floating pill at bottom center (`fixed bottom-8 left-1/2 -translate-x-1/2`).
- Checkmark icon + message: "Username berhasil disalin ke clipboard!".
- Smooth slide-up & fade-out animation.

### 4.6 Footer
- Text: `© 2026 Roy. All rights reserved.`
- Tag: `Crafted with Modern Liquid Glassmorphism`.

---

## 5. Micro-Interactions & Animation Specs (60fps)
- **3D Magnetic Tilt**:
  - Mouse move on card computes offset from center `(dx, dy)`.
  - Calculates `rotateX(-dy * 12deg)` and `rotateY(dx * 12deg)`.
  - Driven via `requestAnimationFrame` to eliminate frame drops.
  - Reset to `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)` on mouse leave with 400ms cubic-bezier transition.
- **Tactile Touch / Mobile Feedback**:
  - CSS `:active` scale reduction (`transform: scale(0.97)`).
  - Dynamic ripple effect spawned at touch coordinates.
- **Page Entry Reveal**:
  - CSS keyframes `@keyframes fadeInUp` applied with staggered animation delays (`animation-delay: 80ms * index`).

---

## 6. Accessibility (a11y) & SEO
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `viewport`).
- High-contrast text colors meeting WCAG AA requirements in both Light and Dark modes.
- `aria-label` attributes on icon-only and interactive buttons.
- Visible focus rings (`focus-visible:ring-2`) for keyboard navigability.

---

## 7. Verification & Testing Strategy
- Validation checklist:
  - [x] Responsive layout tested from 360px viewport to 4K desktop.
  - [x] Light / Dark mode toggle switches themes, toggles CSS classes, and preserves choice in `localStorage`.
  - [x] 3D Card tilt responds to cursor accurately with zero lag.
  - [x] Copy buttons successfully write ID to clipboard and trigger floating toast.
  - [x] All 5 social links open in new tabs (`target="_blank" rel="noopener noreferrer"`).
  - [x] Lucide icons render crisply without layout shifts.
