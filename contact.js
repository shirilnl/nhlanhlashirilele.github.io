/* =========================================================
   NLS ENGINEERING PORTFOLIO
   contact.js
   Milestone 5 — Part 2
   Production Contact Form System
========================================================= */

"use strict";


/* =========================================================
   GLOBAL NAMESPACE
========================================================= */

window.NLS = window.NLS || {};


NLS.contact = {


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.setupContactForm();


        this.setupContactLinks();


        this.setupCopyButtons();


        console.log(

            "NLS Contact System initialized successfully."

        );

    },


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    setupContactForm() {


        const form =

            document.querySelector(

                "[data-contact-form]"

            );


        if (!form)

            return;


        form.addEventListener(

            "submit",

            event => {


                this.handleFormSubmit(

                    event,

                    form

                );

            }

        );

    },


    /* =====================================================
       SUBMIT FORM
    ===================================================== */

    handleFormSubmit(

        event,

        form

    ) {


        event.preventDefault();


        if (

            !this.validateForm(

                form

            )

        ) {


            return;

        }


        const submitButton =

            form.querySelector(

                "[type='submit']"

            );


        const originalText =

            submitButton

                ?.innerHTML;


        if (

            submitButton

        ) {


            submitButton.disabled =

                true;


            submitButton.innerHTML = `

                <i class="fas fa-spinner fa-spin"></i>

                Sending...

            `;

        }


        const formData =

            new FormData(

                form

            );


        const action =

            form.getAttribute(

                "action"

            );


        if (

            !action

        ) {


            this.showNotification(

                "Contact form is not configured correctly.",

                "error"

            );


            this.restoreButton(

                submitButton,

                originalText

            );


            return;

        }


        fetch(

            action,

            {

                method:

                    "POST",

                body:

                    formData,

                headers: {

                    Accept:

                        "application/json"

                }

            }

        )

        .then(

            response => {


                if (

                    !response.ok

                ) {


                    throw new Error(

                        "Contact form request failed."

                    );

                }


                return response.json()

                    .catch(

                        () =>

                            ({})

                    );

            }

        )

        .then(

            () => {


                this.showNotification(

                    "Thank you. Your message has been sent successfully.",

                    "success"

                );


                form.reset();


                this.trackContactSubmission();

            }

        )

        .catch(

            error => {


                console.error(

                    "Contact form error:",

                    error

                );


                this.showNotification(

                    "Unable to send your message right now. Please try again or contact me directly.",

                    "error"

                );

            }

        )

        .finally(

            () => {


                this.restoreButton(

                    submitButton,

                    originalText

                );

            }

        );

    },


    /* =====================================================
       VALIDATE FORM
    ===================================================== */

    validateForm(

        form

    ) {


        const name =

            form.querySelector(

                "[name='name']"

            );


        const email =

            form.querySelector(

                "[name='email']"

            );


        const message =

            form.querySelector(

                "[name='message']"

            );


        const honeypot =

            form.querySelector(

                "[name='_honey']"

            );


        /* ================================================
           HONEYPOT SPAM CHECK
        ================================================ */

        if (

            honeypot &&

            honeypot.value.trim()

        ) {


            return false;

        }


        /* ================================================
           NAME
        ================================================ */

        if (

            !name ||

            name.value.trim().length < 2

        ) {


            this.showNotification(

                "Please enter your name.",

                "error"

            );


            name?.focus();


            return false;

        }


        /* ================================================
           EMAIL
        ================================================ */

        if (

            !email ||

            !this.isValidEmail(

                email.value.trim()

            )

        ) {


            this.showNotification(

                "Please enter a valid email address.",

                "error"

            );


            email?.focus();


            return false;

        }


        /* ================================================
           MESSAGE
        ================================================ */

        if (

            !message ||

            message.value.trim().length < 10

        ) {


            this.showNotification(

                "Please enter a message of at least 10 characters.",

                "error"

            );


            message?.focus();


            return false;

        }


        return true;

    },


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    isValidEmail(

        email

    ) {


        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            .test(

                email

            );

    },


    /* =====================================================
       RESTORE BUTTON
    ===================================================== */

    restoreButton(

        button,

        originalText

    ) {


        if (

            !button

        )

            return;


        button.disabled =

            false;


        button.innerHTML =

            originalText ||

            "Send Message";

    },


    /* =====================================================
       CONTACT LINKS
    ===================================================== */

    setupContactLinks() {


        document.addEventListener(

            "click",

            event => {


                const link =

                    event.target.closest(

                        "[data-contact-action]"

                    );


                if (

                    !link

                )

                    return;


                const action =

                    link.dataset

                        .contactAction;


                if (

                    window.NLS.analytics

                ) {


                    NLS.analytics.update(

                        data => {


                            if (

                                !data.contactClicks

                            ) {


                                data.contactClicks =

                                    {};

                            }


                            if (

                                !data.contactClicks[action]

                            ) {


                                data.contactClicks[action] =

                                    0;

                            }


                            data.contactClicks[action]++;

                        }

                    );

                }

            }

        );

    },


    /* =====================================================
       COPY BUTTONS
    ===================================================== */

    setupCopyButtons() {


        document.addEventListener(

            "click",

            event => {


                const button =

                    event.target.closest(

                        "[data-copy]"

                    );


                if (

                    !button

                )

                    return;


                const value =

                    button.dataset

                        .copy;


                if (

                    !value

                )

                    return;


                navigator

                    .clipboard

                    .writeText(

                        value

                    )

                    .then(

                        () => {


                            this.showNotification(

                                "Copied successfully.",

                                "success"

                            );

                        }

                    )

                    .catch(

                        () => {


                            this.showNotification(

                                "Unable to copy the information.",

                                "error"

                            );

                        }

                    );

            }

        );

    },


    /* =====================================================
       TRACK FORM SUBMISSION
    ===================================================== */

    trackContactSubmission() {


        if (

            !window.NLS.analytics

        )

            return;


        NLS.analytics.update(

            data => {


                if (

                    !data.contactFormSubmissions

                ) {


                    data.contactFormSubmissions =

                        0;

                }


                data.contactFormSubmissions++;

            }

        );

    },


    /* =====================================================
       NOTIFICATION
    ===================================================== */

    showNotification(

        message,

        type = "info"

    ) {


        let notification =

            document.querySelector(

                "[data-contact-notification]"

            );


        if (

            !notification

        ) {


            notification =

                document.createElement(

                    "div"

                );


            notification.dataset

                .contactNotification =

                "true";


            notification.className =

                "contact-notification";


            document.body.appendChild(

                notification

            );

        }


        notification.textContent =

            message;


        notification.dataset

            .type =

            type;


        notification.classList.add(

            "is-visible"

        );


        clearTimeout(

            this.notificationTimeout

        );


        this.notificationTimeout =

            setTimeout(

                () => {


                    notification.classList.remove(

                        "is-visible"

                    );

                },

                5000

            );

    }

};


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.contact.init();

    }

);
