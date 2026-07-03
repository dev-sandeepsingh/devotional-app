import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogsApi } from "./api";
import { getSessionUser } from "./session";

function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

function StatCard({ icon, label, value, accent, to, cta }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center text-xl shadow-sm`} aria-hidden="true">
          {icon}
        </div>
      </div>
      <div className="mt-4 text-3xl font-bold text-gray-800 tabular-nums">{value}</div>
      <p className="text-gray-500 text-sm">{label}</p>
      {to && (
        <Link to={to} className="inline-block mt-3 text-sm font-semibold text-orange-600 hover:text-orange-700">
          {cta} →
        </Link>
      )}
    </div>
  );
}

export default function AdminHome() {
  const user = getSessionUser();
  const [blogs, setBlogs] = useState(null); // null = loading, [] = loaded/empty

  useEffect(() => {
    let active = true;
    blogsApi
      .list()
      .then((data) => { if (active) setBlogs(Array.isArray(data) ? data : []); })
      .catch(() => { if (active) setBlogs([]); });
    return () => { active = false; };
  }, []);

  const loading = blogs === null;
  const total = loading ? "—" : blogs.length;
  const published = loading ? "—" : blogs.filter((b) => b.isActive).length;
  const drafts = loading ? "—" : blogs.filter((b) => !b.isActive).length;

  const recent = loading
    ? []
    : [...blogs]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

  const initials = (user?.name || user?.email || "A").trim().charAt(0).toUpperCase();

  return (
    <div>
      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-red-500 text-white p-6 sm:p-8 shadow-md mb-8">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-16 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-white/80 text-sm mb-1">{today}</p>
            <h1 className="text-2xl sm:text-3xl font-bold drop-shadow-sm">
              {greeting()}, {user?.name || "Admin"} 👋
            </h1>
            <p className="text-white/90 mt-1">Here's what's happening on your devotional platform.</p>
            <Link
              to="/admin/blogs"
              className="inline-flex items-center gap-2 mt-5 bg-white text-orange-600 px-4 py-2.5 rounded-lg font-semibold hover:bg-orange-50 transition shadow-sm"
            >
              <span aria-hidden="true">＋</span> Create a new blog
            </Link>
          </div>

          <div className="hidden sm:flex flex-col items-center">
            <span className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-3xl font-bold border border-white/30">
              {initials}
            </span>
            <span className="mt-2 text-sm text-white/90 capitalize">{user?.role || "admin"}</span>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatCard icon="📝" label="Total Blogs" value={total} accent="from-orange-500 to-red-500" to="/admin/blogs" cta="Manage blogs" />
        <StatCard icon="✅" label="Published" value={published} accent="from-green-500 to-emerald-500" />
        <StatCard icon="📄" label="Drafts" value={drafts} accent="from-amber-500 to-yellow-500" />
        <StatCard icon="🌐" label="Languages" value="8+" accent="from-sky-500 to-indigo-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent blogs */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-800">Recent Blogs</h2>
            <Link to="/admin/blogs" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
              View all →
            </Link>
          </div>

          {loading ? (
            <div className="p-5 space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 animate-pulse">
                  <div className="w-9 h-9 rounded-lg bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3.5 w-2/3 rounded bg-gray-200" />
                    <div className="h-3 w-1/3 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : recent.length === 0 ? (
            <div className="p-10 text-center">
              <div className="text-4xl mb-3" aria-hidden="true">📝</div>
              <p className="text-gray-600 mb-3">No blogs yet.</p>
              <Link to="/admin/blogs" className="text-orange-600 font-semibold hover:text-orange-700">
                Create your first blog →
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {recent.map((b) => (
                <li key={b.id} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center text-lg flex-shrink-0" aria-hidden="true">
                    📖
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-800 truncate">{b.title}</p>
                    <p className="text-xs text-gray-500">{formatDate(b.createdAt)}</p>
                  </div>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${
                    b.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}>
                    {b.isActive ? "Active" : "Inactive"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Quick actions + account */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link
                to="/admin/blogs"
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 hover:border-orange-300 hover:bg-orange-50/50 transition-colors"
              >
                <span className="text-xl" aria-hidden="true">＋</span>
                <span className="font-medium text-gray-700">Add a new blog</span>
              </Link>
              <Link
                to="/admin/blogs"
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 hover:border-orange-300 hover:bg-orange-50/50 transition-colors"
              >
                <span className="text-xl" aria-hidden="true">📝</span>
                <span className="font-medium text-gray-700">Manage blogs</span>
              </Link>
              <a
                href="/blog"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 hover:border-orange-300 hover:bg-orange-50/50 transition-colors"
              >
                <span className="text-xl" aria-hidden="true">🌐</span>
                <span className="font-medium text-gray-700">View public site</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h2 className="font-bold text-gray-800 mb-4">Your Account</h2>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-semibold">
                {initials}
              </span>
              <div className="min-w-0">
                <p className="font-medium text-gray-800 truncate">{user?.name || "Admin"}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 capitalize">
              Role: <span className="font-medium text-gray-700">{user?.role || "admin"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
