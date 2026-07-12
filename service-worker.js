/*=========================================================
    Portfolio Service Worker
    Version 2.0.0
    Author: Nhlanhla Lucky Shirilele
=========================================================*/

const CACHE_NAME = "portfolio-v2.0.0";

const STATIC_FILES = [

    "./",

    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",

    "./images/profile.jpg",
    "./images/about.jpg",
    "./images/hero-bg.jpg",
    "./images/project1.jpg",
    "./images/project2.jpg",
    "./images/project3.jpg",
    "./images/logo.png",
    "./images/qr-code.png",

    "./icon/icon-192.png",
    "./icon/icon-512.png"

];

/*=========================================================
    INSTALL
=========================================================*/

self.addEventListener("install", event => {

    console.log("Installing Service Worker...");

    event.waitUntil(

        (async () => {

            const cache = await caches.open(CACHE_NAME);

            for (const file of STATIC_FILES) {

                try {

                    await cache.add(file);

                    console.log("Cached:", file);

                } catch (error) {

                    console.warn("Skipped:", file);

                }

            }

        })()

    );

    self.skipWaiting();

});

/*=========================================================
    ACTIVATE
=========================================================*/

self.addEventListener("activate", event => {

    console.log("Activating Service Worker...");

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {

                        console.log("Deleting old cache:", key);

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});

/*=========================================================
    FETCH
=========================================================*/

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    const request = event.request;

    const url = new URL(request.url);

    /*=========================
        HTML
    =========================*/

    if (request.headers.get("accept")?.includes("text/html")) {

        event.respondWith(

            fetch(request)

                .then(response => {

                    if (!response || response.status !== 200) {

                        return caches.match("./index.html");

                    }

                    const responseClone = response.clone();

                    caches.open(CACHE_NAME)

                        .then(cache => cache.put(request, responseClone));

                    return response;

                })

                .catch(() => caches.match("./index.html"))

        );

        return;

    }

    /*=========================
        CACHE FIRST
    =========================*/

    event.respondWith(

        caches.match(request)

            .then(cachedResponse => {

                if (cachedResponse) {

                    return cachedResponse;

                }

                return fetch(request)

                    .then(networkResponse => {

                        if (

                            !networkResponse ||

                            networkResponse.status !== 200 ||

                            networkResponse.type !== "basic"

                        ) {

                            return networkResponse;

                        }

                        const clone = networkResponse.clone();

                        caches.open(CACHE_NAME)

                            .then(cache => {

                                cache.put(request, clone);

                            });

                        return networkResponse;

                    });

            })

    );

});

/*=========================================================
    MESSAGE
=========================================================*/

self.addEventListener("message", event => {

    if (event.data === "SKIP_WAITING") {

        self.skipWaiting();

    }

});

console.log("Portfolio Service Worker Loaded");
