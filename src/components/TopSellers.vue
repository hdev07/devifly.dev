<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        :eyebrow="locale === 'es' ? 'Productos Empaquetados' : 'Packaged Products'"
        :title="locale === 'es' ? 'Soluciones listas para lanzar tu negocio' : 'Ready-to-launch business solutions'"
        :subtitle="locale === 'es'
          ? 'Productos con alcance y precio claro. Si tu proyecto requiere más, también construimos a medida.'
          : 'Products with clear scope and pricing. If your project needs more, we also build custom.'"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="(product, i) in topProducts"
          :key="product.key"
          data-animate
          :class="`delay-${(i + 1) * 75}`"
          class="group relative flex flex-col rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
        >
          <!-- Popular badge -->
          <div
            v-if="product.popular"
            class="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg"
          >
            <LucideIcon name="flame" class-name="w-3 h-3" />
            {{ locale === "es" ? "Popular" : "Popular" }}
          </div>

          <!-- Visual header -->
          <div class="relative h-44 overflow-hidden">
            <div class="absolute inset-0 transition-transform duration-700 group-hover:scale-110" :class="product.bgGradient"></div>
            <!-- Mesh overlay -->
            <div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 50%);"></div>
            <!-- Big icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <LucideIcon :name="product.icon" :class-name="`w-20 h-20 dark:text-white/10 text-white/30`" />
            </div>
            <!-- Bottom fade + category chip -->
            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t dark:from-base-900/95 from-light-surface/95 to-transparent"></div>
            <div class="absolute bottom-3 left-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider dark:bg-base-900/80 bg-white/85 backdrop-blur-md border dark:border-white/10 border-light-border"
                :class="product.accentText"
              >
                <LucideIcon :name="product.icon" class-name="w-3 h-3" />
                {{ locale === "es" ? product.categoryEs : product.categoryEn }}
              </span>
            </div>
          </div>

          <!-- Body -->
          <div class="flex flex-col flex-1 p-5 sm:p-6">
            <h3 class="font-display text-lg font-bold dark:text-white text-light-text mb-2 leading-snug">
              {{ locale === "es" ? product.titleEs : product.titleEn }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed mb-4 line-clamp-2">
              {{ locale === "es" ? product.descEs : product.descEn }}
            </p>

            <ul class="space-y-2 mb-5">
              <li
                v-for="feat in (locale === 'es' ? product.featuresEs : product.featuresEn).slice(0, 4)"
                :key="feat"
                class="flex items-start gap-2 text-xs dark:text-text-secondary text-light-muted"
              >
                <LucideIcon name="check" class-name="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                <span class="leading-relaxed">{{ feat }}</span>
              </li>
            </ul>

            <div class="mt-auto pt-4 border-t dark:border-white/8 border-light-border">
              <div class="flex items-end justify-between gap-3 mb-3">
                <div>
                  <span class="block text-[10px] font-bold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-1">
                    {{ locale === "es" ? "Desde" : "From" }}
                  </span>
                  <span class="font-display text-2xl font-bold text-gradient">
                    {{ locale === "es" ? product.priceEs : product.priceEn }}
                  </span>
                </div>
              </div>
              <div class="flex gap-2">
                <router-link
                  :to="product.link"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-brand-500/12 border border-brand-500/30 text-brand-400 font-semibold text-xs hover:bg-brand-500/20 transition"
                >
                  {{ locale === "es" ? "Ver más" : "Learn more" }}
                  <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />
                </router-link>
                <router-link
                  v-if="product.demoLink"
                  :to="product.demoLink"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text font-semibold text-xs hover:dark:border-brand-500/40 hover:border-brand-500/50 transition"
                >
                  <LucideIcon name="play" class-name="w-3.5 h-3.5" />
                  {{ locale === "es" ? "Demo" : "Demo" }}
                </router-link>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div data-animate class="text-center mt-14">
        <p class="dark:text-text-secondary text-light-muted text-sm mb-5">
          {{ locale === "es"
            ? "Si tu proyecto requiere otro alcance, también trabajamos soluciones a medida."
            : "If your project requires a different scope, we also build custom solutions." }}
        </p>
        <router-link
          to="/products"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text font-semibold text-sm hover:dark:border-brand-500/50 transition-all"
        >
          {{ locale === "es" ? "Ver catálogo completo" : "See full catalog" }}
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
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { locale } = useI18n();

const gradientByKey = {
  landing: "bg-gradient-to-br from-brand-500/30 via-brand-600/20 to-cyan-glow/20",
  invitaciones: "bg-gradient-to-br from-pink-500/30 via-rose-500/20 to-violet-soft/20",
  catalogos: "bg-gradient-to-br from-violet-500/30 via-violet-soft/20 to-fuchsia-500/20",
  menus: "bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-yellow-500/20",
  salones: "bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-green-500/20",
};

const accentByKey = {
  landing: "text-brand-400",
  invitaciones: "dark:text-pink-400 text-pink-600",
  catalogos: "dark:text-violet-300 text-violet-600",
  menus: "dark:text-amber-400 text-amber-600",
  salones: "dark:text-emerald-400 text-emerald-600",
};

const topProducts = salesProducts.map((product) => ({
  ...product,
  bgGradient: gradientByKey[product.key],
  accentText: accentByKey[product.key],
}));
</script>
