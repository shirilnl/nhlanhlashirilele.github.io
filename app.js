"use strict";

/* ==========================================================
   V7 PORTFOLIO
   app.js
   PART 1/6
   APPLICATION BOOTSTRAP
========================================================== */

const PortfolioApp = {

    initialized: false,

    state: {

        loading: true,

        theme: APP_CONFIG.theme.default,

        currentSection: "home",

        menuOpen: false,

        online: navigator.onLine

    },

    elements: {},

    /*==========================================================
        INITIALIZE
    ==========================================================*/

    async init() {

        if (this.initialized) return;

        console.info("Initializing Portfolio...");

        this.cacheDOM();

        this.initializeTheme();

        this.initializeLoader();

        this.initializeNavigation();

        this.initializeScroll();

        this.initializeHero();

        this.initializeAnimations();

        this.initializeEvents();

        this.initializeFooter();

        this.initializeConnectionMonitor();

        this.initialized = true;

        this.state.loading = false;

        console.info("Portfolio Ready.");

    },

    /*==========================================================
        CACHE DOM
    ==========================================================*/

    cacheDOM() {

        this.elements = {

            body:
                document.body,

            header:
                document.querySelector(DOM.header),

            navigation:
                document.querySelector(DOM.navigation),

            menuButton:
                document.querySelector(DOM.menuButton),

            mobileOverlay:
                document.querySelector(DOM.mobileOverlay),

            themeToggle:
                document.querySelector(DOM.themeToggle),

            progressBar:
                document.querySelector(DOM.progressBar),

            preloader:
                document.querySelector(DOM.preloader),

            backToTop:
                document.querySelector(DOM.backToTop),

            hero:
                document.querySelector(DOM.hero),

            footerYear:
                document.querySelector(DOM.footerYear)

        };

    },

    /*==========================================================
        LOADER
    ==========================================================*/

    initializeLoader() {

        if (!this.elements.preloader) return;

        window.addEventListener("load", () => {

            setTimeout(() => {

                this.elements.preloader.classList.add("hide");

                setTimeout(() => {

                    this.elements.preloader.remove();

                }, 500);

            }, LOADER.minimumDisplayTime);

        });

    },

    /*==========================================================
        THEME
    ==========================================================*/

    initializeTheme() {

        const savedTheme = localStorage.getItem(

            STORAGE_KEYS.THEME

        );

        const theme =

            savedTheme ||

            APP_CONFIG.theme.default;

        document.documentElement.setAttribute(

            "data-theme",

            theme

        );

        this.state.theme = theme;

    },

    toggleTheme() {

        const nextTheme =

            this.state.theme === "light"

                ? "dark"

                : "light";

        this.state.theme = nextTheme;

        document.documentElement.setAttribute(

            "data-theme",

            nextTheme

        );

        localStorage.setItem(

            STORAGE_KEYS.THEME,

            nextTheme

        );

    },

    /*==========================================================
        FOOTER
    ==========================================================*/

    initializeFooter() {

        if (!this.elements.footerYear) return;

        this.elements.footerYear.textContent =

            new Date().getFullYear();

    }

};

/* ==========================================================
   APPLICATION STARTUP
========================================================== */

/* ==========================================================
   V7 PORTFOLIO
   app.js
   PART 2/6
   NAVIGATION • SCROLL • EVENTS
========================================================== */

PortfolioApp.initializeNavigation = function () {

    const {
        menuButton,
        navigation,
        mobileOverlay,
        themeToggle
    } = this.elements;

    /* Mobile Menu */

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            this.toggleMobileMenu();

        });

    }

    if (mobileOverlay) {

        mobileOverlay.addEventListener("click", () => {

            this.closeMobileMenu();

        });

    }

    /* Navigation Links */

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", e => {

            const href = link.getAttribute("href");

            if (!href || !href.startsWith("#")) return;

            e.preventDefault();

            this.scrollToSection(href.substring(1));

            this.closeMobileMenu();

        });

    });

    /* Theme */

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            this.toggleTheme();

        });

    };

};

/* ==========================================================
   MOBILE MENU
========================================================== */

