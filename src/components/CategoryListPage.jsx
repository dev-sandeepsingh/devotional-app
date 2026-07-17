import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import Breadcrumbs from "./Breadcrumbs";
import { getItems, getGroupedItems, CATEGORIES } from "../i18n/content";

// The list page for every content category (Chalisa, Mantras, Aartis, Stotras,
// Ashtakams, Sahasranamas, Vrat Kathas). Fully driven by the CATEGORIES
// registry in src/i18n/content.js — one card per item, each linking to the
// item's detail page, plus the category's "about" section below.
export default function CategoryListPage({ category }) {
  const cat = CATEGORIES[category];
  const items = getItems(category);
  const sections = getGroupedItems(category);

  // Plain category name without the leading emoji, e.g. "Chalisas".
  const catName = cat.heading.slice(cat.heading.indexOf(" ") + 1);

  return (
    <>
      <Helmet>
        <title>{cat.metaTitle}</title>
        <meta name="description" content={cat.metaDescription} />
      </Helmet>

      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs variant="light" crumbs={[{ label: catName }]} className="mb-1.5" />
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold drop-shadow-lg">{cat.heading}</h1>
            <span className="text-xs font-semibold bg-white/20 rounded-full px-2.5 py-0.5">
              {items.length} {catName}
            </span>
          </div>
          <p className="text-sm opacity-90 mt-1">{cat.subtitle}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            {sections.map((section, si) => (
              <div key={section.title || "all"} className={si === 0 ? "mt-6" : "mt-10"}>
                {section.title && (
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-gray-700 border border-orange-100 dark:border-gray-600 rounded-full px-2 py-0.5">
                      {section.items.length}
                    </span>
                    <span className="flex-1 h-px bg-gradient-to-r from-orange-200 dark:from-gray-600 to-transparent" aria-hidden="true" />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/${cat.route}/${item.slug}`}
                      className="group bg-white dark:bg-gray-700 rounded-xl p-5 shadow-md hover:shadow-xl border border-orange-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-400 transition-all duration-300 hover:-translate-y-0.5 flex gap-4"
                    >
                      <span
                        className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>

                      <div className="min-w-0 flex-1 flex flex-col">
                        <h3 className="leading-snug">
                          <span className="block text-base font-bold text-gray-900 dark:text-white">
                            {item.titleHi || item.titleEn}
                          </span>
                          {item.titleHi && item.titleEn && (
                            <span className="block text-sm font-medium text-orange-600 dark:text-orange-400">
                              {item.titleEn}
                            </span>
                          )}
                        </h3>
                        <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 line-clamp-2 flex-1">
                          {item.intro}
                        </p>
                        <span className="mt-2.5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:gap-2 transition-all">
                          Read now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <aside className="lg:col-span-1">
            <RelatedProducts />
          </aside>
        </div>
      </main>

      <AboutSection about={cat.about} />
    </>
  );
}

// Category "about" section: an optional paragraphs card followed by an
// optional 3-up highlights grid (a category may define either or both).
function AboutSection({ about }) {
  if (!about) return null;
  const { heading, paragraphs, highlights } = about;

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">{heading}</h2>

        {paragraphs?.length > 0 && (
          <div className={`bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md ${highlights?.length ? "mb-8" : ""}`}>
            {paragraphs.map((text, i) => (
              <p key={i} className={`text-gray-700 dark:text-gray-300 leading-relaxed ${i < paragraphs.length - 1 ? "mb-4" : ""}`}>
                {text}
              </p>
            ))}
          </div>
        )}

        {highlights?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-bold mb-2 dark:text-white">{h.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{h.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
