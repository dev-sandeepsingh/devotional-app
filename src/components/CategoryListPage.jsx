import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HanumanImage from "./HanumanImage";
import RelatedProducts from "./RelatedProducts";
import Breadcrumbs from "./Breadcrumbs";
import { getItems, CATEGORIES } from "../i18n/content";

// The list page for every content category (Chalisa, Mantras, Aartis, Stotras,
// Ashtakams, Sahasranamas, Vrat Kathas). Fully driven by the CATEGORIES
// registry in src/i18n/content.js — one card per item, each linking to the
// item's detail page, plus the category's "about" section below.
export default function CategoryListPage({ category }) {
  const cat = CATEGORIES[category];
  const items = getItems(category);

  return (
    <>
      <Helmet>
        <title>{cat.metaTitle}</title>
        <meta name="description" content={cat.metaDescription} />
      </Helmet>

      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            variant="light"
            crumbs={[{ label: cat.heading.slice(cat.heading.indexOf(" ") + 1) }]}
            className="mb-1.5"
          />
          <h1 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">{cat.heading}</h1>
          <p className="text-sm opacity-90">{cat.subtitle}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <HanumanImage />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  to={`/${cat.route}/${item.slug}`}
                  className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 text-white">
                    <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                    <h2 className="text-base font-bold leading-snug truncate" title={item.cardTitle}>
                      {item.cardTitle}
                    </h2>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{item.intro}</p>
                    <span className="inline-block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition text-center group-hover:translate-x-1">
                      Read Now →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
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
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">{heading}</h2>

        {paragraphs?.length > 0 && (
          <div className={`bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md ${highlights?.length ? "mb-8" : ""}`}>
            {paragraphs.map((text, i) => (
              <p key={i} className={`text-gray-700 dark:text-gray-300 ${i < paragraphs.length - 1 ? "mb-4" : ""}`}>
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
