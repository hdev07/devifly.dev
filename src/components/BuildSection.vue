<template>
  <section id="build" class="py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div data-animate class="text-center mb-16">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
        >
          {{ t("build.title") }}
        </h2>
        <p
          class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
        >
          {{ t("build.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="product in products"
          :key="product.key"
          :to="product.link"
          data-animate
          class="group relative flex flex-col p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border hover:border-brand-500/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="product.gradient"
          ></div>
          <div class="relative">
            <LucideIcon :name="product.icon" class-name="w-8 h-8 mb-4" />
            <span
              class="text-xs font-medium px-2 py-1 rounded-full dark:bg-base-700/50 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-600/50 border-light-border mb-3 inline-block"
            >
              {{ product.category }}
            </span>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-2"
            >
              {{ locale === "es" ? product.titleEs : product.titleEn }}
            </h3>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-4 line-clamp-2"
            >
              {{ locale === "es" ? product.descEs : product.descEn }}
            </p>
            <span
              class="text-sm font-semibold text-brand-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
            >
              {{ t("build.explore") }}
              <LucideIcon name="arrow-right" class-name="w-4 h-4" />
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { products } from "../data/products.js";
import LucideIcon from "./LucideIcon.vue";

const { t, locale } = useI18n();
</script>
