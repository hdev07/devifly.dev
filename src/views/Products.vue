<template>
  <main class="pt-24 pb-0">
    <section class="relative py-10 sm:py-14 overflow-hidden">
      <AmbientGlow variant="subtle" />

      <div class="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          :eyebrow="t('productsPage.badge')"
          :title="t('productsPage.title')"
          :subtitle="t('productsPage.subtitle')"
        />
      </div>
    </section>

    <section class="relative pb-20 sm:pb-28 overflow-hidden">
      <AmbientGlow variant="default" />

      <div class="relative max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <ProductCard
            v-for="(product, i) in visibleProducts"
            :key="product.key"
            data-animate
            :class="`delay-${(i + 1) * 75}`"
            :product="product"
            :locale="locale"
            :show-hire="product.key !== 'custom'"
            :from-label="locale === 'es' ? 'Desde' : 'From'"
            :view-more-label="t('productsPage.viewMore')"
            :demo-label="locale === 'es' ? 'Demo' : 'Demo'"
            :hire-label="t('productsPage.hire')"
          />
        </div>
      </div>
    </section>

    <section
      class="relative py-20 sm:py-24 overflow-hidden dark:bg-base-800/20 bg-light-card/30 border-y dark:border-white/5 border-light-border"
    >
      <AmbientGlow variant="subtle" />

      <div class="relative max-w-7xl mx-auto px-6">
        <div
          class="rounded-2xl border dark:border-brand-500/25 border-brand-500/30 dark:bg-gradient-to-r dark:from-brand-500/10 from-brand-500/5 to-transparent p-6 sm:p-8 backdrop-blur-xl"
          data-animate
        >
          <div class="flex flex-col sm:flex-row sm:items-center gap-5">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-500 to-cyan-glow shrink-0"
            >
              <LucideIcon name="cpu" class-name="w-5 h-5 text-white" />
            </div>
            <div class="flex-1">
              <h2
                class="font-display text-base sm:text-lg font-bold dark:text-white text-light-text mb-1"
              >
                {{ t("productsPage.ctaTitle") }}
              </h2>
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                {{ t("productsPage.ctaSubtitle") }}
              </p>
            </div>
            <router-link
              to="/contact"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border text-sm font-semibold dark:text-white text-light-text hover:dark:border-brand-500/50 transition-all shrink-0"
            >
              {{ t("productsPage.ctaButton") }}
              <LucideIcon name="arrow-right" class-name="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <CTAFinal />
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { customSoftwareProduct, salesProducts } from "../data/salesCatalog.js";
import LucideIcon from "../components/LucideIcon.vue";
import ProductCard from "../components/ProductCard.vue";
import CTAFinal from "../components/CTAFinal.vue";
import AmbientGlow from "../components/ui/AmbientGlow.vue";
import SectionHeader from "../components/ui/SectionHeader.vue";

const { t, locale } = useI18n();
const visibleProducts = [...salesProducts, customSoftwareProduct];
</script>
