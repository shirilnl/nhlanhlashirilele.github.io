/*=========================================================
    NLS ENGINEERING PORTFOLIO
    File: script.js
    Version: 6.0

    COMPLETE PORTFOLIO ENGINE

    Includes:
    - Dynamic data rendering
    - Project search
    - Project filtering
    - Project result counter
    - Project image fallback
    - Certificate preview
    - Certificate download
    - Download center
    - Contact system
    - QR code
    - vCard
    - Contact form
    - Theme system
    - Mobile navigation
    - Typing effect
    - Scroll progress
    - Back to top
    - Active navigation
    - Counters
    - Skill bars
    - Reveal animations
    - Lightbox
    - Lazy loading
    - PWA
=========================================================*/


"use strict";


/*=========================================================
    GLOBAL APP
=========================================================*/

const App = {

    config:

        window.NLS?.config || {},

    data:

        window.NLS?.data || {},

    state: {

        loaded: false,

        theme: "light",

        menuOpen: false,

        projectFilter: "all",

        projectSearch: "",

        projects: [],

        certificates: []

    }

};


window.App = App;


/*=========================================================
    DOM READY
=========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    initializeApplication

);


/*=========================================================
    APPLICATION INITIALIZATION
=========================================================*/

function initializeApplication() {


    App.state.projects =

        Array.isArray(

            App.data.projects

        )

            ? App.data.projects

            : [];


    App.state.certificates =

        Array.isArray(

            App.data.certificates

        )

            ? App.data.certificates

            : [];


    loadTheme();


    initializeNavigation();


    initializeBackToTop();


    initializeProgressBar();


    initializeTyping();


    initializeSmoothScroll();


    initializeActiveNavigation();


    initializeHeaderScroll();


    initializeThemeToggle();


    initializeContact();


    initializeQR();


    initializeVCard();


    initializeContactForm();


    initializeLightbox();


    initializeProjectSystem();


    initializeCertificateSystem();


    initializeDownloadCenter();


    renderStatistics();


    renderSkills();


    renderExperience();


    renderEducation();


    renderTechnologies();


    initializeRevealAnimations();


    initializeCounters();


    initializeSkillBars();


    initializeLazyImages();


    initializeCurrentYear();


    initializeGlobalKeyboardShortcuts();


    initializePWA();


    if (

        typeof AI !== "undefined" &&

        typeof AI.initialize === "function"

    ) {

        AI.initialize();

    }


    if (

        typeof Admin !== "undefined" &&

        typeof Admin.initialize === "function"

    ) {

        Admin.initialize();

    }


    App.state.loaded = true;


    console.log(

        "NLS Engineering Portfolio Loaded Successfully"

    );

}


/*=========================================================
    STATISTICS
=========================================================*/

function renderStatistics() {


    const container =

        document.getElementById(

            "statisticsGrid"

        );


    if (!container)

        return;


    const statistics =

        Array.isArray(

            App.data.statistics

        )

            ? App.data.statistics

            : [];


    container.innerHTML = "";


    statistics.forEach(stat => {


        const card =

            document.createElement(

                "div"

            );


        card.className =

            "stat-card";


        card.innerHTML = `

            <i class="fas ${

                escapeHTML(

                    stat.icon ||

                    "fa-chart-line"

                )

            }"></i>


            <strong

                class="counter"

                data-target="${

                    extractNumber(

                        stat.value

                    )

                }"

                data-suffix="${

                    extractSuffix(

                        stat.value

                    )

                }">

                0

            </strong>


            <span>

                ${

                    escapeHTML(

                        stat.label ||

                        ""

                    )

                }

            </span>

        `;


        container.appendChild(

            card

        );

    });

}


/*=========================================================
    SKILLS
=========================================================*/

