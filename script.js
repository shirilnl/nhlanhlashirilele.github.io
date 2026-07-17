/*=========================================================
NLS Engineering Platform
Version: 5.0
File: script.js

```
Integrated:
- Theme system
- Mobile navigation
- Typing effect
- Scroll progress
- Back to top
- Active navigation
- Counters
- Skill bars
- Reveal animations
- Dynamic content rendering
- QR code generation
- Contact links
- Dynamic vCard download
- Contact form mailto integration
- PWA registration
- AI/Admin integration
```

=========================================================*/

"use strict";

/*=========================================================
GLOBAL APP
=========================================================*/

const App = {

```
config: window.NLS?.config || {},

data: window.NLS?.data || {},

utils: window.NLS?.utils || {},

state: {

    loaded: false,

    theme: "light",

    menuOpen: false,

    typingIndex: 0,

    typingText: "",

    typingDeleting: false,

    observer: null

}
```

};

/*=========================================================
DOM REFERENCES
=========================================================*/

const DOM = {

```
body: document.body,

html: document.documentElement,

preloader:
    document.getElementById("preloader"),

progressBar:
    document.getElementById("progress-bar"),

backToTop:
    document.getElementById("backToTop"),

themeToggle:
    document.getElementById("theme-toggle"),

menuButton:
    document.querySelector(".menu-btn"),

navbar:
    document.querySelector(".navbar"),

mobileOverlay:
    document.querySelector(".mobile-overlay"),

typing:
    document.querySelector(".typing-text")
```

};

/*=========================================================
INITIALIZATION
=========================================================*/

document.addEventListener(
"DOMContentLoaded",
init
);

function init() {

```
console.log(
    "================================"
);

console.log(
    "NLS Engineering Platform"
);

console.log(
    "Version:",
    App.config.app?.version || "5.0"
);

console.log(
    "================================"
);


loadTheme();

initializeNavigation();

initializeBackToTop();

initializeProgressBar();

initializeTyping();

initializeCounters();

initializeSkillBars();

initializeRevealAnimations();

initializeSmoothScroll();

initializeActiveNavigation();

initializeHeaderScroll();

initializeLazyImages();

initializeProjectFilters();

initializeLightbox();

initializeContact();

initializeQR();

initializeDownloads();

initializeCurrentYear();

renderWebsite();

initializePWA();

initializeAI();

initializeAdmin();

initializeGlobalKeyboardShortcuts();

App.state.loaded = true;
```

}

/*=========================================================
PRELOADER
=========================================================*/

function finishLoading() {

```
if (!DOM.preloader) return;


DOM.preloader.classList.add(
    "hide"
);


setTimeout(() => {

    DOM.preloader.remove();

}, 600);
```

}

window.addEventListener(
"load",
finishLoading
);

/*=========================================================
THEME SYSTEM
=========================================================*/

function loadTheme() {

```
const savedTheme =

    localStorage.getItem(
        "theme"
    ) ||

    App.config.app?.theme ||

    "light";


App.state.theme =
    savedTheme;


DOM.html.setAttribute(

    "data-theme",

    savedTheme

);


updateThemeIcon();
```

}

function toggleTheme() {

```
App.state.theme =

    App.state.theme === "light"

        ? "dark"

        : "light";


DOM.html.setAttribute(

    "data-theme",

    App.state.theme

);


localStorage.setItem(

    "theme",

    App.state.theme

);


updateThemeIcon();
```

}

function updateThemeIcon() {

```
if (!DOM.themeToggle)
    return;


const icon =
    DOM.themeToggle.querySelector(
        "i"
    );


if (!icon)
    return;


icon.className =

    App.state.theme === "dark"

        ? "fas fa-sun"

        : "fas fa-moon";
```

}

if (DOM.themeToggle) {

```
DOM.themeToggle.addEventListener(

    "click",

    toggleTheme

);
```

}

/*=========================================================
MOBILE NAVIGATION
=========================================================*/

function initializeNavigation() {

```
if (!DOM.menuButton)
    return;


DOM.menuButton.addEventListener(

    "click",

    toggleMenu

);


DOM.mobileOverlay?.addEventListener(

    "click",

    closeMenu

);


document

    .querySelectorAll(
        ".navbar a"
    )

    .forEach(link => {

        link.addEventListener(

            "click",

            closeMenu

        );

    });
```

}

