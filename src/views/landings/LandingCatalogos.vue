<script setup>
/**
 * Landing: Catálogo de Productos Nenis
 * Estilo visual: Linear — ultra minimal, borde fino, monospace accents, glow en hover, precisión
 */
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa un catálogo digital para mi negocio de ventas 🛍️")}`;
const waContratar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar mi catálogo digital de productos 🛍️")}`;

const catalogPackages = [
  {
    name: "Básico",
    price: "$1,499",
    tagline: "Para empezar a vender de forma profesional.",
    demo: "/catalogos-nenis/demo",
    highlighted: false,
    badge: null,
    vip: false,
    features: [
      "Hasta 50 productos",
      "1 categoría",
      "Galería de 2 fotos por producto",
      "Control de precios",
      "Link compartible",
      "Botón de WhatsApp",
      "Diseño responsive",
      "Entrega: 1 semana",
    ],
    excluded: [
      "Productos ilimitados",
      "Categorías ilimitadas",
      "Hasta 5 fotos por producto",
      "Control de tallas y colores",
      "Control de stock",
      "Buscador de productos",
      "Panel admin completo",
      "Múltiples vendedoras (catálogos)",
      "Cupones y descuentos",
      "Reportes de productos más vistos",
      "Dominio personalizado",
      "Notificaciones por WhatsApp",
      "Integración con pagos en línea",
      "Soporte prioritario",
    ],
  },
  {
    name: "Pro",
    price: "$3,499",
    tagline: "Para nenis que ya venden fuerte y quieren crecer.",
    demo: "/catalogos-nenis/demo",
    highlighted: true,
    badge: "Más popular",
    vip: false,
    features: [
      "Todo lo del Básico",
      "Productos ilimitados",
      "Categorías ilimitadas",
      "Hasta 5 fotos por producto",
      "Control de tallas y colores",
      "Control de stock",
      "Buscador de productos",
      "Panel admin completo",
      "Entrega: 2 semanas",
    ],
    excluded: [
      "Múltiples vendedoras (catálogos)",
      "Cupones y descuentos",
      "Reportes de productos más vistos",
      "Dominio personalizado",
      "Notificaciones por WhatsApp",
      "Integración con pagos en línea",
      "Soporte prioritario",
    ],
  },
  {
    name: "Premium VIP",
    price: "$6,999",
    tagline: "Para negocios serios con múltiples vendedoras.",
    demo: "/catalogos-nenis/demo",
    highlighted: false,
    badge: "VIP",
    vip: true,
    features: [
      "Todo lo del Pro",
      "Múltiples vendedoras (catálogos)",
      "Cupones y descuentos",
      "Reportes de productos más vistos",
      "Dominio personalizado",
      "Notificaciones por WhatsApp",
      "Integración con pagos en línea",
      "Soporte prioritario",
      "Entrega: 3–4 semanas",
    ],
  },
];

const painPoints = [
  { key: "A", text: "Te preguntan por fotos y precios todo el día" },
  { key: "B", text: "Te cuesta organizar tus productos por categoría" },
  { key: "C", text: "Quieres vender más sin pagar comisiones a plataformas" },
];

const solutionPoints = [
  "Comparte tu catálogo con un solo link",
  "Fotos, precios y descripciones claras",
  "Botón de compra directa a WhatsApp",
  "Sin comisiones ni intermediarios",
];

const benefits = [
  {
    icon: "clock",
    label: "Ahorra tiempo",
    desc: "Deja de responder las mismas dudas de fotos y precios",
  },
  {
    icon: "trending-up",
    label: "Más ventas",
    desc: "Con menos esfuerzo y disponible 24/7",
  },
  {
    icon: "sparkles",
    label: "Imagen profesional",
    desc: "Que genera confianza desde el primer clic",
  },
  {
    icon: "target",
    label: "Control total",
    desc: "De tus productos, precios y categorías",
  },
];

