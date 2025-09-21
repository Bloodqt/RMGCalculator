self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("calculator-cache").then(cache => {
      return cache.addAll([
        "loan_calculator_with_logo_v6.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