function toggleMenu() {

```
App.state.menuOpen =

    !App.state.menuOpen;


DOM.navbar?.classList.toggle(

    "active",

    App.state.menuOpen

);


DOM.mobileOverlay?.classList.toggle(

    "active",

    App.state.menuOpen

);


DOM.menuButton?.classList.toggle(

    "active",

    App.state.menuOpen

);
```

}

function closeMenu() {

```
App.state.menuOpen = false;


DOM.navbar?.classList.remove(
    "active"
);


DOM.mobileOverlay?.classList.remove(
    "active"
);


DOM.menuButton?.classList.remove(
    "active"
);
```

}

window.addEventListener(

```
"resize",

() => {

    if (

        window.innerWidth > 992 &&

        App.state.menuOpen

    ) {

        closeMenu();

    }

}
```

);

/*=========================================================
TYPING EFFECT
=========================================================*/

function initializeTyping() {

```
if (!DOM.typing)
    return;


const words =
    App.data.hero?.subtitle || [];


if (!words.length)
    return;


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function type() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        DOM.typing.textContent =

            currentWord.substring(
                0,
                letterIndex++
            );


        if (

            letterIndex >
            currentWord.length

        ) {

            deleting = true;


            setTimeout(
                type,
                1800
            );


            return;

        }

    }

    else {

        DOM.typing.textContent =

            currentWord.substring(
                0,
                letterIndex--
            );


        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;


            if (

                wordIndex >=
                words.length

            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        type,

        deleting
            ? 45
            : 90

    );

}


type();
```

}

/*=========================================================
SCROLL PROGRESS
=========================================================*/

function initializeProgressBar() {

```
if (!DOM.progressBar)
    return;


window.addEventListener(

    "scroll",

    updateProgressBar,

    {
        passive: true
    }

);


updateProgressBar();
```

}

function updateProgressBar() {

```
const scrollTop =
    window.scrollY;


const pageHeight =

    document.documentElement
        .scrollHeight

    -

    window.innerHeight;


if (pageHeight <= 0)
    return;


const progress =

    (scrollTop / pageHeight)
    * 100;


DOM.progressBar.style.width =

    `${progress}%`;
```

}

/*=========================================================
BACK TO TOP
=========================================================*/

function initializeBackToTop() {

```
if (!DOM.backToTop)
    return;


window.addEventListener(

    "scroll",

    () => {

        DOM.backToTop.classList.toggle(

            "show",

            window.scrollY > 500

        );

    },

    {
        passive: true
    }

);


DOM.backToTop.addEventListener(

    "click",

    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

);
```

}

/*=========================================================
SMOOTH SCROLL
=========================================================*/

function initializeSmoothScroll() {

```
document

    .querySelectorAll(
        'a[href^="#"]'
    )

    .forEach(link => {

        link.addEventListener(

            "click",

            function (event) {

                const href =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                )
                    return;


                const target =
                    document.querySelector(
                        href
                    );


                if (!target)
                    return;


                event.preventDefault();


                target.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"

                });

            }

        );

    });
```

}

/*=========================================================
ACTIVE NAVIGATION
=========================================================*/

function initializeActiveNavigation() {

```
const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


if (
    !sections.length ||
    !navLinks.length
)
    return;


window.addEventListener(

    "scroll",

    () => {

        let current = "";


        sections.forEach(section => {

            const top =

                section.offsetTop
                - 160;


            const bottom =

                top +
                section.offsetHeight;


            if (

                window.scrollY >= top &&

                window.scrollY < bottom

            ) {

                current =
                    section.id;

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (

                link.getAttribute(
                    "href"
                )

                ===

                `#${current}`

            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    },

    {
        passive: true
    }

);
```

}

/*=========================================================
HEADER SCROLL EFFECT
=========================================================*/

function initializeHeaderScroll() {

```
const header =
    document.querySelector(
        "header"
    );


if (!header)
    return;


window.addEventListener(

    "scroll",

    () => {

        header.classList.toggle(

            "scrolled",

            window.scrollY > 20

        );

    },

    {
        passive: true
    }

);
```

}

/*=========================================================
LAZY IMAGES
=========================================================*/

function initializeLazyImages() {

```
const images =
    document.querySelectorAll(
        "img[data-src]"
    );


if (
    !images.length ||
    !("IntersectionObserver" in window)
)
    return;


