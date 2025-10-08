export interface Experience {
  period: string;
  title: string;
  company?: string;
  location?: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface CompanyGroup {
  company: string;
  period: string;
  experiences: Experience[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  topics: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Contact {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export const contactData: Contact = {
  name: "Jean Portalis",
  title: "Software Engineer Fullstack",
  email: "portalis.jean@gmail.com",
  phone: "+33 6 58 96 62 64",
  address: "142 impasse des Nympheas",
  city: "Nantes, 44300",
  country: "France"
};

export const experienceData: CompanyGroup[] = [
  {
    company: "Marjory",
    period: "2024 - 2025",
    experiences: [
      {
        period: "2024",
        title: "Fullstack Angular / Node.js",
        description: "SaaS Data Integration Platform - No Code/Low Code Solution",
        technologies: ["Angular", "PrimeNG", "TypeScript", "ETL", "Node.js", "Snowflake SDK, Big Query SDK, ..."], // À compléter selon les technos utilisées
        highlights: [
          "Development of no-code/low-code visual data flow editor",
          "Built data connectors (Snowflake, databases, APIs) with Node.js",
        ]
      }
    ]
  },
  {
    company: "Niji",
    period: "2022 - 2024",
    experiences: [
      {
        period: "2022 - 2024",
        title: "Team lead - Node.js microservices",
        description: "E-commerce Order Flow Management System",
        technologies: ["Node.js", "Kafka", "Google Cloud Pub/Sub", "Jest", "Datadog", "Terraform"],
        highlights: [
          "Production and incident monitoring management",
          "Led development team managing 80+ automated order lifecycle flows",
          "Integrate payment gateway",
          "Monorepo structure with shared libraries for code reusability"
        ]
      },
      {
        period: "2021 - 2022",
        title: "Angular",
        description: "Technical intranet for Industrial group",
        technologies: ["Angular 6 - 12", "Angular Material", "Ngxs", "RxJS", "Jest"],
        highlights: [
          "Angular migrations, refactoring, unit testing",
          "Upskilling junior developer",
          "Multi-role management with permissions",
        ]
      }
    ]
  },
  {
    company: "Capgemini",
    period: "2018 - 2022",
    experiences: [
      {
        period: "2021",
        title: "Fullstack Angular / Node.js / AWS Lambda",
        description: "Agile Project - Web app to sell luxury product (B2C)",
        technologies: ["Angular 10", "RxJS", "NgRx", "Node.js", "Restify", "AWS Lambda"],
        highlights: [
          "Built modern B2C e-commerce platform for luxury products",
          "Implemented state management with NgRx",
          "Developed serverless backend with AWS Lambda"
        ]
      },
      {
        period: "2019 - 2021",
        title: "Fullstack Angular / Node.js (Express)",
        description: "Agile Project - Web app to sell gas all over Europe through distributors",
        technologies: [
          "Angular 10",
          "TypeScript",
          "Angular Material",
          "Node.js",
          "Express",
          "MongoDB",
          "ElasticSearch",
          "Redis (ElasticCache)",
          "MySQL",
          "Docker",
          "Jenkins",
          "GitLab"
        ],
        highlights: [
          "Designed and developed fullstack B2B platform for European gas distribution",
          "Implemented microservices architecture with Docker",
          "Built search functionality with ElasticSearch",
          "Managed CI/CD pipeline with Jenkins"
        ]
      },
      {
        period: "2018",
        title: "Drupal 7 PHP E-commerce Platform",
        description: "E-commerce platform to sell gas (B2B)",
        technologies: ["Drupal 7", "PHP", "jQuery", "Akeneo (PIM)"],
        highlights: [
          "Developed B2B e-commerce platform for gas sales",
          "Integrated Product Information Management (PIM) system",
          "Customized Drupal modules for business requirements"
        ]
      }
    ]
  }
];

export const internshipsData: Experience[] = [
  {
    period: "May - July 2017",
    title: "Software Engineer Fullstack",
    company: "University of Kuala Lumpur",
    location: "Malaysia",
    description: "Web app to display data from power meter - Thinkspeak",
    technologies: ["PHP", "JavaScript"],
    highlights: [
      "Developed IoT dashboard for power meter data visualization",
      "Integrated Thinkspeak API for real-time monitoring"
    ]
  },
  {
    period: "July 2016",
    title: "Android Developer",
    company: "PhysioK Sport",
    description: "Android app - Help physiotherapist to remember pathology's patient and decrease time diagnosis",
    technologies: ["Android", "Java"],
    highlights: [
      "Created mobile application for medical professionals",
      "Improved patient diagnosis workflow efficiency"
    ]
  },
  {
    period: "March - June 2015",
    title: "Research Intern",
    company: "University of Plymouth",
    location: "UK",
    description: "Simulation of directional antenna",
    technologies: ["Shell", "C++", "NS2"],
    highlights: [
      "Performed network simulation research",
      "Analyzed antenna directional patterns"
    ]
  }
];

export const educationData: Education[] = [
  {
    period: "2015 - 2018",
    degree: "Engineering Degree",
    institution: "Polytech Nantes",
    location: "University of Nantes",
    topics: [
      "Algorithm & Object-Oriented Programming (Java, Python, C++, Android)",
      "Network & System Administration",
      "Image Analysis & Artificial Intelligence",
      "Mathematics"
    ]
  },
  {
    period: "2013 - 2015",
    degree: "DUT in Electrical Engineering and Industrial IT",
    institution: "University of Angers",
    location: "Angers",
    topics: [
      "Algorithm & UML & SQL (C/C++)",
      "Electronics & Automation",
      "Electrical Engineering"
    ]
  }
];

export const skillsData: Skill[] = [
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Python", "C"]
  },
  {
    category: "Frameworks",
    items: ["Angular", "Node.js - Express/Restify", "Strapi", "Drupal 7", "RxJS", "NgRx"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Jenkins", "Docker", "GCP", "AWS"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "Redis", "MySQL", "ElasticSearch", "Sequelize"]
  },
  {
    category: "Languages",
    items: ["French (Native)", "English (Advanced - TOEIC 840)", "Spanish (Basic)"]
  },
  {
    category: "Systems",
    items: ["Linux", "macOS", "Windows"]
  }
];

export const interests = ["Tennis (1/6)", "Padel (170 FR)", "Randonnée", "Astronomie",];
