<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        align="center"
        :eyebrow="locale === 'es' ? 'Por qué Devifly' : 'Why Devifly'"
        :title="locale === 'es' ? 'No somos una agencia más. Y eso se nota.' : 'We are not just another agency. And it shows.'"
        :subtitle="locale === 'es'
          ? 'Mientras la competencia entrega plantillas genéricas y cobra por cada cambio, Devifly construye productos pensados para vender desde el día 1.'
          : 'While the competition ships generic templates and charges for every change, Devifly builds products designed to sell from day 1.'"
      />

      <!-- Mobile: stacked cards -->
      <div class="md:hidden space-y-4 mb-8">
        <div
          v-for="(row, i) in rows"
          :key="`m-${i}`"
          data-animate
          :class="`delay-${(i + 1) * 75}`"
          class="rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl p-5"
        >
          <h3 class="font-display font-semibold dark:text-white text-light-text mb-3">
            {{ row.feature[locale] }}
          </h3>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-xl p-3 dark:bg-red-500/5 bg-red-500/5 border dark:border-red-400/15 border-red-400/20">
              <span class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-red-400 text-red-500 block mb-1">
                {{ locale === "es" ? "Otros" : "Others" }}
              </span>
              <p class="text-xs dark:text-text-secondary text-light-muted leading-relaxed">
                {{ row.others[locale] }}
              </p>
            </div>
            <div class="rounded-xl p-3 dark:bg-emerald-500/5 bg-emerald-500/5 border dark:border-emerald-400/20 border-emerald-400/25">
              <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 block mb-1">Devifly</span>
              <p class="text-xs font-medium dark:text-white text-light-text leading-relaxed">
                {{ row.devifly[locale] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: comparison table -->
      <div data-animate class="hidden md:block">
        <div class="rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden">
          <!-- Table header -->
          <div class="grid grid-cols-12 dark:bg-base-800/60 bg-light-card border-b dark:border-white/8 border-light-border">
            <div class="col-span-4 px-6 py-5">
              <span class="text-[11px] font-semibold tracking-[0.22em] uppercase dark:text-text-secondary text-light-muted">
                {{ locale === "es" ? "Comparación" : "Comparison" }}
              </span>
            </div>
            <div class="col-span-4 px-6 py-5 border-l dark:border-white/8 border-light-border">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-red-400"></span>
                <span class="font-display text-sm font-semibold dark:text-text-secondary text-light-muted uppercase tracking-wider">
                  {{ locale === "es" ? "Otros estudios" : "Other studios" }}
                </span>
              </div>
            </div>
            <div class="col-span-4 px-6 py-5 border-l dark:border-brand-500/30 border-brand-500/40 dark:bg-gradient-to-b dark:from-brand-500/10 from-brand-500/5 to-transparent">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="font-display text-sm font-bold text-gradient uppercase tracking-wider">
                  Devifly
                </span>
              </div>
            </div>
          </div>

          <!-- Rows -->
          <div class="divide-y dark:divide-white/5 divide-light-border">
            <div
              v-for="(row, i) in rows"
              :key="i"
              class="grid grid-cols-12 transition-colors hover:dark:bg-white/3 hover:bg-light-card/40"
            >
              <div class="col-span-4 px-6 py-5 flex items-center gap-3">
                <LucideIcon :name="row.icon" class-name="w-4 h-4 text-brand-400 shrink-0" />
                <span class="font-medium text-sm dark:text-white text-light-text">
                  {{ row.feature[locale] }}
                </span>
              </div>
              <div class="col-span-4 px-6 py-5 border-l dark:border-white/5 border-light-border flex items-start gap-3">
                <LucideIcon name="x" class-name="w-4 h-4 dark:text-red-400/80 text-red-500/80 mt-0.5 shrink-0" />
                <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                  {{ row.others[locale] }}
                </p>
              </div>
              <div class="col-span-4 px-6 py-5 border-l dark:border-brand-500/15 border-brand-500/20 dark:bg-emerald-500/3 bg-emerald-500/3 flex items-start gap-3">
                <LucideIcon name="check" class-name="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <p class="text-sm font-medium dark:text-white text-light-text leading-relaxed">
                  {{ row.devifly[locale] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div data-animate class="text-center mt-12 delay-500">
        <a
          :href="callLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-500 via-brand-500 to-cyan-glow text-white font-semibold text-sm shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_55px_rgba(59,130,246,0.55)] transition-all"
        >
          {{ locale === "es" ? "Quiero un partner, no un proveedor" : "I want a partner, not a vendor" }}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useWhatsApp } from "../composables/useWhatsApp.js";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { locale } = useI18n();
const { linkFor } = useWhatsApp();

const callLink = computed(() => linkFor("call", locale.value));

const rows = [
  {
    icon: "rocket",
    feature: { es: "Velocidad de entrega", en: "Delivery speed" },
    others: { es: "Procesos burocráticos, demos en 6-8 semanas", en: "Bureaucratic processes, demos in 6-8 weeks" },
    devifly: { es: "Demo real publicada en 21 días", en: "Real demo live in 21 days" },
  },
  {
    icon: "target",
    feature: { es: "Enfoque del diseño", en: "Design focus" },
    others: { es: "Bonito pero sin estrategia de conversión", en: "Pretty but no conversion strategy" },
    devifly: { es: "UX orientado a venta y datos", en: "Sales- and data-oriented UX" },
  },
  {
    icon: "code",
    feature: { es: "Stack y rendimiento", en: "Stack & performance" },
    others: { es: "Plantillas WordPress lentas con plugins inflados", en: "Slow WordPress templates with bloated plugins" },
    devifly: { es: "Vue 3 + Tailwind, Lighthouse 90+", en: "Vue 3 + Tailwind, Lighthouse 90+" },
  },
  {
    icon: "users",
    feature: { es: "Comunicación", en: "Communication" },
    others: { es: "Pasas por 3 cuentas y un PM antes de hablar con dev", en: "You go through 3 accounts and a PM before reaching dev" },
    devifly: { es: "Trato directo con el founder/dev en cada etapa", en: "Direct line with founder/dev at every step" },
  },
  {
    icon: "wand-sparkles",
    feature: { es: "Cambios después del lanzamiento", en: "Post-launch changes" },
    others: { es: "Cobran cada ajuste menor como ticket nuevo", en: "Every minor tweak billed as a new ticket" },
    devifly: { es: "Planes de mantenimiento claros desde $999/mes", en: "Clear maintenance plans from $59/mo" },
  },
  {
    icon: "shield-check",
    feature: { es: "Garantía de resultado", en: "Result guarantee" },
    others: { es: "Te entregan el sitio y desaparecen", en: "They ship the site and disappear" },
    devifly: { es: "21 días para validar antes de pagar el grueso", en: "21 days to validate before paying the bulk" },
  },
  {
    icon: "trending-up",
    feature: { es: "Visión de negocio", en: "Business vision" },
    others: { es: "Solo construyen lo que pides", en: "They only build what you ask for" },
    devifly: { es: "Aportan estrategia CRO y métricas", en: "They contribute CRO strategy and metrics" },
  },
];
</script>
