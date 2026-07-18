/* =========================================================
   NLS ENGINEERING PORTFOLIO
   analytics.js
   Analytics & Monitoring System
========================================================= */

"use strict";


window.NLS = window.NLS || {};


NLS.analytics = {


    /* =====================================================
       CONFIGURATION
    ===================================================== */

    config: {


        enabled: true,


        debug: false,


        storageKey:

            "nls_analytics_events",


        maxStoredEvents:

            100


    },


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        if (

            !this.config.enabled

        )

            return;


        this.trackPageView();


        this.trackSectionViews();


        this.trackDownloads();


        this.trackContactActions();


        this.trackProjectInteractions();


        this.trackContactForm();


        this.trackErrors();


        this.trackPerformance();


        this.debug(

            "Analytics initialized successfully."

        );

    },


    /* =====================================================
       EVENT TRACKING
    ===================================================== */

    track(

    eventName,

    data = {}

) {


    const event = {


        event:

            eventName,


        data:

            data,


        timestamp:

            new Date()

                .toISOString(),


        page:

            window.location.pathname

    };


    /*
       STORE EVENT LOCALLY
    */

    this.storeEvent(

        event

    );


    /*
       SEND EVENT TO GOOGLE ANALYTICS
    */

    if (

        typeof window.gtag ===

        "function"

    ) {


        window.gtag(

            "event",

            eventName,

            data

        );

    }


    /*
       DEBUG LOG
    */

    this.debug(

        event

    );

},

    /* =====================================================
       PAGE VIEW
    ===================================================== */

    trackPageView() {


        this.track(

            "page_view",

            {

                title:

                    document.title,


                url:

                    window.location.href

            }

        );

    },


    /* =====================================================
       SECTION VISIBILITY
    ===================================================== */

    trackSectionViews() {


        const sections =

            document.querySelectorAll(

                "section[id]"

            );


        if (

            !sections.length

        )

            return;


        const viewedSections =

            new Set();


        const observer =

            new IntersectionObserver(

                entries => {


                    entries.forEach(

                        entry => {


                            if (

                                !entry.isIntersecting

                            )

                                return;


                            const id =

                                entry.target.id;


                            if (

                                viewedSections.has(

                                    id

                                )

                            )

                                return;


                            viewedSections.add(

                                id

                            );


                            this.track(

                                "section_view",

                                {

                                    section:

                                        id

                                }

                            );

                        }

                    );

                },

                {

                    threshold:

                        0.35

                }

            );


        sections.forEach(

            section => {


                observer.observe(

                    section

                );

            }

        );

    },


    /* =====================================================
       DOWNLOAD TRACKING
    ===================================================== */

    trackDownloads() {


        document.addEventListener(

            "click",

            event => {


                const link =

                    event.target.closest(

                        "a"

                    );


                if (

                    !link

                )

                    return;


                const href =

                    link.getAttribute(

                        "href"

                    );


                if (

                    !href

                )

                    return;


                const lowerHref =

                    href.toLowerCase();


                const isDownload =

                    link.hasAttribute(

                        "download"

                    )

                    ||

                    lowerHref.endsWith(

                        ".pdf"

                    )

                    ||

                    lowerHref.endsWith(

                        ".vcf"

                    );


                if (

                    !isDownload

                )

                    return;


                this.track(

                    "download",

                    {

                        file:

                            href

                    }

                );

            }

        );

    },


    /* =====================================================
       CONTACT ACTIONS
    ===================================================== */

    trackContactActions() {


        document.addEventListener(

            "click",

            event => {


                const link =

                    event.target.closest(

                        "a"

                    );


                if (

                    !link

                )

                    return;


                const href =

                    link.getAttribute(

                        "href"

                    )

                    || "";


                if (

                    href.startsWith(

                        "mailto:"

                    )

                ) {


                    this.track(

                        "email_click",

                        {

                            destination:

                                href

                        }

                    );

                }


                if (

                    href.startsWith(

                        "tel:"

                    )

                ) {


                    this.track(

                        "phone_click",

                        {

                            destination:

                                href

                        }

                    );

                }


                if (

                    href.includes(

                        "wa.me"

                    )

                    ||

                    href.includes(

                        "whatsapp"

                    )

                ) {


                    this.track(

                        "whatsapp_click",

                        {

                            destination:

                                href

                        }

                    );

                }

            }

        );

    },


    /* =====================================================
       PROJECT INTERACTIONS
    ===================================================== */

    trackProjectInteractions() {


        document.addEventListener(

            "click",

            event => {


                const project =

                    event.target.closest(

                        ".project-card"

                    );


                if (

                    !project

                )

                    return;


                const title =

                    project.querySelector(

                        "h3"

                    );


                this.track(

                    "project_interaction",

                    {

                        project:

                            title

                                ? title.textContent.trim()

                                : "Unknown Project"

                    }

                );

            }

        );

    },


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    trackContactForm() {


        const forms =

            document.querySelectorAll(

                "[data-contact-form]"

            );


        forms.forEach(

            form => {


                form.addEventListener(

                    "submit",

                    () => {


                        this.track(

                            "contact_form_submit",

                            {

                                form:

                                    "main_contact_form"

                            }

                        );

                    }

                );

            }

        );

    },


    /* =====================================================
       JAVASCRIPT ERRORS
    ===================================================== */

    trackErrors() {


        window.addEventListener(

            "error",

            event => {


                this.track(

                    "javascript_error",

                    {

                        message:

                            event.message,


                        source:

                            event.filename,


                        line:

                            event.lineno

                    }

                );

            }

        );


        window.addEventListener(

            "unhandledrejection",

            event => {


                this.track(

                    "promise_error",

                    {

                        reason:

                            String(

                                event.reason

                            )

                    }

                );

            }

        );

    },


    /* =====================================================
       PERFORMANCE
    ===================================================== */

    trackPerformance() {


        window.addEventListener(

            "load",

            () => {


                setTimeout(

                    () => {


                        const navigation =

                            performance.getEntriesByType(

                                "navigation"

                            )[0];


                        if (

                            !navigation

                        )

                            return;


                        this.track(

                            "performance",

                            {

                                loadTime:

                                    Math.round(

                                        navigation.loadEventEnd

                                        -

                                        navigation.startTime

                                    ),


                                domInteractive:

                                    Math.round(

                                        navigation.domInteractive

                                        -

                                        navigation.startTime

                                    )

                            }

                        );

                    },

                    1000

                );

            }

        );

    },


    /* =====================================================
       LOCAL EVENT STORAGE
    ===================================================== */

    storeEvent(

        event

    ) {


        try {


            const stored =

                JSON.parse(

                    localStorage.getItem(

                        this.config.storageKey

                    )

                    ||

                    "[]"

                );


            stored.push(

                event

            );


            while (

                stored.length >

                this.config.maxStoredEvents

            ) {


                stored.shift();

            }


            localStorage.setItem(

                this.config.storageKey,

                JSON.stringify(

                    stored

                )

            );

        }

        catch (

            error

        ) {


            this.debug(

                "Analytics storage unavailable."

            );

        }

    },


    /* =====================================================
       DEBUG
    ===================================================== */

    debug(

        message

    ) {


        if (

            this.config.debug

        ) {


            console.log(

                "[NLS Analytics]",

                message

            );

        }

    }

};


document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.analytics.init();

    }

);
