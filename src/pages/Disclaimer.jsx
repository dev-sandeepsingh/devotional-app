import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_NAME = "TheChalisa.com";

export default function Disclaimer() {
  const purposes = [
    { icon: "🙏", label: "Personal devotional practice" },
    { icon: "📖", label: "Spiritual study" },
    { icon: "🎓", label: "Educational reference" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{"Disclaimer & Devotional Notice | Devotional"}</title>
        <meta
          name="description"
          content="Disclaimer and devotional notice — content on TheChalisa.com is shared for personal devotional practice, spiritual study, and educational reference."
        />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">📜 Disclaimer &amp; Devotional Notice</h1>
          <p className="text-sm opacity-90 max-w-2xl">A gentle note on how the content on {SITE_NAME} is meant to be used.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100 dark:border-gray-700">
          {/* Intro */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            The <strong>Vrat Kathas, Stotras, Chalisas, Aartis, and ritual guides</strong> published on{" "}
            <span className="font-semibold text-orange-600 dark:text-orange-400">{SITE_NAME}</span> are shared for:
          </p>

          {/* Purpose chips */}
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {purposes.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-3 rounded-xl bg-orange-50 dark:bg-gray-700/50 ring-1 ring-orange-100 dark:ring-gray-600 px-4 py-3"
              >
                <span className="text-2xl" aria-hidden="true">{p.icon}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{p.label}</span>
              </li>
            ))}
          </ul>

          {/* Accuracy note */}
          <p className="mt-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            While we make every effort to ensure accuracy according to traditional scriptural sources, regional
            customs and traditions may vary.
          </p>

          {/* Callout — consult your priest / elders */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border-l-4 border-orange-500 bg-orange-50 dark:bg-gray-700/50 p-5">
            <span className="flex-shrink-0 text-2xl" aria-hidden="true">🪔</span>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              For specific <strong>puja rituals</strong>, <strong>auspicious timings (muhurta)</strong>, or detailed{" "}
              <strong>samagri</strong> requirements, we warmly encourage you to consult your{" "}
              <strong>family priest (pandit)</strong> or <strong>local elders</strong>.
            </p>
          </div>

          {/* Closing */}
          <p className="mt-8 text-center text-sm italic text-gray-500 dark:text-gray-400">
            Shared with devotion — may your practice bring you peace. 🙏
          </p>

          <div className="mt-6 text-center">
            <Link to="/contact" className="font-semibold text-orange-600 dark:text-orange-400 hover:underline">
              Have a question? Contact us →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
