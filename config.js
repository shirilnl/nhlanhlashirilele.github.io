"use strict";

/* ==========================================================
   V7 PORTFOLIO CONFIGURATION
   Version: 7.0.0
========================================================== */

const APP_CONFIG = Object.freeze({

    app: {

        name: "Professional Portfolio",

        version: "7.0.0",

        environment: "production",

        author: "Nhlanhla Lucky Shirilele",

        language: "en",

        timezone: "Africa/Johannesburg",

        copyrightYear: new Date().getFullYear()

    },

    profile: {

        firstName: "Nhlanhla",

        lastName: "Shirilele",

        fullName: "Nhlanhla Lucky Shirilele",

        initials: "NS",

        title: "Electrical Engineer",

        subtitle: "Telecommunications • Networks • Physical Security Systems",

        headline:
            "Building reliable engineering solutions with modern technologies.",

        location: {

            city: "Johannesburg",

            province: "Gauteng",

            country: "South Africa"

        }

    },

    contact: {

        phone: "",

        whatsapp: "",

        email: "",

        website: "",

        address: ""

    },

    social: {

        linkedin: "",

        github: "",

        facebook: "",

        instagram: "",

        twitter: "",

        youtube: ""

    },

    navigation: [

        {
            id: "home",
            label: "Home",
            icon: "fa-house"
        },

        {
            id: "about",
            label: "About",
            icon: "fa-user"
        },

        {
            id: "skills",
            label: "Skills",
            icon: "fa-code"
        },

        {
            id: "experience",
            label: "Experience",
            icon: "fa-briefcase"
        },

        {
            id: "projects",
            label: "Projects",
            icon: "fa-diagram-project"
        },

        {
            id: "certificates",
            label: "Certificates",
            icon: "fa-certificate"
        },

        {
            id: "gallery",
            label: "Gallery",
            icon: "fa-image"
        },

        {
            id: "contact",
            label: "Contact",
            icon: "fa-envelope"
        }

    ],

    hero: {

        typingSpeed: 70,

        deletingSpeed: 40,

        pause: 2000,

        greetings: [

            "Hello",

            "Welcome",

            "Hi There"

        ]

    },

    theme: {

        default: "light",

        storageKey: "portfolio-theme",

        allowSystemPreference: true

    },

    animation: {

        duration: 700,

        stagger: 120,

        easing: "ease",

        observerThreshold: 0.15

    },

    qr: {

        size: 240,

        margin: 2,

        colorDark: "#111827",

        colorLight: "#ffffff"

    },

    notifications: {

        duration: 4000,

        position: "top-right",

        maxVisible: 4

    },

    performance: {

        lazyImages: true,

        preloadFonts: true,

        cacheAssets: true,

        smoothScroll: true

    },

    features: {

        darkMode: true,

        aiAssistant: true,

        qrGenerator: true,

        analytics: true,

        gallery: true,

        certificates: true,

        downloads: true,

        contactForm: true,

        typingAnimation: true,

        backToTop: true

    }

});

/* ==========================================================
   GLOBAL CONSTANTS
========================================================== */

const STORAGE_KEYS = Object.freeze({

    THEME: "portfolio-theme",

    VISITS: "portfolio-visits",

    LAST_VISIT: "portfolio-last-visit",

    SETTINGS: "portfolio-settings"

});

const BREAKPOINTS = Object.freeze({

    mobile: 576,

    tablet: 768,

    laptop: 992,

    desktop: 1200,

    wide: 1400

});

/* ==========================================================
   SEO CONFIGURATION
========================================================== */

