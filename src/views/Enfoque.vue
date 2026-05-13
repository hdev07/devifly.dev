<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <section class="relative py-10 sm:py-14 overflow-hidden">
      <AmbientGlow variant="subtle" />

      <div class="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          :eyebrow="t('approachPage.badge')"
          :title="t('approachPage.title')"
          :subtitle="t('approachPage.subtitle')"
        />
      </div>
    </section>

    <!-- Pillars -->
    <section class="relative pb-20 sm:pb-28 overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          :eyebrow="t('approachPage.pillars.eyebrow')"
          :title="t('approachPage.pillars.title')"
          :subtitle="t('approachPage.pillars.subtitle')"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <article
            v-for="pillar in approachPillars"
            :key="pillar.key"
            class="group rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              :class="pillar.iconBg"
            >
              <LucideIcon :name="pillar.icon" :class-name="`w-5 h-5 ${pillar.iconColor}`" />
            </div>
            <h3 class="font-display text-lg font-bold dark:text-white text-light-text mb-3 leading-snug">
              {{ pillar.title[locale] }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
              {{ pillar.desc[locale] }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Business profiles -->
    <section class="relative py-20 sm:py-28 overflow-hidden dark:bg-base-800/20 bg-light-card/30 border-y dark:border-white/5 border-light-border">
      <AmbientGlow variant="subtle" />

      <div class="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          :eyebrow="t('approachPage.profiles.eyebrow')"
          :title="t('approachPage.profiles.title')"
          :subtitle="t('approachPage.profiles.subtitle')"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          <article
            v-for="profile in businessProfiles"
            :key="profile.key"
            class="group relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover flex flex-col"
          >
            <div class="h-1 w-full" :class="profile.accent"></div>

            <div class="p-6 sm:p-7 flex flex-col flex-1 gap-5">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  :class="profile.iconBg"
                >
                  <LucideIcon :name="profile.icon" :class-name="`w-5 h-5 ${profile.iconColor}`" />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-display text-lg font-bold dark:text-white text-light-text leading-snug">
                    {{ profile.segment[locale] }}
                  </h3>
                  <span class="inline-flex items-center gap-1.5 mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-400">
                    <LucideIcon name="target" class-name="w-3.5 h-3.5" />
                    {{ t('approachPage.profiles.priority') }}: {{ profile.priority[locale] }}
                  </span>
                </div>
              </div>

              <div class="space-y-4 flex-1">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted block mb-2">
                    {{ t('approachPage.profiles.audience') }}
                  </span>
                  <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                    {{ profile.audience[locale] }}
                  </p>
                </div>

                <div class="p-4 rounded-xl dark:bg-brand-500/5 bg-brand-500/5 border dark:border-brand-500/20 border-brand-500/25">
                  <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 block mb-2">
                    {{ t('approachPage.profiles.recommendation') }}
                  </span>
                  <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                    {{ profile.recommendation[locale] }}
                  </p>
                </div>
              </div>

              <router-link
                :to="profile.link"
                class="inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-light-card border dark:border-white/8 border-light-border dark:text-white text-light-text text-xs font-semibold transition-all hover:dark:border-brand-500/40 hover:border-brand-500/50 group/cta mt-auto"
              >
                <span>{{ profile.cta[locale] }}</span>
                <LucideIcon name="arrow-right" class-name="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Process bridge -->
    <section class="relative py-20 sm:py-28 overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          :eyebrow="t('approachPage.process.eyebrow')"
          :title="t('approachPage.process.title')"
          :subtitle="t('approachPage.process.subtitle')"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          <article
            v-for="step in approachSteps"
            :key="step.num"
            class="relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl p-6"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="font-display text-2xl font-bold text-brand-400 leading-none">{{ step.num }}</span>
              <div class="w-9 h-9 rounded-lg dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border flex items-center justify-center">
                <LucideIcon :name="step.icon" class-name="w-4 h-4 text-brand-400" />
              </div>
            </div>
            <h3 class="font-display text-base font-bold dark:text-white text-light-text mb-2">
              {{ step.title[locale] }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
              {{ step.desc[locale] }}
            </p>
          </article>
        </div>

        <div class="rounded-2xl border dark:border-brand-500/25 border-brand-500/30 dark:bg-gradient-to-r dark:from-brand-500/10 from-brand-500/5 to-transparent p-6 sm:p-8 backdrop-blur-xl">
          <div class="flex flex-col sm:flex-row sm:items-center gap-5">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-500 to-cyan-glow shrink-0">
              <LucideIcon name="repeat" class-name="w-5 h-5 text-white" />
            </div>
            <div class="flex-1">
              <h4 class="font-display text-base sm:text-lg font-bold dark:text-white text-light-text mb-1">
                {{ t('approachPage.process.bonusTitle') }}
              </h4>
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                {{ t('approachPage.process.bonusDesc') }}
              </p>
            </div>
            <router-link
              to="/pricing"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border text-sm font-semibold dark:text-white text-light-text hover:dark:border-brand-500/50 transition-all shrink-0"
            >
              {{ t('approachPage.process.bonusCta') }}
              <LucideIcon name="arrow-right" class-name="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="relative dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6 text-center overflow-hidden">
      <div aria-hidden="true" class="absolute inset-0 pointer-events-none dark:opacity-100 opacity-70">
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-brand-500/10 blur-3xl"></div>
      </div>
      <div class="relative">
        <h2 class="font-display text-3xl font-bold dark:text-white text-light-text mb-4">
          {{ t('approachPage.ctaTitle') }}
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-8 max-w-2xl mx-auto">
          {{ t('approachPage.ctaSubtitle') }}
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-500 via-brand-500 to-cyan-glow text-white font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_55px_rgba(59,130,246,0.55)] hover:brightness-110 transition-all"
        >
          {{ t('approachPage.ctaButton') }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LucideIcon from '../components/LucideIcon.vue'
import AmbientGlow from '../components/ui/AmbientGlow.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import { approachPillars, businessProfiles, approachSteps } from '../data/approach.js'

const { t, locale } = useI18n()
</script>