const observer =

    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                )
                    return;


                const image =
                    entry.target;


                image.src =
                    image.dataset.src;


                image.removeAttribute(
                    "data-src"
                );


                observer.unobserve(
                    image
                );

            });

        },

        {
            threshold: 0.2
        }

    );


images.forEach(image => {

    observer.observe(image);

});
```

}

/*=========================================================
COUNTER ANIMATION
=========================================================*/

function initializeCounters() {

```
const counters =
    document.querySelectorAll(
        ".counter"
    );


if (
    !counters.length ||
    !("IntersectionObserver" in window)
)
    return;


const observer =

    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                )
                    return;


                animateCounter(
                    entry.target
                );


                observer.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: 0.4
        }

    );


counters.forEach(counter => {

    observer.observe(counter);

});
```

}

function animateCounter(counter) {

```
const target =
    Number(
        counter.dataset.target
    );


const suffix =
    counter.dataset.suffix || "";


if (
    Number.isNaN(target)
)
    return;


const duration =
    1800;


const start =
    performance.now();


function update(now) {

    const progress =

        Math.min(

            (now - start)
            / duration,

            1

        );


    const value =

        Math.floor(
            progress * target
        );


    counter.textContent =

        value + suffix;


    if (
        progress < 1
    ) {

        requestAnimationFrame(
            update
        );

    }

    else {

        counter.textContent =
            target + suffix;

    }

}


requestAnimationFrame(
    update
);
```

}

/*=========================================================
SKILL BARS
=========================================================*/

function initializeSkillBars() {

```
const bars =
    document.querySelectorAll(
        ".skill-progress"
    );


if (
    !bars.length ||
    !("IntersectionObserver" in window)
)
    return;


const observer =

    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                )
                    return;


                const bar =
                    entry.target;


                const progress =
                    bar.dataset.progress;


                if (progress) {

                    bar.style.width =
                        `${progress}%`;

                }


                observer.unobserve(
                    bar
                );

            });

        },

        {
            threshold: 0.3
        }

    );


bars.forEach(bar => {

    bar.style.width =
        "0%";


    observer.observe(bar);

});
```

}

/*=========================================================
SECTION REVEAL
=========================================================*/

function initializeRevealAnimations() {

```
const elements =

    document.querySelectorAll(

        ".section, " +

        ".stat-card, " +

        ".project-card, " +

        ".certificate-card, " +

        ".service-card, " +

        ".achievement-card, " +

        ".education-card, " +

        ".technology-card"

    );


if (
    !elements.length ||
    !("IntersectionObserver" in window)
)
    return;


const observer =

    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                )
                    return;


                entry.target.classList.add(
                    "animate"
                );


                observer.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: 0.15
        }

    );


elements.forEach(element => {

    observer.observe(element);

});
```

}

/*=========================================================
DYNAMIC PROFILE
=========================================================*/

function populateProfile() {

```
const profile =
    App.config.profile;


if (!profile)
    return;


if (
    profile.fullName &&
    document.title
) {

    document.title =

        `${profile.fullName} | ` +
        `${profile.title || ""}`;

}


document

    .querySelectorAll(
        "[data-name]"
    )

    .forEach(element => {

        element.textContent =
            profile.fullName || "";

    });


document

    .querySelectorAll(
        "[data-title]"
    )

    .forEach(element => {

        element.textContent =
            profile.title || "";

    });


document

    .querySelectorAll(
        "[data-headline]"
    )

    .forEach(element => {

        element.textContent =
            profile.headline || "";

    });
```

}

/*=========================================================
RENDER PROJECTS
=========================================================*/

function renderProjects() {

```
const container =
    document.getElementById(
        "projectsGrid"
    );


if (!container)
    return;


const projects =
    Array.isArray(
        App.data.projects
    )

        ? App.data.projects

        : [];


container.innerHTML = "";


projects.forEach(project => {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "project-card";


    article.dataset.category =
        project.category || "";


    const technologies =

        Array.isArray(
            project.technologies
        )

            ? project.technologies

            : [];


    article.innerHTML = `

        <img

            src="${escapeHTML(
                project.image || ""
            )}"

            alt="${escapeHTML(
                project.title || ""
            )}"

            loading="lazy">

        <div class="project-content">

            <span class="project-tag">

                ${escapeHTML(
                    project.category || ""
                )}

            </span>

            <h3>

                ${escapeHTML(
                    project.title || ""
                )}

            </h3>

            <p>

                ${escapeHTML(
                    project.description || ""
                )}

            </p>

            <div class="project-technologies">

                ${technologies

                    .map(
                        technology =>
                            `<span>${escapeHTML(
                                technology
                            )}</span>`
                    )

                    .join("")}

            </div>

        </div>

    `;


    container.appendChild(
        article
    );

});