APP_CONFIG.seo = Object.freeze({

    title:
        "Nhlanhla Lucky Shirilele | Electrical Engineer",

    titleSeparator: "|",

    description:
        "Professional Electrical Engineer specialising in Telecommunications, Network Infrastructure and Physical Security Systems.",

    keywords: [

        "Electrical Engineer",

        "Telecommunications",

        "Networking",

        "Fiber",

        "Microwave",

        "Security Systems",

        "Portfolio",

        "South Africa"

    ],

    author:
        APP_CONFIG.profile.fullName,

    robots:
        "index, follow",

    canonical:
        "",

    locale:
        "en_ZA",

    image:
        "assets/images/profile.jpg",

    twitterCard:
        "summary_large_image",

    openGraph: {

        siteName:
            "Professional Portfolio",

        type:
            "website"

    }

});

/* ==========================================================
   PWA CONFIGURATION
========================================================== */

APP_CONFIG.pwa = Object.freeze({

    enabled: true,

    manifest: "manifest.json",

    serviceWorker: "service-worker.js",

    offlinePage: "offline.html",

    autoUpdate: true,

    cacheVersion: "v7",

    cacheName: "portfolio-cache-v7"

});

/* ==========================================================
   AI ASSISTANT
========================================================== */

APP_CONFIG.ai = Object.freeze({

    enabled: true,

    assistantName: "Portfolio AI",

    welcomeMessage:
        "Hello! How can I help you today?",

    placeholder:
        "Ask me anything...",

    typingDelay: 600,

    maxHistory: 50,

    allowMarkdown: true,

    autoScroll: true

});

/* ==========================================================
   ANALYTICS
========================================================== */

APP_CONFIG.analytics = Object.freeze({

    enabled: true,

    provider: "custom",

    trackPageViews: true,

    trackClicks: true,

    trackDownloads: true,

    trackQR: true,

    trackContact: true,

    debug: false

});

/* ==========================================================
   SECURITY
========================================================== */

APP_CONFIG.security = Object.freeze({

    sanitizeInput: true,

    escapeHTML: true,

    validateForms: true,

    csrfProtection: false,

    allowedImageTypes: [

        "jpg",

        "jpeg",

        "png",

        "webp",

        "svg"

    ],

    maxUploadSize:
        5 * 1024 * 1024

});

/* ==========================================================
   API
========================================================== */

APP_CONFIG.api = Object.freeze({

    baseURL: "",

    timeout: 15000,

    retryAttempts: 3,

    retryDelay: 1000,

    endpoints: {

        contact:
            "/api/contact",

        analytics:
            "/api/analytics",

        qr:
            "/api/qr"

    }

});

/* ==========================================================
   FEATURE FLAGS
========================================================== */

APP_CONFIG.flags = Object.freeze({

    ENABLE_DARK_MODE: true,

    ENABLE_QR: true,

    ENABLE_AI: true,

    ENABLE_ANALYTICS: true,

    ENABLE_PWA: true,

    ENABLE_CONTACT_FORM: true,

    ENABLE_DOWNLOADS: true,

    ENABLE_PROJECT_FILTERS: true,

    ENABLE_SCROLL_ANIMATIONS: true,

    ENABLE_LAZY_LOADING: true,

    ENABLE_PRELOADER: true,

    ENABLE_GALLERY: true,

    ENABLE_CERTIFICATES: true,

    ENABLE_NOTIFICATIONS: true,

    ENABLE_PRINT_MODE: true

});

/* ==========================================================
   DEFAULT APPLICATION STATE
========================================================== */

const DEFAULT_STATE = Object.freeze({

    theme: APP_CONFIG.theme.default,

    menuOpen: false,

    loading: true,

    currentSection: "home",

    activeFilter: "all",

    searchQuery: "",

    notifications: [],

    aiOpen: false,

    online: navigator.onLine

});

/* ==========================================================
   CACHE CONFIGURATION
========================================================== */

const CACHE_CONFIG = Object.freeze({

    version: "7.0.0",

    cacheName: "portfolio-v7-cache",

    assets: [

        "/",

        "/index.html",

        "/css/style.css",

        "/js/config.js",

        "/js/data.js",

        "/js/app.js",

        "/manifest.json",

        "/offline.html"

    ],

    images: [

        "assets/images/profile.jpg",

        "assets/images/hero.webp",

        "assets/images/logo.png"

    ],

    fonts: [

        "https://fonts.googleapis.com",

        "https://fonts.gstatic.com"

    ]

});

