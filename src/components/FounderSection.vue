<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- Photo column -->
        <div class="lg:col-span-5" data-animate>
          <div class="relative">
            <!-- Decorative gradient ring -->
            <div aria-hidden="true" class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-cyan-glow/20 to-violet-soft/30 blur-2xl"></div>

            <div class="relative rounded-3xl overflow-hidden border dark:border-white/10 border-light-border dark:bg-base-900/70 bg-light-surface/85 backdrop-blur-xl">
              <!-- Photo -->
              <div class="aspect-[4/5] relative overflow-hidden">
                <img
                  v-if="founderPhoto"
                  :src="founderPhoto"
                  alt="Devifly founder"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <!-- Fallback avatar -->
                <div v-else class="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-cyan-glow/10 to-violet-soft/20 flex items-center justify-center">
                  <div class="relative">
                    <div aria-hidden="true" class="absolute inset-0 rounded-full bg-brand-500/40 blur-3xl"></div>
                    <div class="relative w-32 h-32 rounded-full bg-gradient-to-br from-brand-500 to-cyan-glow flex items-center justify-center">
                      <span class="font-display text-6xl font-bold text-white">D.</span>
                    </div>
                  </div>
                </div>
                <!-- Bottom info bar -->
                <div class="absolute inset-x-0 bottom-0 px-5 py-4 bg-gradient-to-t from-base-950/95 via-base-950/70 to-transparent backdrop-blur-sm">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="font-display font-bold text-white text-lg">Devifly Founder</div>
                      <div class="text-xs text-white/70 uppercase tracking-[0.18em] mt-0.5">
                        {{ locale === "es" ? "Senior Full-Stack Engineer" : "Senior Full-Stack Engineer" }}
                      </div>
                    </div>
                    <a
                      :href="siteConfig.linkedinUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LucideIcon name="linkedin" class-name="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating credential cards -->
            <div class="absolute -bottom-6 -right-4 sm:-right-8 w-[200px] rounded-2xl border dark:border-white/10 border-light-border dark:bg-base-900/85 bg-light-surface backdrop-blur-xl p-4 shadow-glass-hover hidden sm:block">
              <div class="flex items-center gap-2 mb-2">
                <LucideIcon name="award" class-name="w-4 h-4 text-amber-400" />
                <span class="text-[10px] font-bold uppercase tracking-[0.15em] dark:text-text-secondary text-light-muted">
                  {{ locale === "es" ? "Track record" : "Track record" }}
                </span>
              </div>
              <div class="flex items-baseline gap-1.5">
                <span class="font-display text-2xl font-bold text-gradient">5+</span>
                <span class="text-xs dark:text-text-secondary text-light-muted">
                  {{ locale === "es" ? "años en producción" : "years in prod" }}
                </span>
              </div>
            </div>

            <div class="absolute -top-4 -left-4 sm:-left-8 w-[180px] rounded-2xl border dark:border-white/10 border-light-border dark:bg-base-900/85 bg-light-surface backdrop-blur-xl p-4 shadow-glass-hover hidden sm:block animate-float" style="animation-delay: 1s;">
              <div class="flex items-center gap-2 mb-2">
                <span class="block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-[10px] font-bold uppercase tracking-[0.15em] dark:text-text-secondary text-light-muted">
                  {{ locale === "es" ? "Disponible" : "Available" }}
                </span>
              </div>
              <p class="text-xs dark:text-text-primary text-light-text font-medium leading-relaxed">
                {{ locale === "es" ? "Aceptando proyectos para Q2-Q3" : "Accepting projects for Q2-Q3" }}
              </p>
            </div>
          </div>
        </div>

        <!-- Content column -->
        <div class="lg:col-span-7">
          <div class="flex items-center gap-3 mb-6" data-animate>
            <span class="block w-8 h-px bg-gradient-to-r from-brand-500 to-cyan-glow"></span>
            <span class="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-400">
              {{ locale === "es" ? "Sobre el fundador" : "About the founder" }}
            </span>
          </div>

          <h2 data-animate class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-light-text leading-[1.08] tracking-tight mb-6 delay-100">
            {{ locale === "es"
              ? "Detrás de Devifly hay un dev que ya pasó por todos los errores que tú quieres evitar."
              : "Behind Devifly is a dev who has already made every mistake you want to avoid." }}
          </h2>

          <div data-animate class="space-y-4 text-base sm:text-lg dark:text-text-secondary text-light-muted leading-relaxed mb-8 delay-200">
            <p>
              {{ locale === "es"
                ? "Mi nombre está detrás de cada línea de código que entregamos. Construyo productos digitales desde 2019 y antes de Devifly trabajé en proyectos como MoviBase (SaaS de flotas con +10k vehículos), Confecdotario (red social con miles de usuarios) y Musion (PWA cultural con PostGIS)."
                : "My name is behind every line of code we ship. I have been building digital products since 2019 and before Devifly I worked on projects like MoviBase (fleet SaaS with +10k vehicles), Confecdotario (social network with thousands of users), and Musion (cultural PWA with PostGIS)." }}
            </p>
            <p>
              {{ locale === "es"
                ? "Después de ver demasiados proyectos quemarse en agencias que sobre-prometen y entregan plantillas, decidí abrir Devifly: un studio donde el founder es el dev, donde no pagas por overhead corporativo, y donde tu producto se diseña para vender, no para ganar premios."
                : "After watching too many projects burn in agencies that over-promise and deliver templates, I opened Devifly: a studio where the founder is the dev, where you do not pay for corporate overhead, and where your product is designed to sell, not to win awards." }}
            </p>
          </div>

          <!-- Promise cards -->
          <div data-animate class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 delay-300">
            <div v-for="promise in promises" :key="promise.icon" class="flex items-start gap-3 p-4 rounded-xl dark:bg-white/3 bg-light-card/60 border dark:border-white/8 border-light-border">
              <div class="w-9 h-9 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                <LucideIcon :name="promise.icon" class-name="w-4 h-4 text-brand-400" />
              </div>
              <div>
                <div class="font-semibold text-sm dark:text-white text-light-text">
                  {{ promise.title[locale] }}
                </div>
                <div class="text-xs dark:text-text-secondary text-light-muted leading-relaxed mt-0.5">
                  {{ promise.desc[locale] }}
                </div>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div data-animate class="flex flex-wrap gap-3 delay-400">
            <a
              :href="callLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-cyan-glow text-white font-semibold text-sm shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_45px_rgba(59,130,246,0.55)] hover:brightness-110 transition-all"
            >
              {{ locale === "es" ? "Hablar conmigo directo" : "Talk to me directly" }}
              <span aria-hidden="true">→</span>
            </a>
            <a
              :href="siteConfig.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text font-semibold text-sm hover:dark:border-brand-500/40 hover:border-brand-500/50 transition-all"
            >
              <LucideIcon name="linkedin" class-name="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { siteConfig } from "../data/site.js";
