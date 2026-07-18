/* =========================================================
   NLS ENGINEERING PORTFOLIO
   service-worker.js
   Production Cache System
========================================================= */

"use strict";


const CACHE_NAME =

    "nls-portfolio-v5";


const STATIC_CACHE = [

    "./",

    "./index.html",

    "./style.css",

    "./config.js",

    "./data.js",

    "./utils.js",

    "./app.js",

    "./script.js",

    "./qr.js",

    "./admin.js",

    "./ai.js",

    "./analytics.js",

    "./production.js",

    "./seo.js",

    "./manifest.json",

    "./assets/icons/favicon.png",

    "./assets/icons/icon-192.png",

    "./assets/icons/icon-512.png"

];



/* =========================================================
   INSTALL
========================================================= */

self.addEventListener(

    "install",

    event => {


        event.waitUntil(

            caches.open(

                CACHE_NAME

            )

            .then(

                cache => {


                    return cache.addAll(

                        STATIC_CACHE

                    );

                }

            )

            .then(

                () => {


                    return self.skipWaiting();

                }

            )

        );

    }

);



/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener(

    "activate",

    event => {


        event.waitUntil(

            caches.keys()

                .then(

                    cacheNames => {


                        return Promise.all(

                            cacheNames

                                .filter(

                                    cacheName =>

                                        cacheName !==

                                        CACHE_NAME

                                )

                                .map(

                                    cacheName =>

                                        caches.delete(

                                            cacheName

                                        )

                                )

                        );

                    }

                )

                .then(

                    () => {


                        return self.clients.claim();

                    }

                )

        );

    }

);



/* =========================================================
   FETCH
========================================================= */

self.addEventListener(

    "fetch",

    event => {


        const request =

            event.request;


        if (

            request.method !==

            "GET"

        )

            return;



        event.respondWith(

            fetch(

                request

            )

            .then(

                response => {


                    if (

                        !response

                        ||

                        response.status !==

                        200

                        ||

                        response.type ===

                        "opaque"

                    ) {


                        return response;

                    }


                    const responseClone =

                        response.clone();


                    caches.open(

                        CACHE_NAME

                    )

                    .then(

                        cache => {


                            cache.put(

                                request,

                                responseClone

                            );

                        }

                    );


                    return response;

                }

            )

            .catch(

                () => {


                    return caches.match(

                        request

                    )

                    .then(

                        cachedResponse => {


                            return cachedResponse

                                ||

                                caches.match(

                                    "./index.html"

                                );

                        }

                    );

                }

            )

        );

    }

);
