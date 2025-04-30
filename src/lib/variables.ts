// Set any item to undefined to remove it from the site or to use the default value

import { toNamespacedPath } from "node:path/win32";
import { describe } from "node:test";

export const GLOBAL = {
  // Site metadata
  username: "Sanjeev Raichur",
  email: "sanjeevraichur29@outlook.com",
  rootUrl: "https://github.com/sanjeev29", // TODO: Change root URL to your own
  shortDescription: `Graduate CS @ MichiganTech. Software Engineer.`,
  longDescription: `I'm a recent computer science graduate from Michigan Technological University with over 3
  years of experience as a software engineer. I've worked at fast-paced startups, building scalable backend systems
  and intuitive user interfaces from concept to deployment. I specialize in API design, database architecture,
  DevOps practices, and modern UI development.`,
  location: "📍 Herndon, VA",
  workStatus: "💻 Open to work",
  workStatusDescription: `Open to full-time software engineering roles starting June 2025 — backend, full-stack,
  or developer tools.`,

  // Skills
  skills: [
    {
      title: "Programming Languages",
      list: ["Python", "Go", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Backend Technologies",
      list: ["Django", "Django REST Framework", "Flask", "Node.js"],
    },
    {
      title: "Frontend Technologies",
      list: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Databases",
      list: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps & Infrastructure",
      list: ["Git", "Docker", "Nginx", "Linux", "Bash"],
    },
    {
      title: "Cloud Platforms",
      list: ["AWS", "Vercel"],
    },
    {
      title: "Other Tools & Services",
      list: ["Celery", "Redis", "RabbitMQ", "Sentry", "BugSnag", "New Relic"],
    },
  ],

  // Social media links
  githubProfile: "https://github.com/sanjeev29",
  linkedinProfile: "https://www.linkedin.com/in/sanjeev-raichur",

  // Profile image
  profileImage: "profileImage.webp",

  // work
  experiences: [
    {
      id: "michigantech01",
      heading: "Michigan Technological University",
      link: "https://www.mtu.edu/",
      period: "May 2024 - Apr 2025",
      technologies: ["C", "C++", "Linux", "Bash"],
      roles: [
        {
          name: "Graduate Teaching Assistant | Programming Languages",
          description: `Bash scripting on Linux to test Pascal Junior compiler and Racket programs.`,
          projects: [],
        },
        {
          name: "Graduate Teaching Assistant | Intro to C/C++",
          description: `Ran weekly labs for C/C++ for undergrads, focusing on hands-on exercises.`,
          projects: [],
        },
        {
          name: "Summer Research Assistant | SnP Lab",
          description: `Worked on automotive security research by analyzing CAN bus traffic and protocols with C++.`,
          projects: [],
        },
      ],
    },
    {
      id: "craterclub02",
      heading: "Crater.Club",
      period: "Feb 2022 - June 2023",
      link: "https://www.lumikai.com/post/crater-club-closes-seed-round-of-1-2m-from-lumikai-and-others",
      technologies: [
        "Python",
        "Django REST",
        "Django Channels",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Celery",
        "React.js",
        "Next.js",
        "TypeScript",
        "Docker",
        "Git",
        "AWS",
        "Vercel",
      ],
      roles: [
        {
          name: "Software Engineer II",
          description: `Joined as a backend engineer but quickly jumped into a full-stack role to work on the live
          streaming platform. Built the entire streamer experience, including real-time chat with polls and reactions,
          a Pub/Sub follow system, and an analytics dashboard to help creators track their performance and grow their
          audience.`,
          projects: [],
        },
      ],
    },
    {
      id: "thinklink03",
      heading: "ThinkLink",
      period: "Oct 2020 - Feb 2022",
      link: "https://www.linkedin.com/company/thinklinklife/about/",
      technologies: [
        "Python",
        "Go",
        "Flask",
        "Node.js",
        "SQL",
        "MySQL",
        "Sequelize",
        "AWS",
        "Docker",
        "Git",
        "BugSnag",
        "NewRelic",
      ],
      roles: [
        {
          name: "Software Engineer",
          description: "",
          projects: [
            {
              id: "horizon01",
              name: "Horizon",
              link: "https://horizon.thinklink.io/",
              description: `Built a logging service and setup distributed tracing with BugSnag for Go services.
              Worked on a custom logging middleware to capture logs and metrics across microservices. Kicked off
              major refactor effort to clean up the codebase.`,
            },
            {
              id: "corkowl02",
              name: "CorkOwl",
              link: "https://www.corkowl.com/",
              description: `As a founding engineer, I designed the database schema and handled migrations with Sequelize for a
              wine ecommerce platform. I built and shipped Go services for orders, payments, and shipping, integrating with
              third-party tools like Stripe, PayPal, and FedEx.`,
            },
          ],
        },
      ],
    },
    {
      id: "codemonk04",
      heading: "Codemonk",
      period: "Mar 2019 - Sept 2020",
      link: "https://codemonk.io/work",
      technologies: [
        "Python",
        "JavaScript",
        "Django",
        "Django REST",
        "Flask",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "RabbitMQ",
        "Vue.js",
        "Electron.js",
        "Docker",
        "Git",
        "AWS",
        "Sentry",
        "Gitlab CI/CD",
      ],
      roles: [
        {
          name: "Associate Software Engineer",
          description: `Upon transitioning to a full-time engineer, I contributed to over 8 client
          projects. Some highlights from my work include:`,
          projects: [
            {
              id: "zoosofkarnataka01",
              name: "ZAK",
              link: "https://example.com/project1",
              description: `Built and deployed REST APIs on AWS for the Zoos of Karnataka mobile app on a tight
              deadline, handling user auth with OTP, payments with Razorpay, and error tracking with Sentry.`,
            },
            {
              id: "zooticketing02",
              name: "Zoo Ticketing",
              link: "",
              description: `Built and launched an Electron.js desktop app to support zoo operations in areas with
              poor connectivity, with offline-first support using CouchDB for syncing data. Set up a CI/CD pipeline
              to automate updates and push new versions via AWS S3.`,
            },
          ],
        },
        {
          name: "Software Engineer Intern",
          description: `I began my journey as an intern, where I quickly adapted to the professional
          software development environment. Some notable projects include:`,
          projects: [
            {
              id: "stealth-pro",
              name: "StealthPro",
              description: `Built a desktop app with Electron.js and a Flask server that integrated a classification
              model to tag and classify wildlife images from forest trap cameras. Dockerized the app and setup a CI/CD
              pipeline on Gitlab to push app updates to AWS S3 bucket.`,
            },
            {
              id: "drone-surveillance",
              name: "Spectra",
              link: "https://codemonk.io/work/raw-pixels-to-actionable-insights-transforming-drone-data-analytics-for-skylark-drones",
              description: `Developed REST APIs using Django REST framework and managed data migrations for a drone
              surveillance and monitoring web application.`,
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "openostools01",
      name: "OpenOS",
      technologies: ["Next.js", "TypeScript", "Prisma", "tRPC", "Tailwind CSS"],
      description: `Contributed to the product by adding features like autocomplete inputs, template customization,
      and saved templates. Improved the user experience with command history, bug fixes, and support for running
      templates via URL query parameters.`,
      productHuntLink: "https://www.producthunt.com/products/openos",
    },
    {
      id: "maliciouspacketchecking02",
      name: "Malicious Packet Checking",
      technologies: ["C++", "Makefile"],
      description: `A network security tool designed to detect and manage malicious IP addresses. It embeds 10k IP
      addresses in a Random Bloom Filter (RBF) for efficient querying and uses a custom SHA-256 hash for secure indexing.`,
      githubLink: "https://github.com/sanjeev29/malicious-packet-checking",
    },
    {
      id: "gowc03",
      name: "gowc",
      technologies: ["Go"],
      description: `The gowc project is a command line tool written entirely in Go, designed to replicate the
      functionality of the traditional wc (word count) command.`,
      githubLink: "https://github.com/sanjeev29/gowc",
    },
    {
      id: "pascaljunior04",
      name: "Pascal Junior",
      technologies: [
        "C",
        "x86 Assembly",
        "Bison",
        "Flex",
        "Makefile",
        "Pascal",
      ],
      description: `Extended a compiler to generate x86-64 assembly for a subset of the PJ programming language.
      Built symbol tables to handle global vs. local variables, managed function calls, return values, and register usage.`,
      githubLink: "https://github.com/sanjeev29/pascal-junior",
    },
    {
      id: "portfolio05",
      name: "Portfolio",
      technologies: ["Astro", "TypeScript", "Tailwind CSS"],
      description: `A modern and dynamic portfolio website built with Astro, TypeScript, and CSS, showcasing my technical
      skills, projects, and professional journey in a user-friendly manner.`,
      githubLink: "https://github.com/sanjeev29/portfolio",
    },
  ],

  // Menu items
  menu: {
    "/": "/#about",
    work: "/#work",
    skills: "/#skills",
    projects: "/projects",
  },

  credits: "https://zaggonaut.dev",
};
