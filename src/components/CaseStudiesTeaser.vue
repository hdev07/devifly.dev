<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
      >
        <SectionHeader
          class="!mb-0"
          :eyebrow="locale === 'es' ? 'Resultados' : 'Results'"
          :title="
            locale === 'es'
              ? 'Productos en producción, no en Figma'
              : 'Products in production, not in Figma'
          "
          :subtitle="
            locale === 'es'
              ? 'Tres proyectos reales con usuarios activos. Así se ve cuando el producto correcto resuelve un problema de negocio.'
              : 'Three real projects with active users. This is what happens when the right product solves a business problem.'
          "
        />
        <router-link
          to="/contacto"
          class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text text-sm font-semibold hover:dark:border-brand-500/40 hover:border-brand-500/50 backdrop-blur-md whitespace-nowrap transition-all"
        >
          {{ locale === "es" ? "Quiero un resultado así" : "I want results like these" }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="(study, i) in featuredCases"
          :key="study.key"
          data-animate
          :class="`delay-${(i + 1) * 100}`"
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
                    <h3
                      class="font-display text-lg font-bold dark:text-white text-light-text leading-snug"
                    >
                      {{ study.title[locale] }}
                    </h3>
                    <a
                      v-if="study.link"
                      :href="study.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-brand-400 hover:text-brand-300 transition-colors"
                      :aria-label="
                        locale === 'es'
                          ? `Visitar ${study.title[locale]}`
                          : `Visit ${study.title[locale]}`
                      "
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
                  {{ locale === "es" ? "Problema" : "Problem" }}
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
                  {{ locale === "es" ? "Solución" : "Solution" }}
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
                  {{ locale === "es" ? "Resultado" : "Result" }}
                </span>
                <p class="text-sm font-semibold dark:text-white text-light-text leading-relaxed">
                  {{ study.result[locale] }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div data-animate class="text-center mt-10 lg:hidden">
        <router-link
          to="/contacto"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text text-sm font-semibold hover:dark:border-brand-500/40 transition-all"
        >
          {{ locale === "es" ? "Quiero un resultado así" : "I want results like these" }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";
import { caseStudies } from "../data/solutions.js";

const { locale } = useI18n();

const featuredCases = computed(() =>
  caseStudies.filter((cs) => cs.featured),
);
</script>
