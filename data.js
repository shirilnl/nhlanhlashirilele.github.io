/*=========================================================
    NLS ENGINEERING PORTFOLIO
    File: data.js
    Version: 6.0

    CENTRAL PORTFOLIO CONTENT DATABASE

    This file controls:
    - Hero typing text
    - Statistics
    - Skills
    - Experience
    - Education
    - Technologies
    - Projects
    - Certificates
    - Downloads
=========================================================*/


"use strict";


/*=========================================================
    GLOBAL NLS OBJECT
=========================================================*/

window.NLS = window.NLS || {};


/*=========================================================
    PORTFOLIO DATA
=========================================================*/

window.NLS.data = {


    /*=====================================================
        HERO SECTION
    =====================================================*/

    hero: {

        subtitle: [

            "Electrical & Electronic Engineer",

            "Telecommunications Engineer",

            "Telecommunications Networks Specialist",

            "Physical Security Systems Engineer",

            "Network Infrastructure Specialist",

            "Digital Engineering Professional"

        ]

    },


    /*=====================================================
        STATISTICS
    =====================================================*/

    statistics: [

        {

            value: "3+",

            label: "Years Experience",

            icon: "fa-calendar-check"

        },


        {

            value: "10+",

            label: "Engineering Disciplines",

            icon: "fa-gears"

        },


        {

            value: "5+",

            label: "Technology Domains",

            icon: "fa-microchip"

        },


        {

            value: "100%",

            label: "Commitment to Excellence",

            icon: "fa-award"

        }

    ],


    /*=====================================================
        PROFESSIONAL SKILLS
    =====================================================*/

    skills: [

        {

            name: "Telecommunications",

            icon: "fa-tower-cell",

            level: 90

        },


        {

            name: "Fibre Optic Networks",

            icon: "fa-network-wired",

            level: 88

        },


        {

            name: "Microwave Systems",

            icon: "fa-satellite-dish",

            level: 85

        },


        {

            name: "Network Infrastructure",

            icon: "fa-server",

            level: 88

        },


        {

            name: "Physical Security Systems",

            icon: "fa-shield-halved",

            level: 90

        },


        {

            name: "CCTV & Surveillance",

            icon: "fa-video",

            level: 85

        },


        {

            name: "Infrastructure Planning",

            icon: "fa-diagram-project",

            level: 82

        },


        {

            name: "Technical Documentation",

            icon: "fa-file-lines",

            level: 90

        }

    ],


    /*=====================================================
        PROFESSIONAL EXPERIENCE
    =====================================================*/

    experience: [

        {

            period: "December 2023 — Present",

            title: "Electrical & Electronic Engineer",

            company: "Access Integration / Access Data",

            description:

                "Professional engineering experience across telecommunications networks, fibre infrastructure, microwave systems, network infrastructure, transport surveillance and physical security systems.",

            technologies: [

                "Fibre Networks",

                "Microwave Systems",

                "ISAM / MSAN",

                "T-Agent",

                "B-Agent",

                "Alarm Surveillance",

                "Planning Tools"

            ]

        },


        {

            period: "Professional Development",

            title: "Telecommunications & Network Infrastructure",

            company: "Engineering & Technology Development",

            description:

                "Continuous professional development across modern telecommunications infrastructure, digital systems, network technologies, automation and technology-driven engineering solutions.",

            technologies: [

                "Telecommunications",

                "Networking",

                "Digital Systems",

                "Infrastructure",

                "Automation"

            ]

        }

    ],


    /*=====================================================
        EDUCATION
    =====================================================*/

    education: [

        {

            period: "2020",

            qualification: "National Senior Certificate",

            institution: "Freedom Park Secondary School",

            description:

                "Successfully completed the National Senior Certificate / Matric qualification."

        },


        {

            period: "Professional Development",

            qualification: "Electrical & Electronic Engineering",

            institution: "Engineering Career Development",

            description:

                "Professional development and practical engineering experience focused on telecommunications networks, infrastructure and physical security systems."

        }

    ],


    /*=====================================================
        TECHNOLOGIES
    =====================================================*/

    technologies: [

        {

            name: "Fibre Optics",

            icon: "fa-network-wired",

            category: "Telecommunications"

        },


        {

            name: "Microwave",

            icon: "fa-satellite-dish",

            category: "Telecommunications"

        },


        {

            name: "ISAM / MSAN",

            icon: "fa-server",

            category: "Network Infrastructure"

        },


        {

            name: "Transport Surveillance",

            icon: "fa-video",

            category: "Physical Security"

        },


        {

            name: "Alarm Surveillance",

            icon: "fa-bell",

            category: "Security Systems"

        },


        {

            name: "Network Infrastructure",

            icon: "fa-network-wired",

            category: "Networking"

        },


        {

            name: "Planning Tools",

            icon: "fa-compass-drafting",

            category: "Engineering"

        },


        {

            name: "Digital Engineering",

            icon: "fa-microchip",

            category: "Engineering"

        }

    ],


    /*=====================================================
        PROJECTS
    =====================================================*/

    projects: [

        {

            title: "Fibre Network Infrastructure",

            category: "Telecommunications",

            image:

                "assets/images/fibre-network.jpg",

            description:

                "Telecommunications infrastructure involving fibre network planning, connectivity and the development of reliable physical network infrastructure.",

            technologies: [

                "Fibre Optics",

                "Network Planning",

                "Infrastructure",

                "Connectivity"

            ]

        },


        {

            title: "Microwave Transmission Systems",

            category: "Telecommunications",

            image:

                "assets/images/microwave.jpg",

            description:

                "Microwave transmission systems supporting reliable long-distance telecommunications connectivity and network communication.",

            technologies: [

                "Microwave",

                "Transmission",

                "Radio Systems",

                "Connectivity"

            ]

        },


        {

            title: "Network Infrastructure Systems",

            category: "Network",

            image:

                "assets/images/network-infrastructure.jpg",

            description:

                "Network infrastructure systems supporting enterprise connectivity, telecommunications networks and digital communication environments.",

            technologies: [

                "Networking",

                "ISAM",

                "MSAN",

                "Infrastructure"

            ]

        },


        {

            title: "Transport Surveillance Systems",

            category: "Security",

            image:

                "assets/images/transport-surveillance.jpg",

            description:

                "Transport surveillance and monitoring systems designed to support operational visibility, monitoring and infrastructure security.",

            technologies: [

                "Surveillance",

                "Monitoring",

                "Security",

                "Transport Systems"

            ]

        },


        {

            title: "Physical Security Infrastructure",

            category: "Security",

            image:

                "assets/images/physical-security.jpg",

            description:

                "Integrated physical security systems involving surveillance, alarm monitoring and supporting security infrastructure.",

            technologies: [

                "CCTV",

                "Alarm Systems",

                "Surveillance",

                "Security Infrastructure"

            ]

        },


        {

            title: "Engineering Planning & Documentation",

            category: "Engineering",

            image:

                "assets/images/engineering-planning.jpg",

            description:

                "Engineering planning, technical documentation and infrastructure analysis supporting the design and implementation of technical systems.",

            technologies: [

                "Engineering",

                "Planning",

                "Documentation",

                "Technical Analysis"

            ]

        }

    ],


    /*=====================================================
        CERTIFICATES
    =====================================================*/

    certificates: [

        {

            title: "Engineering Certificate",

            image:

                "assets/certificates/certificate-1.jpg",

            file:

                "assets/certificates/certificate-1.pdf"

        },


        {

            title: "Telecommunications Certificate",

            image:

                "assets/certificates/certificate-2.jpg",

            file:

                "assets/certificates/certificate-2.pdf"

        },


        {

            title: "Network Infrastructure Certificate",

            image:

                "assets/certificates/certificate-3.jpg",

            file:

                "assets/certificates/certificate-3.pdf"

        },


        {

            title: "Professional Development Certificate",

            image:

                "assets/certificates/certificate-4.jpg",

            file:

                "assets/certificates/certificate-4.pdf"

        }

    ],


    /*=====================================================
        DOWNLOAD CENTER
    =====================================================*/

    downloads: [

        {

            name: "Curriculum Vitae",

            file:

                "assets/files/CV.pdf",

            icon:

                "fa-file-pdf"

        },


        {

            name: "Engineering Portfolio",

            file:

                "assets/files/Portfolio.pdf",

            icon:

                "fa-file-pdf"

        },


        {

            name: "Digital Contact Card",

            file:

                "vcard.vcf",

            icon:

                "fa-address-card"

        }

    ]

};


/*=========================================================
    DATA LOAD CONFIRMATION
=========================================================*/

console.log(

    "NLS Portfolio Data Loaded Successfully",

    window.NLS.data

);
