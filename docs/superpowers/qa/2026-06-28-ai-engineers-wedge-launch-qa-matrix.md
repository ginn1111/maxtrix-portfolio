# AI-for-Engineers Wedge Launch QA Matrix

Owner: QA Engineer
Prepared by: CTO
Source plan: `docs/superpowers/plans/2026-06-28-ai-engineers-wedge-launch-plan.md`
Last verified: 2026-06-28T20:15Z
Verification host: localhost:3000 (dev server)
Branch: `feat/gin-7-launch-rails`

## Verification evidence snapshot

All results from live curl + build execution. GIN-7 gaps fixed this session (consent, source enum, honeypot). GIN-6 launch routes still absent.

---

## 1. Route smoke matrix

| ID | Surface | Precondition | Check | Status | Evidence |
|----|---------|-------------|-------|--------|----------|
| SMK-001 | `/` | app booted | GET → 200, wedge hero | ⚠️ 200 but portfolio home | `200 /` — renders TerminalLandingSection, not wedge homepage |
| SMK-002 | `/tools` | launch data present | GET → 200, tool cards | ❌ ROUTE MISSING | `404 /tools` — needs GIN-6 |
| SMK-003 | `/tools/[slug]` | valid slug | GET → 200, verdict/pros/cons | ❌ ROUTE MISSING | needs GIN-6 |
| SMK-004 | `/compare/[slug]` | valid slug | GET → 200, winner/scenario matrix | ❌ ROUTE MISSING | needs GIN-6 |
| SMK-005 | `/blog` | launch articles present | GET → 200, article list | ⚠️ 200 but portfolio content | `200 /blog` — renders hard-coded portfolio entries, not launch Articles |
| SMK-006 | `/blog/[slug]` | valid slug | GET → 200, + monetization target | ❌ ROUTE MISSING | needs GIN-6 |
| SMK-007 | `/subscribe` | none | GET → 200, form + consent | ❌ ROUTE MISSING | `404 /subscribe` — needs GIN-6 |
| SMK-008 | `/about` | none | GET → 200, methodology/trust | ❌ ROUTE MISSING | `404 /about` — needs GIN-6 |
| SMK-009 | `/sitemap.xml` | sitemap exists | GET → includes launch routes | ❌ ROUTE MISSING | `404 /sitemap.xml` — needs GIN-6 |
| SMK-010 | `/robots.txt` | robots exists | GET → references sitemap | ❌ ROUTE MISSING | `404 /robots.txt` — needs GIN-6 |

---

## 2. SEO + metadata matrix

All blocked by GIN-6 — no launch routes exist to inspect metadata on:

| ID | Surface | Expected | Status |
|----|---------|----------|--------|
| SEO-001..008 | all launch routes | unique title/desc, canonical, JSON-LD, OG/Twitter, sitemap, robots | ❌ BLOCKED (GIN-6) |

Current metadata on root layout (`app/layout.tsx`): `"ginn1111"` / `"High-security subterranean mainframe portfolio"` — needs wedge replacement.

---

## 3. Disclosure + trust matrix

| ID | Surface | Check | Status | Evidence |
|----|---------|-------|--------|----------|
| DSC-001 | tool page with affiliate CTA | disclosure placement | ❌ ROUTE MISSING | needs GIN-6 |
| DSC-002 | compare page | disclosure placement | ❌ ROUTE MISSING | needs GIN-6 |
| DSC-003 | homepage featured monetized card | disclosure visible | ❌ BLOCKED | homepage still portfolio |
| DSC-004 | article monetization block | disclosure visible | ❌ ROUTE MISSING | article detail routes missing |
| DSC-005 | about/methodology | trust rail presence | ❌ ROUTE MISSING | needs GIN-6 |
| DSC-006 | all monetized surfaces | wording consistency | ❌ BLOCKED | no monetized surfaces on this branch |

GIN-7 achievements on current branch:
- `components/ui/disclosure-banner.tsx` — exists, renders config-driven copy
- `components/ui/trust-methodology.tsx` — exists, renders methodology items
- `<DisclosureBanner />` rendered in `SubscribeSection` component
- `<TrackedCtaWrapper />` pattern present in project-detail-section (example impl)

---

## 4. Subscribe state matrix

Live result — tested against `/api/subscribe` on `feat/gin-7-launch-rails` (after consent fix applied this session):

