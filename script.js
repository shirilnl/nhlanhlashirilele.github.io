/* ============================================
   NHLANHLA LUCKY SHIRILELE
   Digital Contact Card
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    // Fade in page
    document.body.classList.add("loaded");

    // Button animation
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    // QR Code hover animation

    const qr = document.querySelector(".qr");

    if(qr){

        qr.addEventListener("mouseenter",()=>{

            qr.style.transform="scale(1.05)";

        });

        qr.addEventListener("mouseleave",()=>{

            qr.style.transform="scale(1)";

        });

    }

    console.log("Website Loaded Successfully");

});