function renderSkills() {


    const container =

        document.getElementById(

            "skillsGrid"

        );


    if (!container)

        return;


    const skills =

        Array.isArray(

            App.data.skills

        )

            ? App.data.skills

            : [];


    container.innerHTML = "";


    skills.forEach(skill => {


        const card =

            document.createElement(

                "div"

            );


        card.className =

            "skill-card";


        card.innerHTML = `

            <div class="skill-header">

                <div class="skill-name">

                    <i class="fas ${

                        escapeHTML(

                            skill.icon ||

                            "fa-star"

                        )

                    }"></i>


                    <span>

                        ${

                            escapeHTML(

                                skill.name ||

                                ""

                            )

                        }

                    </span>

                </div>


                <span class="skill-percentage">

                    ${

                        Number(

                            skill.level ||

                            0

                        )

                    }%

                </span>

            </div>


            <div class="skill-bar">

                <div

                    class="skill-progress"

                    data-progress="${

                        Number(

                            skill.level ||

                            0

                        )

                    }">

                </div>

            </div>

        `;


        container.appendChild(

            card

        );

    });

}


/*=========================================================
    EXPERIENCE
=========================================================*/

function renderExperience() {


    const container =

        document.getElementById(

            "experienceTimeline"

        );


    if (!container)

        return;


    const experience =

        Array.isArray(

            App.data.experience

        )

            ? App.data.experience

            : [];


    container.innerHTML = "";


    experience.forEach(item => {


        const article =

            document.createElement(

                "article"

            );


        article.className =

            "timeline-item";


        const technologies =

            Array.isArray(

                item.technologies

            )

                ? item.technologies

                : [];


        article.innerHTML = `

            <div class="timeline-marker">

                <i class="fas fa-briefcase"></i>

            </div>


            <div class="timeline-content">

                <span class="timeline-period">

                    ${

                        escapeHTML(

                            item.period ||

                            ""

                        )

                    }

                </span>


                <h3>

                    ${

                        escapeHTML(

                            item.title ||

                            ""

                        )

                    }

                </h3>


                <h4>

                    ${

                        escapeHTML(

                            item.company ||

                            ""

                        )

                    }

                </h4>


                <p>

                    ${

                        escapeHTML(

                            item.description ||

                            ""

                        )

                    }

                </p>


                <div class="technology-tags">

                    ${

                        technologies

                            .map(

                                technology => `

                                    <span>

                                        ${

                                            escapeHTML(

                                                technology

                                            )

                                        }

                                    </span>

                                `

                            )

                            .join("")

                    }

                </div>

            </div>

        `;


        container.appendChild(

            article

        );

    });

}


/*=========================================================
    EDUCATION
=========================================================*/

function renderEducation() {


    const container =

        document.getElementById(

            "educationGrid"

        );


    if (!container)

        return;


    const education =

        Array.isArray(

            App.data.education

        )

            ? App.data.education

            : [];


    container.innerHTML = "";


    education.forEach(item => {


        const card =

            document.createElement(

                "article"

            );


        card.className =

            "education-card";


        card.innerHTML = `

            <div class="education-icon">

                <i class="fas fa-graduation-cap"></i>

            </div>


            <span class="education-period">

                ${

                    escapeHTML(

                        item.period ||

                        ""

                    )

                }

            </span>


            <h3>

                ${

                    escapeHTML(

                        item.qualification ||

                        ""

                    )

                }

            </h3>


            <h4>

                ${

                    escapeHTML(

                        item.institution ||

                        ""

                    )

                }

            </h4>


            <p>

                ${

                    escapeHTML(

                        item.description ||

                        ""

                    )

                }

            </p>

        `;


        container.appendChild(

            card

        );

    });

}


/*=========================================================
    TECHNOLOGIES
=========================================================*/

function renderTechnologies() {


    const container =

        document.getElementById(

            "technologyGrid"

        );


    if (!container)

        return;


    const technologies =

        Array.isArray(

            App.data.technologies

        )

            ? App.data.technologies

            : [];


    container.innerHTML = "";


    technologies.forEach(technology => {


        const card =

            document.createElement(

                "div"

            );


        card.className =

            "technology-card";


        card.innerHTML = `

            <i class="fas ${

                escapeHTML(

                    technology.icon ||

                    "fa-microchip"

                )

            }"></i>


            <h3>

                ${

                    escapeHTML(

                        technology.name ||

                        ""

                    )

                }

            </h3>


            <span>

                ${

                    escapeHTML(

                        technology.category ||

                        ""

                    )

                }

            </span>

        `;


        container.appendChild(

            card

        );

    });

}


