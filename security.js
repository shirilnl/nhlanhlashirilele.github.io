/* =========================================================
   NLS ENGINEERING PORTFOLIO
   security.js
   Security Hardening System
========================================================= */

"use strict";


window.NLS = window.NLS || {};


NLS.security = {


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.secureExternalLinks();


        this.preventUnsafeTargetBlank();


        this.protectContactForm();


        this.preventBasicInjection();


        this.disableDangerousDragActions();


        console.log(

            "NLS Security System initialized."

        );

    },


    /* =====================================================
       SECURE EXTERNAL LINKS
    ===================================================== */

    secureExternalLinks() {


        const links =

            document.querySelectorAll(

                'a[target="_blank"]'

            );


        links.forEach(

            link => {


                const rel =

                    link.getAttribute(

                        "rel"

                    )

                    || "";


                const values =

                    new Set(

                        rel

                            .split(

                                " "

                            )

                            .filter(

                                Boolean

                            )

                    );


                values.add(

                    "noopener"

                );


                values.add(

                    "noreferrer"

                );


                link.setAttribute(

                    "rel",

                    Array.from(

                        values

                    ).join(

                        " "

                    )

                );

            }

        );

    },


    /* =====================================================
       PREVENT UNSAFE TARGET BLANK
    ===================================================== */

    preventUnsafeTargetBlank() {


        document.addEventListener(

            "click",

            event => {


                const link =

                    event.target.closest(

                        "a"

                    );


                if (

                    !link

                )

                    return;


                if (

                    link.target !==

                    "_blank"

                )

                    return;


                if (

                    link.rel.includes(

                        "noopener"

                    )

                )

                    return;


                link.rel =

                    "noopener noreferrer";

            }

        );

    },


    /* =====================================================
       CONTACT FORM PROTECTION
    ===================================================== */

    protectContactForm() {


        const forms =

            document.querySelectorAll(

                "form"

            );


        forms.forEach(

            form => {


                form.addEventListener(

                    "submit",

                    event => {


                        const fields =

                            form.querySelectorAll(

                                "input, textarea"

                            );


                        let valid =

                            true;


                        fields.forEach(

                            field => {


                                if (

                                    field.type ===

                                    "hidden"

                                )

                                    return;


                                if (

                                    field.name ===

                                    "_honey"

                                )

                                    return;


                                field.value =

                                    this.sanitize(

                                        field.value

                                    );


                                if (

                                    field.required

                                    &&

                                    !field.value.trim()

                                ) {


                                    valid =

                                        false;

                                }

                            }

                        );


                        if (

                            !valid

                        ) {


                            event.preventDefault();


                            console.warn(

                                "Form validation failed."

                            );

                        }

                    }

                );

            }

        );

    },


    /* =====================================================
       BASIC INPUT SANITIZATION
    ===================================================== */

    sanitize(value) {


        if (

            typeof value !==

            "string"

        )

            return value;


        return value

            .replace(

                /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,

                ""

            )

            .replace(

                /javascript:/gi,

                ""

            )

            .replace(

                /on\w+\s*=/gi,

                ""

            )

            .trim();

    },


    /* =====================================================
       PREVENT DANGEROUS DRAG ACTIONS
    ===================================================== */

    disableDangerousDragActions() {


        document.addEventListener(

            "dragstart",

            event => {


                const target =

                    event.target;


                if (

                    target.tagName ===

                    "IMG"

                ) {


                    target.setAttribute(

                        "draggable",

                        "false"

                    );

                }

            }

        );

    }

};


document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.security.init();

    }

);