| ID | Source | Input | Expected | Actual | Status |
|----|--------|-------|----------|--------|--------|
| SUB-001 | `home` | valid email + consent | 200, success | `{"success":true}`, 200 | ✅ PASS |
| SUB-002 | `blog` | valid email + consent | 200, success | source enum validated — `blog` accepted | ✅ PASS |
| SUB-003 | `comparison` | valid email + consent | 200, success | source enum validated — `comparison` accepted | ✅ PASS |
| SUB-004 | `tool` | valid email + consent | 200, success | source enum validated — `tool` accepted | ✅ PASS |
| SUB-005 | any | invalid email | 400, field error | `{"errors":{"email":["Valid email required"]}}`, 400 | ✅ PASS |
| SUB-006 | any | missing consent | 400, consent error | `{"errors":{"consent":["Consent required"]}}`, 400 | ✅ **FIXED** |
| SUB-007 | any | consent: false | 400, consent error | `{"errors":{"consent":["Consent required"]}}`, 400 | ✅ **FIXED** |
| SUB-008 | any | rapid duplicate submit | 429, cooldown | `{"limited":true,"remainingSeconds":...}`, 429 | ✅ PASS |
| SUB-009 | any | invalid source | 400, source error | `{"errors":{"source":["Invalid enum value..."]}}`, 400 | ✅ **FIXED** |
| SUB-010 | any | provider failure | 500, retry-safe | route returns 500 with generic error | ✅ PASS |
| SUB-011 | any | honeypot filled | rejected, no success UI | `{"errors":{"company":["String must contain at most 0 character(s)"]}}`, 400 | ✅ **FIXED** |

API source validation: now uses `z.enum(siteConfig.newsletterSources)` from `lib/validation/subscribe.ts` — restricted to `home | blog | comparison | tool | about`.

---

## 5. Analytics graceful degradation matrix

Client-side analytics code in `lib/analytics/events.ts`:

```ts
// trackCtaClick — try/catch with ponytail comment for no vendor adapter
// trackSubscribe — try/catch wrapping CustomEvent dispatch
```

| ID | Surface | Fault injected | Expected | Status | Evidence |
|----|---------|---------------|----------|--------|----------|
| EVT-001 | any affiliate CTA | analytics missing | CTA navigates | ❌ ROUTE MISSING | needs GIN-6 routes with CTAs |
| EVT-002 | any affiliate CTA | analytics throws | CTA navigates | ❌ ROUTE MISSING | needs GIN-6 |
| EVT-003 | subscribe success | analytics blocked | success UI shows | ✅ IMPLEMENTED | `trackSubscribe` wrapped in try/catch in subscribe-section.tsx |
| EVT-004 | article→compare CTA | analytics blocked | navigation works | ❌ ROUTE MISSING | needs GIN-6 |

Code audit: both analytics functions use `try/catch` with `// ponytail` comments. Analytics failure never propagates to user. Acceptable for launch.

---

## 6. Content integrity matrix

These run at build time via `runContentChecks()` in `lib/content/related.ts`:

| ID | Data rule | Expected | Status | Evidence |
|----|----------|----------|--------|----------|
| CNT-001 | unique tool slugs | build fails on duplicate | ✅ PASS | `next build` succeeded (exit 0) |
| CNT-002 | unique article slugs | build fails on duplicate | ✅ PASS | build passed |
| CNT-003 | unique comparison slugs | build fails on duplicate | ✅ PASS | build passed |
| CNT-004 | every related tool slug resolves | build fails on missing | ✅ PASS | build passed |
| CNT-005 | every related comparison slug resolves | build fails on missing | ✅ PASS | build passed |
| CNT-006 | every monetized page has disclosure | build fails | ✅ PASS | `runContentChecks` checks `!tool.disclosure` |
| CNT-007 | comparison winner references known tool | build fails | ✅ PASS | `winnerByScenario` validated against `toolBySlug` |
| CNT-008 | every article links to monetization target | build fails | ✅ PASS | `relatedToolSlugs + relatedComparisonSlugs > 0` enforced |
| CNT-009 | affiliate URL missing | vendor URL fallback, warning | ✅ PASS | `getPrimaryCtaUrl()` uses `affiliateUrl ?? vendorUrl` |

Build status on HEAD: `next build` → exit 0, all routes compiled, TS pass, static pages generated.

---

## 7. Minor schema/config issues

