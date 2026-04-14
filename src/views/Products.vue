<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="wrench" class-name="w-4 h-4" />
        {{ t("productsPage.badge") }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{ t("productsPage.title") }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{ t("productsPage.subtitle") }}
      </p>
    </div>

    <!-- Category filters -->
    <div class="max-w-7xl mx-auto px-6 mb-12">
      <div class="flex flex-wrap gap-2 justify-center">
        <button
          v-for="cat in categories"
          :key="cat.key"
          @click="activeCategory = cat.key"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
          :class="
            activeCategory === cat.key
              ? 'bg-brand-500 text-white'
              : 'dark:bg-base-800/50 bg-light-card border dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted hover:border-brand-500/50'
          "
        >
          {{ locale === "es" ? cat.labelEs : cat.labelEn }}
        </button>
      </div>
    </div>

    <!-- Products grid -->
    <div class="max-w-7xl mx-auto px-6 mb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="p in filtered"
          :key="p.key"
          class="group flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden hover:border-brand-500/30 transition-all duration-300"
        >
          <div class="p-8 flex-1">
            <div class="flex items-center gap-3 mb-4">
              <LucideIcon :name="p.icon" class-name="w-8 h-8" />
              <span
                class="text-xs font-medium px-2 py-1 rounded-full dark:bg-base-700/50 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-600/50 border-light-border"
              >
                {{ p.category }}
              </span>
            </div>
            <h2
              class="font-display text-xl font-bold dark:text-white text-light-text mb-2"
            >
              {{ locale === "es" ? p.titleEs : p.titleEn }}
            </h2>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{ locale === "es" ? p.descEs : p.descEn }}
            </p>

            <!-- For whom -->
            <div class="mb-4">
              <span
                class="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-1 block"
              >
                {{ t("productsPage.forLabel") }}
              </span>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                {{ locale === "es" ? p.forEs : p.forEn }}
              </p>
            </div>

            <!-- Includes -->
            <ul class="space-y-2 mb-6">
              <li
                v-for="inc in locale === 'es' ? p.includesEs : p.includesEn"
                :key="inc"
                class="text-sm dark:text-text-secondary text-light-muted flex items-start gap-2"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ inc }}
              </li>
            </ul>

            <!-- Benefit -->
            <div
              class="p-3 rounded-xl dark:bg-base-700/30 bg-light-card/80 border dark:border-base-600/30 border-light-border"
            >
              <p class="text-sm font-medium dark:text-white text-light-text">
                <span class="inline-flex items-center gap-2">
                  <LucideIcon
                    name="sparkles"
                    class-name="w-4 h-4 text-brand-500"
                  />
                  {{ locale === "es" ? p.benefitEs : p.benefitEn }}
                </span>
              </p>
            </div>
          </div>

          <div class="px-8 pb-8 flex flex-col gap-3">
            <span class="text-lg font-bold dark:text-white text-light-text">
              {{ locale === "es" ? p.priceEs : p.priceEn }}
            </span>
            <div class="flex gap-2">
              <router-link
                :to="p.link"
                class="flex-1 text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2">
                  {{ t("productsPage.viewMore") }}
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </span>
              </router-link>
              <router-link
                v-if="p.demoLink"
                :to="p.demoLink"
                class="flex-1 text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:border-brand-500/50 hover:text-brand-500 transition text-sm"
              >
                <span class="inline-flex items-center gap-2">
                  <LucideIcon name="play" class-name="w-4 h-4" />
                  {{ locale === "es" ? "Ver demo" : "View demo" }}
                </span>
              </router-link>
            </div>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-brand-500 transition text-sm"
            >
              {{ t("productsPage.hire") }}
            </router-link>
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
        {{ t("productsPage.ctaTitle") }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{ t("productsPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{ t("productsPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { products, categories } from "../data/products.js";
import LucideIcon from "../components/LucideIcon.vue";

const { t, locale } = useI18n();
const activeCategory = ref("all");

const filtered = computed(() => {
  if (activeCategory.value === "all") return products;
  return products.filter((p) => p.category === activeCategory.value);
});
</script>