/* ==========================================================
   LOADER CONFIGURATION
========================================================== */

const LOADER = Object.freeze({

    minimumDisplayTime: 1200,

    fadeDuration: 500,

    enableProgressBar: true,

    enableSpinner: true

});

/* ==========================================================
   SCROLL CONFIGURATION
========================================================== */

const SCROLL = Object.freeze({

    smooth: true,

    offset: 90,

    revealDistance: 80,

    revealDelay: 150,

    backToTopOffset: 500

});

/* ==========================================================
   FORM CONFIGURATION
========================================================== */

const FORM = Object.freeze({

    validateEmail: true,

    validatePhone: true,

    trimInputs: true,

    autoComplete: true,

    resetAfterSubmit: true,

    maxMessageLength: 5000

});

/* ==========================================================
   PROJECT SETTINGS
========================================================== */

const PROJECTS = Object.freeze({

    cardsPerPage: 6,

    defaultFilter: "all",

    animationDuration: 400,

    enableFiltering: true,

    enableSearch: true,

    enableLazyImages: true

});

/* ==========================================================
   GALLERY SETTINGS
========================================================== */

const GALLERY = Object.freeze({

    columns: 3,

    spacing: 20,

    enableLightbox: true,

    keyboardNavigation: true,

    swipeSupport: true,

    preloadImages: true

});

/* ==========================================================
   QR CONFIGURATION
========================================================== */

const QR = Object.freeze({

    width: 240,

    height: 240,

    margin: 2,

    logoSize: 40,

    downloadFileName: "Portfolio-QR",

    format: "png"

});

/* ==========================================================
   CONTACT SETTINGS
========================================================== */

const CONTACT = Object.freeze({

    emailSubject:

        "Portfolio Contact",

    successMessage:

        "Message sent successfully.",

    errorMessage:

        "Unable to send message.",

    sendingMessage:

        "Sending message..."

});

/* ==========================================================
   SOCIAL SETTINGS
========================================================== */

const SOCIAL = Object.freeze({

    openInNewTab: true,

    rel: "noopener noreferrer",

    showIcons: true,

    iconSize: 22

});

/* ==========================================================
   ANIMATION SETTINGS
========================================================== */

const ANIMATION = Object.freeze({

    fadeDuration: 700,

    slideDuration: 600,

    zoomDuration: 500,

    staggerDelay: 120,

    hoverScale: 1.05,

    cardLift: 8

});

/* ==========================================================
   FILE DOWNLOADS
========================================================== */

const DOWNLOADS = Object.freeze({

    resume: "assets/documents/CV.pdf",

    portfolio: "assets/documents/Portfolio.pdf",

    certificates: "assets/documents/Certificates.pdf"

});

/* ==========================================================
   ICON CLASSES
========================================================== */

const ICONS = Object.freeze({

    phone: "fas fa-phone",

    email: "fas fa-envelope",

    whatsapp: "fab fa-whatsapp",

    linkedin: "fab fa-linkedin",

    github: "fab fa-github",

    location: "fas fa-location-dot",

    website: "fas fa-globe",

    download: "fas fa-download",

    certificate: "fas fa-award",

    project: "fas fa-code",

    ai: "fas fa-robot"

});

/* ==========================================================
   LOGGING
========================================================== */

const LOGGER = Object.freeze({

    enabled: true,

    level: "info",

    prefix: "[PORTFOLIO]",

    timestamps: true

});

/* ==========================================================
   DOM SELECTORS
========================================================== */