PortfolioApp.toggleMobileMenu = function () {

    this.state.menuOpen = !this.state.menuOpen;

    this.elements.navigation?.classList.toggle(

        "active",

        this.state.menuOpen

    );

    this.elements.mobileOverlay?.classList.toggle(

        "active",

        this.state.menuOpen

    );

};

PortfolioApp.closeMobileMenu = function () {

    this.state.menuOpen = false;

    this.elements.navigation?.classList.remove("active");

    this.elements.mobileOverlay?.classList.remove("active");

};

/* ==========================================================
   SCROLL
========================================================== */

PortfolioApp.initializeScroll = function () {

    window.addEventListener(

        EVENTS.SCROLL,

        () => {

            this.updateProgressBar();

            this.updateHeader();

            this.updateBackToTop();

            this.updateActiveNavigation();

        }

    );

};

/* ==========================================================
   HEADER
========================================================== */

PortfolioApp.updateHeader = function () {

    if (!this.elements.header) return;

    if (window.scrollY > 20) {

        this.elements.header.classList.add(

            "scrolled"

        );

    } else {

        this.elements.header.classList.remove(

            "scrolled"

        );

    }

};

/* ==========================================================
   PROGRESS BAR
========================================================== */

PortfolioApp.updateProgressBar = function () {

    if (!this.elements.progressBar) return;

    const scrollTop = window.scrollY;

    const pageHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (scrollTop / pageHeight) * 100;

    this.elements.progressBar.style.width =

        `${progress}%`;

};

/* ==========================================================
   BACK TO TOP
========================================================== */

PortfolioApp.updateBackToTop = function () {

    const button = this.elements.backToTop;

    if (!button) return;

    if (

        window.scrollY >

        SCROLL.backToTopOffset

    ) {

        button.classList.add("show");

    } else {

        button.classList.remove("show");

    }

};

PortfolioApp.scrollToTop = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================================================
   SCROLL TO SECTION
========================================================== */

PortfolioApp.scrollToSection = function (id) {

    const section = document.getElementById(id);

    if (!section) return;

    window.scrollTo({

        top:

            section.offsetTop -

            SCROLL.offset,

        behavior: "smooth"

    });

};

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

PortfolioApp.updateActiveNavigation = function () {

    const sections = document.querySelectorAll("section[id]");

    const links = document.querySelectorAll(

        ".navbar a"

    );

    let current = "";

    sections.forEach(section => {

        if (

            window.scrollY >=

            section.offsetTop -

            140

        ) {

            current = section.id;

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===

            `#${current}`

        ) {

            link.classList.add("active");

        }

    });

};

/* ==========================================================
   GLOBAL EVENTS
========================================================== */

PortfolioApp.initializeEvents = function () {

    this.elements.backToTop?.addEventListener(

        "click",

        () => this.scrollToTop()

    );

    window.addEventListener(

        EVENTS.RESIZE,

        () => {

            if (

                window.innerWidth >

                BREAKPOINTS.laptop

            ) {

                this.closeMobileMenu();

            }

        }

    );

};
/* ==========================================================
   V7 PORTFOLIO
   app.js
   PART 3/6
   DYNAMIC CONTENT RENDERING
========================================================== */

PortfolioApp.initializeHero = function () {

    this.renderProfile();

    this.initializeTypingEffect();

};

/* ==========================================================
   RENDER PROFILE
========================================================== */

PortfolioApp.renderProfile = function () {

    const profile = PORTFOLIO_DATA.profile;

    document.querySelectorAll("[data-name]").forEach(el => {

        el.textContent = profile.fullName;

    });

    document.querySelectorAll("[data-title]").forEach(el => {

        el.textContent = profile.title;

    });

    document.querySelectorAll("[data-headline]").forEach(el => {

        el.textContent = profile.headline;

    });

    document.querySelectorAll("[data-location]").forEach(el => {

        el.textContent =
            `${profile.location.city}, ${profile.location.country}`;

    });

    document.querySelectorAll("[data-profile-image]").forEach(img => {

        img.src = profile.profileImage;

        img.alt = profile.fullName;

    });

};