/*=========================================================
    PROJECT SYSTEM
=========================================================*/

function initializeProjectSystem() {


    const searchInput =

        document.querySelector(

            "#projectSearch"

        );


    const filterButtons =

        document.querySelectorAll(

            ".filter-btn"

        );


    if (searchInput) {


        searchInput.addEventListener(

            "input",

            event => {


                App.state.projectSearch =

                    event.target.value

                        .trim()

                        .toLowerCase();


                renderProjects();

            }

        );

    }


    filterButtons.forEach(button => {


        button.addEventListener(

            "click",

            () => {


                App.state.projectFilter =

                    (

                        button.dataset.filter ||

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


                renderProjects();

            }

        );

    });


    renderProjects();

}


/*=========================================================
    RENDER PROJECTS
=========================================================*/

function renderProjects() {


    const container =

        document.getElementById(

            "projectsGrid"

        );


    if (!container)

        return;


    const resultCount =

        document.querySelector(

            "#projectResultCount"

        );


    const filter =

        App.state.projectFilter;


    const search =

        App.state.projectSearch;


    const filteredProjects =

        App.state.projects.filter(

            project => {


                const category =

                    String(

                        project.category ||

                        ""

                    )

                    .toLowerCase();


                const title =

                    String(

                        project.title ||

                        ""

                    )

                    .toLowerCase();


                const description =

                    String(

                        project.description ||

                        ""

                    )

                    .toLowerCase();


                const technologies =

                    Array.isArray(

                        project.technologies

                    )

                        ? project.technologies

                            .join(" ")

                            .toLowerCase()

                        : "";


                const matchesFilter =

                    filter === "all" ||

                    category === filter;


                const matchesSearch =

                    !search ||

                    title.includes(

                        search

                    ) ||

                    description.includes(

                        search

                    ) ||

                    technologies.includes(

                        search

                    );


                return (

                    matchesFilter &&

                    matchesSearch

                );

            }

        );


    container.innerHTML = "";


    if (resultCount) {


        resultCount.textContent =

            `${

                filteredProjects.length

            } project${

                filteredProjects.length === 1

                    ? ""

                    : "s"

            } found`;

    }


    if (!filteredProjects.length) {


        container.innerHTML = `

            <div class="empty-state">

                <i class="fas fa-folder-open"></i>

                <h3>

                    No Projects Found

                </h3>

                <p>

                    Try a different search term

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


            card.dataset.category =

                project.category ||

                "";


            const technologies =

                Array.isArray(

                    project.technologies

                )

                    ? project.technologies

                    : [];


            const image =

                project.image ||

                "assets/images/project-placeholder.jpg";


            card.innerHTML = `

                <div class="project-image">

                    <img

                        src="${

                            escapeHTML(

                                image

                            )

                        }"

                        alt="${

                            escapeHTML(

                                project.title ||

                                "Project image"

                            )

                        }"

                        loading="lazy">


                    <span class="project-category">

                        ${

                            escapeHTML(

                                project.category ||

                                ""

                            )

                        }

                    </span>

                </div>


                <div class="project-content">

                    <h3>

                        ${

                            escapeHTML(

                                project.title ||

                                ""

                            )

                        }

                    </h3>


                    <p>

                        ${

                            escapeHTML(

                                project.description ||

                                ""

                            )

                        }

                    </p>


                    <div class="technology-badges">

                        ${

                            technologies

                                .map(

                                    technology => `

                                        <span>

                                            ${

                                                escapeHTML(

                                                    technology

                                                )

                                            }

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


            if (imageElement) {


                imageElement.addEventListener(

                    "error",

                    () => {


                        imageElement.src =

                            "assets/images/project-placeholder.jpg";


                        imageElement.classList.add(

                            "image-fallback"

                        );

                    },

                    {

                        once: true

                    }

                );

            }


            container.appendChild(

                card

            );

        }

    );


    initializeProjectImageLightbox();

}


/*=========================================================
    PROJECT LIGHTBOX
=========================================================*/

function initializeProjectImageLightbox() {


    document

        .querySelectorAll(

            ".project-image img"

        )

        .forEach(

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


/*=========================================================
    CERTIFICATE SYSTEM
=========================================================*/

function initializeCertificateSystem() {


    renderCertificates();


    initializeCertificateModal();

}


/*=========================================================
    RENDER CERTIFICATES
=========================================================*/

function renderCertificates() {


    const container =

        document.getElementById(

            "certificateGrid"

        );


    if (!container)

        return;


    container.innerHTML = "";


    App.state.certificates.forEach(

        (certificate, index) => {


            const card =

                document.createElement(

                    "article"

                );


            card.className =

                "certificate-card";


            const image =

                certificate.image ||

                "assets/images/certificate-placeholder.jpg";


            card.innerHTML = `

                <div class="certificate-image">

                    <img

                        src="${

                            escapeHTML(

                                image

                            )

                        }"

                        alt="${

                            escapeHTML(

                                certificate.title ||

                                "Certificate"

                            )

                        }"

                        loading="lazy">


                    <button

                        type="button"

                        class="certificate-preview"

                        data-certificate-index="${

                            index

                        }"

                        aria-label="Preview certificate">

                        <i class="fas fa-expand"></i>

                    </button>

                </div>


                <div class="certificate-content">

                    <h3>

                        ${

                            escapeHTML(

                                certificate.title ||

                                "Certificate"

                            )

                        }

                    </h3>


                    <div class="certificate-actions">

                        <button

                            type="button"

                            class="btn btn-secondary certificate-view"

                            data-certificate-index="${

                                index

                            }">

                            <i class="fas fa-eye"></i>

                            View

                        </button>


                        <a

                            class="btn btn-primary"

                            href="${

                                escapeHTML(

                                    certificate.file ||

                                    "#"

                                )

                            }"

                            target="_blank"

                            rel="noopener noreferrer"

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


    document

        .querySelectorAll(

            ".certificate-preview, " +

            ".certificate-view"

        )

        .forEach(

            button => {


                button.addEventListener(

                    "click",

                    () => {


                        const index =

                            Number(

                                button.dataset

                                    .certificateIndex

                            );


                        const certificate =

                            App.state

                                .certificates

                                [index];


                        if (!certificate)

                            return;


                        openCertificatePreview(

                            certificate

                        );

                    }

                );

            }

        );

}


