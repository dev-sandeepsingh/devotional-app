import { useState, useEffect } from "react";
import { blogsApi } from "./api";

// Handles both creating a new blog and editing an existing one.
// Pass `blog` to edit; omit it to create.
export default function BlogFormModal({ blog, onClose, onSaved }) {
  const isEdit = Boolean(blog);
  const [form, setForm] = useState({
    title: blog?.title ?? "",
    description: blog?.description ?? "",
    isActive: blog?.isActive ?? true,
  });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      isActive: form.isActive,
    };
    try {
      if (isEdit) {
        await blogsApi.update(blog.id, payload);
      } else {
        await blogsApi.create(payload);
      }
      onSaved();
    } catch (err) {
      const detail = Array.isArray(err.details) && err.details.length
        ? err.details.map((d) => d.message).join(", ")
        : "";
      setError(detail || err.message || "Failed to save blog.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div role="dialog" aria-modal="true" aria-labelledby="blog-form-title" className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 id="blog-form-title" className="text-lg font-bold text-gray-800">{isEdit ? "Edit Blog" : "Add New Blog"}</h2>
          <button onClick={onClose} aria-label="Close" className="p-1 rounded-lg hover:bg-gray-100 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              id="title" name="title" type="text" required maxLength={200}
              value={form.title} onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description" name="description" rows={5} required
              value={form.description} onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
            />
            Active (visible on the site)
          </label>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
              Cancel
            </button>
            <button
              type="submit" disabled={saving}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
