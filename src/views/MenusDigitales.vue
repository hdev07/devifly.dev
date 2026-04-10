<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="utensils-crossed" class-name="w-4 h-4" />
        {{ locale === "es" ? "Menús Digitales" : "Digital Menus" }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{
          locale === "es"
            ? "Menús Digitales para Restaurantes"
            : "Digital Menus for Restaurants"
        }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{
          locale === "es"
            ? "Tu carta desde el celular del cliente. Elegante, rápida y siempre actualizada. Ideal para restaurantes pequeños, medianos y grandes."
            : "Your menu from the customer's phone. Elegant, fast and always up to date. Ideal for small, medium and large restaurants."
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
              #0a0a0a 0%,
              #1a1510 50%,
              #0f0d0a 100%
            );
          "
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div
                class="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style="
                  background: rgba(212, 175, 55, 0.08);
                  border: 1px solid rgba(212, 175, 55, 0.15);
                "
              >
                <LucideIcon
                  name="smartphone"
                  class-name="w-10 h-10"
                  style="color: #d4af37"
                />
              </div>
              <h3 class="text-white text-xl font-bold mb-2 font-display">
                Vista previa del menú
              </h3>
              <p class="text-neutral-500 text-sm mb-6 max-w-xs mx-auto">
                Experiencia mobile-first con animaciones premium y diseño
                elegante
              </p>
              <router-link
                to="/menus-digitales/demo"
                class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105"
                style="
                  background: linear-gradient(135deg, #d4af37, #c4a030);
                  color: #0a0a0a;
                  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
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

    <!-- Pricing grid -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
      <h2
        class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-4"
      >
        {{
          locale === "es"
            ? "Planes para cada tipo de restaurante"
            : "Plans for every restaurant type"
        }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted text-center mb-12 max-w-xl mx-auto text-sm"
      >
        {{
          locale === "es"
            ? "Desde food trucks hasta cadenas con múltiples sucursales."
            : "From food trucks to multi-location chains."
        }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Pequeño -->
        <div
          class="flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div class="p-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <LucideIcon name="store" class-name="w-5 h-5 text-amber-500" />
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
                  ? "Para restaurantes pequeños y food trucks"
                  : "For small restaurants & food trucks"
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$3,999</span
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
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
            <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">
              {{
                locale === "es"
                  ? "Hasta 30 platillos • Entrega 5 días hábiles"
                  : "Up to 30 dishes • 5 business days delivery"
              }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/menus-digitales/demo"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
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
              class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-brand-500 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Hire"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>

        <!-- Mediano — highlighted -->
        <div
          class="flex flex-col rounded-2xl border-2 border-brand-500 overflow-hidden relative"
          style="
            background: linear-gradient(
              145deg,
              rgba(59, 130, 246, 0.06),
              rgba(34, 211, 238, 0.04)
            );
          "
        >
          <div
            class="absolute top-0 right-0 py-1.5 px-4 bg-brand-500 text-white text-xs font-bold rounded-bl-xl"
          >
            <span class="inline-flex items-center gap-1"
              >{{ locale === "es" ? "Más popular" : "Most popular" }}
              <LucideIcon name="flame" class-name="w-3.5 h-3.5"
            /></span>
          </div>
          <div class="p-8 flex-1 pt-10">
            <div class="flex items-center gap-2 mb-1">
              <LucideIcon name="building" class-name="w-5 h-5 text-brand-500" />
              <h2
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                Profesional
              </h2>
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{
                locale === "es"
                  ? "Para restaurantes medianos y franquicias"
                  : "For medium restaurants & franchises"
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$7,999</span
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
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
            <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">
              {{
                locale === "es"
                  ? "Hasta 100 platillos • Entrega 7 días hábiles"
                  : "Up to 100 dishes • 7 business days delivery"
              }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/menus-digitales/demo"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500 text-white font-bold hover:bg-brand-600 transition text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
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
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ locale === "es" ? "Contratar" : "Hire"
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>

        <!-- Grande -->
        <div
          class="relative flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 py-1.5 px-4 bg-violet-500 text-white text-xs font-bold rounded-bl-xl z-10"
          >
            <span class="inline-flex items-center gap-1"
              >Enterprise <LucideIcon name="gem" class-name="w-3.5 h-3.5"
            /></span>
          </div>
          <div class="p-8 flex-1 pt-10">
            <div class="flex items-center gap-2 mb-1">
              <LucideIcon
                name="building-2"
                class-name="w-5 h-5 text-violet-400"
              />
              <h2
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                Enterprise
              </h2>
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{
                locale === "es"
                  ? "Para cadenas y grupos restauranteros"
                  : "For chains & restaurant groups"
              }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$14,999</span
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
                  ? "Platillos ilimitados • Entrega 10 días hábiles"
                  : "Unlimited dishes • 10 business days delivery"
              }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/menus-digitales/demo"
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

    <!-- Features comparison -->
    <div
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6"
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-12"
        >
          {{
            locale === "es"
              ? "¿Qué incluye cada plan?"
              : "What does each plan include?"
          }}
        </h2>
        <div
          class="overflow-x-auto rounded-2xl border dark:border-base-700/50 border-light-border"
        >
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b dark:border-base-700/50 border-light-border">
                <th
                  class="text-left py-4 px-6 dark:text-text-secondary text-light-muted font-medium"
                >
                  {{ locale === "es" ? "Característica" : "Feature" }}
                </th>
                <th
                  class="text-center py-4 px-4 dark:text-white text-light-text font-semibold whitespace-nowrap"
                >
                  Esencial
                </th>
                <th
                  class="text-center py-4 px-4 text-brand-500 font-semibold whitespace-nowrap"
                >
                  Profesional
                </th>
                <th
                  class="text-center py-4 px-4 text-violet-400 font-semibold whitespace-nowrap"
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.feature"
                class="border-b dark:border-base-700/30 border-light-border last:border-0 hover:bg-brand-500/5 transition-colors"
              >
                <td
                  class="py-3 px-6 dark:text-text-secondary text-light-muted whitespace-nowrap"
                >
                  {{ row.feature }}
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.small"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-light-muted dark:text-text-secondary"
                  />
                  <span v-else class="text-light-muted dark:text-text-secondary"
                    >-</span
                  >
                </td>
                <td class="py-3 px-4 text-center text-brand-500/90 font-medium">
                  <LucideIcon
                    v-if="row.medium"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-brand-500"
                  />
                  <span v-else>-</span>
                </td>
                <td
                  class="py-3 px-4 text-center text-violet-400/90 font-medium"
                >
                  <LucideIcon
                    v-if="row.large"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-violet-400"
                  />
                  <span v-else>-</span>
                </td>
              </tr>
            </tbody>
          </table>
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
            ? "¿Listo para digitalizar tu menú?"
            : "Ready to digitize your menu?"
        }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{
          locale === "es"
            ? "Tus clientes escanean un QR y acceden al menú completo desde su teléfono. Sin apps, sin descargas."
            : "Your customers scan a QR and access the full menu from their phone. No apps, no downloads."
        }}
      </p>
      <a
        :href="waCta"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{
          locale === "es" ? "Quiero mi menú digital" : "I want my digital menu"
        }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </a>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";

const { locale } = useI18n();

const waSmall = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Esencial ($3,999 MXN) 🍽️")}`;
const waMedium = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Profesional ($7,999 MXN) 🍽️")}`;
const waLarge = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Enterprise ($14,999 MXN) 🍽️")}`;
const waCta = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Quiero más información sobre los menús digitales para restaurantes 🍽️")}`;

const smallFeatures = computed(() =>
  locale.value === "es"
    ? [
        "Diseño mobile-first premium",
        "Hasta 30 platillos",
        "Categorías con fotos",
        "Precios actualizables",
        "QR code personalizado",
        "Dominio incluido (.devifly.dev)",
        "Deploy y hosting 1 año",
      ]
    : [
        "Premium mobile-first design",
        "Up to 30 dishes",
        "Categories with photos",
        "Updatable prices",
        "Custom QR code",
        "Domain included (.devifly.dev)",
        "Deploy & hosting 1 year",
      ],
);

const mediumFeatures = computed(() =>
  locale.value === "es"
    ? [
        "Todo del plan Esencial",
        "Hasta 100 platillos",
        "Subcategorías ilimitadas",
        "Sección de promociones con banner",
        "Buscador de productos",
        "Detalle con alérgenos y porciones",
        "Dominio personalizado (.com)",
        "Panel básico para editar platillos",
      ]
    : [
        "Everything in Esencial",
        "Up to 100 dishes",
        "Unlimited subcategories",
        "Promotions section with banners",
        "Product search",
        "Allergens & portions detail",
        "Custom domain (.com)",
        "Basic panel to edit dishes",
      ],
);

const largeFeatures = computed(() =>
  locale.value === "es"
    ? [
        "Todo del plan Profesional",
        "Platillos ilimitados",
        "Múltiples sucursales",
        "Panel de administración completo",
        "Multi-idioma (ES/EN)",
        "Analítica de platillos más vistos",
        "Integración con sistema POS",
        "Soporte prioritario 6 meses",
        "Diseño a medida con branding",
      ]
    : [
        "Everything in Profesional",
        "Unlimited dishes",
        "Multiple locations",
        "Full admin panel",
        "Multi-language (ES/EN)",
        "Most viewed dishes analytics",
        "POS system integration",
        "Priority support 6 months",
        "Custom branding design",
      ],
);

const comparisonRows = computed(() => {
  const es = locale.value === "es";
  return [
    {
      feature: es ? "Diseño mobile-first" : "Mobile-first design",
      small: true,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Categorías & fotos" : "Categories & photos",
      small: true,
      medium: true,
      large: true,
    },
    {
      feature: es ? "QR code" : "QR code",
      small: true,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Hosting & deploy" : "Hosting & deploy",
      small: true,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Subcategorías" : "Subcategories",
      small: false,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Sección de promociones" : "Promotions section",
      small: false,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Buscador" : "Search",
      small: false,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Alérgenos & porciones" : "Allergens & portions",
      small: false,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Dominio personalizado" : "Custom domain",
      small: false,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Panel de edición" : "Edit panel",
      small: false,
      medium: true,
      large: true,
    },
    {
      feature: es ? "Multi-sucursal" : "Multi-location",
      small: false,
      medium: false,
      large: true,
    },
    {
      feature: es ? "Multi-idioma" : "Multi-language",
      small: false,
      medium: false,
      large: true,
    },
    {
      feature: es ? "Analítica de platillos" : "Dish analytics",
      small: false,
      medium: false,
      large: true,
    },
    {
      feature: es ? "Integración POS" : "POS integration",
      small: false,
      medium: false,
      large: true,
    },
    {
      feature: es ? "Soporte prioritario" : "Priority support",
      small: false,
      medium: false,
      large: true,
    },
  ];
});
</script>
