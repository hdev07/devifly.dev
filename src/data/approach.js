export const approachPillars = [
  {
    key: 'business',
    icon: 'target',
    iconBg: 'dark:bg-brand-500/15 bg-brand-500/10',
    iconColor: 'text-brand-400',
    title: {
      es: 'Negocio antes que estética',
      en: 'Business before aesthetics',
    },
    desc: {
      es: 'Cada pantalla responde a una pregunta comercial: ¿qué debe hacer el visitante y cómo lo medimos?',
      en: 'Every screen answers a business question: what should the visitor do and how do we measure it?',
    },
  },
  {
    key: 'conversion',
    icon: 'bar-chart-3',
    iconBg: 'dark:bg-emerald-500/15 bg-emerald-500/10',
    iconColor: 'dark:text-emerald-400 text-emerald-500',
    title: {
      es: 'Conversión medible',
      en: 'Measurable conversion',
    },
    desc: {
      es: 'CTAs claros, WhatsApp integrado y tracking listo para saber qué canal y mensaje generan ventas.',
      en: 'Clear CTAs, integrated WhatsApp, and tracking ready to see which channel and message drive sales.',
    },
  },
  {
    key: 'speed',
    icon: 'zap',
    iconBg: 'dark:bg-amber-500/15 bg-amber-500/10',
    iconColor: 'dark:text-amber-400 text-amber-500',
    title: {
      es: 'Velocidad que convierte',
      en: 'Speed that converts',
    },
    desc: {
      es: 'Sitios ligeros, mobile-first y con señales de confianza para no perder al usuario en los primeros segundos.',
      en: 'Lightweight, mobile-first sites with trust signals so you do not lose users in the first seconds.',
    },
  },
  {
    key: 'evolution',
    icon: 'boxes',
    iconBg: 'dark:bg-violet-500/15 bg-violet-500/10',
    iconColor: 'dark:text-violet-300 text-violet-500',
    title: {
      es: 'Evolución por fases',
      en: 'Phased evolution',
    },
    desc: {
      es: 'Lanzamos una base sólida y escalamos con datos reales, sin rehacer todo desde cero cada trimestre.',
      en: 'We launch a solid base and scale with real data, without rebuilding from scratch every quarter.',
    },
  },
]

