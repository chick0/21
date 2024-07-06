const PRECACHE = "precache-v1"
const PRECACHE_URLS = [
    "/_card/Back.png",
    "/_card/C2.png",
    "/_card/C3.png",
    "/_card/C4.png",
    "/_card/C5.png",
    "/_card/C6.png",
    "/_card/C7.png",
    "/_card/C8.png",
    "/_card/C9.png",
    "/_card/CA.png",
    "/_card/CJ.png",
    "/_card/CK.png",
    "/_card/CQ.png",
    "/_card/CX.png",
    "/_card/D2.png",
    "/_card/D3.png",
    "/_card/D4.png",
    "/_card/D5.png",
    "/_card/D6.png",
    "/_card/D7.png",
    "/_card/D8.png",
    "/_card/D9.png",
    "/_card/DA.png",
    "/_card/DJ.png",
    "/_card/DK.png",
    "/_card/DQ.png",
    "/_card/DX.png",
    "/_card/H2.png",
    "/_card/H3.png",
    "/_card/H4.png",
    "/_card/H5.png",
    "/_card/H6.png",
    "/_card/H7.png",
    "/_card/H8.png",
    "/_card/H9.png",
    "/_card/HA.png",
    "/_card/HJ.png",
    "/_card/HK.png",
    "/_card/HQ.png",
    "/_card/HX.png",
    "/_card/S2.png",
    "/_card/S3.png",
    "/_card/S4.png",
    "/_card/S5.png",
    "/_card/S6.png",
    "/_card/S7.png",
    "/_card/S8.png",
    "/_card/S9.png",
    "/_card/SA.png",
    "/_card/SJ.png",
    "/_card/SK.png",
    "/_card/SQ.png",
    "/_card/SX.png",
]

const RUNTIME = "runtime-{version}"

self.addEventListener("install", (event) => {
    console.log("install")

    event.waitUntil(
        caches
            .open(PRECACHE)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting())
    )
})

self.addEventListener("activate", (event) => {
    const currentCaches = [PRECACHE, RUNTIME]
    console.log("activate")

    event.waitUntil(
        caches
            .keys()
            .then((cacheKeys) => {
                return cacheKeys.filter((key) => !currentCaches.includes(key))
            })
            .then((deleteKeys) => {
                return Promise.all(
                    deleteKeys.map((key) => {
                        console.log("POP", key)
                        return caches.delete(key)
                    })
                )
            })
            .then(() => self.clients.claim())
    )
})

self.addEventListener("fetch", (event) => {
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    console.log("HIT", event.request.url)
                    return cachedResponse
                }

                return fetch(event.request).then((response) => {
                    console.log("GET", event.request.url)

                    if (response.ok) {
                        if (event.request.url.endsWith("version.json")) {
                            return response
                        }

                        const url = new URL(event.request.url)

                        if (location.origin == url.origin) {
                            return caches.open(RUNTIME).then((cache) => {
                                return cache.put(event.request, response.clone()).then(() => {
                                    console.log("PUT", event.request.url)
                                    return response
                                })
                            })
                        }
                    }

                    return response
                })
            })
        )
    }
})
