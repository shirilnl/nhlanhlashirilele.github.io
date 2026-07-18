/* =========================================================
   NLS ENGINEERING PORTFOLIO
   ai.js
   Milestone 4 — Part 4
   AI Portfolio Assistant
========================================================= */

"use strict";


/* =========================================================
   GLOBAL NAMESPACE
========================================================= */

window.NLS = window.NLS || {};


NLS.ai = {


    /* =====================================================
       INITIALIZE
    ===================================================== */

    init() {


        this.createAssistant();

        this.setupAssistant();

        console.log(

            "NLS AI Portfolio Assistant initialized successfully."

        );

    },


    /* =====================================================
       CREATE ASSISTANT
    ===================================================== */

    createAssistant() {


        if (

            document.querySelector(

                "#aiAssistant"

            )

        )

            return;


        const assistant =

            document.createElement(

                "div"

            );


        assistant.id =

            "aiAssistant";


        assistant.innerHTML = `

            <button

                type="button"

                class="ai-floating-button"

                data-ai-toggle

                aria-label="Open AI Portfolio Assistant">

                <i class="fas fa-robot"></i>

            </button>


            <div

                class="ai-chat-window"

                data-ai-window

                hidden>


                <div class="ai-chat-header">

                    <div class="ai-chat-title">

                        <div class="ai-avatar">

                            <i class="fas fa-robot"></i>

                        </div>


                        <div>

                            <strong>

                                Portfolio Assistant

                            </strong>


                            <small>

                                Ask me about Nhlanhla's work

                            </small>

                        </div>

                    </div>


                    <button

                        type="button"

                        class="ai-close"

                        data-ai-close

                        aria-label="Close assistant">

                        <i class="fas fa-times"></i>

                    </button>

                </div>


                <div

                    class="ai-chat-messages"

                    data-ai-messages>

                </div>


                <div

                    class="ai-quick-questions"

                    data-ai-quick-questions>


                    <button

                        type="button"

                        data-ai-question="What engineering experience do you have?">

                        Experience

                    </button>


                    <button

                        type="button"

                        data-ai-question="What projects have you worked on?">

                        Projects

                    </button>


                    <button

                        type="button"

                        data-ai-question="What technologies do you use?">

                        Skills

                    </button>


                    <button

                        type="button"

                        data-ai-question="How can I contact you?">

                        Contact

                    </button>

                </div>


                <form

                    class="ai-chat-form"

                    data-ai-form>


                    <input

                        type="text"

                        name="message"

                        placeholder="Ask a question..."

                        autocomplete="off"

                        required>


                    <button

                        type="submit"

                        aria-label="Send message">

                        <i class="fas fa-paper-plane"></i>

                    </button>

                </form>

            </div>

        `;


        document.body.appendChild(

            assistant

        );

    },


    /* =====================================================
       SETUP ASSISTANT
    ===================================================== */

    setupAssistant() {


        const toggle =

            document.querySelector(

                "[data-ai-toggle]"

            );


        const close =

            document.querySelector(

                "[data-ai-close]"

            );


        const windowElement =

            document.querySelector(

                "[data-ai-window]"

            );


        const form =

            document.querySelector(

                "[data-ai-form]"

            );


        if (!toggle)

            return;


        toggle.addEventListener(

            "click",

            () => {


                const isOpen =

                    !windowElement.hidden;


                windowElement.hidden =

                    isOpen;


                if (

                    !isOpen

                ) {


                    this.showWelcomeMessage();

                }

            }

        );


        close?.addEventListener(

            "click",

            () => {


                windowElement.hidden =

                    true;

            }

        );


        form?.addEventListener(

            "submit",

            event => {


                event.preventDefault();


                const input =

                    form.querySelector(

                        "input"

                    );


                const message =

                    input.value.trim();


                if (!message)

                    return;


                input.value = "";


                this.addMessage(

                    message,

                    "user"

                );


                this.respond(

                    message

                );

            }

        );


        document

            .querySelectorAll(

                "[data-ai-question]"

            )

            .forEach(

                button => {


                    button.addEventListener(

                        "click",

                        () => {


                            const question =

                                button.dataset

                                    .aiQuestion;


                            this.addMessage(

                                question,

                                "user"

                            );


                            this.respond(

                                question

                            );

                        }

                    );

                }

            );

    },


    /* =====================================================
       WELCOME MESSAGE
    ===================================================== */

    showWelcomeMessage() {


        const messages =

            document.querySelector(

                "[data-ai-messages]"

            );


        if (

            messages.children.length

        )

            return;


        this.addMessage(

            `

                Hello! 👋

                I'm the NLS Portfolio Assistant.

                I can tell you about Nhlanhla's engineering

                experience, projects, skills, certificates,

                and contact information.

            `,

            "assistant"

        );

    },


    /* =====================================================
       ADD MESSAGE
    ===================================================== */

    addMessage(

        message,

        sender

    ) {


        const messages =

            document.querySelector(

                "[data-ai-messages]"

            );


        if (!messages)

            return;


        const element =

            document.createElement(

                "div"

            );


        element.className =

            `ai-message ${sender}`;


        element.innerHTML =

            this.formatMessage(

                message

            );


        messages.appendChild(

            element

        );


        messages.scrollTop =

            messages.scrollHeight;

    },


    /* =====================================================
       FORMAT MESSAGE
    ===================================================== */

    formatMessage(

        message

    ) {


        return this.escapeHTML(

            message

        )

        .replace(

            /\n/g,

            "<br>"

        );

    },


    /* =====================================================
       AI RESPONSE
    ===================================================== */

    respond(

        question

    ) {


        this.showTyping();


        setTimeout(

            () => {


                this.removeTyping();


                const response =

                    this.generateResponse(

                        question

                    );


                this.addMessage(

                    response,

                    "assistant"

                );

            },

            700

        );

    },


    /* =====================================================
       RESPONSE ENGINE
    ===================================================== */

    generateResponse(

        question

    ) {


        const text =

            question

                .toLowerCase()

                .trim();


        const data =

            NLS.data ||

            {};


        /* ================================================
           CONTACT
        ================================================ */

        if (

            text.includes(

                "contact"

            ) ||

            text.includes(

                "email"

            ) ||

            text.includes(

                "phone"

            ) ||

            text.includes(

                "whatsapp"

            )

        ) {


            const contact =

                NLS.config

                    ?.contact ||

                {};


            return `

                You can contact Nhlanhla through the

                contact section of this portfolio.

                ${contact.email

                    ? `Email: ${contact.email}`

                    : ""}

                ${contact.phone

                    ? `Phone: ${contact.phone}`

                    : ""}

            `;

        }


        /* ================================================
           EXPERIENCE
        ================================================ */

        if (

            text.includes(

                "experience"

            ) ||

            text.includes(

                "engineer"

            ) ||

            text.includes(

                "work"

            ) ||

            text.includes(

                "career"

            )

        ) {


            return `

                Nhlanhla is an Electrical Engineering

                professional specialising in telecommunications

                networks, infrastructure, surveillance,

                physical security systems, fibre networks,

                microwave systems and technical infrastructure.

            `;

        }


        /* ================================================
           PROJECTS
        ================================================ */

        if (

            text.includes(

                "project"

            ) ||

            text.includes(

                "portfolio"

            ) ||

            text.includes(

                "built"

            )

        ) {


            const projects =

                Array.isArray(

                    data.projects

                )

                    ? data.projects

                    : [];


            if (

                !projects.length

            ) {


                return `

                    You can explore the Projects section

                    to view Nhlanhla's work.

                `;

            }


            const projectNames =

                projects

                    .slice(

                        0,

                        5

                    )

                    .map(

                        project =>

                            project.title

                    )

                    .filter(

                        Boolean

                    )

                    .join(

                        ", "

                    );


            return `

                Nhlanhla's portfolio includes projects such as:

                ${projectNames}.

                You can explore the Projects section

                for more details.

            `;

        }


        /* ================================================
           TECHNOLOGIES AND SKILLS
        ================================================ */

        if (

            text.includes(

                "skill"

            ) ||

            text.includes(

                "technology"

            ) ||

            text.includes(

                "technologies"

            ) ||

            text.includes(

                "software"

            )

        ) {


            const skills =

                Array.isArray(

                    data.skills

                )

                    ? data.skills

                    : [];


            if (

                skills.length

            ) {


                return `

                    Nhlanhla's skills include:

                    ${skills

                        .map(

                            skill =>

                                typeof skill ===

                                "string"

                                    ? skill

                                    : skill.name

                        )

                        .filter(

                            Boolean

                        )

                        .join(

                            ", "

                        )}.

                `;

            }


            return `

                Nhlanhla's technical background includes

                telecommunications networks, fibre,

                microwave, infrastructure, security systems,

                monitoring and engineering technologies.

            `;

        }


        /* ================================================
           CERTIFICATES
        ================================================ */

        if (

            text.includes(

                "certificate"

            ) ||

            text.includes(

                "certification"

            ) ||

            text.includes(

                "qualification"

            )

        ) {


            const certificates =

                Array.isArray(

                    data.certificates

                )

                    ? data.certificates

                    : [];


            if (

                certificates.length

            ) {


                const names =

                    certificates

                        .map(

                            certificate =>

                                certificate.title

                        )

                        .filter(

                            Boolean

                        )

                        .join(

                            ", "

                        );


                return `

                    Nhlanhla's certificates include:

                    ${names}.

                    You can view the full certificates

                    in the Certificates section.

                `;

            }


            return `

                You can view Nhlanhla's professional

                certifications in the Certificates section.

            `;

        }


        /* ================================================
           AVAILABILITY
        ================================================ */

        if (

            text.includes(

                "available"

            ) ||

            text.includes(

                "hire"

            ) ||

            text.includes(

                "job"

            ) ||

            text.includes(

                "employment"

            )

        ) {


            return `

                For professional opportunities, collaboration

                or engineering-related enquiries, please use

                the Contact section to get in touch directly.

            `;

        }


        /* ================================================
           GREETINGS
        ================================================ */

        if (

            text ===

            "hi" ||

            text ===

            "hello" ||

            text.includes(

                "good morning"

            ) ||

            text.includes(

                "good afternoon"

            )

        ) {


            return `

                Hello! 👋

                How can I help you explore this portfolio?

            `;

        }


        /* ================================================
           DEFAULT
        ================================================ */

        return `

            I can help you learn more about:

            • Engineering experience

            • Projects

            • Skills and technologies

            • Certificates

            • Contact information


            Try asking:

            "What engineering experience do you have?"

        `;

    },


    /* =====================================================
       TYPING INDICATOR
    ===================================================== */

    showTyping() {


        const messages =

            document.querySelector(

                "[data-ai-messages]"

            );


        if (!messages)

            return;


        const typing =

            document.createElement(

                "div"

            );


        typing.className =

            "ai-message assistant ai-typing";


        typing.dataset.aiTyping =

            "true";


        typing.innerHTML = `

            <span></span>

            <span></span>

            <span></span>

        `;


        messages.appendChild(

            typing

        );


        messages.scrollTop =

            messages.scrollHeight;

    },


    /* =====================================================
       REMOVE TYPING
    ===================================================== */

    removeTyping() {


        document

            .querySelector(

                "[data-ai-typing]"

            )

            ?.remove();

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


        NLS.ai.init();

    }

);
