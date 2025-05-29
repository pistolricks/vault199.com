console.log("I'm a service worker ready to serve")

const url = ["index.html", "sw.js"]

globalThis.addEventListener("fetch", (event: FetchEvent) => {
     caches.open("pwa").then(cache => {
        cache.addAll(url).then(r => console.log("cache", r))
     })
    console.log(`HTTP: ${event.request.url}`)

    // Shift + Reload ignores service worker
    // event.respondWith(new Response ("Hey, it's a response from the service worker!"))
})