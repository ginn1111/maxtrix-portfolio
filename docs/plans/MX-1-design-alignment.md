---
status: completed
size: L
scope: app/globals.css, components/, app/layout.tsx, lib/shiki-theme.ts, tailwind.config.ts
owner: ginb
---

# Plan — MX-1: DESIGN.md compliance audit and remediation plan

Source of truth: `DESIGN.md` §11 (which in turn defines the contracts in §§2–10). This
plan records the repository evidence checked on 2026-08-29, confirms or updates each of the
nine findings, and breaks remediation into focused follow-on cards. This audit is documentation
only; it does not change application styling or behavior.

## Audit scope and method

- Read `DESIGN.md` §§2–11 and compared its registered palette, semantic roles, type stacks,
  layout, component states, motion, and implementation contract against the current source.
- Inspected `app/globals.css`, `app/layout.tsx`, `app/shared/{index,sidebar,header,footer}.tsx`,
  `components/`, `lib/shiki-theme.ts`, `lib/utils.ts`, and `tailwind.config.ts`.
- Searched the scoped source for semantic tokens, theme selectors, direct color literals,
  focus rules, effects, layout dimensions, brand copy, Material Symbols, and `data-od-id`.
- Line references below are current-source evidence and should be refreshed if preceding edits
  move lines before the follow-on cards are implemented.

## Confirmed alignment retained

These §11 claims remain accurate:

- Core dark values for `--bg`, `--fg`, `--muted`, `--border`, and `--accent` are present in
  `app/globals.css:33-39` and match the registered values.
- EnvyCodeR Nerd Font Mono is bundled in `public/fonts/` and declared in
  `app/globals.css:3-24`.
- Scanlines, flicker/blink utilities, reduced-motion handling, square borders, dot leaders,
  and several 44px-class controls are represented (`app/globals.css:110-151, 179-369`,
  `components/terminal/data-row.tsx:11-14`). These are partial alignments, not proof that all
  controls meet the contract.
- Desktop navigation is fixed and horizontal overflow is suppressed
  (`app/shared/sidebar.tsx:79`, `app/shared/index.tsx:9-15`, `app/globals.css:91-95`).

## Confirmed / updated mismatch table

