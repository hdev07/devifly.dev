import phone1 from '../../assets/img/cases/musion/phone-1.png'
import phone2 from '../../assets/img/cases/musion/phone-2.png'
import phone3 from '../../assets/img/cases/musion/phone-3.png'
import landingHero from '../../assets/img/cases/musion/landing-hero.png'
import ogImage from '../../assets/img/cases/musion/og-image.jpg'
import welcome from '../../assets/img/cases/musion/welcome.svg'
import walkPlan from '../../assets/img/cases/musion/walkthrough-plan.svg'
import walkExplore from '../../assets/img/cases/musion/walkthrough-explore.svg'
import walkCollect from '../../assets/img/cases/musion/walkthrough-collect.svg'
import logo from '../../assets/img/cases/musion/logo-horizontal.svg'
import icon from '../../assets/img/cases/musion/icon.svg'

/**
 * Full case study for Musion — PWA to plan walkable museum days in CDMX.
 * Product truth from musion.day SOUL.md (routes + passport + trusted catalog).
 */
export const musionCase = {
  key: 'musion',
  slug: 'musion',
  path: '/casos/musion',
  liveUrl: 'https://musion.day/',
  appUrl: 'https://app.musion.day/',
  brand: {
    name: 'Musion',
    color: '#FF4081',
    logo,
    icon,
  },
  cover: phone1,
  tag: { es: 'Cultura · PWA · Geo', en: 'Culture · PWA · Geo' },
  title: { es: 'Musion', en: 'Musion' },
  headline: {
    es: 'De «quiero ir a un museo» a un plan del día que sí se puede cumplir.',
    en: 'From “I want to visit a museum” to a day plan you can actually finish.',
  },
  hook: {
    es: 'PWA para planear recorridos a pie por los 195 museos de CDMX: horarios confiables, rutas caminables y pasaporte digital.',
    en: 'PWA to plan walkable days across CDMX’s 195 museums: trusted hours, pedestrian routes, and a digital passport.',
  },
  problem: {
    es: 'CDMX tiene 195 museos; la mayoría conoce cinco. Armar un sábado implica pestañas, horarios en imágenes y el riesgo real de llegar a una puerta cerrada.',
    en: 'CDMX has 195 museums; most people know five. Planning a Saturday means tabs, hours buried in images, and a real chance of arriving at a closed door.',
  },
  solution: {
    es: 'Catálogo verificable + optimizador de rutas a pie + pasaporte con sellos. Planeación cultural, no otro feed de descubrimiento.',
    en: 'A trustworthy catalog + walkable route optimizer + stamp passport. Cultural planning—not another discovery feed.',
  },
  result: {
    es: 'Producto listo para visitantes locales: zonas caminables reales, datos SIC/OSM con verificación humana, y una PWA instalable sin tiendas.',
    en: 'A product for local visitors: real walkable zones, SIC/OSM data with human verification, and an installable PWA—no app stores.',
  },
  highlight: {
    value: '195',
    label: { es: 'museos en catálogo', en: 'museums in catalog' },
  },
  metrics: [
    {
      value: '195',
      label: { es: 'Museos CDMX', en: 'CDMX museums' },
    },
    {
      value: '8',
      label: { es: 'Zonas caminables', en: 'Walkable zones' },
    },
    {
      value: '0',
      label: { es: 'Descargas en tiendas', en: 'App-store downloads' },
      note: { es: 'PWA instalable', en: 'Installable PWA' },
    },
    {
      value: '75',
      label: { es: 'Tablas en el esquema', en: 'Schema tables' },
      note: { es: 'Arquitectura lista para crecer', en: 'Architecture ready to grow' },
    },
  ],
  stack: ['Vue 3', 'PWA', 'NestJS', 'PostgreSQL', 'PostGIS', 'Mapbox'],
  process: [
    {
      step: '01',
      title: { es: 'Problema real', en: 'Real problem' },
      body: {
        es: 'La fricción no era descubrir museos: era planear un día sin llegar a puertas cerradas ni perder horas cotejando horarios.',
        en: 'The friction wasn’t discovering museums—it was planning a day without closed doors or hours spent cross-checking schedules.',
      },
    },
    {
      step: '02',
      title: { es: 'Datos primero', en: 'Data first' },
      body: {
        es: 'Ingesta del SIC (195 museos) + hints de OpenStreetMap a staging. Horarios nunca entran directo a producción sin verificación humana.',
        en: 'SIC ingest (195 museums) + OpenStreetMap hints into staging. Schedules never ship to production without human verification.',
      },
    },
    {
      step: '03',
      title: { es: 'Producto caminable', en: 'Walkable product' },
      body: {
        es: 'Zonas reales (Centro, Alameda, Chapultepec…). Optimización de rutas con caché de travel legs para no quemar Mapbox Matrix en cada plan.',
        en: 'Real zones (Centro, Alameda, Chapultepec…). Route optimization with travel-leg caching so Mapbox Matrix isn’t burned on every plan.',
      },
    },
    {
      step: '04',
      title: { es: 'Retención con sellos', en: 'Retention via stamps' },
      body: {
        es: 'Pasaporte digital gratuito: el sello es lo que hace volver el mes siguiente. La monetización llega después; la costumbre, primero.',
        en: 'Free digital passport: stamps are what bring people back next month. Monetization later; habit first.',
      },
    },
  ],
  gallery: [
    {
      src: phone1,
      alt: { es: 'Landing móvil de Musion', en: 'Musion mobile landing' },
      caption: { es: 'Hero móvil', en: 'Mobile hero' },
    },
    {
      src: phone2,
      alt: { es: 'Sección Explora en móvil', en: 'Explore section on mobile' },
      caption: { es: 'Explora', en: 'Explore' },
    },
    {
      src: phone3,
      alt: { es: 'Landing móvil — más secciones', en: 'Mobile landing — more sections' },
      caption: { es: 'Producto', en: 'Product' },
    },
  ],
  visuals: [
    {
      src: welcome,
      alt: { es: 'Ilustración de bienvenida', en: 'Welcome illustration' },
      caption: { es: 'Identidad visual', en: 'Visual identity' },
    },
    {
      src: walkPlan,
      alt: { es: 'Walkthrough planear ruta', en: 'Walkthrough plan a route' },
      caption: { es: 'Planear', en: 'Plan' },
    },
    {
      src: walkExplore,
      alt: { es: 'Walkthrough explorar museos', en: 'Walkthrough explore museums' },
      caption: { es: 'Explorar', en: 'Explore' },
    },
    {
      src: walkCollect,
      alt: { es: 'Walkthrough coleccionar sellos', en: 'Walkthrough collect stamps' },
      caption: { es: 'Coleccionar', en: 'Collect' },
    },
  ],
  demo: {
    thumb: ogImage,
    preview: landingHero,
    href: '/casos/musion',
    external: 'https://app.musion.day/',
    title: { es: 'Musion', en: 'Musion' },
    subtitle: {
      es: 'Rutas culturales · Pasaporte',
      en: 'Cultural routes · Passport',
    },
  },
}
