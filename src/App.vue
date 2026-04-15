<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useScrollAnimation } from "./composables/useScrollAnimation.js";
import { applyRouteSeo } from "./seo/routeSeo.js";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import SplashScreen from "./components/SplashScreen.vue";

useScrollAnimation();

const route = useRoute();
const { locale } = useI18n();
const isFullscreen = computed(() => route.meta?.fullscreen === true);

const shouldSkipSplash = (() => {
  if (typeof window === "undefined") {
    return true;
  }

  const botLikeAgent = /bot|crawler|spider|crawling/i.test(
    window.navigator.userAgent,
  );

  if (botLikeAgent) {
    return true;
  }

  try {
    return window.sessionStorage.getItem("devifly:splashSeen") === "1";
  } catch {
    return false;
  }
})();

const splashDone = ref(shouldSkipSplash);
const fullscreenExitTarget = computed(() => route.meta?.exitTo ?? "/");
const fullscreenExitLabel = computed(() => {
  if (locale.value === "en") {
    return route.meta?.exitLabelEn ?? "Back to page";
  }

  return route.meta?.exitLabelEs ?? "Volver a la página";
});

const handlePlaceholderClick = (event) => {
  const placeholderLink = event.target.closest('a[href="#"]');

  if (placeholderLink) {
    event.preventDefault();
  }
};

watch(
  () => [route.fullPath, locale.value],
  () => {
    applyRouteSeo(route, locale.value);
  },
  { immediate: true },
);

onMounted(() => {
  document.addEventListener("click", handlePlaceholderClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handlePlaceholderClick);
});

const handleSplashDone = () => {
  splashDone.value = true;

  try {
    window.sessionStorage.setItem("devifly:splashSeen", "1");
  } catch {
    // Ignore storage failures on private contexts.
  }
};
</script>

<template>
  <SplashScreen v-if="!splashDone" @done="handleSplashDone" />
  <template v-if="splashDone">
    <Navbar v-if="!isFullscreen" />
    <router-link
      v-else
      :to="fullscreenExitTarget"
      class="fixed top-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl transition hover:border-brand-500/50 hover:text-brand-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {{ fullscreenExitLabel }}
    </router-link>
    <router-view />
    <Footer v-if="!isFullscreen" />
  </template>
</template>
