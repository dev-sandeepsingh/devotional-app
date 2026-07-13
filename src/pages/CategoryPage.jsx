import { Helmet } from "react-helmet-async";
import RelatedProducts from "../components/RelatedProducts";
import categoryContent from "../data/categoryContent";

// Generic listing page for the sidebar categories (Stotras, Ashtakams,
// Sahasranamas, Vrat Kathas, Festivals, Temples). Content is static and
// comes from src/data/categoryContent.js.
export default function CategoryPage({ category }) {
  const config = categoryContent[category];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>{config.title} Collection | Devotional</title>
        <meta name="description" content={config.tagline} />
      </Helmet>

      {/* Header Section */}
      <section className={`bg-gradient-to-r ${config.gradient} text-white py-12 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{config.icon} {config.title}</h1>
          <p className="text-lg opacity-90">{config.tagline}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${config.gradient} p-6 text-white`}>
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform">{item.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                    <div className={`${config.metaBg} dark:bg-gray-600 p-4 rounded-lg`}>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">{config.metaLabel}:</span> {item.meta}
                      </p>
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
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">{config.about.heading}</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md mb-8">
            {config.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-700 dark:text-gray-300 ${index < config.about.paragraphs.length - 1 ? "mb-4" : ""}`}
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
