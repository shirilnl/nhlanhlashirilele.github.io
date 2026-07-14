"use strict";

/*==========================================================
 NLS ENGINEERING PORTFOLIO
 Configuration File
 Version : 3.0.0
 Author  : Nhlanhla Lucky Shirilele

 This file contains ALL configurable values for the website.
 DO NOT place business logic in this file.
==========================================================*/

window.NLS = window.NLS || {};

/*==========================================================
 WEBSITE
==========================================================*/

window.NLS.config = {

    website: {

        name: "NLS Engineering Portfolio",

        shortName: "NLS Portfolio",

        version: "3.0.0",

        author: "Nhlanhla Lucky Shirilele",

        language: "en",

        timezone: "Africa/Johannesburg",

        description:
            "Professional portfolio of Electrical & Electronic Engineer Nhlanhla Lucky Shirilele.",

        copyright:
            "© 2026 Nhlanhla Lucky Shirilele",

        lastUpdated:
            "2026-07-14"

    },

/*==========================================================
 PROFILE
==========================================================*/

    profile: {

        firstName: "Nhlanhla",

        middleName: "Lucky",

        lastName: "Shirilele",

        fullName:
            "Nhlanhla Lucky Shirilele",

        initials:
            "NLS",

        title:
            "Electrical & Electronic Engineer",

        subtitle:
            "Telecommunications • Fibre Networks • Network Infrastructure • Physical Security",

        heroDescription:

            "Electrical & Electronic Engineer specializing in telecommunications, fibre infrastructure, surveillance systems, access integration, transport analysis and digital engineering.",

        availability:
            "Available for Opportunities",

        status:
            "Open to Work"

    },

/*==========================================================
 CONTACT
==========================================================*/

    contact: {

        phone:
            "+27710059058",

        whatsapp:
            "27710059058",

        email:
            "shirilelenl94@gmail.com",

        website:
            "https://shirilnl.github.io/nhlanhlashirilele.github.io/",

        address:
            "Gauteng",

        city:
            "Johannesburg",

        country:
            "South Africa"

    },

/*==========================================================
 SOCIAL
==========================================================*/

    social: {

        linkedin:
            "https://www.linkedin.com/in/nhlanhla-lucky-shirilele-424560ba",

        facebook:
            "https://facebook.com/nhlanhlalucky.shirilele",

        github:
            "",

        instagram:
            "",

        youtube:
            "",

        x:
            ""

    },

/*==========================================================
 IMAGES
==========================================================*/

    images: {

        logo:
            "images/logo.png",

        favicon:
            "favicon.png",

        profile:
            "images/profile.jpg",

        hero:
            "images/hero-bg.jpg",

        about:
            "images/about.jpg",

        qrLogo:
            "images/logo.png",

        defaultProject:
            "images/project-placeholder.jpg"

    },

/*==========================================================
 DOCUMENTS
==========================================================*/

    files: {

        cv:
            "documents/CV.pdf",

        vcard:
            "downloads/vcard.vcf"

    },

/*==========================================================
 THEME
==========================================================*/

    theme: {

        defaultTheme:
            "dark",

        allowThemeSwitch:
            true,

        primaryColor:
            "#0A84FF",

        secondaryColor:
            "#121212",

        accentColor:
            "#16C60C",

        borderRadius:
            "14px"

    },

/*==========================================================
 QR CODE
==========================================================*/

    qr: {

        size: 260,

        margin: 2,

        background:
            "#FFFFFF",

        foreground:
            "#000000",

        includeLogo:
            true,

        logo:
            "images/logo.png",

        downloadName:
            "NLS-Engineering-QR"

    },

/*==========================================================
 DOWNLOADS
==========================================================*/

    downloads: {

        enableCV: true,

        enableVCard: true,

        enableCertificates: true,

        enablePortfolioPDF: false

    },

/*==========================================================
 SEO
==========================================================*/

    seo: {

        title:
            "Nhlanhla Lucky Shirilele",

        keywords: [

            "Electrical Engineer",

            "Electronic Engineer",

            "Telecommunications",

            "Fibre",

            "Network Infrastructure",

            "Physical Security",

            "Portfolio"

        ]

    },

/*==========================================================
 AI (Future)
==========================================================*/

    ai: {

        enabled: false,

        assistantName:
            "Lucky AI",

        version:
            "1.0",

        welcome:

            "Hello! I'm Lucky AI. How can I help you today?"

    },

/*==========================================================
 ADMIN (Future)
==========================================================*/

    admin: {

        enabled: false,

        route:
            "/admin",

        version:
            "1.0"

    },

/*==========================================================
 PWA
==========================================================*/

    pwa: {

        offline:
            true,

        installable:
            true

    }

};

/*==========================================================
 END OF CONFIG
==========================================================*/

Object.freeze(window.NLS.config);
