import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Chalisa() {
  const chalisas = [
    {
      title: "Hanuman Chalisa (Hindi)",
      description: "The most popular devotional hymn dedicated to Lord Hanuman",
      languages: "Available in Hindi, English, Punjabi, Bengali, Marathi, Tamil, Telugu",
      link: "/hanuman-chalisa-hindi",
      icon: "📿"
    },
    {
      title: "Hanuman Chalisa (English)",
      description: "English translation of the sacred Hanuman Chalisa",
      languages: "English Version",
      link: "/hanuman-chalisa-english",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Chalisa Collection | Devotional</title>
        <meta name="description" content="Explore Chalisas in multiple languages with meaning and explanation." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">📿 Chalisas</h1>
          <p className="text-lg opacity-90">Browse popular Chalisas in multiple languages with meanings and explanations</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chalisas.map((chalisa, index) => (
            <Link
              key={index}
              to={chalisa.link}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                <div className="text-5xl mb-4">{chalisa.icon}</div>
                <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform">{chalisa.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{chalisa.description}</p>
                <div className="bg-purple-50 dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Available:</span> {chalisa.languages}
                  </p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition group-hover:translate-x-1">
                  Read Now →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Info */}
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
    </div>
  );
}