const DOM = Object.freeze({

    preloader: "#preloader",

    progressBar: "#progress-bar",

    backToTop: "#backToTop",

    header: ".header",

    navigation: ".navbar",

    menuButton: ".menu-btn",

    mobileOverlay: ".mobile-overlay",

    themeToggle: "#theme-toggle",

    hero: ".hero",

    heroTitle: "[data-title]",

    heroName: "[data-name]",

    heroHeadline: "[data-headline]",

    projectsGrid: "#projects-grid",

    certificatesGrid: "#certificates-grid",

    galleryGrid: ".gallery-grid",

    contactForm: "#contact-form",

    qrContainer: "#qrcode",

    aiAssistant: "#ai-assistant",

    aiPanel: ".ai-panel",

    aiMessages: ".ai-messages",

    aiInput: "#ai-input",

    notificationContainer: "#notification-container",

    footerYear: "#current-year"

});

/* ==========================================================
   REGULAR EXPRESSIONS
========================================================== */

const REGEX = Object.freeze({

    email:
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    phone:
        /^[+]?[\d\s()-]{8,20}$/,

    url:
        /^https?:\/\/.+$/i,

    whitespace:
        /\s+/g

});

/* ==========================================================
   APPLICATION EVENTS
========================================================== */

const EVENTS = Object.freeze({

    READY: "DOMContentLoaded",

    LOAD: "load",

    RESIZE: "resize",

    SCROLL: "scroll",

    CLICK: "click",

    INPUT: "input",

    SUBMIT: "submit",

    ONLINE: "online",

    OFFLINE: "offline",

    STORAGE: "storage"

});

/* ==========================================================
   ERROR MESSAGES
========================================================== */

const ERRORS = Object.freeze({

    missingElement:
        "Required DOM element was not found.",

    invalidConfiguration:
        "Configuration error detected.",

    invalidData:
        "Data source is invalid.",

    network:
        "Network connection unavailable.",

    form:
        "Please complete all required fields.",

    qr:
        "Unable to generate QR code.",

    ai:
        "AI assistant unavailable."

});

/* ==========================================================
   SUCCESS MESSAGES
========================================================== */

const SUCCESS = Object.freeze({

    loaded:
        "Portfolio loaded successfully.",

    themeSaved:
        "Theme preference saved.",

    formSent:
        "Message sent successfully.",

    qrDownloaded:
        "QR code downloaded.",

    settingsSaved:
        "Settings updated."

});

/* ==========================================================
   DEVELOPMENT UTILITIES
========================================================== */

const DEV = Object.freeze({

    debug: false,

    showPerformanceLogs: false,

    showConsoleBanner: true,

    banner() {

        if (!this.showConsoleBanner) return;

        console.log(
            `%c${APP_CONFIG.app.name} v${APP_CONFIG.app.version}`,
            "background:#2563eb;color:#fff;padding:6px 12px;border-radius:4px;font-weight:bold;"
        );

        console.log(
            `%cEnvironment: ${APP_CONFIG.app.environment}`,
            "color:#22c55e;font-weight:bold;"
        );

        console.log(
            `%cAuthor: ${APP_CONFIG.profile.fullName}`,
            "color:#06b6d4;"
        );

    }

});

/* ==========================================================
   FREEZE CONFIGURATION
========================================================== */

Object.freeze(CACHE_CONFIG);
Object.freeze(LOADER);
Object.freeze(SCROLL);
Object.freeze(FORM);
Object.freeze(PROJECTS);
Object.freeze(GALLERY);
Object.freeze(QR);
Object.freeze(CONTACT);
Object.freeze(SOCIAL);
Object.freeze(ANIMATION);
Object.freeze(DOWNLOADS);
Object.freeze(ICONS);
Object.freeze(LOGGER);
Object.freeze(DOM);
Object.freeze(REGEX);
Object.freeze(EVENTS);
Object.freeze(ERRORS);
Object.freeze(SUCCESS);

/* ==========================================================
   INITIALIZE CONFIGURATION
========================================================== */

if (DEV.showConsoleBanner) {
    DEV.banner();
}

console.info(
    `[${APP_CONFIG.app.name}] Configuration loaded successfully.`
);

/* ==========================================================
   END OF config.js
   Version: 7.0.0
========================================================== */
