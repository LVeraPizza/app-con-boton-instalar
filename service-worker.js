self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/contacto.html',
        '/css/styles.css',
        '/script.js',
        '/splash.js',
        '/service-worker.js',
        '/logo_vp.png',

        // Agrega otros archivos que necesites en el caché
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
