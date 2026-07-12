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

/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 2
==================================================*/

/*==================================
    MOBILE MENU
==================================*/

const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

function closeMenu() {

    if (!navMenu) return;

    navMenu.classList.remove("active");
    body.classList.remove("menu-open");

}

function openMenu() {

    if (!navMenu) return;

    navMenu.classList.add("active");
    body.classList.add("menu-open");

}

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        body.classList.toggle("menu-open");

    });

}

/*==================================
    CLOSE MENU WHEN LINK IS CLICKED
==================================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});

/*==================================
    CLOSE MENU WITH ESC
==================================*/

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeMenu();

    }

});

/*==================================
    CLICK OUTSIDE MENU
==================================*/

document.addEventListener("click", e => {

    if (!navMenu || !menuButton) return;

    const clickedMenu = navMenu.contains(e.target);
    const clickedButton = menuButton.contains(e.target);

    if (!clickedMenu && !clickedButton) {

        closeMenu();

    }

});

/*==================================
    SMOOTH SCROLL
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/*==================================
    ACTIVE NAVIGATION
==================================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();

/*==================================
    PREVENT DOUBLE CLICK
==================================*/

let scrolling = false;

window.addEventListener("scroll", () => {

    if (scrolling) return;

    scrolling = true;

    requestAnimationFrame(() => {

        updateActiveLink();

        scrolling = false;

    });

});

console.log("Navigation Module Loaded");
/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 3
==================================================*/

/*==================================
    DARK / LIGHT MODE
==================================*/

const themeToggle = document.getElementById("themeToggle");
const bodyElement = document.body;

const THEME_KEY = "portfolio-theme";

/*==================================
    APPLY THEME
==================================*/

function applyTheme(theme) {

    if (theme === "dark") {

        bodyElement.classList.add("dark");

        if (themeToggle) {

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Light Mode"
            );

        }

    } else {

        bodyElement.classList.remove("dark");

        if (themeToggle) {

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Dark Mode"
            );

        }

    }

}

/*==================================
    SAVE THEME
==================================*/

function saveTheme(theme) {

    localStorage.setItem(THEME_KEY, theme);

}

/*==================================
    GET SAVED THEME
==================================*/

function getSavedTheme() {

    return localStorage.getItem(THEME_KEY);

}

/*==================================
    DETECT SYSTEM THEME
==================================*/

function getSystemTheme() {

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

}

/*==================================
    INITIALIZE THEME
==================================*/

function initializeTheme() {

    const savedTheme = getSavedTheme();

    if (savedTheme) {

        applyTheme(savedTheme);

    } else {

        applyTheme(getSystemTheme());

    }

}

initializeTheme();

/*==================================
    TOGGLE THEME
==================================*/

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const newTheme =
            bodyElement.classList.contains("dark")
                ? "light"
                : "dark";

        applyTheme(newTheme);

        saveTheme(newTheme);

    });

}

/*==================================
    SYSTEM THEME CHANGES
==================================*/

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

mediaQuery.addEventListener("change", e => {

    const savedTheme = getSavedTheme();

    /* Only follow system theme
       if the user hasn't chosen one */

    if (!savedTheme) {

        applyTheme(e.matches ? "dark" : "light");

    }

});

/*==================================
    THEME TRANSITION
==================================*/

window.addEventListener("DOMContentLoaded", () => {

    bodyElement.classList.add("theme-ready");

});

/*==================================
    CLEAR THEME (Developer Helper)
==================================*/

function resetThemePreference() {

    localStorage.removeItem(THEME_KEY);

    applyTheme(getSystemTheme());

}

console.log("Theme Module Loaded");

/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 4
==================================================*/

/*==================================
    SCROLL REVEAL ANIMATIONS
==================================*/

const revealElements = document.querySelectorAll(`
    .section,
    .project-card,
    .service-card,
    .timeline-item,
    .education-card,
    .certificate-card,
    .contact-card,
    .stat-card,
    .highlight-card,
    .about-image,
    .business-card
`);

const revealObserver = new IntersectionObserver(

(entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("revealed");

        observer.unobserve(entry.target);

    });

},

{
    threshold:0.15,
    rootMargin:"0px 0px -80px 0px"
}

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});

/*==================================
    STAGGERED CARD ANIMATION
==================================*/

const staggerGroups = [

".projects-grid .project-card",
".services-grid .service-card",
".education-grid .education-card",
".certificate-grid .certificate-card",
".contact-details .contact-card"

];

staggerGroups.forEach(selector => {

    const cards = document.querySelectorAll(selector);

    cards.forEach((card,index)=>{

        card.style.transitionDelay = `${index * 120}ms`;

    });

});

/*==================================
    IMAGE REVEAL
==================================*/

const revealImages = document.querySelectorAll(

".project-image img, .profile-image, .business-profile"

);

const imageObserver = new IntersectionObserver(

(entries, observer)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

entry.target.classList.add("image-visible");

observer.unobserve(entry.target);

});

},

{

threshold:0.2

}

);

revealImages.forEach(image=>{

imageObserver.observe(image);

});

/*==================================
    SKILL BAR ANIMATION
==================================*/

const skillBars = document.querySelectorAll(".progress-fill");

const skillObserver = new IntersectionObserver(

(entries, observer)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const bar = entry.target;

const value = bar.dataset.width || "100";

bar.style.width = value + "%";

observer.unobserve(bar);

});

},

{

threshold:0.5

}

);

