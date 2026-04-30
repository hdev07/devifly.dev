<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
        <SectionHeader
          class="!mb-0"
          :eyebrow="locale === 'es' ? 'Casos de Éxito' : 'Case Studies'"
          :title="locale === 'es' ? 'Productos reales con métricas reales' : 'Real products with real metrics'"
          :subtitle="locale === 'es'
            ? 'No vendemos humo. Tres historias de cómo el producto correcto cambió el negocio.'
            : 'We do not sell smoke. Three stories of how the right product changed the business.'"
        />
        <router-link
          to="/case-studies"
          class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text text-sm font-semibold hover:dark:border-brand-500/40 hover:border-brand-500/50 backdrop-blur-md whitespace-nowrap transition-all"
        >
          {{ locale === "es" ? "Ver todos los casos" : "See all cases" }}
          <span aria-hidden="true">→</span>
        </router-link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        <article
          v-for="(study, i) in cases"
          :key="study.key"
          data-animate
          :class="[
            i === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5',
            `delay-${(i + 1) * 100}`,
          ]"
          class="group relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
        >
          <!-- Visual top -->
          <div
            class="relative overflow-hidden"
            :class="i === 0 ? 'h-64 sm:h-80' : 'h-44'"
          >
            <div class="absolute inset-0" :class="study.gradient"></div>
            <!-- Mesh pattern -->
            <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(circle at 20% 80%, rgba(59,130,246,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.5) 0%, transparent 50%);"></div>
            <!-- Centered icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <div class="absolute inset-0 rounded-full blur-3xl" :class="study.glow"></div>
                <div
                  class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center backdrop-blur-md border dark:border-white/15 border-white/30"
                  :class="study.iconBg"
                >
                  <LucideIcon :name="study.icon" :class-name="`${i === 0 ? 'w-12 h-12' : 'w-10 h-10'} ${study.iconColor}`" />
                </div>
              </div>
            </div>
            <!-- Tags -->
            <div class="absolute top-4 left-4 flex flex-wrap gap-1.5">
              <span
                v-for="tag in study.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider dark:bg-base-900/70 bg-white/70 backdrop-blur-md border dark:border-white/10 border-light-border dark:text-white text-light-text"
              >
                {{ tag }}
              </span>
            </div>
            <!-- Big metric overlay (only on featured) -->
            <div v-if="i === 0" class="absolute bottom-4 right-4 text-right">
              <div class="font-display text-5xl sm:text-6xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                {{ study.metric }}
              </div>
              <div class="text-xs uppercase tracking-[0.2em] text-white/85 font-semibold">
                {{ study.metricLabel[locale] }}
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 sm:p-7 flex flex-col gap-4">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="font-display text-xl sm:text-2xl font-bold dark:text-white text-light-text">
                  {{ study.name }}
                </span>
                <a
                  v-if="study.link"
                  :href="study.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <LucideIcon name="arrow-up-right" class-name="w-3.5 h-3.5" />
                </a>
              </div>
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                {{ study.summary[locale] }}
              </p>
            </div>

            <!-- Story: Problem -> Solution -> Result -->
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <LucideIcon name="x" class-name="w-3.5 h-3.5 dark:text-red-400 text-red-500 mt-1 shrink-0" />
                <p class="dark:text-text-secondary text-light-muted">
                  <span class="font-semibold dark:text-white text-light-text">{{ locale === "es" ? "Problema:" : "Problem:" }}</span>
                  {{ study.problem[locale] }}
                </p>
              </div>
              <div class="flex items-start gap-2">
                <LucideIcon name="zap" class-name="w-3.5 h-3.5 text-brand-400 mt-1 shrink-0" />
                <p class="dark:text-text-secondary text-light-muted">
                  <span class="font-semibold dark:text-white text-light-text">{{ locale === "es" ? "Solución:" : "Solution:" }}</span>
                  {{ study.solution[locale] }}
                </p>
              </div>
              <div class="flex items-start gap-2">
                <LucideIcon name="trending-up" class-name="w-3.5 h-3.5 text-emerald-400 mt-1 shrink-0" />
                <p class="dark:text-text-secondary text-light-muted">
                  <span class="font-semibold dark:text-white text-light-text">{{ locale === "es" ? "Resultado:" : "Result:" }}</span>
                  {{ study.result[locale] }}
                </p>
              </div>
            </div>

            <!-- Featured metrics row (only on featured) -->
            <div v-if="i === 0" class="grid grid-cols-3 gap-3 mt-2 pt-4 border-t dark:border-white/8 border-light-border">
              <div v-for="kpi in study.kpis" :key="kpi.label">
                <div class="font-display text-2xl font-bold text-gradient tabular-nums">{{ kpi.value }}</div>
                <div class="text-[10px] uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mt-1">
                  {{ kpi.label[locale] }}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div data-animate class="text-center mt-10 lg:hidden">
        <router-link
          to="/case-studies"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text text-sm font-semibold hover:dark:border-brand-500/40 transition-all"
        >
          {{ locale === "es" ? "Ver todos los casos" : "See all cases" }}
          <span aria-hidden="true">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { locale } = useI18n();

