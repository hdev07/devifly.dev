<script setup>
/**
 * Landing: Menús Interactivos para Restaurantes
 * Estilo visual: Spotify — colores vibrantes, backgrounds sólidos, rounded shapes, bold y playful
 */
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Tengo un restaurante y me interesa el menú digital interactivo 🍽️")}`;
const waContratar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar un menú digital para mi restaurante 🍽️")}`;
const waDemo21 = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el demo de 21 días del menú digital por $999 MXN 🍽️")}`;
const waSmall = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Esencial ($3,999 MXN) 🍽️")}`;
const waMedium = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Profesional ($7,999 MXN) 🍽️")}`;
const waLarge = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Enterprise ($14,999 MXN) 🍽️")}`;

const menuPackages = [
  {
    name: "Esencial",
    icon: "store",
    price: "$3,999",
    tagline: "Para restaurantes pequeños y food trucks",
    demo: "/menus-digitales/demo",
    wa: waSmall,
    highlighted: false,
    badge: null,
    vip: false,
    features: [
      "Diseño mobile-first premium",
      "Hasta 30 platillos",
      "Categorías con fotos",
      "Precios actualizables",
      "QR code personalizado",
      "Dominio incluido (.devifly.dev)",
      "Deploy y hosting 1 año",
    ],
    excluded: [
      "Hasta 100 platillos",
      "Subcategorías ilimitadas",
      "Sección de promociones con banner",
      "Buscador de productos",
      "Detalle con alérgenos y porciones",
      "Dominio personalizado (.com)",
      "Panel básico para editar platillos",
      "Platillos ilimitados",
      "Múltiples sucursales",
      "Panel de administración completo",
      "Multi-idioma (ES/EN)",
      "Analítica de platillos más vistos",
      "Integración con sistema POS",
      "Soporte prioritario 6 meses",
      "Diseño a medida con branding",
    ],
    note: "Hasta 30 platillos · Entrega 5 días hábiles",
  },
  {
    name: "Profesional",
    icon: "building",
    price: "$7,999",
    tagline: "Para restaurantes medianos y franquicias",
    demo: "/menus-digitales/demo",
    wa: waMedium,
    highlighted: true,
    badge: "Más popular",
    vip: false,
    features: [
      "Todo lo de Esencial",
      "Hasta 100 platillos",
      "Subcategorías ilimitadas",
      "Sección de promociones con banner",
      "Buscador de productos",
      "Detalle con alérgenos y porciones",
      "Dominio personalizado (.com)",
      "Panel básico para editar platillos",
    ],
    excluded: [
      "Platillos ilimitados",
      "Múltiples sucursales",
      "Panel de administración completo",
      "Multi-idioma (ES/EN)",
      "Analítica de platillos más vistos",
      "Integración con sistema POS",
      "Soporte prioritario 6 meses",
      "Diseño a medida con branding",
    ],
    note: "Hasta 100 platillos · Entrega 7 días hábiles",
  },
  {
    name: "Enterprise",
    icon: "building-2",
    price: "$14,999",
    tagline: "Para cadenas y grupos restauranteros",
    demo: "/menus-digitales/demo",
    wa: waLarge,
    highlighted: false,
    badge: "Enterprise",
    vip: true,
    features: [
      "Todo lo de Profesional",
      "Platillos ilimitados",
      "Múltiples sucursales",
      "Panel de administración completo",
      "Multi-idioma (ES/EN)",
      "Analítica de platillos más vistos",
      "Integración con sistema POS",
      "Soporte prioritario 6 meses",
      "Diseño a medida con branding",
    ],
    note: "Platillos ilimitados · Entrega 10 días hábiles",
  },
];

