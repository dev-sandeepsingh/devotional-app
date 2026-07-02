import { useEffect } from "react";

// Small reusable confirmation dialog.
export default function ConfirmDialog({ title, message, confirmLabel = "Confirm", busy = false, error = "", onConfirm, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && !busy && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, busy]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => e.target === e.currentTarget && !busy && onClose()}
    >
      <div role="dialog" aria-modal="true" aria-labelledby="confirm-title" className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 id="confirm-title" className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{message}</p>

        {error && (
          <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-2.5 text-sm mb-4">
            {error}
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            type="button" onClick={onClose} disabled={busy}
            className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="button" onClick={onConfirm} disabled={busy}
            className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {busy ? "Deleting…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
