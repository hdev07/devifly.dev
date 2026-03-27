<template>
  <section class="py-24 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <div data-animate class="relative">
        <!-- Glow -->
        <div class="absolute inset-0 -z-10">
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]"
          ></div>
        </div>

        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
        >
          {{ t("ctaFinal.title") }}
        </h2>
        <p
          class="text-lg dark:text-text-secondary text-light-muted mb-10 max-w-xl mx-auto"
        >
          {{ t("ctaFinal.subtitle") }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            {{ t("ctaFinal.cta") }}
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </router-link>
          <router-link
            to="/products"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl dark:bg-base-800/60 bg-light-card border dark:border-base-700/50 border-light-border dark:text-text-primary text-light-text font-semibold text-sm transition-all duration-300 hover:scale-105 hover:border-brand-500/50 backdrop-blur-sm"
          >
            {{ t("ctaFinal.ctaSecondary") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
const { t } = useI18n();
</script>
