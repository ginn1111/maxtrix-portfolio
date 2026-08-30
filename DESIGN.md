# matrGINx Design System

> Category: Project Design System
> Surface: web
> Lineage: ginn1111 operator interface layer
> Version: v1.1.2026
> Brand mark: matr**GIN**x (GIN rendered in Access Cyan)

matrGINx is the operator interface layer for ginn1111. It reads like a terminal and ships like a product: square corners, phosphor fields, one accent used only where attention is earned, and honest, implementation-specific copy. Build pages from stacked information blocks; keep the signal high and the noise off.

## 0. Context (source-backed)

This design system is generated from the imported OpenDesign project `matrginx-design-system` (project location `loc_G2opKORU_jGtsd6m`). The copied artifact `design-system.html` is the primary evidence: its `:root` block supplies the color and type tokens, and its markup supplies component, layout, motion, and copy patterns below.

- **Source product:** the ginn1111 operator interface — a terminal-read, product-shipped surface for node/command/system operations.
- **Primary surfaces:** fixed left-rail console, stacked information blocks, system log, command input, status badges.
- **Core capabilities:** node fleet status, command dispatch, system logging, operator feedback with reduced-motion fallback.
- **Evidence → tokens:** seven registered colors plus internal-status amber are read directly from the source `:root`.
- **Inference:** no images, icons, avatars, or font files were copied into the source project; the declared fallback stacks remain the contract unless this repository explicitly bundles compatible fonts.

No fabricated metrics, decorative imagery, or invented tokens are introduced.

## 1. Visual Theme & Atmosphere

A deep green-black command surface lit by phosphor mint text and a single Access Cyan accent. The mood is technical, precise, self-aware, and operator-focused. Negative space is generous; structure is carried by 1px hairlines, not shadows. Brief system feedback (scanlines, flicker, pulse, phosphor bloom) is permitted with a reduced-motion fallback — it is feedback, not decoration.

The light kit is an on-palette inversion: a phosphor-mint field with deep-moss ink. It is not a generic white or cream theme.

Anti-goals: purple gradients, busy hero photography, cartoon sci-fi imagery, unlabeled stock art, avatars as hero art, invented metrics, decorative imagery where evidence is absent, and off-palette light backgrounds.

## 2. Color

Every literal must be one of these registered values:

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#0f160f` | Page field (Deep Moss) |
| `--surface` | `#112615` | Raised panels (Subterranean Green) |
| `--fg` | `#83f5c8` | Primary text (Phosphor Mint) |
| `--muted` | `#6ea098` | Secondary text and labels (Signal Gray) |
| `--border` | `#267d69` | 1px structure (Trace Line) |
| `--accent` | `#1ad6b0` | Action, active, completion (Access Cyan) |
| `--accent-2` | `#18e000` | Live signal (Public Green) |
| `--warn` | `#d8a23a` | Internal status/warning only (Amber) |

Semantic aliases must bind component code to intent:

| Role | Binds to | Use for |
|---|---|---|
| `--c-bg` | `--bg` | Page and field background |
| `--c-surface` | `--surface` | Raised panels and cards |
| `--c-text` | `--fg` | Primary copy and headings |
| `--c-text-muted` | `--muted` | Labels, secondary copy, placeholders |
| `--c-border` | `--border` | 1px structure |
| `--c-action` | `--accent` | Action, active, completion |
| `--c-success` | `--accent-2` | Live signal |
| `--c-warning` | `--warn` | Internal status only |

Use `--invert: #0f160f` and `--on-action: var(--invert)` for ink over accent fills. Accent, success, and warning text on a field must use `--c-action-fg`, `--c-success-fg`, and `--c-warning-fg`; these resolve to deep moss in the light kit for contrast. The source contrast target is at least 4.5:1 for normal text and 3:1 for large text/UI components.

Access Cyan is precious: use it at most twice per screen, for actions and active/completion states, never as a large wash. Hover must not dim foreground text; shift background or border instead. When a solid button inverts on hover, swap foreground and background together.

## 3. Typography

| Role | Stack | Notes |
|---|---|---|
| Display, headings, labels, IDs, logs, status | `"EnvyCodeR Nerd Font", EnvyCodeR, SFMono-Regular, Menlo, monospace` | Mono terminal voice |
| Body/explanatory copy | `"Trebuchet MS", "Segoe UI", system-ui, sans-serif` | Human counterweight |
| Data marks/mono | `"EnvyCodeR Nerd Font Mono", EnvyCodeR, SFMono-Regular, Menlo, monospace` | IDs, metrics, paths |

Source specimen scale: display-xl 40px, display-md 24px, body 16px, mono 14px, labels 11–12px uppercase and tracked. Display and body are intentionally different families.

## 4. Spacing and Shape

- Corner radius: **0px** on every surface.
- Border weight: **1px** hairlines; avoid heavy shadows.
- Baseline: 4px utility scale with a dominant 8 / 16 / 32px rhythm.
- Tokens: `--space-1`…`--space-6` = 4 / 8 / 16 / 24 / 32 / 48px.
- Touch targets: at least 44px.

## 5. Layout and Composition

- Fixed left rail: `--rail: 240px` on desktop; compact top bar at `≤860px`.
- Main content: centered `--maxw: 56rem` column on a 12-column desktop rhythm with 8px gutters.
- Pages: stacked information blocks and square-corner panels with 1px borders.
- Body copy: at least 16px; titles: at least 36px on 1080p surfaces.
- Mobile must not scroll horizontally; redesign rather than squeeze.

## 6. Components

