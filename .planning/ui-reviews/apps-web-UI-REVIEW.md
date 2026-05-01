# Phase N/A - UI Review

**Audited:** 2026-04-28
**Baseline:** abstract 6-pillar standards + `docs/frontend-product-contract.md`
**Migration note:** This review was created before the frontend moved to the current Vite app in `web/`. File references below have been updated to the closest current `web/src` surfaces where possible.
**Screenshots:** not captured (no dev server detected on ports 3000/5173/8080)

---

## Pillar Scores

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 3/4 | Product-specific language is strong, but some feedback copy remains generic and non-contextual. |
| 2. Visuals | 2/4 | Visual hierarchy is consistent but too card-uniform, so critical actions and risks are under-emphasized. |
| 3. Color | 2/4 | Token palette exists, but many hardcoded colors bypass tokens and weaken consistency guarantees. |
| 4. Typography | 3/4 | Type scale is mostly coherent across pages with predictable heading/body/mono usage. |
| 5. Spacing | 2/4 | Spacing tokens are present, but repeated inline pixel overrides create drift from the scale. |
| 6. Experience Design | 2/4 | Loading/empty states exist, but error and interaction handling are incomplete for trust-critical flows. |

**Overall: 14/24**

---

## Top 3 Priority Fixes

1. **Silent fallback to mock data in failed API fetches** - operators can be shown synthetic data during outages and make unsafe decisions - replace silent fallback with explicit error state + "demo data" badge and source attribution in each trust-critical view.
2. **No robust mobile drawer interaction contract** - small-screen users can keep background content active while nav is open, reducing task focus and accessibility - add backdrop, `Escape` close, focus trap, and body scroll lock for nav open state.
3. **Design-token bypass via hardcoded colors and inline spacing** - visual consistency will regress as pages scale - migrate hardcoded hex/rgba and inline pixel values into named CSS tokens/utilities and enforce with lint/check rules.

---

## Detailed Findings

### Pillar 1: Copywriting (3/4)

- **WARNING:** Copy generally matches trust-oriented language in the product contract and avoids empty buzzwords across primary journeys (`web/src/pages/Dashboard.jsx`, `web/src/pages/Explorer.jsx`, `web/src/components/trust/IdentityEvidencePanel.jsx`).
- **WARNING:** Some user feedback remains low-context and can be made more action-oriented (e.g., "Settings saved for this browser profile." and generic "Retry"), especially in failure paths where next action clarity matters (`web/src/pages/Team.jsx`, `web/src/components/app/AppLayout.jsx`).

### Pillar 2: Visuals (2/4)

- **WARNING:** Repeated use of visually similar card blocks for KPIs, warnings, and routine content can flatten hierarchy, making urgent fail-closed attention less salient than it should be (`web/src/pages/Dashboard.jsx`, `web/src/pages/Explorer.jsx`, `web/src/index.css`).
- **WARNING:** Trust-signaling elements exist (status pills, evidence links), but critical risk states should keep strong source attribution and recovery copy (`web/src/components/app/StatusBadge.jsx`, `web/src/components/trust/FallbackBanner.jsx`).

### Pillar 3: Color (2/4)

- **WARNING:** Core palette tokens are defined, which is a strong foundation (`web/src/index.css`).
- **WARNING:** Hardcoded colors and gradients should continue migrating toward semantic tokens to preserve theme consistency (`web/src/index.css`, `web/src/components/app/*`).

### Pillar 4: Typography (3/4)

- **WARNING:** Typography structure is coherent: controlled heading levels, muted secondary text, and mono for identifiers (`web/src/index.css`, `web/src/components/app/PageHeader.jsx`).
- **WARNING:** Ad hoc inline text sizing should be kept rare so the shared Tailwind scale remains predictable (`web/src/components/app/*`, `web/src/components/trust/*`).

### Pillar 5: Spacing (2/4)

- **WARNING:** Tailwind spacing utilities are consistently available and used in layout primitives (`web/src/index.css`, `web/src/components/app/AppLayout.jsx`).
- **WARNING:** Inline spacing exceptions should be kept rare so responsiveness behavior remains easy to reason about (`web/src/pages/PolicyBuilder.jsx`, `web/src/pages/Explorer.jsx`, `web/src/pages/Dashboard.jsx`).

### Pillar 6: Experience Design (2/4)

- **WARNING:** Data fetch failures must remain visibly attributed through trust envelopes so users can distinguish live backend state from fallback demo content (`web/src/api/gctlClient.js`, `web/src/hooks/useOpsEnvelope.js`, `web/src/components/trust/FallbackBanner.jsx`).
- **WARNING:** Async pages implement loading and empty states, but page-level error paths should keep clear recovery copy (`web/src/pages/Dashboard.jsx`, `web/src/pages/Explorer.jsx`, `web/src/pages/Onboarding.jsx`, `web/src/pages/PolicyBuilder.jsx`).
- **WARNING:** Mobile nav toggle behavior should preserve backdrop, escape-close, focus management, and body scroll expectations (`web/src/components/app/MobileNav.jsx`, `web/src/components/app/AppLayout.jsx`, `web/src/index.css`).
- **WARNING:** Clipboard interaction should expose user feedback if `navigator.clipboard` fails (`web/src/components/app/*`, `web/src/components/trust/*`).

---

## Files Audited

- `docs/frontend-product-contract.md`
- `web/src/index.css`
- `web/src/App.jsx`
- `web/src/pages/Dashboard.jsx`
- `web/src/pages/Onboarding.jsx`
- `web/src/pages/PolicyBuilder.jsx`
- `web/src/pages/Explorer.jsx`
- `web/src/pages/Swarm.jsx`
- `web/src/components/app/AppLayout.jsx`
- `web/src/components/app/MobileNav.jsx`
- `web/src/components/app/PageHeader.jsx`
- `web/src/components/app/StatusBadge.jsx`
- `web/src/components/trust/FallbackBanner.jsx`
- `web/src/components/trust/SourceBadge.jsx`
- `web/src/api/gctlClient.js`
- `web/src/api/seeds.js`
