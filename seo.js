/* =========================================================
   NLS ENGINEERING PORTFOLIO
   seo.js
   Production SEO Management
========================================================= */

"use strict";


window.NLS = window.NLS || {};


NLS.seo = {


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.updateCanonicalUrl();


        this.updateStructuredData();


        this.updateDocumentLanguage();


        console.log(

            "NLS SEO System initialized successfully."

        );

    },


    /* =====================================================
       CANONICAL URL
    ===================================================== */

    updateCanonicalUrl() {


        const canonical =

            document.querySelector(

                'link[rel="canonical"]'

            );


        if (

            !canonical

        )

            return;


        const currentUrl =

            window.location.origin +

            window.location.pathname;


        canonical.href =

            currentUrl;

    },


    /* =====================================================
       UPDATE STRUCTURED DATA
    ===================================================== */

    updateStructuredData() {


        const structuredData =

            document.querySelector(

                'script[type="application/ld+json"]'

            );


        if (

            !structuredData

        )

            return;


        try {


            const data =

                JSON.parse(

                    structuredData.textContent

                );


            data.url =

                window.location.origin +

                window.location.pathname;


            structuredData.textContent =

                JSON.stringify(

                    data

                );

        }

        catch (

            error

        ) {


            console.error(

                "SEO structured data error:",

                error

            );

        }

    },


    /* =====================================================
       DOCUMENT LANGUAGE
    ===================================================== */

    updateDocumentLanguage() {


        document.documentElement.lang =

            "en-ZA";

    }

};


document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.seo.init();

    }

);
