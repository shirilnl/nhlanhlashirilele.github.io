"use strict";

/* ==========================================================
   V7 PORTFOLIO
   data.js
   PART 1/4
   PROFILE • STATISTICS • SERVICES
========================================================== */

const PORTFOLIO_DATA = {

    /*==========================================================
        PROFILE
    ==========================================================*/

    profile: {

        firstName: "Nhlanhla",

        middleName: "Lucky",

        lastName: "Shirilele",

        fullName: "Nhlanhla Lucky Shirilele",

        initials: "NS",

        title: "Electrical Engineer",

        specialization:
            "Telecommunications Networks & Physical Security Systems",

        headline:
            "Professional Engineer delivering reliable telecommunications, networking and physical security solutions.",

        biography: `
            I am an Electrical Engineer with experience in
            telecommunications infrastructure, fibre optic
            networks, microwave systems, surveillance,
            access control, networking and enterprise
            technologies. My objective is to deliver
            innovative engineering solutions that improve
            reliability, performance and operational
            efficiency.
        `,

        location: {

            city: "Johannesburg",

            province: "Gauteng",

            country: "South Africa"

        },

        availability: "Available",

        experienceYears: 3,

        profileImage:
            "assets/images/profile.jpg",

        coverImage:
            "assets/images/hero.jpg"

    },

    /*==========================================================
        QUICK STATISTICS
    ==========================================================*/

    statistics: [

        {

            id: 1,

            title: "Years Experience",

            value: "3+",

            icon: "fa-briefcase"

        },

        {

            id: 2,

            title: "Projects",

            value: "30+",

            icon: "fa-diagram-project"

        },

        {

            id: 3,

            title: "Certifications",

            value: "15+",

            icon: "fa-certificate"

        },

        {

            id: 4,

            title: "Technologies",

            value: "40+",

            icon: "fa-microchip"

        }

    ],

    /*==========================================================
        SERVICES
    ==========================================================*/

    services: [

        {

            id: 1,

            title:
                "Telecommunications",

            icon:
                "fa-tower-cell",

            description:
                "Planning, implementation and maintenance of telecommunications infrastructure including fibre optic, microwave and transmission systems."

        },

        {

            id: 2,

            title:
                "Network Engineering",

            icon:
                "fa-network-wired",

            description:
                "LAN, WAN, routing, switching, structured cabling, network optimisation and enterprise connectivity."

        },

        {

            id: 3,

            title:
                "Physical Security",

            icon:
                "fa-shield-halved",

            description:
                "CCTV, access control, alarm monitoring, surveillance systems and integrated security platforms."

        },

        {

            id: 4,

            title:
                "System Integration",

            icon:
                "fa-plug-circle-bolt",

            description:
                "Integration of networking, telecommunications and security systems into a unified enterprise solution."

        },

        {

            id: 5,

            title:
                "Technical Support",

            icon:
                "fa-headset",

            description:
                "Infrastructure support, fault diagnosis, preventive maintenance, troubleshooting and performance optimisation."

        },

        {

            id: 6,

            title:
                "Engineering Consulting",

            icon:
                "fa-lightbulb",

            description:
                "Engineering assessments, technical documentation, solution design and project implementation support."

        }

    ],
    /*==========================================================
        TECHNICAL SKILLS
    ==========================================================*/

    skills: [

        {
            id: 1,

            category: "Telecommunications",

            icon: "fa-tower-cell",

            items: [

                "Fibre Optic Networks",

                "Microwave Systems",

                "Transmission Networks",

                "ISAM",

                "MSAN",

                "GPON",

                "DSL",

                "Network Planning"

            ]

        },

        {

            id: 2,

            category: "Networking",

            icon: "fa-network-wired",

            items: [

                "TCP/IP",

                "LAN",

                "WAN",

                "Routing",

                "Switching",

                "VLAN",

                "VPN",

                "DHCP",

                "DNS"

            ]

        },

        {

            id: 3,

            category: "Physical Security",

            icon: "fa-shield-halved",

            items: [

                "CCTV",

                "Access Control",

                "Alarm Systems",

                "Biometrics",

                "Video Surveillance",

                "Perimeter Security"

            ]

        },

        {

            id: 4,

            category: "Cloud & Infrastructure",

            icon: "fa-cloud",

            items: [

                "Microsoft Azure",

                "Amazon AWS",

                "Google Cloud",

                "Oracle Cloud",

                "Virtualization",

                "Windows Server",

                "Linux"

            ]

        },

        {

            id: 5,

            category: "Programming",

            icon: "fa-code",

            items: [

                "JavaScript",

                "Python",

                "HTML5",

                "CSS3",

                "SQL",

                "JSON",

                "Git"

            ]

        },

        {

            id: 6,

            category: "Engineering Tools",

            icon: "fa-screwdriver-wrench",

            items: [

                "AutoCAD",

                "Microsoft Office",

                "Visio",

                "Power BI",

                "ITSM",

                "ServiceNow"

            ]

        }

    ],

    /*==========================================================
        TECHNOLOGIES
    ==========================================================*/

    technologies: [

        { name: "HTML5", icon: "fab fa-html5", level: 95 },

        { name: "CSS3", icon: "fab fa-css3-alt", level: 92 },

        { name: "JavaScript", icon: "fab fa-js", level: 90 },

        { name: "Python", icon: "fab fa-python", level: 88 },

        { name: "Git", icon: "fab fa-git-alt", level: 90 },

        { name: "GitHub", icon: "fab fa-github", level: 92 },

        { name: "Linux", icon: "fab fa-linux", level: 80 },

        { name: "Windows", icon: "fab fa-windows", level: 95 },

        { name: "Azure", icon: "fab fa-microsoft", level: 82 },

        { name: "AWS", icon: "fab fa-aws", level: 78 },

        { name: "Google Cloud", icon: "fas fa-cloud", level: 75 },

        { name: "SQL", icon: "fas fa-database", level: 82 },

        { name: "Networking", icon: "fas fa-network-wired", level: 92 },

        { name: "Fibre", icon: "fas fa-ethernet", level: 90 },

        { name: "Microwave", icon: "fas fa-tower-cell", level: 88 },

        { name: "CCTV", icon: "fas fa-video", level: 90 },

        { name: "Access Control", icon: "fas fa-door-open", level: 88 },

        { name: "Cyber Security", icon: "fas fa-user-shield", level: 80 }

    ],

    /*==========================================================
        EXPERIENCE
    ==========================================================*/

    experience: [

        {

            id: 1,

            company:
                "Access Data, Transport Surveillance & Analysis",

            position:
                "Electrical Engineer",

            period:
                "December 2023 - Present",

            location:
                "South Africa",

            responsibilities: [

                "Monitor telecommunications infrastructure.",

                "Support fibre and microwave transmission systems.",

                "Maintain surveillance and access control systems.",

                "Investigate alarms and network faults.",

                "Support system migrations and upgrades.",

                "Prepare engineering reports.",

                "Coordinate maintenance activities.",

                "Support enterprise networking projects."

            ]

        }

    ],
    /*==========================================================
        EDUCATION
    ==========================================================*/

    education: [

        {

            id: 1,

            institution:
                "University",

            qualification:
                "Bachelor of Engineering Technology (Electrical Engineering)",

            specialization:
                "Telecommunications",

            period:
                "",

            status:
                "Completed"

        },

        {

            id: 2,

            institution:
                "Freedom Park Secondary School",

            qualification:
                "National Senior Certificate",

            period:
                "2020",

            status:
                "Completed"

        }

    ],

    /*==========================================================
        CERTIFICATIONS
    ==========================================================*/

    certifications: [

        {

            id: 1,

            name:
                "AWS Cloud Practitioner",

            issuer:
                "Amazon Web Services",

            year:
                "",

            credential:
                "",

            icon:
                "fab fa-aws"

        },

        {

            id: 2,

            name:
                "Microsoft Azure Fundamentals",

            issuer:
                "Microsoft",

            year:
                "",

            credential:
                "",

            icon:
                "fab fa-microsoft"

        },

        {

            id: 3,

            name:
                "Google Cloud Fundamentals",

            issuer:
                "Google",

            year:
                "",

            credential:
                "",

            icon:
                "fab fa-google"

        },

        {

            id: 4,

            name:
                "Oracle Cloud Infrastructure",

            issuer:
                "Oracle",

            year:
                "",

            credential:
                "",

            icon:
                "fas fa-database"

        }

    ],

    /*==========================================================
        PROJECTS
    ==========================================================*/

    projects: [

        {

            id: 1,

            title:
                "Professional Portfolio V7",

            category:
                "Web Development",

            image:
                "assets/images/projects/portfolio.jpg",

            description:
                "Progressive Web Application portfolio with AI assistant, QR generator, analytics dashboard and responsive design.",

            technologies: [

                "HTML5",

                "CSS3",

                "JavaScript",

                "PWA"

            ],

            github:
                "",

            demo:
                "",

            featured:
                true

        },

        {

            id: 2,

            title:
                "Budget Tracker",

            category:
                "Python",

            image:
                "assets/images/projects/budget-tracker.jpg",

            description:
                "Complete personal finance system featuring dashboards, charts, authentication, reports and data export.",

            technologies: [

                "Python",

                "Flask",

                "SQLite",

                "Chart.js"

            ],

            github:
                "",

            demo:
                "",

            featured:
                true

        },

        {

            id: 3,

            title:
                "Telecommunications Monitoring Dashboard",

            category:
                "Engineering",

            image:
                "assets/images/projects/network.jpg",

            description:
                "Infrastructure monitoring dashboard for fibre, microwave and surveillance systems.",

            technologies: [

                "Networking",

                "Telecommunications",

                "Monitoring"

            ],

            github:
                "",

            demo:
                "",

            featured:
                false

        },

        {

            id: 4,

            title:
                "Physical Security Management",

            category:
                "Security",

            image:
                "assets/images/projects/security.jpg",

            description:
                "Integrated CCTV, access control and alarm monitoring solution.",

            technologies: [

                "CCTV",

                "Access Control",

                "Surveillance"

            ],

            github:
                "",

            demo:
                "",

            featured:
                false

        },

        {

            id: 5,

            title:
                "Network Infrastructure Upgrade",

            category:
                "Networking",

            image:
                "assets/images/projects/network-upgrade.jpg",

            description:
                "Enterprise network design, migration and optimization project.",

            technologies: [

                "LAN",

                "WAN",

                "Routing",

                "Switching"

            ],

            github:
                "",

            demo:
                "",

            featured:
                false

        },

    ],

        /*==========================================================
        GALLERY
    ==========================================================*/

    gallery: [

        {
            id: 1,
            title: "Telecommunications Infrastructure",
            image: "assets/images/gallery/gallery-1.jpg",
            category: "Telecommunications"
        },

        {
            id: 2,
            title: "Network Operations",
            image: "assets/images/gallery/gallery-2.jpg",
            category: "Networking"
        },

        {
            id: 3,
            title: "Physical Security Systems",
            image: "assets/images/gallery/gallery-3.jpg",
            category: "Security"
        },

        {
            id: 4,
            title: "Engineering Projects",
            image: "assets/images/gallery/gallery-4.jpg",
            category: "Engineering"
        }

    ],

    /*==========================================================
        DOWNLOADS
    ==========================================================*/

    downloads: [

        {

            id: 1,

            title: "Curriculum Vitae",

            description: "Latest professional CV",

            icon: "fas fa-file-pdf",

            file: "assets/documents/CV.pdf"

        },

        {

            id: 2,

            title: "Engineering Portfolio",

            description: "Professional portfolio",

            icon: "fas fa-folder-open",

            file: "assets/documents/Portfolio.pdf"

        },

        {

            id: 3,

            title: "Certificates",

            description: "Professional certificates",

            icon: "fas fa-certificate",

            file: "assets/documents/Certificates.pdf"

        }

    ],

    /*==========================================================
        CONTACT
    ==========================================================*/

    contact: {

        phone: APP_CONFIG.contact.phone,

        whatsapp: APP_CONFIG.contact.whatsapp,

        email: APP_CONFIG.contact.email,

        website: APP_CONFIG.contact.website,

        address: APP_CONFIG.contact.address,

        map: "",

        availability: "Available for opportunities"

    },

    /*==========================================================
        SOCIAL LINKS
    ==========================================================*/

    social: {

        linkedin: APP_CONFIG.social.linkedin,

        github: APP_CONFIG.social.github,

        facebook: APP_CONFIG.social.facebook,

        instagram: APP_CONFIG.social.instagram,

        twitter: APP_CONFIG.social.twitter,

        youtube: APP_CONFIG.social.youtube

    },

    /*==========================================================
        TESTIMONIALS
    ==========================================================*/

    testimonials: [

        {

            id: 1,

            name: "Coming Soon",

            position: "Professional Reference",

            company: "",

            image: "assets/images/testimonials/default.png",

            rating: 5,

            message:
                "Professional testimonials will appear here."

        }

    ]

};

/*==========================================================
    HELPER FUNCTIONS
==========================================================*/

const Data = Object.freeze({

    getProfile() {

        return PORTFOLIO_DATA.profile;

    },

    getProjects() {

        return PORTFOLIO_DATA.projects;

    },

    getFeaturedProjects() {

        return PORTFOLIO_DATA.projects.filter(

            project => project.featured

        );

    },

    getSkills() {

        return PORTFOLIO_DATA.skills;

    },

    getTechnologies() {

        return PORTFOLIO_DATA.technologies;

    },

    getServices() {

        return PORTFOLIO_DATA.services;

    },

    getExperience() {

        return PORTFOLIO_DATA.experience;

    },

    getCertificates() {

        return PORTFOLIO_DATA.certifications;

    },

    getGallery() {

        return PORTFOLIO_DATA.gallery;

    },

    getDownloads() {

        return PORTFOLIO_DATA.downloads;

    }

});

/*==========================================================
    END OF data.js
    Version: 7.0.0
==========================================================*/
