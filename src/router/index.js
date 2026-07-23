import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// IA "hub mínimo": Home (hub) + 5 landings de producto + 1 demo estrella
// por producto + /contacto. Las páginas corporativas viejas redirigen a
// secciones del Home; los tiers de demo redirigen a la demo estrella.
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
    component: () => import('../views/landings/LandingNegocios.vue')
  },
  {
    path: '/invitaciones',
    name: 'Invitaciones',
    component: () => import('../views/landings/LandingInvitaciones.vue')
  },
  {
    path: '/menus-digitales',
    name: 'MenusDigitales',
    component: () => import('../views/landings/LandingMenus.vue')
  },
  {
    path: '/catalogos',
    name: 'Catalogos',
    component: () => import('../views/landings/LandingCatalogos.vue')
  },
  {
    path: '/salones-eventos',
    name: 'SalonesEventos',
    component: () => import('../views/landings/LandingReservaciones.vue')
  },

  // ===== Demo estrella por producto (fullscreen, noindex) =====
  {
    path: '/landing-pages/demo',
    name: 'LandingPagesDemo',
    component: () => import('../views/demos/LandingPageDemo.vue'),
    meta: {
      fullscreen: true,
      exitTo: '/landing-pages',
      exitLabelEs: 'Volver a landing pages',
      exitLabelEn: 'Back to landing pages',
      robots: 'noindex, nofollow',
      canonicalPath: '/landing-pages'
    }
  },
  {
    path: '/invitaciones/demo',
    name: 'InvitacionesDemo',
    component: () => import('../views/demos/InvitacionPremium.vue'),
    meta: {
      fullscreen: true,
      exitTo: '/invitaciones',
      exitLabelEs: 'Volver a invitaciones',
      exitLabelEn: 'Back to invitations',
      robots: 'noindex, nofollow',
      canonicalPath: '/invitaciones'
    }
  },
  {
    path: '/menus-digitales/demo',
    name: 'MenusDigitalesDemo',
    component: () => import('../views/demos/MenuPremiumDemo.vue'),
    meta: {
      fullscreen: true,
      exitTo: '/menus-digitales',
      exitLabelEs: 'Volver a menús digitales',
      exitLabelEn: 'Back to digital menus',
      robots: 'noindex, nofollow',
      canonicalPath: '/menus-digitales'
    }
  },
  {
    path: '/catalogos/demo',
    name: 'CatalogosDemo',
    component: () => import('../views/demos/CatalogoPremiumDemo.vue'),
    meta: {
      fullscreen: true,
      exitTo: '/catalogos',
      exitLabelEs: 'Volver a catálogos digitales',
      exitLabelEn: 'Back to digital catalogs',
      robots: 'noindex, nofollow',
      canonicalPath: '/catalogos'
    }
  },
  {
    path: '/salones-eventos/demo',
    name: 'SalonesEventosDemo',
    component: () => import('../views/demos/SalonEventosDemo.vue'),
    meta: {
      fullscreen: true,
      exitTo: '/salones-eventos',
      exitLabelEs: 'Volver a reservaciones',
      exitLabelEn: 'Back to venue websites',
      robots: 'noindex, nofollow',
      canonicalPath: '/salones-eventos'
    }
  },

  // ===== Redirects: páginas corporativas retiradas → secciones del Home =====
  { path: '/products', redirect: { path: '/', hash: '#productos' } },
  { path: '/pricing', redirect: { path: '/', hash: '#precios' } },
  { path: '/enfoque', redirect: { path: '/', hash: '#enfoque' } },
  { path: '/solutions', redirect: { path: '/', hash: '#enfoque' } },
  { path: '/case-studies', redirect: { path: '/', hash: '#casos' } },
  { path: '/contact', redirect: '/contacto' },

  // ===== Redirects: slugs renombrados =====
  { path: '/landings', redirect: '/landing-pages' },
  { path: '/landings/demo', redirect: '/landing-pages/demo' },
  { path: '/catalogos-nenis', redirect: '/catalogos' },

  // ===== Redirects: demos por tier → demo estrella =====
  { path: '/invitaciones/esencial', redirect: '/invitaciones/demo' },
  { path: '/invitaciones/pro', redirect: '/invitaciones/demo' },
  { path: '/invitaciones/premium', redirect: '/invitaciones/demo' },
  { path: '/menus-digitales/pro', redirect: '/menus-digitales/demo' },
  { path: '/menus-digitales/premium', redirect: '/menus-digitales/demo' },
  { path: '/catalogos-nenis/demo', redirect: '/catalogos/demo' },
  { path: '/catalogos-nenis/pro', redirect: '/catalogos/demo' },
  { path: '/catalogos-nenis/premium', redirect: '/catalogos/demo' },

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
