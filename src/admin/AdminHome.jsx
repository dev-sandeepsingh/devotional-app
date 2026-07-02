import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogsApi } from "./api";
import { getSessionUser } from "./session";

export default function AdminHome() {
  const user = getSessionUser();
  const [count, setCount] = useState(null);

  useEffect(() => {
    blogsApi.list().then((data) => setCount(data?.length ?? 0)).catch(() => setCount(null));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome back, {user?.name || "Admin"} 👋</h1>
      <p className="text-gray-500 mb-8">Here's an overview of your devotional platform.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-3xl mb-2" aria-hidden="true">📝</div>
          <div className="text-3xl font-bold text-gray-800">{count === null ? "—" : count}</div>
          <p className="text-gray-500 text-sm">Total Blogs</p>
          <Link to="/admin/blogs" className="inline-block mt-3 text-sm font-semibold text-orange-600 hover:text-orange-700">
            Manage blogs →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-3xl mb-2" aria-hidden="true">🌐</div>
          <div className="text-3xl font-bold text-gray-800">8+</div>
          <p className="text-gray-500 text-sm">Languages Supported</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-3xl mb-2" aria-hidden="true">👤</div>
          <div className="text-lg font-bold text-gray-800 truncate">{user?.email}</div>
          <p className="text-gray-500 text-sm capitalize">Role: {user?.role}</p>
        </div>
      </div>
    </div>
  );
}
