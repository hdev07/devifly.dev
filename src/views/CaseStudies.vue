<template>
  <main class="pt-24 pb-0">
    <section class="relative py-10 sm:py-14 overflow-hidden">
      <AmbientGlow variant="subtle" />

      <div class="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          :eyebrow="t('caseStudiesPage.badge')"
          :title="t('caseStudiesPage.title')"
          :subtitle="t('caseStudiesPage.subtitle')"
        />
      </div>
    </section>

    <section class="relative pb-20 sm:pb-28 overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          <article
            v-for="study in caseStudies"
            :key="study.key"
            class="group relative flex flex-col rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
          >
            <div class="h-1 w-full" :class="study.accent" />

            <div class="p-6 sm:p-7 flex flex-col gap-5 h-full">
              <div class="flex items-start justify-between gap-4">
                <div class="flex items-start gap-4 min-w-0">
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    :class="study.iconBg"
                  >
                    <LucideIcon
                      :name="study.icon"
                      :class-name="`w-5 h-5 ${study.iconColor}`"
                    />
                  </div>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                      <h2
                        class="font-display text-lg font-bold dark:text-white text-light-text leading-snug"
                      >
                        {{ study.title[locale] }}
                      </h2>
                      <a
                        v-if="study.link"
                        :href="study.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-brand-400 hover:text-brand-300 transition-colors"
                      >
                        <LucideIcon name="arrow-up-right" class-name="w-4 h-4" />
                      </a>
                    </div>
                    <p
                      class="text-xs uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mt-1"
                    >
                      {{ study.tag[locale] }}
                    </p>
                  </div>
                </div>

                <div class="text-right shrink-0">
                  <div class="font-display text-2xl font-bold text-gradient tabular-nums leading-none">
                    {{ study.highlight.value }}
                  </div>
                  <div
                    class="text-[10px] uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted mt-1 max-w-[7rem] ml-auto leading-tight"
                  >
                    {{ study.highlight.label[locale] }}
                  </div>
                </div>
              </div>

              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                {{ study.hook[locale] }}
              </p>

              <div
                class="flex items-start gap-3 p-4 rounded-xl dark:bg-red-500/5 bg-red-500/5 border dark:border-red-400/15 border-red-400/20"
              >
                <div
                  class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-red-500/15 bg-red-500/10"
                >
                  <LucideIcon
                    name="x"
                    class-name="w-3.5 h-3.5 dark:text-red-400 text-red-500"
                  />
                </div>
                <div class="flex-1">
                  <span
                    class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-red-400 text-red-500 block mb-1"
                  >
                    {{ t("caseStudiesPage.problem") }}
                  </span>
                  <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                    {{ study.problem[locale] }}
                  </p>
                </div>
              </div>

              <div
                class="flex items-start gap-3 p-4 rounded-xl dark:bg-brand-500/5 bg-brand-500/5 border dark:border-brand-500/20 border-brand-500/25"
              >
                <div
                  class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-brand-500/15 bg-brand-500/10"
                >
                  <LucideIcon name="zap" class-name="w-3.5 h-3.5 text-brand-400" />
                </div>
                <div class="flex-1">
                  <span
                    class="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 block mb-1"
                  >
                    {{ t("caseStudiesPage.solution") }}
                  </span>
                  <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                    {{ study.solution[locale] }}
                  </p>
                </div>
              </div>

              <div
                class="mt-auto flex items-start gap-3 p-4 rounded-xl dark:bg-emerald-500/5 bg-emerald-500/5 border dark:border-emerald-400/20 border-emerald-400/25"
              >
                <div
                  class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-emerald-500/15 bg-emerald-500/10"
                >
                  <LucideIcon
                    name="trending-up"
                    class-name="w-3.5 h-3.5 text-emerald-400"
                  />
                </div>
                <div class="flex-1">
                  <span
                    class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 block mb-1"
                  >
                    {{ t("caseStudiesPage.result") }}
                  </span>
                  <p class="text-sm font-semibold dark:text-white text-light-text leading-relaxed">
                    {{ study.result[locale] }}
                  </p>
                </div>
              </div>

              <div v-if="study.link" class="pt-1">
                <a
                  :href="study.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  {{ t("caseStudiesPage.visit") }}
                  <LucideIcon name="external-link" class-name="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6 text-center"
    >
      <h2 class="font-display text-3xl font-bold dark:text-white text-light-text mb-4">
        {{ t("caseStudiesPage.ctaTitle") }}
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto">
        {{ t("caseStudiesPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{ t("caseStudiesPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { caseStudies } from "../data/solutions.js";
import LucideIcon from "../components/LucideIcon.vue";
import SectionHeader from "../components/ui/SectionHeader.vue";
import AmbientGlow from "../components/ui/AmbientGlow.vue";

const { t, locale } = useI18n();
</script>