export const businessProfiles = [
  {
    key: 'local-services',
    icon: 'rocket',
    accent: 'bg-gradient-to-r from-brand-500 to-cyan-glow',
    iconBg: 'dark:bg-brand-500/15 bg-brand-500/10',
    iconColor: 'text-brand-400',
    segment: { es: 'Servicios y marcas personales', en: 'Services & personal brands' },
    audience: {
      es: 'Profesionales, coaches, clínicas y negocios locales que venden por recomendación o ads.',
      en: 'Professionals, coaches, clinics, and local businesses selling through referrals or ads.',
    },
    recommendation: {
      es: 'Landing de alta conversión con propuesta clara, prueba social y contacto directo.',
      en: 'High-conversion landing with clear offer, social proof, and direct contact.',
    },
    priority: { es: 'Leads calificados', en: 'Qualified leads' },
    link: '/landings',
    cta: { es: 'Ver landing demo', en: 'See landing demo' },
  },
  {
    key: 'events',
    icon: 'party-popper',
    accent: 'bg-gradient-to-r from-pink-500 to-violet-soft',
    iconBg: 'dark:bg-pink-500/15 bg-pink-500/10',
    iconColor: 'dark:text-pink-400 text-pink-500',
    segment: { es: 'Eventos y celebraciones', en: 'Events & celebrations' },
    audience: {
      es: 'Bodas, XV años, cumpleaños y eventos donde el RSVP y la experiencia importan.',
      en: 'Weddings, quinceañeras, birthdays, and events where RSVP and experience matter.',
    },
    recommendation: {
      es: 'Invitación digital con cuenta regresiva, RSVP automatizado y control de invitados.',
      en: 'Digital invitation with countdown, automated RSVP, and guest management.',
    },
    priority: { es: 'Confirmaciones y control', en: 'Confirmations & control' },
    link: '/invitaciones',
    cta: { es: 'Ver invitación demo', en: 'See invitation demo' },
  },
  {
    key: 'venues',
    icon: 'tent',
    accent: 'bg-gradient-to-r from-emerald-500 to-teal-400',
    iconBg: 'dark:bg-emerald-500/15 bg-emerald-500/10',
    iconColor: 'dark:text-emerald-400 text-emerald-500',
    segment: { es: 'Salones y espacios por reserva', en: 'Venues & bookable spaces' },
    audience: {
      es: 'Salones de eventos, estudios, consultorios y negocios que viven del calendario.',
      en: 'Event venues, studios, clinics, and calendar-driven businesses.',
    },
    recommendation: {
      es: 'Sitio con galería, cotizador y agenda conectada al flujo comercial.',
      en: 'Site with gallery, quoter, and scheduling connected to the sales flow.',
    },
    priority: { es: 'Reservas confirmadas', en: 'Confirmed bookings' },
    link: '/salones-eventos',
    cta: { es: 'Ver demo de salón', en: 'See venue demo' },
  },
  {
    key: 'food-retail',
    icon: 'utensils-crossed',
    accent: 'bg-gradient-to-r from-amber-500 to-orange-400',
    iconBg: 'dark:bg-amber-500/15 bg-amber-500/10',
    iconColor: 'dark:text-amber-400 text-amber-500',
    segment: { es: 'Restaurantes y comercio', en: 'Restaurants & retail' },
    audience: {
      es: 'Restaurantes, cafeterías, vendedoras y tiendas con catálogo que cambia seguido.',
      en: 'Restaurants, cafés, sellers, and stores with frequently changing catalogs.',
    },
    recommendation: {
      es: 'Menú o catálogo digital editable, compartible y con pedido directo a WhatsApp.',
      en: 'Editable digital menu or catalog, easy to share, with direct WhatsApp ordering.',
    },
    priority: { es: 'Pedidos sin fricción', en: 'Frictionless orders' },
    link: '/catalogos-nenis',
    cta: { es: 'Ver catálogo demo', en: 'See catalog demo' },
  },
  {
    key: 'operations',
    icon: 'cpu',
    accent: 'bg-gradient-to-r from-cyan-glow to-brand-500',
    iconBg: 'dark:bg-cyan-glow/15 bg-cyan-500/10',
    iconColor: 'dark:text-cyan-glow text-cyan-600',
    segment: { es: 'Operaciones que ya no escalan', en: 'Operations that no longer scale' },
    audience: {
      es: 'Empresas con procesos en Excel, múltiples usuarios y necesidad de producto propio.',
      en: 'Companies with Excel workflows, multiple users, and need for their own product.',
    },
    recommendation: {
      es: 'Software o SaaS a medida con roles, dashboards e integraciones documentadas.',
      en: 'Custom software or SaaS with roles, dashboards, and documented integrations.',
    },
    priority: { es: 'Eficiencia operativa', en: 'Operational efficiency' },
    link: '/contact',
    cta: { es: 'Hablar de mi proyecto', en: 'Talk about my project' },
  },
]

export const approachSteps = [
  {
    num: '01',
    icon: 'compass',
    title: { es: 'Diagnóstico', en: 'Diagnosis' },
    desc: {
      es: 'Entendemos tu negocio, cliente y métrica clave antes de diseñar.',
      en: 'We understand your business, customer, and key metric before designing.',
    },
  },
  {
    num: '02',
    icon: 'pen-tool',
    title: { es: 'Diseño orientado a venta', en: 'Sales-oriented design' },
    desc: {
      es: 'Prototipos validados con foco en conversión, no solo en verse bien.',
      en: 'Validated prototypes focused on conversion, not just looking good.',
    },
  },
  {
    num: '03',
    icon: 'code-2',
    title: { es: 'Desarrollo ágil', en: 'Agile development' },
    desc: {
      es: 'Entregas semanales con stack moderno y feedback aplicado en vivo.',
      en: 'Weekly deliveries with a modern stack and live-applied feedback.',
    },
  },
  {
    num: '04',
    icon: 'rocket',
    title: { es: 'Lanzamiento con datos', en: 'Data-driven launch' },
    desc: {
      es: 'Deploy, SEO, analytics y 30 días de ajustes post-lanzamiento.',
      en: 'Deploy, SEO, analytics, and 30 days of post-launch tweaks.',
    },
  },
]
