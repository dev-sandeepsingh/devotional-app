import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
      <Helmet>
        <title>Search | Devotional App</title>
        <meta name="description" content="Search devotional content" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">🔎 Search</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for chalisas, mantras, aartis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {!searchQuery && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            <p className="text-lg">Enter search terms to find devotional content</p>
          </div>
        )}

        {searchQuery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Search Result {i + 1}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Matching content for "{searchQuery}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
