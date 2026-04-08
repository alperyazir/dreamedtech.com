# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DreamedTech.com — landing page for an AI-powered education technology platform. Single-page site showcasing the Flow Hubb ecosystem (Flow Book, Flow Learn, Flow Storage). Turkish language (lang="tr").

## Commands

- `npm run dev` — Start dev server (Next.js, port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- Fonts: Inter (sans) + Instrument Serif (accent headings) via `next/font/google`
- Path alias: `@/*` → `./src/*`

## Architecture

Single-page app: `src/app/page.tsx` composes all sections in order. Each section is a separate component in `src/components/`.

### Theming

- Dark theme is default. Light mode toggled via `html.light` class.
- CSS custom properties defined in `globals.css` (:root for dark, html.light for light).
- `ThemeProvider` uses `useSyncExternalStore` + localStorage persistence.
- Theme script in `layout.tsx` <head> prevents flash (reads localStorage before paint).

### Design System (globals.css)

- All colors use CSS variables (--bg, --text-primary, --accent, etc.) — NOT hardcoded hex in components.
- Reusable classes: `.landio-card`, `.btn-glow`, `.badge`, `.divider`, `.process-tab`, `.reveal-item`
- Tailwind theme extended inline via `@theme inline` block mapping CSS vars to Tailwind tokens.

### Scroll Animations

- `useReveal` hook (src/hooks/useReveal.ts): IntersectionObserver adds `.revealed` class to `.reveal-item` children at 15% visibility threshold.

### Assets

- `public/` — Logo SVG, hero video (herovideo.mp4), icons
- `resource/` — Reference HTML template (Landio/Framer), not used in build
