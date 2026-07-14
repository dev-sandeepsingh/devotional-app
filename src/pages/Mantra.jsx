import CategoryListPage from "../components/CategoryListPage";

export default function Mantra() {
  return (
    <CategoryListPage
      category="Mantras"
      metaTitle="Mantra Collection | Devotional"
      metaDescription="Discover powerful mantras with translations and explanations."
    >
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Understanding Mantras</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold mb-2 dark:text-white">What are Mantras?</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Sacred sounds, words, or phrases that carry spiritual vibrations and are used for meditation and spiritual practice.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-bold mb-2 dark:text-white">How to Recite?</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Mantras are best recited with focus and devotion. Repetition helps in concentration and deepens spiritual connection.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="font-bold mb-2 dark:text-white">Benefits</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Regular mantra recitation brings peace, clarity, spiritual awakening, and protection from negative influences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </CategoryListPage>
  );
}
