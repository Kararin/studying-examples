this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => cache.addAll([
            'test'
        ]))
    )
});

this.addEventListener('fetch', (event) => {
    console.log('fetching');
    event.respondWith(
        caches.match(event.equest)
    );
});