import { useEffect, useState, useCallback } from "react";
import { blogsApi } from "./api";
import BlogFormModal from "./BlogFormModal";
import ConfirmDialog from "./ConfirmDialog";

function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Create/edit modal: null = closed, { } = create, { ...blog } = edit
  const [formBlog, setFormBlog] = useState(undefined); // undefined = closed
  // Delete confirm
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const load = useCallback(async () => {
    try {
      const data = await blogsApi.list();
      setBlogs(Array.isArray(data) ? data : []);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load — setState happens only inside the promise callbacks (not synchronously).
  useEffect(() => {
    let active = true;
    blogsApi.list()
      .then((data) => { if (active) setBlogs(Array.isArray(data) ? data : []); })
      .catch((err) => { if (active) setError(err.message || "Failed to load blogs."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  const retry = () => {
    setLoading(true);
    setError("");
    load();
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    setDeleteError("");
    try {
      await blogsApi.remove(deleteTarget.id);
      setDeleteTarget(null);
      load();
    } catch (err) {
      setDeleteError(err.message || "Failed to delete blog.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Blogs</h1>
          <p className="text-gray-500 text-sm">Manage devotional blog posts.</p>
        </div>
        <button
          onClick={() => setFormBlog(null)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2.5 rounded-lg font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <span aria-hidden="true">＋</span> Add New Blog
        </button>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500">Loading blogs…</div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6">
          <p className="font-medium mb-2">{error}</p>
          <button onClick={retry} className="text-sm font-semibold text-red-700 underline">Retry</button>
        </div>
      ) : blogs.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="text-4xl mb-3" aria-hidden="true">📝</div>
          <p className="text-gray-600 mb-4">No blogs yet.</p>
          <button onClick={() => setFormBlog(null)} className="text-orange-600 font-semibold hover:text-orange-700">
            Create your first blog →
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3 hidden md:table-cell">Description</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 hidden sm:table-cell">Created</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogs.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{b.title}</td>
                  <td className="px-4 py-3 text-gray-600 hidden md:table-cell max-w-md truncate">{b.description}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      b.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {b.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-sm hidden sm:table-cell">{formatDate(b.createdAt)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setFormBlog(b)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        ✏️ <span className="hidden sm:inline">Edit</span>
                      </button>
                      <button
                        onClick={() => { setDeleteError(""); setDeleteTarget(b); }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                      >
                        🗑️ <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {formBlog !== undefined && (
        <BlogFormModal
          blog={formBlog || undefined}
          onClose={() => setFormBlog(undefined)}
          onSaved={() => {
            setFormBlog(undefined);
            load();
          }}
        />
      )}

      {deleteTarget && (
        <ConfirmDialog
          title="Delete blog"
          message={`Are you sure you want to delete "${deleteTarget.title}"? This action cannot be undone.`}
          confirmLabel="Delete"
          busy={deleting}
          error={deleteError}
          onConfirm={confirmDelete}
          onClose={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
