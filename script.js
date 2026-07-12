/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 1
==================================================*/

"use strict";

/*==================================
    PAGE LOADER
==================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*==================================
    STICKY NAVIGATION
==================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/*==================================
    SCROLL PROGRESS BAR
==================================*/

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*==================================
    BACK TO TOP BUTTON
==================================*/

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

if (backTop) {

    backTop.addEventListener("click", e => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================
    FOOTER YEAR
==================================*/

const yearElement = document.querySelector("#year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

console.log("Portfolio Version 2.0 Loaded Successfully");