| # | Finding and current evidence | Assessment | Severity | Suggested card |
|---|---|---|---|---|
| 1 | **Token drift.** `app/globals.css:33-49` has `--surface: #1b342d` instead of registered `#112615`, `--internal-fg: #f0a02a` instead of `#d8a23a`, plus alpha hex and RGB values for accent/public/internal states. `app/globals.css:387`, `:428`, `:448`, and `:484` add further literals (`#3b4b37`, `#00ff55`). | **Confirmed; broader than originally stated.** The primary palette mismatch and off-palette literals are present. The registered core values themselves are otherwise present. | Blocking | **A — Palette and token normalization** |
| 2 | **No semantic token layer / light kit.** No `--c-*`, `--invert`, `--on-action`, `--ctrl-h`, `--rail`, `--maxw`, or `--space-*` declarations were found in `app/globals.css`. The `@theme` block (`:58-85`) exposes legacy `--color-*` mappings, not the §2/§5/§6 semantic contract. No `[data-theme="light"]` selector or `data-theme` attribute is present; `app/layout.tsx:16` only applies `className="dark"`. | **Confirmed, with partial legacy coverage.** A token layer exists, but it is the old Tailwind/M3-style naming layer and does not satisfy the semantic roles or on-action/light-pair contract. | Blocking | **A — Palette and token normalization** plus **B — Theme and semantic aliases** |
| 3 | **Typography mismatch.** `app/globals.css:50-55` maps heading, body, and mono all to `"EnvyCodeR Nerd Font Mono"`; `:59` repeats it for `--font-mono`. `tailwind.config.ts:12-15` merely forwards those variables. The repository bundles only the Mono face, while §3 requires a distinct display stack, readable Trebuchet/Segoe/system body stack, and data mono stack. | **Confirmed.** The current body is terminal mono rather than the specified readable body counterweight; display and data roles are not distinct. | Blocking | **C — Typography roles and font loading** |
| 4 | **Focus mismatch.** The global rule in `app/globals.css:102-108` uses `outline: 1px solid var(--accent)`. Existing component rules vary: `components/ui/button.tsx:7` uses a 3px ring, `components/ui/input.tsx:12` uses a 3px ring, and `components/blog/blog-filter.tsx:29-31` uses a 1px outline. Several links suppress the browser outline (`components/blog/blog-card.tsx:12`, `article-toc.tsx:40`). | **Confirmed and expanded.** Focus is neither consistently 2px nor consistently bound to the required accent ring. | Important | **D — Interaction states and 2px focus contract** |
| 5 | **Motion/elevation mismatch.** Heavy shadows and glows occur in `app/globals.css:170-177, 371-380, 432-436, 449-451, 488-492, 564-566`; gradients/noise/aberration occur at `:118-124, 424-430, 448, 463-467, 480-486, 576-617`. Components add effects in `components/ui/glitch-transition.tsx:66-75`, `components/ui/glitch-text.tsx:66,180`, `components/sections/system-specs-section.tsx:97-99`, and `components/blog/blog-card.tsx:31`. Flicker utilities run at 3s, 0.15s, and 0.1s (`app/globals.css:343-353`), while the required keyframe is 6s. | **Confirmed.** Scanlines and limited phosphor feedback are allowed, but the current effect inventory includes disallowed decorative layers, heavy elevation, color aberration, and high-frequency flicker. `.crt-flicker-text` also references an undefined `highFreqFlicker` (`:525-527`), which should be removed or made valid during remediation. | Important | **E — Motion, effects, and elevation cleanup** |
| 6 | **Component contract mismatch.** No `data-od-id` hooks were found in `app/` or `components/`. `components/ui/button.tsx:7-33` and `components/ui/input.tsx:12` use generic/legacy role names and non-contract sizes (`h-8`); `components/ui/badge.tsx:5-17` exposes default/secondary/destructive/outline/tech rather than default/signal/live/warn and includes a heavy shadow; `components/terminal/chip.tsx:5-17` uses raw `red-500` and RGB-backed public/internal roles. `TerminalButton` (`components/terminal/terminal-button.tsx:14-20`) is ghost-like rather than the specified primary/ghost split. Inputs are 40px (`components/terminal/terminal-input.tsx:28-31`) or 32px (`components/ui/input.tsx:12`), and no dedicated system-log component/state contract was found. | **Confirmed, but partially implemented.** Bracket chips, terminal inputs, buttons, and log-like copy exist; stable mapping hooks and explicit semantic states do not consistently exist. | Important | **F — Component primitives and OpenDesign hooks** |
| 7 | **Layout mismatch.** The shared rail is `sm:w-[60px] lg:w-64` (`app/shared/sidebar.tsx:79`) and the main offset mirrors it with `md:ml-[60px] lg:ml-64` (`app/shared/index.tsx:12`), rather than one `--rail: 240px`. The shared main has no `--maxw: 56rem` column. Page primitives use `max-w-container-max` (1440px from `tailwind.config.ts:47`) and blog uses a 720px reading column plus a 240px TOC (`app/hub/blog/layout.tsx:9`); `gutter` is 16px (`tailwind.config.ts:46`), not the specified 8px gutter rhythm. | **Confirmed; update is more precise.** The rail is fixed on desktop but is 256px at `lg`, has a 60px compact mode, and page width/gutter primitives do not implement the shared 56rem/8px contract. | Important | **G — Layout primitives and responsive rail** |
| 8 | **Brand/copy and font dependency mismatch.** `app/layout.tsx:6-7` still uses title `ginn1111` and “High-security subterranean mainframe portfolio”; `:18-21` loads Material Symbols from Google. Material Symbols classes remain in `app/globals.css:154-168` and `app/shared/sidebar.tsx:67`. Old framing also remains in `components/sections/terminal-landing-section.tsx:132-135`, `components/sections/secure-contact-section.tsx:132-134`, and `app/shared/footer.tsx:34-36`. No `matrGINx` wordmark usage was found in app/components. | **Confirmed.** The external Google font dependency and old copy are present; Google AI Studio is only a footer link and is not itself the font dependency. | Important | **H — Brand metadata, copy, and icon source** |
| 9 | **Palette hardcoding in code.** `lib/shiki-theme.ts:7-20` contains direct hex values for editor/token colors, including unregistered `#f0a02a`. `app/globals.css` contains direct palette/effect literals listed in finding 1. Component styles also bypass the semantic layer with arbitrary values: `components/ui/glitch-text.tsx:66,180` uses `rgba(0, 255, 255, 0.8)`, `components/ui/glitch-transition.tsx:68-74` uses RGBA, and `components/ui/badge.tsx:16` uses arbitrary RGBA shadow syntax. | **Confirmed; update scope.** `lib/shiki-theme.ts` needs an intentional CSS-variable/runtime bridge (Shiki cannot consume CSS variables directly), while component CSS/inline effect colors should be removed or bound to approved semantic roles. | Blocking | **A — Palette and token normalization** plus **I — Shiki theme and color bridge** |

