---
status: completed
size: L
scope: app/globals.css, app/layout.tsx, tailwind.config.ts, app/shared/, components/, lib/shiki-theme.ts
owner: ginb
---

# Plan — MX-2: DESIGN.md compliance remediation (findings A–I)

Source of truth: `DESIGN.md` §§2–11 and the confirmed findings in
`docs/plans/MX-1-design-alignment.md` (audited 2026-08-29, re-audited fresh 2026-08-30 —
all nine findings still hold, no remediation landed). This plan executes the
prioritized breakdown A–I in dependency order. Implementation mutates styling/behavior.

## Execution order (dependencies from MX-1 plan)

1. **A** — palette normalization (removes off-palette literals)
2. **B** — semantic `--c-*` aliases + `[data-theme]` light kit (dep on A)
3. **C** — typography roles: distinct display/body/mono (dep on B)
4. **I** — shiki theme color bridge (dep on A/B)
5. **D** — 2px accent focus contract (dep on B)
6. **F** — component primitives: 44px, semantic states, `data-od-id` (dep on B/D)
7. **G** — layout primitives: `--rail` 240px, `--maxw` 56rem, 8px gutter (dep on B)
8. **E** — motion/effects cleanup: 6s feedback keyframe, remove `highFreqFlicker`,
   strip disallowed shadows/aberration/gradients (dep on A/B)
9. **H** — brand/copy + icon source: `matrGINx` voice, drop Google Material Symbols (dep on B/C)

## Detailed steps

### A — Palette normalization
- `app/globals.css:35` `--surface: #1b342d` → registered `#112615` (merge with `--surface-low` or keep low as documented opacity variant).
- `app/globals.css:48` `--internal-fg: #f0a02a` → registered warning `#d8a23a` (rename to `--warn`).
- Remove `#00ff55` (lines 428, 448, 484) → use `--accent-2` `#18e000`.
- Remove `#3b4b37` (line 387) → `--border`.
- `lib/shiki-theme.ts:18` `#f0a02a` → `#d8a23a` (registered).
- Express opacity/alpha variants (`--accent-dim/-soft/-faint/-wash`, `--public-*`, `--internal-*`) from registered base values only; drop literal RGB forms not derived from registered colors.
- Gate: `grep -rn "#1b342d\|#f0a02a\|#3b4b37\|#00ff55\|#0ff\|rgba(0, 230, 57\|rgba(0, 255, 255" app components lib` returns nothing.

### B — Semantic aliases and light kit
- Add `--c-bg`, `--c-surface`, `--c-text`, `--c-text-muted`, `--c-border`, `--c-action`, `--c-success`, `--c-warning`, `--invert`, `--on-action`, `--c-action-fg/-success-fg/-warning-fg`, plus §5/§6 tokens (`--space-*`, `--rail`, `--maxw`, `--ctrl-h`).
- Dark defaults in `:root`; `[data-theme="light"]` on-palette inversion (phosphor-mint field, deep-moss ink).
- `app/layout.tsx:16` use `data-theme` attr (default dark) without JS; keep `className` only for color-scheme if needed.
- Repoint `@theme`/`tailwind.config.ts` utility mappings to semantic roles; migrate consumers (`text-primary-fixed-dim` → semantic) where mechanical.
- Gate: `--c-*`, `--invert`, `--on-action`, `[data-theme="light"]` present; no component needs raw palette token for ordinary color.

### C — Typography roles
- `--font-family-heading/body/data`: distinct stacks. Bundle Mono stays data; body → readable system stack (`Trebuchet MS`, Segoe UI, system-ui) per §3; display uses bundled Mono or documented system fallback (no new external font).
- Map `font-heading`, `font-body`, `font-mono` to separate roles; keep `--font-mono` = data.
- Gate: computed mappings differ; body ≥16px where specified; no external font request.

### I — Shiki bridge
- Single `lib/shiki-theme.ts` palette bridge with only registered values; `#f0a02a` corrected to `#d8a23a`.
- Shiki needs concrete colors; centralize in one exported object, no literals elsewhere.
- Gate: no untracked direct hex in `lib/` or component effects; blocks readable in both themes (or documented dark-only).

