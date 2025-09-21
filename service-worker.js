self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("calculator-cache").then(cache => {
      return cache.addAll([
        "/RMGCalculator/index.html",
        "/RMGCalculator/manifest.json",
        "/RMGCalculator/icon-192.png",
        "/RMGCalculator/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
