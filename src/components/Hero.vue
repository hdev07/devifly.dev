<template>
  <section class="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-20 sm:pt-28">
    <AmbientGlow variant="intense" :grid="true" />

    <!-- Decorative orbital ring -->
    <div aria-hidden="true" class="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[700px] h-[700px] rounded-full border dark:border-white/[0.04] border-light-border/40 hidden lg:block"></div>
    <div aria-hidden="true" class="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full border dark:border-white/[0.05] border-light-border/50 hidden lg:block"></div>

    <div class="relative max-w-7xl mx-auto px-6 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- LEFT: copy + CTAs -->
        <div class="lg:col-span-7 xl:col-span-7">
          <!-- Social-proof chip -->
          <div data-animate class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border backdrop-blur-md mb-7">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span class="text-[11px] font-semibold tracking-[0.18em] uppercase dark:text-text-secondary text-light-muted">
              {{ locale === "es" ? "+20 productos en producción · Disponible Q2" : "+20 products live · Available Q2" }}
            </span>
          </div>

          <!-- Headline -->
          <h1
            data-animate
            class="font-display font-bold leading-[1.02] tracking-tight dark:text-white text-light-text delay-100"
            style="font-size: clamp(2.4rem, 6.8vw, 5rem)"
          >
            {{ locale === "es" ? "Diseñamos" : "We design" }}
            <span class="text-gradient">
              {{ locale === "es" ? "software que genera" : "software that drives" }}
            </span>
            <br class="hidden sm:block" />
            <span class="relative inline-block">
              {{ locale === "es" ? "crecimiento" : "growth" }}.
              <svg class="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none">
                <path d="M2 8 Q 75 -2, 150 6 T 298 5" stroke="url(#hero-stroke)" stroke-width="3" stroke-linecap="round" fill="none" />
                <defs>
                  <linearGradient id="hero-stroke" x1="0" x2="300" y1="0" y2="0">
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <!-- Subtitle -->
          <p data-animate class="mt-7 text-base sm:text-lg dark:text-text-secondary text-light-muted leading-relaxed max-w-xl delay-200">
            {{
              locale === "es"
                ? "Productos digitales premium — landings, invitaciones, menús, catálogos y SaaS — construidos para convertir tráfico en clientes y operaciones manuales en sistemas."
                : "Premium digital products — landings, invitations, menus, catalogs, and SaaS — built to turn traffic into clients and manual operations into systems."
            }}
          </p>

          <!-- 3 CTAs -->
          <div data-animate class="mt-9 flex flex-wrap items-center gap-3 sm:gap-4 delay-300">
            <a
              :href="callLink"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-500 via-brand-500 to-cyan-glow text-white font-semibold text-sm shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_55px_rgba(59,130,246,0.55)] hover:brightness-110 transition-all"
            >
              {{ locale === "es" ? "Agendar llamada" : "Book a call" }}
              <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <router-link
              to="/products"
              class="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text font-semibold text-sm backdrop-blur-md hover:dark:border-brand-500/40 hover:border-brand-500/50 transition-all"
            >
              {{ locale === "es" ? "Ver productos" : "See products" }}
            </router-link>
            <router-link
              to="/case-studies"
              class="group inline-flex items-center gap-1.5 text-sm font-medium dark:text-text-secondary text-light-muted hover:dark:text-white hover:text-light-text transition-colors px-2 py-3"
            >
              {{ locale === "es" ? "Casos de éxito" : "Case studies" }}
              <span class="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </router-link>
          </div>

          <!-- Inline metrics -->
          <div data-animate class="mt-12 flex flex-wrap items-end gap-x-10 gap-y-6 delay-400">
            <div>
              <span class="font-display text-3xl sm:text-4xl font-bold text-gradient tabular-nums">+20</span>
              <p class="text-xs dark:text-text-secondary text-light-muted mt-1.5 uppercase tracking-[0.15em]">
                {{ locale === "es" ? "productos enviados" : "products shipped" }}
              </p>
            </div>
            <div class="w-px h-10 dark:bg-white/10 bg-light-border"></div>
            <div>
              <span class="font-display text-3xl sm:text-4xl font-bold text-gradient tabular-nums">5+</span>
              <p class="text-xs dark:text-text-secondary text-light-muted mt-1.5 uppercase tracking-[0.15em]">
                {{ locale === "es" ? "años construyendo" : "years building" }}
              </p>
            </div>
            <div class="w-px h-10 dark:bg-white/10 bg-light-border"></div>
            <div>
              <span class="font-display text-3xl sm:text-4xl font-bold text-gradient tabular-nums">21d</span>
              <p class="text-xs dark:text-text-secondary text-light-muted mt-1.5 uppercase tracking-[0.15em]">
                {{ locale === "es" ? "demo en vivo" : "live demo" }}
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT: floating preview cards -->
        <div class="lg:col-span-5 xl:col-span-5 relative h-[420px] sm:h-[520px] hidden md:block">
          <!-- Tech-stack chip floating card -->
          <div
            data-animate
            class="absolute top-0 right-0 w-[280px] tilt-card rounded-2xl border dark:border-white/10 border-light-border dark:bg-base-900/70 bg-light-surface/90 backdrop-blur-xl p-5 shadow-glass-hover delay-200 animate-float"
          >
            <div class="flex items-center gap-2 mb-3">
              <span class="block w-2 h-2 rounded-full bg-red-400/60"></span>
              <span class="block w-2 h-2 rounded-full bg-amber-400/60"></span>
              <span class="block w-2 h-2 rounded-full bg-emerald-400/60"></span>
              <span class="ml-2 text-[10px] uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted">stack.json</span>
            </div>
            <pre class="text-[11px] leading-relaxed font-mono dark:text-text-secondary text-light-muted"><span class="text-brand-400">{</span>
  <span class="text-cyan-glow">"frontend"</span>: <span class="dark:text-emerald-400 text-emerald-600">"Vue 3"</span>,
  <span class="text-cyan-glow">"backend"</span>: <span class="dark:text-emerald-400 text-emerald-600">"Node + NestJS"</span>,
  <span class="text-cyan-glow">"db"</span>: <span class="dark:text-emerald-400 text-emerald-600">"PostgreSQL"</span>,
  <span class="text-cyan-glow">"deploy"</span>: <span class="dark:text-emerald-400 text-emerald-600">"CI/CD ready"</span>
<span class="text-brand-400">}</span></pre>
          </div>

          <!-- Result metric card -->
          <div
            data-animate
            class="absolute top-[140px] left-0 w-[260px] tilt-card rounded-2xl border dark:border-brand-500/25 border-brand-500/30 dark:bg-base-900/75 bg-light-surface backdrop-blur-xl p-5 shadow-glass-hover delay-300"
          >
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-[10px] uppercase tracking-[0.18em] text-brand-400 font-semibold">{{ locale === "es" ? "Resultado" : "Result" }}</span>
              <LucideIcon name="trending-up" class-name="w-4 h-4 text-emerald-400" />
            </div>
            <div class="font-display font-bold text-3xl text-gradient leading-none mb-2">+45%</div>
            <p class="text-xs dark:text-text-secondary text-light-muted leading-relaxed">
              {{ locale === "es" ? "Aumento de leads tras rediseño de landing" : "Lift in leads after landing redesign" }}
            </p>
            <div class="mt-3 h-1.5 rounded-full dark:bg-white/5 bg-light-card overflow-hidden">
              <div class="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-500 to-cyan-glow"></div>
            </div>
          </div>

          <!-- Live demo card -->
          <div
            data-animate
            class="absolute bottom-0 right-4 w-[300px] tilt-card rounded-2xl border dark:border-white/10 border-light-border dark:bg-base-900/70 bg-light-surface/90 backdrop-blur-xl overflow-hidden shadow-glass-hover delay-500 animate-float"
            style="animation-delay: 1.2s"
          >
            <div class="flex items-center gap-2 px-4 py-2.5 dark:bg-base-800/60 bg-light-card border-b dark:border-white/8 border-light-border">
              <span class="block w-2 h-2 rounded-full bg-red-400/60"></span>
              <span class="block w-2 h-2 rounded-full bg-amber-400/60"></span>
              <span class="block w-2 h-2 rounded-full bg-emerald-400/60"></span>
              <span class="ml-2 text-[10px] dark:text-text-secondary text-light-muted truncate">demo.devifly.dev</span>
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[10px] uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted">Live</span>
                <span class="block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div class="flex flex-col gap-1.5">
                <div class="h-2 rounded-full dark:bg-white/8 bg-light-border w-full"></div>
                <div class="h-2 rounded-full dark:bg-white/8 bg-light-border w-3/4"></div>
                <div class="h-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-glow w-1/2 mt-2"></div>
              </div>
              <div class="mt-4 flex gap-2">
                <span class="px-2 py-0.5 rounded-full text-[9px] dark:bg-brand-500/15 bg-brand-500/10 text-brand-400 font-semibold uppercase tracking-wider">Vue 3</span>
                <span class="px-2 py-0.5 rounded-full text-[9px] dark:bg-cyan-glow/10 bg-cyan-500/10 dark:text-cyan-glow text-cyan-600 font-semibold uppercase tracking-wider">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 dark:text-text-secondary text-light-muted">
      <span class="text-[10px] uppercase tracking-[0.2em]">{{ locale === "es" ? "Scroll" : "Scroll" }}</span>
      <div class="w-px h-8 dark:bg-white/15 bg-light-border relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-brand-500 to-transparent animate-[scroll-down_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useWhatsApp } from "../composables/useWhatsApp.js";
import LucideIcon from "./LucideIcon.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { locale } = useI18n();
const { linkFor } = useWhatsApp();

const callLink = computed(() => linkFor("call", locale.value));
</script>

<style scoped>
@keyframes scroll-down {
  0% {
    transform: translateY(-100%);
  }
  60%,
  100% {
    transform: translateY(800%);
  }
}
</style>
