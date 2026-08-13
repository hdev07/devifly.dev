<template>
  <section class="relative py-20 sm:py-28 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-5xl mx-auto px-6">
      <SectionHeader
        align="center"
        :eyebrow="t('pricingTeaser.eyebrow')"
        :title="t('pricingTeaser.title')"
        :subtitle="t('pricingTeaser.subtitle')"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-10">
        <article
          v-for="tier in tiers"
          :key="tier.key"
          class="relative flex flex-col rounded-2xl border p-6 sm:p-7 transition-all duration-300"
          :class="tier.featured
            ? 'border-brand-500/50 dark:bg-brand-500/[0.06] bg-brand-500/[0.04] shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)] md:-translate-y-1'
            : 'dark:bg-base-900/40 bg-white dark:border-base-700/50 border-light-border'"
        >
          <div
            v-if="tier.featured"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wide"
          >
            {{ t("pricingTeaser.mostRequested") }}
          </div>

          <div class="mb-4">
            <h3 class="font-display text-lg font-bold dark:text-white text-light-text">
              {{ t(`pricingTeaser.tiers.${tier.key}.title`) }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mt-1 leading-relaxed">
              {{ t(`pricingTeaser.tiers.${tier.key}.subtitle`) }}
            </p>
          </div>

          <div class="mb-5">
            <span class="text-[11px] font-semibold uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted">
              {{ t("common.from") }}
            </span>
            <div class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text tabular-nums mt-1">
              {{ t(`pricingTeaser.tiers.${tier.key}.price`) }}
            </div>
            <p class="text-xs dark:text-text-secondary text-light-muted mt-1">
              {{ t(`pricingTeaser.tiers.${tier.key}.delivery`) }}
            </p>
            <p class="text-[11px] dark:text-text-secondary/80 text-light-muted mt-2 leading-snug">
              {{ t(`pricingTeaser.tiers.${tier.key}.range`) }}
            </p>
          </div>

          <ul class="space-y-2 mb-6 flex-1">
            <li
              v-for="feat in tm(`pricingTeaser.tiers.${tier.key}.features`)"
              :key="feat"
              class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
            >
              <LucideIcon name="check" class-name="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <router-link
            :to="tier.link"
            class="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition"
            :class="tier.featured
              ? 'bg-brand-600 text-white hover:bg-brand-500'
              : 'bg-brand-500/10 border border-brand-500/25 dark:text-brand-400 text-brand-600 hover:bg-brand-500/15'"
          >
            {{ t(`pricingTeaser.tiers.${tier.key}.cta`) }}
          </router-link>
        </article>
      </div>

      <div
        class="mt-5 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-dashed dark:border-base-700/60 border-light-border dark:bg-base-900/30 bg-white/60 px-6 py-5"
      >
        <div class="flex-1">
          <h3 class="font-display text-base font-bold dark:text-white text-light-text">
            {{ t("pricingTeaser.customTitle") }}
          </h3>
          <p class="text-sm dark:text-text-secondary text-light-muted mt-1 leading-relaxed">
            {{ t("pricingTeaser.customText") }}
          </p>
        </div>
        <router-link
          to="/contacto"
          class="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-500/10 border border-brand-500/25 dark:text-brand-400 text-brand-600 hover:bg-brand-500/15 transition"
        >
          {{ t("pricingTeaser.customCta") }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p class="text-xs dark:text-text-secondary text-light-muted max-w-md">
          {{ t("pricingTeaser.note") }}
        </p>
        <router-link
          to="/#productos"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-400 whitespace-nowrap"
        >
          {{ t("pricingTeaser.seePlans") }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { t, tm } = useI18n();

// Textos en src/i18n/{es,en}.js bajo `pricingTeaser.tiers.<key>`
const tiers = [
  { key: "esencial", featured: false, link: "/#productos" },
  { key: "pro", featured: true, link: "/#productos" },
  { key: "premium", featured: false, link: "/#productos" },
];
</script>
