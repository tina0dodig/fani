const CACHE_NAME = "apartman-vodic-final-v2";

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./assets/background.jpg",
  "./assets/hero.jpg",
  "./assets/beach-category.jpg",
  "./assets/shops-category.jpg",
  "./assets/public-beach.jpg",
  "./assets/ribola.jpg",
  "./assets/konzum.jpg",
  "./assets/pekara-vita.jpg",
  "./assets/center.jpg",
  "./assets/monaco.jpg",
  "./assets/bus-station.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});