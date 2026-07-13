import { Helmet } from "react-helmet-async";

export default function Explorer() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
      <Helmet>
        <title>Explorer | Devotional App</title>
        <meta name="description" content="Explore devotional content" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">🔍 Explorer</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Browse through all devotional content by categories and languages</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <div className="h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4"></div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Item {i + 1}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Browse devotional content</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
