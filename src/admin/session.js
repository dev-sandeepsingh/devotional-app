// Persisted admin session (JWT + user). Kept separate from the user site's storage keys.
const TOKEN_KEY = "adminToken";
const USER_KEY = "adminUser";

export function saveSession(token, user) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getSessionUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// The admin panel is only for admins — a valid token AND an admin role.
export function isAdmin() {
  return !!getToken() && getSessionUser()?.role === "admin";
}
