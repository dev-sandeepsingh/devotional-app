import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { searchItems } from "../i18n/content";

export default function Search() {
  // Query lives in the URL (?q=...) so QuickAccess links and shared URLs work.
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const results = searchItems(query, 50);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
      <Helmet>
        <title>Search | Devotional App</title>
        <meta name="description" content="Search devotional content" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Breadcrumbs crumbs={[{ label: "Search" }]} className="mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">🔎 Search</h1>

        <div className="relative mb-8">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" aria-hidden="true">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
          </span>
          <input
            type="search"
            autoFocus
            placeholder="Search for chalisas, mantras, aartis..."
            value={query}
            onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
            className="w-full pl-12 pr-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {!query.trim() && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            <p className="text-lg">Enter search terms to find devotional content</p>
            <p className="text-sm mt-2">Try "hanuman chalisa", "gayatri" or "aarti"</p>
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            <p className="text-lg">No results found for "{query}"</p>
            <p className="text-sm mt-2">Try a different name, e.g. "shiv chalisa" or "mantra"</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-md transition-all"
              >
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                <span className="min-w-0">
                  <span className="block font-bold text-gray-800 dark:text-white mb-1">{item.cardTitle}</span>
                  <span className="block text-xs font-medium text-orange-600 dark:text-orange-400 mb-2">{item.category}</span>
                  {item.intro && (
                    <span className="block text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.intro}</span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
