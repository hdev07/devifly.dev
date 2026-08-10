<template>
  <main class="relative overflow-hidden">
    <AmbientGlow variant="subtle" />

    <!-- Hero -->
    <section class="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div class="max-w-7xl mx-auto px-6">
        <router-link
          to="/#casos"
          class="inline-flex items-center gap-2 text-sm dark:text-text-secondary text-light-muted hover:text-brand-400 transition-colors mb-8"
        >
          <LucideIcon name="arrow-left" class-name="w-4 h-4" />
          {{ t("caseStudy.back") }}
        </router-link>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-6 xl:col-span-7">
            <div class="flex items-center gap-3 mb-5">
              <img
                v-if="study.brand?.icon"
                :src="study.brand.icon"
                alt=""
                class="w-10 h-10"
                aria-hidden="true"
              />
              <span
                class="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-400"
              >
                {{ study.tag[locale] }}
              </span>
            </div>

            <h1
              class="font-display font-bold dark:text-white text-light-text leading-[1.05] tracking-tight"
              style="font-size: clamp(2.4rem, 6vw, 4.25rem)"
            >
              {{ study.title[locale] }}
            </h1>
            <p
              class="mt-5 text-lg sm:text-xl dark:text-text-secondary text-light-muted leading-relaxed max-w-xl"
            >
              {{ study.headline[locale] }}
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <BaseButton
                v-if="study.appUrl || study.liveUrl"
                :href="study.appUrl || study.liveUrl"
                arrow
                accent="violet"
              >
                {{ t("caseStudy.openProduct") }}
              </BaseButton>
              <BaseButton to="/contacto" variant="secondary">
                {{ t("caseStudy.cta") }}
              </BaseButton>
            </div>

            <div class="mt-10 flex flex-wrap gap-2">
              <span
                v-for="tag in study.stack"
                :key="tag"
                class="px-3 py-1 rounded-full text-xs font-medium dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-text-secondary text-light-muted"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end">
            <div class="relative flex items-end justify-center gap-3 sm:gap-4">
              <DeviceFrame
                v-if="study.gallery[1]"
                class="hidden sm:block opacity-80 -mb-6"
                size="sm"
                tilted
                :tilt="-10"
                :src="study.gallery[1].src"
                :alt="study.gallery[1].alt[locale]"
              />
              <DeviceFrame
                size="lg"
                class="relative z-10"
                :src="study.gallery[0].src"
                :alt="study.gallery[0].alt[locale]"
              />
              <DeviceFrame
                v-if="study.gallery[2]"
                class="hidden sm:block opacity-80 -mb-6"
                size="sm"
                tilted
                :tilt="10"
                :src="study.gallery[2].src"
                :alt="study.gallery[2].alt[locale]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics -->
    <section class="relative py-12 sm:py-16 border-y dark:border-white/8 border-light-border">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="m in study.metrics" :key="m.label.es">
          <div class="font-display text-3xl sm:text-4xl font-bold text-gradient tabular-nums">
            {{ m.value }}
          </div>
          <p
            class="mt-2 text-xs uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted"
          >
            {{ m.label[locale] }}
          </p>
          <p
            v-if="m.note"
            class="mt-1 text-xs dark:text-text-secondary/70 text-light-muted"
          >
            {{ m.note[locale] }}
          </p>
        </div>
      </div>
    </section>

    <!-- Problem / Solution / Result -->
    <section class="relative py-20 sm:py-28">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <article
          class="rounded-2xl border dark:border-red-400/20 border-red-400/25 dark:bg-red-500/5 bg-red-500/5 p-6 sm:p-7"
        >
          <span
            class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-red-400 text-red-500"
          >
            {{ t("common.problem") }}
          </span>
          <p class="mt-3 text-sm sm:text-base dark:text-text-secondary text-light-muted leading-relaxed">
            {{ study.problem[locale] }}
          </p>
        </article>
        <article
          class="rounded-2xl border dark:border-brand-500/25 border-brand-500/30 dark:bg-brand-500/5 bg-brand-500/5 p-6 sm:p-7"
        >
          <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400">
            {{ t("common.solution") }}
          </span>
          <p class="mt-3 text-sm sm:text-base dark:text-text-secondary text-light-muted leading-relaxed">
            {{ study.solution[locale] }}
          </p>
        </article>
        <article
          class="rounded-2xl border dark:border-emerald-400/25 border-emerald-400/30 dark:bg-emerald-500/5 bg-emerald-500/5 p-6 sm:p-7"
        >
          <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
            {{ t("common.result") }}
          </span>
          <p class="mt-3 text-sm sm:text-base font-semibold dark:text-white text-light-text leading-relaxed">
            {{ study.result[locale] }}
          </p>
        </article>
      </div>
    </section>

    <!-- Gallery -->
    <section class="relative py-8 sm:py-12 pb-20 sm:pb-28">
      <div class="max-w-7xl mx-auto px-6">
        <SectionHeader
          :eyebrow="t('caseStudy.galleryEyebrow')"
          :title="t('caseStudy.galleryTitle')"
          :subtitle="t('caseStudy.gallerySubtitle')"
        />

        <div class="mt-4 flex flex-wrap justify-center gap-6 sm:gap-10">
          <figure
            v-for="shot in study.gallery"
            :key="shot.caption.es"
            class="flex flex-col items-center gap-4"
          >
            <DeviceFrame :src="shot.src" :alt="shot.alt[locale]" size="md" />
            <figcaption
              class="text-xs uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted"
            >
              {{ shot.caption[locale] }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="relative py-20 sm:py-28 dark:bg-base-900/40 bg-light-card/50 border-y dark:border-white/8 border-light-border">
      <div class="max-w-7xl mx-auto px-6">
        <SectionHeader
          :eyebrow="t('caseStudy.processEyebrow')"
          :title="t('caseStudy.processTitle')"
          :subtitle="t('caseStudy.processSubtitle')"
        />

        <ol class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          <li
            v-for="step in study.process"
            :key="step.step"
            class="rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 p-6 sm:p-7"
          >
            <div class="font-display text-3xl font-bold text-gradient tabular-nums">
              {{ step.step }}
            </div>
            <h3 class="mt-3 font-display text-lg font-bold dark:text-white text-light-text">
              {{ step.title[locale] }}
            </h3>
            <p class="mt-2 text-sm dark:text-text-secondary text-light-muted leading-relaxed">
              {{ step.body[locale] }}
            </p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Brand / visuals -->
    <section v-if="study.visuals?.length" class="relative py-20 sm:py-28">
      <div class="max-w-7xl mx-auto px-6">
        <SectionHeader
          :eyebrow="t('caseStudy.brandEyebrow')"
          :title="t('caseStudy.brandTitle')"
          :subtitle="t('caseStudy.brandSubtitle')"
        />

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <figure
            v-for="visual in study.visuals"
            :key="visual.caption.es"
            class="rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 p-5 flex flex-col items-center gap-4"
          >
            <img
              :src="visual.src"
              :alt="visual.alt[locale]"
              class="w-full max-w-[160px] h-auto"
              loading="lazy"
            />
            <figcaption
              class="text-xs uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted text-center"
            >
              {{ visual.caption[locale] }}
            </figcaption>
          </figure>
        </div>

        <div
          v-if="study.brand?.logo"
          class="mt-10 flex flex-wrap items-center justify-center gap-8 rounded-2xl border dark:border-white/8 border-light-border dark:bg-[#0E0B0D] bg-zinc-900 p-8"
        >
          <img :src="study.brand.logo" :alt="study.brand.name" class="h-10 sm:h-12 w-auto" />
          <img
            v-if="study.brand.icon"
            :src="study.brand.icon"
            :alt="`${study.brand.name} icon`"
            class="h-12 w-12"
          />
          <span
            class="inline-flex items-center gap-2 text-sm text-white/70"
          >
            <span
              class="w-4 h-4 rounded-full"
              :style="{ background: study.brand.color }"
            />
            {{ study.brand.color }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20 sm:py-28">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
        >
          {{ t("caseStudy.ctaTitle") }}
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-8 leading-relaxed">
          {{ t("caseStudy.ctaSubtitle") }}
        </p>
        <BaseButton to="/contacto" arrow>
          {{ t("caseStudy.cta") }}
        </BaseButton>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "../LucideIcon.vue";
import BaseButton from "../ui/BaseButton.vue";
import SectionHeader from "../ui/SectionHeader.vue";
import AmbientGlow from "../ui/AmbientGlow.vue";
import DeviceFrame from "./DeviceFrame.vue";

defineProps({
  study: { type: Object, required: true },
});

const { t, locale } = useI18n();
</script>