skillBars.forEach(bar=>{

bar.style.width="0";

skillObserver.observe(bar);

});

/*==================================
    NUMBER FADE-IN
==================================*/

const fadeNumbers = document.querySelectorAll(".counter");

const numberObserver = new IntersectionObserver(

(entries,observer)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

entry.target.classList.add("revealed");

observer.unobserve(entry.target);

});

},

{

threshold:.5

}

);

fadeNumbers.forEach(item=>{

numberObserver.observe(item);

});

/*==================================
    OPTIONAL RE-ANIMATION
==================================*/

function replayAnimations(){

document.querySelectorAll(".revealed").forEach(item=>{

item.classList.remove("revealed");

revealObserver.observe(item);

});

}

console.log("Animation Engine Loaded");

/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 5
==================================================*/

/*==================================
    ANIMATED COUNTERS
==================================*/

const counters = document.querySelectorAll(".counter");

function animateCounter(counter){

    const target = Number(counter.dataset.target) || 0;
    const duration = Number(counter.dataset.duration) || 2000;

    let start = 0;
    const startTime = performance.now();

    function update(currentTime){

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration,1);

        const ease = 1 - Math.pow(1-progress,3);

        const value = Math.floor(ease * target);

        counter.textContent = value.toLocaleString();

        if(progress < 1){

            requestAnimationFrame(update);

        }else{

            counter.textContent = target.toLocaleString();

        }

    }

    requestAnimationFrame(update);

}

const counterObserver = new IntersectionObserver(

(entries,observer)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

animateCounter(entry.target);

observer.unobserve(entry.target);

});

},

{

threshold:0.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==================================
    CIRCULAR PROGRESS
==================================*/

const circles = document.querySelectorAll(".circle-progress");

circles.forEach(circle=>{

    const value = Number(circle.dataset.percent) || 0;

    const radius = 90;

    const circumference = 2 * Math.PI * radius;

    const progress = circle.querySelector(".progress-ring");

    if(!progress) return;

    progress.style.strokeDasharray = circumference;

    progress.style.strokeDashoffset = circumference;

    const observer = new IntersectionObserver(

    entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const offset = circumference - (value / 100) * circumference;

            progress.style.strokeDashoffset = offset;

            observer.unobserve(circle);

        });

    },

    {

        threshold:0.5

    });

    observer.observe(circle);

});

/*==================================
    KPI CARDS
==================================*/

document.querySelectorAll(".kpi-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.classList.add("active");

});

card.addEventListener("mouseleave",()=>{

card.classList.remove("active");

});

});

/*==================================
    ACHIEVEMENT BADGES
==================================*/

const badges=document.querySelectorAll(".achievement");

badges.forEach((badge,index)=>{

badge.style.animationDelay=`${index*0.2}s`;

});

/*==================================
    EXPERIENCE TIMER
==================================*/

const experience=document.querySelector(".experience-years");

if(experience){

const startYear=2023;

const currentYear=new Date().getFullYear();

experience.textContent=currentYear-startYear;

}

console.log("Statistics Module Loaded");

/*==================================================
    PORTFOLIO V2.0
    Stage 3 - Part 6
==================================================*/

/*==================================
    TYPEWRITER EFFECT
==================================*/

const typewriter = document.querySelector(".typewriter");

const professions = [

"Electrical & Electronic Engineer",

"Telecommunications Engineer",

"Network Infrastructure Engineer",

"Physical Security Systems Engineer",

"SCADA & Automation Engineer",

"Fiber Optic Specialist",

"Microwave Transmission Engineer",

"Cloud Technology Enthusiast"

];

let professionIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typewriter) return;

    const current = professions[professionIndex];

    if(!deleting){

        typewriter.textContent = current.substring(0,letterIndex);

        letterIndex++;

        if(letterIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }else{

        typewriter.textContent = current.substring(0,letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            professionIndex++;

            if(professionIndex >= professions.length){

                professionIndex = 0;

            }

        }

    }

    const speed = deleting ? 45 : 85;

    setTimeout(typeEffect,speed);

}

typeEffect();

/*==================================
    CURSOR BLINK
==================================*/

setInterval(()=>{

    const cursor=document.querySelector(".cursor");

    if(cursor){

        cursor.classList.toggle("blink");

    }

},500);

/*==================================
    GREETING
==================================*/

const greeting=document.querySelector(".greeting");

if(greeting){

    const hour=new Date().getHours();

    let message="Welcome";

    if(hour<12){

        message="Good Morning";

    }

    else if(hour<18){

        message="Good Afternoon";

    }

    else{

        message="Good Evening";

    }

    greeting.textContent=message;

}

/*==================================
    HERO FADE
==================================*/

const hero=document.querySelector(".hero-content");

if(hero){

    hero.animate([

        {

            opacity:0,

            transform:"translateY(40px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:1200,

        easing:"ease-out",

        fill:"forwards"

    });

}

/*==================================
    HERO PARALLAX
==================================*/

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(event)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-event.clientX)/40;

    const y=(window.innerHeight/2-event.clientY)/40;

    heroImage.style.transform=`translate(${x}px,${y}px)`;

});

/*==================================
    HERO BUTTON ANIMATION
==================================*/

document.querySelectorAll(".hero .btn").forEach((button,index)=>{

    button.animate([

        {

            opacity:0,

            transform:"translateY(30px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:1000,

        delay:700+(index*250),

        fill:"forwards",

        easing:"ease-out"

    });

});

console.log("Hero Animation Module Loaded");

