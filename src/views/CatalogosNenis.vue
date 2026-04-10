<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="shopping-bag" class-name="w-4 h-4" />
        {{
          locale === "es"
            ? "Catálogos Digitales para Nenis"
            : "Digital Catalogs for Sellers"
        }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{
          locale === "es"
            ? "Tu catálogo profesional para vender más por redes sociales"
            : "Your professional catalog to sell more on social media"
        }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto mb-8"
      >
        {{
          locale === "es"
            ? "Sube tus productos con fotos, controla tallas, precios y stock. Comparte tu catálogo por Facebook y WhatsApp y recibe pedidos al instante."
            : "Upload your products with photos, manage sizes, prices, and stock. Share your catalog on Facebook and WhatsApp and receive orders instantly."
        }}
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <router-link
          to="/catalogos-nenis/demo"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all"
        >
          <LucideIcon name="search" class-name="w-4 h-4" />
          {{ locale === "es" ? "Ver demo" : "View demo" }}
        </router-link>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-pink-500 transition"
        >
          {{ locale === "es" ? "Quiero el mío" : "I want mine" }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>

    <!-- Features -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feat in features"
          :key="feat.icon"
          class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
        >
          <div
            class="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4"
          >
            <LucideIcon :name="feat.icon" class-name="w-6 h-6 text-pink-500" />
          </div>
          <h3
            class="font-display text-lg font-bold dark:text-white text-light-text mb-2"
          >
            {{ locale === "es" ? feat.titleEs : feat.titleEn }}
          </h3>
          <p class="text-sm dark:text-text-secondary text-light-muted">
            {{ locale === "es" ? feat.descEs : feat.descEn }}
          </p>
        </div>
      </div>
    </div>

    <!-- Pricing -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text text-center mb-4"
      >
        {{ locale === "es" ? "Elige tu plan" : "Choose your plan" }}
      </h2>
      <p
        class="text-center dark:text-text-secondary text-light-muted mb-12 max-w-xl mx-auto"
      >
        {{
          locale === "es"
            ? "Desde lo básico hasta un catálogo con todo el poder para tu negocio."
            : "From basic to a full-powered catalog for your business."
        }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Básico -->
        <div
          class="flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div class="p-8 flex-1">
            <h3
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
            >
              {{ locale === "es" ? "Básico" : "Basic" }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para empezar a vender de forma profesional."
                  : "To start selling professionally."
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$1,499</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-3 mb-6">
              <li
                v-for="f in basicFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-pink-500"
                />
                {{ f }}
              </li>
            </ul>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/catalogos-nenis/demo"
              class="block w-full text-center px-4 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-500 font-semibold hover:bg-pink-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
              >
            </router-link>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-pink-500 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Get started"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
        </div>

        <!-- Pro — highlighted -->
        <div
          class="flex flex-col rounded-2xl border-2 border-pink-500 overflow-hidden relative"
          style="
            background: linear-gradient(
              145deg,
              rgba(236, 72, 153, 0.06),
              rgba(232, 121, 249, 0.04)
            );
          "
        >
          <div
            class="absolute top-0 right-0 py-1.5 px-4 bg-pink-500 text-white text-xs font-bold rounded-bl-xl"
          >
            <span class="inline-flex items-center gap-1"
              >{{ locale === "es" ? "Más popular" : "Most popular" }}
              <LucideIcon name="flame" class-name="w-3.5 h-3.5"
            /></span>
          </div>
          <div class="p-8 flex-1 pt-10">
            <h3
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
            >
              Pro
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para nenis que ya venden fuerte y quieren crecer."
                  : "For sellers already scaling up their business."
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$3,499</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-3 mb-6">
              <li
                v-for="f in proFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-pink-500"
                />
                {{ f }}
              </li>
            </ul>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/catalogos-nenis/demo"
              class="block w-full text-center px-4 py-2.5 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition text-sm shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
              >
            </router-link>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-500 font-semibold hover:bg-pink-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Get started"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
        </div>

        <!-- Premium -->
        <div
          class="flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div class="p-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                Premium
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >VIP</span
              >
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para negocios serios con múltiples vendedoras."
                  : "For serious businesses with multiple sellers."
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$6,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-3 mb-6">
              <li
                v-for="f in premiumFeats"
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
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/catalogos-nenis/demo"
              class="block w-full text-center px-4 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
              >
            </router-link>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Get started"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Bottom -->
    <div
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6 text-center"
    >
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4"
      >
        {{
          locale === "es" ? "¿Lista para vender más?" : "Ready to sell more?"
        }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{
          locale === "es"
            ? "Deja de perder ventas en los comentarios de Facebook. Tu catálogo profesional te espera."
            : "Stop losing sales in Facebook comments. Your professional catalog awaits."
        }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all"
      >
        {{ locale === "es" ? "Quiero mi catálogo" : "I want my catalog" }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";

const { locale } = useI18n();

const features = [
  {
    icon: "image-plus",
    titleEs: "Sube tus productos con fotos",
    titleEn: "Upload products with photos",
    descEs:
      "Agrega imágenes de tus productos desde tu celular. Fácil, rápido y sin complicaciones.",
    descEn: "Add product images from your phone. Easy, fast, and hassle-free.",
  },
  {
    icon: "ruler",
    titleEs: "Control de tallas y colores",
    titleEn: "Size & color management",
    descEs:
      "Organiza variantes como tallas (S, M, L, XL) y colores para cada producto.",
    descEn:
      "Organize variants like sizes (S, M, L, XL) and colors for each product.",
  },
  {
    icon: "package-check",
    titleEs: "Control de stock en tiempo real",
    titleEn: "Real-time stock control",
    descEs:
      "Sabe exactamente cuántas piezas tienes disponibles. Sin vender de más.",
    descEn: "Know exactly how many pieces you have available. No overselling.",
  },
  {
    icon: "tag",
    titleEs: "Precios y ofertas",
    titleEn: "Prices & offers",
    descEs:
      "Pon precios, descuentos y promociones. Tus clientas ven todo claro.",
    descEn:
      "Set prices, discounts, and promotions. Your customers see everything clearly.",
  },
  {
    icon: "share-2",
    titleEs: "Comparte por Facebook y WhatsApp",
    titleEn: "Share on Facebook & WhatsApp",
    descEs:
      "Un solo link que compartes en tus redes y tus clientas ven todo tu catálogo.",
    descEn:
      "One link you share on social media and customers see your full catalog.",
  },
  {
    icon: "smartphone",
    titleEs: "Diseño 100% móvil",
    titleEn: "100% mobile design",
    descEs:
      "Optimizado para celular. Tus clientas navegan y piden desde su teléfono.",
    descEn:
      "Optimized for mobile. Your customers browse and order from their phone.",
  },
];

const basicFeats = [
  "Hasta 50 productos",
  "1 categoría",
  "Galería de 2 fotos por producto",
  "Control de precios",
  "Link compartible",
  "Botón de WhatsApp",
  "Diseño responsive",
  "Entrega: 1 semana",
];

const proFeats = [
  "Todo lo del Básico",
  "Productos ilimitados",
  "Categorías ilimitadas",
  "Hasta 5 fotos por producto",
  "Control de tallas y colores",
  "Control de stock",
  "Buscador de productos",
  "Panel admin completo",
  "Entrega: 2 semanas",
];

const premiumFeats = [
  "Todo lo del Pro",
  "Múltiples vendedoras (catálogos)",
  "Cupones y descuentos",
  "Reportes de productos más vistos",
  "Dominio personalizado",
  "Notificaciones por WhatsApp",
  "Integración con pagos en línea",
  "Soporte prioritario",
  "Entrega: 3–4 semanas",
];
</script>