initializeRevealAnimations();
```

}

/*=========================================================
PROJECT FILTERS
=========================================================*/

function initializeProjectFilters() {

```
const buttons =
    document.querySelectorAll(
        ".filter-btn"
    );


const grid =
    document.getElementById(
        "projectsGrid"
    );


if (
    !buttons.length ||
    !grid
)
    return;


buttons.forEach(button => {

    button.addEventListener(

        "click",

        () => {

            const filter =
                button.dataset.filter;


            buttons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            const projects =
                grid.querySelectorAll(
                    ".project-card"
                );


            projects.forEach(project => {

                const category =

                    (

                        project.dataset.category
                        || ""

                    )

                    .toLowerCase();


                const matches =

                    filter === "all"

                    ||

                    category.includes(
                        filter.toLowerCase()
                    );


                project.style.display =

                    matches
                        ? ""
                        : "none";

            });

        }

    );

});
```

}

/*=========================================================
RENDER CERTIFICATES
=========================================================*/

function renderCertificates() {

```
const container =
    document.getElementById(
        "certificateGrid"
    );


if (!container)
    return;


const certificates =

    Array.isArray(
        App.data.certificates
    )

        ? App.data.certificates

        : [];


container.innerHTML = "";


certificates.forEach(cert => {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "certificate-card";


    article.innerHTML = `

        <img

            src="${escapeHTML(
                cert.image || ""
            )}"

            alt="${escapeHTML(
                cert.title || ""
            )}"

            loading="lazy">

        <h3>

            ${escapeHTML(
                cert.title || ""
            )}

        </h3>

        <button

            class="btn btn-primary"

            type="button"

            data-certificate-file=

                "${escapeHTML(
                    cert.file || ""
                )}">

            View Certificate

        </button>

    `;


    const button =
        article.querySelector(
            "[data-certificate-file]"
        );


    button?.addEventListener(

        "click",

        () => {

            const file =
                button.dataset
                    .certificateFile;


            if (file) {

                window.open(
                    file,
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        }

    );


    container.appendChild(
        article
    );

});
```

}

/*=========================================================
RENDER DOWNLOADS
=========================================================*/

function renderDownloads() {

```
const container =
    document.getElementById(
        "downloadsGrid"
    );


if (!container)
    return;


const downloads =

    Array.isArray(
        App.data.downloads
    )

        ? App.data.downloads

        : [];


container.innerHTML = "";


downloads.forEach(file => {

    const link =
        document.createElement(
            "a"
        );


    link.className =
        "download-card";


    link.href =
        file.file || "#";


    link.download =
        "";


    link.innerHTML = `

        <i class="fas ${
            escapeHTML(
                file.icon || "fa-file"
            )
        }"></i>

        <span>

            ${escapeHTML(
                file.name || "Download"
            )}

        </span>

    `;


    container.appendChild(
        link
    );

});
```

}

/*=========================================================
WEBSITE RENDER
=========================================================*/

function renderWebsite() {

```
populateProfile();

renderProjects();

renderCertificates();

renderDownloads();
```

}

/*=========================================================
QR CODE
=========================================================*/

function initializeQR() {

```
const qrContainer =
    document.getElementById(
        "qrCode"
    );


if (!qrContainer)
    return;


const qrConfig =
    App.config.qr || {};


if (
    qrConfig.enabled === false
)
    return;


if (
    typeof QRCode === "undefined"
) {

    console.warn(
        "QRCode library not loaded."
    );


    return;

}


const portfolioURL =

    qrConfig.portfolioURL

    ||

    window.location.href;


qrContainer.innerHTML = "";


new QRCode(

    qrContainer,

    {

        text:
            portfolioURL,


        width:
            220,


        height:
            220,


        colorDark:
            "#111827",


        colorLight:
            "#ffffff",


        correctLevel:
            QRCode.CorrectLevel.H

    }

);
```

}

/*=========================================================
CONTACT SYSTEM
=========================================================*/

function initializeContact() {

```
const contact =
    App.config.contact;


if (!contact)
    return;


const phone =
    contact.phone || "";


const email =
    contact.email || "";


const whatsapp =
    contact.whatsapp || "";


const linkedin =
    contact.linkedin || "";


const facebook =
    contact.facebook || "";


document

    .querySelectorAll(
        "[data-phone]"
    )

    .forEach(element => {

        element.href =
            `tel:${phone}`;


        element.setAttribute(
            "aria-label",
            `Call ${phone}`
        );

    });


document

    .querySelectorAll(
        "[data-email]"
    )

    .forEach(element => {

        element.href =
            `mailto:${email}`;


        element.setAttribute(
            "aria-label",
            `Email ${email}`
        );

    });


document

    .querySelectorAll(
        "[data-whatsapp]"
    )

    .forEach(element => {

        element.href =
            `https://wa.me/${whatsapp}`;


        element.target =
            "_blank";


        element.rel =
            "noopener noreferrer";


        element.setAttribute(
            "aria-label",
            "Contact on WhatsApp"
        );

    });


document

    .querySelectorAll(
        "[data-linkedin]"
    )

    .forEach(element => {

        element.href =
            linkedin;


        element.target =
            "_blank";


        element.rel =
            "noopener noreferrer";

    });


document

    .querySelectorAll(
        "[data-facebook]"
    )

    .forEach(element => {

        element.href =
            facebook;


        element.target =
            "_blank";


        element.rel =
            "noopener noreferrer";

    });


initializeVCard();

initializeContactForm();
```

}

/*=========================================================
DYNAMIC VCARD
=========================================================*/

function initializeVCard() {

```
const contact =
    App.config.contact;


const profile =
    App.config.profile;


if (
    !contact ||
    !profile
)
    return;


const website =

    App.config.qr?.portfolioURL

    ||

    window.location.href;


const vCard = [

    "BEGIN:VCARD",

    "VERSION:3.0",

    `FN:${escapeVCard(
        profile.fullName
    )}`,

    `TITLE:${escapeVCard(
        profile.title
    )}`,

    `TEL;TYPE=CELL:${escapeVCard(
        contact.phone
    )}`,

    `EMAIL:${escapeVCard(
        contact.email
    )}`,

    `URL:${escapeVCard(
        website
    )}`,

    "END:VCARD"

].join("\r\n");


const blob =
    new Blob(

        [vCard],

        {
            type:
                "text/vcard;charset=utf-8"
        }

    );


const url =
    URL.createObjectURL(
        blob
    );


document

    .querySelectorAll(
        'a[href="vcard.vcf"]'
    )

    .forEach(link => {

        link.href =
            url;


        link.download =
            "Nhlanhla_Lucky_Shirilele.vcf";

    });


window.NLS_VCARD = {

    content:
        vCard,

    url

};
```

}

/*=========================================================
CONTACT FORM
=========================================================*/

function initializeContactForm() {

```
const form =
    document.getElementById(
        "contactForm"
    );


if (!form)
    return;


form.addEventListener(

    "submit",

    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            )?.value.trim() || "";


        const email =
            document.getElementById(
                "email"
            )?.value.trim() || "";


        const subject =
            document.getElementById(
                "subject"
            )?.value.trim() || "";


        const message =
            document.getElementById(
                "message"
            )?.value.trim() || "";


        const contact =
            App.config.contact;


        if (
            !contact?.email
        )
            return;


        const emailSubject =

            subject

            ||

            `Portfolio enquiry from ${name}`;


        const emailBody =
```

`Name: ${name}

Email: ${email}

Message:

${message}`;

```
        const mailto =

            `mailto:${contact.email}`

            +

            `?subject=${encodeURIComponent(
                emailSubject
            )}`

            +

            `&body=${encodeURIComponent(
                emailBody
            )}`;


        window.location.href =
            mailto;

    }

);
```

}

/*=========================================================
DOWNLOAD SYSTEM
=========================================================*/

function initializeDownloads() {

```
document

    .querySelectorAll(
        "[data-download]"
    )

    .forEach(button => {

        button.addEventListener(

            "click",

            function () {

                const file =
                    this.dataset.download;


                if (!file)
                    return;


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    file;


                link.download =
                    "";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();

            }

        );

    });
