/* =========================================================
   NLS ENGINEERING PORTFOLIO
   script.js
   Final Integrated UI Controller
========================================================= */

"use strict";


/* =========================================================
   GLOBAL NLS NAMESPACE
========================================================= */

window.NLS = window.NLS || {};

const NLS = window.NLS;


/* =========================================================
   APPLICATION STATE
========================================================= */

NLS.state = NLS.state || {

    theme: "light",

    mobileMenuOpen: false,

    projectFilter: "all",

    projectSearch: "",

    initialized: false

};


/* =========================================================
   SAFE DATA ACCESS
========================================================= */

const portfolioData =

    NLS.data || {};


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initializeTheme();

        initializeNavigation();

        initializeSmoothScrolling();

        initializeHeader();

        initializeScrollProgress();

        initializeBackToTop();

        initializeTypingEffect();

        initializeProjectSystem();

        initializeCertificateSystem();

        initializeGallery();

        initializeContactSystem();

        initializeQRCode();

        initializeDownloadCenter();

        initializeRevealAnimations();

        initializeLazyLoading();

        initializeCurrentYear();

        initializeKeyboardControls();

        NLS.state.initialized = true;

        console.log(

            "NLS Portfolio UI initialized successfully."

        );

    }

);


/* =========================================================
   THEME SYSTEM
========================================================= */

function initializeTheme() {

    const savedTheme =

        localStorage.getItem(

            "nls-theme"

        );


    const preferredTheme =

        savedTheme ||

        (

            window.matchMedia &&

            window.matchMedia(

                "(prefers-color-scheme: dark)"

            ).matches

                ? "dark"

                : "light"

        );


    NLS.state.theme =

        preferredTheme;


    document.documentElement

        .setAttribute(

            "data-theme",

            preferredTheme

        );


    const themeButtons =

        document.querySelectorAll(

            "[data-theme-toggle], #theme-toggle, .theme-toggle"

        );


    themeButtons.forEach(

        button => {


            button.addEventListener(

                "click",

                toggleTheme

            );

        }

    );

}


