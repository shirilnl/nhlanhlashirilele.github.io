"use strict";

/*==========================================================
 NLS ENGINEERING PORTFOLIO
 Utility Library
 Version : 3.0.0
 Author  : Nhlanhla Lucky Shirilele

 Shared helper functions used throughout the portfolio.
==========================================================*/

window.NLS = window.NLS || {};

window.NLS.utils = {

    /*======================================================
        SELECTORS
    ======================================================*/

    $: (selector) => document.querySelector(selector),

    $$: (selector) => document.querySelectorAll(selector),

    byId: (id) => document.getElementById(id),

    /*======================================================
        TEXT
    ======================================================*/

    setText(selector, value) {

        const element = this.$(selector);

        if (element) {

            element.textContent = value;

        }

    },

    /*======================================================
        HTML
    ======================================================*/

    setHTML(selector, value) {

        const element = this.$(selector);

        if (element) {

            element.innerHTML = value;

        }

    },

    /*======================================================
        IMAGE
    ======================================================*/

    setImage(selector, src, alt = "") {

        const image = this.$(selector);

        if (!image) return;

        image.src = src;

        image.alt = alt;

    },

    /*======================================================
        LINK
    ======================================================*/

    setLink(selector, href) {

        const link = this.$(selector);

        if (link) {

            link.href = href;

        }

    },

    /*======================================================
        SHOW / HIDE
    ======================================================*/

    show(selector) {

        const element = this.$(selector);

        if (element) {

            element.style.display = "";

        }

    },

    hide(selector) {

        const element = this.$(selector);

        if (element) {

            element.style.display = "none";

        }

    },

    toggle(selector) {

        const element = this.$(selector);

        if (!element) return;

        element.classList.toggle("active");

    },

    /*======================================================
        SMOOTH SCROLL
    ======================================================*/

    scrollTo(target) {

        const section = this.$(target);

        if (!section) return;

        section.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    },

    /*======================================================
        COPY TO CLIPBOARD
    ======================================================*/

    async copy(text) {

        try {

            await navigator.clipboard.writeText(text);

            return true;

        }

        catch {

            return false;

        }

    },

    /*======================================================
        DATE
    ======================================================*/

    currentYear() {

        return new Date().getFullYear();

    },

    /*======================================================
        NUMBER FORMAT
    ======================================================*/

    number(value) {

        return new Intl.NumberFormat().format(value);

    },

    /*======================================================
        RANDOM
    ======================================================*/

    random(min, max) {

        return Math.floor(

            Math.random() * (max - min + 1)

        ) + min;

    },

    /*======================================================
        DEVICE
    ======================================================*/

    isMobile() {

        return window.innerWidth < 768;

    },

    /*======================================================
        URL
    ======================================================*/

    open(url) {

        window.open(

            url,

            "_blank",

            "noopener"

        );

    },

    /*======================================================
        EMAIL
    ======================================================*/

    email(address) {

        window.location.href =

            `mailto:${address}`;

    },

    /*======================================================
        PHONE
    ======================================================*/

    phone(number) {

        window.location.href =

            `tel:${number}`;

    },

    /*======================================================
        WHATSAPP
    ======================================================*/

    whatsapp(number) {

        this.open(

            `https://wa.me/${number}`

        );

    },

    /*======================================================
        DOWNLOAD
    ======================================================*/

    download(file) {

        const link = document.createElement("a");

        link.href = file;

        link.download = "";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    },

    /*======================================================
        CLASS HELPERS
    ======================================================*/

    addClass(selector, className) {

        const element = this.$(selector);

        if (element) {

            element.classList.add(className);

        }

    },

    removeClass(selector, className) {

        const element = this.$(selector);

        if (element) {

            element.classList.remove(className);

        }

    },

    /*======================================================
        DEBOUNCE
    ======================================================*/

    debounce(callback, delay = 200) {

        let timer;

        return (...args) => {

            clearTimeout(timer);

            timer = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    }

};

Object.freeze(window.NLS.utils);

console.log("Utilities Loaded");
