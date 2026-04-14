import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../views/Solutions.vue')
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudies.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/landings',
    name: 'Landings',
    component: () => import('../views/landings/LandingNegocios.vue')
  },
  {
    path: '/landings/demo',
    name: 'LandingPageDemo',
    component: () => import('../views/demos/LandingPageDemo.vue'),
    meta: { fullscreen: true }
  },
  {
    path: '/invitaciones',
    name: 'Invitaciones',
    component: () => import('../views/landings/LandingInvitaciones.vue')
  },
  {
    path: '/invitaciones/esencial',
    name: 'DemoBasic',
    component: () => import('../views/demos/InvitacionBasic.vue'),
    meta: { fullscreen: true }
  },
  {
    path: '/invitaciones/pro',
    name: 'DemoPro',
    component: () => import('../views/demos/InvitacionPro.vue'),
    meta: { fullscreen: true }
  },
  {
    path: '/invitaciones/premium',
    name: 'DemoPremium',
    component: () => import('../views/demos/InvitacionPremium.vue'),
    meta: { fullscreen: true }
  },
  {
    path: '/menus-digitales',
    name: 'MenusDigitales',
    component: () => import('../views/landings/LandingMenus.vue')
  },
  {
    path: '/menus-digitales/demo',
    name: 'MenuDemo',
    component: () => import('../views/demos/MenuDemo.vue'),
    meta: { fullscreen: true }
  },
  {
    path: '/saas',
    name: 'SaaS',
    component: () => import('../views/SaaS.vue')
  },
  {
    path: '/catalogos-nenis',
    name: 'CatalogosNenis',
    component: () => import('../views/landings/LandingCatalogos.vue')
  },
  {
    path: '/catalogos-nenis/demo',
    name: 'CatalogoNenisDemo',
    component: () => import('../views/demos/CatalogoNenisDemo.vue'),
    meta: { fullscreen: true }
  },
  {
    path: '/salones-eventos',
    name: 'SalonesEventos',
    component: () => import('../views/landings/LandingReservaciones.vue')
  },
  {
    path: '/salones-eventos/demo',
    name: 'SalonEventosDemo',
    component: () => import('../views/demos/SalonEventosDemo.vue'),
    meta: { fullscreen: true }
  },
  {
    path: '/service/:key',
    name: 'ServiceDetail',
    component: () => import('../views/ServiceDetail.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
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
