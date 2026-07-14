import CategoryListPage from "../components/CategoryListPage";

export default function Ashtakams() {
  return (
    <CategoryListPage
      category="Ashtakams"
      metaTitle="Ashtakams Collection | Devotional"
      metaDescription="Explore eight-verse devotional hymns for spiritual elevation."
    >
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">About Ashtakams</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An Ashtakam is a devotional hymn consisting of exactly eight verses (ashta means "eight" in Sanskrit). These concise yet powerful compositions pack profound spiritual wisdom and devotional sentiment into just eight verses.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Ashtakams are typically dedicated to specific deities and are recited to seek their blessings, gain spiritual knowledge, and achieve liberation. Each verse is carefully crafted to invoke a different aspect of the deity's divine nature.
            </p>
          </div>
        </div>
      </section>
    </CategoryListPage>
  );
}
