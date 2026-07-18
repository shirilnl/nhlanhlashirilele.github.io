/* =========================================================
   NLS ENGINEERING PORTFOLIO
   analytics.js
   Milestone 4 — Part 5
   Privacy-Conscious Visitor Analytics
========================================================= */

"use strict";


/* =========================================================
   GLOBAL NAMESPACE
========================================================= */

window.NLS = window.NLS || {};


NLS.analytics = {


    /* =====================================================
       CONFIGURATION
    ===================================================== */

    storageKey:

        "nls-portfolio-analytics",


    sessionKey:

        "nls-analytics-session",


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.initializeStorage();


        this.trackPageView();


        this.trackSections();


        this.trackInteractions();


        this.trackDownloads();


        this.trackAI();


        this.setupAnalyticsDashboard();


        console.log(

            "NLS Analytics System initialized successfully."

        );

    },


    /* =====================================================
       INITIALIZE STORAGE
    ===================================================== */

    initializeStorage() {


        const existing =

            localStorage.getItem(

                this.storageKey

            );


        if (

            !existing

        ) {


            localStorage.setItem(

                this.storageKey,

                JSON.stringify({

                    pageViews: 0,

                    sectionViews: {},

                    projectClicks: {},

                    certificateViews: {},

                    certificateDownloads: {},

                    contactClicks: {},

                    qrDownloads: 0,

                    aiInteractions: 0,

                    themeChanges: 0,

                    sessions: 0,

                    lastVisit: null,

                    firstVisit: new Date()

                        .toISOString()

                })

            );

        }


        if (

            !sessionStorage.getItem(

                this.sessionKey

            )

        ) {


            sessionStorage.setItem(

                this.sessionKey,

                "true"

            );


            this.update(

                data => {


                    data.sessions++;

                }

            );

        }

    },


    /* =====================================================
       GET ANALYTICS
    ===================================================== */

    getData() {


        try {


            return JSON.parse(

                localStorage.getItem(

                    this.storageKey

                )

            );

        }

        catch (

            error

        ) {


            console.error(

                "Analytics data error:",

                error

            );


            return {};

        }

    },


    /* =====================================================
       UPDATE DATA
    ===================================================== */

    update(

        callback

    ) {


        const data =

            this.getData();


        callback(

            data

        );


        localStorage.setItem(

            this.storageKey,

            JSON.stringify(

                data

            )

        );

    },


    /* =====================================================
       PAGE VIEW
    ===================================================== */

    trackPageView() {


        this.update(

            data => {


                data.pageViews++;


                data.lastVisit =

                    new Date()

                        .toISOString();

            }

        );

    },


    /* =====================================================
       SECTION TRACKING
    ===================================================== */

    trackSections() {


        const sections =

            document.querySelectorAll(

                "section[id]"

            );


        if (

            !sections.length

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


                            const id =

                                entry.target.id;


                            this.update(

                                data => {


                                    if (

                                        !data.sectionViews[id]

                                    ) {


                                        data.sectionViews[id] =

                                            0;

                                    }


                                    data.sectionViews[id]++;

                                }

                            );


                            observer.unobserve(

                                entry.target

                            );

                        }

                    );

                },

                {

                    threshold:

                        0.4

                }

            );


        sections.forEach(

            section => {


                observer.observe(

                    section

                );

            }

        );

    },


    /* =====================================================
       GENERAL INTERACTIONS
    ===================================================== */

    trackInteractions() {


        document

            .addEventListener(

                "click",

                event => {


                    const project =

                        event.target.closest(

                            "[data-project-id], .project-card"

                        );


                    if (

                        project

                    ) {


                        const id =

                            project.dataset

                                .projectId ||

                            project

                                .querySelector(

                                    "h3"

                                )

                                ?.textContent ||

                            "unknown";


                        this.update(

                            data => {


                                if (

                                    !data.projectClicks[id]

                                ) {


                                    data.projectClicks[id] =

                                        0;

                                }


                                data.projectClicks[id]++;

                            }

                        );

                    }


                    const certificate =

                        event.target.closest(

                            "[data-certificate-id], .certificate-card"

                        );


                    if (

                        certificate

                    ) {


                        const id =

                            certificate.dataset

                                .certificateId ||

                            certificate

                                .querySelector(

                                    "h3"

                                )

                                ?.textContent ||

                            "unknown";


                        this.update(

                            data => {


                                if (

                                    !data.certificateViews[id]

                                ) {


                                    data.certificateViews[id] =

                                        0;

                                }


                                data.certificateViews[id]++;

                            }

                        );

                    }


                    const contact =

                        event.target.closest(

                            "[data-contact-phone], [data-contact-email], [data-contact-whatsapp], [data-contact-linkedin]"

                        );


                    if (

                        contact

                    ) {


                        const type =

                            contact.dataset

                                .contactPhone

                                !== undefined

                                ? "phone"

                                :

                            contact.dataset

                                .contactEmail

                                !== undefined

                                ? "email"

                                :

                            contact.dataset

                                .contactWhatsapp

                                !== undefined

                                ? "whatsapp"

                                :

                                "linkedin";


                        this.update(

                            data => {


                                if (

                                    !data.contactClicks[type]

                                ) {


                                    data.contactClicks[type] =

                                        0;

                                }


                                data.contactClicks[type]++;

                            }

                        );

                    }

                }

            );

    },


    /* =====================================================
       DOWNLOAD TRACKING
    ===================================================== */

    trackDownloads() {


        document

            .addEventListener(

                "click",

                event => {


                    const qrButton =

                        event.target.closest(

                            "[data-download-qr]"

                        );


                    if (

                        qrButton

                    ) {


                        this.update(

                            data => {


                                data.qrDownloads++;

                            }

                        );

                    }


                    const certificateDownload =

                        event.target.closest(

                            "[data-download-certificate], [data-download-vcard]"

                        );


                    if (

                        certificateDownload

                    ) {


                        const id =

                            certificateDownload.dataset

                                .certificateId ||

                            "certificate";


                        this.update(

                            data => {


                                if (

                                    !data.certificateDownloads[id]

                                ) {


                                    data.certificateDownloads[id] =

                                        0;

                                }


                                data.certificateDownloads[id]++;

                            }

                        );

                    }

                }

            );

    },


    /* =====================================================
       AI TRACKING
    ===================================================== */

    trackAI() {


        document

            .addEventListener(

                "submit",

                event => {


                    if (

                        event.target.matches(

                            "[data-ai-form]"

                        )

                    ) {


                        this.update(

                            data => {


                                data.aiInteractions++;

                            }

                        );

                    }

                }

            );

    },


    /* =====================================================
       TRACK THEME CHANGES
    ===================================================== */

    trackThemeChange() {


        this.update(

            data => {


                data.themeChanges++;

            }

        );

    },


    /* =====================================================
       DASHBOARD ACCESS
    ===================================================== */

    setupAnalyticsDashboard() {


        document

            .addEventListener(

                "click",

                event => {


                    const button =

                        event.target.closest(

                            "[data-analytics-dashboard]"

                        );


                    if (!button)

                        return;


                    this.showDashboard();

                }

            );

    },


    /* =====================================================
       SHOW DASHBOARD
    ===================================================== */

    showDashboard() {


        const data =

            this.getData();


        const modal =

            document.createElement(

                "div"

            );


        modal.className =

            "analytics-modal";


        modal.innerHTML = `

            <div class="analytics-dashboard">


                <div class="analytics-header">

                    <div>

                        <span>

                            PORTFOLIO ANALYTICS

                        </span>


                        <h2>

                            Visitor Insights

                        </h2>

                    </div>


                    <button

                        type="button"

                        data-analytics-close>

                        <i class="fas fa-times"></i>

                    </button>

                </div>


                <div class="analytics-grid">


                    <div class="analytics-card">

                        <strong>

                            ${data.pageViews || 0}

                        </strong>


                        <span>

                            Page Views

                        </span>

                    </div>


                    <div class="analytics-card">

                        <strong>

                            ${data.sessions || 0}

                        </strong>


                        <span>

                            Sessions

                        </span>

                    </div>


                    <div class="analytics-card">

                        <strong>

                            ${data.qrDownloads || 0}

                        </strong>


                        <span>

                            QR Downloads

                        </span>

                    </div>


                    <div class="analytics-card">

                        <strong>

                            ${data.aiInteractions || 0}

                        </strong>


                        <span>

                            AI Interactions

                        </span>

                    </div>

                </div>


                <section>

                    <h3>

                        Section Views

                    </h3>


                    ${this.renderObject(

                        data.sectionViews

                    )}

                </section>


                <section>

                    <h3>

                        Project Clicks

                    </h3>


                    ${this.renderObject(

                        data.projectClicks

                    )}

                </section>


                <section>

                    <h3>

                        Contact Interactions

                    </h3>


                    ${this.renderObject(

                        data.contactClicks

                    )}

                </section>


                <section>

                    <h3>

                        Certificate Downloads

                    </h3>


                    ${this.renderObject(

                        data.certificateDownloads

                    )}

                </section>


                <div class="analytics-actions">


                    <button

                        type="button"

                        class="btn btn-secondary"

                        data-export-analytics>

                        <i class="fas fa-download"></i>

                        Export Analytics

                    </button>


                    <button

                        type="button"

                        class="btn btn-danger"

                        data-clear-analytics>

                        <i class="fas fa-trash"></i>

                        Clear Analytics

                    </button>

                </div>

            </div>

        `;


        document.body.appendChild(

            modal

        );


        modal

            .querySelector(

                "[data-analytics-close]"

            )

            .addEventListener(

                "click",

                () => {


                    modal.remove();

                }

            );


        modal

            .querySelector(

                "[data-clear-analytics]"

            )

            .addEventListener(

                "click",

                () => {


                    if (

                        !confirm(

                            "Clear all analytics data?"

                        )

                    )

                        return;


                    localStorage.removeItem(

                        this.storageKey

                    );


                    window.location.reload();

                }

            );


        modal

            .querySelector(

                "[data-export-analytics]"

            )

            .addEventListener(

                "click",

                () => {


                    this.exportData();

                }

            );

    },


    /* =====================================================
       RENDER OBJECT
    ===================================================== */

    renderObject(

        object = {}

    ) {


        const entries =

            Object.entries(

                object

            );


        if (

            !entries.length

        ) {


            return `

                <p class="analytics-empty">

                    No data collected yet.

                </p>

            `;

        }


        return `

            <div class="analytics-list">

                ${entries

                    .map(

                        ([key, value]) => `

                            <div

                                class="analytics-row">

                                <span>

                                    ${this.escapeHTML(

                                        key

                                    )}

                                </span>


                                <strong>

                                    ${value}

                                </strong>

                            </div>

                        `

                    )

                    .join(

                        ""

                    )}

            </div>

        `;

    },


    /* =====================================================
       EXPORT DATA
    ===================================================== */

    exportData() {


        const data =

            this.getData();


        const blob =

            new Blob(

                [

                    JSON.stringify(

                        data,

                        null,

                        4

                    )

                ],

                {

                    type:

                        "application/json"

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

            "nls-portfolio-analytics.json";


        link.click();


        URL.revokeObjectURL(

            url

        );

    },


    /* =====================================================
       ESCAPE HTML
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
   INITIALIZE
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        NLS.analytics.init();

    }

);