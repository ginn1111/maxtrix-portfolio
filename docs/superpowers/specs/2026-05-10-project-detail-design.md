# Project Detail Page Design

**Date:** 2026-05-10
**Feature:** Project detail page with glitch page transition

---

## Overview

A dedicated page displaying full project details with a glitch-style page transition matching the terminal/matrix aesthetic.

---

## Route Structure

- URL: `/projects/[id]` where `id` is the project identifier (e.g., `0x92F1`)
- Back navigation returns to Project Archive with reverse glitch transition

---

## Page Transition: Glitch Effect

### Behavior
Two-phase glitch effect on navigation:

1. **Phase 1 (150ms)** — Current page fragments with RGB split and scanline noise
2. **Phase 2 (150ms)** — New page assembles with reverse glitch, then stabilizes

### Implementation
- GSAP-animated full-screen overlay
- CSS filters: `hue-rotate`, `brightness`, `blur`, `contrast`
- RGB split via `text-shadow` / `box-shadow` manipulation
- Scanline noise via animated pseudo-elements

### Reverse on Back
Clicking back triggers reverse glitch effect before route change.

---

## Layout Structure

```
┌─────────────────────────────────────────────────────┐
│  [ << BACK ]                    NODE_ID: 0x92F1     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │           PROJECT IMAGE / VISUAL             │   │
│  │              (gradient placeholder)          │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  TITLE: NEURAL_INTERFACE_V2                        │
│  ════════════════════════════════════════════      │
│                                                     │
│  > SYSTEM_LOG:                                     │
│  Deploying subconscious API integration for       │
│  low-latency cerebral communication...             │
│                                                     │
│  > TECH_STACK:                                     │
│  [REACT] [THREE.JS] [WEBSOCKET]                    │
│                                                     │
│  > STATUS: ACTIVE                                  │
│  > LAST_UPDATE: 2026-05-10                        │
│                                                     │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  CONTRIBUTION_METRICS.sys                          │
│  ════════════════════════════════════════════      │
│  ┌───────────────────────────────────────────────┐ │
│  │ LANGUAGES: TypeScript(67%), GLSL(23%),        │ │
│  │            Python(10%)                        │ │
│  │ LINES_OF_CODE: 12,847                         │ │
│  │ COMMITS: 143 | CONTRIBUTORS: 3               │ │
│  │ ACTIVITY: ████████████░░░░ 78%               │ │
│  │ LAST_COMMIT: 2026-05-08                       │ │
│  │ REPO: github.com/gin/neural-interface-v2     │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  RAW_DATA_DUMP:                                   │
│  ─────────────────────────────────────────────────  │
│  {                                                 │
│    "id": "0x92F1",                                 │
│    "title": "NEURAL_INTERFACE_V2",                 │
│    ...                                             │
│  }                                                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Components

1. **Back Button**
   - Terminal-styled link returning to `/projects`
   - Triggers reverse glitch on click before navigation

2. **Project Visual**
   - Placeholder gradient box matching existing card style
   - Border and scanline effects consistent with archive cards

3. **Content Section**
   - Title (uppercase, neon green, heading font)
   - Description/SYSTEM_LOG block
   - Tech stack tags
   - Status and last update metadata

4. **Contribution Metrics Box**
   - Language breakdown with percentages
   - Lines of code (LOC)
   - Commit count and contributor count
   - Activity progress bar
   - Last commit date
   - Repository link

5. **Raw Data Dump**
   - JSON-formatted project data in terminal style
   - Monospace font, dim text

6. **Crosshair Corners**
   - Matching project card hover effect (decorative corners)

---

## Visual Effects

- **Scanline overlay** — Consistent with existing pages
- **Glitch animation** — CSS keyframes for page transitions
- **Flicker effect** — On headings matching terminal aesthetic
- **Hover states** — Crosshair corners on interactive elements

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Animation:** GSAP (already in project)
- **Styling:** Tailwind CSS v4 + CSS variables
- **Icons:** Lucide React

---

## Files to Create/Modify

1. `app/projects/[id]/page.tsx` — New dynamic route page
2. `components/sections/project-detail-section.tsx` — New section component
3. `components/ui/page-transition.tsx` — Glitch transition wrapper (optional utility)
4. `app/projects/page.tsx` — Add click handler to project cards for navigation