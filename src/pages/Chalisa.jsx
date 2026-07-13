import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HanumanImage from "../components/HanumanImage";
import RelatedProducts from "../components/RelatedProducts";

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
    <>
      <Helmet>
        <title>Chalisa Collection | Devotional</title>
        <meta name="description" content="Explore Chalisas in multiple languages with meaning and explanation." />
      </Helmet>

      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">📿 Chalisas</h1>
          <p className="text-base opacity-90">Browse popular Chalisas in multiple languages with meanings and explanations</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <HanumanImage />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {chalisas.map((chalisa, index) => (
                <article key={index} className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                    <div className="text-5xl mb-4" aria-hidden="true">{chalisa.icon}</div>
                    <h2 className="text-2xl font-bold group-hover:scale-105 transition-transform">{chalisa.title}</h2>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{chalisa.description}</p>
                    <div className="bg-orange-50 dark:bg-gray-600 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Available:</strong> {chalisa.languages}
                      </p>
                    </div>
                    <Link to={chalisa.link} className="inline-block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition text-center group-hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-orange-400">
                      Read Now →
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
    </>
  );
}
