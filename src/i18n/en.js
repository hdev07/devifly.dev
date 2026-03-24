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
    visitLabel: 'Visit project',
    items: [
      {
        name: 'MoviBase',
        desc: 'SaaS platform for fleet operational and financial control in Latin America. Real-time GPS tracking, remote commands, predictive maintenance, fuel control, digital checklists, geofences with PostGIS, and financial dashboards. 27 integrated modules serving transport companies from 10 to thousands of vehicles.',
        tech: ['Vue', 'Node.js', 'PostgreSQL', 'PostGIS', 'Tailwind'],
        link: 'https://movibase.com/',
      },
      {
        name: 'Confecdotario',
        desc: 'Social network for sharing anecdotes built for the La Cotorrisa podcast community. Infinite scroll feed, anonymous posting, comments & reactions, follow system, trending content, gamification with unlockable badges, real-time notifications, and full PWA with offline mode.',
        tech: ['Nuxt', 'Supabase', 'Tailwind', 'PWA'],
        link: 'https://confecdotario.devifly.dev/',
      },
      {
        name: 'DevTrack',
        desc: 'Internal project management tool for dev teams with sprint tracking, code metrics, and automated reports.',
        tech: ['Vue', 'NestJS', 'PostgreSQL', 'AWS'],
      },
    ],
  },
  stack: {
    title: 'Stack & Technologies',
    subtitle: 'Technologies I use to build modern, fast, and scalable products.',
    categories: {
      frontend: {
        title: 'Frontend',
        desc: 'Fast, scalable, and user-centered interfaces.',
        highlights: [
          'Smooth animations & transitions',
          'Real-time data streaming integration',
          'High-performance components',
          'Professional responsive design',
        ],
      },
      backend: {
        title: 'Backend',
        desc: 'Robust, secure, and efficient APIs.',
        highlights: [
          'Optimized endpoints',
          'Streaming with ReadableStream + TextDecoder',
          'Strong validation & error handling',
          'Advanced authentication & authorization',
        ],
      },
      databases: {
        title: 'Databases & Storage',
        desc: 'Multi-tenant, scalable, and optimized data architectures.',
        highlights: [
          'Complete SaaS data modeling',
          'PostGIS for geospatial data',
          'Partitioning, enums, triggers, functions',
          'Secure and versioned storage',
        ],
      },
      architecture: {
        title: 'Architecture & System Design',
        desc: 'Systems designed to grow.',
        highlights: [
          'Enterprise structures (Movibase-level)',
          'Units, owners, permissions, relations control',
          'Designed for thousands of isolated tenants',
          'Query optimization + smart indexing',
        ],
      },
      testing: {
        title: 'APIs, Testing & Docs',
        desc: 'Enterprise-grade API creation.',
        highlights: [
          'Clear documentation',
          'Test collections & auth flows',
          'Mock servers',
          'Automated testing pipelines',
        ],
      },
      geo: {
        title: 'Maps & Geo',
        desc: 'Custom maps and location features.',
        highlights: [
          'Custom maps (dark mode, branding)',
          'Geocoding & route tracking',
          'Cost-quality optimization per project',
        ],
      },
      cloud: {
        title: 'Cloud & DevOps',
        desc: 'Modern and flexible infrastructure.',
        highlights: [
          'Automated CI/CD',
          'Multi-environment deploy',
          'Optimized servers & monitoring',
          'Advanced logs and alerts',
        ],
      },
      integrations: {
        title: 'Integrations & Tools',
        desc: 'Professional workflows and third-party connections.',
        highlights: [
          'Repos organized by tenant & project',
          'Professional version control',
          'Payment & event webhooks',
          'UI/UX design applied to real product',
        ],
      },
      mobile: {
        title: 'PWA & Mobile',
        desc: 'Mobile experiences without a native app.',
        highlights: [
          'Offline functionality',
          'Push notifications',
          'Lightweight optimization for low-power devices',
        ],
      },
    },
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
