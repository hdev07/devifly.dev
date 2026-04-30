<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'dark:bg-base-950/80 bg-light-bg/85 backdrop-blur-xl border-b dark:border-white/8 border-light-border'
        : 'bg-transparent'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 group shrink-0">
        <div class="relative">
          <div
            class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-cyan-glow flex items-center justify-center font-display font-bold text-white text-base transition-transform group-hover:scale-110 shadow-[0_4px_20px_rgba(59,130,246,0.4)]"
          >
            D
          </div>
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-glow blur-xl opacity-0 group-hover:opacity-60 transition-opacity"
          ></div>
        </div>
        <span class="font-display font-semibold text-lg dark:text-white text-light-text hidden sm:inline">
          devifly<span class="text-gradient">.dev</span>
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-7">
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.href"
          class="text-sm dark:text-text-secondary text-light-muted hover:text-brand-400 transition-colors relative"
          :class="$route.path === item.href ? 'dark:text-white text-light-text font-medium' : ''"
        >
          {{ t(`nav.${item.key}`) }}
        </router-link>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Persistent CTA: Agendar llamada -->
        <a
          :href="callLink"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs sm:text-sm font-semibold shadow-[0_6px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.5)] hover:brightness-110 transition-all whitespace-nowrap"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          {{ locale === "es" ? "Agendar llamada" : "Book a call" }}
        </a>

        <!-- Language Toggle -->
        <button
          @click="toggleLang"
          class="text-xs font-medium px-2.5 py-1.5 rounded-lg dark:bg-white/5 bg-light-card dark:text-text-secondary text-light-muted hover:text-brand-400 transition-colors border dark:border-white/10 border-light-border"
        >
          {{ locale === "en" ? "ES" : "EN" }}
        </button>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme()"
          class="relative w-12 h-6 rounded-full transition-colors duration-500 shrink-0"
          :class="isDark() ? 'bg-base-700' : 'bg-light-border'"
          :aria-label="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <div
            class="absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 shadow-md"
            :class="isDark() ? 'left-0.5 bg-base-900' : 'left-6.5 bg-white'"
          >
            <svg v-if="isDark()" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-cyan-glow" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
            </svg>
          </div>
        </button>

        <!-- Mobile menu button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="lg:hidden p-2 rounded-lg dark:text-text-secondary text-light-muted hover:text-brand-400"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        >
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="lg:hidden dark:bg-base-950/97 bg-light-bg/97 backdrop-blur-xl border-b dark:border-white/8 border-light-border"
    >
      <div class="px-6 py-5 flex flex-col gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.href"
          @click="mobileOpen = false"
          class="text-base font-medium dark:text-text-secondary text-light-muted hover:text-brand-400 transition-colors py-3 border-b dark:border-white/5 border-light-border last:border-0"
        >
          {{ t(`nav.${item.key}`) }}
        </router-link>
        <a
          :href="callLink"
          target="_blank"
          rel="noopener noreferrer"
          @click="mobileOpen = false"
          class="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-lg"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          {{ locale === "es" ? "Agendar llamada" : "Book a call" }}
        </a>
      </div>
    </div>
  </nav>

  <!-- Mobile sticky bottom CTA (only when not on contact / fullscreen) -->
  <div v-if="showStickyMobile" class="sticky-cta-mobile sm:hidden">
    <a
      :href="callLink"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-[0_8px_30px_rgba(59,130,246,0.5)]"
    >
      <span class="relative flex h-2 w-2">
        <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
      </span>
      {{ locale === "es" ? "Agendar llamada gratis" : "Book a free call" }}
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useTheme } from "../composables/useTheme.js";
import { useWhatsApp } from "../composables/useWhatsApp.js";

const { t, locale } = useI18n();
const { toggleTheme, isDark } = useTheme();
const { linkFor } = useWhatsApp();
const route = useRoute();

const scrolled = ref(false);
const mobileOpen = ref(false);

const navItems = [
  { key: "products", href: "/products" },
  { key: "solutions", href: "/solutions" },
  { key: "pricing", href: "/pricing" },
  { key: "cases", href: "/case-studies" },
  { key: "contact", href: "/contact" },
];

const callLink = computed(() => linkFor("call", locale.value));

const showStickyMobile = computed(() => {
  if (route.meta?.fullscreen) return false;
  if (route.path === "/contact") return false;
  return true;
});

const toggleLang = () => {
  locale.value = locale.value === "en" ? "es" : "en";
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
