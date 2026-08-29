---
status: active
size: L
scope: app/globals.css, components/, app/layout.tsx, lib/shiki-theme.ts, tailwind.config.ts
owner: ginb
---

# Plan — MX-1: DESIGN.md compliance audit and remediation plan

Source of truth: `DESIGN.md` §11 mismatches. Goal of this plan: inspect each mismatch against
current code, confirm or update the finding, record concrete remediation steps, and produce a
prioritized work breakdown for ginb to execute in subsequent focused cards.

---

## Step 1 — Token audit: `--surface` value and off-palette literals

**Target:** `app/globals.css` `:root` block  
**Goal:** Verify `--surface` is `#1b342d` (not registered `#112615`), and enumerate
all semi-transparent / RGB alpha tokens that introduce off-palette literals.  
**Change:** Catalog every diverging literal; produce registered↔current diff table.  
**Verification:** Read `:root` block; list every literal not in DESIGN.md §2 palette.  
**Criterion:** DESIGN.md §2 — every literal must be one of eight registered values.

## Step 2 — Semantic token layer: `--c-*` aliases and `--invert`/`--on-action`

**Target:** `app/globals.css`  
**Goal:** Confirm no `--c-*` aliases, `--invert`, `--on-action`, or component/layout/motion
token groups exist.  
**Change:** List which semantic roles (§2 table, §6 component tokens, §5 layout tokens) are
absent or partially covered by current `@theme` block.  
**Verification:** Search globals.css for `--c-`, `--invert`, `--on-action`, `--ctrl-h`,
`--rail`, `--maxw`, `--space-`.  
**Criterion:** DESIGN.md §2 semantic alias table, §5, §6 component token list.

## Step 3 — Light kit (`[data-theme="light"]`)

**Target:** `app/globals.css`, `app/layout.tsx`  
**Goal:** Confirm absent or stub; note whether html carries `data-theme`.  
**Change:** Inventory; flag as missing with no JS-required expectation from §10.  
**Verification:** Search for `data-theme`, `light-kit`, `light` theme selector.  
**Criterion:** DESIGN.md §10 — light kit must invert phosphor-mint/deep-moss pair.

## Step 4 — Typography: all three stacks resolve to mono

**Target:** `app/globals.css` `--font-family-*` triplet + any component overrides  
**Goal:** Confirm heading/body/mono all map to EnvyCodeR; document divergence from
§3 spec (display=EnvyCodeR Nerd Font; body=Trebuchet/Segoe/system; data mono=EnvyCodeR Nerd Font Mono).  
**Change:** List every component that sets font-family explicitly; determine body font impact.  
**Verification:** Search `font-family` across `app/`, `components/`; diff against §3 stacks.  
**Criterion:** DESIGN.md §3 type role table.

## Step 5 — Focus ring: 1px vs 2px accent ring

**Target:** `app/globals.css` focus global rule + interactive components  
**Goal:** Find current focus rule; confirm width and color vs 2px accent requirement.  
**Change:** Identify all `:focus-visible` declarations; note components that override.  
**Verification:** `grep -r "focus-visible\|focus-outline\|focus:outline" app/ components/`.  
**Criterion:** DESIGN.md §7 — 2px accent `:focus-visible` ring on every control.

## Step 6 — Motion/elevation audit: heavy glows, noise, color aberration

**Target:** `app/globals.css`, `components/` CSS-in-JSX/Tailwind classes  
**Goal:** Find `box-shadow`, `filter`, `noise`, `color-aberration`, gradient washes; compare
flicker keyframe duration against spec 6s.  
**Change:** List each offending declaration with file:line; diff against §7 hairline-only rule.  
**Verification:** Search `box-shadow`, `gradient`, `noise`, `blur`, flicker keyframe.  
**Criterion:** DESIGN.md §7 — depth via hairlines/luminosity only; brief 6s flicker; no decor.

## Step 7 — Component contract: `data-od-id`, primary/ghost/input/badge/log states

**Target:** `components/terminal/`, `components/ui/`, section components  
**Goal:** Confirm absence of `data-od-id` hooks; verify primary button inversion, ghost
border hover, input focus/disabled, badge variants, system log format.  
**Change:** Map existing component props/classes to §6 state contract; list gaps.  
**Verification:** `grep -r "data-od-id" components/`; inspect each component type.  
**Criterion:** DESIGN.md §6 component table; §10 stable `data-od-id` requirement.

## Step 8 — Layout: sidebar width and content column

**Target:** `components/layout/` sidebar, main content wrapper  
**Goal:** Find current width values; compare to `--rail: 240px` and `--maxw: 56rem`.  
**Change:** Record exact current values; flag `60px`/`16rem` sidebar and missing column.  
**Verification:** Search `w-60\|w-64\|16rem\|240px\|56rem\|maxw` in layout components.  
**Criterion:** DESIGN.md §5 — fixed 240px rail; centered 56rem column; 8px gutters.

## Step 9 — Brand/copy: metadata framing and Material Symbols dependency

**Target:** `app/layout.tsx`, `app/page.tsx`, any Google Fonts import  
**Goal:** Find old "high-security subterranean mainframe" copy or Material Symbols link;
verify matrGINx wordmark use.  
**Change:** List files with old brand copy or external font dependency.  
**Verification:** Search for `google\|material.*symbol\|subterranean\|mainframe` in app files.  
**Criterion:** DESIGN.md §8 — matrGINx voice; no Google Font dependency; self-hosted only.

## Step 10 — Palette hardcoding in `lib/shiki-theme.ts` and utilities

**Target:** `lib/shiki-theme.ts`, any other utility producing literal hex  
**Goal:** List every direct hex/RGB outside `:root` that bypasses semantic tokens.  
**Change:** Enumerate literals; cross-ref against registered palette.  
**Verification:** `grep -rn "#[0-9a-fA-F]\{3,8\}\|rgb(" lib/`  
**Criterion:** DESIGN.md §10 — bind to `--c-*` semantic roles only; no inline hex in components.

---

## Deliverable

After Steps 1–10 complete, produce a **prioritized remediation breakdown** with:
- confirmed/updated mismatch table (DESIGN.md §11 format)
- severity: blocking (token drift, semantic layer, typography) / important / deferred
- suggested card-per-mismatch grouping for ginb execution

---

## Project verification

```bash
pnpm run lint
pnpm run build   # at commit time only (per AGENTS.md cadence)
```

Baseline: `pnpm run lint` passing is the iteration gate. Build at final commit.
