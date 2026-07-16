import { Helmet } from "react-helmet-async";
import RelatedProducts from "../components/RelatedProducts";
import Breadcrumbs from "../components/Breadcrumbs";
import categoryContent from "../data/categoryContent";

// Generic listing page for the static sidebar categories (Festivals, Temples).
// Content comes from src/data/categoryContent.js and has no detail pages —
// the devotional content categories use CategoryListPage + DetailPage instead.
export default function CategoryPage({ category }) {
  const config = categoryContent[category];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>{config.title} Collection | Devotional</title>
        <meta name="description" content={config.tagline} />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs variant="light" crumbs={[{ label: config.title }]} className="mb-1.5" />
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold drop-shadow-lg">{config.icon} {config.title}</h1>
            <span className="text-xs font-semibold bg-white/20 rounded-full px-2.5 py-0.5">
              {config.items.length} {config.title}
            </span>
          </div>
          <p className="text-sm opacity-90 mt-1">{config.tagline}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.items.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl border border-orange-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-400 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden flex flex-col"
                >
                  <div className="p-5 flex items-center gap-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-700 border-b border-orange-100 dark:border-gray-600">
                    <span
                      className="w-14 h-14 shrink-0 rounded-full bg-white dark:bg-gray-600 shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <div className="mt-4 bg-orange-50 dark:bg-gray-600 rounded-lg px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-300">
                        {config.metaLabel}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-200 mt-0.5">{item.meta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products - Right Side */}
          <div className="lg:col-span-1">
            <RelatedProducts />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">{config.about.heading}</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md mb-8">
            {config.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-700 dark:text-gray-300 leading-relaxed ${index < config.about.paragraphs.length - 1 ? "mb-4" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.about.highlights.map((highlight, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="font-bold mb-2 dark:text-white">{highlight.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
