import { useState, useRef, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getSessionUser, clearSession } from "./session";

const NAV = [
  { to: "/admin", label: "Home", icon: "🏠", end: true },
  { to: "/admin/blogs", label: "Blogs", icon: "📝", end: false },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const user = getSessionUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const logout = () => {
    clearSession();
    navigate("/adminLogin", { replace: true });
  };

  const initials = (user?.name || user?.email || "A").trim().charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 h-16 bg-white border-b border-gray-200 shadow-sm z-30 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <span className="text-2xl" aria-hidden="true">🙏</span>
          <span className="text-lg">Devotional <span className="text-orange-500">Admin</span></span>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full hover:bg-gray-100 pl-1 pr-2 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-semibold">
              {initials}
            </span>
            <span className="hidden sm:block text-sm font-medium text-gray-700 max-w-[10rem] truncate">
              {user?.name || user?.email || "Admin"}
            </span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {menuOpen && (
            <div role="menu" className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-800 truncate">{user?.name || "Admin"}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
              <button
                onClick={logout}
                role="menuitem"
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Left sidebar */}
      <aside className="fixed top-16 left-0 bottom-0 w-16 sm:w-56 bg-white border-r border-gray-200 py-4 z-20">
        <nav className="space-y-1 px-2 sm:px-3" aria-label="Admin navigation">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium transition-colors ${
                  isActive ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-xl" aria-hidden="true">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="pt-16 pl-16 sm:pl-56">
        <div className="p-4 sm:p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
