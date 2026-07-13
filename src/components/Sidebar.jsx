import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ isOpen, onClose, collapsed, onToggleCollapse }) {
  const location = useLocation();

  const menuItems = [
    { id: "home", label: "Home", icon: "🏠", path: "/" },
    { id: "chalisa", label: "Chalisas", icon: "📖", path: "/chalisa" },
    { id: "mantra", label: "Mantras", icon: "✨", path: "/mantra" },
    { id: "aarti", label: "Aartis", icon: "🎵", path: "/aarti" },
    { id: "stotra", label: "Stotras", icon: "📜", path: "/stotras" },
    { id: "ashtakam", label: "Ashtakams", icon: "🙏", path: "/ashtakams" },
    { id: "sahasranama", label: "Sahasranamas", icon: "📚", path: "/sahasranamas" },
    { id: "vrat-katha", label: "Vrat Kathas", icon: "🕉️", path: "/vrat-kathas" },
    { id: "festival", label: "Festivals", icon: "📅", path: "/festivals" },
    { id: "temple", label: "Temples", icon: "🛕", path: "/temples" }
  ];

  return (
    <aside className={`fixed lg:sticky lg:self-start lg:translate-x-0 top-20 left-0 h-[calc(100vh-80px)] w-64 ${
      collapsed ? "lg:w-20" : "lg:w-64"
    } bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-[transform,width] duration-300 z-40 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between gap-2">
        {!collapsed && <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Menu</h2>}
        <div className="flex items-center gap-1 ml-auto">
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2" aria-label="Main navigation">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={onClose}
              aria-current={isActive ? "page" : undefined}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 ${
                collapsed ? "lg:justify-center lg:px-2" : ""
              } ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
            >
              <span className="text-xl" aria-hidden="true">{item.icon}</span>
              <span className={`font-medium ${collapsed ? "lg:hidden" : ""}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Daily Streak widget (static display — no tracking logic yet) */}
      <div className={`p-4 ${collapsed ? "lg:hidden" : ""}`}>
        <div className="rounded-xl bg-orange-50 dark:bg-gray-800 border border-orange-100 dark:border-gray-700 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl" aria-hidden="true">🔥</span>
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-white leading-tight">Daily Streak</p>
              <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold leading-tight">7 Days</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Keep your devotion alive!</p>
        </div>
      </div>

      <div className={`p-4 border-t border-gray-200 dark:border-gray-700 ${collapsed ? "lg:hidden" : ""}`}>
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center">© 2026 Devotional</p>
      </div>
    </aside>
  );
}
