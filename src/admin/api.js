import { getToken } from "./session";

// Same-origin by default (Vite proxies /api -> backend in dev). Override in prod with VITE_API_URL.
const API_BASE = import.meta.env.VITE_API_URL || "/api/v1";

async function apiFetch(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("Cannot reach the server. Please make sure the backend is running.");
  }

  let json = null;
  try {
    json = await res.json();
  } catch {
    // no/invalid JSON body
  }

  if (!res.ok) {
    // Backend error envelope: { error: { message, details? } }
    const err = new Error(json?.error?.message || `Request failed (${res.status})`);
    err.status = res.status;
    err.details = json?.error?.details;
    throw err;
  }

  // Success envelope: { data: ... }
  return json?.data;
}

export const authApi = {
  login: (email, password) => apiFetch("/auth/login", { method: "POST", body: { email, password } }),
  me: () => apiFetch("/auth/me", { auth: true }),
};

export const blogsApi = {
  // Public view: returns only ACTIVE blogs. No auth required — used by the
  // public /blog page so every visitor sees the same published posts.
  listPublic: () => apiFetch("/blogs"),
  // Admin view: returns ALL blogs (active + inactive). Requires an admin token.
  list: () => apiFetch("/blogs/admin", { auth: true }),
  create: (blog) => apiFetch("/blogs", { method: "POST", body: blog, auth: true }),
  update: (id, blog) => apiFetch(`/blogs/${id}`, { method: "PATCH", body: blog, auth: true }),
  remove: (id) => apiFetch(`/blogs/${id}`, { method: "DELETE", auth: true }),
};
