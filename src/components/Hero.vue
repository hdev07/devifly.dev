<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden pt-16"
  >
    <!-- Background glows -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-32 -left-20 w-[900px] h-[900px] bg-brand-500/10 rounded-full blur-[180px] animate-glow-pulse"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-soft/8 rounded-full blur-[130px] animate-glow-pulse delay-500"
      ></div>
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 dark:opacity-[0.022] opacity-[0.035] pointer-events-none"
      style="
        background-image: radial-gradient(
          circle,
          currentColor 1px,
          transparent 1px
        );
        background-size: 44px 44px;
      "
    ></div>

    <div class="relative max-w-7xl mx-auto px-6 w-full py-24">
      <div class="max-w-4xl">
        <!-- Eyebrow label -->
        <p
          data-animate
          class="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-10"
        >
          {{ t("hero.badge") }}
        </p>

        <!-- Title -->
        <h1
          data-animate
          class="font-display font-bold leading-[1.03] tracking-tight dark:text-white text-light-text delay-100"
          style="font-size: clamp(2.6rem, 7.5vw, 5.25rem)"
        >
          {{ t("hero.titlePre") }}<br />
          <span
            class="bg-gradient-to-r from-brand-500 via-cyan-glow to-violet-soft bg-clip-text text-transparent"
          >
            {{ t("hero.titleHighlight") }}
          </span>
        </h1>

        <!-- Subtitle + stats -->
        <div
          data-animate
          class="mt-10 flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-14 delay-200"
        >
          <p
            class="text-base sm:text-lg dark:text-text-secondary text-light-muted leading-relaxed max-w-sm"
          >
            {{ t("hero.subtitle") }}
          </p>
          <div class="flex items-start gap-8 shrink-0">
            <div>
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >5+</span
              >
              <p class="text-xs dark:text-text-secondary text-light-muted mt-1">
                {{ locale === "es" ? "años de" : "years of" }}<br />{{
                  locale === "es" ? "experiencia" : "experience"
                }}
              </p>
            </div>
            <div class="w-px h-12 mt-1 dark:bg-base-700 bg-light-border"></div>
            <div>
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >20+</span
              >
              <p class="text-xs dark:text-text-secondary text-light-muted mt-1">
                {{ locale === "es" ? "proyectos" : "projects" }}<br />{{
                  locale === "es" ? "entregados" : "delivered"
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- CTAs -->
        <div
          data-animate
          class="mt-12 flex flex-row items-center gap-7 delay-300"
        >
          <router-link
            to="/solutions"
            class="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_40px_rgba(59,130,246,0.35)] hover:brightness-110"
          >
            {{ t("hero.cta") }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 transition-transform group-hover:translate-x-1"
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
          <router-link
            to="/contact"
            class="group inline-flex items-center gap-1.5 text-sm font-medium dark:text-text-secondary text-light-muted hover:dark:text-white hover:text-light-text transition-colors"
          >
            {{ t("hero.ctaSecondary") }}
            <span
              class="group-hover:translate-x-0.5 transition-transform inline-block"
              >→</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>