/*=========================================================
    CERTIFICATE MODAL
=========================================================*/

function initializeCertificateModal() {


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

                    class="certificate-modal-close"

                    aria-label="Close certificate">

                    <i class="fas fa-times"></i>

                </button>


                <img

                    id="certificateModalImage"

                    src=""

                    alt="Certificate preview">


                <h3

                    id="certificateModalTitle">

                </h3>


                <a

                    id="certificateModalDownload"

                    href="#"

                    target="_blank"

                    rel="noopener noreferrer"

                    download

                    class="btn btn-primary">

                    <i class="fas fa-download"></i>

                    Download Certificate

                </a>

            </div>

        `;


        document.body.appendChild(

            modal

        );

    }


    const closeButton =

        modal.querySelector(

            ".certificate-modal-close"

        );


    const overlay =

        modal.querySelector(

            ".certificate-modal-overlay"

        );


    closeButton?.addEventListener(

        "click",

        closeCertificatePreview

    );


    overlay?.addEventListener(

        "click",

        closeCertificatePreview

    );

}


function openCertificatePreview(

    certificate

) {


    const modal =

        document.getElementById(

            "certificateModal"

        );


    const image =

        document.getElementById(

            "certificateModalImage"

        );


    const title =

        document.getElementById(

            "certificateModalTitle"

        );


    const download =

        document.getElementById(

            "certificateModalDownload"

        );


    if (!modal)

        return;


    if (image) {


        image.src =

            certificate.image ||

            "";


        image.alt =

            certificate.title ||

            "Certificate";

    }


    if (title) {


        title.textContent =

            certificate.title ||

            "Certificate";

    }


    if (download) {


        download.href =

            certificate.file ||

            "#";

    }


    modal.classList.add(

        "active"

    );


    document.body.classList.add(

        "modal-open"

    );

}


function closeCertificatePreview() {


    const modal =

        document.getElementById(

            "certificateModal"

        );


    if (!modal)

        return;


    modal.classList.remove(

        "active"

    );


    document.body.classList.remove(

        "modal-open"

    );

}


/*=========================================================
    DOWNLOAD CENTER
=========================================================*/

function initializeDownloadCenter() {


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


    downloads.forEach(

        download => {


            const card =

                document.createElement(

                    "a"

                );


            card.className =

                "download-card";


            card.href =

                download.file ||

                "#";


            card.download =

                "";


            card.innerHTML = `

                <i class="fas ${

                    escapeHTML(

                        download.icon ||

                        "fa-file"

                    )

                }"></i>


                <span>

                    ${

                        escapeHTML(

                            download.name ||

                            "Download"

                        )

                    }

                </span>


                <small>

                    <i class="fas fa-download"></i>

                </small>

            `;


            container.appendChild(

                card

            );

        }

    );

}


/*=========================================================
    CONTACT
=========================================================*/

function initializeContact() {


    const contact =

        App.config.contact;


    if (!contact)

        return;


    document

        .querySelectorAll(

            "[data-phone]"

        )

        .forEach(

            element => {


                element.href =

                    `tel:${

                        contact.phone

                    }`;

            }

        );


    document

        .querySelectorAll(

            "[data-email]"

        )

        .forEach(

            element => {


                element.href =

                    `mailto:${

                        contact.email

                    }`;

            }

        );


    document

        .querySelectorAll(

            "[data-whatsapp]"

        )

        .forEach(

            element => {


                element.href =

                    `https://wa.me/${

                        contact.whatsapp

                    }`;


                element.target =

                    "_blank";


                element.rel =

                    "noopener noreferrer";

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


                element.rel =

                    "noopener noreferrer";

            }

        );


    document

        .querySelectorAll(

            "[data-facebook]"

        )

        .forEach(

            element => {


                element.href =

                    contact.facebook;


                element.target =

                    "_blank";


                element.rel =

                    "noopener noreferrer";

            }

        );

}


/*=========================================================
    QR CODE
=========================================================*/

function initializeQR() {


    const container =

        document.getElementById(

            "qrCode"

        );


    if (

        !container ||

        typeof QRCode ===

        "undefined"

    )

        return;


    const url =

        App.config.qr?.portfolioURL ||

        window.location.href;


    container.innerHTML = "";


    new QRCode(

        container,

        {

            text: url,

            width: 220,

            height: 220,

            correctLevel:

                QRCode.CorrectLevel.H

        }

    );

}


/*=========================================================
    VCARD
=========================================================*/

function initializeVCard() {


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

        App.config.qr?.portfolioURL ||

        window.location.href;


    const vCard = [

        "BEGIN:VCARD",

        "VERSION:3.0",

        `FN:${

            escapeVCard(

                profile.fullName

            )

        }`,

        `TITLE:${

            escapeVCard(

                profile.title

            )

        }`,

        `TEL;TYPE=CELL:${

            escapeVCard(

                contact.phone

            )

        }`,

        `EMAIL:${

            escapeVCard(

                contact.email

            )

        }`,

        `URL:${

            escapeVCard(

                website

            )

        }`,

        "END:VCARD"

    ].join(

        "\r\n"

    );


    const blob =

        new Blob(

            [vCard],

            {

                type:

                    "text/vcard"

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

        .forEach(

            link => {


                link.href =

                    url;


                link.download =

                    "Nhlanhla_Lucky_Shirilele.vcf";

            }

        );

}


/*=========================================================
    CONTACT FORM
=========================================================*/

function initializeContactForm() {


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

                )?.value.trim() ||

                "";


            const email =

                document.getElementById(

                    "email"

                )?.value.trim() ||

                "";


            const subject =

                document.getElementById(

                    "subject"

                )?.value.trim() ||

                "";


            const message =

                document.getElementById(

                    "message"

                )?.value.trim() ||

                "";


            const destination =

                App.config.contact?.email;


            if (!destination)

                return;


            const body =

`Name: ${

    name

}


