export default {
  nav: {
    services: 'Services',
    process: 'Process',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
  },
  hero: {
    title: 'Build digital products that actually scale.',
    subtitle: 'I design and develop modern apps, SaaS platforms, and high-performance systems that turn ideas into real products.',
    cta: 'Start a project',
    ctaSecondary: 'View work',
  },
  services: {
    title: 'What I do',
    subtitle: 'End-to-end development from concept to deployment.',
    product: {
      title: 'Product Development',
      desc: 'Full-cycle app development — from idea validation to launch. Web and mobile products built to grow.',
    },
    saas: {
      title: 'SaaS Systems',
      desc: 'Scalable multi-tenant architectures, subscription logic, dashboards, and APIs designed for growth.',
    },
    uiux: {
      title: 'UI/UX Engineering',
      desc: 'Modern, responsive interfaces with pixel-perfect attention and smooth interactions.',
    },
    api: {
      title: 'API & Backend',
      desc: 'Robust server-side systems, RESTful/GraphQL APIs, authentication, and database architecture.',
    },
  },
  process: {
    title: 'How I work',
    subtitle: 'A clear process from idea to production.',
    steps: [
      { title: 'Discovery', desc: 'Understand the idea, define scope, and align goals.' },
      { title: 'Design', desc: 'UX/UI wireframes and prototypes that validate before building.' },
      { title: 'Development', desc: 'Clean architecture, modern stack, iterative delivery.' },
      { title: 'Deploy', desc: 'Production-ready launch with CI/CD, monitoring, and support.' },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Real products, shipped and running.',
    items: [
      {
        name: 'Movibase',
        desc: 'A comprehensive movie database platform with real-time search, personalized recommendations, and social features.',
        tech: ['Vue', 'Node.js', 'PostgreSQL', 'Tailwind'],
      },
      {
        name: 'Condecdotario',
        desc: 'Digital storytelling platform for preserving and sharing family anecdotes and memories across generations.',
        tech: ['Nuxt', 'Firebase', 'Tailwind', 'PWA'],
      },
      {
        name: 'DevTrack',
        desc: 'Internal project management tool for dev teams with sprint tracking, code metrics, and automated reports.',
        tech: ['Vue', 'NestJS', 'PostgreSQL', 'AWS'],
      },
    ],
  },
  stack: {
    title: 'Tech Stack',
    subtitle: 'Modern tools for modern products.',
  },
  workWithMe: {
    title: 'Work with me',
    subtitle: 'Whether you need a full product, a feature, or a technical partner — Devifly adapts to your needs.',
    options: [
      { title: 'Freelance', desc: 'Dedicated development for your project, on your timeline.' },
      { title: 'Agency Partner', desc: 'White-label collaboration for agencies needing technical muscle.' },
      { title: 'Product Builder', desc: 'From zero to launch — I build your product end to end.' },
    ],
  },
  cta: {
    title: "Let's build something real.",
    subtitle: 'Ready to turn your idea into a product? Let\'s talk.',
    button: 'Start your project',
  },
  footer: {
    rights: 'All rights reserved.',
    built: 'Built with Vue, Tailwind & passion.',
  },
}
