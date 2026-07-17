/*=========================================================
  NLS Engineering Platform v4.0
  File: config.js
=========================================================*/

window.NLS = window.NLS || {};

window.NLS.config = {

    app: {
        name: "NLS Engineering Platform",
        version: "4.0.0",
        author: "Nhlanhla Lucky Shirilele",
        language: "en",
        theme: "light",
        animationSpeed: 400,
        typingSpeed: 70,
        offlineSupport: true,
        debug: false
    },

    profile: {
        firstName: "Nhlanhla",
        middleName: "Lucky",
        lastName: "Shirilele",
        fullName: "Nhlanhla Lucky Shirilele",

        title: "Electrical & Electronic Engineer",

        headline:
            "Electrical & Electronic Engineer specializing in Telecommunications, Fibre Networks, Network Infrastructure, Physical Security Systems and Digital Engineering.",

        bio:
            "Passionate Electrical & Electronic Engineer with experience in telecommunications infrastructure, microwave systems, fibre technologies, surveillance systems, transport analysis, access integration and network infrastructure.",

        location: "Gauteng, South Africa",

        availability: "Available for Opportunities",

        profileImage: "images/profile.jpg",

        heroImage: "images/hero-bg.jpg",

        logo: "images/logo.png",

        aboutImage: "images/about.jpg"
    },

/* =====================================================
   NLS PORTFOLIO CONFIGURATION
   Milestone 3 — Contact System
===================================================== */


const PORTFOLIO_CONFIG = {


    /* ==========================
       PERSONAL INFORMATION
    =========================== */


    name:
    "Nhlanhla Lucky Shirilele",



    title:
    "Electrical & Electronic Engineer",



    description:
    "Electrical & Electronic Engineer specializing in Telecommunications, Fibre Networks, Network Infrastructure, Physical Security Systems and Digital Engineering.",




    /* ==========================
       CONTACT INFORMATION
    =========================== */


    phone:
    "+27710059058",



    whatsapp:
    "27710059058",



    email:
    "shirilelenl94@gmail.com",




    /* ==========================
       SOCIAL MEDIA
    =========================== */


    linkedin:
    "https://www.linkedin.com/in/nhlanhla-lucky-shirilele-424560ba",



    facebook:
    "https://facebook.com/nhlanhlalucky.shirilele",




    /* ==========================
       WEBSITE
    =========================== */


    website:
    "https://shirilnl.github.io/nhlanhlashirilele.github.io/",




    /* ==========================
       LOCATION
    =========================== */


    location:
    "Gauteng, South Africa"

};





/* Make available globally */

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;

    downloads: {

        cv: "documents/CV.pdf",

        portfolio: "documents/Portfolio.pdf",

        transcript: "documents/Transcript.pdf",

        degree: "documents/Degree.pdf",

        vcard: "vcard.vcf"
    },

    qr: {

        enabled: true,

        logo: "images/logo.png",

        defaultType: "portfolio",

        portfolioURL:
        "https://shirilnl.github.io/nhlanhlashirilele.github.io/",

        vCardFile: "vcard.vcf"
    },

    social: {

        linkedin: true,

        facebook: true,

        whatsapp: true,

        phone: true,

        email: true,

        github: false
    },

    statistics: {

        technicalSkills: 15,

        technologies: 8,

        commitment: 100,

        availability: 24
    },

    features: {

        darkMode: true,

        typingEffect: true,

        counters: true,

        animations: true,

        qrGenerator: true,

        downloads: true,

        pwa: true,

        aiAssistant: false,

        adminPanel: false
    }

};