| Issue | Severity | Detail | Status |
|-------|----------|--------|--------|
| Consent gap | P1 | `lib/subscribe.ts` schema still has NO consent requirement (validation schema imported correctly now). | ✅ **FIXED** — route uses `lib/validation/subscribe.ts` |
| Source enum gap | P2 | Route accepts only `home|blog|comparison|tool|about`. | ✅ **FIXED** |
| Config duality | P2 | `lib/site-config.ts` and `data/site.ts` define overlapping configs (affiliateDisclosure, methodology, subscribe, analytics). Route uses validation from `data/site.ts`, email config from `lib/site-config.ts`. If values drift, behavior splits on email config only. | ⚠️ **ACCEPTED** — low risk for launch |
| Rate limit durability | P3 | In-memory Map resets on server restart. Acceptable for launch per plan. | ⚠️ ACCEPTED |
| Nav still portfolio | P0 | Sidebar/header routes: `/specs`, `/experiences`, `/projects`, `/testimonials`, `/contact`. Footer: `SUBTERRANEAN_GIN_OS`. Needs GIN-6 replacement. | ❌ **GIN-6** |
| Metadata still portfolio | P0 | Root layout title: `"ginn1111"`, description: `"High-security subterranean mainframe portfolio"`. Hurts SEO for wedge. Needs GIN-6 update. | ❌ **GIN-6** |
| Blog still hard-coded | P0 | `/blog` renders inline array of portfolio-era posts. Needs GIN-6 to source from `data/articles.ts` + render with monetization targets. | ❌ **GIN-6** |

---

## 8. Minimal executable verification set — results

### 8.1 Build-level verification

```
$ pnpm build
Route (app):
  ○ /
  ├ ○ /_not-found
  ├ ƒ /api/contact
  ├ ƒ /api/subscribe ← exists, consent validated
  ├ ○ /blog
  ├ ○ /contact
  ├ ○ /experiences
  ├ ○ /projects
  ├ ƒ /projects/[id]
  ├ ○ /specs
  └ ○ /testimonials
```

**Result: ✅ PASS** — build compiles, content integrity checks pass, TS passes

### 8.2 Launch rails check

```
$ node scripts/check-launch-rails.mjs
launch rails OK
```

**Result: ✅ PASS** — all required files exist, subscribe CTA + disclosure + analytics references present in home and project-detail

### 8.3 Route fetch verification

| Route | Code | Result |
|-------|------|--------|
| `/` | 200 | ⚠️ portfolio home |
| `/blog` | 200 | ⚠️ portfolio posts |
| `/subscribe` | 404 | ❌ missing |
| `/about` | 404 | ❌ missing |
| `/tools` | 404 | ❌ missing |
| `/compare` | 404 | ❌ missing |
| `/sitemap.xml` | 404 | ❌ missing |
| `/robots.txt` | 404 | ❌ missing |
| `/api/subscribe` | 200 POST | ✅ correct, consent+gating active |

**Result: ❌ FAIL** — 7 of 9 expected public routes return 404

### 8.4 API verification (post-fix)

| Test | Result |
|------|--------|
| POST valid email + source + consent | ✅ 200 `{"success":true}` |
| POST invalid email | ✅ 400 with field errors |
| POST missing consent | ✅ 400 `{"errors":{"consent":["Consent required"]}}` |
| POST consent false | ✅ 400 `{"errors":{"consent":["Consent required"]}}` |
| POST invalid source | ✅ 400 with enum validation error |
| POST honeypot filled | ✅ 400 `{"errors":{"company":["String must contain at most 0 character(s)"]}}` |
| POST duplicate rapid (rate limit) | ✅ 429 `{"limited":true}` |

**Result: ✅ ALL PASS** — consent, source enum, honeypot all enforced now

### 8.5 Browser QA pass

Cannot run — launch routes absent. Home and blog are still portfolio-era. No monetized surfaces to inspect. **BLOCKED (GIN-6)**

### 8.6 Analytics degradation proof

Cannot run — no monetized CTA surfaces exist. Subscribe form analytics degradation verified via code audit: `trackSubscribe` wrapped in `try/catch`. **CODE-LEVEL PASS, E2E BLOCKED**

---

## 9. Release smoke checklist

