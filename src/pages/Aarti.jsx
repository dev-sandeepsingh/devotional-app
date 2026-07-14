import CategoryListPage from "../components/CategoryListPage";

export default function Aarti() {
  return (
    <CategoryListPage
      category="Aartis"
      metaTitle="Aarti Collection | Devotional"
      metaDescription="Read and recite Aartis with meaning and explanation."
    >
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">What is Aarti?</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Aarti is a form of worship in Hinduism performed by waving lighted lamps in front of an idol or an image of a deity as an offering. It is performed at least once or twice a day in all Hindu households.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The aarti is accompanied by singing, and often bells are rung to enhance the spiritual atmosphere. It represents the offering of light to the deity, symbolizing the removal of darkness (ignorance) from the devotee's life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">🕯️</div>
              <h3 className="font-bold mb-2 dark:text-white">Ritual Significance</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                The lighting of the lamp represents the light of knowledge and the dispelling of darkness.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="font-bold mb-2 dark:text-white">Spiritual Practice</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Aarti strengthens the bond between the devotee and the deity through devotion and offering.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-bold mb-2 dark:text-white">Daily Practice</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Usually performed in the morning and evening, it's an essential part of daily worship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </CategoryListPage>
  );
}
