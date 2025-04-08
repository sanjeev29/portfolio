// Set any item to undefined to remove it from the site or to use the default value

export const GLOBAL = {
  // Site metadata
  username: "Sanjeev Raichur",
  rootUrl: "https://zaggonaut.dev",
  shortDescription:
    "Graduate CS @ Michigan Tech. Software engineer. Backend dev. Tech enthusiast.",
  longDescription: `I'm a graduate student in computer science student at Michigan Technological University.
    I have 3+ years of experience as a software engineer, during which I worked with
    fast-paced startups to build scalable backend systems from concept to deployment. I have strong expertise
    in API design and development, database design and DevOps practices.`,
  location: "📍 Michigan",
  workStatus: "💻 Open to work",

  // Skills
  skills: [
    {
      title: "Programming Languages",
      list: ["Python", "Go", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Backend Stack",
      list: ["Django", "Django REST Framework", "Flask", "Node.js"],
    },
    {
      title: "Frontend Stack",
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
      list: ["Celery", "Redis", "RabbitMQ", "Sentry", "BugSnag", "NewRelic"],
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
      role: "Software Engineer II (Consultant)",
      period: "Feb 2023 - June 2023",
      technologies: ["Go", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      description: `Led backend development for a distributed system serving 1M+ users. Implemented
      microservices architecture using Go and TypeScript, reducing API response times by 40%.`,
    },
    {
      id: "craterclub02",
      heading: "Crater.Club",
      role: "Software Engineer II",
      period: "Aug 2021 - Jan 2023",
      technologies: ["Go", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      description: `Led backend development for a distributed system serving 1M+ users. Implemented
      microservices architecture using Go and TypeScript, reducing API response times by 40%.`,
    },
    {
      id: "thinklink03",
      heading: "ThinkLink",
      role: "Software Engineer II (Consultant)",
      period: "Feb 2023 - June 2023",
      technologies: ["Go", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      description: `Led backend development for a distributed system serving 1M+ users. Implemented
      microservices architecture using Go and TypeScript, reducing API response times by 40%.`,
    },
    {
      id: "craterclub04",
      heading: "Crater.Club",
      role: "Software Engineer II",
      period: "Aug 2021 - Jan 2023",
      technologies: ["Go", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      description: `Led backend development for a distributed system serving 1M+ users. Implemented
      microservices architecture using Go and TypeScript, reducing API response times by 40%.`,
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