function toggleTheme() {

    const newTheme =

        NLS.state.theme === "dark"

            ? "light"

            : "dark";


    NLS.state.theme =

        newTheme;


    document.documentElement

        .setAttribute(

            "data-theme",

            newTheme

        );


    localStorage.setItem(

        "nls-theme",

        newTheme

    );

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initializeNavigation() {

    const menuButton =

        document.querySelector(

            ".menu-btn, .menu-toggle, [data-menu-toggle]"

        );


    const navigation =

        document.querySelector(

            ".navbar, .nav-menu, [data-navigation]"

        );


    if (!menuButton || !navigation)

        return;


    menuButton.addEventListener(

        "click",

        () => {


            NLS.state.mobileMenuOpen =

                !NLS.state.mobileMenuOpen;


            navigation.classList.toggle(

                "active",

                NLS.state.mobileMenuOpen

            );


            menuButton.classList.toggle(

                "active",

                NLS.state.mobileMenuOpen

            );


            document.body.classList.toggle(

                "menu-open",

                NLS.state.mobileMenuOpen

            );

        }

    );


    navigation

        .querySelectorAll(

            "a"

        )

        .forEach(

            link => {


                link.addEventListener(

                    "click",

                    () => {


                        navigation.classList.remove(

                            "active"

                        );


                        menuButton.classList.remove(

                            "active"

                        );


                        document.body.classList.remove(

                            "menu-open"

                        );


                        NLS.state.mobileMenuOpen =

                            false;

                    }

                );

            }

        );

}


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

function initializeSmoothScrolling() {

    document

        .querySelectorAll(

            'a[href^="#"]'

        )

        .forEach(

            link => {


                link.addEventListener(

                    "click",

                    event => {


                        const targetID =

                            link.getAttribute(

                                "href"

                            );


                        if (

                            !targetID ||

                            targetID === "#"

                        )

                            return;


                        const target =

                            document.querySelector(

                                targetID

                            );


                        if (!target)

                            return;


                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                );

            }

        );

}


/* =========================================================
   HEADER
========================================================= */

function initializeHeader() {

    const header =

        document.querySelector(

            "header"

        );


    if (!header)

        return;


    const updateHeader =

        () => {


            header.classList.toggle(

                "scrolled",

                window.scrollY > 40

            );

        };


    updateHeader();


    window.addEventListener(

        "scroll",

        updateHeader,

        {

            passive: true

        }

    );

}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function initializeScrollProgress() {

    const progressBar =

        document.querySelector(

            "#progress-bar, .scroll-progress-bar"

        );


    if (!progressBar)

        return;


    window.addEventListener(

        "scroll",

        () => {


            const documentHeight =

                document.documentElement

                    .scrollHeight

                -

                window.innerHeight;


            const progress =

                documentHeight > 0

                    ? (

                        window.scrollY /

                        documentHeight

                    ) *

                    100

                    : 0;


            progressBar.style.width =

                `${progress}%`;

        },

        {

            passive: true

        }

    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function initializeBackToTop() {

    const button =

        document.querySelector(

            "#backToTop, .back-to-top"

        );


    if (!button)

        return;


    window.addEventListener(

        "scroll",

        () => {


            button.classList.toggle(

                "visible",

                window.scrollY > 500

            );


            button.classList.toggle(

                "show",

                window.scrollY > 500

            );

        },

        {

            passive: true

        }

    );


    button.addEventListener(

        "click",

        () => {


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    );

}


/* =========================================================
   TYPING EFFECT
========================================================= */

function initializeTypingEffect() {

    const element =

        document.querySelector(

            ".typing-text, [data-typing]"

        );


    const words =

        portfolioData.hero?.subtitle ||

        portfolioData.hero?.titles;


    if (

        !element ||

        !Array.isArray(words) ||

        words.length === 0

    )

        return;


    let wordIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function type() {


        const word =

            String(

                words[wordIndex]

            );


        if (!deleting) {


            characterIndex++;


            element.textContent =

                word.substring(

                    0,

                    characterIndex

                );


            if (

                characterIndex >=

                word.length

            ) {


                deleting = true;


                setTimeout(

                    type,

                    1600

                );


                return;

            }

        }

        else {


            characterIndex--;


            element.textContent =

                word.substring(

                    0,

                    characterIndex

                );


            if (

                characterIndex <= 0

            ) {


                deleting = false;


                wordIndex =

                    (

                        wordIndex + 1

                    )

                    %

                    words.length;

            }

        }


        setTimeout(

            type,

            deleting

                ? 45

                : 85

        );

    }


    type();

}


/* =========================================================
   PROJECT SYSTEM
========================================================= */

function initializeProjectSystem() {

    const projects =

        Array.isArray(

            portfolioData.projects

        )

            ? portfolioData.projects

            : [];


    const container =

        document.querySelector(

            "#projectsGrid, .projects-grid"

        );


    if (!container)

        return;


    const searchInput =

        document.querySelector(

            "#projectSearch, [data-project-search]"

        );


    const filterButtons =

        document.querySelectorAll(

            ".filter-btn, [data-project-filter]"

        );


    if (searchInput) {


        searchInput.addEventListener(

            "input",

            event => {


                NLS.state.projectSearch =

                    event.target.value

                        .toLowerCase()

                        .trim();


                renderProjects(

                    projects,

                    container

                );

            }

        );

    }


    filterButtons.forEach(

        button => {


            button.addEventListener(

                "click",

                () => {


                    NLS.state.projectFilter =

                        (

                            button.dataset.filter ||

                            button.dataset.projectFilter ||

                            "all"

                        )

                        .toLowerCase();


                    filterButtons.forEach(

                        item =>

                            item.classList.remove(

                                "active"

                            )

                    );


                    button.classList.add(

                        "active"

                    );


                    renderProjects(

                        projects,

                        container

                    );

                }

            );

        }

    );


    renderProjects(

        projects,

        container

    );

}


function renderProjects(

    projects,

    container

) {


    const filter =

        NLS.state.projectFilter;


    const search =

        NLS.state.projectSearch;


    const filteredProjects =

        projects.filter(

            project => {


                const category =

                    String(

                        project.category ||

                        ""

                    )

                    .toLowerCase();


                const searchableText =

                    [

                        project.title,

                        project.description,

                        project.category,

                        ...(

                            Array.isArray(

                                project.technologies

                            )

                                ? project.technologies

                                : []

                        )

                    ]

                    .join(" ")

                    .toLowerCase();


                const matchesCategory =

                    filter === "all" ||

                    category === filter;


                const matchesSearch =

                    !search ||

                    searchableText.includes(

                        search

                    );


                return (

                    matchesCategory &&

                    matchesSearch

                );

            }

        );


    const countElement =

        document.querySelector(

            "#projectResultCount, [data-project-count]"

        );


    if (countElement) {


        countElement.textContent =

            `${

                filteredProjects.length

            } project${

                filteredProjects.length === 1

                    ? ""

                    : "s"

            }`;

    }


    container.innerHTML = "";


    if (

        filteredProjects.length === 0

    ) {


        container.innerHTML = `

            <div class="empty-state">

                <i class="fas fa-folder-open"></i>

                <h3>No Projects Found</h3>

                <p>

                    Try another search term

                    or category.

                </p>

            </div>

        `;


        return;

    }


    filteredProjects.forEach(

        project => {


            const card =

                document.createElement(

                    "article"

                );


            card.className =

                "project-card";


            const image =

                project.image ||

                "assets/images/project-placeholder.jpg";


            const technologies =

                Array.isArray(

                    project.technologies

                )

                    ? project.technologies

                    : [];


            card.innerHTML = `

                <div class="project-image">

                    <img

                        src="${escapeHTML(image)}"

                        alt="${escapeHTML(

                            project.title ||

                            "Project"

                        )}"

                        loading="lazy">


                    <span class="project-category">

                        ${escapeHTML(

                            project.category ||

                            ""

                        )}

                    </span>

                </div>


                <div class="project-content">

                    <h3>

                        ${escapeHTML(

                            project.title ||

                            ""

                        )}

                    </h3>


                    <p>

                        ${escapeHTML(

                            project.description ||

                            ""

                        )}

                    </p>


                    <div class="technology-badges">

                        ${

                            technologies

                                .map(

                                    technology => `

                                        <span>

                                            ${escapeHTML(

                                                technology

                                            )}

                                        </span>

                                    `

                                )

                                .join("")

                        }

                    </div>

                </div>

            `;


            const imageElement =

                card.querySelector(

                    "img"

                );


            imageElement?.addEventListener(

                "error",

                () => {


                    if (

                        imageElement.dataset.fallback

                    )

                        return;


                    imageElement.dataset.fallback =

                        "true";


                    imageElement.src =

                        "assets/images/project-placeholder.jpg";

                }

            );


            container.appendChild(

                card

            );

        }

    );

}


/* =========================================================
   CERTIFICATE SYSTEM
========================================================= */

function initializeCertificateSystem() {

    const certificates =

        Array.isArray(

            portfolioData.certificates

        )

            ? portfolioData.certificates

            : [];


    const container =

        document.querySelector(

            "#certificateGrid, .certificate-grid"

        );


    if (!container)

        return;


    container.innerHTML = "";


    certificates.forEach(

        (certificate, index) => {


            const card =

                document.createElement(

                    "article"

                );


            card.className =

                "certificate-card";


            card.innerHTML = `

                <div class="certificate-image">

                    <img

                        src="${escapeHTML(

                            certificate.image ||

                            ""

                        )}"

                        alt="${escapeHTML(

                            certificate.title ||

                            "Certificate"

                        )}"

                        loading="lazy">


                    <button

                        type="button"

                        class="certificate-preview"

                        data-certificate-index="${index}">

                        <i class="fas fa-expand"></i>

                    </button>

                </div>


                <div class="certificate-content">

                    <h3>

                        ${escapeHTML(

                            certificate.title ||

                            "Certificate"

                        )}

                    </h3>


                    <div class="certificate-actions">

                        <button

                            type="button"

                            class="btn btn-secondary"

                            data-certificate-view="${index}">

                            <i class="fas fa-eye"></i>

                            View

                        </button>


                        <a

                            href="${escapeHTML(

                                certificate.file ||

                                "#"

                            )}"

                            class="btn btn-primary"

                            download>

                            <i class="fas fa-download"></i>

                            Download

                        </a>

                    </div>

                </div>

            `;


            container.appendChild(

                card

            );

        }

    );


    container

        .querySelectorAll(

            "[data-certificate-index], " +

            "[data-certificate-view]"

        )

        .forEach(

            button => {


                button.addEventListener(

                    "click",

                    () => {


                        const index =

                            Number(

                                button.dataset

                                    .certificateIndex ||

                                button.dataset

                                    .certificateView

                            );


                        const certificate =

                            certificates[index];


                        if (!certificate)

                            return;


                        openCertificateModal(

                            certificate

                        );

                    }

                );

            }

        );

}


/* =========================================================
   CERTIFICATE MODAL
========================================================= */

function openCertificateModal(

    certificate

) {


    let modal =

        document.getElementById(

            "certificateModal"

        );


    if (!modal) {


        modal =

            document.createElement(

                "div"

            );


        modal.id =

            "certificateModal";


        modal.className =

            "certificate-modal";


        modal.innerHTML = `

            <div class="certificate-modal-overlay"></div>


            <div class="certificate-modal-content">

                <button

                    type="button"

                    class="certificate-modal-close">

                    <i class="fas fa-times"></i>

                </button>


                <img

                    class="certificate-modal-image"

                    alt="Certificate preview">


                <h3 class="certificate-modal-title"></h3>


                <a

                    class="btn btn-primary certificate-modal-download"

                    download>

                    <i class="fas fa-download"></i>

                    Download Certificate

                </a>

            </div>

        `;


        document.body.appendChild(

            modal

        );


        modal

            .querySelector(

                ".certificate-modal-close"

            )

            .addEventListener(

                "click",

                () =>

                    closeCertificateModal(

                        modal

                    )

            );


        modal

            .querySelector(

                ".certificate-modal-overlay"

            )

            .addEventListener(

                "click",

                () =>

                    closeCertificateModal(

                        modal

                    )

            );

    }


    modal

        .querySelector(

            ".certificate-modal-image"

        )

        .src =

        certificate.image || "";


    modal

        .querySelector(

            ".certificate-modal-title"

        )

        .textContent =

        certificate.title || "Certificate";


    modal

        .querySelector(

            ".certificate-modal-download"

        )

        .href =

        certificate.file || "#";


    modal.classList.add(

        "active"

    );


    document.body.classList.add(

        "modal-open"

    );

}


function closeCertificateModal(

    modal

) {


    modal.classList.remove(

        "active"

    );


    document.body.classList.remove(

        "modal-open"

    );

}


/* =========================================================
   GALLERY
========================================================= */

function initializeGallery() {

    const images =

        document.querySelectorAll(

            ".gallery img, " +

            ".gallery-item img, " +

            "[data-lightbox]"

        );


    images.forEach(

        image => {


            image.addEventListener(

                "click",

                () => {


                    openImageLightbox(

                        image.src,

                        image.alt

                    );

                }

            );

        }

    );

}


function openImageLightbox(

    source,

    alt = ""

) {


    let lightbox =

        document.getElementById(

            "imageLightbox"

        );


    if (!lightbox) {


        lightbox =

            document.createElement(

                "div"

            );


        lightbox.id =

            "imageLightbox";


        lightbox.className =

            "image-lightbox";


        lightbox.innerHTML = `

            <div class="image-lightbox-overlay"></div>


            <div class="image-lightbox-content">

                <button

                    type="button"

                    class="image-lightbox-close">

                    <i class="fas fa-times"></i>

                </button>


                <img

                    class="image-lightbox-image"

                    alt="Image preview">

            </div>

        `;


        document.body.appendChild(

            lightbox

        );


        lightbox

            .querySelector(

                ".image-lightbox-close"

            )

            .addEventListener(

                "click",

                () =>

                    closeImageLightbox(

                        lightbox

                    )

            );


        lightbox

            .querySelector(

                ".image-lightbox-overlay"

            )

            .addEventListener(

                "click",

                () =>

                    closeImageLightbox(

                        lightbox

                    )

            );

    }


    const image =

        lightbox.querySelector(

            ".image-lightbox-image"

        );


    image.src =

        source;


    image.alt =

        alt;


    lightbox.classList.add(

        "active"

    );


    document.body.classList.add(

        "modal-open"

    );

}


function closeImageLightbox(

    lightbox

) {


    lightbox.classList.remove(

        "active"

    );


    document.body.classList.remove(

        "modal-open"

    );

}


/* =========================================================
   CONTACT SYSTEM
========================================================= */

function initializeContactSystem() {

    const contact =

        NLS.config?.contact ||

        portfolioData.contact;


    if (!contact)

        return;


    document

        .querySelectorAll(

            "[data-phone]"

        )

        .forEach(

            element => {


                element.href =

                    `tel:${contact.phone}`;

            }

        );


    document

        .querySelectorAll(

            "[data-email]"

        )

        .forEach(

            element => {


                element.href =

                    `mailto:${contact.email}`;

            }

        );


    document

        .querySelectorAll(

            "[data-whatsapp]"

        )

        .forEach(

            element => {


                element.href =

                    `https://wa.me/${contact.whatsapp}`;

                element.target =

                    "_blank";

            }

        );


    document

        .querySelectorAll(

            "[data-linkedin]"

        )

        .forEach(

            element => {


                element.href =

                    contact.linkedin;

                element.target =

                    "_blank";

            }

        );

}


/* =========================================================
   QR CODE
========================================================= */

function initializeQRCode() {

    const container =

        document.querySelector(

            "#qrCode, [data-qr-code]"

        );


    if (

        !container ||

        typeof QRCode ===

        "undefined"

    )

        return;


    const qrURL =

        NLS.config?.qr?.portfolioURL ||

        window.location.href;


    container.innerHTML = "";


    new QRCode(

        container,

        {

            text: qrURL,

            width: 220,

            height: 220,

            correctLevel:

                QRCode.CorrectLevel.H

        }

    );

}


/* =========================================================
   DOWNLOAD CENTER
========================================================= */

function initializeDownloadCenter() {

    const downloads =

        Array.isArray(

            portfolioData.downloads

        )

            ? portfolioData.downloads

            : [];


    const container =

        document.querySelector(

            "#downloadsGrid, .downloads-grid"

        );


    if (!container)

        return;


    container.innerHTML = "";


    downloads.forEach(

        download => {


            const link =

                document.createElement(

                    "a"

                );


            link.className =

                "download-card";


            link.href =

                download.file ||

                "#";


            link.setAttribute(

                "download",

                ""

            );


            link.innerHTML = `

                <i class="fas ${escapeHTML(

                    download.icon ||

                    "fa-file"

                )}"></i>


                <span>

                    ${escapeHTML(

                        download.name ||

                        "Download"

                    )}

                </span>


                <i class="fas fa-download"></i>

            `;


            container.appendChild(

                link

            );

        }

    );

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function initializeRevealAnimations() {

    const elements =

        document.querySelectorAll(

            ".reveal, " +

            ".fade-in, " +

            ".project-card, " +

            ".certificate-card, " +

            ".skill-card, " +

            ".stat-card, " +

            ".technology-card"

        );


    if (

        !("IntersectionObserver" in window)

    ) {


        elements.forEach(

            element =>

                element.classList.add(

                    "visible",

                    "animate"

                )

        );


        return;

    }


    const observer =

        new IntersectionObserver(

            entries => {


                entries.forEach(

                    entry => {


                        if (

                            entry.isIntersecting

                        ) {


                            entry.target.classList.add(

                                "visible",

                                "animate"

                            );


                            observer.unobserve(

                                entry.target

                            );

                        }

                    }

                );

            },

            {

                threshold: 0.12

            }

        );


    elements.forEach(

        element =>

            observer.observe(

                element

            )

    );

}


/* =========================================================
   LAZY LOADING
========================================================= */

function initializeLazyLoading() {

    if (

        !("IntersectionObserver" in window)

    )

        return;


    const images =

        document.querySelectorAll(

            "img[data-src]"

        );


    const observer =

        new IntersectionObserver(

            entries => {


                entries.forEach(

                    entry => {


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

                    }

                );

            }

        );


    images.forEach(

        image =>

            observer.observe(

                image

            )

    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function initializeCurrentYear() {

    document

        .querySelectorAll(

            ".current-year, #currentYear"

        )

        .forEach(

            element => {


                element.textContent =

                    new Date()

                        .getFullYear();

            }

        );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

function initializeKeyboardControls() {

    document.addEventListener(

        "keydown",

        event => {


            if (

                event.key !==

                "Escape"

            )

                return;


            document

                .querySelectorAll(

                    ".certificate-modal.active, " +

                    ".image-lightbox.active"

                )

                .forEach(

                    modal => {


                        modal.classList.remove(

                            "active"

                        );

                    }

                );


            document.body.classList.remove(

                "modal-open"

            );

        }

    );

}


/* =========================================================
   SECURITY: HTML ESCAPING
========================================================= */

function escapeHTML(

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


/* =========================================================
   GLOBAL ERROR PROTECTION
========================================================= */

window.addEventListener(

    "error",

    event => {


        console.error(

            "NLS Portfolio Error:",

            event.error ||

            event.message

        );

    }

);


window.addEventListener(

    "unhandledrejection",

    event => {


        console.error(

            "NLS Promise Error:",

            event.reason

        );

    }

);