const cases = [
  {
    key: "movibase",
    name: "MoviBase",
    icon: "truck",
    iconBg: "bg-brand-500/20",
    iconColor: "text-white",
    glow: "bg-brand-500/40",
    gradient: "bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-glow",
    tags: ["SaaS", "B2B", "GPS"],
    metric: "27",
    metricLabel: { es: "Módulos integrados", en: "Integrated modules" },
    summary: {
      es: "Plataforma SaaS de control operativo y financiero de flotas vehiculares para Latinoamérica.",
      en: "SaaS platform for operational and financial fleet control across Latin America.",
    },
    problem: {
      es: "Empresas de transporte gestionaban GPS, mantenimiento y combustible en hojas de cálculo.",
      en: "Transport companies managed GPS, maintenance, and fuel via spreadsheets.",
    },
    solution: {
      es: "Sistema multi-tenant con GPS en tiempo real, geocercas PostGIS y dashboards financieros.",
      en: "Multi-tenant system with real-time GPS, PostGIS geofences, and financial dashboards.",
    },
    result: {
      es: "Operaciones de 10 a miles de vehículos centralizadas con datos confiables.",
      en: "Operations from 10 to thousands of vehicles centralized with reliable data.",
    },
    link: "https://movibase.com/",
    kpis: [
      { value: "10k+", label: { es: "Vehículos", en: "Vehicles" } },
      { value: "99.9%", label: { es: "Uptime", en: "Uptime" } },
      { value: "<200ms", label: { es: "Respuesta API", en: "API response" } },
    ],
  },
  {
    key: "confecdotario",
    name: "Confecdotario",
    icon: "message-square",
    iconBg: "bg-pink-500/20",
    iconColor: "text-white",
    glow: "bg-pink-500/40",
    gradient: "bg-gradient-to-br from-pink-600 via-fuchsia-500 to-violet-soft",
    tags: ["PWA", "Comunidad"],
    metric: "+180%",
    metricLabel: { es: "Engagement", en: "Engagement" },
    summary: {
      es: "Red social de anécdotas para la comunidad del podcast La Cotorrisa.",
      en: "Anecdote social network for the La Cotorrisa podcast community.",
    },
    problem: {
      es: "La comunidad solo podía interactuar en redes sociales saturadas y sin moderación.",
      en: "The community could only interact on saturated, unmoderated social networks.",
    },
    solution: {
      es: "PWA con feed infinito, gamificación con medallas y notificaciones en tiempo real.",
      en: "PWA with infinite feed, badge gamification, and real-time notifications.",
    },
    result: {
      es: "Aumento sostenido de engagement y comunidad propia controlada por la marca.",
      en: "Sustained engagement growth and a community owned by the brand.",
    },
    link: "https://app-confecdotario.devifly.dev/",
  },
  {
    key: "musion",
    name: "Musion",
    icon: "landmark",
    iconBg: "bg-violet-500/20",
    iconColor: "text-white",
    glow: "bg-violet-500/40",
    gradient: "bg-gradient-to-br from-violet-600 via-violet-500 to-cyan-glow",
    tags: ["PWA", "Geo", "E-commerce"],
    metric: "+50",
    metricLabel: { es: "Tablas en BD", en: "DB tables" },
    summary: {
      es: "PWA que conecta visitantes con museos mediante geolocalización inteligente.",
      en: "PWA connecting visitors with museums via intelligent geolocation.",
    },
    problem: {
      es: "Los museos perdían visitantes por falta de información contextual y ofertas digitales.",
      en: "Museums lost visitors due to lack of contextual info and digital offerings.",
    },
    solution: {
      es: "Búsquedas geoespaciales con PostGIS, e-commerce cultural y modo offline con Workbox.",
      en: "Geospatial search with PostGIS, cultural e-commerce, and offline mode with Workbox.",
    },
    result: {
      es: "Visitantes informados y monetización vía tienda cultural integrada.",
      en: "Informed visitors and monetization via integrated cultural store.",
    },
    link: "https://musion.day/",
  },
];
</script>
