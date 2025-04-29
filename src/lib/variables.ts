// Set any item to undefined to remove it from the site or to use the default value

import { TestContext } from "node:test";

export const GLOBAL = {
  // Site metadata
  username: "Sanjeev Raichur",
  email: "sanjeevraichur29@outlook.com",
  rootUrl: "https://zaggonaut.dev",
  shortDescription:
    "Graduate CS @ Michigan Tech. Software engineer. Backend dev. Tech enthusiast.",
  longDescription: `I'm a graduate student in computer science student at Michigan Technological University.
    I have 3+ years of experience as a software engineer, during which I worked with fast-paced startups
    to build scalable backend systems from concept to deployment. I have strong expertise in API design
    and development, database design and DevOps practices.`,
  location: "📍 Herndon, VA",
  workStatus: "💻 Open to work",

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
  twitterProfile: "https://twitter.com/",
  linkedinProfile: "https://www.linkedin.com/in/sanjeev-raichur",

  // Common text names used throughout the site
  articlesName: "Articles",
  projectsName: "Projects",
  viewAll: "View All",

  // Common descriptions used throughout the site
  noArticles: "No featured articles yet.",
  noProjects: "No featured projects yet.",

  // Blog metadata
  blogTitle: "My Thoughts & Takes",
  blogShortDescription: "Practical wisdom, unfiltered thoughts, and hot takes.",
  blogLongDescription:
    "Web development, tech trends, and the occasional programming mishap.",

  // Project metadata
  projectTitle: "Projects and Code",
  projectShortDescription:
    "A list of my web development projects and developer tools.",
  projectLongDescription:
    "All of my projects, including both frontend and full-stack applications.",

  // Profile image
  profileImage: "profileImage.webp",

  // work
  experiences: [
    {
      id: "thinklink01",
      heading: "ThinkLink",
      link: "https://horizon.thinklink.io/",
      roles: [
        {
          name: "Software Engineer II (Consultant)",
          period: "Feb 2023 - June 2023",
          description: `As a consultant SWE, I collaborated across teams to design and implement a
          distributed tracing solution in Go using BugSnag, enabling real-time error and performance
          monitoring for over 8 microservices and improved end-to-end system visibility.`,
        },
      ],
    },
    {
      id: "craterclub02",
      heading: "Crater.Club",
      link: "https://www.lumikai.com/post/crater-club-closes-seed-round-of-1-2m-from-lumikai-and-others",
      roles: [
        {
          name: "Software Engineer II",
          period: "Aug 2021 - Jan 2023",
          description: `I joined as a backend engineer and quickly adapted to the dynamic startup
          environment by transitioning into a full-stack role. I built the entire streamer experience
          on the product, including an analytics dashboard for our creators to track key metrics in
          real-time, providing actionable insights to improve their content.`,
        },
      ],
    },
    {
      id: "thinklink03",
      heading: "ThinkLink",
      link: "https://www.corkowl.com/",
      roles: [
        {
          name: "Software Engineer II (Consultant)",
          period: "Oct 2020 - Aug 2021",
          description: `As a founding engineer, I worked on the backend microservices for a wine
          ecommerce platform called CorkOwl. Used Test Driven Development in Go, managed database
          migrations with sequelize, and took ownership of customer order management,
          payment processing, and shipping logistics.`,
        },
      ],
    },
    {
      id: "codemonk04",
      heading: "Codemonk",
      link: "https://codemonk.io/work",
      roles: [
        {
          name: "Associate Software Engineer",
          period: "Aug 2019 - Sept 2020",
          description: `Upon transitioning to a full-time engineer, I contributed to over 8 client
          projects, including designing, developing, and deploying a suite of REST APIs built with Django
          REST framework and hosted on AWS. The API server was used by mobile, web, and desktop app
          that was built for wildlife sanctuaries in the state of Karnataka, India.`,
        },
        {
          name: "Software Engineer Intern",
          period: "Mar 2019 - Jul 2019",
          description: `I began my journey as an intern, where I quicky adapted to the professional
          software development environment. I gained hands-on experience with core technologies such as
          Python, Django REST framework, Docker, and Git workflows. I familiarized myself with API design,
          code reviews, and pair programming, while navigating a complex codebase for a Drone
          Surveillance Project.`,
        },
      ],
    },
  ],
  projects: [
    {
      id: "portfolio01",
      name: "Portfolio",
      technologies: ["Astro", "TypeScript", "Tailwind CSS", "pnpm"],
      description: `A modern and dynamic portfolio website built with Astro, TypeScript, and CSS, showcasing my technical
      skills, projects, and professional journey in a user-friendly manner.`,
      githubLink: "https://github.com/sanjeev29/portfolio",
    },
    {
      id: "maliciouspacketchecking02",
      name: "Malicious Packet Checking",
      technologies: ["C++", "Makefile"],
      description: `A network security tool designed to detect and manage malicious IP addresses. It embeds 10k IP
      addresses in a Random Bloom Filter (RBF) for efficient querying and uses a custom SHA-256 hash for secure indexing.`,
      githubLink: "https://github.com/sanjeev29/malicious-packet-checking",
    },
  ],

  // Menu items
  menu: {
    "/": "#about",
    work: "#work",
    skills: "#skills",
    projects: "#projects",
  },

  credits: "https://zaggonaut.dev",
};