/* ==========================================================
   SERVICES
========================================================== */

PortfolioApp.renderServices = function () {

    const container = document.getElementById("services-grid");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.services.map(service => `

        <article class="service-card">

            <div class="service-icon">

                <i class="fas ${service.icon}"></i>

            </div>

            <h3>${service.title}</h3>

            <p>${service.description}</p>

        </article>

    `).join("");

};

/* ==========================================================
   SKILLS
========================================================== */

PortfolioApp.renderSkills = function () {

    const container = document.getElementById("skills-grid");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.skills.map(skill => `

        <article class="skill-card">

            <div class="skill-icon">

                <i class="fas ${skill.icon}"></i>

            </div>

            <h3>${skill.category}</h3>

            <div class="skill-tags">

                ${skill.items.map(item =>

                    `<span>${item}</span>`

                ).join("")}

            </div>

        </article>

    `).join("");

};

/* ==========================================================
   TECHNOLOGIES
========================================================== */

PortfolioApp.renderTechnologies = function () {

    const container = document.getElementById("technology-grid");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.technologies.map(tech => `

        <article class="technology-card">

            <i class="${tech.icon}"></i>

            <h4>${tech.name}</h4>

            <progress

                value="${tech.level}"

                max="100">

            </progress>

            <small>${tech.level}%</small>

        </article>

    `).join("");

};

/* ==========================================================
   EXPERIENCE
========================================================== */

PortfolioApp.renderExperience = function () {

    const container = document.getElementById("experience-timeline");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.experience.map(job => `

        <article class="timeline-item">

            <div class="timeline-marker">

                <i class="fas fa-briefcase"></i>

            </div>

            <div class="timeline-content">

                <span class="timeline-date">

                    ${job.period}

                </span>

                <h3>${job.position}</h3>

                <h4>${job.company}</h4>

                <ul>

                    ${job.responsibilities.map(task =>

                        `<li>${task}</li>`

                    ).join("")}

                </ul>

            </div>

        </article>

    `).join("");

};

/* ==========================================================
   INITIAL RENDER
========================================================== */

/* ==========================================================
   V7 PORTFOLIO
   app.js
   PART 4/6
   PROJECTS • CERTIFICATES • GALLERY • DOWNLOADS
========================================================== */

/* ==========================================================
   PROJECTS
========================================================== */

PortfolioApp.renderProjects = function () {

    const container = document.getElementById("projects-grid");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.projects.map(project => `

        <article class="project-card" data-category="${project.category}">

            <div class="project-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy">

                <div class="project-overlay">

                    <a
                        href="${project.demo || '#'}"
                        class="project-link"
                        target="_blank"
                        rel="noopener">

                        <i class="fas fa-arrow-up-right-from-square"></i>

                    </a>

                </div>

            </div>

            <div class="project-content">

                <span class="project-category">

                    ${project.category}

                </span>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-technologies">

                    ${project.technologies.map(tech =>

                        `<span>${tech}</span>`

                    ).join("")}

                </div>

            </div>

        </article>

    `).join("");

};

/* ==========================================================
   CERTIFICATES
========================================================== */

PortfolioApp.renderCertificates = function () {

    const container = document.getElementById("certificates-grid");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `

        <article class="certificate-card">

            <div class="certificate-icon">

                <i class="${cert.icon}"></i>

            </div>

            <div class="certificate-content">

                <h3>${cert.name}</h3>

                <p>${cert.issuer}</p>

                <small>${cert.year || ""}</small>

            </div>

        </article>

    `).join("");

};

/* ==========================================================
   GALLERY
========================================================== */

PortfolioApp.renderGallery = function () {

    const container = document.getElementById("gallery-grid");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.gallery.map(item => `

        <figure class="gallery-item">

            <img

                src="${item.image}"

                alt="${item.title}"

                loading="lazy">

            <figcaption>

                ${item.title}

            </figcaption>

        </figure>

    `).join("");

};

/* ==========================================================
   DOWNLOADS
========================================================== */