const includes = [
  { text: "Catálogo digital personalizado", shortcut: "⌘ D" },
  { text: "Botón de WhatsApp para pedidos", shortcut: "⌘ W" },
  { text: "Organización por categorías", shortcut: "⌘ C" },
  { text: "Actualización ilimitada", shortcut: "⌘ U" },
];

const bonuses = [
  "Asesoría en fotografía de productos",
  "Plantillas de mensajes para ventas",
  "Demo gratis con tus productos reales",
];

const testimonials = [
  {
    quote:
      "Ahora mis clientas ven todo mi catálogo y me piden directo, ¡vendo más!",
    name: "Paola",
    handle: "Neni de Moda",
  },
  {
    quote: "Me ahorro tiempo y ya no pierdo ventas por no contestar rápido.",
    name: "Fernanda",
    handle: "Accesorios DF",
  },
];

const mockupProducts = [
  { name: "Bolsa Elegante", price: "$350", tag: "Nuevo" },
  { name: "Aretes Dorados", price: "$120", tag: null },
  { name: "Set Maquillaje", price: "$580", tag: "Popular" },
];

const catalogComparisonRows = [
  { feature: "Hasta 50 productos", col1: true, col2: true, col3: true },
  { feature: "1 categoría", col1: true, col2: false, col3: false },
  { feature: "Galería 2 fotos/producto", col1: true, col2: false, col3: false },
  { feature: "Control de precios", col1: true, col2: true, col3: true },
  { feature: "Link compartible", col1: true, col2: true, col3: true },
  { feature: "Botón de WhatsApp", col1: true, col2: true, col3: true },
  { feature: "Diseño responsive", col1: true, col2: true, col3: true },
  { feature: "Productos ilimitados", col1: false, col2: true, col3: true },
  { feature: "Categorías ilimitadas", col1: false, col2: true, col3: true },
  {
    feature: "Hasta 5 fotos por producto",
    col1: false,
    col2: true,
    col3: true,
  },
  {
    feature: "Control de tallas y colores",
    col1: false,
    col2: true,
    col3: true,
  },
  { feature: "Control de stock", col1: false, col2: true, col3: true },
  { feature: "Buscador de productos", col1: false, col2: true, col3: true },
  { feature: "Panel admin completo", col1: false, col2: true, col3: true },
  { feature: "Múltiples vendedoras", col1: false, col2: false, col3: true },
  { feature: "Cupones y descuentos", col1: false, col2: false, col3: true },
  { feature: "Reportes de más vistos", col1: false, col2: false, col3: true },
  { feature: "Dominio personalizado", col1: false, col2: false, col3: true },
  {
    feature: "Notificaciones por WhatsApp",
    col1: false,
    col2: false,
    col3: true,
  },
  {
    feature: "Integración pagos en línea",
    col1: false,
    col2: false,
    col3: true,
  },
  { feature: "Soporte prioritario", col1: false, col2: false, col3: true },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0">
    <!-- Hero — Linear: precise, subtle glow, monoweight -->
    <section class="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
      <!-- Subtle radial glow -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-[0.07]"
        style="background: radial-gradient(circle, #d946ef, transparent 70%)"
      ></div>

      <div class="relative text-center">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-md mb-8 text-[11px] font-mono border dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted dark:bg-base-800/40 bg-light-card/60"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>
          catálogos-digitales
        </div>
        <h1
          class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold dark:text-white text-light-text leading-tight tracking-tight mb-6 max-w-3xl mx-auto"
        >
          Vende más y mejor con tu propio
          <span class="dark:text-fuchsia-300 text-fuchsia-600"
            >catálogo digital</span
          >
        </h1>
        <p
          class="dark:text-text-secondary text-light-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crea tu propio catálogo online, fácil de compartir y sin comisiones.
          Organiza tus productos y recibe pedidos directo a tu WhatsApp.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="group px-7 py-3 rounded-lg font-semibold text-sm transition-all border dark:text-white text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]"
            style="
              background: rgba(217, 70, 239, 0.12);
              border-color: rgba(217, 70, 239, 0.25);
            "
          >
            <span
              class="group-hover:dark:text-fuchsia-300 group-hover:text-fuchsia-400 transition"
              >Ver demo gratis</span
            >
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-7 py-3 rounded-lg border dark:border-base-700 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:border-base-500 hover:border-light-muted transition"
          >
            Quiero el mío
          </a>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-5xl mx-auto px-6">
      <div class="h-px dark:bg-base-800 bg-light-border"></div>
    </div>

    <!-- Pain points — key labels, Linear-style list -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p
            class="text-[11px] font-mono dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-widest mb-4"
          >
            Problema
          </p>
          <h2
            class="font-display text-3xl font-bold dark:text-white text-light-text mb-2"
          >
            ¿Te pasa esto?
          </h2>
          <p class="dark:text-text-secondary/60 text-light-muted/60 text-sm">
            Si vendes por redes sociales, seguro te suena familiar.
          </p>
        </div>
        <div class="space-y-4">
          <div
            v-for="pain in painPoints"
            :key="pain.key"
            class="flex items-center gap-4 p-4 rounded-lg border dark:border-base-800 border-light-border dark:bg-base-900/30 bg-white/50 group hover:dark:border-fuchsia-500/20 hover:border-fuchsia-300/30 transition"
          >
            <span
              class="font-mono text-[10px] dark:text-fuchsia-400/60 text-fuchsia-500/60 border dark:border-base-700 border-light-border rounded px-1.5 py-0.5 dark:bg-base-800/40 bg-light-card shrink-0"
            >
              {{ pain.key }}
            </span>
            <p class="dark:text-text-primary text-light-text text-sm">
              {{ pain.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution — centered, border cards -->
    <section
      class="dark:bg-base-900/30 bg-light-card/30 border-y dark:border-base-800 border-light-border py-20 px-6"
    >
      <div class="max-w-4xl mx-auto">
        <p
          class="text-[11px] font-mono dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-widest mb-4 text-center"
        >
          Solución
        </p>
        <h2
          class="font-display text-3xl font-bold dark:text-white text-light-text text-center mb-12"
        >
          Catálogo Digital para Nenis
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="(point, i) in solutionPoints"
            :key="i"
            class="flex items-center gap-3 p-4 rounded-lg border dark:border-base-800 border-light-border dark:bg-base-800/20 bg-white/40"
          >
            <div
              class="w-6 h-6 rounded flex items-center justify-center shrink-0"
              style="background: rgba(217, 70, 239, 0.08)"
            >
              <LucideIcon
                name="check"
                class-name="w-3.5 h-3.5 dark:text-fuchsia-400 text-fuchsia-500"
              />
            </div>
            <p class="dark:text-text-primary text-light-text text-sm">
              {{ point }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits — grid with thin borders, hover glow -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <p
        class="text-[11px] font-mono dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-widest mb-4 text-center"
      >
        Beneficios
      </p>
      <h2
        class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-12"
      >
        Lo que cambia cuando tienes tu catálogo
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="b in benefits"
          :key="b.label"
          class="p-6 rounded-lg border dark:border-base-800 border-light-border hover:dark:border-fuchsia-500/20 hover:border-fuchsia-300/30 transition group"
        >
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-8 h-8 rounded-md flex items-center justify-center dark:bg-base-800 bg-light-card border dark:border-base-700 border-light-border group-hover:dark:border-fuchsia-500/30 transition"
            >
              <LucideIcon
                :name="b.icon"
                class-name="w-4 h-4 dark:text-fuchsia-400 text-fuchsia-500"
              />
            </div>
            <h3 class="font-semibold dark:text-white text-light-text text-sm">
              {{ b.label }}
            </h3>
          </div>
          <p class="dark:text-text-secondary text-light-muted text-sm pl-11">
            {{ b.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- Mockup — catalog preview, ultra clean -->
    <section
      class="dark:bg-base-900/30 bg-light-card/30 border-y dark:border-base-800 border-light-border py-20 px-6"
    >
      <div class="max-w-3xl mx-auto">
        <p
          class="text-[11px] font-mono dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-widest mb-4 text-center"
        >
          Preview
        </p>
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-12"
        >
          Así luce tu catálogo
        </h2>
        <!-- Phone frame mockup — pink boutique style -->
        <div class="flex justify-center">
          <div
            class="w-72 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
            style="
              border-color: rgba(236, 72, 153, 0.12);
              background: linear-gradient(180deg, #fdf2f8, #fce7f3, #f5f3ff);
            "
          >
            <!-- Status bar -->
            <div
              class="flex items-center justify-between px-4 py-1.5 text-[9px]"
              style="color: #d946ef"
            >
              <span>9:41</span>
              <div
                class="w-16 h-4 rounded-full"
                style="background: rgba(217, 70, 239, 0.06)"
              ></div>
              <span>100%</span>
            </div>
            <!-- Catalog content -->
            <div class="rounded-2xl overflow-hidden" style="background: white">
              <!-- Store header -->
              <div
                class="p-4 pb-3 text-center"
                style="background: linear-gradient(180deg, #fdf2f8, white)"
              >
                <div
                  class="w-12 h-12 rounded-2xl mx-auto mb-2 flex items-center justify-center"
                  style="background: linear-gradient(135deg, #ec4899, #a855f7)"
                >
                  <span class="text-white text-lg font-bold">B</span>
                </div>
                <p class="text-sm font-bold" style="color: #1f2937">
                  Boutique Lupita ✨
                </p>
                <p class="text-[9px]" style="color: #9ca3af">
                  Ropa y accesorios de moda
                </p>
                <div class="flex justify-center gap-2 mt-2">
                  <span
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px]"
                    style="background: #fdf2f8; color: #ec4899"
                  >
                    📍 CDMX
                  </span>
                  <span
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px]"
                    style="background: #f5f3ff; color: #a855f7"
                  >
                    🚚 Envíos
                  </span>
                </div>
              </div>
              <!-- Search + categories -->
              <div class="px-4 pb-2">
                <div
                  class="flex items-center gap-2 px-3 py-2 rounded-xl mb-3"
                  style="background: #f9fafb; border: 1px solid #f3f4f6"
                >
                  <LucideIcon
                    name="search"
                    class-name="w-3 h-3"
                    style="color: #d1d5db"
                  />
                  <span class="text-[9px]" style="color: #d1d5db"
                    >Buscar productos...</span
                  >
                </div>
                <div class="flex gap-1.5 overflow-hidden">
                  <span
                    class="shrink-0 px-2.5 py-1 rounded-full text-[9px] font-semibold text-white"
                    style="background: #ec4899"
                    >Todo</span
                  >
                  <span
                    class="shrink-0 px-2.5 py-1 rounded-full text-[9px]"
                    style="background: #fdf2f8; color: #ec4899"
                    >Ropa</span
                  >
                  <span
                    class="shrink-0 px-2.5 py-1 rounded-full text-[9px]"
                    style="background: #fdf2f8; color: #ec4899"
                    >Accesorios</span
                  >
                </div>
              </div>
              <!-- Products grid 2x2 -->
              <div class="px-4 pb-4 grid grid-cols-2 gap-2">
                <div
                  v-for="product in mockupProducts"
                  :key="product.name"
                  class="rounded-xl overflow-hidden"
                  style="background: #fafafa; border: 1px solid #f3f4f6"
                >
                  <div
                    class="h-16 flex items-center justify-center"
                    style="
                      background: linear-gradient(135deg, #fdf2f8, #f5f3ff);
                    "
                  >
                    <LucideIcon
                      name="shopping-bag"
                      class-name="w-5 h-5"
                      style="color: rgba(236, 72, 153, 0.3)"
                    />
                  </div>
                  <div class="p-2">
                    <div class="flex items-center gap-1 mb-0.5">
                      <p
                        class="text-[10px] font-semibold"
                        style="color: #1f2937"
                      >
                        {{ product.name }}
                      </p>
                      <span
                        v-if="product.tag"
                        class="px-1 py-0.5 rounded text-[7px] font-bold text-white"
                        :style="
                          product.tag === 'Nuevo'
                            ? 'background: #ec4899'
                            : 'background: #a855f7'
                        "
                        >{{ product.tag }}</span
                      >
                    </div>
                    <p class="text-[10px] font-bold" style="color: #ec4899">
                      {{ product.price }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- WhatsApp CTA -->
              <div class="px-4 pb-4">
                <div
                  class="py-2.5 rounded-xl text-center text-[11px] font-bold text-white flex items-center justify-center gap-1.5"
                  style="background: linear-gradient(135deg, #ec4899, #a855f7)"
                >
                  <LucideIcon name="message-circle" class-name="w-3.5 h-3.5" />
                  Pedir por WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <router-link
            to="/catalogos-nenis/demo"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition dark:text-fuchsia-400 text-fuchsia-500 hover:dark:text-fuchsia-300"
            style="
              background: rgba(217, 70, 239, 0.06);
              border: 1px solid rgba(217, 70, 239, 0.15);
            "
          >
            <LucideIcon name="eye" class-name="w-4 h-4" />
            Ver demo en vivo
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- What's included — keyboard-style shortcuts -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <p
        class="text-[11px] font-mono dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-widest mb-4 text-center"
      >
        Incluye
      </p>
      <h2
        class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-12"
      >
        Todo lo que necesitas
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          v-for="item in includes"
          :key="item.text"
          class="flex items-center justify-between p-4 rounded-lg border dark:border-base-800 border-light-border hover:dark:border-fuchsia-500/15 transition"
        >
          <div class="flex items-center gap-3">
            <LucideIcon
              name="check"
              class-name="w-3.5 h-3.5 dark:text-fuchsia-400 text-fuchsia-500"
            />
            <p class="dark:text-text-primary text-light-text text-sm">
              {{ item.text }}
            </p>
          </div>
          <span
            class="font-mono text-[10px] dark:text-text-secondary/25 text-light-muted/25 hidden sm:block"
            >{{ item.shortcut }}</span
          >
        </div>
      </div>
    </section>

    <!-- Bonuses — inline tags -->
    <section class="max-w-7xl mx-auto px-6 pb-20">
      <div
        class="p-6 rounded-lg border dark:border-base-800 border-light-border"
        style="background: rgba(217, 70, 239, 0.02)"
      >
        <p
          class="text-[11px] font-mono dark:text-fuchsia-400/50 text-fuchsia-500/50 uppercase tracking-widest mb-3"
        >
          🎁 Bonos incluidos
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="bonus in bonuses"
            :key="bonus"
            class="px-3 py-1.5 rounded-md text-xs dark:text-text-primary text-light-text border dark:border-base-700 border-light-border dark:bg-base-800/30 bg-white/40"
          >
            {{ bonus }}
          </span>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-5xl mx-auto px-6">
      <div class="h-px dark:bg-base-800 bg-light-border"></div>
    </div>

    <!-- Testimonials — side by side with divider -->
    <section class="max-w-4xl mx-auto px-6 py-24">
      <p
        class="text-[11px] font-mono dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-widest mb-12 text-center"
      >
        Testimonios
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="p-6 rounded-lg border dark:border-base-800 border-light-border"
        >
          <p
            class="dark:text-text-primary text-light-text text-sm leading-relaxed mb-5 italic"
          >
            "{{ t.quote }}"
          </p>
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold dark:text-fuchsia-400 text-fuchsia-500"
              style="background: rgba(217, 70, 239, 0.08)"
            >
              {{ t.name[0] }}
            </div>
            <div>
              <p class="dark:text-white text-light-text text-sm font-medium">
                {{ t.name }}
              </p>
              <p
                class="dark:text-text-secondary/40 text-light-muted/40 text-xs font-mono"
              >
                {{ t.handle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guarantee -->
    <section class="max-w-7xl mx-auto px-6 pb-20 text-center">
      <div
        class="p-6 rounded-lg border dark:border-base-800 border-light-border"
      >
        <LucideIcon
          name="shield"
          class-name="w-5 h-5 mx-auto mb-3 dark:text-fuchsia-400 text-fuchsia-500"
        />
        <p
          class="dark:text-text-primary text-light-text text-sm font-medium mb-1"
        >
          Garantía de satisfacción
        </p>
        <p class="dark:text-text-secondary/60 text-light-muted/60 text-xs">
          Si no vendes más en el primer mes, te ayudamos a mejorar tu catálogo
          gratis.
        </p>
      </div>
    </section>

    <!-- Pricing packages -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <p
        class="text-[11px] font-mono dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-widest mb-4 text-center"
      >
        Planes
      </p>
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text text-center mb-4"
      >
        Elige tu plan
      </h2>
      <p
        class="text-center dark:text-text-secondary text-light-muted mb-16 max-w-xl mx-auto text-sm"
      >
        Desde lo básico hasta un catálogo con todo el poder para tu negocio.
      </p>
      <div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        <div
          v-for="pkg in catalogPackages"
          :key="pkg.name"
          class="w-[400px] shrink-0 snap-start relative flex flex-col rounded-lg overflow-hidden"
          :class="
            pkg.highlighted
              ? 'border-2 border-fuchsia-500'
              : 'border dark:border-base-800 border-light-border'
          "
          :style="
            pkg.highlighted
              ? 'background: linear-gradient(145deg, rgba(217, 70, 239, 0.06), rgba(232, 121, 249, 0.04))'
              : ''
          "
        >
          <div
            v-if="pkg.badge"
            class="absolute top-0 right-0 py-1.5 px-4 text-white text-xs font-bold rounded-bl-xl"
            :class="pkg.vip ? 'bg-violet-500' : 'bg-fuchsia-500'"
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
            <h3
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
            >
              {{ pkg.name }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{ pkg.tagline }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >{{ pkg.price }}</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-3 mb-6">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  :name="pkg.vip ? 'sparkles' : 'check'"
                  :class-name="
                    'w-4 h-4 mt-0.5 ' +
                    (pkg.vip
                      ? 'text-violet-400'
                      : 'dark:text-fuchsia-400 text-fuchsia-500')
                  "
                />
                {{ f }}
              </li>
            </ul>
            <ul
              v-if="pkg.excluded?.length"
              class="space-y-3 mb-6 border-t dark:border-base-700/40 border-light-border pt-4"
            >
              <li
                v-for="ex in pkg.excluded"
                :key="ex"
                class="flex items-start gap-2 text-sm dark:text-text-secondary/50 text-light-muted/60 line-through"
              >
                <LucideIcon
                  name="x"
                  class-name="w-4 h-4 mt-0.5 text-red-400/60 shrink-0"
                />
                {{ ex }}
              </li>
            </ul>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              :to="pkg.demo"
              class="block w-full text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition"
              :class="
                pkg.highlighted
                  ? 'bg-fuchsia-500 text-white font-bold hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.3)]'
                  : pkg.vip
                    ? 'bg-violet-500/10 border border-violet-500/30 text-violet-400 hover:bg-violet-500/20'
                    : 'border dark:border-base-700 border-light-border dark:text-fuchsia-400 text-fuchsia-500 hover:dark:border-fuchsia-500/30'
              "
              :style="
                !pkg.highlighted && !pkg.vip
                  ? 'background: rgba(217, 70, 239, 0.06)'
                  : ''
              "
            >
              <span class="inline-flex items-center gap-2">
                <LucideIcon name="search" class-name="w-4 h-4" />
                Demo
              </span>
            </router-link>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-2.5 rounded-lg border dark:border-base-800 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm transition"
              :class="
                pkg.vip
                  ? 'hover:text-violet-400'
                  : 'hover:dark:text-fuchsia-400 hover:text-fuchsia-500'
              "
            >
              <span class="inline-flex items-center gap-2">
                Contratar
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="max-w-5xl mx-auto px-6 py-20">
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text text-center mb-2 tracking-tight"
      >
        Compara los planes
      </h2>
      <p class="text-center dark:text-text-secondary text-light-muted mb-10">
        Elige el que mejor se adapta a tu negocio.
      </p>
      <div
        class="overflow-x-auto rounded-xl border dark:border-base-800 border-light-border"
      >
        <table class="w-full text-sm">
          <thead>
            <tr class="dark:bg-base-900 bg-light-card">
              <th
                class="text-left px-5 py-4 dark:text-text-secondary text-light-muted font-medium w-1/2"
              >
                Característica
              </th>
              <th
                class="text-center px-4 py-4 dark:text-white text-light-text font-semibold"
              >
                Básico
              </th>
              <th class="text-center px-4 py-4 text-fuchsia-400 font-semibold">
                Pro
              </th>
              <th class="text-center px-4 py-4 text-amber-400 font-semibold">
                Premium VIP
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in catalogComparisonRows"
              :key="i"
              :class="
                i % 2 === 0
                  ? 'dark:bg-base-900/40 bg-light-bg'
                  : 'dark:bg-base-800/20 bg-white'
              "
            >
              <td class="px-5 py-3 dark:text-text-secondary text-light-muted">
                {{ row.feature }}
              </td>
              <td class="text-center px-4 py-3">
                <LucideIcon
                  v-if="row.col1"
                  name="check"
                  class-name="w-4 h-4 text-fuchsia-400 mx-auto"
                />
                <span
                  v-else
                  class="dark:text-base-600 text-light-border text-lg leading-none"
                  >—</span
                >
              </td>
              <td class="text-center px-4 py-3">
                <LucideIcon
                  v-if="row.col2"
                  name="check"
                  class-name="w-4 h-4 text-fuchsia-400 mx-auto"
                />
                <span
                  v-else
                  class="dark:text-base-600 text-light-border text-lg leading-none"
                  >—</span
                >
              </td>
              <td class="text-center px-4 py-3">
                <LucideIcon
                  v-if="row.col3"
                  name="check"
                  class-name="w-4 h-4 text-amber-400 mx-auto"
                />
                <span
                  v-else
                  class="dark:text-base-600 text-light-border text-lg leading-none"
                  >—</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-5xl mx-auto px-6">
      <div class="h-px dark:bg-base-800 bg-light-border"></div>
    </div>

    <!-- CTA Final — subtle glow, clean -->
    <section class="relative py-28 px-6 text-center">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-[0.05]"
        style="background: radial-gradient(circle, #d946ef, transparent 70%)"
      ></div>
      <div class="relative max-w-2xl mx-auto">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4 tracking-tight"
        >
          Empieza a vender más hoy mismo
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-10 text-sm">
          Tu catálogo digital listo en 24 horas. Sin comisiones, sin
          complicaciones.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:shadow-[0_0_24px_rgba(217,70,239,0.2)] border dark:text-white text-white"
            style="
              background: rgba(217, 70, 239, 0.1);
              border-color: rgba(217, 70, 239, 0.25);
            "
          >
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3.5 rounded-lg border dark:border-base-700 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:text-white transition"
          >
            Quiero mi catálogo
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
