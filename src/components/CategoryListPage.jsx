import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HanumanImage from "./HanumanImage";
import RelatedProducts from "./RelatedProducts";
import { getItems, CATEGORIES } from "../i18n/content";

// Shared layout for the category / list pages (Chalisa, Mantras, Aartis).
// Renders one card per item from the content registry; each card links to the
// item's detail page. `children` is the category-specific "about" section.
export default function CategoryListPage({ category, metaTitle, metaDescription, children }) {
  const cat = CATEGORIES[category];
  const items = getItems(category);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto">
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

      {children}
    </>
  );
}
