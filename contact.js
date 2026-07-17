/* =====================================================
   NLS PORTFOLIO CONTACT SYSTEM
   Milestone 3 — Part 1/5
===================================================== */


/* =====================================================
   WAIT FOR DOM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ================================================
       CHECK CONFIGURATION
    ================================================= */

    if (
        typeof PORTFOLIO_CONFIG === "undefined"
    ) {

        console.error(
            "PORTFOLIO_CONFIG is not available."
        );

        return;

    }


    const config =
        PORTFOLIO_CONFIG;



    /* ================================================
       CONTACT URLS
    ================================================= */


    const phoneUrl =
        `tel:${config.phone}`;


    const whatsappUrl =
        `https://wa.me/${config.whatsapp}`;


    const emailUrl =
        `mailto:${config.email}`;


    const linkedinUrl =
        config.linkedin;


    const facebookUrl =
        config.facebook;



    /* ================================================
       APPLY PHONE LINKS
    ================================================= */


    document
        .querySelectorAll("[data-phone]")
        .forEach(element => {


            element.href =
                phoneUrl;


            element.setAttribute(
                "aria-label",
                `Call ${config.name}`
            );


        });



    /* ================================================
       APPLY WHATSAPP LINKS
    ================================================= */


    document
        .querySelectorAll("[data-whatsapp]")
        .forEach(element => {


            element.href =
                whatsappUrl;


            element.target =
                "_blank";


            element.rel =
                "noopener noreferrer";


            element.setAttribute(
                "aria-label",
                `Contact ${config.name} on WhatsApp`
            );


        });



    /* ================================================
       APPLY EMAIL LINKS
    ================================================= */


    document
        .querySelectorAll("[data-email]")
        .forEach(element => {


            element.href =
                emailUrl;


            element.setAttribute(
                "aria-label",
                `Email ${config.name}`
            );


        });



    /* ================================================
       APPLY LINKEDIN LINKS
    ================================================= */


    document
        .querySelectorAll("[data-linkedin]")
        .forEach(element => {


            element.href =
                linkedinUrl;


            element.target =
                "_blank";


            element.rel =
                "noopener noreferrer";


        });



    /* ================================================
       APPLY FACEBOOK LINKS
    ================================================= */


    document
        .querySelectorAll("[data-facebook]")
        .forEach(element => {


            element.href =
                facebookUrl;


            element.target =
                "_blank";


            element.rel =
                "noopener noreferrer";


        });



    /* ================================================
       GENERATE QR CODE
    ================================================= */


    const qrContainer =
        document.getElementById(
            "qrCode"
        );


    if (
        qrContainer &&
        typeof QRCode !== "undefined"
    ) {


        qrContainer.innerHTML =
            "";


        new QRCode(

            qrContainer,

            {

                text:
                    config.website,


                width:
                    220,


                height:
                    220,


                colorDark:
                    "#0f172a",


                colorLight:
                    "#ffffff",


                correctLevel:
                    QRCode.CorrectLevel.H

            }

        );


    }



    /* ================================================
       CREATE VCARD
    ================================================= */


    const vCard = [

        "BEGIN:VCARD",

        "VERSION:3.0",

        `FN:${config.name}`,

        `TITLE:${config.title}`,

        `TEL;TYPE=CELL:${config.phone}`,

        `EMAIL:${config.email}`,

        `URL:${config.website}`,

        `NOTE:${config.description}`,

        `ADR;TYPE=WORK:;;${config.location}`,

        "END:VCARD"

    ].join("\r\n");



    /* ================================================
       CREATE DOWNLOAD LINK
    ================================================= */


    const vCardBlob =
        new Blob(

            [vCard],

            {
                type:
                    "text/vcard;charset=utf-8"
            }

        );


    const vCardUrl =
        URL.createObjectURL(
            vCardBlob
        );



    /* ================================================
       UPDATE VCARD DOWNLOAD LINKS
    ================================================= */


    document
        .querySelectorAll(
            'a[href="vcard.vcf"]'
        )
        .forEach(link => {


            link.href =
                vCardUrl;


            link.download =
                "Nhlanhla_Lucky_Shirilele.vcf";


        });



    /* ================================================
       CONTACT FORM
    ================================================= */


    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {


        contactForm.addEventListener(
            "submit",
            event => {


                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const subject =
                    document.getElementById(
                        "subject"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();



                const emailSubject =
                    subject ||
                    `Portfolio enquiry from ${name}`;



                const emailBody =

`Name: ${name}

Email: ${email}

Message:

${message}`;



                const mailtoUrl =

                    `mailto:${config.email}` +

                    `?subject=${encodeURIComponent(
                        emailSubject
                    )}` +

                    `&body=${encodeURIComponent(
                        emailBody
                    )}`;



                window.location.href =
                    mailtoUrl;


            }

        );


    }



    /* ================================================
       EXPOSE CONTACT DATA
    ================================================= */


    window.NLS_CONTACT = {


        config,


        vCard,


        vCardUrl,


        phoneUrl,


        whatsappUrl,


        emailUrl,


        linkedinUrl,


        facebookUrl


    };


});