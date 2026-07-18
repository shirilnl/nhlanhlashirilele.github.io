"use strict";

/*==========================================================
 NLS ENGINEERING PORTFOLIO
 Main Application Controller

 Version : 3.0.0
 Author  : Nhlanhla Lucky Shirilele

 This file bootstraps the entire application.
==========================================================*/

window.NLS = window.NLS || {};

window.NLS.app = {

    version: "3.0.0",

    initialized: false,

    modules: [],

    /*======================================================
        START APPLICATION
    ======================================================*/

    init() {

        console.group("NLS Engineering Portfolio");

        console.log("Starting application...");

        if (!this.validate()) {

            console.error("Application failed validation.");

            console.groupEnd();

            return;

        }

        this.loadConfiguration();

        this.loadProfile();

        this.registerModules();

        this.initializeModules();

        this.initialized = true;

        console.log("Application Ready");

        console.groupEnd();

    },

    /*======================================================
        VALIDATE REQUIRED FILES
    ======================================================*/

    validate() {

        const required = [

            "config",

            "data",

            "utils"

        ];

        for (const item of required) {

            if (!window.NLS[item]) {

                console.error(item + " is missing.");

                return false;

            }

        }

        return true;

    },

    /*======================================================
        LOAD CONFIGURATION
    ======================================================*/

    loadConfiguration() {

        console.log("Loading configuration...");

        this.config = window.NLS.config;

        this.data = window.NLS.data;

        this.utils = window.NLS.utils;

    },

    /*======================================================
        APPLY PROFILE INFORMATION
    ======================================================*/

    /*======================================================
    APPLY PROFILE INFORMATION
======================================================*/

loadProfile() {

    const site = this.config.site;

    if (!site) {

        console.error("Site configuration is missing.");

        return;

    }

    document.title = site.name;

    this.safeText(

        "#profileName",

        site.name

    );

    this.safeText(

        "#heroName",

        site.name

    );

}
    /*======================================================
        REGISTER MODULES
    ======================================================*/

    registerModules() {

        this.modules = [

            "Loader",

            "Navigation",

            "Theme",

            "Typing",

            "Counters",

            "Skills",

            "Projects",

            "Timeline",

            "Certificates",

            "Downloads",

            "QR",

            "Contact",

            "Animations",

            "Scroll",

            "Footer"

        ];

        console.log(

            this.modules.length +

            " modules registered."

        );

    },

    /*======================================================
        INITIALIZE MODULES
    ======================================================*/

    initializeModules() {

        this.modules.forEach(module => {

            if (

                window[module] &&

                typeof window[module].init === "function"

            ) {

                try {

                    window[module].init();

                    console.log(module + " initialized");

                }

                catch (error) {

                    console.error(

                        module +

                        " failed.",

                        error

                    );

                }

            }

        });

    },

    /*======================================================
        SAFE TEXT
    ======================================================*/

    safeText(selector, value) {

        const element =

            document.querySelector(selector);

        if (element) {

            element.textContent = value;

        }

    },

    /*======================================================
        SAFE HTML
    ======================================================*/

    safeHTML(selector, value) {

        const element =

            document.querySelector(selector);

        if (element) {

            element.innerHTML = value;

        }

    },

    /*======================================================
        SAFE IMAGE
    ======================================================*/

    safeImage(selector, src) {

        const image =

            document.querySelector(selector);

        if (image) {

            image.src = src;

        }

    },

    /*======================================================
        VERSION
    ======================================================*/

    getVersion() {

        return this.version;

    },

    /*======================================================
        RELOAD
    ======================================================*/

    reload() {

        location.reload();

    }

};

/*==========================================================
 APPLICATION STARTUP
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    () => {

        window.NLS.app.init();

    }

);