const menuComparisonRows = [
  { feature: "Diseño mobile-first", small: true, medium: true, large: true },
  { feature: "Categorías & fotos", small: true, medium: true, large: true },
  { feature: "QR code", small: true, medium: true, large: true },
  { feature: "Hosting & deploy", small: true, medium: true, large: true },
  { feature: "Subcategorías", small: false, medium: true, large: true },
  {
    feature: "Sección de promociones",
    small: false,
    medium: true,
    large: true,
  },
  { feature: "Buscador", small: false, medium: true, large: true },
  { feature: "Alérgenos & porciones", small: false, medium: true, large: true },
  { feature: "Dominio personalizado", small: false, medium: true, large: true },
  { feature: "Panel de edición", small: false, medium: true, large: true },
  { feature: "Multi-sucursal", small: false, medium: false, large: true },
  { feature: "Multi-idioma", small: false, medium: false, large: true },
  {
    feature: "Analítica de platillos",
    small: false,
    medium: false,
    large: true,
  },
  { feature: "Integración POS", small: false, medium: false, large: true },
  { feature: "Soporte prioritario", small: false, medium: false, large: true },
];

const painPoints = [
  "Tus clientes piden el menú en papel y se ensucia o pierde",
  "Te cuesta actualizar precios o platillos cada vez que cambia algo",
  "Quieres vender más promociones y platillos estrella",
];

const solutionPoints = [
  { icon: "qr-code", text: "Acceso por QR desde cualquier mesa" },
  { icon: "image", text: "Fotos y descripciones irresistibles" },
  { icon: "sparkles", text: "Promociones destacadas" },
  { icon: "zap", text: "Cambia precios y platillos en segundos" },
];

const benefits = [
  {
    icon: "shield",
    title: "Higiene y seguridad",
    desc: "Sin papel, sin contacto, sin preocupaciones para tus clientes",
  },
  {
    icon: "trending-up",
    title: "Aumenta el ticket promedio",
    desc: "Las fotos y promociones incrementan lo que cada cliente pide",
  },
  {
    icon: "star",
    title: "Platillos estrella al frente",
    desc: "Promociona bebidas y platillos especiales donde más se ven",
  },
  {
    icon: "zap",
    title: "Actualiza sin imprimir",
    desc: "Nuevo platillo, precio, o promo: lo cambias en tiempo real",
  },
];

const includes = [
  "Menú digital personalizado",
  "Acceso por QR",
  "Fotos y descripciones",
  "Sección de promociones",
  "Actualización ilimitada",
];

const bonuses = [
  { icon: "qr-code", text: "Diseño de QR personalizado para tus mesas" },
  { icon: "camera", text: "Asesoría en fotografía de platillos" },
  {
    icon: "eye",
    text: "Demo 21 días por $999 MXN — prueba tu menú real antes de contratar",
  },
];

const testimonials = [
  {
    quote:
      "Mis clientes aman el menú digital, vendo más y ya no imprimo menús.",
    name: "Chef Laura",
    place: "Restaurante Aroma",
  },
  {
    quote:
      "Puedo cambiar precios y promociones al instante, ¡es súper práctico!",
    name: "Jorge",
    place: "Bar El Rincón",
  },
];

