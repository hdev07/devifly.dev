<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
      >
        <SectionHeader
          class="!mb-0"
          :eyebrow="t('cases.eyebrow')"
          :title="t('cases.title')"
          :subtitle="t('cases.subtitle')"
        />
        <router-link
          to="/contacto"
          class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text text-sm font-semibold hover:dark:border-brand-500/40 hover:border-brand-500/50 backdrop-blur-md whitespace-nowrap transition-all"
        >
          {{ t("cases.cta") }}
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

          <!-- Device mockup strip (P0 impact) -->
          <div
            v-if="mockups[study.key]"
            class="relative h-44 sm:h-48 overflow-hidden dark:bg-zinc-950/80 bg-zinc-100/80 border-b dark:border-white/5 border-light-border"
          >
            <div
              class="absolute inset-0 flex items-end justify-center gap-2 pt-6 px-4"
            >
              <DeviceFrame
                v-if="mockups[study.key][1]"
                size="sm"
                class="opacity-70 -mb-8 hidden xs:block sm:block scale-90 origin-bottom"
                tilted
                :tilt="-8"
                :src="mockups[study.key][1]"
                :alt="study.title[locale]"
              />
              <DeviceFrame
                size="sm"
                class="relative z-10 -mb-4"
                :src="mockups[study.key][0]"
                :alt="study.title[locale]"
              />
              <DeviceFrame
                v-if="mockups[study.key][2]"
                size="sm"
                class="opacity-70 -mb-8 hidden sm:block scale-90 origin-bottom"
                tilted
                :tilt="8"
                :src="mockups[study.key][2]"
                :alt="study.title[locale]"
              />
            </div>
            <div
              class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t dark:from-base-900/90 from-light-surface/90 to-transparent pointer-events-none"
            />
          </div>

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
                      :aria-label="t('cases.visit', { name: study.title[locale] })"
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
                  {{ t("common.problem") }}
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
                  {{ t("common.solution") }}
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
                  {{ t("common.result") }}
                </span>
                <p class="text-sm font-semibold dark:text-white text-light-text leading-relaxed">
                  {{ study.result[locale] }}
                </p>
              </div>
            </div>

            <router-link
              v-if="study.casePath"
              :to="study.casePath"
              class="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
            >
              {{ t("cases.readCase") }}
              <LucideIcon name="arrow-right" class-name="w-4 h-4" />
            </router-link>
          </div>
        </article>
      </div>

      <div data-animate class="text-center mt-10 lg:hidden">
        <router-link
          to="/contacto"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text text-sm font-semibold hover:dark:border-brand-500/40 transition-all"
        >
          {{ t("cases.cta") }}
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
import DeviceFrame from "./cases/DeviceFrame.vue";
import { caseStudies } from "../data/solutions.js";
import { musionCase } from "../data/cases/musion.js";
import { timbraCase } from "../data/cases/timbra.js";
import { confecdotarioCase } from "../data/cases/confecdotario.js";

const { t, locale } = useI18n();

const featuredCases = computed(() =>
  caseStudies.filter((cs) => cs.featured),
);

/** Screenshots keyed by caseStudy.key — expand as other cases get assets */
const mockups = {
  timbra: timbraCase.gallery.map((g) => g.src),
  musion: musionCase.gallery.map((g) => g.src),
  confecdotario: confecdotarioCase.gallery.map((g) => g.src),
};
</script>
