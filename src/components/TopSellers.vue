<template>
  <section class="py-24 sm:py-32 relative overflow-hidden">
    <!-- Glow background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div data-animate class="mb-14">
        <div class="flex items-center gap-3 mb-4">
          <span class="block w-8 h-px dark:bg-brand-500 bg-brand-600"></span>
          <span
            class="text-xs font-semibold tracking-[0.18em] uppercase text-brand-400"
          >
            {{ locale === "es" ? "Lo más vendido" : "Top Sellers" }}
          </span>
        </div>
        <h2
          class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-light-text mb-4 leading-tight"
        >
          {{
            locale === "es"
              ? "Soluciones que nuestros clientes aman"
              : "Solutions our clients love"
          }}
        </h2>
        <p
          class="text-lg dark:text-text-secondary text-light-muted max-w-2xl leading-relaxed"
        >
          {{
            locale === "es"
              ? "Productos digitales listos para impulsar tu negocio. Precios accesibles, calidad premium."
              : "Digital products ready to boost your business. Affordable prices, premium quality."
          }}
        </p>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(product, index) in topProducts"
          :key="product.key"
          data-animate
          class="group relative flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden transition-all duration-500 hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        >
          <!-- Popular badge -->
          <div
            v-if="product.popular"
            class="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider"
          >
            <LucideIcon name="flame" class-name="w-3 h-3" />
            {{ locale === "es" ? "Popular" : "Popular" }}
          </div>

          <!-- Preview image area -->
          <div class="relative h-44 overflow-hidden">
            <div
              class="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
              :class="product.bgGradient"
            >
              <LucideIcon
                :name="product.icon"
                class-name="w-14 h-14 opacity-20"
              />
            </div>
            <!-- Overlay gradient -->
            <div
              class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t dark:from-base-800/90 from-light-surface/90 to-transparent"
            ></div>
            <!-- Category pill -->
            <div class="absolute bottom-3 left-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider dark:bg-base-900/80 bg-white/80 backdrop-blur-sm"
                :class="product.accentText"
              >
                <LucideIcon :name="product.icon" class-name="w-3 h-3" />
                {{ locale === "es" ? product.categoryEs : product.categoryEn }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1 p-5">
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-2 leading-snug"
            >
              {{ locale === "es" ? product.titleEs : product.titleEn }}
            </h3>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed mb-4 flex-1 line-clamp-2"
            >
              {{ locale === "es" ? product.descEs : product.descEn }}
            </p>

            <!-- Features mini list -->
            <ul class="space-y-1.5 mb-5">
              <li
                v-for="feat in locale === 'es'
                  ? product.featuresEs
                  : product.featuresEn"
                :key="feat"
                class="flex items-center gap-2 text-xs dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-3.5 h-3.5 text-brand-500 shrink-0"
                />
                {{ feat }}
              </li>
            </ul>

            <!-- Price + CTA -->
            <div
              class="pt-4 border-t dark:border-base-700/30 border-light-border"
            >
              <div class="flex items-end justify-between gap-3 mb-3">
                <div>
                  <span
                    class="block text-[10px] font-medium uppercase tracking-wider dark:text-text-secondary text-light-muted mb-0.5"
                  >
                    {{ locale === "es" ? "Desde" : "From" }}
                  </span>
                  <span
                    class="font-display text-xl font-bold dark:text-white text-light-text"
                  >
                    {{ locale === "es" ? product.priceEs : product.priceEn }}
                  </span>
                </div>
              </div>
              <div class="flex gap-2">
                <router-link
                  :to="product.link"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold text-xs hover:bg-brand-500/20 transition"
                >
                  {{ locale === "es" ? "Ver más" : "Learn more" }}
                  <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />
                </router-link>
                <router-link
                  v-if="product.demoLink"
                  :to="product.demoLink"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-xs hover:border-brand-500/50 hover:text-brand-500 transition"
                >
                  <LucideIcon name="play" class-name="w-3.5 h-3.5" />
                  {{ locale === "es" ? "Ver demo" : "View demo" }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div data-animate class="text-center mt-14">
        <p class="dark:text-text-secondary text-light-muted text-sm mb-5">
          {{
            locale === "es"
              ? "¿No encuentras lo que buscas? Tenemos más de 20 productos digitales."
              : "Can't find what you need? We have 20+ digital products."
          }}
        </p>
        <router-link
          to="/products"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-base-800/60 bg-light-card border dark:border-base-700/50 border-light-border dark:text-text-primary text-light-text font-semibold text-sm hover:border-brand-500/50 transition-all duration-300"
        >
          {{
            locale === "es" ? "Ver todos los productos" : "View all products"
          }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";

const { locale } = useI18n();

const topProducts = [
  {
    key: "landings",
    icon: "layout",
    link: "/landings",
    demoLink: "/landings/demo",
    popular: false,
    bgGradient:
      "bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-cyan-500/10",
    accentText: "text-brand-400",
    categoryEs: "Sitios web",
    categoryEn: "Websites",
    titleEs: "Landing Pages",
    titleEn: "Landing Pages",
    descEs:
      "Páginas de aterrizaje optimizadas para conversiones. Diseño premium, velocidad y SEO incluido.",
    descEn:
      "Conversion-optimized landing pages. Premium design, speed and SEO included.",
    featuresEs: [
      "Diseño responsive premium",
      "SEO optimizado",
      "Formulario de contacto",
      "Entrega en 5 días",
    ],
    featuresEn: [
      "Premium responsive design",
      "SEO optimized",
      "Contact form",
      "5-day delivery",
    ],
    priceEs: "$4,999 MXN",
    priceEn: "$299 USD",
  },
  {
    key: "invitaciones",
    icon: "party-popper",
    link: "/invitaciones",
    demoLink: "/invitaciones/esencial",
    popular: true,
    bgGradient:
      "bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-purple-500/10",
    accentText: "dark:text-pink-400 text-pink-600",
    categoryEs: "Eventos",
    categoryEn: "Events",
    titleEs: "Invitaciones Digitales",
    titleEn: "Digital Invitations",
    descEs:
      "Invitaciones interactivas para bodas, XV años, bautizos y más. Con RSVP, mapa y música.",
    descEn:
      "Interactive invitations for weddings, quinceañeras, baptisms and more. With RSVP, map & music.",
    featuresEs: [
      "Animaciones premium",
      "RSVP integrado",
      "Mapa interactivo",
      "Contador de días",
    ],
    featuresEn: [
      "Premium animations",
      "Integrated RSVP",
      "Interactive map",
      "Countdown timer",
    ],
    priceEs: "$499 MXN",
    priceEn: "$29 USD",
  },
  {
    key: "catalogos",
    icon: "shopping-bag",
    link: "/catalogos-nenis",
    demoLink: "/catalogos-nenis/demo",
    popular: false,
    bgGradient:
      "bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-fuchsia-500/10",
    accentText: "dark:text-violet-400 text-violet-600",
    categoryEs: "E-commerce",
    categoryEn: "E-commerce",
    titleEs: "Catálogos de Productos",
    titleEn: "Product Catalogs",
    descEs:
      "Catálogo digital para exhibir tus productos con carrito, pedidos por WhatsApp y gestión simple.",
    descEn:
      "Digital catalog to showcase your products with cart, WhatsApp orders and simple management.",
    featuresEs: [
      "Catálogo responsive",
      "Pedidos por WhatsApp",
      "Panel de administración",
      "Personalización completa",
    ],
    featuresEn: [
      "Responsive catalog",
      "WhatsApp orders",
      "Admin panel",
      "Full customization",
    ],
    priceEs: "$1,499 MXN",
    priceEn: "$89 USD",
  },
  {
    key: "menus",
    icon: "utensils-crossed",
    link: "/menus-digitales",
    demoLink: "/menus-digitales/demo",
    popular: false,
    bgGradient:
      "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-yellow-500/10",
    accentText: "dark:text-amber-400 text-amber-600",
    categoryEs: "Restaurantes",
    categoryEn: "Restaurants",
    titleEs: "Menús para Restaurantes",
    titleEn: "Restaurant Menus",
    descEs:
      "Menú digital elegante con categorías, búsqueda, fotos de platillos y acceso por QR.",
    descEn:
      "Elegant digital menu with categories, search, dish photos and QR access.",
    featuresEs: [
      "Diseño elegante premium",
      "Acceso por código QR",
      "Categorías y búsqueda",
      "Actualización en tiempo real",
    ],
    featuresEn: [
      "Premium elegant design",
      "QR code access",
      "Categories & search",
      "Real-time updates",
    ],
    priceEs: "$3,999 MXN",
    priceEn: "$229 USD",
  },
  {
    key: "salones-eventos",
    icon: "tent",
    link: "/salones-eventos",
    demoLink: "/salones-eventos/demo",
    popular: true,
    bgGradient:
      "bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-green-500/10",
    accentText: "dark:text-emerald-400 text-emerald-600",
    categoryEs: "Eventos",
    categoryEn: "Events",
    titleEs: "Web para Salones de Eventos",
    titleEn: "Event Venue Website",
    descEs:
      "Sitio profesional para salones, terrazas, jardines y haciendas. Con galería, cotizador y calendario.",
    descEn:
      "Professional site for venues, terraces, gardens and haciendas. With gallery, quote system and calendar.",
    featuresEs: [
      "Galería de fotos/videos",
      "Cotizador en línea",
      "Calendario disponibilidad",
      "Integración WhatsApp",
    ],
    featuresEn: [
      "Photo/video gallery",
      "Online quote system",
      "Availability calendar",
      "WhatsApp integration",
    ],
    priceEs: "$5,999 MXN",
    priceEn: "$349 USD",
  },
];
</script>