| Component | Spec | States |
|---|---|---|
| Primary button | `--c-action` fill, `--on-action` ink, 44px minimum, mono 14px, 1px border; inverts to outline on hover; one primary per viewport. | rest, hover, active, focus ring, disabled |
| Ghost button | Transparent, `--c-border` edge, `--c-text`; border becomes action on hover. | rest, hover, focus, disabled |
| Input | `--c-bg` field, 1px `--c-border`, mono 14px, 44px; accent focus ring; muted placeholder. | rest, focus, disabled, readonly |
| Badge | 1px bordered mono 12px chip. Variants: default, signal, live, warn. | static; live pulse optional |
| System log | Mono 13px on `--c-bg`, 1px border; `[ok]` success, `[sig]` action, `[w]` warning. | streaming, reduced-motion |
| Panel/hero | `--c-surface` block, 1px border, optional phosphor-bloom corner glow; no heavy shadow. | rest, motion-safe glow |

Component tokens: `--ctrl-h: 44px`, `--btn-fs: 14px`, `--input-fs: 14px`, `--badge-fs: 12px`, `--log-fs: 13px`, `--label-fs: 11px`.

## 7. Motion and Interaction

- Scanlines and phosphor bloom via `body::before`; flicker keyframe is 6s.
- `prefers-reduced-motion: reduce` disables flicker and smooth scrolling.
- Hover shifts background by approximately ±0.08 L; foreground remains unchanged.
- Every control gets a 2px accent `:focus-visible` ring.
- Disabled is the only state allowed to reduce contrast.

## 8. Voice and Brand

**Brand:** matrGINx — the matrix-themed operator layer built by GIN on the ginn1111 command substrate. The wordmark carries `GIN` in Access Cyan. Use concise, systems-minded terminal language with controlled security-fiction framing and direct human explanation. Prefer operator, system, node, signal, command, module, repository, and ready for input. Avoid vague claims, fake metrics, filler copy, and polished corporate language.

## 9. Anti-patterns

- Purple gradient washes or gradients on every background layer.
- Emoji as functional icons; hand-drawn people/scenes.
- Colored vertical bars with rounded callout cards.
- Hover states that make text gray/lighter.
- Multiple solid buttons for the same action in one viewport.
- Icons beside every heading; invented metrics or filler copy.
- Warm beige/cream backgrounds by default.
- Non-zero radius, heavy shadows, amber as a brand accent.
- Busy hero photography, cartoon sci-fi, unlabeled stock imagery.
- Off-palette light themes.

## 10. Implementation Contract

- Bind every component to semantic `--c-*` roles. Do not inline hex in component CSS.
- Theme switching is done with `data-theme="light"` on `html` or a wrapper; no JS is required for color. Default is dark.
- Author both dark and light contrast pairs: `(--fg, --bg)` and `(--on-action, --accent)`.
- Accent/success/warning text on fields uses the corresponding `--c-*-fg` alias.
- Interactive components carry stable `data-od-id` hooks for OpenDesign mapping and contrast audits.
- Shipped token groups are palette, semantic roles, ink, three type stacks, spacing, layout, component, and motion tokens.
- OpenDesign reference files: `colors_and_type.css`, `theme.json`, `preview/*.html`, and `ui_kits/app/` in project `237b4471-78d6-49a1-8502-b1a9a264c00d`.

## 11. Current Code Alignment

This section is an evidence-based comparison against the repository at the time this document was updated. It is intentionally not a claim that the code is already compliant.

### Aligned

- The code uses the core registered dark palette for `--bg`, `--fg`, `--muted`, `--border`, and `--accent`.
- EnvyCodeR Nerd Font Mono is bundled and used throughout the current application.
- CRT scanlines, flicker/blink utilities, reduced-motion handling, square border styling, 44px-class controls, and dot-leader data rows are already represented.
- The desktop navigation is a fixed left rail and the app prevents horizontal overflow.

### Mismatches to resolve

1. **Token drift:** current `--surface` is `#1b342d` instead of the registered `#112615`; extra semi-transparent and RGB tokens introduce off-palette literals. Current amber is `#f0a02a` rather than registered `#d8a23a`.
2. **No semantic token layer/light kit:** current CSS has no `--c-*` aliases, `--invert`, `--on-action`, component/layout/motion token set, or `[data-theme="light"]` kit.
3. **Typography mismatch:** body, heading, and mono all resolve to EnvyCodeR Nerd Font Mono; the design requires display EnvyCodeR Nerd Font, readable body Trebuchet/Segoe/system, and separate data mono stack.
4. **Focus mismatch:** current global focus outline is 1px; the design requires a 2px accent ring on every control.
5. **Motion/elevation mismatch:** the implementation has multiple heavy glow box-shadows, gradients, noise, color aberration, high-frequency flicker, and z-index overlays. The design limits depth to hairlines/luminosity and brief feedback, with a 6s flicker and no decorative effects.
6. **Component contract mismatch:** code uses legacy Tailwind names and raw role mappings instead of the design's semantic roles; stable `data-od-id` hooks and explicit primary/ghost/input/badge/log state contracts are not consistently present.
7. **Layout mismatch:** current sidebar widths are responsive `60px`/`16rem` rather than the specified `240px` rail, and current content/layout primitives do not clearly implement the measured `56rem` centered column and 8px gutter rhythm.
8. **Brand/copy mismatch:** current metadata and UI still foreground the old “high-security subterranean mainframe” framing and Material Symbols Google font dependency instead of the matrGINx wordmark/voice and self-hosted/fallback-only source contract.
9. **Palette hardcoding in code:** `lib/shiki-theme.ts` and utility styles contain direct hex/RGB values, violating the semantic-token single-source-of-truth rule.

These mismatches are documentation findings only; this update does not modify application styling or component behavior.
