import phone1 from '../../assets/img/cases/confecdotario/phone-1.png'
import phone2 from '../../assets/img/cases/confecdotario/phone-2.png'
import phone3 from '../../assets/img/cases/confecdotario/phone-3.png'
import landingHero from '../../assets/img/cases/confecdotario/landing-hero.png'
import ogImage from '../../assets/img/cases/confecdotario/og-image.png'
import featureFeed from '../../assets/img/cases/confecdotario/feature-feed.svg'
import featureBadges from '../../assets/img/cases/confecdotario/feature-badges.svg'
import featureModeration from '../../assets/img/cases/confecdotario/feature-moderation.svg'
import featureNotifications from '../../assets/img/cases/confecdotario/feature-notifications.svg'
import logo from '../../assets/img/cases/confecdotario/logo-horizontal.svg'
import icon from '../../assets/img/cases/confecdotario/icon.svg'

/**
 * Full case study for Confecdotario — owned social network for La Cotorrisa podcast fans.
 * Product truth from app.confecdotario.com (feed, badges, topics, moderation, PWA).
 */
export const confecdotarioCase = {
  key: 'confecdotario',
  slug: 'confecdotario',
  path: '/casos/confecdotario',
  liveUrl: 'https://confecdotario.com/',
  appUrl: 'https://app.confecdotario.com/',
  brand: {
    name: 'Confecdotario',
    color: '#FFD700',
    logo,
    icon,
  },
  cover: phone1,
  tag: { es: 'Comunidad · PWA', en: 'Community · PWA' },
  title: { es: 'Confecdotario', en: 'Confecdotario' },
  headline: {
    es: 'De comentarios sueltos en Instagram a una comunidad propia que vuelve cada semana.',
    en: 'From scattered Instagram comments to an owned community that comes back every week.',
  },
  hook: {
    es: 'El espacio oficial donde la audiencia del podcast La Cotorrisa comparte anécdotas, gana medallas y vuelve sin depender del algoritmo.',
    en: 'The official space where La Cotorrisa podcast fans share stories, earn badges, and return—without relying on someone else’s algorithm.',
  },
  problem: {
    es: 'Los fans comentaban en Instagram y Facebook sin que la marca pudiera moderar, medir ni fidelizar. El engagement se evaporaba en feeds ajenos.',
    en: 'Fans commented on Instagram and Facebook with no way for the brand to moderate, measure, or retain them. Engagement vanished in someone else’s feed.',
  },
  solution: {
    es: 'Red social propia con feed de anécdotas, temas, medallas por participación, notificaciones y moderación—todo en una PWA instalable.',
    en: 'An owned social network with anecdote feed, topics, participation badges, notifications, and moderation—all in an installable PWA.',
  },
  result: {
    es: 'Comunidad activa semana a semana, con datos propios, gamificación y control total del tono de la marca.',
    en: 'An active community week after week, with owned data, gamification, and full control of brand tone.',
  },
  highlight: {
    value: '+180%',
    label: { es: 'engagement vs. redes genéricas', en: 'engagement vs. generic social' },
  },
  metrics: [
    {
      value: '+180%',
      label: { es: 'Engagement vs. redes', en: 'Engagement vs. social' },
      note: { es: 'Vs. comentarios en IG/FB', en: 'Vs. IG/FB comments' },
    },
    {
      value: 'PWA',
      label: { es: 'Sin tiendas de apps', en: 'No app stores' },
      note: { es: 'Instalable en un tap', en: 'Installable in one tap' },
    },
    {
      value: '8+',
      label: { es: 'Medallas de gamificación', en: 'Gamification badges' },
      note: { es: 'Retención por hábito', en: 'Habit-driven retention' },
    },
    {
      value: '100%',
      label: { es: 'Datos propios', en: 'Owned data' },
      note: { es: 'Sin algoritmo ajeno', en: 'No third-party algorithm' },
    },
  ],
  stack: ['Vue 3', 'PWA', 'NestJS', 'PostgreSQL', 'Moderación'],
  process: [
    {
      step: '01',
      title: { es: 'Dolor de la marca', en: 'Brand pain' },
      body: {
        es: 'La audiencia ya existía; el problema era no tener casa. Los comentarios vivían en redes ajenas, sin moderación ni métricas útiles.',
        en: 'The audience already existed; the problem was having no home. Comments lived on someone else’s networks, with no moderation or useful metrics.',
      },
    },
    {
      step: '02',
      title: { es: 'Producto de comunidad', en: 'Community product' },
      body: {
        es: 'Feed de anécdotas, temas, perfiles y follows. La unidad de contenido es la historia del fan—no un post de marketing.',
        en: 'Anecdote feed, topics, profiles, and follows. The content unit is the fan’s story—not a marketing post.',
      },
    },
    {
      step: '03',
      title: { es: 'Gamificación + retorno', en: 'Gamification + return' },
      body: {
        es: 'Medallas (Cotorro, Favorito, Popular…) y notificaciones que traen de vuelta. El hábito se construye antes de monetizar.',
        en: 'Badges (Cotorro, Favorito, Popular…) and notifications that bring people back. Habit first; monetization later.',
      },
    },
    {
      step: '04',
      title: { es: 'Moderación y control', en: 'Moderation & control' },
      body: {
        es: 'Cola de reportes, roles y acciones auditables. La marca decide qué se publica y mide engagement real en su propio producto.',
        en: 'Report queue, roles, and auditable actions. The brand decides what ships and measures real engagement in its own product.',
      },
    },
  ],
  gallery: [
    {
      src: phone1,
      alt: { es: 'Landing móvil de Confecdotario', en: 'Confecdotario mobile landing' },
      caption: { es: 'Hero móvil', en: 'Mobile hero' },
    },
    {
      src: phone2,
      alt: { es: 'Funcionalidades en móvil', en: 'Features on mobile' },
      caption: { es: 'Funcionalidades', en: 'Features' },
    },
    {
      src: phone3,
      alt: { es: 'Landing móvil — más secciones', en: 'Mobile landing — more sections' },
      caption: { es: 'Producto', en: 'Product' },
    },
  ],
  visuals: [
    {
      src: featureFeed,
      alt: { es: 'Feed de anécdotas', en: 'Anecdote feed' },
      caption: { es: 'Feed', en: 'Feed' },
    },
    {
      src: featureBadges,
      alt: { es: 'Sistema de medallas', en: 'Badge system' },
      caption: { es: 'Gamificación', en: 'Gamification' },
    },
    {
      src: featureModeration,
      alt: { es: 'Moderación de contenido', en: 'Content moderation' },
      caption: { es: 'Moderación', en: 'Moderation' },
    },
    {
      src: featureNotifications,
      alt: { es: 'Notificaciones push', en: 'Push notifications' },
      caption: { es: 'Alertas', en: 'Alerts' },
    },
  ],
  demo: {
    thumb: ogImage,
    preview: landingHero,
    href: '/casos/confecdotario',
    external: 'https://app.confecdotario.com/',
    title: { es: 'Confecdotario', en: 'Confecdotario' },
    subtitle: {
      es: 'Comunidad · Medallas · PWA',
      en: 'Community · Badges · PWA',
    },
  },
  // Testimonial del cliente. Mientras sea null, la sección no se renderiza.
  // Para activarla, sustituye por:
  //   testimonial: {
  //     quote: { es: 'Cita literal del cliente.', en: 'Client quote.' },
  //     author: 'Nombre Apellido',
  //     role: { es: 'Cargo · Empresa', en: 'Role · Company' },
  //     avatar: null, // opcional: import de una foto en assets/img/cases/confecdotario/
  //   },
  testimonial: null,
}
