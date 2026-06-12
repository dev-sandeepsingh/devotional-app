import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      title: "Importance of Hanuman Chalisa",
      excerpt: "Understand the spiritual significance and benefits of reciting Hanuman Chalisa regularly",
      date: "June 2026",
      readTime: "5 min read",
      link: "/blog/importance-of-hanuman-chalisa",
      icon: "📿"
    },
    {
      title: "Benefits of Mantra Meditation",
      excerpt: "Explore how mantra meditation can transform your mental health and spiritual well-being",
      date: "June 2026",
      readTime: "7 min read",
      link: "/blog/mantra-meditation-benefits",
      icon: "🧘"
    },
    {
      title: "Guide to Daily Devotional Practice",
      excerpt: "Learn how to establish a meaningful daily devotional routine that fits your lifestyle",
      date: "May 2026",
      readTime: "6 min read",
      link: "/blog/daily-devotional-guide",
      icon: "📖"
    },
    {
      title: "The Power of Faith and Devotion",
      excerpt: "Discover how faith and sincere devotion can bring positive changes to your life",
      date: "May 2026",
      readTime: "8 min read",
      link: "/blog/power-of-faith",
      icon: "✨"
    }
  ];

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
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2"></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{post.icon}</div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:translate-x-1 transition">
                  Read Article →
                </button>
              </div>
            </Link>
          ))}
        </div>
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
    </div>
  );
}
