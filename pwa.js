/* =========================================================
   NLS ENGINEERING PORTFOLIO
   pwa.js
   Progressive Web App Manager
========================================================= */

"use strict";


window.NLS = window.NLS || {};


NLS.pwa = {


    deferredInstallPrompt:

        null,


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.registerServiceWorker();


        this.captureInstallPrompt();


        this.handleAppInstalled();


        this.createInstallButton();


    },


    /* =====================================================
       SERVICE WORKER
    ===================================================== */

    registerServiceWorker() {


        if (

            !("serviceWorker" in navigator)

        )

            return;


        window.addEventListener(

            "load",

            async () => {


                try {


                    const registration =

                        await navigator.serviceWorker.register(

                            "./service-worker.js"

                        );


                    console.log(

                        "Service Worker registered:",

                        registration.scope

                    );


                    registration.addEventListener(

                        "updatefound",

                        () => {


                            const newWorker =

                                registration.installing;


                            if (

                                !newWorker

                            )

                                return;


                            newWorker.addEventListener(

                                "statechange",

                                () => {


                                    if (

                                        newWorker.state ===

                                        "installed"

                                        &&

                                        navigator.serviceWorker.controller

                                    ) {


                                        this.showUpdateNotification(

                                            registration

                                        );

                                    }

                                }

                            );

                        }

                    );

                }

                catch (

                    error

                ) {


                    console.error(

                        "Service Worker registration failed:",

                        error

                    );

                }

            }

        );

    },


    /* =====================================================
       INSTALL PROMPT
    ===================================================== */

    captureInstallPrompt() {


        window.addEventListener(

            "beforeinstallprompt",

            event => {


                event.preventDefault();


                this.deferredInstallPrompt =

                    event;


                this.showInstallButton();

            }

        );

    },


    /* =====================================================
       INSTALL BUTTON
    ===================================================== */

    createInstallButton() {


        const button =

            document.createElement(

                "button"

            );


        button.id =

            "install-app";


        button.className =

            "install-app-button";


        button.type =

            "button";


        button.innerHTML =


            '<i class="fas fa-download"></i>' +

            '<span>Install App</span>';


        button.addEventListener(

            "click",

            async () => {


                if (

                    !this.deferredInstallPrompt

                )

                    return;


                this.deferredInstallPrompt.prompt();


                const result =

                    await this.deferredInstallPrompt.userChoice;


                console.log(

                    "Install result:",

                    result.outcome

                );


                this.deferredInstallPrompt =

                    null;


                button.remove();

            }

        );


        document.body.appendChild(

            button

        );

    },


    showInstallButton() {


        const button =

            document.getElementById(

                "install-app"

            );


        if (

            button

        ) {


            button.classList.add(

                "visible"

            );

        }

    },


    /* =====================================================
       APP INSTALLED
    ===================================================== */

    handleAppInstalled() {


        window.addEventListener(

            "appinstalled",

            () => {


                console.log(

                    "NLS Portfolio installed."

                );


                this.deferredInstallPrompt =

                    null;


                const button =

                    document.getElementById(

                        "install-app"

                    );


                if (

                    button

                )

                    button.remove();

            }

        );

    },


    /* =====================================================
       UPDATE NOTIFICATION
    ===================================================== */

    showUpdateNotification(

        registration

    ) {


        const notification =

            document.createElement(

                "div"

            );


        notification.className =

            "pwa-update-notification";


        notification.innerHTML = `

            <div>

                <strong>

                    New version available

                </strong>


                <span>

                    Refresh to update the portfolio.

                </span>

            </div>


            <button type="button">

                Update

            </button>

        `;


        notification

            .querySelector(

                "button"

            )

            .addEventListener(

                "click",

                () => {


                    if (

                        registration.waiting

                    ) {


                        registration.waiting.postMessage(

                            {

                                type:

                                    "SKIP_WAITING"

                            }

                        );

                    }


                    window.location.reload();

                }

            );


        document.body.appendChild(

            notification

        );

    }

};


document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.pwa.init();

    }

);
