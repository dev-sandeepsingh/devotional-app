import CategoryListPage from "../components/CategoryListPage";

export default function Sahasranamas() {
  return (
    <CategoryListPage
      category="Sahasranamas"
      metaTitle="Sahasranamas Collection | Devotional"
      metaDescription="Explore sacred compositions of 1000 divine names for spiritual liberation."
    >
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">About Sahasranamas</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Sahasranama is a sacred composition listing 1000 names of a deity (sahasra means "thousand" in Sanskrit). Each name represents a different divine quality, aspect, or manifestation of that deity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most famous Sahasranamas are the Vishnu Sahasranama and Devi Sahasranama, found in ancient Hindu scriptures. Reciting these names is believed to bring profound spiritual benefits.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Regular recitation of Sahasranama is said to lead to moksha (liberation), removal of obstacles, and attainment of divine grace and wisdom.
            </p>
          </div>
        </div>
      </section>
    </CategoryListPage>
  );
}
