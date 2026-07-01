import { Link } from "react-router-dom";

export default function RelatedProducts() {
  const relatedItems = [
    {
      id: 1,
      title: "Hanuman Chalisa",
      category: "Chalisa",
      icon: "📿",
      link: "/chalisa",
      views: "12.4K",
      rating: "4.9",
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      title: "Morning Meditation",
      category: "Mantra",
      icon: "✨",
      link: "/mantra",
      views: "8.2K",
      rating: "4.8",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "Evening Aarti",
      category: "Aarti",
      icon: "🎵",
      link: "/aarti",
      views: "6.7K",
      rating: "4.9",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Spiritual Wisdom",
      category: "Blog",
      icon: "📖",
      link: "/blog",
      views: "5.3K",
      rating: "4.7",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "Mantra Japa",
      category: "Mantra",
      icon: "💫",
      link: "/mantra",
      views: "9.1K",
      rating: "4.9",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Bhajan Collection",
      category: "Aarti",
      icon: "🎶",
      link: "/aarti",
      views: "7.8K",
      rating: "4.8",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <aside className="sticky top-4 h-fit">
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 p-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">✨</span>
            Related Products
          </h3>
        </div>

        {/* Products List */}
        <div className="divide-y divide-gray-200 dark:divide-gray-600">
          {relatedItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group block p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <div className="flex gap-3 items-start">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg text-xl flex-shrink-0`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition line-clamp-2 text-sm">
                    {item.title}
                  </h4>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>👁️ {item.views}</span>
                    <span>⭐ {item.rating}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition translate-x-0 group-hover:translate-x-1 flex-shrink-0">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="p-4 bg-gray-50 dark:bg-gray-600">
          <Link
            to="/explorer"
            className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 dark:from-orange-800 dark:to-red-800 dark:hover:from-orange-900 dark:hover:to-red-900 text-white py-2 rounded-lg font-semibold transition-all duration-200 text-sm"
          >
            Explore More
          </Link>
        </div>
      </div>
    </aside>
  );
}
