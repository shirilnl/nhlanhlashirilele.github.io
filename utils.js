/*=========================================================
  NLS Engineering Platform v4.0
  File: utils.js
=========================================================*/

window.NLS = window.NLS || {};

window.NLS.utils = (() => {

    "use strict";

    /*=====================================================
        DOM
    =====================================================*/

    const $ = (selector, scope = document) =>
        scope.querySelector(selector);

    const $$ = (selector, scope = document) =>
        [...scope.querySelectorAll(selector)];

    const create = (tag, className = "") => {

        const element = document.createElement(tag);

        if (className) {

            element.className = className;

        }

        return element;

    };

    /*=====================================================
        CONTENT
    =====================================================*/

    const text = (selector, value) => {

        const element = $(selector);

        if (element) {

            element.textContent = value;

        }

    };

    const html = (selector, value) => {

        const element = $(selector);

        if (element) {

            element.innerHTML = value;

        }

    };

    /*=====================================================
        ATTRIBUTES
    =====================================================*/

    const attr = (selector, attribute, value) => {

        const element = $(selector);

        if (element) {

            element.setAttribute(attribute, value);

        }

    };

    /*=====================================================
        EVENTS
    =====================================================*/

    const on = (selector, event, callback) => {

        const element = $(selector);

        if (!element) return;

        element.addEventListener(event, callback);

    };

    const onAll = (selector, event, callback) => {

        $$(selector).forEach(element => {

            element.addEventListener(event, callback);

        });

    };

    /*=====================================================
        CLASSES
    =====================================================*/

    const addClass = (selector, className) => {

        const element = $(selector);

        if (element) {

            element.classList.add(className);

        }

    };

    const removeClass = (selector, className) => {

        const element = $(selector);

        if (element) {

            element.classList.remove(className);

        }

    };

    const toggleClass = (selector, className) => {

        const element = $(selector);

        if (element) {

            element.classList.toggle(className);

        }

    };

    /*=====================================================
        SCROLL
    =====================================================*/

    const scrollToElement = (id) => {

        const element = $(id);

        if (!element) return;

        element.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    };

    const scrollTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    /*=====================================================
        OBSERVER
    =====================================================*/

    const observe = (selector, callback, options = {}) => {

        const elements = $$(selector);

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    callback(entry.target);

                }

            });

        }, {

            threshold: 0.2,

            ...options

        });

        elements.forEach(element => observer.observe(element));

    };

    /*=====================================================
        COUNTERS
    =====================================================*/

    const animateCounter = (element) => {

        const target = Number(element.dataset.target);

        const suffix = element.dataset.suffix || "";

        let current = 0;

        const increment = target / 100;

        const update = () => {

            current += increment;

            if (current >= target) {

                element.textContent = target + suffix;

                return;

            }

            element.textContent =
                Math.floor(current) + suffix;

            requestAnimationFrame(update);

        };

        update();

    };

    /*=====================================================
        SKILL BARS
    =====================================================*/

    const animateSkillBars = () => {

        $$(".skill-progress").forEach(bar => {

            const width = bar.dataset.progress;

            bar.style.width = width + "%";

        });

    };

    /*=====================================================
        LOADER
    =====================================================*/

    const hideLoader = () => {

        const loader = $("#preloader");

        if (!loader) return;

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

        }, 500);

    };

    /*=====================================================
        PROGRESS BAR
    =====================================================*/

    const updateProgressBar = () => {

        const progress = $("#progress-bar");

        if (!progress) return;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            (window.scrollY / height) * 100;

        progress.style.width =
            percentage + "%";

    };

    /*=====================================================
        YEAR
    =====================================================*/

    const updateYear = () => {

        $$(".current-year").forEach(item => {

            item.textContent =
                new Date().getFullYear();

        });

    };

    /*=====================================================
        THEME
    =====================================================*/

    const saveTheme = (theme) => {

        localStorage.setItem("theme", theme);

    };

    const loadTheme = () => {

        return localStorage.getItem("theme") || "light";

    };

    /*=====================================================
        DOWNLOAD
    =====================================================*/

    const download = (file) => {

        const link =
            document.createElement("a");

        link.href = file;

        link.download = "";

        document.body.appendChild(link);

        link.click();

        link.remove();

    };

    /*=====================================================
        COPY
    =====================================================*/

    const copy = async (text) => {

        try {

            await navigator.clipboard.writeText(text);

            return true;

        }

        catch {

            return false;

        }

    };

    /*=====================================================
        FORMAT
    =====================================================*/

    const capitalize = (text) => {

        return text.charAt(0).toUpperCase() +
               text.slice(1);

    };

    /*=====================================================
        RANDOM ID
    =====================================================*/

    const uuid = () => {

        return crypto.randomUUID();

    };

    /*=====================================================
        RETURN
    =====================================================*/

    return {

        $,

        $$,

        create,

        text,

        html,

        attr,

        on,

        onAll,

        addClass,

        removeClass,

        toggleClass,

        scrollToElement,

        scrollTop,

        observe,

        animateCounter,

        animateSkillBars,

        hideLoader,

        updateProgressBar,

        updateYear,

        saveTheme,

        loadTheme,

        download,

        copy,

        capitalize,

        uuid

    };

})();
