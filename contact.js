/* =========================================================
   NLS ENGINEERING PORTFOLIO
   contact.js
   Milestone 4 — Part 1
   Professional Contact Functionality
========================================================= */

"use strict";


/* =========================================================
   GLOBAL CONTACT MODULE
========================================================= */

window.NLS = window.NLS || {};

NLS.contact = {


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    init() {

        this.setupContactLinks();

        this.setupCopyButtons();

        this.setupContactForm();

        this.setupValidation();

        console.log(

            "NLS Contact System initialized successfully."

        );

    },


    /* =====================================================
       CONTACT LINKS
    ===================================================== */

    setupContactLinks() {


        const config =

            window.NLS?.config ||

            {};


        const contact =

            config.contact ||

            {};


        const phone =

            contact.phone ||

            "";


        const email =

            contact.email ||

            "";


        const whatsapp =

            contact.whatsapp ||

            "";


        const linkedin =

            contact.linkedin ||

            "";


        document

            .querySelectorAll(

                "[data-contact-phone]"

            )

            .forEach(

                element => {


                    if (!phone)

                        return;


                    element.href =

                        `tel:${phone}`;

                }

            );


        document

            .querySelectorAll(

                "[data-contact-email]"

            )

            .forEach(

                element => {


                    if (!email)

                        return;


                    element.href =

                        `mailto:${email}`;

                }

            );


        document

            .querySelectorAll(

                "[data-contact-whatsapp]"

            )

            .forEach(

                element => {


                    if (!whatsapp)

                        return;


                    const cleanNumber =

                        String(

                            whatsapp

                        )

                        .replace(

                            /[^0-9]/g,

                            ""

                        );


                    element.href =

                        `https://wa.me/${cleanNumber}`;


                    element.target =

                        "_blank";


                    element.rel =

                        "noopener noreferrer";

                }

            );


        document

            .querySelectorAll(

                "[data-contact-linkedin]"

            )

            .forEach(

                element => {


                    if (!linkedin)

                        return;


                    element.href =

                        linkedin;


                    element.target =

                        "_blank";


                    element.rel =

                        "noopener noreferrer";

                }

            );

    },


    /* =====================================================
       COPY TO CLIPBOARD
    ===================================================== */

    setupCopyButtons() {


        document

            .querySelectorAll(

                "[data-copy]"

            )

            .forEach(

                button => {


                    button.addEventListener(

                        "click",

                        async () => {


                            const value =

                                button.dataset.copy;


                            if (!value)

                                return;


                            try {


                                await navigator

                                    .clipboard

                                    .writeText(

                                        value

                                    );


                                this.showNotification(

                                    "Copied to clipboard.",

                                    "success"

                                );


                                this.updateCopyButton(

                                    button

                                );


                            }

                            catch (error) {


                                console.error(

                                    "Clipboard error:",

                                    error

                                );


                                this.showNotification(

                                    "Unable to copy.",

                                    "error"

                                );

                            }

                        }

                    );

                }

            );

    },


    /* =====================================================
       COPY BUTTON FEEDBACK
    ===================================================== */

    updateCopyButton(

        button

    ) {


        const originalHTML =

            button.innerHTML;


        button.innerHTML =

            `

                <i class="fas fa-check"></i>

                Copied

            `;


        button.classList.add(

            "copied"

        );


        setTimeout(

            () => {


                button.innerHTML =

                    originalHTML;


                button.classList.remove(

                    "copied"

                );

            },

            2000

        );

    },


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    setupContactForm() {


        const form =

            document.querySelector(

                "#contactForm"

            );


        if (!form)

            return;


        form.addEventListener(

            "submit",

            event => {


                event.preventDefault();


                if (

                    !this.validateForm(

                        form

                    )

                )

                    return;


                this.submitForm(

                    form

                );

            }

        );

    },


    /* =====================================================
       FORM VALIDATION
    ===================================================== */

    setupValidation() {


        const form =

            document.querySelector(

                "#contactForm"

            );


        if (!form)

            return;


        form

            .querySelectorAll(

                "input, textarea, select"

            )

            .forEach(

                field => {


                    field.addEventListener(

                        "blur",

                        () => {


                            this.validateField(

                                field

                            );

                        }

                    );


                    field.addEventListener(

                        "input",

                        () => {


                            this.clearFieldError(

                                field

                            );

                        }

                    );

                }

            );

    },


    /* =====================================================
       VALIDATE COMPLETE FORM
    ===================================================== */

    validateForm(

        form

    ) {


        let valid =

            true;


        const fields =

            form.querySelectorAll(

                "input, textarea, select"

            );


        fields.forEach(

            field => {


                if (

                    !this.validateField(

                        field

                    )

                ) {


                    valid =

                        false;

                }

            }

        );


        if (!valid) {


            this.showNotification(

                "Please complete the required fields.",

                "error"

            );

        }


        return valid;

    },


    /* =====================================================
       VALIDATE FIELD
    ===================================================== */

    validateField(

        field

    ) {


        const value =

            field.value.trim();


        const required =

            field.hasAttribute(

                "required"

            );


        if (

            required &&

            !value

        ) {


            this.showFieldError(

                field,

                "This field is required."

            );


            return false;

        }


        if (

            field.type ===

            "email" &&

            value

        ) {


            const emailPattern =

                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (

                !emailPattern.test(

                    value

                )

            ) {


                this.showFieldError(

                    field,

                    "Please enter a valid email address."

                );


                return false;

            }

        }


        this.clearFieldError(

            field

        );


        return true;

    },


    /* =====================================================
       SHOW FIELD ERROR
    ===================================================== */

    showFieldError(

        field,

        message

    ) {


        field.classList.add(

            "error"

        );


        let error =

            field.parentElement

                ?.querySelector(

                    ".field-error"

                );


        if (!error) {


            error =

                document.createElement(

                    "small"

                );


            error.className =

                "field-error";


            field.parentElement

                ?.appendChild(

                    error

                );

        }


        error.textContent =

            message;

    },


    /* =====================================================
       CLEAR FIELD ERROR
    ===================================================== */

    clearFieldError(

        field

    ) {


        field.classList.remove(

            "error"

        );


        const error =

            field.parentElement

                ?.querySelector(

                    ".field-error"

                );


        if (error)

            error.remove();

    },


    /* =====================================================
       FORM SUBMISSION
    ===================================================== */

    async submitForm(

        form

    ) {


        const submitButton =

            form.querySelector(

                '[type="submit"]'

            );


        const originalHTML =

            submitButton

                ?.innerHTML;


        if (submitButton) {


            submitButton.disabled =

                true;


            submitButton.innerHTML =

                `

                    <i class="fas fa-spinner fa-spin"></i>

                    Sending...

                `;

        }


        const formData =

            new FormData(

                form

            );


        const data =

            Object.fromEntries(

                formData.entries()

            );


        try {


            /* =========================================
               CURRENT DEMO MODE

               This is intentionally local until a
               real form backend is connected.
            ========================================= */


            await new Promise(

                resolve =>

                    setTimeout(

                        resolve,

                        1000

                    )

            );


            console.log(

                "Contact form submission:",

                data

            );


            this.showNotification(

                "Thank you. Your message has been prepared successfully.",

                "success"

            );


            form.reset();


        }

        catch (error) {


            console.error(

                "Contact form error:",

                error

            );


            this.showNotification(

                "Something went wrong. Please try again.",

                "error"

            );

        }


        finally {


            if (submitButton) {


                submitButton.disabled =

                    false;


                submitButton.innerHTML =

                    originalHTML;

            }

        }

    },


    /* =====================================================
       NOTIFICATION SYSTEM
    ===================================================== */

    showNotification(

        message,

        type = "info"

    ) {


        let container =

            document.querySelector(

                "#contactNotifications"

            );


        if (!container) {


            container =

                document.createElement(

                    "div"

                );


            container.id =

                "contactNotifications";


            container.className =

                "contact-notifications";


            document.body.appendChild(

                container

            );

        }


        const notification =

            document.createElement(

                "div"

            );


        notification.className =

                `contact-notification ${type}`;


        notification.innerHTML =

            `

                <span>

                    ${this.escapeHTML(

                        message

                    )}

                </span>


                <button

                    type="button"

                    aria-label="Close notification">

                    <i class="fas fa-times"></i>

                </button>

            `;


        container.appendChild(

            notification

        );


        const closeButton =

            notification.querySelector(

                "button"

            );


        closeButton.addEventListener(

            "click",

            () => {


                notification.remove();

            }

        );


        setTimeout(

            () => {


                notification.classList.add(

                    "hide"

                );


                setTimeout(

                    () =>

                        notification.remove(),

                    300

                );

            },

            5000

        );

    },


    /* =====================================================
       SAFE HTML ESCAPING
    ===================================================== */

    escapeHTML(

        value

    ) {


        return String(

            value ?? ""

        )

        .replace(

            /&/g,

            "&amp;"

        )

        .replace(

            /</g,

            "&lt;"

        )

        .replace(

            />/g,

            "&gt;"

        )

        .replace(

            /"/g,

            "&quot;"

        )

        .replace(

            /'/g,

            "&#039;"

        );

    }

};


/* =========================================================
   INITIALIZE CONTACT SYSTEM
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.contact.init();

    }

);