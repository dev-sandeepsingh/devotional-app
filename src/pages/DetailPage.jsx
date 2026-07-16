import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { getItem, CATEGORIES } from "../i18n/content";

// Languages offered by the on-page dropdown. This selects only this page's
// content (from the item's hi.json / en.json) — it does not change the site.
const DETAIL_LANGS = [
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
];

// Accent colors cycled across FAQ entries.
const FAQ_BORDERS = ["border-orange-500", "border-red-500", "border-yellow-500"];

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
  const [lang, setLang] = useState("hi");
  const item = getItem(category, slug);

  // Unknown item → back to the category list.
  if (!item) return <Navigate to={`/${CATEGORIES[category]?.route || ""}`} replace />;

  const c = item[lang] || item.hi || item.en;
  const faqPairs = toFaqPairs(c.faq);
  const cat = CATEGORIES[category];
  // Category display name without its leading emoji, e.g. "📿 Chalisas" → "Chalisas".
  const catLabel = cat.heading.slice(cat.heading.indexOf(" ") + 1);

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{c.title} | Devotional</title>
        <meta name="description" content={c.intro} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[{ label: catLabel, to: `/${cat.route}` }, { label: c.title }]}
          className="mb-4"
        />

        {/* Header with on-page language dropdown */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-4 mb-6 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl md:text-2xl font-bold mb-1.5">{item.icon} {c.title}</h1>
              <p className="text-sm opacity-90">{c.intro}</p>
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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
            {c.description}
          </p>
        </div>

        {/* Meaning & Explanation */}
        {c.meaning && (
          <CollapsibleSection icon="📚" title="Meaning & Explanation" defaultOpen={true}>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
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
          <ShareButtons url={window.location.href} title={c.title} />
        </CollapsibleSection>
      </div>
    </article>
  );
}
