import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HanumanImage from "../components/HanumanImage";
import RelatedProducts from "../components/RelatedProducts";

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
    <>
      <Helmet>
        <title>Mantra Collection | Devotional</title>
        <meta name="description" content="Discover powerful mantras with translations and explanations." />
      </Helmet>

      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">✨ Mantras</h1>
          <p className="text-lg opacity-90">Sacred mantras and chants for meditation and spiritual practice</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <HanumanImage />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {mantras.map((mantra, index) => (
                <article key={index} className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                    <div className="text-5xl mb-4" aria-hidden="true">{mantra.icon}</div>
                    <h2 className="text-2xl font-bold group-hover:scale-105 transition-transform">{mantra.title}</h2>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{mantra.description}</p>
                    <div className="bg-indigo-50 dark:bg-gray-600 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong className="block mb-2">Benefits:</strong> 
                        {mantra.benefits}
                      </p>
                    </div>
                    <Link to={mantra.link} className="inline-block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition text-center group-hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                      Explore Mantra →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="lg:col-span-1">
            <RelatedProducts />
          </aside>
        </div>
      </main>

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
    </>
  );
}
