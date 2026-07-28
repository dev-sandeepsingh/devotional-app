/* Service worker for offline reading.
 *
 * Strategy:
 *  - Hashed build assets (/assets/*.js, *.css) and images: cache-first —
 *    they never change under the same URL. Item content is code-split into
 *    per-item chunks, so each chalisa/mantra becomes readable offline once it
 *    has been opened (its chunk is cached on first fetch).
 *  - Navigations (SPA routes): network-first with the cached index.html as
 *    the offline fallback.
 *  - API calls (/api/*) and cross-origin requests (e.g. web fonts) are never
 *    cached — always live data or a real error; fonts fall back to the system
 *    stack offline.
 */
const CACHE = "devotional-v1";
const OFFLINE_URL = "/";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll([OFFLINE_URL, "/manifest.webmanifest"]))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // SPA navigations: try the network, fall back to the cached shell offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(OFFLINE_URL, copy));
          return res;
        })
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // Static assets: cache-first, populate on first fetch.
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return res;
        })
    )
  );
});
