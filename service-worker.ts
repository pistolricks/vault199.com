console.log("I'm a service worker ready to serve")

globalThis.addEventListener("fetch", (event: FetchEvent) => {
   console.log(`HTTP: ${event.request.url}`)
})