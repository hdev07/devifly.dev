<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'dark:bg-base-950/90 bg-light-bg/90 backdrop-blur-xl dark:border-base-700/50 border-light-border shadow-sm'
        : 'bg-transparent'
    "
    @mouseleave="closeDropdown"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 group flex-shrink-0">
        <div class="relative">
          <div
            class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-glow flex items-center justify-center font-display font-bold text-white text-sm transition-transform group-hover:scale-110"
          >D</div>
          <div
            class="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-glow blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
          ></div>
        </div>
        <span class="font-display font-semibold text-lg dark:text-white text-light-text">
          devifly<span class="text-brand-500">.dev</span>
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-0.5 lg:gap-1">

        <!-- Servicios (mega-menu trigger) -->
        <div class="relative" @mouseenter="openDropdown('products')">
          <button
            class="flex items-center gap-1 px-2.5 lg:px-3 py-2 rounded-lg text-sm transition-all duration-200"
            :class="isProductsActive
              ? 'text-brand-500 dark:text-brand-400'
              : 'dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:text-brand-400 hover:bg-white/5'"
          >
            {{ t('nav.products') }}
            <svg
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="activeDropdown === 'products' ? 'rotate-180' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <!-- active underline -->
            <span
              v-if="isProductsActive"
              class="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-500"
            ></span>
          </button>
        </div>

        <!-- Soluciones -->
        <router-link
          to="/enfoque"
          class="relative px-2.5 lg:px-3 py-2 rounded-lg text-sm transition-all duration-200"
          :class="isActive('/enfoque') || isActive('/solutions')
            ? 'text-brand-500 dark:text-brand-400'
            : 'dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:text-brand-400 hover:bg-white/5'"
        >
          {{ t('nav.solutions') }}
          <span
            v-if="isActive('/enfoque') || isActive('/solutions')"
            class="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-500"
          ></span>
        </router-link>

        <!-- Precios -->
        <router-link
          to="/pricing"
          class="relative px-2.5 lg:px-3 py-2 rounded-lg text-sm transition-all duration-200"
          :class="isActive('/pricing')
            ? 'text-brand-500 dark:text-brand-400'
            : 'dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:text-brand-400 hover:bg-white/5'"
        >
          {{ t('nav.pricing') }}
          <span
            v-if="isActive('/pricing')"
            class="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-500"
          ></span>
        </router-link>

        <!-- Casos de éxito -->
        <router-link
          to="/case-studies"
          class="relative px-2.5 lg:px-3 py-2 rounded-lg text-sm transition-all duration-200"
          :class="isActive('/case-studies')
            ? 'text-brand-500 dark:text-brand-400'
            : 'dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:text-brand-400 hover:bg-white/5'"
        >
          {{ t('nav.cases') }}
          <span
            v-if="isActive('/case-studies')"
            class="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-500"
          ></span>
        </router-link>

      </div>

      <!-- Controls + CTA -->
      <div class="hidden md:flex items-center gap-2 lg:gap-3">
        <!-- Language Toggle -->
        <button
          @click="toggleLang"
          class="text-xs font-medium px-2.5 py-1.5 rounded-lg dark:bg-base-800 bg-light-card dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:text-brand-400 transition-colors border dark:border-base-700/50 border-light-border"
        >
          {{ locale === 'en' ? 'ES' : 'EN' }}
        </button>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme()"
          class="relative w-14 h-7 rounded-full transition-colors duration-500"
          :class="isDark() ? 'bg-base-700' : 'bg-light-border'"
          :aria-label="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <div
            class="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg"
            :class="isDark() ? 'left-0.5 bg-base-900' : 'left-7.5 bg-white'"
          >
            <svg v-if="isDark()" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-cyan-glow" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
          </div>
        </button>

        <!-- CTA -->
        <router-link
          to="/contact"
          class="group relative flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
          style="background: linear-gradient(135deg, #3b82f6, #22d3ee);"
        >
          <span class="relative z-10">{{ locale === 'en' ? 'Book a call' : 'Agendar llamada' }}</span>
          <svg class="relative z-10 w-3 h-3 lg:w-3.5 lg:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
        </router-link>
      </div>

      <!-- Mobile: hamburger -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden p-2 rounded-lg dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
        :aria-label="mobileOpen ? 'Cerrar menú' : 'Abrir menú'"
      >
        <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- ─── MEGA MENU ─── -->
    <Transition name="mega">
      <div
        v-if="activeDropdown === 'products'"
        class="absolute top-full left-0 right-0 z-40 hidden md:block"
        @mouseenter="openDropdown('products')"
      >
        <div
          class="max-w-7xl mx-auto px-6 pb-6 pt-4 dark:bg-base-950/95 bg-light-bg/95 backdrop-blur-xl border-b dark:border-base-700/40 border-light-border shadow-2xl"
        >
          <div class="grid grid-cols-5 gap-3">
            <router-link
              v-for="product in megaProducts"
              :key="product.href"
              :to="product.href"
              @click="closeDropdown"
              class="group relative flex flex-col gap-2 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              :class="isActive(product.href)
                ? 'dark:border-brand-500/40 border-brand-500/30 dark:bg-brand-500/5 bg-brand-500/5'
                : 'dark:border-base-700/50 border-light-border dark:hover:border-brand-500/30 hover:border-brand-500/20 dark:hover:bg-base-800/50 hover:bg-light-card'"
            >
              <!-- icon -->
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-transform duration-200 group-hover:scale-110"
                :style="`background: ${product.color}18; color: ${product.color}`"
              >
                <span v-html="product.icon"></span>
              </div>
              <!-- text -->
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-sm font-semibold dark:text-text-primary text-light-text leading-tight">
                    {{ locale === 'en' ? product.titleEn : product.titleEs }}
                  </span>
                  <span
                    v-if="product.badge"
                    class="text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider"
                    :style="`background: ${product.color}20; color: ${product.color}`"
                  >{{ product.badge }}</span>
                </div>
                <p class="text-xs dark:text-text-secondary text-light-muted mt-0.5 leading-snug">
                  {{ locale === 'en' ? product.descEn : product.descEs }}
                </p>
              </div>
              <!-- arrow -->
              <svg
                class="absolute top-4 right-4 w-3.5 h-3.5 dark:text-base-600 text-light-border opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </router-link>
          </div>

          <!-- bottom strip -->
          <div class="mt-4 pt-4 border-t dark:border-base-700/40 border-light-border flex items-center justify-between">
            <p class="text-xs dark:text-text-secondary text-light-muted">
              {{ locale === 'en' ? '✦ All services include hosting, SSL and ongoing support' : '✦ Todos los servicios incluyen hosting, SSL y soporte continuo' }}
            </p>
            <router-link
              to="/products"
              @click="closeDropdown"
              class="flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-brand-400 transition-colors"
            >
              {{ locale === 'en' ? 'See all services' : 'Ver todos los servicios' }}
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ─── MOBILE MENU ─── -->
    <Transition name="mobile-slide">
      <div
        v-if="mobileOpen"
        class="md:hidden dark:bg-base-950/98 bg-light-bg/98 backdrop-blur-xl border-b dark:border-base-700/50 border-light-border"
      >
        <div class="px-5 py-5 flex flex-col gap-1">

          <!-- Products group -->
          <div>
            <button
              @click="mobileProductsOpen = !mobileProductsOpen"
              class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
            >
              <span>{{ t('nav.products') }}</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="mobileProductsOpen ? 'rotate-180' : ''"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition name="collapse">
              <div v-if="mobileProductsOpen" class="mt-1 ml-3 flex flex-col gap-1 pl-3 border-l dark:border-base-700/50 border-light-border">
                <router-link
                  v-for="product in megaProducts"
                  :key="product.href"
                  :to="product.href"
                  @click="closeMobile"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 dark:hover:bg-base-800 hover:bg-light-card"
                  :class="isActive(product.href) ? 'text-brand-500' : 'dark:text-text-secondary text-light-muted'"
                >
                  <span
                    class="w-7 h-7 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    :style="`background: ${product.color}18; color: ${product.color}`"
                    v-html="product.icon"
                  ></span>
                  <div>
                    <div class="font-medium leading-tight dark:text-text-primary text-light-text text-[13px]">
                      {{ locale === 'en' ? product.titleEn : product.titleEs }}
                    </div>
                    <div class="text-[11px] dark:text-text-secondary text-light-muted mt-0.5">
                      {{ locale === 'en' ? product.descEn : product.descEs }}
                    </div>
                  </div>
                </router-link>
              </div>
            </Transition>
          </div>

          <!-- Simple links -->
          <router-link
            v-for="item in simpleNavItems"
            :key="item.key"
            :to="item.href"
            @click="closeMobile"
            class="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            :class="isActive(item.href)
              ? 'text-brand-500 dark:bg-brand-500/8 bg-brand-500/5'
              : 'dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:bg-base-800 hover:bg-light-card'"
          >
            {{ t(`nav.${item.key}`) }}
          </router-link>

          <!-- Mobile CTA -->
          <div class="mt-3 pt-4 border-t dark:border-base-700/40 border-light-border flex items-center gap-3">
            <router-link
              to="/contact"
              @click="closeMobile"
              class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
              style="background: linear-gradient(135deg, #3b82f6, #22d3ee);"
            >
              {{ locale === 'en' ? 'Book a call' : 'Agendar llamada' }}
            </router-link>
            <button
              @click="toggleLang"
              class="text-xs font-medium px-3 py-2.5 rounded-xl dark:bg-base-800 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-700/50 border-light-border"
            >
              {{ locale === 'en' ? 'ES' : 'EN' }}
            </button>
            <button
              @click="toggleTheme()"
              class="p-2.5 rounded-xl dark:bg-base-800 bg-light-card border dark:border-base-700/50 border-light-border"
            >
              <svg v-if="isDark()" class="w-4 h-4 text-cyan-glow" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg v-else class="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </Transition>

  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme.js'

