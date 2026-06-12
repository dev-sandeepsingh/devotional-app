import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Mantra() {
  const mantras = [
    {
      title: "Hanuman Mantra (Hindi)",
      description: "Powerful mantras dedicated to Lord Hanuman for strength and courage",
      benefits: "Enhances courage, removes fear, provides protection",
      link: "/hanuman-mantra-hindi",
      icon: "✨"
    },
    {
      title: "Hanuman Mantra (English)",
      description: "English translation of sacred Hanuman mantras",
      benefits: "Spiritual growth, mental clarity, peace",
      link: "/hanuman-mantra-english",
      icon: "🔯"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Mantra Collection | Devotional</title>
        <meta name="description" content="Discover powerful mantras with translations and explanations." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">✨ Mantras</h1>
          <p className="text-lg opacity-90">Sacred mantras and chants for meditation and spiritual practice</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mantras.map((mantra, index) => (
            <Link
              key={index}
              to={mantra.link}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                <div className="text-5xl mb-4">{mantra.icon}</div>
                <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform">{mantra.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{mantra.description}</p>
                <div className="bg-indigo-50 dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-semibold block mb-2">Benefits:</span> 
                    {mantra.benefits}
                  </p>
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition group-hover:translate-x-1">
                  Explore Mantra →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Information Section */}
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
    </div>
  );
}