PortfolioApp.renderDownloads = function () {

    const container = document.getElementById("downloads-grid");

    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.downloads.map(file => `

        <article class="download-card">

            <div class="download-icon">

                <i class="${file.icon}"></i>

            </div>

            <div class="download-content">

                <h3>${file.title}</h3>

                <p>${file.description}</p>

            </div>

            <a

                href="${file.file}"

                class="download-action"

                download>

                <i class="fas fa-download"></i>

            </a>

        </article>

    `).join("");

};

/* ==========================================================
   RENDER EVERYTHING
========================================================== */

PortfolioApp.renderContent = function () {

    this.renderProfile();

    this.renderServices();

    this.renderSkills();

    this.renderTechnologies();

    this.renderExperience();

    this.renderProjects();

    this.renderCertificates();

    this.renderGallery();

    this.renderDownloads();

};

/* ==========================================================
   FILTER PROJECTS
========================================================== */

PortfolioApp.filterProjects = function (category = "all") {

    document.querySelectorAll(".project-card").forEach(card => {

        const cardCategory = card.dataset.category;

        const visible =

            category === "all" ||

            cardCategory === category;

        card.style.display = visible ? "" : "none";

    });

};

document.querySelectorAll(".project-filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".project-filter")

            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        PortfolioApp.filterProjects(

            button.dataset.filter

        );

    });

});

/* ==========================================================
   V7 PORTFOLIO
   app.js
   PART 5/6
   CONTACT • QR • AI • NOTIFICATIONS • ANIMATIONS
========================================================== */

/* ==========================================================
   CONTACT FORM
========================================================== */

PortfolioApp.initializeContactForm = function () {

    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", e => {

        e.preventDefault();

        const data = Object.fromEntries(

            new FormData(form).entries()

        );

        if (!this.validateContactForm(data)) {

            this.showNotification(

                ERRORS.form,

                "error"

            );

            return;

        }

        console.table(data);

        this.showNotification(

            SUCCESS.formSent,

            "success"

        );

        form.reset();

    });

};

PortfolioApp.validateContactForm = function (data) {

    return (

        REGEX.email.test(data.email) &&

        data.name.trim().length > 1 &&

        data.message.trim().length > 10

    );

};

/* ==========================================================
   QR CODE
========================================================== */

PortfolioApp.initializeQRCode = function () {

    const container = document.getElementById("qrcode");

    if (!container) return;

    if (typeof QRCode === "undefined") return;

    container.innerHTML = "";

    new QRCode(container, {

        text:

            APP_CONFIG.contact.website ||

            window.location.href,

        width: QR.width,

        height: QR.height,

        colorDark: APP_CONFIG.qr.colorDark,

        colorLight: APP_CONFIG.qr.colorLight,

        correctLevel: QRCode.CorrectLevel.H

    });

};

/* ==========================================================
   AI ASSISTANT
========================================================== */

PortfolioApp.initializeAI = function () {

    const input = document.getElementById("ai-input");

    const form = document.querySelector(".ai-form");

    const messages = document.querySelector(".ai-messages");

    if (!form || !input || !messages) return;

    form.addEventListener("submit", e => {

        e.preventDefault();

        const text = input.value.trim();

        if (!text) return;

        this.addAIMessage(text, "user");

        setTimeout(() => {

            this.addAIMessage(

                APP_CONFIG.ai.welcomeMessage,

                "assistant"

            );

        }, APP_CONFIG.ai.typingDelay);

        input.value = "";

    });

};

PortfolioApp.addAIMessage = function (text, sender) {

    const container = document.querySelector(".ai-messages");

    if (!container) return;

    const message = document.createElement("div");

    message.className = `ai-message ${sender}`;

    message.textContent = text;

    container.appendChild(message);

    container.scrollTop = container.scrollHeight;

};

/* ==========================================================
   NOTIFICATIONS
========================================================== */

PortfolioApp.showNotification = function (

    message,

    type = "info"

) {

    const container = document.querySelector(

        DOM.notificationContainer

    );

    if (!container) return;

    const notification = document.createElement("div");

    notification.className =

        `notification ${type}`;

    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {

        notification.remove();

    }, APP_CONFIG.notifications.duration);

};

