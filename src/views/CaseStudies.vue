<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="folder-kanban" class-name="w-4 h-4" />
        {{ t("caseStudiesPage.badge") }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{ t("caseStudiesPage.title") }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{ t("caseStudiesPage.subtitle") }}
      </p>
    </div>

    <!-- Case Studies -->
    <div class="max-w-5xl mx-auto px-6 mb-24">
      <div class="space-y-12">
        <div
          v-for="cs in caseStudies"
          :key="cs.key"
          class="relative rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <!-- Gradient top bar -->
          <div class="h-1 bg-gradient-to-r" :class="cs.gradient"></div>

          <div class="p-8">
            <h2
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-6"
            >
              {{ locale === "es" ? cs.titleEs : cs.titleEn }}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Problem -->
              <div>
                <span
                  class="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3 block"
                >
                  {{ t("caseStudiesPage.problem") }}
                </span>
                <p class="text-sm dark:text-text-secondary text-light-muted">
                  {{ locale === "es" ? cs.problemEs : cs.problemEn }}
                </p>
              </div>

              <!-- Solution -->
              <div>
                <span
                  class="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-3 block"
                >
                  {{ t("caseStudiesPage.solution") }}
                </span>
                <p class="text-sm dark:text-text-secondary text-light-muted">
                  {{ locale === "es" ? cs.solutionEs : cs.solutionEn }}
                </p>
              </div>

              <!-- Result -->
              <div>
                <span
                  class="text-xs font-semibold uppercase tracking-wider text-neon mb-3 block"
                >
                  {{ t("caseStudiesPage.result") }}
                </span>
                <p class="text-sm font-medium dark:text-white text-light-text">
                  {{ locale === "es" ? cs.resultEs : cs.resultEn }}
                </p>
              </div>
            </div>

            <!-- Tags & link -->
            <div class="mt-6 flex items-center justify-between flex-wrap gap-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in cs.tags"
                  :key="tag"
                  class="text-xs px-2.5 py-1 rounded-full dark:bg-base-700/50 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-600/50 border-light-border"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                v-if="cs.link"
                :href="cs.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-semibold text-brand-500 hover:text-brand-400 transition-colors inline-flex items-center gap-1"
              >
                {{ t("caseStudiesPage.visit") }}
                <LucideIcon name="external-link" class-name="w-4 h-4" />
              </a>
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
        {{ t("caseStudiesPage.ctaTitle") }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{ t("caseStudiesPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{ t("caseStudiesPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { caseStudies } from "../data/solutions.js";
import LucideIcon from "../components/LucideIcon.vue";

const { t, locale } = useI18n();
</script>
