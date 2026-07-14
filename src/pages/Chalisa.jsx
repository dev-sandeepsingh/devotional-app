import CategoryListPage from "../components/CategoryListPage";

export default function Chalisa() {
  return (
    <CategoryListPage
      category="Chalisa"
      metaTitle="Chalisa Collection | Devotional"
      metaDescription="Explore Chalisas with meaning and explanation."
    >
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">About Chalisas</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Chalisa is a devotional poem consisting of 40 verses (chalisa means "forty" in Hindi). The most famous Chalisa is dedicated to Lord Hanuman, known as the Hanuman Chalisa, which praises his strength, courage, and devotion to Lord Rama.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              These sacred hymns are typically recited for spiritual upliftment, protection, and to seek blessings from the deity they are dedicated to.
            </p>
          </div>
        </div>
      </section>
    </CategoryListPage>
  );
}
