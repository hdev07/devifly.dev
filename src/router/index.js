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
    component: () => import('../views/Landings.vue')
  },
  {
    path: '/invitaciones',
    name: 'Invitaciones',
    component: () => import('../views/Invitaciones.vue')
  },
  {
    path: '/invitaciones/basic',
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
    path: '/saas',
    name: 'SaaS',
    component: () => import('../views/SaaS.vue')
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