import { useWhatsApp } from "../composables/useWhatsApp.js";
import LucideIcon from "./LucideIcon.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { locale } = useI18n();
const { linkFor } = useWhatsApp();

const callLink = computed(() => linkFor("call", locale.value));

// Auto-load founder photo from src/assets/img/founder
const photos = import.meta.glob(
  "../assets/img/founder/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);
const founderPhoto = computed(() => {
  const entries = Object.values(photos);
  return entries.length > 0 ? entries[0] : null;
});

const promises = [
  {
    icon: "user-circle",
    title: { es: "Trato directo con dev", en: "Direct line with dev" },
    desc: { es: "Sin pasar por 3 cuentas y un PM", en: "No 3 accounts and a PM in between" },
  },
  {
    icon: "shield-check",
    title: { es: "Demo antes de pagar", en: "Demo before paying" },
    desc: { es: "21 días para validar tu inversión", en: "21 days to validate your investment" },
  },
  {
    icon: "code-2",
    title: { es: "Código que tú puedes auditar", en: "Auditable code" },
    desc: { es: "Stack moderno, repos privados", en: "Modern stack, private repos" },
  },
  {
    icon: "trending-up",
    title: { es: "Pensado para vender", en: "Built to sell" },
    desc: { es: "CRO + UX + métricas desde día 1", en: "CRO + UX + metrics from day 1" },
  },
];
</script>
