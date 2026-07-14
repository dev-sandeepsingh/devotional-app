import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";
import { getItem, CATEGORIES } from "../i18n/content";

// Languages offered by the on-page dropdown. This selects only this page's
// content (from the item's hi.json / en.json) — it does not change the site.
const DETAIL_LANGS = [
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
];

// Shared detail page for every category (Chalisa / Mantra / Aarti). The category
// comes in as a prop from the route; the item slug comes from the URL.
export default function DetailPage({ category }) {
  const { slug } = useParams();
  const [lang, setLang] = useState("hi");
  const item = getItem(category, slug);

  // Unknown item → back to the category list.
  if (!item) return <Navigate to={`/${CATEGORIES[category]?.route || ""}`} replace />;

  const c = item[lang] || item.hi || item.en;

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{c.title} | Devotional</title>
        <meta name="description" content={c.intro} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with on-page language dropdown */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-4 mb-6 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl md:text-2xl font-bold mb-1.5">{item.icon} {c.title}</h1>
              <p className="text-sm opacity-90">{c.intro}</p>
            </div>

            <label className="flex items-center gap-1 bg-white/15 hover:bg-white/25 rounded-lg px-2 py-1.5 backdrop-blur-sm transition-colors flex-shrink-0 self-start">
              <span className="text-base" aria-hidden="true">🌐</span>
              <span className="sr-only">Choose language</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer [&>option]:text-gray-900"
              >
                {DETAIL_LANGS.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </label>
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

        {/* FAQ */}
        {c.faq && (
          <CollapsibleSection icon="❓" title="Frequently Asked Questions" defaultOpen={false}>
            <div className="space-y-6">
              {c.faq.q1 && (
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-bold dark:text-white mb-2">{c.faq.q1}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{c.faq.a1}</p>
                </div>
              )}
              {c.faq.q2 && (
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-bold dark:text-white mb-2">{c.faq.q2}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{c.faq.a2}</p>
                </div>
              )}
              {c.faq.q3 && (
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-bold dark:text-white mb-2">{c.faq.q3}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{c.faq.a3}</p>
                </div>
              )}
            </div>
          </CollapsibleSection>
        )}

        {/* Share */}
        <CollapsibleSection icon="📤" title="Share This Content" defaultOpen={false}>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Spread the spiritual wisdom by sharing this sacred text with friends and family
          </p>
          <ShareButtons url={window.location.href} />
        </CollapsibleSection>
      </div>
    </article>
  );
}