## Prioritized remediation breakdown

Severity is based on whether later work can safely rely on a stable design vocabulary: token drift and semantic roles first, typography next, then reusable interaction/component/layout contracts, with visual cleanup and brand polish after those foundations.

### Card A — Palette and token normalization (blocking)

**Files:** `app/globals.css`, `tailwind.config.ts`, likely shared component class names.

- Replace the registered palette drift (`--surface`, amber) and remove unregistered hardcoded colors.
- Decide which opacity variants are legitimate implementation tokens; express them from registered
  variables rather than adding new palette literals.
- Introduce the canonical palette names and preserve temporary compatibility aliases only where
  needed to keep the migration incremental.
- Acceptance: all literal colors in the scoped CSS are either registered palette values or
  explicitly documented opacity/compositing forms derived from those values; no `#f0a02a`,
  `#00ff55`, or `#3b4b37` remains.

### Card B — Semantic aliases and light kit (blocking; depends on A)

**Files:** `app/globals.css`, `app/layout.tsx`, `tailwind.config.ts`.

- Add `--c-bg`, `--c-surface`, `--c-text`, `--c-text-muted`, `--c-border`, `--c-action`,
  `--c-success`, `--c-warning`, the `--invert`/`--on-action` pair, foreground aliases, and
  the §5/§6 spacing/layout/component/motion tokens.
- Add dark defaults and `[data-theme="light"]` on-palette inversion; use `data-theme` on `html`
  without requiring JavaScript for color selection.
- Repoint generated utility mappings to semantic roles, then migrate consumers.
- Acceptance: both themes resolve all required roles and contrast pairs; no component needs a
  raw palette token for ordinary color/state styling.

### Card C — Typography roles and font loading (blocking; depends on B)

**Files:** `app/globals.css`, `tailwind.config.ts`, `public/fonts/` only if a compatible display
face is intentionally added.

- Separate display/heading, body, and data-mono variables to match §3. Keep the bundled Mono
  face for data; use the specified readable system fallback stack for body unless a compatible
  self-hosted display face is added.
- Map `font-heading`, `font-body`, and `font-mono` to the separate roles.
- Acceptance: computed class mappings show distinct body and display/data contracts, body copy is
  at least 16px where specified, and no external font request is introduced.

### Card D — Interaction states and focus ring (important; depends on B)

**Files:** `app/globals.css`, `components/ui/button.tsx`, `components/ui/input.tsx`,
`components/ui/textarea.tsx`, terminal/blog controls.

- Standardize every interactive control on a 2px accent focus-visible ring, preserving a visible
  offset and removing conflicting 1px/3px rules or outline suppression.
- Establish 44px minimum control height, disabled/readonly states, and hover behavior that does
  not dim foreground text.
- Acceptance: a source audit finds one focus contract and every button/input/textarea/link keeps
  a visible 2px accent focus treatment.

### Card E — Motion, effects, and elevation cleanup (important; depends on A/B)

**Files:** `app/globals.css`, `components/ui/glitch-text.tsx`, `components/ui/glitch-transition.tsx`,
`components/sections/system-specs-section.tsx`, `components/blog/blog-card.tsx`, related effect users.

- Retain only scanlines and brief phosphor feedback permitted by §7; remove heavy box-shadows,
  backdrop blur/noise/color aberration, gradient washes, and z-index decorative overlays.
- Replace high-frequency/3s/4s flicker with the 6s feedback keyframe and ensure reduced motion
  disables it. Remove the undefined `highFreqFlicker` reference.
- Acceptance: effect inventory contains no disallowed elevation/decorative effect and all motion
  has a reduced-motion path.

