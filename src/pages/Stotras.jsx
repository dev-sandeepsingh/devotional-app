import CategoryListPage from "../components/CategoryListPage";

export default function Stotras() {
  return (
    <CategoryListPage
      category="Stotras"
      metaTitle="Stotras Collection | Devotional"
      metaDescription="Explore sacred stotras praising divine qualities of deities."
    >
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">About Stotras</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Stotra is a sacred hymn of praise dedicated to a deity, describing their divine qualities, power, and manifestations. The word "Stotra" comes from the Sanskrit root "stu" meaning "to praise."
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Stotras are recited for divine grace, protection, and spiritual elevation. Each stotra focuses on different aspects of the deity's divine nature and is believed to invoke their blessings when recited with devotion and sincerity.
            </p>
          </div>
        </div>
      </section>
    </CategoryListPage>
  );
}
