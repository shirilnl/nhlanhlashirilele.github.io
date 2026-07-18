/* =========================================================
   NLS ENGINEERING PORTFOLIO
   config.js
   Production Configuration
========================================================= */

"use strict";


window.NLS = window.NLS || {};


NLS.config = {


    /* =====================================================
       SITE INFORMATION
    ===================================================== */

    site: {

        name:

            "Nhlanhla Lucky Shirilele",

        title:

            "Electrical Engineering Professional",

        description:

            "Electrical Engineering professional specialising in telecommunications networks, infrastructure, surveillance and physical security systems.",

        url:

            window.location.origin,

        language:

            "en-ZA",

        author:

            "Nhlanhla Lucky Shirilele"

    },


    /* =====================================================
       CONTACT INFORMATION
    ===================================================== */

    contact: {

        email:

            "",

        phone:

            "",

        whatsapp:

            "",

        linkedin:

            ""

    },


    /* =====================================================
       APPLICATION SETTINGS
    ===================================================== */

    app: {

        name:

            "NLS Engineering Portfolio",

        version:

            "5.0.0",

        environment:

            "production"

    },


    /* =====================================================
       FEATURE FLAGS
    ===================================================== */

    features: {

        aiAssistant:

            true,

        analytics:

            true,

        qrCode:

            true,

        adminDashboard:

            true,

        offlineMode:

            true,

        contactForm:

            true

    },


    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    storage: {

        portfolio:

            "nls-portfolio-admin-data",

        analytics:

            "nls-portfolio-analytics",

        errors:

            "nls-production-errors",

        theme:

            "nls-theme"

    }

};
