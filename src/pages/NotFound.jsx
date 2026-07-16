import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { CATEGORIES } from "../i18n/content";

// Friendly 404 for unknown URLs (instead of a silent redirect home):
// says what happened, offers search, and links the main categories.
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 px-4 py-16">
      <Helmet>
        <title>Page Not Found | Devotional</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-xl mx-auto text-center">
        <div className="text-7xl mb-4" aria-hidden="true">🪔</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Page not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or may have moved.
          Try searching for it, or start from one of the collections below.
        </p>

        <div className="mb-8 text-left">
          <SearchBar placeholder="Search chalisas, mantras, aartis…" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <Link
              key={key}
              to={`/${cat.route}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-500 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all"
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.heading.slice(cat.heading.indexOf(" ") + 1)}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
