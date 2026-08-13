<template>
  <section
    class="relative py-16 sm:py-20 border-y dark:border-white/8 border-light-border dark:bg-base-900/30 bg-light-card/40 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6">
      <!-- KPIs row -->
      <div
        data-animate
        class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-14"
      >
        <div v-for="kpi in kpis" :key="kpi.label" class="flex flex-col">
          <div class="flex items-baseline gap-1">
            <span
              v-if="kpi.prefix"
              class="font-display text-xl sm:text-2xl font-bold text-brand-400"
              >{{ kpi.prefix }}</span
            >
            <span
              class="font-display text-3xl sm:text-5xl font-bold dark:text-white text-light-text tabular-nums leading-none"
            >
              {{ kpi.value }}
            </span>
            <span
              v-if="kpi.suffix"
              class="font-display text-xl sm:text-2xl font-bold text-brand-400"
              >{{ kpi.suffix }}</span
            >
          </div>
          <p
            class="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted leading-relaxed max-w-[14ch]"
          >
            {{ kpi.label }}
          </p>
        </div>
      </div>

      <!-- Eyebrow -->
      <div data-animate class="flex items-center gap-3 mb-6 delay-100">
        <span
          class="block w-8 h-px bg-gradient-to-r from-brand-500 to-cyan-glow"
        ></span>
        <span
          class="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-400"
        >
          {{ t("trustBar.trustedBy") }}
        </span>
      </div>
    </div>

    <!-- Logo marquee -->
    <div class="marquee-mask overflow-hidden marquee-pause" data-animate>
      <div
        class="flex marquee-track marquee-left"
        style="width: max-content; animation-duration: 38s"
      >
        <div
          v-for="loop in 2"
          :key="loop"
          class="flex items-center gap-12 sm:gap-16 px-6 sm:px-8 shrink-0"
        >
          <template v-for="(brand, i) in brands" :key="`${loop}-${i}`">
            <div
              class="shrink-0 flex items-center justify-center h-10 sm:h-12 transition-all duration-300 dark:opacity-60 opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
            >
              <!-- Con logotipo: ver src/assets/img/brands/README.md.
                   Si hay variante `-dark`, cada una se muestra en su tema. -->
              <img
                v-if="brand.logo"
                :src="brand.logo"
                :alt="brand.name"
                @click="goToBrand(brand.link)"
                class="h-7 sm:h-9 w-auto max-w-[170px] object-contain cursor-pointer"
                :class="brand.logoDark ? 'dark:hidden' : ''"
                loading="lazy"
              />
              <img
                v-if="brand.logoDark"
                :src="brand.logoDark"
                :alt="brand.name"
                @click="goToBrand(brand.link)"
                class="h-7 sm:h-9 w-auto max-w-[170px] object-contain cursor-pointer hidden dark:block"
                loading="lazy"
              />
              <span
                v-if="!brand.logo && !brand.logoDark"
                @click="goToBrand(brand.link)"
                class="font-display text-xl sm:text-2xl font-bold dark:text-white/70 text-light-muted whitespace-nowrap tracking-tight cursor-pointer"
              >
                {{ brand.name }}
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

const { t } = useI18n();

const kpis = computed(() => [
  { value: "+20", label: t("trustBar.kpiProducts") },
  { prefix: "+", value: "45", suffix: "%", label: t("trustBar.kpiLift") },
  { value: "99.9%", label: t("trustBar.kpiUptime") },
  { value: "21d", label: t("trustBar.kpiDemo") },
]);

const goToBrand = (link) => {
  window.open(link, "_blank");
};

// Logotipos: cualquier archivo que se deje en src/assets/img/brands/ se toma
// automáticamente si su nombre coincide con el `slug` de la marca. Mientras no
// exista el archivo, se muestra el nombre en texto. Ver README de esa carpeta.
const brandLogoFiles = import.meta.glob(
  "../assets/img/brands/*.{svg,png,webp}",
  { eager: true, import: "default" },
);
const brandLogos = Object.fromEntries(
  Object.entries(brandLogoFiles).map(([path, src]) => [
    path.split("/").pop().replace(/\.(svg|png|webp)$/, ""),
    src,
  ]),
);

const brandList = [
  { slug: "devifly", name: "Devifly Dev", link: "https://devifly.dev" },
  { slug: "cruzbet", name: "CruzBet", link: "https://cruzbet.devifly.dev" },
  { slug: "timbra", name: "Timbra One", link: "https://timbra.one" },
  { slug: "musion", name: "Musion Day", link: "https://musion.day" },
  {
    slug: "confecdotario",
    name: "Confecdotario",
    link: "https://confecdotario.com",
  },
  { slug: "movibase", name: "MoviBase", link: "https://movibase.com" },
  {
    slug: "white-glove-naples",
    name: "White Glove Naples",
    link: "https://whiteglovenaples.com",
  },
  { slug: "polegp", name: "PoleGP", link: "https://polegp.devifly.dev" },
  {
    slug: "linco-eventos",
    name: "Linco Eventos",
    link: "https://lincoeventos.com",
  },
  { slug: "aurea", name: "Aurea", link: "https://aurea.wtf" },
  {
    slug: "barberia-jafz",
    name: "Barberia JAFZ",
    link: "https://barberiajafz.devifly.dev",
  },
];

const brands = computed(() =>
  brandList.map((brand) => ({
    ...brand,
    logo: brandLogos[brand.slug] ?? null,
    logoDark: brandLogos[`${brand.slug}-dark`] ?? null,
  })),
);
</script>
