// Daily reading streak, tracked in localStorage. A day counts when the user
// opens any content detail page (DetailPage calls recordReading on mount).
const KEY = "readingStreak";

// Local calendar date as "YYYY-MM-DD" (not UTC — a late-evening reading
// should count for the reader's own day).
function localDate(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

// Count today's reading: same day is a no-op, consecutive days extend the
// streak, a gap restarts it at 1. Returns the current streak.
export function recordReading() {
  const today = localDate();
  const yesterday = localDate(new Date(Date.now() - 86400000));
  const data = load();
  if (data.lastDate === today) return data.streak || 1;
  const streak = data.lastDate === yesterday ? (data.streak || 0) + 1 : 1;
  localStorage.setItem(KEY, JSON.stringify({ lastDate: today, streak }));
  return streak;
}

// Current streak for display: 0 unless the last reading was today or
// yesterday (yesterday keeps the streak alive until the end of today).
export function getStreak() {
  const data = load();
  if (!data.lastDate) return 0;
  const today = localDate();
  const yesterday = localDate(new Date(Date.now() - 86400000));
  return data.lastDate === today || data.lastDate === yesterday ? data.streak || 0 : 0;
}

// True when the user has already read something today.
export function readToday() {
  return load().lastDate === localDate();
}
