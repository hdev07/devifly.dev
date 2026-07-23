<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        :eyebrow="t('topSellers.eyebrow')"
        :title="t('topSellers.title')"
        :subtitle="t('topSellers.subtitle')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <ProductCard
          v-for="(product, i) in salesProducts"
          :key="product.key"
          data-animate
          :class="`delay-${(i + 1) * 75}`"
          :product="product"
          :locale="locale"
          :max-features="4"
          compact
          :from-label="t('common.from')"
          :view-more-label="t('topSellers.viewMore')"
          :demo-label="t('topSellers.demo')"
        />
      </div>

      <div data-animate class="text-center mt-14">
        <p class="dark:text-text-secondary text-light-muted text-sm mb-5">
          {{ t("topSellers.customNote") }}
        </p>
        <router-link
          to="/#productos"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text font-semibold text-sm hover:dark:border-brand-500/50 transition-all"
        >
          {{ t("topSellers.seeCatalog") }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { salesProducts } from "../data/salesCatalog.js";
import LucideIcon from "./LucideIcon.vue";
import ProductCard from "./ProductCard.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { t, locale } = useI18n();
</script>
