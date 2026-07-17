import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { getTimeCollection } from "../data/timeCollections";

// Morning / Evening curated collection pages (Home → Quick Access chips).
// Driven by src/data/timeCollections.js: entries with imported content link to
// their detail page; the rest show the traditional name and link to the
// category list until their content is added.
export default function TimeCollectionPage({ period }) {
  const col = getTimeCollection(period);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>{col.title} | Devotional</title>
        <meta name="description" content={col.metaDescription} />
      </Helmet>

      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs variant="light" crumbs={[{ label: col.title }]} className="mb-1.5" />
          <h1 className="text-xl md:text-2xl font-bold drop-shadow-lg">
            {col.icon} {col.title} <span className="font-semibold opacity-90">({col.hindiName})</span>
          </h1>
          <p className="text-sm opacity-90 mt-1">{col.tagline}</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-10">
        {col.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                {section.heading}
              </h2>
              <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-gray-700 border border-orange-100 dark:border-gray-600 rounded-full px-2 py-0.5">
                {section.entries.length}
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-orange-200 dark:from-gray-600 to-transparent" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.entries.map((entry) => (
                <Link
                  key={entry.name}
                  to={entry.link}
                  className="group bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl border border-orange-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-400 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4"
                >
                  <span
                    className={`w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform ${entry.exists ? "" : "opacity-70"}`}
                    aria-hidden="true"
                  >
                    {entry.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-gray-900 dark:text-white leading-snug">
                      {entry.name}
                    </span>
                    {entry.exists && entry.titleEn && (
                      <span className="block text-xs font-medium text-orange-600 dark:text-orange-400">
                        {entry.titleEn}
                      </span>
                    )}
                    {entry.note && (
                      <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {entry.note}
                      </span>
                    )}
                    {!entry.exists && (
                      <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Browse {section.heading} →
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 text-orange-500 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
