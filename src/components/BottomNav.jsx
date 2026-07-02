import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "🏠", path: "/" },
  { id: "chalisa", label: "Chalisas", icon: "📿", path: "/chalisa" },
  { id: "mantra", label: "Mantras", icon: "✨", path: "/mantra" },
  { id: "aarti", label: "Aartis", icon: "🎵", path: "/aarti" },
  { id: "blog", label: "Blog", icon: "📖", path: "/blog" },
];

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch justify-around">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.id}
              to={item.path}
              aria-current={active ? "page" : undefined}
              className={`flex flex-1 flex-col items-center gap-1 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-colors ${
                active
                  ? "text-orange-500 dark:text-orange-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400"
              }`}
            >
              <span className="text-xl leading-none" aria-hidden="true">{item.icon}</span>
              <span className="text-[11px] font-medium leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
