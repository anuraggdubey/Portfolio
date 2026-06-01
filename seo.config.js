export const siteConfig = {
  siteName: "Anurag Dubey",
  defaultTitle: "Anurag Dubey | Full-Stack Developer Portfolio",
  defaultDescription:
    "Portfolio of Anurag Dubey, a full-stack developer building polished web experiences with practical engineering and clean frontend craft.",
  siteUrl: "https://anuragdubey.space",
  locale: "en_US",
  type: "website",
  author: "Anurag Dubey",
  keywords: [
    "Anurag Dubey",
    "Anurag Dubey portfolio",
    "full-stack developer",
    "frontend developer",
    "React developer",
    "TypeScript portfolio",
    "web developer India"
  ],
  image: "/favicon.svg"
};

export const siteRoutes = [
  {
    path: "/",
    title: siteConfig.defaultTitle,
    description:
      "Explore Anurag Dubey's portfolio, featured projects, technical skills, and contact details for full-stack web development work.",
    changefreq: "weekly",
    priority: 1
  },
  {
    path: "/about",
    title: "About",
    description:
      "Learn more about Anurag Dubey, his development background, experience, and the approach behind his full-stack portfolio work.",
    changefreq: "monthly",
    priority: 0.8
  },
  {
    path: "/projects",
    title: "Projects",
    description:
      "Browse selected projects by Anurag Dubey, including product builds, frontend experiences, and practical engineering work.",
    changefreq: "weekly",
    priority: 0.9
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Get in touch with Anurag Dubey for freelance, collaboration, or full-stack development opportunities.",
    changefreq: "monthly",
    priority: 0.7
  }
];
