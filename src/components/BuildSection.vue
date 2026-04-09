<template>
  <section id="build" class="py-24 sm:py-32 overflow-hidden">
    <!-- Header -->
    <div class="max-w-7xl mx-auto px-6 mb-14">
      <div
        data-animate
        class="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
      >
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="block w-8 h-px dark:bg-brand-500 bg-brand-600"></span>
            <span
              class="text-xs font-semibold tracking-[0.18em] uppercase text-brand-400"
              >{{ locale === "es" ? "Productos" : "Products" }}</span
            >
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-light-text leading-tight"
          >
            {{ t("build.title") }}
          </h2>
        </div>
        <p
          class="dark:text-text-secondary text-light-muted sm:max-w-xs sm:text-right text-sm leading-relaxed"
        >
          {{ t("build.subtitle") }}
        </p>
      </div>
    </div>

    <!-- Marquee tracks -->
    <div class="space-y-7">
      <div v-for="track in tracks" :key="track.key">
        <!-- Track label row -->
        <div class="max-w-7xl mx-auto px-6 mb-4 flex items-center gap-4">
          <span
            class="text-xs font-semibold tracking-[0.15em] uppercase whitespace-nowrap"
            :class="track.accentClass"
            >{{ track.label }}</span
          >
          <div
            class="flex-1 h-px dark:bg-base-800 bg-light-border"
          ></div>
          <span class="text-xs dark:text-base-700 text-light-border tabular-nums">
            {{ track.items.length }}
          </span>
        </div>

        <!-- Marquee strip -->
        <div class="relative overflow-hidden marquee-pause">
          <!-- Fade left -->
          <div
            class="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r dark:from-[#020617] from-[#f8fafc] to-transparent"
          ></div>
          <!-- Fade right -->
          <div
            class="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l dark:from-[#020617] from-[#f8fafc] to-transparent"
          ></div>

          <!-- Scrolling belt -->
          <div
            class="flex gap-4 py-1 marquee-track w-max"
            :class="track.direction === 'left' ? 'marquee-left' : 'marquee-right'"
            :style="`animation-duration: ${track.items.length * 7}s`"
          >
            <!-- Duplicate items for seamless loop -->
            <template v-for="n in 2" :key="n">
              <router-link
                v-for="product in track.items"
                :key="`${n}-${product.key}`"
                :to="product.link"
                class="group relative flex flex-col w-[300px] shrink-0 p-5 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border hover:border-brand-500/40 transition-colors duration-300"
              >
                <!-- Hover gradient -->
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  :class="product.gradient"
                ></div>

                <div class="relative flex flex-col flex-1">
                  <!-- Icon + category -->
                  <div class="flex items-start justify-between mb-3">
                    <LucideIcon :name="product.icon" class-name="w-7 h-7" />
                    <span
                      class="text-[10px] font-medium px-2 py-1 rounded-full dark:bg-base-700/60 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-600/40 border-light-border leading-none"
                    >
                      {{ product.category }}
                    </span>
                  </div>

                  <!-- Title -->
                  <h3
                    class="font-display text-sm font-bold dark:text-white text-light-text mb-1.5 leading-snug"
                  >
                    {{ locale === "es" ? product.titleEs : product.titleEn }}
                  </h3>

                  <!-- Desc -->
                  <p
                    class="text-xs dark:text-text-secondary text-light-muted leading-relaxed line-clamp-2 flex-1 mb-4"
                  >
                    {{ locale === "es" ? product.descEs : product.descEn }}
                  </p>

                  <!-- CTA -->
                  <span
                    class="inline-flex items-center gap-1 text-xs font-semibold text-brand-500 group-hover:translate-x-1 transition-transform"
                  >
                    {{ t("build.explore") }}
                    <LucideIcon name="arrow-right" class-name="w-3 h-3" />
                  </span>
                </div>
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { products } from "../data/products.js";
import LucideIcon from "./LucideIcon.vue";

const { t, locale } = useI18n();

const tracks = computed(() => {
  const byCategory = (cat) => products.filter((p) => p.category === cat);

  return [
    {
      key: "web",
      label: locale.value === "es" ? "Web & Landings" : "Web & Landings",
      accentClass: "text-brand-400",
      items: byCategory("Web & Landings"),
      direction: "left",
    },
    {
      key: "mkt",
      label:
        locale.value === "es"
          ? "Marketing & Automatización"
          : "Marketing & Automation",
      accentClass: "dark:text-cyan-400 text-cyan-600",
      items: [...byCategory("Marketing & Growth"), ...byCategory("Automatización")],
      direction: "right",
    },
    {
      key: "ecomia",
      label: locale.value === "es" ? "E-commerce & IA" : "E-commerce & AI",
      accentClass: "dark:text-violet-400 text-violet-600",
      items: [
        ...byCategory("E-commerce & Ventas"),
        ...byCategory("IA Aplicada"),
      ],
      direction: "left",
    },
    {
      key: "saas",
      label:
        locale.value === "es"
          ? "Sistemas & SaaS"
          : "Internal Systems & SaaS",
      accentClass: "dark:text-neon text-emerald-600",
      items: [
        ...byCategory("Sistemas Internos"),
        ...byCategory("SaaS listos para escalar"),
      ],
      direction: "right",
    },
  ];
});
</script>
