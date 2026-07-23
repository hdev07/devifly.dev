import { siteConfig } from '../data/site.js'

const baseKeywords = {
  es: [
    'devifly',
    'desarrollo web',
    'landing pages',
    'software a medida',
    'saas',
    'seo',
    'whatsapp',
    'mexico',
  ],
  en: [
    'devifly',
    'web development',
    'landing pages',
    'custom software',
    'saas',
    'seo',
    'whatsapp',
    'mexico',
  ],
}

const routeSeoByName = {
  Home: ({ locale }) => ({
    title:
      locale === 'es'
        ? 'Devifly | Landings, catálogos, invitaciones y SaaS para vender más'
        : 'Devifly | Landing pages, catalogs, invitations and SaaS that sell',
    description:
      locale === 'es'
        ? 'Desarrollamos landing pages, catálogos digitales, menús QR, invitaciones web y software SaaS con enfoque en conversión, velocidad y posicionamiento orgánico.'
        : 'We build landing pages, digital catalogs, QR menus, web invitations and SaaS products focused on conversion, speed, and organic search visibility.',
    keywords:
      locale === 'es'
        ? ['landing page para negocios', 'catalogo digital', 'menu digital qr', 'invitaciones digitales', 'desarrollo saas']
        : ['business landing page', 'digital catalog', 'qr menu', 'digital invitations', 'custom saas development'],
    type: 'website',
    path: '/',
    pageType: 'WebSite',
  }),
  Contacto: ({ locale }) => ({
    title:
      locale === 'es'
        ? 'Contacto y cotización de proyectos | Devifly'
        : 'Contact and project quote | Devifly',
    description:
      locale === 'es'
        ? 'Cuéntanos tu proyecto y recibe respuesta por WhatsApp o correo en menos de 24 horas. Cotiza landings, catálogos, invitaciones y SaaS.'
        : 'Tell us about your project and get a WhatsApp or email response in under 24 hours. Quote landing pages, catalogs, invitations, and SaaS.',
    keywords:
      locale === 'es'
        ? ['contacto devifly', 'cotizar landing page', 'cotizar software']
        : ['contact devifly', 'landing page quote', 'software quote'],
    path: '/contacto',
    pageType: 'ContactPage',
  }),
  LandingPages: ({ locale }) => ({
    title:
      locale === 'es'
        ? 'Landing pages para negocios y campañas | Devifly'
        : 'Landing pages for businesses and campaigns | Devifly',
    description:
      locale === 'es'
        ? 'Creamos landing pages para negocios que necesitan generar leads, vender por WhatsApp y convertir tráfico en oportunidades reales.'
        : 'We create landing pages for businesses that need more leads, better WhatsApp conversations, and stronger conversion performance.',
    keywords:
      locale === 'es'
        ? ['landing page para negocio', 'landing page de alta conversion', 'pagina web para captar clientes']
        : ['business landing page', 'high conversion landing page', 'lead generation website'],
    path: '/landing-pages',
    pageType: 'Service',
  }),
  Invitaciones: ({ locale }) => ({
    title:
      locale === 'es'
        ? 'Invitaciones digitales personalizadas con RSVP | Devifly'
        : 'Digital invitations with RSVP and personalization | Devifly',
    description:
      locale === 'es'
        ? 'Invitaciones web para bodas, XV años y eventos con RSVP, galería, mapa, música y experiencias personalizadas para tus invitados.'
        : 'Web invitations for weddings, quinceañeras and events with RSVP, galleries, maps, music and personalized guest experiences.',
    keywords:
      locale === 'es'
        ? ['invitaciones digitales', 'invitacion web para boda', 'rsvp digital', 'invitacion xv años']
        : ['digital invitations', 'wedding web invitation', 'digital rsvp', 'quinceañera invitation'],
    path: '/invitaciones',
    pageType: 'Service',
  }),
  MenusDigitales: ({ locale }) => ({
    title:
      locale === 'es'
        ? 'Menús digitales QR para restaurantes | Devifly'
        : 'QR digital menus for restaurants | Devifly',
    description:
      locale === 'es'
        ? 'Menús digitales para restaurantes con QR, categorías, fotos, promociones y panel de edición para actualizar tu carta sin imprimir.'
        : 'Digital restaurant menus with QR access, categories, photos, promotions and editing tools to update your menu without printing.',
    keywords:
      locale === 'es'
        ? ['menu digital para restaurante', 'menu qr', 'carta digital restaurante']
        : ['restaurant digital menu', 'qr menu', 'digital restaurant menu'],
    path: '/menus-digitales',
    pageType: 'Service',
  }),
  Catalogos: ({ locale }) => ({
    title:
      locale === 'es'
        ? 'Catálogos digitales para vender por WhatsApp | Devifly'
        : 'Digital catalogs to sell through WhatsApp | Devifly',
    description:
      locale === 'es'
        ? 'Crea un catálogo digital para mostrar productos, precios, stock y recibir pedidos por WhatsApp sin depender de marketplaces.'
        : 'Launch a digital catalog to showcase products, pricing and stock while receiving orders directly through WhatsApp.',
    keywords:
      locale === 'es'
        ? ['catalogo digital', 'catalogo para whatsapp', 'catalogo para nenis', 'tienda catalogo']
        : ['digital catalog', 'whatsapp catalog', 'online product catalog'],
    path: '/catalogos',
    pageType: 'Service',
  }),
  SalonesEventos: ({ locale }) => ({
    title:
      locale === 'es'
        ? 'Páginas web para salones de eventos y reservaciones | Devifly'
        : 'Event venue websites and booking systems | Devifly',
    description:
      locale === 'es'
        ? 'Diseñamos páginas web para salones de eventos con galería, cotizador, calendario, WhatsApp y SEO local para captar más reservaciones.'
        : 'We design event venue websites with galleries, quote forms, calendars, WhatsApp and local SEO to drive more bookings.',
    keywords:
      locale === 'es'
        ? ['pagina web para salon de eventos', 'reservaciones para salones', 'cotizador para salon']
        : ['event venue website', 'venue booking system', 'venue quote website'],
    path: '/salones-eventos',
    pageType: 'Service',
  }),
  NotFound: ({ locale }) => ({
    title:
      locale === 'es' ? 'Página no encontrada | Devifly' : 'Page not found | Devifly',
    description:
      locale === 'es'
        ? 'La página que buscas no existe o cambió de ubicación.'
        : 'The page you are looking for does not exist or moved.',
    robots: 'noindex, nofollow',
    path: '/',
    pageType: 'WebPage',
  }),
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))]
}

