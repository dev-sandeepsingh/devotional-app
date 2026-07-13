import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    { icon: "🌍", title: "Accessible to All", text: "Free devotional content in 8+ languages so everyone can connect with their faith." },
    { icon: "📿", title: "Authentic Content", text: "Chalisas, mantras, and aartis presented with meaning and context, not just text." },
    { icon: "🧘", title: "Peace & Devotion", text: "A calm, ad-free space to read, reflect, and deepen your spiritual practice." },
    { icon: "💛", title: "Community Supported", text: "Sustained by devotees like you, so the platform stays free for everyone." },
  ];

  const stats = [
    { value: "1,240+", label: "Content Items" },
    { value: "8+", label: "Languages" },
    { value: "200K+", label: "Monthly Readers" },
    { value: "100%", label: "Free & Ad-free" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>About Us | Devotional</title>
        <meta name="description" content="Learn about our mission to make devotional content freely accessible in multiple languages." />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">🙏 About Us</h1>
          <p className="text-sm opacity-90 max-w-2xl">
            We are on a mission to make sacred devotional content accessible to everyone, in the language of their heart.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Mission */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Devotional was created to preserve and share the timeless wisdom of chalisas, mantras, aartis, and
            spiritual writings. In a fast-paced world, we believe everyone deserves a quiet place to reconnect with
            their faith — without paywalls, distractions, or advertisements.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Every piece of content is presented with its meaning and explanation, and made available across many
            Indian languages, so devotion is never lost in translation.
          </p>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex gap-4 items-start border border-gray-100 dark:border-gray-700">
                <div className="text-4xl flex-shrink-0" aria-hidden="true">{v.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{v.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-12 border border-orange-100 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">{s.value}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Have a question or suggestion?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">We'd love to hear from you and grow together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/donate"
              className="inline-block bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-gray-700 transition"
            >
              ❤️ Support Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
