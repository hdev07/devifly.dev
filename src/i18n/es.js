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
    visitLabel: 'Ver proyecto',
    items: [
      {
        name: 'MoviBase',
        desc: 'Plataforma SaaS de control operativo y financiero de flotas vehiculares para Latinoamérica. GPS en tiempo real, comandos remotos, mantenimiento predictivo, control de combustible, checklists digitales, geocercas con PostGIS y dashboards financieros. 27 módulos integrados para empresas de transporte de 10 a miles de vehículos.',
        tech: ['Vue 3', 'Node.js', 'Express', 'PostgreSQL', 'PostGIS', 'Redis', 'TailwindCSS', 'Socket.IO'],
        link: 'https://movibase.com/',
      },
      {
        name: 'Confecdotario',
        desc: 'Red social de anécdotas creada para la comunidad del podcast La Cotorrisa. Feed con scroll infinito, publicación anónima, comentarios y reacciones, sistema de seguidos, contenido trending, gamificación con medallas desbloqueables, notificaciones en tiempo real y PWA completa con modo offline.',
        tech: ['Vue 3', 'NestJS', 'Prisma', 'PostgreSQL', 'TailwindCSS', 'PWA', 'AWS S3'],
        link: 'https://confecdotario.devifly.dev/',
      },
      {
        name: 'Musion',
        desc: 'PWA que conecta visitantes con museos mediante geolocalización inteligente, gamificación y e-commerce cultural. PostGIS para búsquedas geoespaciales, RBAC con 7 roles, pasarelas de pago (Stripe, PayPal, MercadoPago), Full Text Search en español, modo offline con Workbox y +50 tablas en base de datos.',
        tech: ['Vue 3', 'Express', 'PostgreSQL', 'PostGIS', 'TailwindCSS', 'PWA', 'Stripe'],
        link: 'https://musion.day/',
      },
      {
        name: 'DevTrack',
        desc: 'Herramienta interna de gestión de proyectos para equipos dev con tracking de sprints, métricas de código y reportes automatizados.',
        tech: ['Vue', 'NestJS', 'PostgreSQL', 'AWS'],
      },
    ],
  },
  stack: {
    title: 'Stack & Tecnologías',
    subtitle: 'Tecnologías que utilizo para construir productos modernos, rápidos y escalables.',
    categories: {
      frontend: {
        title: 'Frontend',
        desc: 'Interfaces rápidas, escalables y centradas en el usuario.',
        highlights: [
          'Animaciones fluidas',
          'Integración con streaming de datos en tiempo real',
          'Componentes de alto rendimiento',
          'Diseño responsive profesional',
        ],
      },
      backend: {
        title: 'Backend',
        desc: 'APIs robustas, seguras y eficientes.',
        highlights: [
          'Endpoints optimizados',
          'Streaming con ReadableStream + TextDecoder',
          'Validación fuerte y manejo de errores',
          'Autenticación y autorización avanzada',
        ],
      },
      databases: {
        title: 'Bases de Datos & Storage',
        desc: 'Arquitecturas multi-tenant, escalables y optimizadas.',
        highlights: [
          'Modelado completo para SaaS',
          'PostGIS para datos geoespaciales',
          'Particionado, enums, triggers, funciones',
          'Storage seguro y versionado',
        ],
      },
      architecture: {
        title: 'Arquitectura & Diseño de Sistemas',
        desc: 'Sistemas diseñados para crecer.',
        highlights: [
          'Estructuras empresariales tipo Movibase',
          'Control de unidades, dueños, permisos, relaciones',
          'Pensado para miles de tenants aislados',
          'Optimización de consultas + indexación inteligente',
        ],
      },
      testing: {
        title: 'APIs, Testing & Docs',
        desc: 'Creación de APIs empresariales.',
        highlights: [
          'Documentación clara',
          'Colecciones de pruebas y flujos de auth',
          'Mock Servers',
          'Testing automatizado',
        ],
      },
      geo: {
        title: 'Mapas & Geo',
        desc: 'Mapas custom y funcionalidades de ubicación.',
        highlights: [
          'Mapas custom (dark mode, branding)',
          'Geocodificación y tracking de rutas',
          'Optimización costo-calidad según proyecto',
        ],
      },
      cloud: {
        title: 'Cloud & DevOps',
        desc: 'Infraestructura moderna y flexible.',
        highlights: [
          'CI/CD automatizado',
          'Deploy multiambiente',
          'Servidores optimizados y monitoreo',
          'Logs y alertas avanzadas',
        ],
      },
      integrations: {
        title: 'Integraciones & Herramientas',
        desc: 'Workflows profesionales y conexiones con terceros.',
        highlights: [
          'Repositorios organizados por tenant y proyecto',
          'Control de versiones profesional',
          'Webhooks de pago y eventos',
          'Diseño UI/UX aplicado a producto real',
        ],
      },
      mobile: {
        title: 'PWA & Mobile',
        desc: 'Experiencias móviles sin necesidad de app nativa.',
        highlights: [
          'Funcionamiento offline',
          'Push notifications',
          'Optimización ligera para dispositivos de bajo consumo',
        ],
      },
    },
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
