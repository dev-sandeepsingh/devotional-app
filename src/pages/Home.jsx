import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import QuickAccess from "../components/QuickAccess";
import { getTodaysFeatured, getTodayInfo } from "../data/dailyFeatured";
import { getDailyReading } from "../data/dailyReading";

export default function Home() {
  // Weekday-based featured trio (Chalisa / Mantra / Aarti), see dailyFeatured.js
  const todaysFeatured = getTodaysFeatured();
  const { dayName, deity } = getTodayInfo();
  // Ranked "Best for Daily Reading" lists, see dailyReading.js
  const dailyReading = getDailyReading();
  const categories = [
    { id: "chalisa", name: "Chalisas", icon: "📿", link: "/chalisa", description: "Devotional hymns", color: "amber", iconBg: "bg-amber-100 dark:bg-amber-900/40" },
    { id: "mantra", name: "Mantras", icon: "✨", link: "/mantra", description: "Sacred chants", color: "orange", iconBg: "bg-orange-100 dark:bg-orange-900/40" },
    { id: "aarti", name: "Aartis", icon: "🎵", link: "/aarti", description: "Worship songs", color: "rose", iconBg: "bg-rose-100 dark:bg-rose-900/40" },
    { id: "blog", name: "Blog", icon: "📖", link: "/blog", description: "Spiritual articles", color: "red", iconBg: "bg-red-100 dark:bg-red-900/40" }
  ];

  const featuredItems = [
    { title: "Hanuman Chalisa", category: "chalisa", icon: "📿", views: "12.4K", rating: "4.9", link: "/chalisa/hanuman-chalisa" },
    { title: "Morning Meditation", category: "mantra", icon: "🧘", views: "8.2K", rating: "4.8", link: "/mantra" },
    { title: "Evening Aarti", category: "aarti", icon: "🪔", views: "6.7K", rating: "4.9", link: "/aarti" }
  ];

  const colorMap = {
    amber: "from-amber-500 to-orange-500",
    orange: "from-orange-500 to-red-500",
    rose: "from-rose-500 to-red-500",
    red: "from-red-500 to-rose-600"
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 night-glow">
      <Helmet>
        <title>Devotional App | Spiritual Chants & Mantras</title>
        <meta name="description" content="Explore devotional content in multiple languages." />
      </Helmet>

      {/* Hero Slider */}
      <section className="w-full pt-8 px-4">
        <HeroSlider />
      </section>

      {/* Quick Access */}
      <section className="w-full pt-6 px-4">
        <QuickAccess />
      </section>

      {/* Categories Section */}
      <section className="w-full py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">Explore by Category</h2>
            <Link to="/explorer" className="text-orange-500 hover:text-orange-600 font-semibold text-sm">
              See All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4 ${cat.iconBg}`} aria-hidden="true">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cat.description}</p>
                <span className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Featured — weekday devotion trio (Chalisa / Mantra / Aarti) */}
      <section className="w-full pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-orange-50 dark:bg-gray-800 rounded-2xl p-5 border border-orange-100 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <span aria-hidden="true">☀️</span> Today's Featured
              </h2>
              <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-white dark:bg-gray-900 px-3 py-1 rounded-full border border-orange-200 dark:border-gray-700">
                {dayName}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {dayName} is devoted to {deity}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {todaysFeatured.map((f) => (
                <Link
                  key={f.key}
                  to={f.link}
                  className="group flex items-center gap-3 bg-white dark:bg-gray-900 rounded-xl p-4 border border-orange-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-500 transition-all"
                >
                  <span
                    className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400">
                      {f.label}
                    </span>
                    <span className="block font-bold text-gray-900 dark:text-white leading-snug">
                      {f.titleHi || f.titleEn}
                    </span>
                    {f.titleHi && f.titleEn && (
                      <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">{f.titleEn}</span>
                    )}
                    {!f.exists && (
                      <span className="block text-xs text-gray-500 dark:text-gray-400">Browse collection →</span>
                    )}
                  </span>
                  <span
                    className="shrink-0 text-orange-500 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best for Daily Reading — ranked any-time lists (see dailyReading.js) */}
      <section className="w-full pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              📿 Best for Daily Reading
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">Any time of day</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyReading.map((list) => (
              <div
                key={list.category}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span aria-hidden="true">{list.icon}</span> {list.heading}
                </h3>
                <ol className="space-y-0.5 flex-1">
                  {list.entries.map((entry, i) => (
                    <li key={entry.name}>
                      <Link
                        to={entry.link}
                        className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="w-5 shrink-0 text-right text-xs font-bold text-orange-500" aria-hidden="true">
                          {i + 1}.
                        </span>
                        <span className="flex-1 min-w-0 text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                          {entry.name}
                        </span>
                        <span
                          className={`shrink-0 text-sm transition-opacity ${entry.exists ? "text-orange-500 opacity-0 group-hover:opacity-100" : "text-gray-300 dark:text-gray-600"}`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
                <Link
                  to={`/${list.route}`}
                  className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition"
                >
                  View all →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Featured Content</h2>
            <Link to="/chalisa" className="text-orange-500 hover:text-orange-600 font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`relative h-32 bg-gradient-to-r ${colorMap[categories.find(c => c.id === item.category)?.color]} opacity-90 group-hover:opacity-100 transition flex items-center justify-center`}>
                  <span className="text-5xl drop-shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wide bg-white/25 text-white px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-2 group-hover:text-orange-500 transition">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>👁️ {item.views}</span>
                    <span>⭐ {item.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">8+ Languages</h3>
            <p className="text-gray-600 dark:text-gray-400">Hindi, English, Tamil, Telugu, Bengali, Marathi, Punjabi & more</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Mobile Friendly</h3>
            <p className="text-gray-600 dark:text-gray-400">Access anywhere, anytime on any device</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">💯</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">100% Free</h3>
            <p className="text-gray-600 dark:text-gray-400">No ads, no subscriptions, pure devotion</p>
          </div>
        </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">1,240+</div>
              <p className="text-gray-600 dark:text-gray-400">Content Items</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-400">Daily Visitors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">200K+</div>
              <p className="text-gray-600 dark:text-gray-400">Monthly Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-500 mb-2">98%</div>
              <p className="text-gray-600 dark:text-gray-400">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-800 text-white rounded-2xl p-12 text-center dark:ring-1 dark:ring-orange-400/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Spiritual Journey</h2>
            <p className="text-lg opacity-90 mb-8">
              Thousands of devotees are already exploring their spirituality with us.
            </p>
            <Link
              to="/chalisa"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Languages Info */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Available in 8+ Languages</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["हिंदी", "English", "தமிழ்", "తెలుగు", "বাংলা", "मराठी", "ਪੰਜਾਬੀ", "மேலும்"].map((lang, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800 dark:text-white">{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Help Us Grow</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Your support helps us maintain and expand this devotional platform
          </p>
          <Link
            to="/donate"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            ❤️ Support Us
          </Link>
        </div>
      </section>
    </div>
  );
}
