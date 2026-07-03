import { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { blogsApi } from "../admin/api";

// A small set of icons + gradient accents so the API-driven cards (which carry
// no imagery of their own) still feel varied. Picked deterministically by index.
const ACCENTS = [
  { icon: "📿", bar: "from-green-500 to-teal-500" },
  { icon: "🧘", bar: "from-orange-500 to-red-500" },
  { icon: "📖", bar: "from-indigo-500 to-purple-500" },
  { icon: "✨", bar: "from-yellow-500 to-orange-500" },
  { icon: "🙏", bar: "from-pink-500 to-rose-500" },
  { icon: "💫", bar: "from-sky-500 to-blue-500" },
];

function accentFor(index) {
  return ACCENTS[index % ACCENTS.length];
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

// Rough reading time from the description word count (~200 wpm).
function readTime(text) {
  const words = (text || "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [active, setActive] = useState(null); // blog opened in the reading modal

  // Fetches blogs. setState happens only inside the promise callbacks (never
  // synchronously) so this is safe to call from an effect and from a retry.
  const load = useCallback(() => {
    return blogsApi
      .listPublic()
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || "Failed to load blogs."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { load(); }, [load]);

  const retry = () => {
    setLoading(true);
    setError("");
    load();
  };

  // Close the reading modal on Escape.
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Devotional Blog | Insights & Teachings</title>
        <meta name="description" content="Read articles on devotion, spirituality, and practices." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">📖 Devotional Blog</h1>
          <p className="text-lg opacity-90">Articles and insights on spirituality, devotion, and spiritual practices</p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* States: loading / error / empty / list */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="h-2 bg-gray-200 dark:bg-gray-600" />
                <div className="p-6 space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-600" />
                  <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-600" />
                  <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-600" />
                  <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-600" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3" aria-hidden="true">⚠️</div>
            <p className="font-medium mb-4">{error}</p>
            <button
              onClick={retry}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Try Again
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-12 text-center">
            <div className="text-5xl mb-4" aria-hidden="true">📝</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No articles yet</h3>
            <p className="text-gray-600 dark:text-gray-300">Check back soon — new devotional insights are on the way.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs.map((post, index) => {
              const accent = accentFor(index);
              return (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setActive(post)}
                  className="group flex flex-col text-left bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  <div className={`bg-gradient-to-r ${accent.bar} h-2`} />

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl" aria-hidden="true">{accent.icon}</div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(post.createdAt)}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{readTime(post.description)}</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <span className="mt-auto inline-flex items-center text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-1 transition">
                      Read Article →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 py-16 px-4 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get weekly articles, spiritual insights, and devotional tips delivered to your inbox
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Reading modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onMouseDown={(e) => e.target === e.currentTarget && setActive(null)}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
          >
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-2xl p-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="blog-modal-title" className="text-2xl md:text-3xl font-bold mb-2">{active.title}</h2>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span>📅 {formatDate(active.createdAt)}</span>
                  <span>⏱️ {readTime(active.description)}</span>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="p-1.5 rounded-lg hover:bg-white/20 transition flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {active.description}
              </p>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
