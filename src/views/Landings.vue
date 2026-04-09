<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="rocket" class-name="w-4 h-4" />
        Landing Pages
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        Landings que generan resultados reales
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        Desde una landing SaaS de venta agresiva hasta una página de comunidad
        para un podcast. Diseñamos páginas con propósito: conversión, impacto y
        velocidad.
      </p>
    </div>

    <!-- Examples -->
    <div class="max-w-7xl mx-auto px-6 mb-24 space-y-8">
      <!-- MoviBase -->
      <div
        class="rounded-3xl border dark:border-base-700/50 border-light-border overflow-hidden lg:grid lg:grid-cols-2 items-stretch"
      >
        <!-- Left info -->
        <div
          class="p-10 flex flex-col justify-between dark:bg-base-800/30 bg-light-surface"
        >
          <div>
            <div class="flex items-center gap-3 mb-6">
              <span
                class="w-10 h-10 rounded-xl flex items-center justify-center text-xl dark:bg-base-700/60 bg-light-card border dark:border-base-600/50 border-light-border"
                ><LucideIcon name="bus" class-name="w-5 h-5"
              /></span>
              <div>
                <h2
                  class="font-display text-2xl font-bold dark:text-white text-light-text"
                >
                  MoviBase
                </h2>
                <p class="text-xs dark:text-text-secondary text-light-muted">
                  movibase.com
                </p>
              </div>
            </div>
            <p
              class="dark:text-text-secondary text-light-muted mb-6 leading-relaxed"
            >
              Landing para un SaaS de control de flotas vehiculares. Diseñada
              para comunicar autoridad, captar leads B2B y convertir visitantes
              en demos. Cada sección resuelve una objeción estratégica:
              confianza, escalabilidad y ROI.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in moviTags"
                :key="tag"
                class="text-xs px-3 py-1 rounded-full dark:bg-base-700/60 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-600/50 border-light-border"
                >{{ tag }}</span
              >
            </div>
          </div>
          <a
            href="https://movibase.com/"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold text-sm hover:bg-brand-600 transition self-start"
          >
            Ver sitio en vivo
            <LucideIcon name="external-link" class-name="w-4 h-4" />
          </a>
        </div>
        <!-- Right preview mock -->
        <div
          class="relative min-h-64 lg:min-h-0 overflow-hidden flex items-center justify-center p-6"
          style="background: linear-gradient(135deg, #0b1120, #111827)"
        >
          <div class="w-full max-w-sm">
            <!-- Browser mockup -->
            <div
              class="rounded-2xl border border-brand-500/20 overflow-hidden shadow-2xl shadow-brand-500/10"
            >
              <div
                class="flex items-center gap-2 px-4 py-2.5 border-b border-brand-500/10"
                style="background: #0b1120"
              >
                <div class="flex gap-1">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-amber-400/60"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
                </div>
                <div
                  class="flex-1 mx-3 py-1 px-3 rounded-md text-xs text-brand-500/60 border border-brand-500/10"
                  style="background: rgba(59, 130, 246, 0.05)"
                >
                  movibase.com
                </div>
              </div>
              <div
                class="p-6"
                style="background: linear-gradient(135deg, #060d1a, #0b1120)"
              >
                <p
                  class="text-xs text-brand-400/60 tracking-widest uppercase mb-2"
                >
                  Control de flotas
                </p>
                <h3
                  class="font-display text-lg font-bold text-white leading-tight mb-3"
                >
                  Gestiona tu flota<br /><span class="text-brand-500"
                    >en tiempo real</span
                  >
                </h3>
                <div class="flex gap-2 mb-4">
                  <div
                    class="flex-1 py-2 rounded-lg text-xs font-semibold text-center text-white"
                    style="
                      background: linear-gradient(135deg, #3b82f6, #2563eb);
                    "
                  >
                    Solicitar Demo
                  </div>
                  <div
                    class="flex-1 py-2 rounded-lg text-xs font-semibold text-center border border-brand-500/30 text-brand-500"
                  >
                    Ver Planes
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div
                    v-for="stat in moviStats"
                    :key="stat.val"
                    class="rounded-lg p-2 text-center border border-brand-500/10"
                    style="background: rgba(59, 130, 246, 0.05)"
                  >
                    <p class="text-sm font-bold text-brand-400">
                      {{ stat.val }}
                    </p>
                    <p class="text-[9px] text-white/30">{{ stat.label }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Confecdotario -->
      <div
        class="rounded-3xl border dark:border-base-700/50 border-light-border overflow-hidden lg:grid lg:grid-cols-2 items-stretch"
      >
        <!-- Left: preview mockup -->
        <div
          class="relative min-h-64 lg:min-h-0 order-2 lg:order-1 overflow-hidden flex items-center justify-center p-6"
          style="background: linear-gradient(135deg, #1a0a2e, #12071f)"
        >
          <div class="w-full max-w-sm">
            <div
              class="rounded-2xl border border-violet-500/20 overflow-hidden shadow-2xl shadow-violet-500/10"
            >
              <div
                class="flex items-center gap-2 px-4 py-2.5 border-b border-violet-500/10"
                style="background: #1a0a2e"
              >
                <div class="flex gap-1">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-amber-400/60"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
                </div>
                <div
                  class="flex-1 mx-3 py-1 px-3 rounded-md text-xs text-violet-400/60 border border-violet-500/10"
                  style="background: rgba(139, 92, 246, 0.05)"
                >
                  app-confecdotario.devifly.dev
                </div>
              </div>
              <div
                class="p-6"
                style="background: linear-gradient(135deg, #12071f, #1a0a2e)"
              >
                <p
                  class="text-xs text-violet-400/60 tracking-widest uppercase mb-2"
                >
                  La Cotorrisa
                </p>
                <h3
                  class="font-display text-lg font-bold text-white leading-tight mb-3"
                >
                  Comparte tu
                  <span class="text-violet-400">anécdota</span> anónima
                </h3>
                <div
                  class="rounded-xl border border-violet-500/10 p-3 mb-3"
                  style="background: rgba(139, 92, 246, 0.07)"
                >
                  <p class="text-xs text-white/60 italic">
                    "Una vez en el OXXO me preguntaron si era…"
                  </p>
                  <div class="flex items-center gap-3 mt-2">
                    <span
                      class="text-xs text-violet-400 inline-flex items-center gap-1"
                      ><LucideIcon
                        name="sparkles"
                        class-name="w-3.5 h-3.5"
                      />247</span
                    >
                    <span
                      class="text-xs text-violet-400 inline-flex items-center gap-1"
                      ><LucideIcon
                        name="message-circle"
                        class-name="w-3.5 h-3.5"
                      />18</span
                    >
                    <span class="text-xs text-white/20">anónimo</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <div
                    class="flex-1 py-2 rounded-lg text-xs font-semibold text-center text-white"
                    style="
                      background: linear-gradient(135deg, #7c3aed, #4f46e5);
                    "
                  >
                    Publicar Anécdota
                  </div>
                  <div
                    class="flex-1 py-2 rounded-lg text-xs font-semibold text-center border border-violet-500/30 text-violet-400"
                  >
                    <span class="inline-flex items-center gap-1 justify-center">
                      Trending
                      <LucideIcon name="flame" class-name="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right info -->
        <div
          class="p-10 flex flex-col justify-between dark:bg-base-800/30 bg-light-surface order-1 lg:order-2"
        >
          <div>
            <div class="flex items-center gap-3 mb-6">
              <span
                class="w-10 h-10 rounded-xl flex items-center justify-center text-xl dark:bg-base-700/60 bg-light-card border dark:border-base-600/50 border-light-border"
                ><LucideIcon name="mic" class-name="w-5 h-5"
              /></span>
              <div>
                <h2
                  class="font-display text-2xl font-bold dark:text-white text-light-text"
                >
                  Confecdotario
                </h2>
                <p class="text-xs dark:text-text-secondary text-light-muted">
                  app-confecdotario.devifly.dev
                </p>
              </div>
            </div>
            <p
              class="dark:text-text-secondary text-light-muted mb-6 leading-relaxed"
            >
              Landing y red social para la comunidad del podcast
              <strong class="dark:text-white text-light-text"
                >La Cotorrisa</strong
              >. El diseño comunica diversión, anonimato e identidad de fans.
              Página de presentación + embed hacia la app completa con feed
              infinito, gamificación y modo offline.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in cotorTags"
                :key="tag"
                class="text-xs px-3 py-1 rounded-full dark:bg-base-700/60 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-600/50 border-light-border"
                >{{ tag }}</span
              >
            </div>
          </div>
          <div class="flex gap-3">
            <a
              href="https://app-confecdotario.devifly.dev"
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 transition"
            >
              Ver sitio en vivo
              <LucideIcon name="external-link" class-name="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- What's included -->
    <div
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6"
    >
      <div class="max-w-5xl mx-auto">
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-12"
        >
          ¿Qué incluye una landing de Devifly?
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in includes"
            :key="item.title"
            class="p-6 rounded-2xl dark:bg-base-900/50 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <LucideIcon
              :name="item.icon"
              class-name="w-8 h-8 mb-3 text-brand-500"
            />
            <h3 class="font-semibold dark:text-white text-light-text mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4"
      >
        ¿Tu proyecto necesita una landing?
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        Cuéntanos la idea, el público y el objetivo. Te entregamos propuesta en
        24 horas.
      </p>
      <a
        :href="waLanding"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        Iniciar mi proyecto
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </a>
    </div>
  </main>
</template>

<script setup>
import LucideIcon from "../components/LucideIcon.vue";

const waLanding = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Me interesa una Landing Page para mi proyecto. ¿Pueden darme más información? 🚀")}`;

const moviTags = [
  "SaaS B2B",
  "Captación de Leads",
  "Dark Theme",
  "Alta Conversión",
  "Vue 3",
];
const cotorTags = [
  "Comunidad",
  "Podcast",
  "PWA",
  "Feed Social",
  "Vue 3 + NestJS",
];

const moviStats = [
  { val: "27+", label: "Módulos" },
  { val: "10K+", label: "Vehículos" },
  { val: "99.9%", label: "Uptime" },
];

const includes = [
  {
    icon: "zap",
    title: "Velocidad Lighthouse 90+",
    desc: "Carga ultra rápida, bien valorada por Google y los visitantes.",
  },
  {
    icon: "smartphone",
    title: "100% Responsiva",
    desc: "Se ve impecable en móvil, tablet y desktop.",
  },
  {
    icon: "palette",
    title: "Diseño Premium",
    desc: "Glassmorphism, gradientes, microanimaciones y tipografía moderna.",
  },
  {
    icon: "search",
    title: "SEO Optimizado",
    desc: "Meta tags, schema markup, Open Graph y estructura semántica.",
  },
  {
    icon: "chart-pie",
    title: "Analytics listo",
    desc: "Integración con Google Analytics o Plausible desde el primer día.",
  },
  {
    icon: "external-link",
    title: "Dominio + Deploy",
    desc: "Configuración completa en tu dominio o subdominio de devifly.",
  },
];
</script>
