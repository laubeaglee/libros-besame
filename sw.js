// sw.js
// A simple service worker that does nothing yet, but satisfies PWA criteria.

self.addEventListener('install', (e) => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', (e) => {
  // You can add caching logic here later
});
