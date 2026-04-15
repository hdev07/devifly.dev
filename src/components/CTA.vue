<template>
  <section class="py-24 sm:py-32 relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 text-center">
      <div data-animate>
        <h2
          class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6"
        >
          {{ t("cta.title") }}
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted text-lg max-w-xl mx-auto mb-10"
        >
          {{ t("cta.subtitle") }}
        </p>
        <router-link
          to="/contact"
          class="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-cyan-glow text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
        >
          {{ t("cta.button") }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
