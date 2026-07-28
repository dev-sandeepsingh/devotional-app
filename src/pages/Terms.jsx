import { Helmet } from "react-helmet-async";

const SITE_NAME = "TheChalisa.com";

export default function Terms() {
  const permissions = [
    { icon: "📖", label: "Read freely for personal devotion" },
    { icon: "🔗", label: "Share links to any text" },
    { icon: "🚫", label: "Not for commercial use" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{"Terms of Use & Copyright Notice | Devotional"}</title>
        <meta
          name="description"
          content="Terms of use and copyright notice for TheChalisa.com — sacred texts offered freely for personal, non-commercial devotional practice."
        />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">📄 Terms of Use &amp; Copyright Notice</h1>
          <p className="text-sm opacity-90 max-w-2xl">How the sacred texts on {SITE_NAME} may be used and shared.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Terms &amp; Usage Notice</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            The traditional scriptures, stotras, and devotional hymns featured on{" "}
            <span className="font-semibold text-orange-600 dark:text-orange-400">{SITE_NAME}</span> belong to our shared
            spiritual heritage. All compiled digital texts on this site are offered <strong>freely</strong> for{" "}
            <strong>personal, non-commercial</strong> devotional practice.
          </p>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            Custom website layouts, compiled translations, and digital formatting are published by{" "}
            <span className="font-semibold text-orange-600 dark:text-orange-400">{SITE_NAME}</span>. Users are welcome to
            read and share links to these texts for devotional purposes.
          </p>

          {/* Permission chips */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {permissions.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-3 rounded-xl bg-orange-50 dark:bg-gray-700/50 ring-1 ring-orange-100 dark:ring-gray-600 px-4 py-3"
              >
                <span className="text-2xl" aria-hidden="true">{p.icon}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{p.label}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm italic text-gray-500 dark:text-gray-400">
            🕉️ Shared in the spirit of seva — for the benefit of all devotees.
          </p>
        </div>
      </main>
    </div>
  );
}
