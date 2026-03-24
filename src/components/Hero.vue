<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
  >
    <!-- Background glow effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[128px] animate-glow-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-glow/10 rounded-full blur-[100px] animate-glow-pulse delay-500"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-violet-soft/10 rounded-full blur-[80px] animate-glow-pulse delay-300"
      ></div>
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 dark:opacity-[0.03] opacity-[0.04] pointer-events-none"
      style="
        background-image: radial-gradient(
          circle,
          currentColor 1px,
          transparent 1px
        );
        background-size: 40px 40px;
      "
    ></div>

    <div class="relative max-w-7xl mx-auto px-6 text-center">
      <!-- Badge -->
      <div
        data-animate
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-8 backdrop-blur-sm"
      >
        <span class="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
        <span class="text-sm dark:text-text-secondary text-light-muted"
          >Available for projects</span
        >
      </div>

      <!-- Title -->
      <h1
        data-animate
        class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white text-light-text leading-[1.1] delay-100"
      >
        {{ t("hero.title").split("scale")[0] }}
        <span
          class="bg-gradient-to-r from-brand-500 via-cyan-glow to-violet-soft bg-clip-text text-transparent"
        >
          scale.
        </span>
      </h1>

      <!-- Subtitle -->
      <p
        data-animate
        class="mt-6 text-lg sm:text-xl dark:text-text-secondary text-light-muted max-w-2xl mx-auto leading-relaxed delay-200"
      >
        {{ t("hero.subtitle") }}
      </p>

      <!-- CTAs -->
      <div
        data-animate
        class="mt-10 flex flex-col sm:flex-row gap-4 justify-center delay-300"
      >
        <a
          href="#contact"
          class="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
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
        </a>
        <a
          href="#projects"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl dark:bg-base-800/60 bg-light-card border dark:border-base-700/50 border-light-border dark:text-text-primary text-light-text font-semibold text-sm transition-all duration-300 hover:scale-105 dark:hover:border-brand-500/50 hover:border-brand-500/50 backdrop-blur-sm"
        >
          {{ t("hero.ctaSecondary") }}
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div
          class="w-6 h-10 rounded-full border-2 dark:border-base-600 border-light-border flex justify-center pt-2"
        >
          <div class="w-1 h-2.5 rounded-full bg-brand-500 animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
