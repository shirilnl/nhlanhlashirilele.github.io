/*=========================================================
    NLS Engineering Platform
    Version: 4.0
    File: script.js
=========================================================*/

"use strict";

/*=========================================================
    GLOBAL APP
=========================================================*/

const App = {

    config: window.NLS?.config || {},

    data: window.NLS?.data || {},

    utils: window.NLS?.utils || {},

    state: {

        loaded: false,

        theme: "light",

        menuOpen: false,

        typingIndex: 0,

        typingText: "",

        typingDeleting: false,

        observer: null

    }

};

/*=========================================================
    DOM
=========================================================*/

const DOM = {

    body: document.body,

    html: document.documentElement,

    preloader: document.getElementById("preloader"),

    progressBar: document.getElementById("progress-bar"),

    backToTop: document.getElementById("backToTop"),

    themeToggle: document.getElementById("theme-toggle"),

    menuButton: document.querySelector(".menu-btn"),

    navbar: document.querySelector(".navbar"),

    mobileOverlay: document.querySelector(".mobile-overlay"),

    typing: document.querySelector(".typing-text")

};

/*=========================================================
    INITIALIZE
=========================================================*/

document.addEventListener("DOMContentLoaded", init);

function init() {

    console.log("================================");

    console.log("NLS Engineering Platform");

    console.log("Version:", App.config.app?.version);

    console.log("================================");

    loadTheme();

    initializeNavigation();

    initializeBackToTop();

    initializeProgressBar();

    initializeTyping();

    initializeCounters();

    initializeSkillBars();

    initializeRevealAnimations();

    initializeQR();

    initializeDownloads();

    initializeContact();

    initializePWA();

    initializeAI();

    initializeAdmin();

    window.addEventListener("load", finishLoading);

}

/*=========================================================
    PRELOADER
=========================================================*/

function finishLoading() {

    if (!DOM.preloader) return;

    DOM.preloader.classList.add("hide");

    setTimeout(() => {

        DOM.preloader.remove();

    }, 600);

}

/*=========================================================
    THEME
=========================================================*/

function loadTheme() {

    const savedTheme =

        localStorage.getItem("theme") ||

        App.config.app.theme ||

        "light";

    App.state.theme = savedTheme;

    DOM.html.setAttribute("data-theme", savedTheme);

    updateThemeIcon();

}

function toggleTheme() {

    App.state.theme =

        App.state.theme === "light"

        ? "dark"

        : "light";

    DOM.html.setAttribute(

        "data-theme",

        App.state.theme

    );

    localStorage.setItem(

        "theme",

        App.state.theme

    );

    updateThemeIcon();

}

function updateThemeIcon() {

    if (!DOM.themeToggle) return;

    const icon = DOM.themeToggle.querySelector("i");

    if (!icon) return;

    if (App.state.theme === "dark") {

        icon.className =

            "fas fa-sun";

    }

    else {

        icon.className =

            "fas fa-moon";

    }

}

if (DOM.themeToggle) {

    DOM.themeToggle.addEventListener(

        "click",

        toggleTheme

    );

}

/*=========================================================
    NAVIGATION
=========================================================*/

function initializeNavigation() {

    if (!DOM.menuButton) return;

    DOM.menuButton.addEventListener(

        "click",

        toggleMenu

    );

    DOM.mobileOverlay?.addEventListener(

        "click",

        closeMenu

    );

    document

        .querySelectorAll(".navbar a")

        .forEach(link => {

            link.addEventListener(

                "click",

                closeMenu

            );

        });

}

function toggleMenu() {

    App.state.menuOpen = !App.state.menuOpen;

    DOM.navbar.classList.toggle(

        "active",

        App.state.menuOpen

    );

    DOM.mobileOverlay?.classList.toggle(

        "active",

        App.state.menuOpen

    );

}

function closeMenu() {

    App.state.menuOpen = false;

    DOM.navbar?.classList.remove("active");

    DOM.mobileOverlay?.classList.remove("active");

}

/*=========================================================
    TYPING EFFECT
=========================================================*/

function initializeTyping() {

    if (!DOM.typing) return;

    const words = App.data.hero?.subtitle || [];

    if (!words.length) return;

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            DOM.typing.textContent =
                currentWord.substring(0, letterIndex++);

            if (letterIndex > currentWord.length) {

                deleting = true;

                setTimeout(type, 1800);

                return;

            }

        }

        else {

            DOM.typing.textContent =
                currentWord.substring(0, letterIndex--);

            if (letterIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(type, deleting ? 45 : 90);

    }

    type();

}

/*=========================================================
    SCROLL PROGRESS BAR
=========================================================*/

function initializeProgressBar() {

    if (!DOM.progressBar) return;

    window.addEventListener("scroll", updateProgressBar);

    updateProgressBar();

}

function updateProgressBar() {

    const scrollTop =
        window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    DOM.progressBar.style.width =
        progress + "%";

}

/*=========================================================
    BACK TO TOP
=========================================================*/

