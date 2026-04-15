<template>
  <section class="py-28 sm:py-36 relative overflow-hidden">
    <!-- Glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[130px]"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div
        data-animate
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10"
      >
        <!-- Big statement -->
        <div class="flex-1">
          <h2
            class="font-display font-bold dark:text-white text-light-text leading-[1.05] tracking-tight"
            style="font-size: clamp(2.2rem, 5vw, 4rem)"
          >
            {{ t("ctaFinal.title") }}
          </h2>
          <p
            class="mt-5 text-lg dark:text-text-secondary text-light-muted max-w-md leading-relaxed"
          >
            {{ t("ctaFinal.subtitle") }}
          </p>
        </div>

        <!-- Action column -->
        <div class="flex flex-col gap-4 shrink-0 sm:items-end">
          <router-link
            to="/contact"
            class="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_40px_rgba(59,130,246,0.35)] hover:brightness-110 whitespace-nowrap"
          >
            {{ t("ctaFinal.cta") }}
            <LucideIcon
              name="arrow-right"
              class-name="w-4 h-4 group-hover:translate-x-1 transition-transform"
            />
          </router-link>
          <router-link
            to="/products"
            class="group inline-flex items-center justify-center gap-1.5 text-sm font-medium dark:text-text-secondary text-light-muted hover:dark:text-white hover:text-light-text transition-colors"
          >
            {{ t("ctaFinal.ctaSecondary") }}
            <span
              class="group-hover:translate-x-0.5 transition-transform inline-block"
              >→</span
            >
          </router-link>
        </div>
      </div>

      <!-- Divider line at bottom -->
      <div class="mt-16 h-px dark:bg-base-800 bg-light-border"></div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
const { t } = useI18n();
</script>
