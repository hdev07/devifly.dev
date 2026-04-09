<template>
  <section
    id="solutions"
    class="py-24 px-6 dark:bg-base-800/20 bg-light-card/30"
  >
    <div class="max-w-7xl mx-auto">
      <div data-animate class="mb-14">
        <div class="flex items-center gap-3 mb-4">
          <span class="block w-8 h-px dark:bg-brand-500 bg-brand-600"></span>
          <span
            class="text-xs font-semibold tracking-[0.18em] uppercase text-brand-400"
            >{{ locale === "es" ? "Soluciones" : "Solutions" }}</span
          >
        </div>
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-2"
        >
          {{ t("solutions.title") }}
        </h2>
        <p class="text-lg dark:text-text-secondary text-light-muted max-w-xl">
          {{ t("solutions.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="sol in solutions"
          :key="sol.key"
          data-animate
          class="group relative p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border hover:border-brand-500/30 transition-all duration-300"
        >
          <div class="flex items-start gap-4 mb-6">
            <LucideIcon :name="sol.icon" class-name="w-8 h-8" />
            <div>
              <h3
                class="font-display text-xl font-bold dark:text-white text-light-text"
              >
                {{ locale === "es" ? sol.titleEs : sol.titleEn }}
              </h3>
            </div>
          </div>

          <!-- Problems -->
          <div class="mb-4">
            <span
              class="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2 block"
            >
              {{ t("solutions.problems") }}
            </span>
            <ul class="space-y-1">
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
          <div class="mb-4">
            <span
              class="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2 block"
            >
              {{ t("solutions.solution") }}
            </span>
            <p class="text-sm dark:text-text-secondary text-light-muted">
              {{ locale === "es" ? sol.solutionEs : sol.solutionEn }}
            </p>
          </div>

          <!-- Result -->
          <div
            class="pt-4 border-t dark:border-base-700/30 border-light-border"
          >
            <span
              class="text-xs font-semibold uppercase tracking-wider text-neon mb-2 block"
            >
              {{ t("solutions.result") }}
            </span>
            <p class="text-sm font-medium dark:text-white text-light-text">
              {{ locale === "es" ? sol.resultEs : sol.resultEn }}
            </p>
          </div>
        </div>
      </div>

      <div data-animate class="text-center mt-12">
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-base-800/60 bg-light-card border dark:border-base-700/50 border-light-border dark:text-text-primary text-light-text font-semibold text-sm hover:border-brand-500/50 transition-all"
        >
          Platicar sobre mi solución
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { solutions } from "../data/solutions.js";
import LucideIcon from "./LucideIcon.vue";

const { t, locale } = useI18n();
</script>