function normalizePath(path) {
  if (!path || path === '/') {
    return '/'
  }

  return path.endsWith('/') ? path.slice(0, -1) : path
}

function toAbsoluteUrl(path) {
  return `${siteConfig.siteUrl}${normalizePath(path)}`
}

function getLocaleCode(locale) {
  return locale === 'en' ? 'en_US' : 'es_MX'
}

function getDefaultSeo(locale) {
  return routeSeoByName.Home({ locale })
}

function resolveSeo(route, locale) {
  const resolver = routeSeoByName[route.name] ?? getDefaultSeo
  return resolver({ route, locale })
}

function buildBreadcrumb(route, seo, locale) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Devifly',
      item: siteConfig.siteUrl,
    },
  ]

  if (route.name === 'Home') {
    return null
  }

  items.push({
    '@type': 'ListItem',
    position: 2,
    name: seo.title.replace(/ \| Devifly$/, ''),
    item: seo.canonical,
  })

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

function buildSchemaGraph(route, seo, locale) {
  const organization = {
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedinUrl, siteConfig.githubUrl],
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.siteUrl}/favicon.svg`,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: locale === 'es' ? 'ventas' : 'sales',
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        availableLanguage: ['es', 'en'],
      },
    ],
  }

  const webPage = {
    '@type': seo.pageType ?? 'WebPage',
    '@id': `${seo.canonical}#webpage`,
    url: seo.canonical,
    name: seo.title,
    description: seo.description,
    inLanguage: locale === 'en' ? 'en' : 'es',
    isPartOf: {
      '@id': `${siteConfig.siteUrl}/#website`,
    },
    about: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
  }

  const graph = [organization]

  if (route.name === 'Home') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      description: seo.description,
      publisher: {
        '@id': `${siteConfig.siteUrl}/#organization`,
      },
      inLanguage: locale === 'en' ? 'en' : 'es',
    })
  }

  graph.push(webPage)

  if (seo.pageType === 'Service') {
    graph.push({
      '@type': 'Service',
      '@id': `${seo.canonical}#service`,
      name: seo.serviceName ?? seo.title,
      description: seo.description,
      url: seo.canonical,
      provider: {
        '@id': `${siteConfig.siteUrl}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: locale === 'es' ? 'México' : 'Mexico',
      },
    })
  }

  const breadcrumb = buildBreadcrumb(route, seo, locale)

  if (breadcrumb) {
    graph.push(breadcrumb)
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

function upsertMeta(selector, attribute, value, content) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(selector, rel, href) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export function applyRouteSeo(route, locale) {
  const base = getDefaultSeo(locale)
  const resolved = resolveSeo(route, locale)
  const path = normalizePath(route.meta?.canonicalPath ?? resolved.path ?? route.path)

  const seo = {
    ...base,
    ...resolved,
    path,
    canonical: toAbsoluteUrl(path),
    robots: route.meta?.robots ?? resolved.robots ?? 'index, follow',
    image: siteConfig.ogImage,
    type: resolved.type ?? 'website',
    keywords: uniq([...(baseKeywords[locale] ?? baseKeywords.es), ...(resolved.keywords ?? [])]),
  }

  document.title = seo.title
  document.documentElement.lang = locale === 'en' ? 'en' : 'es'

  upsertMeta('meta[name="description"]', 'name', 'description', seo.description)
  upsertMeta('meta[name="keywords"]', 'name', 'keywords', seo.keywords.join(', '))
  upsertMeta('meta[name="robots"]', 'name', 'robots', seo.robots)
  upsertMeta('meta[name="author"]', 'name', 'author', siteConfig.name)
  upsertMeta('meta[name="theme-color"]', 'name', 'theme-color', '#020617')
  upsertMeta('meta[property="og:type"]', 'property', 'og:type', seo.type)
  upsertMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonical)
  upsertMeta('meta[property="og:title"]', 'property', 'og:title', seo.title)
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', seo.description)
  upsertMeta('meta[property="og:image"]', 'property', 'og:image', seo.image)
  upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', seo.title)
  upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteConfig.name)
  upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', getLocaleCode(locale))
  upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
  upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description)
  upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', seo.image)
  upsertMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', seo.title)

  upsertLink('link[rel="canonical"]', 'canonical', seo.canonical)

  let schemaScript = document.head.querySelector('script[data-devifly-seo="schema"]')

  if (!schemaScript) {
    schemaScript = document.createElement('script')
    schemaScript.setAttribute('type', 'application/ld+json')
    schemaScript.setAttribute('data-devifly-seo', 'schema')
    document.head.appendChild(schemaScript)
  }

  schemaScript.textContent = JSON.stringify(buildSchemaGraph(route, seo, locale))
}