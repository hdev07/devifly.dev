<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="target" class-name="w-4 h-4" />
        {{ t("solutionsPage.badge") }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{ t("solutionsPage.title") }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-3xl mx-auto"
      >
        {{ t("solutionsPage.subtitle") }}
      </p>
    </div>

    <!-- Solutions -->
    <div class="max-w-7xl mx-auto px-6 mb-24">
      <div class="space-y-8">
        <div
          v-for="sol in solutions"
          :key="sol.key"
          class="group p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
        >
          <div class="flex items-start gap-4 mb-6">
            <LucideIcon :name="sol.icon" class-name="w-9 h-9" />
            <div>
              <h2
                class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
              >
                {{ locale === "es" ? sol.titleEs : sol.titleEn }}
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Problems -->
            <div>
              <span
                class="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3 block"
              >
                {{ t("solutionsPage.painPoints") }}
              </span>
              <ul class="space-y-2">
                <li
                  v-for="p in locale === 'es' ? sol.problemsEs : sol.problemsEn"
                  :key="p"
                  class="text-sm dark:text-text-secondary text-light-muted flex items-start gap-2"
                >
                  <LucideIcon
                    name="x"
                    class-name="w-4 h-4 mt-0.5 text-red-400/70"
                  />
                  {{ p }}
                </li>
              </ul>
            </div>

            <!-- Solution -->
            <div>
              <span
                class="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-3 block"
              >
                {{ t("solutionsPage.whatWeBuild") }}
              </span>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                {{ locale === "es" ? sol.solutionEs : sol.solutionEn }}
              </p>
            </div>

            <!-- Result -->
            <div>
              <span
                class="text-xs font-semibold uppercase tracking-wider text-neon mb-3 block"
              >
                {{ t("solutionsPage.expectedResult") }}
              </span>
              <p class="text-sm font-medium dark:text-white text-light-text">
                {{ locale === "es" ? sol.resultEs : sol.resultEn }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6 text-center"
    >
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4"
      >
        {{ t("solutionsPage.ctaTitle") }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{ t("solutionsPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{ t("solutionsPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { solutions } from "../data/solutions.js";
import LucideIcon from "../components/LucideIcon.vue";

const { t, locale } = useI18n();
</script>