```

}

/*=========================================================
LIGHTBOX
=========================================================*/

function initializeLightbox() {

```
const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


if (
    !lightbox ||
    !lightboxImage
)
    return;


const closeButton =
    lightbox.querySelector(
        ".lightbox-close"
    );


document

    .querySelectorAll(
        ".gallery-item img"
    )

    .forEach(image => {

        image.addEventListener(

            "click",

            () => {

                lightboxImage.src =
                    image.src;


                lightboxImage.alt =
                    image.alt;


                lightbox.classList.add(
                    "active"
                );

            }

        );

    });


closeButton?.addEventListener(

    "click",

    () => {

        lightbox.classList.remove(
            "active"
        );

    }

);


lightbox.addEventListener(

    "click",

    event => {

        if (
            event.target === lightbox
        ) {

            lightbox.classList.remove(
                "active"
            );

        }

    }

);
```

}

/*=========================================================
CURRENT YEAR
=========================================================*/

function initializeCurrentYear() {

```
const year =
    new Date().getFullYear();


document

    .querySelectorAll(
        ".current-year"
    )

    .forEach(element => {

        element.textContent =
            year;

    });
```

}

/*=========================================================
COPY TO CLIPBOARD
=========================================================*/

async function copyText(text) {

```
try {

    await navigator.clipboard
        .writeText(text);


    showToast(
        "Copied successfully."
    );

}