### Card F — Component primitives and OpenDesign hooks (important; depends on B/D)

**Files:** `components/ui/button.tsx`, `components/ui/input.tsx`, `components/ui/textarea.tsx`,
`components/ui/badge.tsx`, `components/terminal/{terminal-button,terminal-input,terminal-textarea,chip,data-row,terminal-entry}.tsx`,
relevant blog controls.

- Define explicit primary/ghost/input/badge/log contracts using semantic classes and the component
  tokens. Preserve the existing bracket/log voice where it matches the spec.
- Add stable, descriptive `data-od-id` hooks to interactive components and migrate raw role names
  (`text-red-500`, `text-black`, etc.) to semantic roles.
- Acceptance: each §6 component has documented rest/hover/focus/disabled (and readonly/streaming
  where applicable) states, 44px controls, and stable mapping hooks.

### Card G — Layout primitives and responsive rail (important; depends on B)

**Files:** `app/shared/index.tsx`, `app/shared/sidebar.tsx`, `app/shared/header.tsx`,
`app/hub/blog/layout.tsx`, page/section wrappers, `tailwind.config.ts`.

- Establish `--rail: 240px`, compact top-bar behavior at `≤860px`, `--maxw: 56rem`, and 8px
  gutter tokens. Replace the current 60px/256px offset split and broad 1440px container where
  the design contract applies.
- Verify the reading layout remains usable while the shared page column is centered and does not
  introduce horizontal scrolling.
- Acceptance: desktop rail, main offset, centered column, and gutters are token-backed and match
  the documented dimensions at desktop/tablet/mobile widths.

### Card H — Brand metadata, copy, and icon source (important; depends on B/C)

**Files:** `app/layout.tsx`, `app/shared/sidebar.tsx`, `app/shared/footer.tsx`,
`components/sections/terminal-landing-section.tsx`, `components/sections/secure-contact-section.tsx`,
`app/globals.css`.

- Replace old metadata/copy with matrGINx voice and render the `matrGINx` wordmark with GIN as
  the accent segment where appropriate.
- Remove the Google Material Symbols stylesheet and either replace icons with accessible text/SVG
  or an approved self-hosted source; remove unused Material Symbols CSS/classes.
- Acceptance: no Google font request, old “high-security subterranean mainframe” framing, or stale
  `SUBTERRANEAN_GIN_OS` brand copy remains in the scoped UI.

### Card I — Shiki theme and color bridge (blocking; depends on A/B)

**Files:** `lib/shiki-theme.ts`, the Shiki rendering component, `app/globals.css` if needed.

- Keep Shiki's required concrete theme colors in one approved palette bridge rather than scattering
  literals; correct amber to the registered warning value. If runtime CSS variables are required,
  document the limitation that Shiki's generated HTML needs concrete colors and expose the bridge in
  one place.
- Acceptance: no untracked direct hex/RGB literals remain in `lib/` or component effect code, and
  rendered code blocks retain readable syntax colors in both themes (or explicitly remain dark-only
  with a documented reason).

## Suggested execution order and dependencies

1. **A** (palette normalization) and its literal inventory.
2. **B** (semantic aliases/light kit), then **C** (type roles) and **I** (Shiki bridge) in parallel.
3. **D** (focus/control contract) and **F** (component primitives/hooks) after B; F should consume
   D's shared interaction tokens.
4. **G** (layout) after semantic dimensions exist.
5. **E** (effects) after palette/semantic decisions are stable, so permitted bloom/feedback uses
   canonical roles.
6. **H** (brand/copy/icon source) after typography and semantic styling are stable.
7. Run the full lint gate after each card group; run the production build once at final integration.

## Validation checklist

- `pnpm run lint` passes after the audit-plan change and after each remediation card group.
- Search checks return expected results:
  - no unapproved palette literals in `app/`, `components/`, `lib/`, or `tailwind.config.ts`;
  - semantic aliases and `[data-theme="light"]` exist;
  - every interactive primitive has `data-od-id` and the 2px accent focus rule;
  - no Google font stylesheet, Material Symbols dependency, or stale brand framing remains;
  - layout dimensions are token-backed (`240px`, `56rem`, 8px gutter) rather than duplicated
    responsive literals.
- `pnpm run build` is reserved for final integration, per `AGENTS.md`.
