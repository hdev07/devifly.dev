<template>
  <section class="relative py-16 sm:py-20 border-y dark:border-white/8 border-light-border dark:bg-base-900/30 bg-light-card/40 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <!-- KPIs row -->
      <div data-animate class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-14">
        <div v-for="kpi in kpis" :key="kpi.label" class="flex flex-col">
          <div class="flex items-baseline gap-1">
            <span v-if="kpi.prefix" class="font-display text-xl sm:text-2xl font-bold text-brand-400">{{ kpi.prefix }}</span>
            <span class="font-display text-3xl sm:text-5xl font-bold dark:text-white text-light-text tabular-nums leading-none">
              {{ kpi.value }}
            </span>
            <span v-if="kpi.suffix" class="font-display text-xl sm:text-2xl font-bold text-brand-400">{{ kpi.suffix }}</span>
          </div>
          <p class="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted leading-relaxed max-w-[14ch]">
            {{ kpi.label }}
          </p>
        </div>
      </div>

      <!-- Eyebrow -->
      <div data-animate class="flex items-center gap-3 mb-6 delay-100">
        <span class="block w-8 h-px bg-gradient-to-r from-brand-500 to-cyan-glow"></span>
        <span class="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-400">
          {{ locale === "es" ? "Marcas que confían" : "Trusted by" }}
        </span>
      </div>
    </div>

    <!-- Logo marquee -->
    <div class="marquee-mask overflow-hidden marquee-pause" data-animate>
      <div class="flex marquee-track marquee-left" style="width: max-content; animation-duration: 38s;">
        <div v-for="loop in 2" :key="loop" class="flex items-center gap-12 sm:gap-16 px-6 sm:px-8 shrink-0">
          <template v-for="(logo, i) in logoList" :key="`${loop}-${i}`">
            <div class="shrink-0 flex items-center justify-center h-10 sm:h-12 transition-all duration-300 dark:opacity-60 opacity-70 hover:opacity-100 grayscale hover:grayscale-0">
              <img
                v-if="logo.src"
                :src="logo.src"
                :alt="logo.name"
                class="h-full w-auto object-contain dark:invert dark:brightness-0 dark:hue-rotate-180"
                loading="lazy"
              />
              <span
                v-else
                class="font-display text-xl sm:text-2xl font-bold dark:text-white/70 text-light-muted whitespace-nowrap tracking-tight"
              >
                {{ logo.name }}
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const kpis = computed(() => [
  {
    value: "+20",
    label: locale.value === "es" ? "Productos enviados" : "Products shipped",
  },
  {
    prefix: "+",
    value: "45",
    suffix: "%",
    label: locale.value === "es" ? "Lift de leads promedio" : "Average lead lift",
  },
  {
    value: "99.9%",
    label: locale.value === "es" ? "Uptime en producción" : "Production uptime",
  },
  {
    value: "21d",
    label: locale.value === "es" ? "Demo real publicada" : "Live demo turnaround",
  },
]);

// Auto-load logos from src/assets/logos (any svg) - graceful fallback to brand names
const logoModules = import.meta.glob("../assets/logos/*.svg", {
  eager: true,
  import: "default",
});

const fallbackBrands = [
  { name: "MoviBase" },
  { name: "Confecdotario" },
  { name: "Musion" },
  { name: "PoleGP" },
  { name: "La Cotorrisa" },
  { name: "Studio Lumi" },
  { name: "Casa Verde" },
  { name: "Ruta Norte" },
];

const logoList = computed(() => {
  const loaded = Object.entries(logoModules).map(([path, src]) => {
    const name = path.split("/").pop().replace(/\.svg$/, "").replace(/[-_]/g, " ");
    return { name, src };
  });
  return loaded.length > 0 ? loaded : fallbackBrands;
});
</script>