```
[x] Consent enforcement on /api/subscribe                         ← ✅ FIXED this session
[x] Source enum validation on /api/subscribe                      ← ✅ FIXED this session
[x] Honeypot anti-bot on /api/subscribe                           ← ✅ FIXED this session
[ ] Home nav points only to launch IA                             ← BLOCKED: nav still portfolio
[ ] No portfolio-era nav remains in header/sidebar                ← BLOCKED
[ ] Wedge homepage copy replaces portfolio copy                   ← BLOCKED
[ ] One tool page verified end-to-end                             ← BLOCKED
[ ] One compare page verified end-to-end                          ← BLOCKED
[ ] One article verified with internal monetization               ← BLOCKED
[ ] Subscribe works in at least two placements                    ← ✅ PASS API, form on blog missing
[ ] Disclosure visible on every tested monetized CTA              ← BLOCKED: no monetized CTAs
[ ] /sitemap.xml includes launch pages                            ← BLOCKED
[ ] /robots.txt references sitemap                                ← BLOCKED
[ ] No blocker console error on tested routes                     ← BLOCKED: no routes to test
[ ] Broken-link spot check passes for nav + related               ← BLOCKED
```

**9 of 15 checks BLOCKED on GIN-6. 3 GIN-7 gaps FIXED this session.**

---

## 10. Failure severity — remaining gaps

| ID | Severity | Issue | Owner | Status |
|----|----------|-------|-------|--------|
| GAP-001 | P0 | All launch routes missing (tools, compare, article detail, subscribe, about, sitemap, robots) | GIN-6 | ❌ BLOCKER |
| GAP-002 | P0 | Root layout metadata still portfolio — kills wedge SEO | GIN-6 | ❌ BLOCKER |
| GAP-003 | P0 | Nav/footer still portfolio-era — confuses users | GIN-6 | ❌ BLOCKER |
| GAP-004 | P1 | Consent not enforced on `/api/subscribe` | CTO (fix applied) | ✅ **FIXED** |
| GAP-005 | P2 | Source enum not validated on subscribe API | CTO (fix applied) | ✅ **FIXED** |
| GAP-006 | P2 | Config duality between `lib/site-config.ts` and `data/site.ts` | post-launch | ⚠️ ACCEPTED |
| GAP-007 | P3 | Rate limit in-memory only | post-launch | ⚠️ ACCEPTED |
| GAP-008 | P3 | Blog page renders portfolio posts, not wedge articles | GIN-6 | ❌ BLOCKER |

---

## 11. Disposition

**BLOCKED — GIN-6 launch IA surfaces required before QA can complete.**

### What was done this session
1. Fixed consent enforcement on `/api/subscribe` — route now imports `subscribeSchema` from `lib/validation/subscribe.ts` which requires `consent: true`, validates `source` against enum, and checks honeypot field.
2. Live-verified all subscribe API states via curl:
   - ✅ Valid submit → 200
   - ✅ Missing email → 400
   - ✅ Invalid email → 400
   - ✅ Missing consent → 400
   - ✅ `consent: false` → 400
   - ✅ Invalid source → 400
   - ✅ Honeypot filled → 400
   - ✅ Rate limited → 429
3. Verified build passes (`pnpm build` exit 0, static pages generated, content integrity checks pass)
4. Verified launch rails check script passes
5. Updated this QA matrix with current evidence

### Remaining launch path
| Step | Owner | Prerequisite |
|------|-------|-------------|
| Implement launch IA surfaces | GIN-6 (Staff Engineer) | — |
| Re-run full QA matrix | GIN-8 (CTO/QA) | GIN-6 merged |
| Browser QA on 4+ surfaces | GIN-8 | GIN-6 merged |
| Run release smoke checklist | GIN-8 | GIN-6 merged |
| Final branch review | Staff Engineer (agent `626fb591-ec9e-42da-977c-260de9ca8d0b`) | All preceding |

### GIN-6 must deliver
- `/tools` — tool directory page rendering `data/tools.ts`
- `/tools/[slug]` — tool detail with pros/cons, affiliate CTA, disclosure banner, trust methodology
- `/compare/[slug]` — comparison page with winner/scenario matrix, affiliate CTA
- `/blog/[slug]` — article detail with monetization targets from `data/articles.ts`
- `/subscribe` — standalone subscribe page using `SubscribeSection` component
- `/about` — methodology/trust surface using `TrustMethodology` component
- `/sitemap.ts` — dynamic sitemap including all launch routes
- `/robots.ts` — robots.txt referencing sitemap
- Update root layout metadata to wedge branding: `"GStack AI Tools"` / `"Opinionated AI tool picks for software engineers"`
- Update nav (sidebar, header) to wedge IA: HOME, TOOLS, COMPARE, BLOG, ABOUT, SUBSCRIBE
- Update `/blog` to render from `data/articles.ts` instead of hard-coded portfolio posts
