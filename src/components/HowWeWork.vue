<template>
  <section id="how" class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        :eyebrow="t('howWeWork.eyebrow')"
        :title="t('howWeWork.title')"
        :subtitle="t('howWeWork.subtitle')"
      />

      <!-- Steps -->
      <div class="relative">
        <!-- Animated connecting line (desktop) -->
        <div aria-hidden="true" class="hidden lg:block absolute top-[58px] left-[8%] right-[8%] h-px">
          <div class="absolute inset-0 dark:bg-white/8 bg-light-border"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-brand-500 via-cyan-glow to-violet-soft opacity-60"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <article
            v-for="(step, i) in steps"
            :key="step.num"
            data-animate
            :class="`delay-${(i + 1) * 100}`"
            class="relative group"
          >
            <!-- Step number bubble -->
            <div class="relative z-10 flex flex-col items-start">
              <div
                class="w-[120px] h-[120px] rounded-2xl flex items-center justify-center mb-6 dark:bg-base-900/70 bg-light-surface backdrop-blur-xl border dark:border-white/10 border-light-border transition-all duration-500 group-hover:dark:border-brand-500/40 group-hover:border-brand-500/50 group-hover:shadow-glass-hover"
                :class="step.iconBg"
              >
                <div class="text-center">
                  <div class="text-[10px] uppercase tracking-[0.22em] text-brand-400 font-bold mb-1">
                    {{ t("howWeWork.step") }}
                  </div>
                  <div class="font-display text-4xl font-bold dark:text-white text-light-text leading-none">
                    {{ step.num }}
                  </div>
                </div>
              </div>

              <!-- Icon chip -->
              <div class="mb-4">
                <span
                  class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border"
                  :class="step.tagColor"
                >
                  <LucideIcon :name="step.icon" class-name="w-3.5 h-3.5" />
                  {{ t(`howWeWork.steps.${step.key}.duration`) }}
                </span>
              </div>

              <h3 class="font-display text-xl font-bold dark:text-white text-light-text mb-3 leading-tight">
                {{ t(`howWeWork.steps.${step.key}.title`) }}
              </h3>
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed mb-4">
                {{ t(`howWeWork.steps.${step.key}.desc`) }}
              </p>

              <!-- Deliverable -->
              <div class="mt-auto pt-4 border-t dark:border-white/8 border-light-border w-full">
                <div class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-1.5">
                  {{ t("howWeWork.deliverable") }}
                </div>
                <div class="flex items-start gap-2">
                  <LucideIcon name="check-circle-2" class-name="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span class="text-sm font-semibold dark:text-white text-light-text">
                    {{ t(`howWeWork.steps.${step.key}.deliverable`) }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Bonus: post-launch -->
      <div data-animate class="mt-14 rounded-2xl border dark:border-brand-500/25 border-brand-500/30 dark:bg-gradient-to-r dark:from-brand-500/10 from-brand-500/5 to-transparent p-6 sm:p-8 backdrop-blur-xl">
        <div class="flex flex-col sm:flex-row sm:items-center gap-5">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-500 to-cyan-glow shrink-0">
            <LucideIcon name="repeat" class-name="w-5 h-5 text-white" />
          </div>
          <div class="flex-1">
            <h4 class="font-display text-base sm:text-lg font-bold dark:text-white text-light-text mb-1">
              {{ t("howWeWork.bonusTitle") }}
            </h4>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
              {{ t("howWeWork.bonusDesc") }}
            </p>
          </div>
          <router-link
            to="/#precios"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border text-sm font-semibold dark:text-white text-light-text hover:dark:border-brand-500/50 transition-all shrink-0"
          >
            {{ t("howWeWork.bonusCta") }}
            <span aria-hidden="true">→</span>
          </router-link>
        </div>
      </div>

      <!-- Respaldo contractual: documentos públicos en /legal -->
      <div
        data-animate
        class="mt-6 rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/40 bg-light-surface/70 p-6 sm:p-7 backdrop-blur-xl delay-100"
      >
        <div class="flex flex-col sm:flex-row sm:items-center gap-5">
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border shrink-0"
          >
            <LucideIcon name="shield-check" class-name="w-5 h-5 text-brand-400" />
          </div>
          <div class="flex-1">
            <h4
              class="font-display text-base sm:text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{ t("howWeWork.legalTitle") }}
            </h4>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed mb-3"
            >
              {{ t("howWeWork.legalDesc") }}
            </p>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="doc in legalDocs"
                :key="doc"
                class="text-[11px] font-medium px-3 py-1 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-text-secondary text-light-muted"
              >
                {{ t(`howWeWork.legalDocs.${doc}`) }}
              </li>
            </ul>
          </div>
          <router-link
            to="/legal/terminos"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border text-sm font-semibold dark:text-white text-light-text hover:dark:border-brand-500/50 hover:border-brand-500/50 transition-all shrink-0"
          >
            {{ t("howWeWork.legalCta") }}
            <span aria-hidden="true">→</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { t } = useI18n();

// Documentos publicados en /legal — ver src/data/legal.js
const legalDocs = ["contract", "sow", "nda", "ownership", "cancellation"];

// Textos en src/i18n/{es,en}.js bajo `howWeWork.steps.<key>`
const steps = [
  {
    key: "discovery",
    num: "01",
    icon: "compass",
    iconBg: "dark:hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]",
    tagColor: "text-brand-400",
  },
  {
    key: "design",
    num: "02",
    icon: "pen-tool",
    iconBg: "",
    tagColor: "dark:text-violet-300 text-violet-500",
  },
  {
    key: "development",
    num: "03",
    icon: "code-2",
    iconBg: "",
    tagColor: "dark:text-cyan-glow text-cyan-600",
  },
  {
    key: "launch",
    num: "04",
    icon: "rocket",
    iconBg: "",
    tagColor: "dark:text-emerald-400 text-emerald-500",
  },
];
</script>
