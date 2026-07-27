import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { getItem, getItemMeta, getItems, getGroupedItems, getBanner, CATEGORIES } from "../i18n/content";
import { recordReading } from "../lib/streak";

// Languages offered by the on-page dropdown. This selects only this page's
// content (from the item's hi.json / en.json) — it does not change the site.
const DETAIL_LANGS = [
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
];

// Accent colors cycled across FAQ entries.
const FAQ_BORDERS = ["border-orange-500", "border-red-500", "border-yellow-500"];

// Reader text-size steps for the verses and meaning (A− / A+ control).
const TEXT_SIZES = [
  "text-base md:text-lg",
  "text-lg md:text-xl",
  "text-xl md:text-2xl",
  "text-2xl md:text-3xl",
  "text-3xl md:text-4xl",
  "text-4xl md:text-5xl",
];

// Flatten a { q1, a1, q2, a2, ... } faq object into ordered [{ q, a }] pairs.
function toFaqPairs(faq) {
  if (!faq) return [];
  const pairs = [];
  for (let i = 1; faq[`q${i}`]; i++) {
    if (faq[`a${i}`]) pairs.push({ q: faq[`q${i}`], a: faq[`a${i}`] });
  }
  return pairs;
}

// Shared detail page for every category (Chalisa / Mantra / Aarti). The category
// comes in as a prop from the route; the item slug comes from the URL.
export default function DetailPage({ category }) {
  const { slug } = useParams();
  // Reader preferences persist across visits (shared by all detail pages).
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("readerLang");
    return saved === "en" || saved === "hi" ? saved : "hi";
  });
  const [sizeIdx, setSizeIdx] = useState(() => {
    const n = parseInt(localStorage.getItem("readerTextSize"), 10);
    return Number.isInteger(n) ? Math.min(Math.max(n, 0), TEXT_SIZES.length - 1) : 1;
  });
  useEffect(() => localStorage.setItem("readerLang", lang), [lang]);
  useEffect(() => localStorage.setItem("readerTextSize", String(sizeIdx)), [sizeIdx]);

  // Full item content (description / meaning / faq) is loaded lazily from its
  // own async chunk; metadata (title / intro) is available synchronously so the
  // page chrome renders immediately while the body loads.
  const [item, setItem] = useState(null);
  const meta = getItemMeta(category, slug);

  // Reset scroll on every item change, load the item's full content, and count
  // a real item toward the daily reading streak once it resolves.
  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;
    setItem(null);
    getItem(category, slug).then((res) => {
      if (cancelled) return;
      setItem(res);
      if (res) recordReading();
    });
    return () => {
      cancelled = true;
    };
  }, [category, slug]);

  // Unknown item → back to the category list.
  if (!meta) return <Navigate to={`/${CATEGORIES[category]?.route || ""}`} replace />;

  // Linear prev/next through the category's list order.
  const items = getItems(category);
  const idx = items.findIndex((i) => i.slug === slug);
  const prevItem = idx > 0 ? items[idx - 1] : null;
  const nextItem = idx >= 0 && idx < items.length - 1 ? items[idx + 1] : null;

  // Related items come from the same named group (e.g. other Navadurga
  // chalisas), wrapping within the group; ungrouped categories use the list.
  const sections = getGroupedItems(category);
  const pool = sections.find((s) => s.items.some((i) => i.slug === slug))?.items || items;
  const poolIdx = pool.findIndex((i) => i.slug === slug);
  const related = [];
  for (let k = 1; k <= 3 && k < pool.length; k++) related.push(pool[(poolIdx + k) % pool.length]);

  const cat = CATEGORIES[category];
  // Full content once loaded; null while the async chunk is in flight.
  const c = item ? item[lang] || item.hi || item.en : null;
  // Title/intro fall back to metadata so the header shows before content loads.
  const title = c?.title || (lang === "en" ? meta.titleEn || meta.titleHi : meta.titleHi || meta.titleEn);
  const intro = c?.intro || (lang === "en" ? meta.introEn || meta.introHi : meta.introHi || meta.introEn);
  const faqPairs = toFaqPairs(c?.faq);
  const banner = getBanner(category, slug);
  // Category display name without its leading emoji, e.g. "📿 Chalisas" → "Chalisas".
  const catLabel = cat.heading.slice(cat.heading.indexOf(" ") + 1);

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{title} | Devotional</title>
        <meta name="description" content={intro} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[{ label: catLabel, to: `/${cat.route}` }, { label: title }]}
          className="mb-4"
        />

        {/* Hero banner — only shown for items that have artwork (see getBanner).
            Full width, but height capped so it stays a tidy size; object-contain
            keeps the whole image visible (never cropped) within that height. */}
        {banner && (
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 bg-gray-50 dark:bg-gray-800/50">
            <img
              src={banner}
              alt={title}
              loading="lazy"
              className="block w-full h-auto max-h-64 sm:max-h-72 md:max-h-80 object-contain"
            />
          </div>
        )}

        {/* Header with on-page language dropdown */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-4 mb-6 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl md:text-2xl font-bold mb-1.5">{meta.icon} {title}</h1>
              <p className="text-sm opacity-90">{intro}</p>
            </div>

            <div
              role="group"
              aria-label="Choose language"
              className="flex items-center gap-1 bg-black/20 rounded-full p-1 backdrop-blur-sm ring-1 ring-white/30 shadow-lg flex-shrink-0 self-start"
            >
              <span className="text-base pl-1.5" aria-hidden="true">🌐</span>
              {DETAIL_LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  className={`px-3 py-1 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    lang === l.code
                      ? "bg-white text-orange-600 shadow-md scale-105"
                      : "text-white/90 hover:bg-white/20"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Verses / main text */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-8">
          {/* Reader toolbar: adjustable text size for comfortable recitation */}
          <div className="flex items-center justify-end gap-2 pb-4 mb-6 border-b border-gray-100 dark:border-gray-700">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mr-1">
              Text size
            </span>
            <button
              type="button"
              onClick={() => setSizeIdx((i) => Math.max(0, i - 1))}
              disabled={sizeIdx === 0}
              aria-label="Decrease text size"
              className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-bold hover:bg-orange-50 dark:hover:bg-gray-700 hover:border-orange-300 transition disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              A−
            </button>
            <button
              type="button"
              onClick={() => setSizeIdx((i) => Math.min(TEXT_SIZES.length - 1, i + 1))}
              disabled={sizeIdx === TEXT_SIZES.length - 1}
              aria-label="Increase text size"
              className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-bold text-lg hover:bg-orange-50 dark:hover:bg-gray-700 hover:border-orange-300 transition disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              A+
            </button>
          </div>

          {/* Verse-style categories center the text; longform categories
              (e.g. Temples) are structured prose and read better left-aligned.
              While the content chunk loads, show a shimmer placeholder. */}
          {c ? (
            <p
              className={`text-gray-800 dark:text-gray-200 whitespace-pre-line ${
                cat.longform ? "text-left leading-relaxed" : "text-center leading-loose"
              } ${TEXT_SIZES[sizeIdx]}`}
            >
              {c.description}
            </p>
          ) : (
            <div className="animate-pulse space-y-3" aria-hidden="true">
              {[70, 85, 60, 90, 75, 80, 55, 88].map((w, i) => (
                <div
                  key={i}
                  className="h-4 rounded bg-gray-200 dark:bg-gray-700 mx-auto"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Meaning & Explanation */}
        {c?.meaning && (
          <CollapsibleSection icon="📚" title="Meaning & Explanation" defaultOpen={false}>
            <p className={`text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line ${TEXT_SIZES[sizeIdx]}`}>
              {c.meaning}
            </p>
          </CollapsibleSection>
        )}

        {/* FAQ — renders every qN/aN pair present in the item's faq object */}
        {faqPairs.length > 0 && (
          <CollapsibleSection icon="❓" title="Frequently Asked Questions" defaultOpen={false}>
            <div className="space-y-6">
              {faqPairs.map(({ q, a }, i) => (
                <div key={q} className={`border-l-4 pl-4 ${FAQ_BORDERS[i % FAQ_BORDERS.length]}`}>
                  <h3 className="text-lg font-bold dark:text-white mb-2">{q}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{a}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {/* Share */}
        <CollapsibleSection icon="📤" title="Share This Content" defaultOpen={false}>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Spread the spiritual wisdom by sharing this sacred text with friends and family
          </p>
          <ShareButtons url={window.location.href} title={title} />
        </CollapsibleSection>

        {/* Previous / next item in this category */}
        {(prevItem || nextItem) && (
          <nav aria-label={`More ${catLabel}`} className="grid grid-cols-2 gap-4 mt-2">
            {prevItem ? (
              <Link
                to={`/${cat.route}/${prevItem.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-400 transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 flex items-center gap-1">
                  <span aria-hidden="true">←</span> Previous
                </span>
                <span className="block mt-1 font-bold text-gray-900 dark:text-white leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {prevItem.titleHi || prevItem.titleEn}
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {nextItem && (
              <Link
                to={`/${cat.route}/${nextItem.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-400 transition-all text-right"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 flex items-center justify-end gap-1">
                  Next <span aria-hidden="true">→</span>
                </span>
                <span className="block mt-1 font-bold text-gray-900 dark:text-white leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {nextItem.titleHi || nextItem.titleEn}
                </span>
              </Link>
            )}
          </nav>
        )}

        {/* Related items from the same group */}
        {related.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
              🙏 You may also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/${cat.route}/${r.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-400 transition-all hover:-translate-y-0.5 flex items-center gap-3"
                >
                  <span
                    className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    {r.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-gray-900 dark:text-white leading-snug">
                      {r.titleHi || r.titleEn}
                    </span>
                    {r.titleHi && r.titleEn && (
                      <span className="block text-xs font-medium text-orange-600 dark:text-orange-400 truncate">
                        {r.titleEn}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