function initializeBackToTop() {

    if (!DOM.backToTop) return;

    window.addEventListener(

        "scroll",

        () => {

            if (window.scrollY > 500) {

                DOM.backToTop.classList.add("show");

            }

            else {

                DOM.backToTop.classList.remove("show");

            }

        }

    );

    DOM.backToTop.addEventListener(

        "click",

        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    );

}

/*=========================================================
    SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/*=========================================================
    ACTIVE NAVIGATION
=========================================================*/

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener(

    "scroll",

    updateActiveNavigation

);

function updateActiveNavigation() {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 140;

        const height =
            section.offsetHeight;

        if (

            window.scrollY >= top &&
            window.scrollY < top + height

        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===
            "#" + current

        ) {

            link.classList.add("active");

        }

    });

}

/*=========================================================
    HEADER SHADOW
=========================================================*/

window.addEventListener(

    "scroll",

    () => {

        const header =
            document.querySelector("header");

        if (!header) return;

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        }

        else {

            header.classList.remove("scrolled");

        }

    }

);

/*=========================================================
    LAZY IMAGE LOADING
=========================================================*/

function initializeLazyImages() {

    const images =
        document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const image =
                        entry.target;

                    image.src =
                        image.dataset.src;

                    image.removeAttribute("data-src");

                    observer.unobserve(image);

                });

            },

            {

                threshold: 0.2

            }

        );

    images.forEach(image => {

        observer.observe(image);

    });

}

/*=========================================================
    WINDOW RESIZE
=========================================================*/

window.addEventListener(

    "resize",

    () => {

        if (

            window.innerWidth > 992 &&
            App.state.menuOpen

        ) {

            closeMenu();

        }

    }

);

/*=========================================================
    PAGE VISIBILITY
=========================================================*/

document.addEventListener(

    "visibilitychange",

    () => {

        if (document.hidden) {

            console.log("Page hidden");

        }

        else {

            console.log("Page active");

        }

    }

);

/*=========================================================
    END PART 2
=========================================================*/
/*=========================================================
    COUNTER ANIMATION
=========================================================*/

function initializeCounters() {

    const counters =
        document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                });

            },

            {
                threshold: 0.4
            }

        );

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

function animateCounter(counter) {

    const target =
        Number(counter.dataset.target);

    const suffix =
        counter.dataset.suffix || "";

    const duration = 1800;

    const start = performance.now();

    function update(now) {

        const progress =
            Math.min((now - start) / duration, 1);

        const value =
            Math.floor(progress * target);

        counter.textContent =
            value + suffix;

        if (progress < 1) {

            requestAnimationFrame(update);

        }

        else {

            counter.textContent =
                target + suffix;

        }

    }

    requestAnimationFrame(update);

}

/*=========================================================
    SKILL BARS
=========================================================*/

function initializeSkillBars() {

    const bars =
        document.querySelectorAll(".skill-progress");

    if (!bars.length) return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const bar =
                        entry.target;

                    const progress =
                        bar.dataset.progress;

                    bar.style.width =
                        progress + "%";

                    observer.unobserve(bar);

                });

            },

            {

                threshold: .3

            }

        );

    bars.forEach(bar => {

        bar.style.width = "0%";

        observer.observe(bar);

    });

}

/*=========================================================
    SECTION REVEAL
=========================================================*/

function initializeRevealAnimations() {

    const sections = document.querySelectorAll(

        ".section, .stat-card, .project-card, .certificate-card"

    );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    entry.target.classList.add(

                        "animate"

                    );

                    observer.unobserve(

                        entry.target

                    );

                });

            },

            {

                threshold: .15

            }

        );

    sections.forEach(section => {

        observer.observe(section);

    });

}

/*=========================================================
    RENDER PROJECTS
=========================================================*/

function renderProjects() {

    const container =
        document.getElementById("projectsGrid");

    if (!container) return;

    container.innerHTML = "";

    App.data.projects.forEach(project => {

        container.innerHTML += `

        <article class="project-card">

            <img
                src="${project.image}"
                alt="${project.title}"
                loading="lazy">

            <div class="project-content">

                <span class="project-tag">

                    ${project.category}

                </span>

                <h3>

                    ${project.title}

                </h3>

                <p>

                    ${project.description}

                </p>

                <div class="project-technologies">

                    ${project.technologies
                        .map(t => `<span>${t}</span>`)
                        .join("")}

                </div>

            </div>

        </article>

        `;

    });

}

/*=========================================================
    RENDER CERTIFICATES
=========================================================*/

function renderCertificates() {

    const container =
        document.getElementById("certificateGrid");

    if (!container) return;

    container.innerHTML = "";

    App.data.certificates.forEach(cert => {

        container.innerHTML += `

        <article class="certificate-card">

            <img
                src="${cert.image}"
                alt="${cert.title}"
                loading="lazy">

            <h3>

                ${cert.title}

            </h3>

            <button

                class="btn btn-primary"

                onclick="window.open('${cert.file}')">

                View Certificate

            </button>

        </article>

        `;

    });

}

/*=========================================================
    RENDER DOWNLOADS
=========================================================*/

