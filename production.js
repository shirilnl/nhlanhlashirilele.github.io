/* =========================================================
   NLS ENGINEERING PORTFOLIO
   production.js
   Production Error Handling & Application Monitoring
========================================================= */

"use strict";


/* =========================================================
   GLOBAL NAMESPACE
========================================================= */

window.NLS = window.NLS || {};


NLS.production = {


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.setupGlobalErrorHandler();


        this.setupUnhandledRejectionHandler();


        this.validateConfiguration();


        this.cleanupOldErrors();


        console.log(

            "NLS Production System initialized successfully."

        );

    },


    /* =====================================================
       GLOBAL JAVASCRIPT ERROR HANDLER
    ===================================================== */

    setupGlobalErrorHandler() {


        window.addEventListener(

            "error",

            event => {


                this.logError({

                    type:

                        "javascript",

                    message:

                        event.message ||

                        "Unknown JavaScript error.",

                    file:

                        event.filename ||

                        "",

                    line:

                        event.lineno ||

                        0,

                    column:

                        event.colno ||

                        0

                });

            }

        );

    },


    /* =====================================================
       UNHANDLED PROMISE REJECTION
    ===================================================== */

    setupUnhandledRejectionHandler() {


        window.addEventListener(

            "unhandledrejection",

            event => {


                let message =

                    "Unhandled promise rejection.";


                if (

                    event.reason

                ) {


                    if (

                        event.reason.message

                    ) {


                        message =

                            event.reason.message;

                    }

                    else {


                        message =

                            String(

                                event.reason

                            );

                    }

                }


                this.logError({

                    type:

                        "promise",

                    message

                });

            }

        );

    },


    /* =====================================================
       LOG ERROR
    ===================================================== */

    logError(

        error

    ) {


        try {


            const storageKey =

                NLS.config

                    ?.storage

                    ?.errors ||

                "nls-production-errors";


            const storedErrors =

                localStorage.getItem(

                    storageKey

                );


            let errors = [];


            if (

                storedErrors

            ) {


                errors =

                    JSON.parse(

                        storedErrors

                    );

            }


            errors.push({

                ...error,

                timestamp:

                    new Date()

                        .toISOString(),

                page:

                    window.location.href,

                userAgent:

                    navigator.userAgent

            });


            errors =

                errors.slice(

                    -50

                );


            localStorage.setItem(

                storageKey,

                JSON.stringify(

                    errors

                )

            );

        }

        catch (

            storageError

        ) {


            console.error(

                "Unable to save production error:",

                storageError

            );

        }


        console.error(

            "NLS Production Error:",

            error

        );

    },


    /* =====================================================
       CONFIGURATION VALIDATION
    ===================================================== */

    validateConfiguration() {


        if (

            !window.NLS.config

        ) {


            console.error(

                "NLS.config is missing."

            );


            return false;

        }


        if (

            !NLS.config.site

        ) {


            console.warn(

                "NLS.config.site is missing."

            );

        }


        if (

            !NLS.config.features

        ) {


            console.warn(

                "NLS.config.features is missing."

            );

        }


        return true;

    },


    /* =====================================================
       CLEAN OLD ERRORS
    ===================================================== */

    cleanupOldErrors() {


        try {


            const storageKey =

                NLS.config

                    ?.storage

                    ?.errors ||

                "nls-production-errors";


            const storedErrors =

                localStorage.getItem(

                    storageKey

                );


            if (

                !storedErrors

            )

                return;


            const errors =

                JSON.parse(

                    storedErrors

                );


            const thirtyDaysAgo =

                Date.now() -

                (

                    30 *

                    24 *

                    60 *

                    60 *

                    1000

                );


            const recentErrors =

                errors.filter(

                    error => {


                        return (

                            new Date(

                                error.timestamp

                            )

                            .getTime() >=

                            thirtyDaysAgo

                        );

                    }

                );


            localStorage.setItem(

                storageKey,

                JSON.stringify(

                    recentErrors

                )

            );

        }

        catch (

            error

        ) {


            console.error(

                "Unable to clean production errors:",

                error

            );

        }

    },


    /* =====================================================
       GET ERROR LOG
    ===================================================== */

    getErrors() {


        try {


            const storageKey =

                NLS.config

                    ?.storage

                    ?.errors ||

                "nls-production-errors";


            return JSON.parse(

                localStorage.getItem(

                    storageKey

                ) ||

                "[]"

            );

        }

        catch (

            error

        ) {


            console.error(

                error

            );


            return [];

        }

    },


    /* =====================================================
       CLEAR ERROR LOG
    ===================================================== */

    clearErrors() {


        const storageKey =

            NLS.config

                ?.storage

                ?.errors ||

            "nls-production-errors";


        localStorage.removeItem(

            storageKey

        );

    }

};


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.production.init();

    }

);
