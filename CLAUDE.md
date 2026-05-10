# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website with a terminal/matrix aesthetic. The design uses monospace fonts, neon green-on-dark color scheme, and CRT-style visual effects (scanlines, flicker, blink).

## Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Architecture

- **Next.js 16.2.6** (NOT your typical Next.js - APIs and conventions differ)
- **App Router** with pages in `app/` directory
- **Page Structure**: `app/page.tsx` (home), `app/projects/page.tsx`, `app/contact/page.tsx`, `app/specs/page.tsx`
- **Shared Layout**: Components in `app/shared/` (header, footer, sidebar) and `components/layout/`
- **Sections**: Full-page sections in `components/sections/` (terminal-landing, project-archive, secure-contact, system-specs)
- **Terminal Components**: Styled UI components in `components/terminal/`
- **UI Components**: shadcn-style components in `components/ui/`

## Tech Stack

- **Framework**: Next.js 16.2.6 with App Router
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (base-nova style) + Base UI React
- **Animation**: GSAP (gsap package)
- **Icons**: Lucide React
- **Fonts**: Custom heading/mono fonts via CSS variables

## Design Tokens (in tailwind.config.ts)

Colors are CSS variables (not raw hex):
- `primary` / `primary-dim` / `primary-muted` - neon green
- `surface` (#131313), `background` (CSS var)
- `outline` (#84967e), `on-surface` (#e2e2e2)

Animations: `flicker`, `scan`, `blink`

## Important: Read the Docs

Before writing any code, read the Next.js breaking changes guide:
```
node_modules/next/dist/docs/
```

This version has breaking changes that may differ from your training data.

## Component Patterns

Use `cn()` utility from `lib/utils.ts` for composing Tailwind classes:
```typescript
import { cn } from "@/lib/utils"
```

## Code Style

- Monospace aesthetic throughout
- Dark theme only
- Use Lucide icons with default sizing