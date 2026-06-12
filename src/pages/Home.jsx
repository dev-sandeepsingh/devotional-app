import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "chalisa", name: "Chalisas", icon: "📿", link: "/chalisa", description: "Devotional hymns", color: "blue" },
    { id: "mantra", name: "Mantras", icon: "✨", link: "/mantra", description: "Sacred chants", color: "purple" },
    { id: "aarti", name: "Aartis", icon: "🎵", link: "/aarti", description: "Worship songs", color: "pink" },
    { id: "blog", name: "Blog", icon: "📖", link: "/blog", description: "Spiritual articles", color: "green" }
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Helmet>
        <title>Devotional App | Spiritual Chants & Mantras</title>
        <meta name="description" content="Explore devotional content in multiple languages." />
      </Helmet>

      {/* Simplified Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🙏 Namaste</h1>
          <p className="text-lg md:text-xl opacity-95 mb-8">
            Welcome to your spiritual space. Explore devotional content in 8+ languages.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/chalisa"
              className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Exploring
            </Link>
            <Link
              to="/donate"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Support Us
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Explore by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4">
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
      <section className="max-w-6xl mx-auto px-4 py-12">
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
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4">
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
      <section className="max-w-6xl mx-auto px-4 py-16">
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
      </section>

      {/* Languages Info */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4">
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
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
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
