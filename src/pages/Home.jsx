import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import QuickAccess from "../components/QuickAccess";

export default function Home() {
  const categories = [
    { id: "chalisa", name: "Chalisas", icon: "📿", link: "/chalisa", description: "Devotional hymns", color: "blue", iconBg: "bg-blue-100 dark:bg-blue-900/40" },
    { id: "mantra", name: "Mantras", icon: "✨", link: "/mantra", description: "Sacred chants", color: "purple", iconBg: "bg-purple-100 dark:bg-purple-900/40" },
    { id: "aarti", name: "Aartis", icon: "🎵", link: "/aarti", description: "Worship songs", color: "pink", iconBg: "bg-pink-100 dark:bg-pink-900/40" },
    { id: "blog", name: "Blog", icon: "📖", link: "/blog", description: "Spiritual articles", color: "green", iconBg: "bg-green-100 dark:bg-green-900/40" }
  ];

  // Placeholder trending data — the app currently only has Hanuman content and no
  // trending data source, so these link to /chalisa for now. See MOBILE_VIEW_SPEC.md.
  const trending = [
    { title: "Shiv Chalisa", meta: "11 min read", icon: "🔱", link: "/chalisa" },
    { title: "Durga Chalisa", meta: "13 min read", icon: "🌺", link: "/chalisa" },
    { title: "Gayatri Mantra", meta: "8 min read", icon: "🕉️", link: "/mantra" }
  ];

  const featuredItems = [
    { title: "Hanuman Chalisa", category: "chalisa", views: "12.4K", rating: "4.9", link: "/chalisa" },
    { title: "Morning Meditation", category: "mantra", views: "8.2K", rating: "4.8", link: "/mantra" },
    { title: "Evening Aarti", category: "aarti", views: "6.7K", rating: "4.9", link: "/aarti" }
  ];

  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
    green: "from-green-500 to-green-600"
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Helmet>
        <title>Devotional App | Spiritual Chants & Mantras</title>
        <meta name="description" content="Explore devotional content in multiple languages." />
      </Helmet>

      {/* Hero Slider */}
      <section className="w-full bg-white dark:bg-gray-950 pt-8 px-4">
        <HeroSlider />
      </section>

      {/* Quick Access */}
      <section className="w-full bg-white dark:bg-gray-950 pt-6 px-4">
        <QuickAccess />
      </section>

      {/* Categories Section */}
      <section className="w-full bg-white dark:bg-gray-950 py-10 px-4">
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

      {/* Today's Featured */}
      <section className="w-full bg-white dark:bg-gray-950 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-orange-50 dark:bg-gray-800 rounded-2xl p-5 border border-orange-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <span aria-hidden="true">☀️</span> Today's Featured
              </h2>
              <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-white dark:bg-gray-900 px-3 py-1 rounded-full border border-orange-200 dark:border-gray-700">
                Tuesday
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <img
                src="/assets/hanuman.png"
                alt="Hanuman Chalisa"
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0 bg-orange-100 dark:bg-gray-700"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Hanuman Chalisa</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Best for courage & protection.</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">12 min read · हिंदी</p>
              </div>
              <Link
                to="/hanuman-chalisa-hindi"
                className="flex-shrink-0 inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                📖 Read
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending This Week */}
      <section className="w-full bg-white dark:bg-gray-950 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">Trending This Week</h2>
            <Link to="/explorer" className="text-orange-500 hover:text-orange-600 font-semibold text-sm">
              See All →
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible">
            {trending.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="flex-shrink-0 w-56 md:w-auto flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 dark:text-white truncate">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.meta}</p>
                </div>
              </Link>
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
                <div className={`h-32 bg-gradient-to-r ${colorMap[categories.find(c => c.id === item.category)?.color]} opacity-80 group-hover:opacity-100 transition`}></div>
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
      <section className="w-full bg-white dark:bg-gray-950 py-12 px-4">
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
              <div className="text-4xl font-bold text-purple-500 mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-400">Daily Visitors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">200K+</div>
              <p className="text-gray-600 dark:text-gray-400">Monthly Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
              <p className="text-gray-600 dark:text-gray-400">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white dark:bg-gray-950 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-2xl p-12 text-center">
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
      <section className="w-full bg-white dark:bg-gray-950 py-12 px-4">
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
