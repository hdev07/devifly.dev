<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="tent" class-name="w-4 h-4" />
        {{ locale === "es" ? "Salones de Eventos" : "Event Venues" }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{
          locale === "es"
            ? "Webs para Salones, Terrazas, Jardines y Haciendas"
            : "Websites for Venues, Terraces, Gardens & Haciendas"
        }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{
          locale === "es"
            ? "Tu salón de eventos merece una presencia digital que lo represente. Galería impactante, cotizador automático y calendario de disponibilidad."
            : "Your event venue deserves a digital presence that represents it. Stunning gallery, automatic quote system and availability calendar."
        }}
      </p>
    </div>

    <!-- Demo preview -->
    <div class="max-w-4xl mx-auto px-6 mb-16">
      <div
        class="relative rounded-3xl overflow-hidden border dark:border-base-700/50 border-light-border group"
      >
        <div
          class="aspect-[9/16] sm:aspect-[3/4] md:aspect-[16/9] relative"
          style="
            background: linear-gradient(
              135deg,
              #0a1510 0%,
              #0f1a15 50%,
              #0a0f0d 100%
            );
          "
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div
                class="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style="
                  background: rgba(16, 185, 129, 0.08);
                  border: 1px solid rgba(16, 185, 129, 0.15);
                "
              >
                <LucideIcon
                  name="tent"
                  class-name="w-10 h-10"
                  style="color: #10b981"
                />
              </div>
              <h3 class="text-white text-xl font-bold mb-2 font-display">
                {{ locale === "es" ? "Vista previa del sitio" : "Site preview" }}
              </h3>
              <p class="text-neutral-500 text-sm mb-6 max-w-xs mx-auto">
                {{
                  locale === "es"
                    ? "Diseño elegante con galería inmersiva y cotizador inteligente"
                    : "Elegant design with immersive gallery and smart quote system"
                }}
              </p>
              <router-link
                to="/salones-eventos/demo"
                class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105"
                style="
                  background: linear-gradient(135deg, #10b981, #059669);
                  color: white;
                  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
                "
              >
                <LucideIcon name="eye" class-name="w-4 h-4" />
                {{ locale === "es" ? "Ver demo en vivo" : "View live demo" }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features highlight -->
    <div class="max-w-6xl mx-auto px-6 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.icon"
          class="p-6 rounded-2xl dark:bg-base-800/30 bg-light-surface border dark:border-base-700/40 border-light-border"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style="background: rgba(16, 185, 129, 0.1)"
          >
            <LucideIcon
              :name="feature.icon"
              class-name="w-6 h-6 text-emerald-500"
            />
          </div>
          <h3
            class="font-display text-lg font-bold dark:text-white text-light-text mb-2"
          >
            {{ locale === "es" ? feature.titleEs : feature.titleEn }}
          </h3>
          <p class="text-sm dark:text-text-secondary text-light-muted">
            {{ locale === "es" ? feature.descEs : feature.descEn }}
          </p>
        </div>
      </div>
    </div>

    <!-- Pricing grid -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
      <h2
        class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-4"
      >
        {{
          locale === "es"
            ? "Planes para cada tipo de salón"
            : "Plans for every venue type"
        }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted text-center mb-12 max-w-xl mx-auto text-sm"
      >
        {{
          locale === "es"
            ? "Desde jardines íntimos hasta grandes haciendas con múltiples espacios."
            : "From intimate gardens to large haciendas with multiple spaces."
        }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Esencial -->
        <div
          class="flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div class="p-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <LucideIcon name="home" class-name="w-5 h-5 text-emerald-500" />
              <h2
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                Esencial
              </h2>
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{
                locale === "es"
                  ? "Para salones pequeños y jardines"
                  : "For small venues & gardens"
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$5,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-3 mb-8">
              <li
                v-for="f in smallFeatures"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-emerald-500"
                />
                {{ f }}
              </li>
            </ul>
            <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">
              {{
                locale === "es"
                  ? "Hasta 20 fotos • Entrega 2 semanas"
                  : "Up to 20 photos • 2 weeks delivery"
              }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/salones-eventos/demo"
              class="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold hover:bg-emerald-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="eye" class-name="w-4 h-4" />{{
                  locale === "es" ? "Ver demo" : "View demo"
                }}</span
              >
            </router-link>
            <a
              :href="waSmall"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-emerald-500 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Hire"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>

        <!-- Pro — highlighted -->
        <div
          class="flex flex-col rounded-2xl border-2 border-emerald-500 overflow-hidden relative"
          style="
            background: linear-gradient(
              145deg,
              rgba(16, 185, 129, 0.06),
              rgba(20, 184, 166, 0.04)
            );
          "
        >
          <div
            class="absolute top-0 right-0 py-1.5 px-4 bg-emerald-500 text-white text-xs font-bold rounded-bl-xl"
          >
            <span class="inline-flex items-center gap-1">
              <LucideIcon name="star" class-name="w-3 h-3" />
              {{ locale === "es" ? "Más vendido" : "Best seller" }}
            </span>
          </div>
          <div class="p-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <LucideIcon name="building" class-name="w-5 h-5 text-emerald-500" />
              <h2
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                Pro
              </h2>
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{
                locale === "es"
                  ? "Para salones medianos y terrazas"
                  : "For mid-size venues & terraces"
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$9,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-3 mb-8">
              <li
                v-for="f in mediumFeatures"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-emerald-500"
                />
                {{ f }}
              </li>
            </ul>
            <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">
              {{
                locale === "es"
                  ? "Fotos ilimitadas + videos • Entrega 3 semanas"
                  : "Unlimited photos + videos • 3 weeks delivery"
              }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/salones-eventos/demo"
              class="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="eye" class-name="w-4 h-4" />{{
                  locale === "es" ? "Ver demo" : "View demo"
                }}</span
              >
            </router-link>
            <a
              :href="waMedium"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold hover:bg-emerald-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Hire"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>

        <!-- Premium -->
        <div
          class="flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div class="p-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <LucideIcon name="castle" class-name="w-5 h-5 text-violet-500" />
              <h2
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                Premium
              </h2>
              <span
                class="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >VIP</span
              >
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{
                locale === "es"
                  ? "Para haciendas y grandes espacios"
                  : "For haciendas & large venues"
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$16,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-3 mb-8">
              <li
                v-for="f in largeFeatures"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">
              {{
                locale === "es"
                  ? "Multi-salón • CRM completo • Entrega 4–5 semanas"
                  : "Multi-venue • Full CRM • 4–5 weeks delivery"
              }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/salones-eventos/demo"
              class="block w-full text-center px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="eye" class-name="w-4 h-4" />{{
                  locale === "es" ? "Ver demo" : "View demo"
                }}</span
              >
            </router-link>
            <a
              :href="waLarge"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Hire"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Use cases -->
    <div
      class="dark:bg-base-800/20 bg-light-card/30 border-y dark:border-base-700/30 border-light-border py-20"
    >
      <div class="max-w-6xl mx-auto px-6">
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-4"
        >
          {{
            locale === "es"
              ? "¿Para qué tipo de eventos es ideal?"
              : "What events is this ideal for?"
          }}
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted text-center mb-12 max-w-xl mx-auto text-sm"
        >
          {{
            locale === "es"
              ? "Tu sitio web estará optimizado para atraer clientes que buscan estos eventos."
              : "Your website will be optimized to attract customers looking for these events."
          }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="useCase in useCases"
            :key="useCase.icon"
            class="p-4 rounded-xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/40 border-light-border text-center"
          >
            <LucideIcon
              :name="useCase.icon"
              class-name="w-8 h-8 mx-auto mb-2 text-emerald-500"
            />
            <span
              class="text-sm font-medium dark:text-text-secondary text-light-muted"
            >
              {{ locale === "es" ? useCase.labelEs : useCase.labelEn }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4"
      >
        {{
          locale === "es"
            ? "¿Listo para llevar tu salón al siguiente nivel?"
            : "Ready to take your venue to the next level?"
        }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{
          locale === "es"
            ? "Agenda una llamada gratuita y te mostramos cómo podemos ayudarte."
            : "Schedule a free call and we'll show you how we can help."
        }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/salones-eventos/demo"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold hover:bg-emerald-500/20 transition-all"
        >
          <LucideIcon name="eye" class-name="w-4 h-4" />
          {{ locale === "es" ? "Ver demo" : "View demo" }}
        </router-link>
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
        >
          {{ locale === "es" ? "Cotizar ahora" : "Get a quote" }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";

const { locale } = useI18n();

const features = [
  {
    icon: "images",
    titleEs: "Galería Inmersiva",
    titleEn: "Immersive Gallery",
    descEs:
      "Fotos y videos de alta calidad que muestran cada rincón de tu espacio. Deja que las imágenes hablen por ti.",
    descEn:
      "High-quality photos and videos showcasing every corner of your space. Let the images speak for you.",
  },
  {
    icon: "calculator",
    titleEs: "Cotizador Automático",
    titleEn: "Automatic Quote System",
    descEs:
      "Tus clientes configuran su evento y reciben una cotización al instante. Ahorra horas de llamadas.",
    descEn:
      "Your clients configure their event and get an instant quote. Save hours of phone calls.",
  },
  {
    icon: "calendar-check",
    titleEs: "Calendario en Tiempo Real",
    titleEn: "Real-time Calendar",
    descEs:
      "Muestra disponibilidad actualizada. Los clientes ven fechas libres sin necesidad de llamar.",
    descEn:
      "Show updated availability. Clients see open dates without needing to call.",
  },
];

const smallFeatures = [
  "Diseño responsivo premium",
  "Galería de fotos (hasta 20)",
  "Formulario de contacto",
  "Integración WhatsApp",
  "Mapa de ubicación interactivo",
  "SEO local optimizado",
];

const mediumFeatures = [
  "Todo lo de Esencial",
  "Cotizador en línea automático",
  "Calendario de disponibilidad",
  "Galería con videos",
  "Sección de paquetes/servicios",
  "Blog de eventos realizados",
  "Google Calendar sync",
];

const largeFeatures = [
  "Todo lo de Pro",
  "Panel admin completo",
  "CRM de clientes integrado",
  "Pagos de anticipo en línea",
  "Contratos digitales",
  "Multi-salón / Sucursales",
  "Analíticas y reportes",
];

const useCases = [
  { icon: "heart", labelEs: "Bodas", labelEn: "Weddings" },
  { icon: "cake", labelEs: "XV Años", labelEn: "Quinceañeras" },
  { icon: "baby", labelEs: "Bautizos", labelEn: "Baptisms" },
  { icon: "graduation-cap", labelEs: "Graduaciones", labelEn: "Graduations" },
  { icon: "briefcase", labelEs: "Corporativos", labelEn: "Corporate" },
  { icon: "music", labelEs: "Fiestas", labelEn: "Parties" },
  { icon: "users", labelEs: "Reuniones", labelEn: "Gatherings" },
  { icon: "sparkles", labelEs: "Eventos VIP", labelEn: "VIP Events" },
];

const waBase = "https://wa.me/528000000000?text=";
const waSmall = `${waBase}${encodeURIComponent(
  "Hola, me interesa el plan Esencial para mi salón de eventos"
)}`;
const waMedium = `${waBase}${encodeURIComponent(
  "Hola, me interesa el plan Pro para mi salón de eventos"
)}`;
const waLarge = `${waBase}${encodeURIComponent(
  "Hola, me interesa el plan Premium para mi salón de eventos"
)}`;
</script>