const menuCategories = [
  "Entradas",
  "Platos fuertes",
  "Bebidas",
  "Postres",
  "Promociones",
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0">
    <!-- Hero — Spotify: bold colored background, massive type, rounded shapes -->
    <section
      class="relative px-6 py-20 overflow-hidden"
      style="background: linear-gradient(160deg, #052e16, #064e3b, #065f46)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-green-200 text-xs font-semibold mb-8"
            >
              <LucideIcon name="utensils-crossed" class-name="w-3.5 h-3.5" />
              Menús Digitales para Restaurantes
            </div>
            <h1
              class="font-display text-5xl sm:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Menús digitales que
              <span class="text-green-300">venden más</span>
              y mejoran la experiencia
            </h1>
            <p class="text-green-100/70 text-lg mb-10 max-w-md leading-relaxed">
              Transforma la experiencia de tus clientes y aumenta tus ventas con
              un menú digital fácil de usar y siempre actualizado.
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                :href="waDemo"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 rounded-full bg-green-400 text-green-950 font-bold text-sm hover:bg-green-300 transition-all hover:scale-105"
              >
                Ver demo gratis
              </a>
              <a
                :href="waContratar"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition border border-white/10"
              >
                Cotizar mi menú
              </a>
            </div>
          </div>

          <!-- QR mockup illustration -->
          <div class="flex justify-center">
            <div class="relative">
              <div
                class="w-56 h-56 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center"
              >
                <div class="text-center">
                  <LucideIcon
                    name="qr-code"
                    class-name="w-20 h-20 text-green-300/80 mx-auto mb-3"
                  />
                  <p class="text-green-200/60 text-xs font-medium">
                    Escanea el QR
                  </p>
                  <p class="text-green-200/30 text-[10px]">
                    desde cualquier mesa
                  </p>
                </div>
              </div>
              <!-- Floating pill -->
              <div
                class="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-green-400 text-green-950 text-xs font-bold shadow-lg"
              >
                Sin app
              </div>
              <div
                class="absolute -bottom-3 -left-3 px-4 py-2 rounded-full bg-white/15 text-white text-xs font-medium border border-white/10 backdrop-blur-sm"
              >
                Siempre actualizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain points — inline on colored bg -->
    <section class="px-6 py-16" style="background: #f0fdf4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-display text-2xl font-bold text-green-950 mb-8">
          ¿Te identificas?
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="pain in painPoints"
            :key="pain"
            class="px-5 py-3 rounded-2xl bg-white border border-green-200 text-green-800 text-sm shadow-sm"
          >
            {{ pain }}
          </div>
        </div>
      </div>
    </section>

    <!-- Solution — cards on dark bg -->
    <section class="px-6 py-24" style="background: #0a0a0a">
      <div class="max-w-5xl mx-auto">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          La Solución: Menú Interactivo Digital
        </h2>
        <p class="text-neutral-400 text-center mb-16 max-w-xl mx-auto">
          Todo lo que necesitas para modernizar la experiencia en tu restaurante
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            v-for="point in solutionPoints"
            :key="point.text"
            class="p-6 rounded-2xl text-center border border-neutral-800 group hover:border-green-500/30 transition"
            style="background: #111"
          >
            <div
              class="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition"
              style="background: rgba(74, 222, 128, 0.1)"
            >
              <LucideIcon
                :name="point.icon"
                class-name="w-6 h-6 text-green-400"
              />
            </div>
            <p class="text-white text-sm font-medium leading-snug">
              {{ point.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits — 2x2 grid on green bg -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(160deg, #065f46, #047857)"
    >
      <div class="max-w-5xl mx-auto">
        <h2
          class="font-display text-3xl font-bold text-white text-center mb-16"
        >
          Beneficios que vas a notar
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="b in benefits"
            :key="b.title"
            class="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-green-300/20 flex items-center justify-center mb-5"
            >
              <LucideIcon :name="b.icon" class-name="w-5 h-5 text-green-200" />
            </div>
            <h3 class="text-white font-bold text-lg mb-2">{{ b.title }}</h3>
            <p class="text-green-100/60 text-sm leading-relaxed">
              {{ b.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual mockup — menu preview -->
    <section class="px-6 py-24" style="background: #0a0a0a">
      <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-3xl font-bold text-white text-center mb-4">
          Así luce tu menú
        </h2>
        <p class="text-neutral-500 text-center mb-12">
          Experiencia mobile-first con acceso instantáneo por QR
        </p>
        <!-- Phone frame mockup -->
        <div class="flex justify-center">
          <div
            class="w-72 rounded-[2rem] border border-neutral-700 p-3 shadow-2xl"
            style="background: #111"
          >
            <!-- Status bar -->
            <div
              class="flex items-center justify-between px-4 py-2 text-[10px] text-neutral-500"
            >
              <span>9:41</span>
              <div class="w-20 h-5 rounded-full bg-neutral-800"></div>
              <span>100%</span>
            </div>
            <!-- Menu content — dark premium with gold -->
            <div
              class="rounded-2xl overflow-hidden"
              style="background: linear-gradient(180deg, #0f0f0f, #1a1510)"
            >
              <!-- Header -->
              <div class="p-5 pb-3">
                <div class="flex items-center gap-3 mb-4">
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center"
                    style="
                      background: linear-gradient(135deg, #d4af37, #b8941f);
                    "
                  >
                    <span class="text-sm font-bold text-white">L</span>
                  </div>
                  <div>
                    <p class="text-white text-sm font-bold">La Terraza</p>
                    <p class="text-[10px]" style="color: #d4af37">
                      Cocina Mexicana Premium
                    </p>
                  </div>
                  <div class="ml-auto">
                    <div
                      class="w-7 h-7 rounded-full flex items-center justify-center"
                      style="background: rgba(212, 175, 55, 0.1)"
                    >
                      <LucideIcon
                        name="search"
                        class-name="w-3.5 h-3.5"
                        style="color: #d4af37"
                      />
                    </div>
                  </div>
                </div>
                <!-- Categories -->
                <div class="flex gap-2 mb-4 overflow-hidden">
                  <span
                    v-for="(cat, i) in menuCategories"
                    :key="cat"
                    class="shrink-0 px-3 py-1.5 rounded-full text-[10px] font-semibold"
                    :style="
                      i === 0
                        ? 'background: #d4af37; color: #1a1510'
                        : 'background: #1f1f1f; color: #888'
                    "
                  >
                    {{ cat }}
                  </span>
                </div>
              </div>
              <!-- Menu items -->
              <div class="px-5 space-y-2.5 pb-2">
                <div
                  class="flex items-center gap-3 p-3 rounded-xl"
                  style="background: #1a1a1a; border: 1px solid #2a2520"
                >
                  <div
                    class="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
                    style="
                      background: linear-gradient(
                        135deg,
                        rgba(212, 175, 55, 0.1),
                        rgba(245, 158, 11, 0.05)
                      );
                    "
                  >
                    <LucideIcon
                      name="flame"
                      class-name="w-5 h-5"
                      style="color: rgba(212, 175, 55, 0.4)"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-white text-xs font-semibold">
                      Tacos al Pastor
                    </p>
                    <p class="text-[10px]" style="color: #666">
                      Piña, cilantro, cebolla
                    </p>
                  </div>
                  <span
                    class="text-xs font-bold shrink-0"
                    style="color: #d4af37"
                    >$85</span
                  >
                </div>
                <div
                  class="flex items-center gap-3 p-3 rounded-xl"
                  style="background: #1a1a1a; border: 1px solid #2a2520"
                >
                  <div
                    class="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
                    style="
                      background: linear-gradient(
                        135deg,
                        rgba(239, 68, 68, 0.08),
                        rgba(220, 38, 38, 0.04)
                      );
                    "
                  >
                    <LucideIcon
                      name="chef-hat"
                      class-name="w-5 h-5"
                      style="color: rgba(212, 175, 55, 0.4)"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-white text-xs font-semibold">
                      Enchiladas Suizas
                    </p>
                    <p class="text-[10px]" style="color: #666">
                      Crema, queso, pollo
                    </p>
                  </div>
                  <span
                    class="text-xs font-bold shrink-0"
                    style="color: #d4af37"
                    >$120</span
                  >
                </div>
                <div
                  class="flex items-center gap-3 p-3 rounded-xl"
                  style="background: #1a1a1a; border: 1px solid #2a2520"
                >
                  <div
                    class="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
                    style="
                      background: linear-gradient(
                        135deg,
                        rgba(34, 197, 94, 0.08),
                        rgba(22, 163, 74, 0.04)
                      );
                    "
                  >
                    <LucideIcon
                      name="salad"
                      class-name="w-5 h-5"
                      style="color: rgba(212, 175, 55, 0.4)"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-white text-xs font-semibold">
                      Aguachile Verde
                    </p>
                    <p class="text-[10px]" style="color: #666">
                      Camarón, pepino, limón
                    </p>
                  </div>
                  <span
                    class="text-xs font-bold shrink-0"
                    style="color: #d4af37"
                    >$160</span
                  >
                </div>
              </div>
              <!-- Promo -->
              <div class="px-5 py-3">
                <div
                  class="p-3 rounded-xl"
                  style="
                    background: rgba(212, 175, 55, 0.05);
                    border: 1px solid rgba(212, 175, 55, 0.12);
                  "
                >
                  <div class="flex items-center gap-2 mb-1">
                    <LucideIcon
                      name="sparkles"
                      class-name="w-3 h-3"
                      style="color: #d4af37"
                    />
                    <span class="text-[10px] font-bold" style="color: #d4af37"
                      >PROMO DEL DÍA</span
                    >
                  </div>
                  <p class="text-neutral-400 text-[11px]">
                    2x1 en margaritas de 6 a 8 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <router-link
            to="/menus-digitales/demo"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold hover:bg-green-500/20 transition"
          >
            <LucideIcon name="eye" class-name="w-4 h-4" />
            Ver demo en vivo
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- What's included — pills on green bg -->
    <section class="px-6 py-20" style="background: #f0fdf4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-display text-2xl font-bold text-green-950 mb-10">
          ¿Qué incluye?
        </h2>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="item in includes"
            :key="item"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-green-200 text-green-800 text-sm font-medium shadow-sm"
          >
            <LucideIcon name="check" class-name="w-4 h-4 text-green-500" />
            {{ item }}
          </div>
        </div>
      </div>
    </section>

    <!-- Bonuses — rounded cards -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <h2
        class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-10"
      >
        <span>🎁</span> Bonos incluidos
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="bonus in bonuses"
          :key="bonus.text"
          class="p-6 rounded-3xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/30 border-light-border text-center"
        >
          <div
            class="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style="background: rgba(34, 197, 94, 0.1)"
          >
            <LucideIcon
              :name="bonus.icon"
              class-name="w-5 h-5 text-green-500"
            />
          </div>
          <p class="text-sm dark:text-text-primary text-light-text font-medium">
            {{ bonus.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials — rounded cards on dark -->
    <section class="px-6 py-24" style="background: #0a0a0a">
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold text-white text-center mb-12"
        >
          Lo que dicen los restauranteros
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="p-8 rounded-3xl border border-neutral-800"
            style="background: #111"
          >
            <div class="flex gap-1 mb-4">
              <LucideIcon
                v-for="n in 5"
                :key="n"
                name="star"
                class-name="w-4 h-4 text-green-400"
              />
            </div>
            <p class="text-neutral-300 leading-relaxed mb-6 text-sm">
              "{{ t.quote }}"
            </p>
            <div>
              <p class="text-white font-semibold text-sm">{{ t.name }}</p>
              <p class="text-neutral-600 text-xs">{{ t.place }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guarantee — bold on green -->
    <section
      class="px-6 py-16"
      style="background: linear-gradient(160deg, #065f46, #047857)"
    >
      <div class="max-w-3xl mx-auto text-center">
        <LucideIcon
          name="shield"
          class-name="w-8 h-8 mx-auto mb-4 text-green-200"
        />
        <h3 class="text-white font-bold text-xl mb-3">
          Garantía de resultados
        </h3>
        <p class="text-green-100/70 text-sm">
          Si no aumentas tus ventas en el primer mes, te devolvemos tu
          inversión.
        </p>
      </div>
    </section>

    <!-- Pricing packages -->
    <section class="px-6 py-24" style="background: #0a0a0a">
      <div class="max-w-6xl mx-auto">
        <h2
          class="font-display text-3xl sm:text-4xl font-extrabold text-white text-center mb-4"
        >
          Planes para cada tipo de restaurante
        </h2>
        <p class="text-neutral-400 text-center mb-16 max-w-xl mx-auto text-sm">
          Desde food trucks hasta cadenas con múltiples sucursales.
        </p>
        <div class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          <div
            v-for="pkg in menuPackages"
            :key="pkg.name"
            class="w-[400px] shrink-0 snap-start relative flex flex-col rounded-2xl overflow-hidden"
            :class="
              pkg.highlighted
                ? 'border-2 border-green-400'
                : 'border border-neutral-800'
            "
            :style="
              pkg.highlighted
                ? 'background: linear-gradient(145deg, rgba(74, 222, 128, 0.06), rgba(34, 197, 94, 0.04))'
                : 'background: #111'
            "
          >
            <div
              v-if="pkg.badge"
              class="absolute top-0 right-0 py-1.5 px-4 text-white text-xs font-bold rounded-bl-xl"
              :class="pkg.vip ? 'bg-violet-500' : 'bg-green-500'"
            >
              <span class="inline-flex items-center gap-1">
                {{ pkg.badge }}
                <LucideIcon
                  :name="pkg.vip ? 'gem' : 'flame'"
                  class-name="w-3.5 h-3.5"
                />
              </span>
            </div>
            <div class="p-8 flex-1" :class="pkg.badge ? 'pt-10' : ''">
              <div class="flex items-center gap-2 mb-1">
                <LucideIcon
                  :name="pkg.icon"
                  :class-name="
                    'w-5 h-5 ' +
                    (pkg.vip ? 'text-violet-400' : 'text-green-400')
                  "
                />
                <h3 class="font-display text-2xl font-bold text-white">
                  {{ pkg.name }}
                </h3>
              </div>
              <p class="text-sm text-neutral-400 mb-2 font-medium">
                {{ pkg.tagline }}
              </p>
              <div class="mb-6">
                <span class="font-display text-3xl font-bold text-white">{{
                  pkg.price
                }}</span>
                <span class="text-sm text-neutral-500 ml-1">MXN</span>
              </div>
              <ul class="space-y-3 mb-6">
                <li
                  v-for="f in pkg.features"
                  :key="f"
                  class="flex items-start gap-2 text-sm text-neutral-300"
                >
                  <LucideIcon
                    :name="pkg.vip ? 'sparkles' : 'check'"
                    :class-name="
                      'w-4 h-4 mt-0.5 ' +
                      (pkg.vip ? 'text-violet-400' : 'text-green-400')
                    "
                  />
                  {{ f }}
                </li>
              </ul>
              <ul
                v-if="pkg.excluded?.length"
                class="space-y-3 mb-6 border-t border-neutral-800 pt-4"
              >
                <li
                  v-for="ex in pkg.excluded"
                  :key="ex"
                  class="flex items-start gap-2 text-sm text-neutral-500 line-through"
                >
                  <LucideIcon
                    name="x"
                    class-name="w-4 h-4 mt-0.5 text-red-400/60 shrink-0"
                  />
                  {{ ex }}
                </li>
              </ul>
              <p v-if="pkg.note" class="text-xs text-neutral-500">
                {{ pkg.note }}
              </p>
            </div>
            <div class="px-8 pb-8 flex flex-col gap-3">
              <router-link
                :to="pkg.demo"
                class="block w-full text-center px-4 py-3 rounded-xl font-semibold text-sm transition"
                :class="
                  pkg.highlighted
                    ? 'bg-green-400 text-green-950 font-bold hover:bg-green-300 shadow-[0_0_20px_rgba(74,222,128,0.3)]'
                    : pkg.vip
                      ? 'bg-violet-500/10 border border-violet-500/30 text-violet-400 hover:bg-violet-500/20'
                      : 'bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20'
                "
              >
                <span class="inline-flex items-center gap-2">
                  <LucideIcon name="eye" class-name="w-4 h-4" />
                  Ver demo
                </span>
              </router-link>
              <a
                :href="pkg.wa"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center px-4 py-3 rounded-xl border border-neutral-800 text-neutral-400 font-semibold text-sm transition"
                :class="
                  pkg.vip ? 'hover:text-violet-400' : 'hover:text-green-400'
                "
                style="background: #1a1a1a"
              >
                <span class="inline-flex items-center gap-2">
                  Contratar
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison table -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold text-white text-center mb-12"
        >
          ¿Qué incluye cada plan?
        </h2>
        <div class="overflow-x-auto rounded-2xl border border-neutral-800">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-neutral-800">
                <th class="text-left py-4 px-6 text-neutral-400 font-medium">
                  Característica
                </th>
                <th
                  class="text-center py-4 px-4 text-white font-semibold whitespace-nowrap"
                >
                  Esencial
                </th>
                <th
                  class="text-center py-4 px-4 text-green-400 font-semibold whitespace-nowrap"
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
                v-for="row in menuComparisonRows"
                :key="row.feature"
                class="border-b border-neutral-800/50 last:border-0 hover:bg-green-500/5 transition-colors"
              >
                <td class="py-3 px-6 text-neutral-400 whitespace-nowrap">
                  {{ row.feature }}
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.small"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-neutral-500"
                  />
                  <span v-else class="text-neutral-700">-</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.medium"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-green-400"
                  />
                  <span v-else class="text-neutral-700">-</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.large"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-violet-400"
                  />
                  <span v-else class="text-neutral-700">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Demo 21 días -->
    <section class="px-6 py-24" style="background: #111">
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-8"
        >
          <LucideIcon name="calendar-clock" class-name="w-3.5 h-3.5" />
          Demo 21 días
        </div>
        <h2
          class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          ¿Quieres probarlo antes de decidir?
        </h2>
        <p
          class="text-neutral-400 max-w-2xl mx-auto mb-12 text-base leading-relaxed"
        >
          Por solo <span class="text-amber-400 font-bold">$999 MXN</span> te
          armamos tu menú digital real, con tus platillos, publicado y
          funcionando durante 21 días. Si decides contratar, los $999 se
          descuentan del anticipo — no pagas nada extra.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div class="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div
              class="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3"
            >
              <LucideIcon
                name="utensils-crossed"
                class-name="w-5 h-5 text-green-400"
              />
            </div>
            <p class="text-white font-semibold text-sm mb-1">Tu menú real</p>
            <p class="text-neutral-500 text-xs">
              Con tus platillos, categorías y precios reales
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div
              class="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3"
            >
              <LucideIcon name="qr-code" class-name="w-5 h-5 text-green-400" />
            </div>
            <p class="text-white font-semibold text-sm mb-1">
              Publicado y funcional
            </p>
            <p class="text-neutral-500 text-xs">
              Accesible por QR, compartible con tu equipo
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div
              class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3"
            >
              <LucideIcon name="receipt" class-name="w-5 h-5 text-amber-400" />
            </div>
            <p class="text-white font-semibold text-sm mb-1">
              Se descuenta al contratar
            </p>
            <p class="text-neutral-500 text-xs">
              Los $999 se restan del anticipo de cualquier plan
            </p>
          </div>
        </div>
        <a
          :href="waDemo21"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
        >
          Quiero mi demo de 21 días
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </a>
      </div>
    </section>

    <!-- CTA Final — bold, Spotify-style -->
    <section class="px-6 py-32 text-center" style="background: #0a0a0a">
      <div class="max-w-3xl mx-auto">
        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight"
        >
          Lleva tu restaurante al
          <span class="text-green-400">siguiente nivel</span>
        </h2>
        <p class="text-neutral-400 mb-10 text-lg">
          Solicita tu demo gratis y prueba el menú digital en tu restaurante.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-full bg-green-400 text-green-950 font-bold text-sm hover:bg-green-300 transition-all hover:scale-105"
          >
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-green-500/30 hover:text-white transition"
          >
            Ver ejemplos de menús
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
