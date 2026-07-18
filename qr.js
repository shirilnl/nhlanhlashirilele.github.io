/* =========================================================
   NLS ENGINEERING PORTFOLIO
   qr.js
   Milestone 4 — Part 2
   Dynamic QR & Digital Contact Card System
========================================================= */

"use strict";


/* =========================================================
   GLOBAL NAMESPACE
========================================================= */

window.NLS = window.NLS || {};

NLS.qr = {


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {

        this.generatePortfolioQR();

        this.generateWhatsAppQR();

        this.generateContactQR();

        this.setupDownloadButtons();

        this.setupShareButton();

        this.setupVCardDownload();

        console.log(

            "NLS QR System initialized successfully."

        );

    },


    /* =====================================================
       GET CONTACT DATA
    ===================================================== */

    getContactData() {


        const config =

            window.NLS?.config ||

            {};


        const contact =

            config.contact ||

            {};


        return {


            name:

                contact.name ||

                "Nhlanhla Lucky Shirilele",


            phone:

                contact.phone ||

                "",


            email:

                contact.email ||

                "",


            whatsapp:

                contact.whatsapp ||

                "",


            linkedin:

                contact.linkedin ||

                "",


            website:

                contact.website ||

                window.location.origin

        };

    },


    /* =====================================================
       CREATE QR CODE
    ===================================================== */

    createQRCode(

        container,

        value,

        size = 220

    ) {


        if (!container)

            return;


        if (

            typeof QRCode ===

            "undefined"

        ) {


            console.warn(

                "QRCode library not found."

            );


            return;

        }


        container.innerHTML = "";


        new QRCode(

            container,

            {

                text:

                    value,


                width:

                    size,


                height:

                    size,


                correctLevel:

                    QRCode.CorrectLevel.H

            }

        );

    },


    /* =====================================================
       PORTFOLIO QR CODE
    ===================================================== */

    generatePortfolioQR() {


        const containers =

            document.querySelectorAll(

                "[data-qr-portfolio]"

            );


        containers.forEach(

            container => {


                this.createQRCode(

                    container,

                    window.location.href

                );

            }

        );

    },


    /* =====================================================
       WHATSAPP QR CODE
    ===================================================== */

    generateWhatsAppQR() {


        const contact =

            this.getContactData();


        if (!contact.whatsapp)

            return;


        const cleanNumber =

            String(

                contact.whatsapp

            )

            .replace(

                /[^0-9]/g,

                ""

            );


        const whatsappURL =

            `https://wa.me/${cleanNumber}`;


        document

            .querySelectorAll(

                "[data-qr-whatsapp]"

            )

            .forEach(

                container => {


                    this.createQRCode(

                        container,

                        whatsappURL

                    );

                }

            );

    },


    /* =====================================================
       DIGITAL CONTACT CARD QR
    ===================================================== */

    generateContactQR() {


        const contact =

            this.getContactData();


        const vCard =

            [

                "BEGIN:VCARD",

                "VERSION:3.0",

                `FN:${contact.name}`,

                `TEL:${contact.phone}`,

                `EMAIL:${contact.email}`,

                `URL:${contact.website}`,

                "END:VCARD"

            ]

            .join(

                "\n"

            );


        document

            .querySelectorAll(

                "[data-qr-contact]"

            )

            .forEach(

                container => {


                    this.createQRCode(

                        container,

                        vCard

                    );

                }

            );

    },


    /* =====================================================
       DOWNLOAD QR CODE
    ===================================================== */

    setupDownloadButtons() {


        document

            .querySelectorAll(

                "[data-download-qr]"

            )

            .forEach(

                button => {


                    button.addEventListener(

                        "click",

                        () => {


                            const container =

                                document.querySelector(

                                    button.dataset

                                        .downloadQr ||

                                    "[data-qr-portfolio]"

                                );


                            const image =

                                container

                                    ?.querySelector(

                                        "img"

                                    );


                            if (!image) {


                                this.showMessage(

                                    "QR code is not available yet."

                                );


                                return;

                            }


                            const link =

                                document.createElement(

                                    "a"

                                );


                            link.href =

                                image.src;


                            link.download =

                                "nhlanhla-shirilele-qr-code.png";


                            link.click();

                        }

                    );

                }

            );

    },


    /* =====================================================
       SHARE CONTACT CARD
    ===================================================== */

    setupShareButton() {


        document

            .querySelectorAll(

                "[data-share-contact]"

            )

            .forEach(

                button => {


                    button.addEventListener(

                        "click",

                        async () => {


                            const contact =

                                this.getContactData();


                            const shareData = {


                                title:

                                    contact.name,


                                text:

                                    "View my professional digital contact card.",


                                url:

                                    contact.website

                            };


                            if (

                                navigator.share

                            ) {


                                try {


                                    await navigator.share(

                                        shareData

                                    );

                                }

                                catch (error) {


                                    if (

                                        error.name !==

                                        "AbortError"

                                    ) {


                                        console.error(

                                            error

                                        );

                                    }

                                }

                            }

                            else {


                                await navigator

                                    .clipboard

                                    .writeText(

                                        contact.website

                                    );


                                this.showMessage(

                                    "Portfolio link copied."

                                );

                            }

                        }

                    );

                }

            );

    },


    /* =====================================================
       VCARD DOWNLOAD
    ===================================================== */

    setupVCardDownload() {


        document

            .querySelectorAll(

                "[data-download-vcard]"

            )

            .forEach(

                button => {


                    button.addEventListener(

                        "click",

                        () => {


                            const contact =

                                this.getContactData();


                            const vCard =

                                [

                                    "BEGIN:VCARD",

                                    "VERSION:3.0",

                                    `FN:${contact.name}`,

                                    `TEL:${contact.phone}`,

                                    `EMAIL:${contact.email}`,

                                    `URL:${contact.website}`,

                                    "END:VCARD"

                                ]

                                .join(

                                    "\n"

                                );


                            const blob =

                                new Blob(

                                    [

                                        vCard

                                    ],

                                    {

                                        type:

                                            "text/vcard"

                                    }

                                );


                            const url =

                                URL.createObjectURL(

                                    blob

                                );


                            const link =

                                document.createElement(

                                    "a"

                                );


                            link.href =

                                url;


                            link.download =

                                "nhlanhla-shirilele.vcf";


                            link.click();


                            URL.revokeObjectURL(

                                url

                            );

                        }

                    );

                }

            );

    },


    /* =====================================================
       MESSAGE
    ===================================================== */

    showMessage(

        message

    ) {


        if (

            window.NLS?.contact?.showNotification

        ) {


            NLS.contact.showNotification(

                message,

                "success"

            );


            return;

        }


        alert(

            message

        );

    }

};


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.qr.init();

    }

);
