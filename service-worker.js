/*==========================================
    Portfolio Service Worker
    Version 1.0.0
==========================================*/

const CACHE_NAME = "portfolio-v1.0.0";

const FILES_TO_CACHE = [

    "/",
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",

    "images/profile.jpg",
    "images/about.jpg",
    "images/hero.jpg",
    "images/project1.jpg",
    "images/project2.jpg",
    "images/project3.jpg",
    "images/qr-code.png",
    "images/logo.png",

    "icons/icon-192.png",
    "icons/icon-512.png",

    "files/CV.pdf"

];

/*==============================
    INSTALL
==============================*/

self.addEventListener("install", event => {

    console.log("Service Worker Installed");

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => cache.addAll(FILES_TO_CACHE))

    );

    self.skipWaiting();

});

/*==============================
    ACTIVATE
==============================*/

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});

/*==============================
    FETCH
==============================*/

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response ||

            fetch(event.request)

            .then(networkResponse => {

                return caches.open(CACHE_NAME)

                .then(cache => {

                    cache.put(event.request, networkResponse.clone());

                    return networkResponse;

                });

            })

            .catch(() => {

                return caches.match("index.html");

            });

        })

    );

});