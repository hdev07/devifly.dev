<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'dark:bg-base-950/80 bg-light-bg/80 backdrop-blur-xl border-b dark:border-base-700/50 border-light-border'
        : 'bg-transparent'
    "
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 group">
        <div class="relative">
          <div
            class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-glow flex items-center justify-center font-display font-bold text-white text-sm transition-transform group-hover:scale-110"
          >
            D
          </div>
          <div
            class="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-glow blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
          ></div>
        </div>
        <span
          class="font-display font-semibold text-lg dark:text-white text-light-text"
        >
          devifly<span class="text-brand-500">.dev</span>
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.href"
          class="text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
        >
          {{ t(`nav.${item.key}`) }}
        </router-link>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-3">
        <!-- Language Toggle -->
        <button
          @click="toggleLang"
          class="text-xs font-medium px-2.5 py-1.5 rounded-lg dark:bg-base-800 bg-light-card dark:text-text-secondary text-light-muted hover:text-brand-500 dark:hover:text-brand-400 transition-colors border dark:border-base-700/50 border-light-border"
        >
          {{ locale === "en" ? "ES" : "EN" }}
        </button>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme()"
          class="relative w-14 h-7 rounded-full transition-colors duration-500"
          :class="isDark() ? 'bg-base-700' : 'bg-light-border'"
          :aria-label="
            isDark() ? 'Switch to light mode' : 'Switch to dark mode'
          "
        >
          <div
            class="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg"
            :class="isDark() ? 'left-0.5 bg-base-900' : 'left-7.5 bg-white'"
          >
            <!-- Moon -->
            <svg
              v-if="isDark()"
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5 text-cyan-glow"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            <!-- Sun -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5 text-amber-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </button>

        <!-- Mobile menu button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-lg dark:text-text-secondary text-light-muted hover:text-brand-500"
        >
          <svg
            v-if="!mobileOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden dark:bg-base-950/95 bg-light-bg/95 backdrop-blur-xl border-b dark:border-base-700/50 border-light-border"
    >
      <div class="px-6 py-4 flex flex-col gap-3">
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.href"
          @click="mobileOpen = false"
          class="text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors py-2"
        >
          {{ t(`nav.${item.key}`) }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "../composables/useTheme.js";

const { t, locale } = useI18n();
const { toggleTheme, isDark } = useTheme();

const scrolled = ref(false);
const mobileOpen = ref(false);

const navItems = [
  { key: "products", href: "/products" },
  { key: "solutions", href: "/solutions" },
  { key: "pricing", href: "/pricing" },
  { key: "cases", href: "/case-studies" },
  { key: "contact", href: "/contact" },
];

const toggleLang = () => {
  locale.value = locale.value === "en" ? "es" : "en";
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
