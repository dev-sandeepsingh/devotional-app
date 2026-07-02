# Mobile View Refinement — Spec

Goal: bring the mobile (`< lg`, i.e. `< 1024px`) experience in line with the "New Home Screen"
mockup. Desktop layout (sidebar rail + top nav) is **unchanged** — every addition below is scoped to
mobile with Tailwind's responsive prefixes so the desktop view keeps working exactly as it does today.

Reference screenshot: the two-phone mockup supplied in chat (home screen + open drawer).

---

## 1. Bottom navigation bar (the headline change — "icon at bottom")

New component: `src/components/BottomNav.jsx`.

- **Fixed** to the bottom of the viewport, full width, `lg:hidden` (mobile/tablet only; desktop uses
  the sidebar rail).
- 5 items, matching the mockup, in order: **Home** 🏠 (`/`), **Chalisas** 📿 (`/chalisa`),
  **Mantras** ✨ (`/mantra`), **Aartis** 🎵 (`/aarti`), **Blog** 📖 (`/blog`).
- Each item = icon stacked over a small label. Active route is highlighted in the brand orange
  (`text-orange-500`); inactive items are muted gray. Active state derived from `useLocation()`
  (exact match, with `/` special-cased).
- Uses `<Link>` from react-router — taps navigate client-side.
- Light + dark variants: white/`gray-950` background, top border, subtle shadow.
- **Safe-area aware**: bottom padding uses `env(safe-area-inset-bottom)` so it clears the iOS home
  indicator. Requires `viewport-fit=cover` added to the viewport meta in `index.html`.
- Accessibility: `<nav aria-label="Bottom navigation">`, `aria-current="page"` on the active link,
  `aria-hidden` on the emoji icons.

Layout consequence: the page content must not hide behind the fixed bar. Add bottom padding to the
`<main>` on mobile only (`pb-20 lg:pb-0`) in `App.jsx`.

---

## 2. Quick Access chips

New component: `src/components/QuickAccess.jsx`, rendered near the top of the Home page (below the hero
slider), `lg:hidden` OR shown on all sizes — **decision: show on all sizes**, it reads fine on desktop too.

- A horizontally-scrollable row of pill chips: **☀️ Morning**, **🌙 Evening**, **📅 Tuesday**,
  **📅 Saturday**.
- Styling per mockup: rounded-full, white card background, soft border, orange icon + gray label.
- Behavior: these are **navigational shortcuts to the Search page with a preset query**
  (e.g. `/search?q=morning`). Search doesn't yet consume the query param, so for now the chips simply
  route to `/search` — wiring the query into results is noted as follow-up, not built here (keeps scope
  honest; no fake filtering logic).
- Horizontal overflow scroll with hidden scrollbar on mobile; wraps/centers on wider screens.

---

## 3. Home page section additions & restyle

Edits to `src/pages/Home.jsx`. New sections inserted to match the mockup's vertical order:

1. Hero slider (already exists — keep).
2. **Quick Access** (new, section 2 above).
3. **Explore by Category** — restyle the existing 4 cards to the mockup look: soft pastel **circular**
   icon badge (not the current gradient block), title, one-line description, and a small circular
   arrow affordance. Keep the existing `/chalisa /mantra /aarti /blog` links. Add the **"See All →"**
   link on the section header (routes to `/explorer`).
4. **Today's Featured** (new) — a single wide card: "Tuesday" badge, thumbnail (reuse
   `public/assets/hanuman.png`), title "Hanuman Chalisa", one-line blurb, meta row
   (`12 min read · हिंदी`), and a **Read** button linking to `/hanuman-chalisa-hindi`.
5. **Trending This Week** (new) — header with "See All →", then a horizontally-scrollable row of small
   cards. **Content is placeholder** (Shiv Chalisa / Durga Chalisa / Gayatri Mantra with read-time
   labels) because the app currently only has Hanuman content and no data source for these; each card
   links to `/chalisa` for now. Clearly a stub — flagged so it isn't mistaken for real wired data.

Existing lower sections (Featured Content, Why Choose Us, Stats, CTA, Languages) stay as-is.

Note on a global CSS gotcha: `index.css` has a broad `html.dark .grid > div { background-color: #fff }`
rule. New dark-mode cards must set their own `dark:bg-*` and, where needed, guard against that rule.
The new circular icon badges use explicit backgrounds to avoid inheriting it.

---

## 4. Mobile drawer (Sidebar) — fuller menu

Edits to `src/components/Sidebar.jsx`. The mockup's drawer shows a richer menu than today's 4 items.

- Mobile menu items become: **Home** 🏠, **Chalisas** 📿, **Mantras** ✨, **Aartis** 🎵, **Blog** 📖,
  **Saved** ❤️, plus **Explorer** 🔍 and **Search** 🔎 (keep the existing two so their routes stay
  reachable from the drawer).
- The mockup also lists **History** 🕘 and **Settings** ⚙️. These have **no routes/pages** today.
  Decision: **omit** them for now rather than add dead links — noted as follow-up. (Alternative if you
  want them: stub pages. Not doing that unless asked.)
- **Daily Streak** widget at the bottom of the drawer (per mockup): a small card — 🔥 "Daily Streak /
  7 Days / Keep your devotion alive!". This is a **static display** (no streak tracking logic yet);
  built as presentational only.
- Desktop icon-rail collapse behavior added earlier stays intact; the extra items just render in the
  rail too.

---

## 5. Header (mobile) — minor

`src/components/Header.jsx` already matches the mockup closely on mobile (hamburger, logo, language
select, dark toggle). No structural change planned. If the language `<select>` looks cramped next to the
toggle on small screens, tighten spacing only — no behavior change.

---

## Files touched

| File | Change |
|---|---|
| `index.html` | add `viewport-fit=cover` to viewport meta (safe-area support) |
| `src/components/BottomNav.jsx` | **new** — fixed mobile bottom nav |
| `src/components/QuickAccess.jsx` | **new** — quick-access chip row |
| `src/App.jsx` | render `<BottomNav>`, add `pb-20 lg:pb-0` to `<main>` |
| `src/pages/Home.jsx` | add QuickAccess, Today's Featured, Trending; restyle category cards |
| `src/components/Sidebar.jsx` | fuller mobile menu + Daily Streak widget |

## Explicitly out of scope (flagged, not built)

- Real search-query filtering behind Quick Access chips.
- History / Settings pages (routes don't exist).
- Real "Trending" data — cards are placeholders.
- Streak tracking logic — the Daily Streak widget is static.
- Swapping placeholder hero/`hanuman.png` art for licensed images (pre-existing issue).

## Verification

`npm run lint` + `npm run build` clean, then drive it headless at a mobile viewport (~390×844) with a
screenshot of: home (bottom nav visible), an active-tab state after tapping a bottom-nav item, and the
open drawer with the fuller menu + streak widget.
