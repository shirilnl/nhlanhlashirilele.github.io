/* =========================================================
   NLS ENGINEERING PORTFOLIO
   admin.js
   Milestone 4 — Part 3
   Advanced Local Admin Dashboard
========================================================= */

"use strict";


/* =========================================================
   GLOBAL NAMESPACE
========================================================= */

window.NLS = window.NLS || {};


NLS.admin = {


    /* =====================================================
       CONFIGURATION
    ===================================================== */

    storageKey:

        "nls-portfolio-admin-data",


    sessionKey:

        "nls-admin-session",


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.setupAdminAccess();

        this.setupAdminLogout();

        this.setupAdminDashboard();

        this.setupExport();

        this.setupImport();

        this.setupReset();


        console.log(

            "NLS Admin System initialized successfully."

        );

    },


    /* =====================================================
       ADMIN ACCESS
    ===================================================== */

    setupAdminAccess() {


        document

            .querySelectorAll(

                "[data-admin-login]"

            )

            .forEach(

                button => {


                    button.addEventListener(

                        "click",

                        () => {


                            this.showLogin();

                        }

                    );

                }

            );


        document

            .querySelectorAll(

                "[data-admin-dashboard]"

            )

            .forEach(

                button => {


                    button.addEventListener(

                        "click",

                        () => {


                            this.openDashboard();

                        }

                    );

                }

            );

    },


    /* =====================================================
       LOGIN
    ===================================================== */

    showLogin() {


        const modal =

            this.createModal(

                "adminLoginModal"

            );


        modal.innerHTML = `

            <div class="admin-modal-card">

                <button

                    type="button"

                    class="admin-close"

                    data-admin-close>

                    <i class="fas fa-times"></i>

                </button>


                <div class="admin-login-header">

                    <i class="fas fa-lock"></i>


                    <h2>Admin Access</h2>


                    <p>

                        Enter your local admin password.

                    </p>

                </div>


                <form id="adminLoginForm">

                    <input

                        type="password"

                        id="adminPassword"

                        placeholder="Password"

                        required>


                    <button

                        type="submit"

                        class="btn btn-primary">

                        <i class="fas fa-sign-in-alt"></i>

                        Login

                    </button>

                </form>


                <small class="admin-security-note">

                    This is a browser-based local admin system.

                    It is not server-side authentication.

                </small>

            </div>

        `;


        modal

            .querySelector(

                "[data-admin-close]"

            )

            .addEventListener(

                "click",

                () =>

                    modal.remove()

            );


        modal

            .querySelector(

                "#adminLoginForm"

            )

            .addEventListener(

                "submit",

                event => {


                    event.preventDefault();


                    const password =

                        modal

                            .querySelector(

                                "#adminPassword"

                            )

                            .value;


                    if (

                        this.validatePassword(

                            password

                        )

                    ) {


                        sessionStorage.setItem(

                            this.sessionKey,

                            "true"

                        );


                        modal.remove();


                        this.openDashboard();

                    }

                    else {


                        this.showMessage(

                            "Incorrect password.",

                            "error"

                        );

                    }

                }

            );

    },


    /* =====================================================
       PASSWORD
    ===================================================== */

    validatePassword(

        password

    ) {


        const configuredPassword =

            window.NLS?.config

                ?.admin

                ?.password;


        if (

            configuredPassword

        ) {


            return (

                password ===

                configuredPassword

            );

        }


        /* Temporary local password */

        return (

            password ===

            "NLS-Admin-2026"

        );

    },


    /* =====================================================
       LOGOUT
    ===================================================== */

    setupAdminLogout() {


        document

            .addEventListener(

                "click",

                event => {


                    const button =

                        event.target.closest(

                            "[data-admin-logout]"

                        );


                    if (!button)

                        return;


                    sessionStorage.removeItem(

                        this.sessionKey

                    );


                    window.location.reload();

                }

            );

    },


    /* =====================================================
       DASHBOARD
    ===================================================== */

    setupAdminDashboard() {


        document

            .addEventListener(

                "click",

                event => {


                    const button =

                        event.target.closest(

                            "[data-admin-open]"

                        );


                    if (!button)

                        return;


                    if (

                        !this.isLoggedIn()

                    ) {


                        this.showLogin();


                        return;

                    }


                    this.openDashboard();

                }

            );

    },


    /* =====================================================
       CHECK LOGIN
    ===================================================== */

    isLoggedIn() {


        return (

            sessionStorage.getItem(

                this.sessionKey

            ) ===

            "true"

        );

    },


    /* =====================================================
       OPEN DASHBOARD
    ===================================================== */

    openDashboard() {


        if (

            !this.isLoggedIn()

        ) {


            this.showLogin();


            return;

        }


        const modal =

            this.createModal(

                "adminDashboardModal"

            );


        const data =

            this.getData();


        modal.innerHTML = `

            <div class="admin-dashboard">

                <div class="admin-header">

                    <div>

                        <span class="admin-label">

                            ADMIN PANEL

                        </span>


                        <h2>

                            Portfolio Management

                        </h2>

                    </div>


                    <div class="admin-header-actions">

                        <button

                            type="button"

                            class="btn btn-secondary"

                            data-admin-logout>

                            Logout

                        </button>


                        <button

                            type="button"

                            class="admin-close"

                            data-admin-close>

                            <i class="fas fa-times"></i>

                        </button>

                    </div>

                </div>


                <div class="admin-stats">

                    <div class="admin-stat">

                        <strong>

                            ${data.projects.length}

                        </strong>

                        <span>Projects</span>

                    </div>


                    <div class="admin-stat">

                        <strong>

                            ${data.certificates.length}

                        </strong>

                        <span>Certificates</span>

                    </div>


                    <div class="admin-stat">

                        <strong>

                            ${data.skills?.length || 0}

                        </strong>

                        <span>Skills</span>

                    </div>

                </div>


                <div class="admin-actions">

                    <button

                        type="button"

                        class="btn btn-primary"

                        data-admin-add-project>

                        <i class="fas fa-plus"></i>

                        Add Project

                    </button>


                    <button

                        type="button"

                        class="btn btn-primary"

                        data-admin-add-certificate>

                        <i class="fas fa-certificate"></i>

                        Add Certificate

                    </button>


                    <button

                        type="button"

                        class="btn btn-secondary"

                        data-admin-export>

                        <i class="fas fa-download"></i>

                        Export Data

                    </button>


                    <label

                        class="btn btn-secondary">

                        <i class="fas fa-upload"></i>

                        Import Data


                        <input

                            type="file"

                            accept=".json"

                            data-admin-import

                            hidden>

                    </label>


                    <button

                        type="button"

                        class="btn btn-danger"

                        data-admin-reset>

                        <i class="fas fa-undo"></i>

                        Reset Changes

                    </button>

                </div>


                <section class="admin-section">

                    <div class="admin-section-header">

                        <h3>Projects</h3>

                    </div>


                    <div

                        class="admin-items"

                        data-admin-project-list>

                    </div>

                </section>


                <section class="admin-section">

                    <div class="admin-section-header">

                        <h3>Certificates</h3>

                    </div>


                    <div

                        class="admin-items"

                        data-admin-certificate-list>

                    </div>

                </section>

            </div>

        `;


        document.body.appendChild(

            modal

        );


        modal

            .querySelector(

                "[data-admin-close]"

            )

            .addEventListener(

                "click",

                () =>

                    modal.remove()

            );


        this.renderProjects(

            modal

        );


        this.renderCertificates(

            modal

        );


        this.setupDashboardActions(

            modal

        );

    },


    /* =====================================================
       GET DATA
    ===================================================== */

    getData() {


        const stored =

            localStorage.getItem(

                this.storageKey

            );


        if (

            stored

        ) {


            try {


                return JSON.parse(

                    stored

                );

            }

            catch (

                error

            ) {


                console.error(

                    error

                );

            }

        }


        return {

            projects:

                Array.isArray(

                    NLS.data?.projects

                )

                    ? [

                        ...NLS.data.projects

                    ]

                    : [],


            certificates:

                Array.isArray(

                    NLS.data?.certificates

                )

                    ? [

                        ...NLS.data.certificates

                    ]

                    : [],


            skills:

                Array.isArray(

                    NLS.data?.skills

                )

                    ? [

                        ...NLS.data.skills

                    ]

                    : []

        };

    },


    /* =====================================================
       SAVE DATA
    ===================================================== */

    saveData(

        data

    ) {


        localStorage.setItem(

            this.storageKey,

            JSON.stringify(

                data

            )

        );


        this.showMessage(

            "Portfolio data saved locally.",

            "success"

        );

    },


    /* =====================================================
       RENDER PROJECTS
    ===================================================== */

    renderProjects(

        modal

    ) {


        const container =

            modal.querySelector(

                "[data-admin-project-list]"

            );


        const data =

            this.getData();


        container.innerHTML = "";


        if (

            data.projects.length ===

            0

        ) {


            container.innerHTML =

                "<p>No projects found.</p>";


            return;

        }


        data.projects.forEach(

            (project, index) => {


                const item =

                    document.createElement(

                        "div"

                    );


                item.className =

                    "admin-item";


                item.innerHTML = `

                    <div>

                        <strong>

                            ${this.escapeHTML(

                                project.title ||

                                "Untitled Project"

                            )}

                        </strong>


                        <small>

                            ${this.escapeHTML(

                                project.category ||

                                "Uncategorized"

                            )}

                        </small>

                    </div>


                    <div class="admin-item-actions">

                        <button

                            type="button"

                            class="btn btn-secondary"

                            data-edit-project="${index}">

                            Edit

                        </button>


                        <button

                            type="button"

                            class="btn btn-danger"

                            data-delete-project="${index}">

                            Delete

                        </button>

                    </div>

                `;


                container.appendChild(

                    item

                );

            }

        );

    },


    /* =====================================================
       RENDER CERTIFICATES
    ===================================================== */

    renderCertificates(

        modal

    ) {


        const container =

            modal.querySelector(

                "[data-admin-certificate-list]"

            );


        const data =

            this.getData();


        container.innerHTML = "";


        if (

            data.certificates.length ===

            0

        ) {


            container.innerHTML =

                "<p>No certificates found.</p>";


            return;

        }


        data.certificates.forEach(

            (certificate, index) => {


                const item =

                    document.createElement(

                        "div"

                    );


                item.className =

                    "admin-item";


                item.innerHTML = `

                    <div>

                        <strong>

                            ${this.escapeHTML(

                                certificate.title ||

                                "Untitled Certificate"

                            )}

                        </strong>

                    </div>


                    <div class="admin-item-actions">

                        <button

                            type="button"

                            class="btn btn-danger"

                            data-delete-certificate="${index}">

                            Delete

                        </button>

                    </div>

                `;


                container.appendChild(

                    item

                );

            }

        );

    },


    /* =====================================================
       DASHBOARD ACTIONS
    ===================================================== */

    setupDashboardActions(

        modal

    ) {


        modal

            .querySelector(

                "[data-admin-add-project]"

            )

            .addEventListener(

                "click",

                () => {


                    this.showProjectForm(

                        modal

                    );

                }

            );


        modal

            .querySelector(

                "[data-admin-add-certificate]"

            )

            .addEventListener(

                "click",

                () => {


                    this.showCertificateForm(

                        modal

                    );

                }

            );


        modal

            .addEventListener(

                "click",

                event => {


                    const deleteProject =

                        event.target.closest(

                            "[data-delete-project]"

                        );


                    if (

                        deleteProject

                    ) {


                        const index =

                            Number(

                                deleteProject.dataset

                                    .deleteProject

                            );


                        this.deleteProject(

                            index,

                            modal

                        );

                    }


                    const deleteCertificate =

                        event.target.closest(

                            "[data-delete-certificate]"

                        );


                    if (

                        deleteCertificate

                    ) {


                        const index =

                            Number(

                                deleteCertificate.dataset

                                    .deleteCertificate

                            );


                        this.deleteCertificate(

                            index,

                            modal

                        );

                    }

                }

            );

    },


    /* =====================================================
       ADD PROJECT
    ===================================================== */

    showProjectForm(

        dashboard

    ) {


        const modal =

            this.createModal(

                "adminProjectFormModal"

            );


        modal.innerHTML = `

            <div class="admin-modal-card">

                <button

                    type="button"

                    class="admin-close"

                    data-admin-close>

                    <i class="fas fa-times"></i>

                </button>


                <h2>Add Project</h2>


                <form id="adminProjectForm">

                    <input

                        name="title"

                        placeholder="Project title"

                        required>


                    <input

                        name="category"

                        placeholder="Category"

                        required>


                    <input

                        name="image"

                        placeholder="Image path">


                    <textarea

                        name="description"

                        placeholder="Project description"

                        required></textarea>


                    <input

                        name="technologies"

                        placeholder="Technologies separated by commas">


                    <button

                        type="submit"

                        class="btn btn-primary">

                        Save Project

                    </button>

                </form>

            </div>

        `;


        document.body.appendChild(

            modal

        );


        modal

            .querySelector(

                "[data-admin-close]"

            )

            .addEventListener(

                "click",

                () =>

                    modal.remove()

            );


        modal

            .querySelector(

                "#adminProjectForm"

            )

            .addEventListener(

                "submit",

                event => {


                    event.preventDefault();


                    const formData =

                        new FormData(

                            event.target

                        );


                    const data =

                        this.getData();


                    data.projects.push({

                        title:

                            formData.get(

                                "title"

                            ),


                        category:

                            formData.get(

                                "category"

                            ),


                        image:

                            formData.get(

                                "image"

                            ),


                        description:

                            formData.get(

                                "description"

                            ),


                        technologies:

                            String(

                                formData.get(

                                    "technologies"

                                ) ||

                                ""

                            )

                            .split(

                                ","

                            )

                            .map(

                                item =>

                                    item.trim()

                            )

                            .filter(

                                Boolean

                            )

                    });


                    this.saveData(

                        data

                    );


                    modal.remove();


                    dashboard.remove();


                    this.openDashboard();

                }

            );

    },


    /* =====================================================
       ADD CERTIFICATE
    ===================================================== */

    showCertificateForm(

        dashboard

    ) {


        const modal =

            this.createModal(

                "adminCertificateFormModal"

            );


        modal.innerHTML = `

            <div class="admin-modal-card">

                <button

                    type="button"

                    class="admin-close"

                    data-admin-close>

                    <i class="fas fa-times"></i>

                </button>


                <h2>Add Certificate</h2>


                <form id="adminCertificateForm">

                    <input

                        name="title"

                        placeholder="Certificate title"

                        required>


                    <input

                        name="image"

                        placeholder="Certificate image path">


                    <input

                        name="file"

                        placeholder="Certificate file path">


                    <button

                        type="submit"

                        class="btn btn-primary">

                        Save Certificate

                    </button>

                </form>

            </div>

        `;


        document.body.appendChild(

            modal

        );


        modal

            .querySelector(

                "[data-admin-close]"

            )

            .addEventListener(

                "click",

                () =>

                    modal.remove()

            );


        modal

            .querySelector(

                "#adminCertificateForm"

            )

            .addEventListener(

                "submit",

                event => {


                    event.preventDefault();


                    const formData =

                        new FormData(

                            event.target

                        );


                    const data =

                        this.getData();


                    data.certificates.push({

                        title:

                            formData.get(

                                "title"

                            ),


                        image:

                            formData.get(

                                "image"

                            ),


                        file:

                            formData.get(

                                "file"

                            )

                    });


                    this.saveData(

                        data

                    );


                    modal.remove();


                    dashboard.remove();


                    this.openDashboard();

                }

            );

    },


    /* =====================================================
       DELETE PROJECT
    ===================================================== */

    deleteProject(

        index,

        dashboard

    ) {


        if (

            !confirm(

                "Delete this project?"

            )

        )

            return;


        const data =

            this.getData();


        data.projects.splice(

            index,

            1

        );


        this.saveData(

            data

        );


        dashboard.remove();


        this.openDashboard();

    },


    /* =====================================================
       DELETE CERTIFICATE
    ===================================================== */

    deleteCertificate(

        index,

        dashboard

    ) {


        if (

            !confirm(

                "Delete this certificate?"

            )

        )

            return;


        const data =

            this.getData();


        data.certificates.splice(

            index,

            1

        );


        this.saveData(

            data

        );


        dashboard.remove();


        this.openDashboard();

    },


    /* =====================================================
       EXPORT DATA
    ===================================================== */

    setupExport() {


        document

            .addEventListener(

                "click",

                event => {


                    const button =

                        event.target.closest(

                            "[data-admin-export]"

                        );


                    if (!button)

                        return;


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

                        "nls-portfolio-data.json";


                    link.click();


                    URL.revokeObjectURL(

                        url

                    );

                }

            );

    },


    /* =====================================================
       IMPORT DATA
    ===================================================== */

    setupImport() {


        document

            .addEventListener(

                "change",

                event => {


                    const input =

                        event.target.closest(

                            "[data-admin-import]"

                        );


                    if (!input)

                        return;


                    const file =

                        input.files[0];


                    if (!file)

                        return;


                    const reader =

                        new FileReader();


                    reader.onload =

                        event => {


                            try {


                                const importedData =

                                    JSON.parse(

                                        event.target.result

                                    );


                                if (

                                    !importedData.projects ||

                                    !importedData.certificates

                                ) {


                                    throw new Error(

                                        "Invalid portfolio data."

                                    );

                                }


                                localStorage.setItem(

                                    this.storageKey,

                                    JSON.stringify(

                                        importedData

                                    )

                                );


                                this.showMessage(

                                    "Portfolio data imported successfully.",

                                    "success"

                                );


                                setTimeout(

                                    () =>

                                        window.location.reload(),

                                    1000

                                );

                            }

                            catch (

                                error

                            ) {


                                console.error(

                                    error

                                );


                                this.showMessage(

                                    "Invalid JSON file.",

                                    "error"

                                );

                            }

                        };


                    reader.readAsText(

                        file

                    );

                }

            );

    },


    /* =====================================================
       RESET DATA
    ===================================================== */

    setupReset() {


        document

            .addEventListener(

                "click",

                event => {


                    const button =

                        event.target.closest(

                            "[data-admin-reset]"

                        );


                    if (!button)

                        return;


                    if (

                        !confirm(

                            "Reset all local portfolio changes?"

                        )

                    )

                        return;


                    localStorage.removeItem(

                        this.storageKey

                    );


                    window.location.reload();

                }

            );

    },


    /* =====================================================
       MODAL CREATOR
    ===================================================== */

    createModal(

        id

    ) {


        const existing =

            document.getElementById(

                id

            );


        if (

            existing

        ) {


            existing.remove();

        }


        const modal =

            document.createElement(

                "div"

            );


        modal.id =

            id;


        modal.className =

            "admin-modal";


        return modal;

    },


    /* =====================================================
       MESSAGE
    ===================================================== */

    showMessage(

        message,

        type = "info"

    ) {


        if (

            window.NLS?.contact

                ?.showNotification

        ) {


            NLS.contact.showNotification(

                message,

                type

            );


            return;

        }


        alert(

            message

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


        NLS.admin.init();

    }

);