Email: ${

    email

}


Message:


${

    message

}`;


            window.location.href =

                `mailto:${

                    destination

                }` +

                `?subject=${

                    encodeURIComponent(

                        subject ||

                        "Portfolio Enquiry"

                    )

                }` +

                `&body=${

                    encodeURIComponent(

                        body

                    )

                }`;

        }

    );

}


/*=========================================================
    THEME SYSTEM
=========================================================*/

function initializeThemeToggle() {


    const toggle =

        document.getElementById(

            "theme-toggle"

        );


    if (!toggle)

        return;


    toggle.addEventListener(

        "click",

        toggleTheme

    );

}


function loadTheme() {


    const saved =

        localStorage.getItem(

            "theme"

        ) ||

        "light";


    App.state.theme =

        saved;


    document.documentElement

        .setAttribute(

            "data-theme",

            saved

        );

}


function toggleTheme() {


    const newTheme =

        App.state.theme ===

        "light"

            ? "dark"

            : "light";


    App.state.theme =

        newTheme;


    document.documentElement

        .setAttribute(

            "data-theme",

            newTheme

        );


    localStorage.setItem(

        "theme",

        newTheme

    );

}


/*=========================================================
    MOBILE NAVIGATION
=========================================================*/

function initializeNavigation() {


    const menuButton =

        document.querySelector(

            ".menu-btn"

        );


    const navbar =

        document.querySelector(

            ".navbar"

        );


    if (!menuButton)

        return;


    menuButton.addEventListener(

        "click",

        () => {


            App.state.menuOpen =

                !App.state.menuOpen;


            navbar?.classList.toggle(

                "active",

                App.state.menuOpen

            );

        }

    );

}


/*=========================================================
    SMOOTH SCROLL
=========================================================*/

function initializeSmoothScroll() {


    document

        .querySelectorAll(

            'a[href^="#"]'

        )

        .forEach(

            link => {


                link.addEventListener(

                    "click",

                    event => {


                        const selector =

                            link.getAttribute(

                                "href"

                            );


                        if (

                            !selector ||

                            selector ===

                            "#"

                        )

                            return;


                        const target =

                            document.querySelector(

                                selector

                            );


                        if (!target)

                            return;


                        event.preventDefault();


                        target.scrollIntoView({

                            behavior:

                                "smooth"

                        });


                        const navbar =

                            document.querySelector(

                                ".navbar"

                            );


                        navbar?.classList.remove(

                            "active"

                        );


                        App.state.menuOpen =

                            false;

                    }

                );

            }

        );

}


/*=========================================================
    SCROLL PROGRESS
=========================================================*/

function initializeProgressBar() {


    const bar =

        document.getElementById(

            "progress-bar"

        );


    if (!bar)

        return;


    window.addEventListener(

        "scroll",

        () => {


            const height =

                document.documentElement

                    .scrollHeight

                -

                window.innerHeight;


            const progress =

                height > 0

                    ? (

                        window.scrollY /

                        height

                    ) *

                    100

                    : 0;


            bar.style.width =

                `${

                    progress

                }%`;

        },

        {

            passive:

                true

        }

    );

}


/*=========================================================
    BACK TO TOP
=========================================================*/

function initializeBackToTop() {


    const button =

        document.getElementById(

            "backToTop"

        );


    if (!button)

        return;


    window.addEventListener(

        "scroll",

        () => {


            button.classList.toggle(

                "show",

                window.scrollY >

                500

            );

        },

        {

            passive:

                true

        }

    );


    button.addEventListener(

        "click",

        () => {


            window.scrollTo({

                top: 0,

                behavior:

                    "smooth"

            });

        }

    );

}


/*=========================================================
    TYPING EFFECT
=========================================================*/

function initializeTyping() {


    const element =

        document.querySelector(

            ".typing-text"

        );


    const words =

        App.data.hero?.subtitle;


    if (

        !element ||

        !Array.isArray(

            words

        ) ||

        !words.length

    )

        return;


    let wordIndex =

        0;


    let letterIndex =

        0;


    let deleting =

        false;


    function type() {


        const word =

            words[

                wordIndex

            ];


        if (!deleting) {


            element.textContent =

                word.substring(

                    0,

                    letterIndex++

                );


            if (

                letterIndex >

                word.length

            ) {


                deleting =

                    true;


                setTimeout(

                    type,

                    1500

                );


                return;

            }

        }

        else {


            element.textContent =

                word.substring(

                    0,

                    letterIndex--

                );


            if (

                letterIndex < 0

            ) {


                deleting =

                    false;


                wordIndex =

                    (

                        wordIndex +

                        1

                    )

                    %

                    words.length;

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

}


/*=========================================================
    COUNTERS
=========================================================*/

function initializeCounters() {


    const counters =

        document.querySelectorAll(

            ".counter"

        );


    counters.forEach(

        counter => {


            const target =

                Number(

                    counter.dataset.target

                );


            const suffix =

                counter.dataset.suffix ||

                "";


            if (

                Number.isNaN(

                    target

                )

            )

                return;


            let current =

                0;


            const interval =

                setInterval(

                    () => {


                        current +=

                            Math.ceil(

                                target /

                                40

                            );


                        if (

                            current >=

                            target

                        ) {


                            current =

                                target;


                            clearInterval(

                                interval

                            );

                        }


                        counter.textContent =

                            `${

                                current

                            }${

                                suffix

                            }`;

                    },

                    35

                );

        }

    );

}


/*=========================================================
    SKILL BARS
=========================================================*/

function initializeSkillBars() {


    const bars =

        document.querySelectorAll(

            ".skill-progress"

        );


    bars.forEach(

        bar => {


            const value =

                bar.dataset.progress;


            if (value) {


                requestAnimationFrame(

                    () => {


                        bar.style.width =

                            `${

                                value

                            }%`;

                    }

                );

            }

        }

    );

}


/*=========================================================
    REVEAL ANIMATIONS
=========================================================*/

function initializeRevealAnimations() {


    const elements =

        document.querySelectorAll(

            ".stat-card, " +

            ".skill-card, " +

            ".timeline-item, " +

            ".education-card, " +

            ".technology-card, " +

            ".project-card, " +

            ".certificate-card, " +

            ".download-card"

        );


    if (

        !(

            "IntersectionObserver"

            in

            window

        )

    ) {


        elements.forEach(

            element =>

                element.classList.add(

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


                            entry.target

                                .classList.add(

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

                threshold:

                    0.15

            }

        );


    elements.forEach(

        element =>

            observer.observe(

                element

            )

    );

}


/*=========================================================
    ACTIVE NAVIGATION
=========================================================*/

function initializeActiveNavigation() {


    const sections =

        document.querySelectorAll(

            "section[id]"

        );


    const links =

        document.querySelectorAll(

            ".navbar a"

        );


    if (

        !sections.length ||

        !links.length

    )

        return;


    window.addEventListener(

        "scroll",

        () => {


            let current =

                "";


            sections.forEach(

                section => {


                    if (

                        window.scrollY >=

                        section.offsetTop -

                        180

                    ) {


                        current =

                            section.id;

                    }

                }

            );


            links.forEach(

                link => {


                    link.classList.toggle(

                        "active",

                        link.getAttribute(

                            "href"

                        )

                        ===

                        `#${

                            current

                        }`

                    );

                }

            );

        },

        {

            passive:

                true

        }

    );

}


/*=========================================================
    HEADER SCROLL
=========================================================*/

function initializeHeaderScroll() {


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

                window.scrollY >

                20

            );

        },

        {

            passive:

                true

        }

    );

}


/*=========================================================
    GENERAL LIGHTBOX
=========================================================*/

function initializeLightbox() {


    let lightbox =

        document.getElementById(

            "lightbox"

        );


    if (!lightbox) {


        lightbox =

            document.createElement(

                "div"

            );


        lightbox.id =

            "lightbox";


        lightbox.className =

            "lightbox";


        lightbox.innerHTML = `

            <div class="lightbox-overlay"></div>


            <div class="lightbox-content">

                <button

                    type="button"

                    class="lightbox-close"

                    aria-label="Close image">

                    <i class="fas fa-times"></i>

                </button>


                <img

                    id="lightboxImage"

                    src=""

                    alt="Image preview">

            </div>

        `;


        document.body.appendChild(

            lightbox

        );

    }


    const closeButton =

        lightbox.querySelector(

            ".lightbox-close"

        );


    const overlay =

        lightbox.querySelector(

            ".lightbox-overlay"

        );


    closeButton?.addEventListener(

        "click",

        closeImageLightbox

    );


    overlay?.addEventListener(

        "click",

        closeImageLightbox

    );


    document

        .querySelectorAll(

            ".gallery-item img"

        )

        .forEach(

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

    src,

    alt = ""

) {


    const lightbox =

        document.getElementById(

            "lightbox"

        );


    const image =

        document.getElementById(

            "lightboxImage"

        );


    if (

        !lightbox ||

        !image

    )

        return;


    image.src =

        src;


    image.alt =

        alt;


    lightbox.classList.add(

        "active"

    );


    document.body.classList.add(

        "modal-open"

    );

}


function closeImageLightbox() {


    const lightbox =

        document.getElementById(

            "lightbox"

        );


    if (!lightbox)

        return;


    lightbox.classList.remove(

        "active"

    );


    document.body.classList.remove(

        "modal-open"

    );

}


/*=========================================================
    LAZY LOADING
=========================================================*/

function initializeLazyImages() {


    const images =

        document.querySelectorAll(

            "img[data-src]"

        );


    if (

        !(

            "IntersectionObserver"

            in

            window

        )

    )

        return;


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


/*=========================================================
    CURRENT YEAR
=========================================================*/

function initializeCurrentYear() {


    document

        .querySelectorAll(

            ".current-year"

        )

        .forEach(

            element => {


                element.textContent =

                    new Date()

                        .getFullYear();

            }

        );

}


/*=========================================================
    KEYBOARD SHORTCUTS
=========================================================*/

function initializeGlobalKeyboardShortcuts() {


    document.addEventListener(

        "keydown",

        event => {


            if (

                event.key ===

                "Escape"

            ) {


                closeImageLightbox();


                closeCertificatePreview();

            }

        }

    );

}


/*=========================================================
    PWA
=========================================================*/

function initializePWA() {


    if (

        !(

            "serviceWorker"

            in

            navigator

        )

    )

        return;


    navigator.serviceWorker

        .register(

            "service-worker.js"

        )

        .catch(

            error => {


                console.error(

                    "Service Worker Error:",

                    error

                );

            }

        );

}


/*=========================================================
    NUMBER HELPERS
=========================================================*/

function extractNumber(

    value

) {


    const match =

        String(

            value

        )

        .match(

            /\d+/

        );


    return match

        ? Number(

            match[0]

        )

        : 0;

}


function extractSuffix(

    value

) {


    return String(

        value

    )

    .replace(

        /\d+/,

        ""

    );

}


/*=========================================================
    HTML ESCAPE
=========================================================*/

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


/*=========================================================
    VCARD ESCAPE
=========================================================*/

function escapeVCard(

    value

) {


    return String(

        value ?? ""

    )

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

}


/*=========================================================
    GLOBAL ERROR HANDLING
=========================================================*/

window.addEventListener(

    "error",

    event => {


        console.error(

            "Portfolio Error:",

            event.message

        );

    }

);


window.addEventListener(

    "unhandledrejection",

    event => {


        console.error(

            "Portfolio Promise Error:",

            event.reason

        );

    }

);
