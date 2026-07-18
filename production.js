/* =========================================================
   NLS ENGINEERING PORTFOLIO
   production.js
   Production Performance System
========================================================= */

"use strict";


window.NLS = window.NLS || {};


NLS.production = {


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.enableLazyLoading();


        this.optimizeImages();


        this.preventLayoutShift();


        this.enableConnectionOptimization();


        this.monitorPerformance();


        console.log(

            "NLS Production Performance System initialized."

        );

    },


    /* =====================================================
       LAZY LOADING
    ===================================================== */

    enableLazyLoading() {


        const lazyImages =

            document.querySelectorAll(

                "img[loading='lazy']"

            );


        if (

            !lazyImages.length

        )

            return;


        if (

            "IntersectionObserver"

            in window

        ) {


            const imageObserver =

                new IntersectionObserver(

                    (

                        entries,

                        observer

                    ) => {


                        entries.forEach(

                            entry => {


                                if (

                                    entry.isIntersecting

                                ) {


                                    const image =

                                        entry.target;


                                    image.classList.add(

                                        "image-loaded"

                                    );


                                    observer.unobserve(

                                        image

                                    );

                                }

                            }

                        );

                    },

                    {

                        rootMargin:

                            "200px 0px"

                    }

                );


            lazyImages.forEach(

                image => {


                    imageObserver.observe(

                        image

                    );

                }

            );

        }

    },


    /* =====================================================
       IMAGE OPTIMIZATION
    ===================================================== */

    optimizeImages() {


        const images =

            document.querySelectorAll(

                "img"

            );


        images.forEach(

            image => {


                if (

                    !image.hasAttribute(

                        "decoding"

                    )

                ) {


                    image.setAttribute(

                        "decoding",

                        "async"

                    );

                }


                if (

                    !image.hasAttribute(

                        "loading"

                    )

                ) {


                    image.setAttribute(

                        "loading",

                        "lazy"

                    );

                }

            }

        );


        const heroImage =

            document.querySelector(

                ".hero img"

            );


        if (

            heroImage

        ) {


            heroImage.setAttribute(

                "loading",

                "eager"

            );


            heroImage.setAttribute(

                "fetchpriority",

                "high"

            );

        }

    },


    /* =====================================================
       PREVENT LAYOUT SHIFT
    ===================================================== */

    preventLayoutShift() {


        const images =

            document.querySelectorAll(

                "img"

            );


        images.forEach(

            image => {


                if (

                    image.hasAttribute(

                        "width"

                    )

                    &&

                    image.hasAttribute(

                        "height"

                    )

                )

                    return;


                image.style.aspectRatio =

                    "16 / 9";

            }

        );

    },


    /* =====================================================
       CONNECTION OPTIMIZATION
    ===================================================== */

    enableConnectionOptimization() {


        const externalDomains = [

            "https://fonts.googleapis.com",

            "https://fonts.gstatic.com",

            "https://cdnjs.cloudflare.com"

        ];


        externalDomains.forEach(

            domain => {


                if (

                    document.querySelector(

                        `link[href^="${domain}"]`

                    )

                )

                    return;


                const link =

                    document.createElement(

                        "link"

                    );


                link.rel =

                    "preconnect";


                link.href =

                    domain;


                if (

                    domain.includes(

                        "gstatic"

                    )

                ) {


                    link.crossOrigin =

                        "anonymous";

                }


                document.head.appendChild(

                    link

                );

            }

        );

    },


    /* =====================================================
       PERFORMANCE MONITORING
    ===================================================== */

    monitorPerformance() {


        if (

            !("PerformanceObserver" in window)

        )

            return;


        try {


            const observer =

                new PerformanceObserver(

                    list => {


                        list.getEntries()

                            .forEach(

                                entry => {


                                    if (

                                        entry.entryType ===

                                        "largest-contentful-paint"

                                    ) {


                                        console.log(

                                            "LCP:",

                                            Math.round(

                                                entry.startTime

                                            ),

                                            "ms"

                                        );

                                    }


                                    if (

                                        entry.entryType ===

                                        "layout-shift"

                                        &&

                                        !entry.hadRecentInput

                                    ) {


                                        console.log(

                                            "Layout Shift:",

                                            entry.value

                                        );

                                    }

                                }

                            );

                    }

                );


            observer.observe(

                {

                    type:

                        "largest-contentful-paint",

                    buffered:

                        true

                }

            );


            observer.observe(

                {

                    type:

                        "layout-shift",

                    buffered:

                        true

                }

            );

        }

        catch (

            error

        ) {


            console.warn(

                "Performance monitoring unavailable:",

                error

            );

        }

    }

};


document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.production.init();

    }

);
