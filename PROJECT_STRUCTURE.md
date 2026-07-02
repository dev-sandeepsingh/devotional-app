# Project Structure & Reference

Devotional content site: React 19 + Vite + React Router 7 + Tailwind CSS 4 + i18next + react-helmet-async.

## Directory layout

```
src/
  App.jsx            Root: BrowserRouter, Header/Sidebar/Footer shell, all <Route> definitions
  main.jsx            Entry point: mounts App, wraps in HelmetProvider, imports i18n init
  i18n/
    index.js          i18next init, registers 7 language resource bundles
    {hi,en,pa,bn,mr,ta,te}.json   Translation strings per language (not yet consumed by pages — see Known Issues)
  components/         Shared UI: Header, Sidebar, Footer, DarkModeToggle, LanguageSwitcher,
                       CollapsibleSection, HanumanImage, RelatedProducts, ContentActions, ShareButtons
  pages/               One component per route (see Routing below)
```

## Routing

All routes are declared directly in `App.jsx` (single source of truth). There is no `routes.jsx` —
an earlier duplicate router file existed but was dead code (never imported, and having two
`BrowserRouter`s would have been a bug if it ever got wired in) and has been removed.

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | |
| `/explorer`, `/search`, `/saved` | `Explorer`, `Search`, `Saved` | Placeholder/stub UIs |
| `/chalisa`, `/mantra`, `/aarti`, `/blog` | `Chalisa`, `Mantra`, `Aarti`, `Blog` | List/landing pages, structurally near-identical |
| `/donate` | `Donate` | |
| `/hanuman-chalisa-hindi`, `/hanuman-chalisa-english` | `ContentPage lang="hindi"\|"english"` | Content picked from a per-lang map, keyed by the `lang` prop passed at the route |
| `/hanuman-mantra-hindi`, `/hanuman-mantra-english` | `MantraDetailPage lang="hindi"\|"english"` | Same pattern |
| `/hanuman-aarti-hindi`, `/hanuman-aarti-english` | `AartiDetailPage lang="hindi"\|"english"` | Same pattern |
| `/blog/power-of-faith`, `/blog/importance-of-hanuman-chalisa`, `/blog/mantra-meditation-benefits`, `/blog/daily-devotional-guide` | `BlogDetailPage slug="..."` | Content picked from a per-slug map; slugs now match the links in `Blog.jsx` |

## Conventions in use

- Tailwind class-based dark mode (`dark:` variants), toggled via the `dark` class on `<html>`. See `DARK_MODE_SETUP.md` for the full write-up.
- `react-helmet-async` `<Helmet>` block per page for title/meta/canonical.
- Presentational list components (`Header`, `Sidebar`, `RelatedProducts`, `CollapsibleSection`) wrapped in `memo()`.
- Detail pages share a common section pattern: gradient header → `<pre>` text block → `ContentActions` → stacked `CollapsibleSection`s (meaning/FAQ/share) → `ShareButtons`.

## Refinements made (2026-07-02)

- Removed `src/routes.jsx` — unused duplicate `BrowserRouter`/`Routes` definition, superseded by `App.jsx`.
- Fixed 4 ESLint errors:
  - `App.jsx`: dropped the unused `mounted` state and its `setState` call inside the dark-mode-init `useEffect` (was also triggering the `react-hooks/set-state-in-effect` rule).
  - `DarkModeToggle.jsx`: replaced the mount-time `useEffect` + `mounted` guard with a lazy `useState(() => ...)` initializer, so the dark-mode preference is computed once on first render instead of via a synchronous `setState` inside an effect.
  - `Home.jsx`: removed unused `activeCategory`/`setActiveCategory` state (declared but never read or set anywhere in the component).
- `npm run lint` and `npm run build` both pass cleanly after these changes.

## Detail-page content routing (fixed 2026-07-02)

`ContentPage`, `MantraDetailPage`, and `AartiDetailPage` each now accept a `lang` prop
(`"hindi"` | `"english"`, defaulted to `"hindi"`), passed explicitly from the matching `<Route>` in
`App.jsx`. Each component keeps a small `{ hindi: {...}, english: {...} }` content map (title, meta
title/description, canonical path, subtitle, body text) and looks up the right entry with
`CONTENT[lang] ?? CONTENT.hindi`. The English variants currently hold clearly-marked placeholder text —
swap those in the content maps for verified translations when ready.

`BlogDetailPage` now accepts a `slug` prop and looks up a `BLOG_POSTS[slug]` entry (title, date,
read time, meta description, and an ordered list of `{ icon, title, paragraphs?, bullets? }` sections),
rendered generically via `.map()` instead of one hardcoded JSX tree. This also fixed a separate bug: the
routes in `App.jsx` previously used slugs (`spiritual-wisdom`, `meditation-guide`, `devotion-benefits`)
that didn't match any of the links in `Blog.jsx` (`importance-of-hanuman-chalisa`,
`mantra-meditation-benefits`, `daily-devotional-guide`, `power-of-faith`) — three of the four blog cards
on `/blog` were dead links. Routes were realigned to the slugs `Blog.jsx` actually links to, and each got
real (if still placeholder-depth) content instead of falling through to nothing.

Why props instead of `useParams()`: React Router 7's matcher requires a dynamic segment to occupy a whole
path segment, so a pattern like `/hanuman-chalisa-:lang` can't cleanly extract `hindi`/`english` from the
existing hyphenated URLs without changing the URL shape (which would break the existing canonical links).
Passing the variant as a prop from the literal route keeps the exact same URLs and needs no new
dependency.

## Known issues / tech debt (flagged, not changed)

These are structural gaps that need a product/content decision, not a mechanical cleanup, so they were
intentionally left as-is:

1. **i18n is wired but unused.** `i18next` is initialized with 7 language JSON bundles and
   `LanguageSwitcher` calls `i18n.changeLanguage()`, but no page or component calls `useTranslation()`/`t()` —
   all visible text is hardcoded directly in JSX. As a result, switching languages currently has no visible
   effect anywhere in the app. To make it functional, page copy needs to be moved into the `i18n/*.json`
   resource files and read via `t('key')`.
2. **Near-duplicate list pages.** `Chalisa.jsx` and `Mantra.jsx` (and likely `Aarti.jsx`/`Blog.jsx`) share
   near-identical structure (gradient header, card grid, `RelatedProducts` sidebar, "About" section) with
   only copy/color/data differing. Could be collapsed into one shared `CategoryListPage` component
   parameterized by data.
3. **`Explorer`, `Search`, and `Saved` are placeholder UIs** (static/looped dummy cards, no real search
   or persistence logic yet) — expected to be filled in later, noted here so it's not mistaken for a bug.
