# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A devotional content site (Hanuman Chalisa / Mantra / Aarti / Blog) plus a separate admin
panel, built as a single React SPA. Stack: **React 19 + Vite + React Router 7 + Tailwind CSS 4
+ i18next + react-helmet-async**, with **@tanstack/react-query** and **axios** available for
data fetching.

## Commands

```bash
npm run dev       # Vite dev server (proxies /api -> backend, see below)
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # ESLint — must pass clean before finishing a change
```

There is no test runner configured yet. Verify changes with `npm run lint` + `npm run build`.

## Backend & Swagger — read this before building any page

There is a **separate backend running locally at `http://localhost:4000`**.

- **Swagger / OpenAPI docs: http://localhost:4000/api/docs** (JSON spec typically at
  `http://localhost:4000/api/docs-json`).
- **Every page and feature that shows or submits data MUST be driven by the backend API as
  documented in Swagger — not by hardcoded content.** Before adding or editing a page:
  1. Open the Swagger docs and find the endpoint(s) for that page's data.
  2. Use the exact paths, request bodies, query params, and response shapes from the spec.
  3. Wire the page to those endpoints (fetch/react-query) instead of embedding literal content.
  Much of the current user-facing content is still hardcoded placeholder text — when you touch
  a page, migrate it to the real Swagger-documented endpoint.
- If the spec and this file ever disagree, **the live Swagger spec is the source of truth** —
  follow it and flag the mismatch.

### API conventions (from `src/admin/api.js`)

- Base URL: `import.meta.env.VITE_API_URL || "/api/v1"`. In dev, Vite proxies `/api` ->
  `http://localhost:4000` (see `vite.config.js`), so a call to `/api/v1/blogs` hits
  `http://localhost:4000/api/v1/blogs`. Override the proxy target with
  `VITE_API_PROXY_TARGET`; override the base URL in prod with `VITE_API_URL`.
- Response envelopes: success is `{ data: ... }`; error is `{ error: { message, details? } }`.
  `apiFetch` unwraps `data` and throws an `Error` (with `.status` and `.details`) on failure.
- Auth: pass `{ auth: true }` to attach `Authorization: Bearer <token>`. The token comes from
  `getToken()` in `src/admin/session.js` (localStorage key `adminToken`).
- Reuse `apiFetch` and the exported `*Api` objects in `src/admin/api.js`; add new resources
  there following the same pattern rather than calling `fetch` ad hoc.

## Project structure

```
src/
  main.jsx           Entry: mounts App, wraps in HelmetProvider, imports i18n init
  App.jsx            BrowserRouter + all <Route> definitions (single source of truth for routing)
  UserShell.jsx      Public-site layout: Header + Sidebar + Footer + BottomNav, renders <Outlet/>
  pages/             One component per route (Home, Chalisa, Mantra, Aarti, Blog, detail pages, etc.)
  components/         Shared UI (Header, Sidebar, Footer, DarkModeToggle, CategoryListPage, ...)
  admin/             Admin panel — its own layout/auth, NOT wrapped in UserShell, not linked from the site
    api.js           apiFetch + resource APIs (authApi, blogsApi)
    session.js       JWT/session helpers (localStorage), isAdmin()
  i18n/              i18next init + language JSON bundles, plus per-item content folders (see below)
```

## Content pages: categories → items → detail pages

The devotional content is organized as **category (main) pages → items → detail pages**:

- **Category / main pages**: Chalisa, Mantras, Aartis, Stotras, Ashtakams, Sahasranamas,
  Vrat Kathas (routes `/chalisa`, `/mantra`, `/aarti`, `/stotras`, `/ashtakams`,
  `/sahasranamas`, `/vrat-kathas`). Each lists the **items** in that category as cards.
  There are **no per-category page components** — one shared
  `components/CategoryListPage.jsx` renders every category from the `CATEGORIES` registry
  in `src/i18n/content.js` (header copy, meta tags, and the "about" section all live there),
  and `App.jsx` generates both the list and detail routes by iterating `CATEGORIES`.
- **Items**: e.g. Hanuman Chalisa, Shiv Chalisa, Ram Chalisa (Chalisa); Hanuman/Gayatri/
  Mahamrityunjaya (Mantra); Hanuman/Om Jai Jagdish/Ganesh (Aarti). Clicking a card opens that
  item's **detail page** at `/<category>/<item-slug>` (e.g. `/chalisa/hanuman-chalisa`).
- **Detail page**: a single shared `pages/DetailPage.jsx` for every category. It has an on-page
  **language dropdown (हिंदी / English)** whose only job is to swap *this page's* content between
  the item's `hi.json` and `en.json` — it does not change the rest of the site. There is no
  language switcher in the top bar.

### Content location & shape

Per-item content lives under `src/i18n/<Category>/<item-slug>/` with one file per language:

```
src/i18n/
  Chalisa/hanuman-chalisa/{en,hi}.json
  Mantras/gayatri-mantra/{en,hi}.json
  Aartis/ganesh-aarti/{en,hi}.json
  content.js          Registry: auto-discovers the folders above via import.meta.glob
```

Each `en.json` / `hi.json` has the shape (only `hi` and `en` for now; more languages later):

```json
{ "title": "", "intro": "", "description": "", "meaning": "",
  "faq": { "q1": "", "a1": "", "q2": "", "a2": "" } }
```

**To add an item**: create the folder + `en.json`/`hi.json`; it's auto-discovered. Optionally add
an icon in `ITEM_ICONS` in `i18n/content.js` (otherwise it falls back to the category icon).
The list-page card title is composed as `"<hi.title> (<en.title>)"` on a single line.

**To add a category**: add its folder name to the `import.meta.glob` pattern and a `CATEGORIES`
entry (route, heading, meta, about copy) in `i18n/content.js` — routes and pages follow
automatically; no new component or route edits needed.

> Note: this content is currently local JSON. Per the workspace contract, user-facing content
> should ideally come from the backend/Swagger API — migrate these to the API when endpoints exist.

### Routing

- All routes live in `App.jsx`. Public routes are nested under `<UserShell/>`; admin routes
  (`/adminLogin`, `/admin/*`) are separate and gated by `RequireAdmin`.
- Item detail routes are `/<category>/:slug` → `<DetailPage category="..." />`; the item comes
  from `useParams()` and the language from the on-page dropdown. Other detail pages (e.g.
  `<BlogDetailPage slug="..." />`) still take variants via **props**.

## Conventions

- **Tailwind class-based dark mode** (`dark:` variants), toggled via the `dark` class on
  `<html>` (initialized in `App.jsx`, persisted in localStorage). See `DARK_MODE_SETUP.md`.
- One `react-helmet-async` `<Helmet>` block per page for title/meta/canonical.
- Wrap presentational list/section components in `memo()` where the existing code does.
- Admin storage keys (`adminToken`, `adminUser`) are kept deliberately separate from any
  user-site storage — don't collide with them.

## Known gaps (see PROJECT_STRUCTURE.md for detail)

- **i18n is wired but unused** — pages hardcode text; `t()`/`useTranslation()` are not called,
  so switching language has no visible effect yet.
- **react-query and axios are installed but not yet used** — data fetching currently goes
  through `apiFetch` (fetch). Prefer react-query for new page data wiring.
- `Explorer`, `Search`, `Saved` are placeholder UIs.

## Related docs

- `PROJECT_STRUCTURE.md` — deeper structure notes and history.
- `DARK_MODE_SETUP.md`, `MOBILE_VIEW_SPEC.md`, `README.md`.
