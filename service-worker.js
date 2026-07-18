/* =========================================================
   NLS ENGINEERING PORTFOLIO
   service-worker.js
   Production PWA System
========================================================= */

"use strict";


const CACHE_NAME =

    "nls-portfolio-v7";


const OFFLINE_PAGE =

    "./index.html";


const STATIC_ASSETS = [

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

    "./security.js",

    "./manifest.json"

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

                        STATIC_ASSETS

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

                    ) {


                        return response;

                    }


                    const clonedResponse =

                        response.clone();


                    caches.open(

                        CACHE_NAME

                    )

                    .then(

                        cache => {


                            cache.put(

                                request,

                                clonedResponse

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


                            if (

                                cachedResponse

                            )

                                return cachedResponse;


                            return caches.match(

                                OFFLINE_PAGE

                            );

                        }

                    );

                }

            )

        );

    }

);


/* =========================================================
   MESSAGE HANDLING
========================================================= */

self.addEventListener(

    "message",

    event => {


        if (

            event.data

            &&

            event.data.type ===

            "SKIP_WAITING"

        ) {


            self.skipWaiting();

        }

    }

);
