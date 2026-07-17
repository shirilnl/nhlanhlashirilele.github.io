/*=========================================================
NLS ENGINEERING PLATFORM
File: data.js
Version: 5.0

```
Central Portfolio Data Store

Contains:
- Hero content
- Statistics
- Skills
- Experience
- Education
- Technologies
- Projects
- Certificates
- Downloads
```

=========================================================*/

"use strict";

/*=========================================================
GLOBAL NLS OBJECT
=========================================================*/

window.NLS =
window.NLS || {};

/*=========================================================
PORTFOLIO DATA
=========================================================*/

window.NLS.data = {

```
/*=====================================================
    HERO
=====================================================*/

hero: {


    subtitle: [

        "Electrical & Electronic Engineer",

        "Telecommunications Engineer",

        "Network Infrastructure Engineer",

        "Physical Security Systems Engineer",

        "Digital Engineering Specialist"

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
    SKILLS
=====================================================*/

skills: [


    {

        name:
            "Telecommunications",

        icon:
            "fa-tower-cell",

        level:
            90

    },


    {

        name:
            "Fibre Optic Networks",

        icon:
            "fa-network-wired",

        level:
            88

    },


    {

        name:
            "Microwave Systems",

        icon:
            "fa-satellite-dish",

        level:
            85

    },


    {

        name:
            "Network Infrastructure",

        icon:
            "fa-server",

        level:
            88

    },


    {

        name:
            "Physical Security Systems",

        icon:
            "fa-shield-halved",

        level:
            90

    },


    {

        name:
            "CCTV & Surveillance",

        icon:
            "fa-video",

        level:
            85

    },


    {

        name:
            "Infrastructure Planning",

        icon:
            "fa-diagram-project",

        level:
            82

    },


    {

        name:
            "Technical Documentation",

        icon:
            "fa-file-lines",

        level:
            90

    }

],


/*=====================================================
    EXPERIENCE
=====================================================*/

experience: [


    {

        period:
            "2023 — Present",

        title:
            "Electrical & Electronic Engineer",

        company:
            "Access Integration / Access Data",

        description:

            "Engineering experience across telecommunications, fibre infrastructure, microwave systems, transport surveillance, network infrastructure and physical security systems.",

        technologies: [

            "Fibre Networks",

            "Microwave",

            "ISAM / MSAN",

            "T-Agent",

            "B-Agent",

            "Alarm Surveillance",

            "Planning Tools"

        ]

    },


    {

        period:
            "Professional Development",

        title:
            "Engineering & Digital Infrastructure",

        company:
            "Technical Development",

        description:

            "Continuous development across modern engineering technologies, digital infrastructure, networking, automation and technology-driven systems.",

        technologies: [

            "Networking",

            "Cloud Technologies",

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

        period:
            "2020",

        qualification:
            "National Senior Certificate",

        institution:
            "Freedom Park Secondary School",

        description:
            "Matric Certificate."

    },


    {

        period:
            "Professional Development",

        qualification:
            "Electrical & Electronic Engineering",

        institution:
            "Engineering Career Development",

        description:

            "Continued professional development in telecommunications, network infrastructure and physical security systems."

    }

],


/*=====================================================
    TECHNOLOGIES
=====================================================*/

technologies: [


    {

        name:
            "Fibre Optics",

        icon:
            "fa-network-wired",

        category:
            "Telecommunications"

    },


    {

        name:
            "Microwave",

        icon:
            "fa-satellite-dish",

        category:
            "Telecommunications"

    },


    {

        name:
            "ISAM / MSAN",

        icon:
            "fa-server",

        category:
            "Network"

    },


    {

        name:
            "Transport Surveillance",

        icon:
            "fa-video",

        category:
            "Security"

    },


    {

        name:
            "Alarm Surveillance",

        icon:
            "fa-bell",

        category:
            "Security"

    },


    {

        name:
            "Network Infrastructure",

        icon:
            "fa-network-wired",

        category:
            "Network"

    },


    {

        name:
            "Planning Tools",

        icon:
            "fa-compass-drafting",

        category:
            "Engineering"

    },


    {

        name:
            "Digital Engineering",

        icon:
            "fa-microchip",

        category:
            "Engineering"

    }

],


/*=====================================================
    PROJECTS
=====================================================*/

projects: [


    {


        title:
            "Fibre Network Infrastructure",


        category:
            "Telecommunications",


        image:
            "assets/images/projects/fibre-network.jpg",


        description:

            "Telecommunications infrastructure involving fibre network planning, connectivity and physical infrastructure development.",


        technologies: [

            "Fibre Optics",

            "Network Planning",

            "Infrastructure",

            "Connectivity"

        ]

    },


    {


        title:
            "Microwave Transmission Systems",


        category:
            "Telecommunications",


        image:
            "assets/images/projects/microwave.jpg",


        description:

            "Microwave transmission systems supporting reliable long-distance telecommunications connectivity.",


        technologies: [

            "Microwave",

            "Transmission",

            "Radio Systems",

            "Connectivity"

        ]

    },


    {


        title:
            "Network Infrastructure Systems",


        category:
            "Network",


        image:
            "assets/images/projects/network-infrastructure.jpg",


        description:

            "Network infrastructure systems supporting enterprise connectivity, transport networks and digital communication environments.",


        technologies: [

            "Networking",

            "ISAM",

            "MSAN",

            "Infrastructure"

        ]

    },


    {


        title:
            "Transport Surveillance Systems",


        category:
            "Security",


        image:
            "assets/images/projects/transport-surveillance.jpg",


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


        title:
            "Physical Security Infrastructure",


        category:
            "Security",


        image:
            "assets/images/projects/physical-security.jpg",


        description:

            "Integrated physical security systems involving surveillance, alarm monitoring and security infrastructure.",


        technologies: [

            "CCTV",

            "Alarm Systems",

            "Surveillance",

            "Security Infrastructure"

        ]

    },


    {


        title:
            "Engineering Planning & Documentation",


        category:
            "Engineering",


        image:
            "assets/images/projects/engineering-planning.jpg",


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


        title:
            "Bachelor of Engineering Technology",

        image:
            "assets/images/certificates/engineering-degree.jpg",

        file:
            "assets/files/engineering-degree.pdf"

    },


    {


        title:
            "Telecommunications Engineering",

        image:
            "assets/images/certificates/telecommunications.jpg",

        file:
            "assets/files/telecommunications-certificate.pdf"

    },


    {


        title:
            "Network Infrastructure",

        image:
            "assets/images/certificates/network.jpg",

        file:
            "assets/files/network-certificate.pdf"

    },


    {


        title:
            "Physical Security Systems",

        image:
            "assets/images/certificates/security.jpg",

        file:
            "assets/files/security-certificate.pdf"

    }

],


/*=====================================================
    DOWNLOADS
=====================================================*/

downloads: [


    {


        name:
            "Curriculum Vitae",

        file:
            "assets/files/CV.pdf",

        icon:
            "fa-file-pdf"

    },


    {


        name:
            "Engineering Portfolio",

        file:
            "assets/files/Portfolio.pdf",

        icon:
            "fa-file-pdf"

    },


    {


        name:
            "Digital Contact Card",

        file:
            "vcard.vcf",

        icon:
            "fa-address-card"

    }

]
```

};

/*=========================================================
DATA READY
=========================================================*/

console.log(

```
"NLS Portfolio Data Loaded",

window.NLS.data
```

);