const { t, locale } = useI18n()
const { toggleTheme, isDark } = useTheme()
const route = useRoute()

const scrolled = ref(false)
const mobileOpen = ref(false)
const mobileProductsOpen = ref(false)
const activeDropdown = ref(null)
let closeTimer = null

// Nav helpers
const isActive = (path) => route.path === path || route.path.startsWith(path + '/')

const isProductsActive = computed(() =>
  ['/products', '/landings', '/invitaciones', '/menus-digitales', '/catalogos-nenis', '/salones-eventos'].some(p => route.path.startsWith(p))
)

// Mega menu products
const megaProducts = [
  {
    href: '/landings',
    titleEs: 'Landing Pages',
    titleEn: 'Landing Pages',
    descEs: 'Páginas de alta conversión para negocios',
    descEn: 'High-conversion pages for businesses',
    icon: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>`,
    color: '#3b82f6',
    badge: null,
  },
  {
    href: '/invitaciones',
    titleEs: 'Invitaciones',
    titleEn: 'Invitations',
    descEs: 'Invitaciones digitales para eventos',
    descEn: 'Digital invitations for any event',
    icon: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2"/><rect x="1" y="8" width="22" height="13" rx="2"/><path d="M1 13l11-4 11 4"/></svg>`,
    color: '#a78bfa',
    badge: null,
  },
  {
    href: '/menus-digitales',
    titleEs: 'Menús Digitales',
    titleEn: 'Digital Menus',
    descEs: 'Menús QR para restaurantes y cafés',
    descEn: 'QR menus for restaurants & cafés',
    icon: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h12"/><circle cx="19" cy="18" r="2"/></svg>`,
    color: '#f59e0b',
    badge: null,
  },
  {
    href: '/catalogos-nenis',
    titleEs: 'Catálogos',
    titleEn: 'Catalogs',
    descEs: 'Catálogos digitales para vendedoras',
    descEn: 'Digital catalogs for sellers',
    icon: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    color: '#10b981',
    badge: 'nuevo',
  },
  {
    href: '/salones-eventos',
    titleEs: 'Salones & Eventos',
    titleEn: 'Venues & Events',
    descEs: 'Sitios web con sistema de reservas',
    descEn: 'Websites with booking system',
    icon: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    color: '#f43f5e',
    badge: null,
  },
]

// Simple nav links (no dropdown)
const simpleNavItems = [
  { key: 'solutions', href: '/enfoque' },
  { key: 'pricing', href: '/pricing' },
  { key: 'cases', href: '/case-studies' },
]

// Dropdown logic
const openDropdown = (name) => {
  if (closeTimer) clearTimeout(closeTimer)
  activeDropdown.value = name
}

const closeDropdown = () => {
  closeTimer = setTimeout(() => {
    activeDropdown.value = null
  }, 120)
}

const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}

const closeMobile = () => {
  mobileOpen.value = false
  mobileProductsOpen.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (closeTimer) clearTimeout(closeTimer)
})
</script>

<style scoped>
/* Mega menu transition */
.mega-enter-active,
.mega-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.mega-enter-from,
.mega-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Mobile menu transition */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Collapse for mobile products sub-list */
.collapse-enter-active,
.collapse-leave-active {
  transition: opacity 0.2s ease, max-height 0.25s ease;
  max-height: 500px;
  overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>