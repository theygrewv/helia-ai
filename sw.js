const CACHE_NAME = 'helia-sovereign-v1';
const ASSETS = [
  '/',
  '/index.html',
  'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1',
  'https://esm.sh/@atproto/api'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