catch {

    showToast(
        "Copy failed."
    );

}
```

}

window.copyText =
copyText;

/*=========================================================
TOAST
=========================================================*/

function showToast(message) {

```
const toast =
    document.createElement(
        "div"
    );


toast.className =
    "toast";


toast.textContent =
    message;


document.body.appendChild(
    toast
);


requestAnimationFrame(() => {

    toast.classList.add(
        "show"
    );

});


setTimeout(() => {

    toast.classList.remove(
        "show"
    );


    setTimeout(() => {

        toast.remove();

    }, 400);

}, 3000);
```

}

/*=========================================================
PWA
=========================================================*/

function initializePWA() {

```
if (
    !("serviceWorker" in navigator)
)
    return;


navigator.serviceWorker

    .register(
        "service-worker.js"
    )

    .then(() => {

        console.log(
            "Service Worker Registered."
        );

    })

    .catch(error => {

        console.error(
            "Service Worker Error:",
            error
        );

    });
```

}

/*=========================================================
AI
=========================================================*/

function initializeAI() {

```
if (
    typeof AI !== "undefined" &&
    typeof AI.initialize === "function"
) {

    AI.initialize();

}
```

}

/*=========================================================
ADMIN
=========================================================*/

function initializeAdmin() {

```
if (
    typeof Admin !== "undefined" &&
    typeof Admin.initialize === "function"
) {

    Admin.initialize();

}
```

}

/*=========================================================
KEYBOARD SHORTCUTS
=========================================================*/

function initializeGlobalKeyboardShortcuts() {

```
document.addEventListener(

    "keydown",

    event => {

        if (
            event.key === "Escape"
        ) {

            closeMenu();

            document

                .querySelector(
                    "#lightbox.active"
                )

                ?.classList.remove(
                    "active"
                );

        }

    }

);
```

}

/*=========================================================
HTML ESCAPE
=========================================================*/

function escapeHTML(value) {

```
return String(value ?? "")

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
```

}

/*=========================================================
VCARD ESCAPE
=========================================================*/

function escapeVCard(value) {

```
return String(value ?? "")

    .replace(
        /\\/g,
        "\\\\"
    )

    .replace(
        /\n/g,
        "\\n"
    )

    .replace(
        /;/g,
        "\\;"
    )

    .replace(
        /,/g,
        "\\,"
    );
```

}

/*=========================================================
PAGE VISIBILITY
=========================================================*/

document.addEventListener(

```
"visibilitychange",

() => {

    if (
        document.hidden
    ) {

        console.log(
            "Page hidden"
        );

    }

    else {

        console.log(
            "Page active"
        );

    }

}
```

);

/*=========================================================
GLOBAL ERROR HANDLING
=========================================================*/

window.addEventListener(

```
"error",

event => {

    console.error(

        "JavaScript Error:",

        event.message

    );

}
```

);

window.addEventListener(

```
"unhandledrejection",

event => {

    console.error(

        "Promise Error:",

        event.reason

    );

}
```

);

/*=========================================================
GLOBAL APP
=========================================================*/

window.App =
App;

/*=========================================================
READY
=========================================================*/

console.log(

```
"%cNLS Engineering Platform Loaded",

"color:#0066ff;font-size:16px;font-weight:bold"
```

);
