import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const invitationDemoMeta = {
  fullscreen: true,
  exitTo: '/invitaciones',
  exitLabelEs: 'Volver a invitaciones',
  exitLabelEn: 'Back to invitations',
  robots: 'noindex, nofollow',
  canonicalPath: '/invitaciones',
}

const menuDemoMeta = {
  fullscreen: true,
  darkOnly: true,
  exitTo: '/menus-digitales',
  exitLabelEs: 'Volver a menús digitales',
  exitLabelEn: 'Back to digital menus',
  robots: 'noindex, nofollow',
  canonicalPath: '/menus-digitales',
}

const catalogDemoMeta = {
  fullscreen: true,
  exitTo: '/catalogos',
  exitLabelEs: 'Volver a catálogos digitales',
  exitLabelEn: 'Back to digital catalogs',
  robots: 'noindex, nofollow',
  canonicalPath: '/catalogos',
}

const salonDemoMeta = {
  fullscreen: true,
  darkOnly: true,
  exitTo: '/salones-eventos',
  exitLabelEs: 'Volver a reservaciones',
  exitLabelEn: 'Back to venue websites',
  robots: 'noindex, nofollow',
  canonicalPath: '/salones-eventos',
}

// IA "hub mínimo": Home (hub) + 5 landings de producto + demos por plan
// (esencial / pro / premium) + /contacto.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contact.vue')
  },

  // ===== Landings de producto =====
  {
    path: '/landing-pages',
    name: 'LandingPages',
    component: () => import('../views/landings/LandingNegocios.vue'),
    meta: { darkOnly: true }
  },
  {
    path: '/invitaciones',
    name: 'Invitaciones',
    component: () => import('../views/landings/LandingInvitaciones.vue')
  },
  {
    path: '/menus-digitales',
    name: 'MenusDigitales',
    component: () => import('../views/landings/LandingMenus.vue'),
    meta: { darkOnly: true }
  },
  {
    path: '/catalogos',
    name: 'Catalogos',
    component: () => import('../views/landings/LandingCatalogos.vue')
  },
  {
    path: '/salones-eventos',
    name: 'SalonesEventos',
    component: () => import('../views/landings/LandingReservaciones.vue'),
    meta: { darkOnly: true }
  },

  // ===== Demos por plan (URL: /producto/esencial|pro|premium) =====
  {
    path: '/invitaciones/:plan(esencial|pro|premium)',
    name: 'InvitacionesDemoPlan',
    component: () => import('../views/demos/InvitacionesDemo.vue'),
    meta: invitationDemoMeta,
  },
  {
    path: '/menus-digitales/:plan(esencial|pro|premium)',
    name: 'MenusDigitalesDemoPlan',
    component: () => import('../views/demos/MenuPremiumDemo.vue'),
    meta: menuDemoMeta,
  },
  {
    path: '/catalogos/:plan(esencial|pro|premium)',
    name: 'CatalogosDemoPlan',
    component: () => import('../views/demos/CatalogoPremiumDemo.vue'),
    meta: catalogDemoMeta,
  },
  {
    path: '/salones-eventos/:plan(esencial|pro|premium)',
    name: 'SalonesEventosDemoPlan',
    component: () => import('../views/demos/SalonEventosDemo.vue'),
    meta: salonDemoMeta,
  },

  // ===== Demo genérica (alias → premium) =====
  {
    path: '/landing-pages/demo',
    name: 'LandingPagesDemo',
    component: () => import('../views/demos/LandingPageDemo.vue'),
    meta: {
      fullscreen: true,
      darkOnly: true,
      exitTo: '/landing-pages',
      exitLabelEs: 'Volver a landing pages',
      exitLabelEn: 'Back to landing pages',
      robots: 'noindex, nofollow',
      canonicalPath: '/landing-pages'
    }
  },
  { path: '/invitaciones/demo', redirect: '/invitaciones/premium' },
  { path: '/menus-digitales/demo', redirect: '/menus-digitales/premium' },
  { path: '/catalogos/demo', redirect: '/catalogos/premium' },
  { path: '/salones-eventos/demo', redirect: '/salones-eventos/premium' },

  // ===== Case studies =====
  {
    path: '/casos/timbra',
    name: 'CaseStudyTimbra',
    component: () => import('../views/casos/CaseStudyTimbra.vue'),
  },
  {
    path: '/casos/musion',
    name: 'CaseStudyMusion',
    component: () => import('../views/casos/CaseStudyMusion.vue'),
  },
  {
    path: '/casos/confecdotario',
    name: 'CaseStudyConfecdotario',
    component: () => import('../views/casos/CaseStudyConfecdotario.vue'),
  },

  // ===== Redirects: páginas corporativas retiradas → secciones del Home =====
  { path: '/products', redirect: { path: '/', hash: '#productos' } },
  { path: '/pricing', redirect: { path: '/', hash: '#precios' } },
  { path: '/enfoque', redirect: { path: '/', hash: '#enfoque' } },
  { path: '/solutions', redirect: { path: '/', hash: '#enfoque' } },
  { path: '/case-studies', redirect: { path: '/', hash: '#casos' } },
  { path: '/casos', redirect: { path: '/', hash: '#casos' } },
  { path: '/contact', redirect: '/contacto' },

  // ===== Redirects: slugs renombrados =====
  { path: '/landings', redirect: '/landing-pages' },
  { path: '/landings/demo', redirect: '/landing-pages/demo' },
  { path: '/catalogos-nenis', redirect: '/catalogos' },
  { path: '/catalogos-nenis/demo', redirect: '/catalogos/premium' },
  { path: '/catalogos-nenis/pro', redirect: '/catalogos/pro' },
  { path: '/catalogos-nenis/premium', redirect: '/catalogos/premium' },
  { path: '/catalogos-nenis/esencial', redirect: '/catalogos/esencial' },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: { robots: 'noindex, nofollow' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
