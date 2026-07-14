import CategoryListPage from "../components/CategoryListPage";

export default function VratKathas() {
  return (
    <CategoryListPage
      category="VratKathas"
      metaTitle="Vrat Kathas Collection | Devotional"
      metaDescription="Explore sacred stories of fasts and festivals for family well-being."
    >
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">About Vrat Kathas</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Vrat Katha is a sacred story recited during fasts and festivals. The word "Katha" means "story" in Sanskrit. These tales carry spiritual significance and teach moral lessons about devotion, sacrifice, and divine grace.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Vrat Kathas are an integral part of Hindu traditions, recited before or during fasting periods to strengthen faith and understanding of the spiritual significance of the fast.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              These stories celebrate the power of devotion, the importance of family bonds, and the blessings that come from sincere observance of sacred vows and traditions.
            </p>
          </div>
        </div>
      </section>
    </CategoryListPage>
  );
}
