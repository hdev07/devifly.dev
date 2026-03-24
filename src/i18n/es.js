export default {
  nav: {
    services: 'Servicios',
    process: 'Proceso',
    projects: 'Proyectos',
    stack: 'Stack',
    contact: 'Contacto',
  },
  hero: {
    title: 'Construye productos digitales que realmente escalan.',
    subtitle: 'Diseño y desarrollo apps modernas, plataformas SaaS y sistemas de alto rendimiento que convierten ideas en productos reales.',
    cta: 'Iniciar un proyecto',
    ctaSecondary: 'Ver trabajos',
  },
  services: {
    title: 'Qué hago',
    subtitle: 'Desarrollo de punta a punta, del concepto al deploy.',
    product: {
      title: 'Desarrollo de Productos',
      desc: 'Desarrollo completo de apps — desde validación de idea hasta el lanzamiento. Productos web y mobile hechos para crecer.',
    },
    saas: {
      title: 'Sistemas SaaS',
      desc: 'Arquitecturas escalables multi-tenant, lógica de suscripción, dashboards y APIs diseñadas para el crecimiento.',
    },
    uiux: {
      title: 'Ingeniería UI/UX',
      desc: 'Interfaces modernas y responsivas con atención al pixel e interacciones fluidas.',
    },
    api: {
      title: 'API & Backend',
      desc: 'Sistemas robustos del lado del servidor, APIs RESTful/GraphQL, autenticación y arquitectura de bases de datos.',
    },
  },
  process: {
    title: 'Cómo trabajo',
    subtitle: 'Un proceso claro de la idea a producción.',
    steps: [
      { title: 'Descubrimiento', desc: 'Entender la idea, definir alcance y alinear objetivos.' },
      { title: 'Diseño', desc: 'Wireframes y prototipos UX/UI que validan antes de construir.' },
      { title: 'Desarrollo', desc: 'Arquitectura limpia, stack moderno, entregas iterativas.' },
      { title: 'Deploy', desc: 'Lanzamiento listo para producción con CI/CD, monitoreo y soporte.' },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Productos reales, enviados y funcionando.',
    items: [
      {
        name: 'Movibase',
        desc: 'Plataforma de base de datos de películas con búsqueda en tiempo real, recomendaciones personalizadas y funciones sociales.',
        tech: ['Vue', 'Node.js', 'PostgreSQL', 'Tailwind'],
      },
      {
        name: 'Condecdotario',
        desc: 'Plataforma de storytelling digital para preservar y compartir anécdotas familiares a través de generaciones.',
        tech: ['Nuxt', 'Firebase', 'Tailwind', 'PWA'],
      },
      {
        name: 'DevTrack',
        desc: 'Herramienta interna de gestión de proyectos para equipos dev con tracking de sprints, métricas de código y reportes automatizados.',
        tech: ['Vue', 'NestJS', 'PostgreSQL', 'AWS'],
      },
    ],
  },
  stack: {
    title: 'Tech Stack',
    subtitle: 'Herramientas modernas para productos modernos.',
  },
  workWithMe: {
    title: 'Trabaja conmigo',
    subtitle: 'Ya sea que necesites un producto completo, una funcionalidad o un partner técnico — Devifly se adapta a tus necesidades.',
    options: [
      { title: 'Freelance', desc: 'Desarrollo dedicado para tu proyecto, en tu timeline.' },
      { title: 'Partner de Agencia', desc: 'Colaboración white-label para agencias que necesitan músculo técnico.' },
      { title: 'Builder de Producto', desc: 'De cero al lanzamiento — construyo tu producto de punta a punta.' },
    ],
  },
  cta: {
    title: 'Construyamos algo real.',
    subtitle: '¿Listo para convertir tu idea en producto? Hablemos.',
    button: 'Inicia tu proyecto',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    built: 'Hecho con Vue, Tailwind y pasión.',
  },
}
