import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "thechalisacom@gmail.com";

export default function ScripturalAccuracy() {
  const issues = [
    { icon: "✍️", label: "Typographical errors" },
    { icon: "📜", label: "Missing verses" },
    { icon: "🌏", label: "Regional variations" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{"Scriptural Accuracy & Correction Notice | Devotional"}</title>
        <meta
          name="description"
          content="Help us maintain scriptural accuracy — report typographical errors, missing verses, or regional variations in any text on TheChalisa.com."
        />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">🔎 Scriptural Accuracy &amp; Correction Notice</h1>
          <p className="text-sm opacity-90 max-w-2xl">Help us keep every sacred recitation accurate for all devotees.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Help Us Maintain Scriptural Accuracy</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            We take great care in digitizing every verse, mantra, and story with reverence and accuracy.
          </p>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            However, if you notice any of the following in any text, we would be grateful if you let us know:
          </p>

          {/* Issue chips */}
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {issues.map((it) => (
              <li
                key={it.label}
                className="flex items-center gap-3 rounded-xl bg-orange-50 dark:bg-gray-700/50 ring-1 ring-orange-100 dark:ring-gray-600 px-4 py-3"
              >
                <span className="text-2xl" aria-hidden="true">{it.icon}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{it.label}</span>
              </li>
            ))}
          </ul>

          {/* Callout */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border-l-4 border-orange-500 bg-orange-50 dark:bg-gray-700/50 p-5">
            <span className="flex-shrink-0 text-2xl" aria-hidden="true">🙏</span>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Your feedback helps keep these sacred recitations accurate and useful for all devotees.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              ✍️ Report a Correction
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 break-all rounded-lg border border-orange-200 bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50 dark:border-gray-700 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
            >
              ✉️ {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
