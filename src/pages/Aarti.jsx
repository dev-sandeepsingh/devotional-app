import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HanumanImage from "../components/HanumanImage";
import RelatedProducts from "../components/RelatedProducts";

export default function Aarti() {
  const aartis = [
    {
      title: "Hanuman Aarti (Hindi)",
      description: "Traditional aarti dedicated to Lord Hanuman with spiritual significance",
      occasion: "Recited on Tuesdays and Saturdays, during pujas and festivals",
      link: "/hanuman-aarti-hindi",
      icon: "🎵"
    },
    {
      title: "Hanuman Aarti (English)",
      description: "English translation of the sacred Hanuman Aarti",
      occasion: "Universal occasion for all devotees",
      link: "/hanuman-aarti-english",
      icon: "🙏"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Aarti Collection | Devotional</title>
        <meta name="description" content="Read and recite Aartis with meaning and explanation." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">🎵 Aartis</h1>
          <p className="text-base opacity-90">Traditional devotional songs performed during worship ceremonies</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            {/* Hanuman Image */}
            <div className="mb-8">
              <HanumanImage />
            </div>

            {/* Aartis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aartis.map((aarti, index) => (
                <Link
                  key={index}
                  to={aarti.link}
                  className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                    <div className="text-5xl mb-4">{aarti.icon}</div>
                    <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform">{aarti.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{aarti.description}</p>
                    <div className="bg-orange-50 dark:bg-gray-600 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Best Recited:</span> {aarti.occasion}
                      </p>
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition group-hover:translate-x-1">
                      Read Aarti →
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Products - Right Side */}
          <div className="lg:col-span-1">
            <RelatedProducts />
          </div>
        </div>
      </section>

      {/* Information Section */}
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
    </div>
  );
}