### D — Focus 2px contract
- Standardize to 2px accent `focus-visible` ring with visible offset.
- `app/globals.css:102-108` 1px → 2px `--c-action` ring.
- `components/ui/button.tsx/input.tsx/textarea.tsx`: `ring-3` → 2px accent ring; remove conflicting outline suppression.
- `components/blog/article-toc.tsx`, blog-card/link focus: remove outline suppression → visible 2px accent.
- `components/terminal/terminal-button.tsx`, terminal-input/textarea focus-within → accent ring.
- Gate: one focus contract; every interactive keeps visible 2px accent focus.

### F — Component primitives + data-od-id
- `badge.tsx`: variants → default/signal/live/warn (map default→`--c-action`, signal→`--c-success`, live→`--c-success`, warn→`--c-warning`); remove heavy shadow.
- `chip.tsx`: replace raw `text-red-500`/RGB roles → semantic warn/success/action.
- `terminal-button.tsx`: primary/ghost split per §6; 44px min height.
- `TerminalButton`, `Input`, `Textarea`, `TerminalInput`, `TerminalTextarea`, `Button`, `Badge`, `Chip`, `DataRow`: `data-od-id` stable hooks; `h-*` raised to 44px (`h-11`) where control.
- Gate: every §6 component has rest/hover/focus/disabled states, 44px controls, `data-od-id` present.

### G — Layout primitives
- `--rail: 240px`; `app/shared/sidebar.tsx` `sm:w-[60px] lg:w-64` → `--rail` token; `app/shared/index.tsx` `md:ml-[60px] lg:ml-64` → `--rail`.
- `--maxw: 56rem` centered reading column on shared main.
- `--space-*`/8px gutter tokens; `tailwind.config.ts` gutter 16px → 8px where design contract applies.
- Verify no horizontal scroll on desktop/tablet/mobile.
- Gate: dimensions token-backed (240px, 56rem, 8px) not duplicated responsive literals.

### E — Motion/effects cleanup
- Keep scanlines + brief phosphor feedback; remove heavy box-shadows, backdrop blur/noise/aberration/gradient washes.
- `.glow`/`glow-md`/`glow-sm`/`text-glow` → restrict or bind to `--c-action` with reduced-motion.
- `animate-flicker` 3s/0.15s/0.1s → 6s §7 keyframe; `crt-flicker-text` `highFreqFlicker` ref removed; `.crt-flicker` 4s → 6s.
- `crt-color-aberration`, `crt-noise`, backdrop-blur overlays → remove or gate behind reduced-motion.
- Gate: effect inventory has no disallowed elevation/decorative effect; all motion has reduced-motion path; `highFreqFlicker` absent.

### H — Brand/copy + icons
- `app/layout.tsx`: metadata → `matrGINx` voice + title; remove Google Material Symbols `<link>`.
- Replace Material Symbols spans in `app/shared/sidebar.tsx`, sections with inline accessible SVG/self-hosted icons (no external font).
- Remove `.material-symbols-*` CSS (globals.css:154-168).
- `app/shared/footer.tsx`, `terminal-landing-section.tsx`, `secure-contact-section.tsx`: replace `SUBTERRANEAN_GIN_OS`, "Subterranean GIN_OS", "encrypted subterranean nodes", "High-security subterranean mainframe portfolio" with `matrGINx` voice.
- Render `matrGINx` wordmark with GIN accent segment where appropriate.
- Gate: no Google font request, no `.material-symbols` class/stylesheet, no stale brand framing in scoped UI.

## Not in scope
- No new external font files; no route/layout architecture change beyond rail/reading column; no data/behavior changes.

## Validation
- `pnpm run lint` after each card group.
- Search gates above at end.
- `pnpm run build` once at final integration (per AGENTS.md — not during iteration).

## References
- `docs/plans/MX-1-design-alignment.md` (finding evidence + acceptance), `DESIGN.md` §§2–11.
