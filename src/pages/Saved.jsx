import { Helmet } from "react-helmet-async";

export default function Saved() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
      <Helmet>
        <title>Saved | Devotional App</title>
        <meta name="description" content="Your saved devotional content" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">❤️ Saved</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Your collection of favorite devotional content</p>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-12 border border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't saved any content yet</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Click the heart icon on any content to save it here</p>
        </div>
      </div>
    </div>
  );
}