/* ==========================================================
   SCROLL REVEAL
========================================================== */

PortfolioApp.initializeAnimations = function () {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(

                        "is-visible"

                    );

                }

            });

        },

        {

            threshold:

                APP_CONFIG.animation.observerThreshold

        }

    );

    document.querySelectorAll(

        ".fade-left, .fade-right, .zoom"

    ).forEach(element => {

        observer.observe(element);

    });

};

/* ==========================================================
   CONNECTION STATUS
========================================================== */

PortfolioApp.initializeConnectionMonitor = function () {

    window.addEventListener(EVENTS.ONLINE, () => {

        this.state.online = true;

        this.showNotification(

            "Connection restored.",

            "success"

        );

    });

    window.addEventListener(EVENTS.OFFLINE, () => {

        this.state.online = false;

        this.showNotification(

            "You are offline.",

            "warning"

        );

    });

};

/* ==========================================================
   V7 PORTFOLIO
   app.js
   PART 6/6
   FINAL INITIALIZATION • UTILITIES • PRODUCTION
========================================================== */

/* ==========================================================
   TYPING EFFECT
========================================================== */

PortfolioApp.initializeTypingEffect = function () {

    const element = document.querySelector(".typing-text");

    if (!element) return;

    const words = APP_CONFIG.hero.greetings;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {

        const word = words[wordIndex];

        if (!deleting) {

            element.textContent = word.substring(0, charIndex++);

            if (charIndex > word.length) {

                deleting = true;

                setTimeout(type, APP_CONFIG.hero.pause);

                return;

            }

        } else {

            element.textContent = word.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(

            type,

            deleting

                ? APP_CONFIG.hero.deletingSpeed

                : APP_CONFIG.hero.typingSpeed

        );

    };

    type();

};

/* ==========================================================
   UTILITIES
========================================================== */

PortfolioApp.refresh = function () {

    this.renderContent();

    this.updateHeader();

    this.updateProgressBar();

    this.updateBackToTop();

};

PortfolioApp.destroy = function () {

    console.info("Destroying Portfolio...");

    this.initialized = false;

};

PortfolioApp.reload = function () {

    location.reload();

};

PortfolioApp.getVersion = function () {

    return APP_CONFIG.app.version;

};

PortfolioApp.isOnline = function () {

    return navigator.onLine;

};

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

PortfolioApp.initializeKeyboardShortcuts = function () {

    document.addEventListener("keydown", event => {

        /* Ctrl + D → Toggle Theme */

        if (event.ctrlKey && event.key.toLowerCase() === "d") {

            event.preventDefault();

            this.toggleTheme();

        }

        /* Escape → Close Mobile Menu */

        if (event.key === "Escape") {

            this.closeMobileMenu();

        }

        /* Home → Scroll Top */

        if (event.key === "Home") {

            this.scrollToTop();

        }

    });

};

/* ==========================================================
   PERFORMANCE
========================================================== */

PortfolioApp.initializePerformance = function () {

    if ("requestIdleCallback" in window) {

        requestIdleCallback(() => {

            console.info("Idle tasks completed.");

        });

    }

};

/* ==========================================================
   COMPLETE STARTUP
========================================================== */

PortfolioApp.start = function () {

    this.renderContent();

    this.initializeContactForm();

    this.initializeQRCode();

    this.initializeAI();

    this.initializeKeyboardShortcuts();

    this.initializePerformance();

    this.refresh();

    console.info(

        `${APP_CONFIG.app.name} v${APP_CONFIG.app.version} started.`

    );

};

/* ==========================================================
   APPLICATION BOOTSTRAP
========================================================== */

document.addEventListener(EVENTS.READY, async () => {

    try {

        await PortfolioApp.init();

        PortfolioApp.start();

    }

    catch (error) {

        console.error(error);

        PortfolioApp.showNotification(

            "Application failed to initialize.",

            "error"

        );

    }

});

/* ==========================================================
   GLOBAL ACCESS
========================================================== */

window.PortfolioApp = PortfolioApp;

/* ==========================================================
   END OF app.js
   Version: 7.0.0
========================================================== */