function renderDownloads() {

    const container =
        document.getElementById("downloadsGrid");

    if (!container) return;

    container.innerHTML = "";

    App.data.downloads.forEach(file => {

        container.innerHTML += `

        <a

            class="download-card"

            href="${file.file}"

            download>

            <i class="fas ${file.icon}"></i>

            <span>

                ${file.name}

            </span>

        </a>

        `;

    });

}

/*=========================================================
    POPULATE PROFILE
=========================================================*/

function populateProfile() {

    const profile = App.config.profile;

    document.title =
        profile.fullName + " | " + profile.title;

    document.querySelectorAll("[data-name]")

        .forEach(el => {

            el.textContent =
                profile.fullName;

        });

    document.querySelectorAll("[data-title]")

        .forEach(el => {

            el.textContent =
                profile.title;

        });

    document.querySelectorAll("[data-headline]")

        .forEach(el => {

            el.textContent =
                profile.headline;

        });

}

/*=========================================================
    INITIAL PAGE RENDER
=========================================================*/

function renderWebsite() {

    populateProfile();

    renderProjects();

    renderCertificates();

    renderDownloads();

}

/*=========================================================
    AUTO START RENDER
=========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    renderWebsite

);

/*=========================================================
    END PART 3
=========================================================*/
/*=========================================================
    QR CODE
=========================================================*/

function initializeQR() {

    if (!App.config.qr.enabled) return;

    const qrContainer =
        document.getElementById("qrCode");

    if (!qrContainer) return;

    qrContainer.innerHTML = "";

    if (typeof QRCode === "undefined") {

        console.warn("QRCode library not loaded.");

        return;

    }

    new QRCode(qrContainer, {

        text: App.config.qr.portfolioURL,

        width: 220,

        height: 220,

        colorDark: "#111827",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });

}

/*=========================================================
    DOWNLOADS
=========================================================*/

function initializeDownloads() {

    document

        .querySelectorAll("[data-download]")

        .forEach(button => {

            button.addEventListener(

                "click",

                function () {

                    const file =
                        this.dataset.download;

                    if (!file) return;

                    const link =
                        document.createElement("a");

                    link.href = file;

                    link.download = "";

                    document.body.appendChild(link);

                    link.click();

                    link.remove();

                }

            );

        });

}

/*=========================================================
    CONTACT BUTTONS
=========================================================*/

function initializeContact() {

    const contact =
        App.config.contact;

    document

        .querySelectorAll("[data-phone]")

        .forEach(btn => {

            btn.href =
                "tel:" + contact.phone;

        });

    document

        .querySelectorAll("[data-email]")

        .forEach(btn => {

            btn.href =
                "mailto:" + contact.email;

        });

    document

        .querySelectorAll("[data-whatsapp]")

        .forEach(btn => {

            btn.href =
                "https://wa.me/" +
                contact.whatsapp;

        });

    document

        .querySelectorAll("[data-linkedin]")

        .forEach(btn => {

            btn.href =
                contact.linkedin;

        });

    document

        .querySelectorAll("[data-facebook]")

        .forEach(btn => {

            btn.href =
                contact.facebook;

        });

}

/*=========================================================
    COPY TO CLIPBOARD
=========================================================*/

async function copyText(text) {

    try {

        await navigator.clipboard.writeText(text);

        showToast("Copied successfully.");

    }

    catch {

        showToast("Copy failed.");

    }

}

/*=========================================================
    TOAST
=========================================================*/

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.className =
        "toast";

    toast.innerHTML =
        message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {

        toast.classList.add("show");

    });

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 3000);

}

/*=========================================================
    PWA
=========================================================*/

function initializePWA() {

    if (!("serviceWorker" in navigator))
        return;

    navigator.serviceWorker

        .register("service-worker.js")

        .then(() => {

            console.log(

                "Service Worker Registered."

            );

        })

        .catch(error => {

            console.error(error);

        });

}

/*=========================================================
    AI PLACEHOLDER
=========================================================*/

function initializeAI() {

    if (typeof AI !== "undefined") {

        AI.initialize();

    }

}

/*=========================================================
    ADMIN PLACEHOLDER
=========================================================*/

function initializeAdmin() {

    if (typeof Admin !== "undefined") {

        Admin.initialize();

    }

}

/*=========================================================
    PERFORMANCE
=========================================================*/

window.addEventListener(

    "pageshow",

    () => {

        console.log("Page Ready");

    }

);

window.addEventListener(

    "beforeunload",

    () => {

        console.log("Closing");

    }

);

/*=========================================================
    GLOBAL ERROR HANDLER
=========================================================*/

window.addEventListener(

    "error",

    event => {

        console.error(

            "JavaScript Error:",

            event.message

        );

    }

);

window.addEventListener(

    "unhandledrejection",

    event => {

        console.error(

            "Promise Error:",

            event.reason

        );

    }

);

/*=========================================================
    SHORTCUTS
=========================================================*/

window.App = App;

/*=========================================================
    END
=========================================================*/

console.log(

    "%cNLS Engineering Platform Loaded",

    "color:#0066ff;font-size:16px;font-weight:bold"

);
