/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 1
==================================================*/

"use strict";

/*==================================
    PAGE LOADER
==================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*==================================
    STICKY NAVIGATION
==================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/*==================================
    SCROLL PROGRESS BAR
==================================*/

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*==================================
    BACK TO TOP BUTTON
==================================*/

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

if (backTop) {

    backTop.addEventListener("click", e => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================
    FOOTER YEAR
==================================*/

const yearElement = document.querySelector("#year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

console.log("Portfolio Version 2.0 Loaded Successfully");

/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 2
==================================================*/

/*==================================
    MOBILE MENU
==================================*/

const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

function closeMenu() {

    if (!navMenu) return;

    navMenu.classList.remove("active");
    body.classList.remove("menu-open");

}

function openMenu() {

    if (!navMenu) return;

    navMenu.classList.add("active");
    body.classList.add("menu-open");

}

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        body.classList.toggle("menu-open");

    });

}

/*==================================
    CLOSE MENU WHEN LINK IS CLICKED
==================================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});

/*==================================
    CLOSE MENU WITH ESC
==================================*/

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeMenu();

    }

});

/*==================================
    CLICK OUTSIDE MENU
==================================*/

document.addEventListener("click", e => {

    if (!navMenu || !menuButton) return;

    const clickedMenu = navMenu.contains(e.target);
    const clickedButton = menuButton.contains(e.target);

    if (!clickedMenu && !clickedButton) {

        closeMenu();

    }

});

/*==================================
    SMOOTH SCROLL
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/*==================================
    ACTIVE NAVIGATION
==================================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();

/*==================================
    PREVENT DOUBLE CLICK
==================================*/

let scrolling = false;

window.addEventListener("scroll", () => {

    if (scrolling) return;

    scrolling = true;

    requestAnimationFrame(() => {

        updateActiveLink();

        scrolling = false;

    });

});

console.log("Navigation Module Loaded");
/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 3
==================================================*/

/*==================================
    DARK / LIGHT MODE
==================================*/

const themeToggle = document.getElementById("themeToggle");
const bodyElement = document.body;

const THEME_KEY = "portfolio-theme";

/*==================================
    APPLY THEME
==================================*/

function applyTheme(theme) {

    if (theme === "dark") {

        bodyElement.classList.add("dark");

        if (themeToggle) {

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Light Mode"
            );

        }

    } else {

        bodyElement.classList.remove("dark");

        if (themeToggle) {

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Dark Mode"
            );

        }

    }

}

/*==================================
    SAVE THEME
==================================*/

function saveTheme(theme) {

    localStorage.setItem(THEME_KEY, theme);

}

/*==================================
    GET SAVED THEME
==================================*/

function getSavedTheme() {

    return localStorage.getItem(THEME_KEY);

}

/*==================================
    DETECT SYSTEM THEME
==================================*/

function getSystemTheme() {

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

}

/*==================================
    INITIALIZE THEME
==================================*/

function initializeTheme() {

    const savedTheme = getSavedTheme();

    if (savedTheme) {

        applyTheme(savedTheme);

    } else {

        applyTheme(getSystemTheme());

    }

}

initializeTheme();

/*==================================
    TOGGLE THEME
==================================*/

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const newTheme =
            bodyElement.classList.contains("dark")
                ? "light"
                : "dark";

        applyTheme(newTheme);

        saveTheme(newTheme);

    });

}

/*==================================
    SYSTEM THEME CHANGES
==================================*/

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

mediaQuery.addEventListener("change", e => {

    const savedTheme = getSavedTheme();

    /* Only follow system theme
       if the user hasn't chosen one */

    if (!savedTheme) {

        applyTheme(e.matches ? "dark" : "light");

    }

});

/*==================================
    THEME TRANSITION
==================================*/

window.addEventListener("DOMContentLoaded", () => {

    bodyElement.classList.add("theme-ready");

});

/*==================================
    CLEAR THEME (Developer Helper)
==================================*/

function resetThemePreference() {

    localStorage.removeItem(THEME_KEY);

    applyTheme(getSystemTheme());

}

console.log("Theme Module Loaded");

