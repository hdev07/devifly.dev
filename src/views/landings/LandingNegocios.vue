<script setup>
/**
 * Landing: Landings para Negocios (en general)
 * Estilo visual: Notion/Arc — editorial, warm, modular cards, mixed typography, emoji
 */
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa una landing page de alto impacto para mi negocio 🚀")}`;
const waContratar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar una landing page para mi negocio 🚀")}`;
const waDemo21 = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el demo de 21 días de la landing page por $999 MXN 🚀")}`;

const painPoints = [
  { emoji: "📱", text: "Tu negocio depende solo de redes sociales" },
  {
    emoji: "🌐",
    text: "No tienes página web o la que tienes no te genera clientes",
  },
  { emoji: "⏳", text: "Te gustaría automatizar la captación de prospectos" },
];

const solutionPoints = [
  "Optimizada para convertir visitantes en prospectos",
  "Integración con WhatsApp y formularios inteligentes",
  "Diseño profesional y adaptable a cualquier giro",
];

const benefits = [
  {
    icon: "users",
    title: "Más clientes",
    desc: "Sin invertir más en publicidad, tu landing trabaja 24/7",
  },
  {
    icon: "sparkles",
    title: "Imagen profesional",
    desc: "Genera confianza y autoridad desde el primer vistazo",
  },
  {
    icon: "zap",
    title: "Captación automática",
    desc: "Los prospectos llegan filtrados y listos para cerrar",
  },
  {
    icon: "pen-tool",
    title: "Fácil de actualizar",
    desc: "Actualiza textos, fotos y ofertas cuando lo necesites",
  },
];

const mockupSections = [
  { label: "Hero", desc: "Propuesta de valor clara y directa" },
  { label: "Beneficios", desc: "Lo que resuelves para tu cliente" },
  { label: "Formulario", desc: "Contacto inteligente con filtros" },
  { label: "WhatsApp", desc: "Botón de contacto directo" },
  { label: "Testimonios", desc: "Prueba social que convence" },
];

const includes = [
  "Landing page personalizada",
  "Integración con WhatsApp y correo",
  "Formulario inteligente",
  "SEO básico",
  "Actualización sencilla",
];

const bonuses = [
  {
    emoji: "🔍",
    text: "Auditoría digital gratis de tu presencia online actual",
  },
  {
    emoji: "✍️",
    text: "Textos de venta incluidos — no te preocupes por el copy",
  },
  {
    emoji: "🧪",
    text: "Demo 21 días por $999 MXN — prueba tu landing real antes de contratar",
  },
];

const testimonials = [
  {
    quote:
      "Mi negocio creció desde que tengo la landing, recibo más mensajes y cierro más ventas.",
    name: "Andrea",
    role: "Emprendedora",
  },
  {
    quote: "Ahora mis clientes me encuentran fácil y me contactan directo.",
    name: "David",
    role: "Servicios Express",
  },
];

const waOnePage = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar la landing page plan One Page ($4,999 MXN) 🚀")}`;
const waMultiSeccion = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar la landing page plan Multi-Sección ($7,999 MXN) 🚀")}`;
const waPortal = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar el Portal Avanzado de landing page ($12,999 MXN) 🚀")}`;

const landingPackages = [
  {
    name: "One Page",
    price: "$4,999",
    tagline: "Estructura compacta para una oferta puntual o campaña específica",
    highlighted: false,
    badge: null,
    vip: false,
    wa: waOnePage,
    features: [
      "Secciones esenciales de conversión",
      "Formulario y CTA principal",
      "Versión móvil optimizada",
      "SEO base optimizado",
      "Integración con WhatsApp",
      "Entrega rápida",
    ],
    excluded: [
      "Múltiples bloques y secciones",
      "Medición para campañas",
      "CMS o gestión autoadministrable",
      "SEO técnico ampliado",
      "Arquitectura de contenido extendida",
    ],
  },
  {
    name: "Multi-Sección",
    price: "$7,999",
    tagline: "Explica propuesta, beneficios y respaldo comercial completo",
    highlighted: true,
    badge: "Más popular",
    vip: false,
    wa: waMultiSeccion,
    features: [
      "Todo lo del One Page",
      "Múltiples bloques y secciones",
      "Estructura para objeciones y confianza",
      "Soporte para catálogo básico o servicios",
      "Medición para campañas",
    ],
    excluded: [
      "CMS o gestión autoadministrable",
      "SEO técnico ampliado",
      "Arquitectura de contenido extendida",
    ],
  },
  {
    name: "Portal Avanzado",
    price: "$12,999",
    tagline: "Para marcas que necesitan estructura, contenido y crecimiento",
    highlighted: false,
    badge: "Más completo",
    vip: true,
    wa: waPortal,
    features: [
      "Todo lo del Multi-Sección",
      "Arquitectura de contenido extendida",
      "CMS o gestión autoadministrable",
      "SEO técnico ampliado",
      "Preparado para crecer",
    ],
    excluded: [],
  },
];

const comparisonRows = [
  {
    feature: "Diseño responsive premium",
    onePage: true,
    multi: true,
    portal: true,
  },
  { feature: "SEO base optimizado", onePage: true, multi: true, portal: true },
  {
    feature: "Formulario / WhatsApp integrado",
    onePage: true,
    multi: true,
    portal: true,
  },
  {
    feature: "Versión móvil optimizada",
    onePage: true,
    multi: true,
    portal: true,
  },
  {
    feature: "Múltiples bloques y secciones",
    onePage: false,
    multi: true,
    portal: true,
  },
  {
    feature: "Estructura para objeciones",
    onePage: false,
    multi: true,
    portal: true,
  },
  {
    feature: "Catálogo o servicios básico",
    onePage: false,
    multi: true,
    portal: true,
  },
  {
    feature: "Medición para campañas",
    onePage: false,
    multi: true,
    portal: true,
  },
  {
    feature: "CMS autoadministrable",
    onePage: false,
    multi: false,
    portal: true,
  },
  {
    feature: "SEO técnico ampliado",
    onePage: false,
    multi: false,
    portal: true,
  },
  {
    feature: "Arquitectura de contenido",
    onePage: false,
    multi: false,
    portal: true,
  },
  {
    feature: "Preparado para crecer",
    onePage: false,
    multi: false,
    portal: true,
  },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0">
    <!-- Hero — Notion/Arc: editorial, warm, large mixed typography -->
    <section class="relative px-6 pt-16 pb-28 overflow-hidden">
      <!-- Warm gradient bg -->
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.04]"
        style="
          background:
            radial-gradient(ellipse at 30% 20%, #f97316, transparent 50%),
            radial-gradient(ellipse at 70% 80%, #3b82f6, transparent 50%);
        "
      ></div>

      <div class="relative max-w-5xl mx-auto">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl dark:bg-base-800/50 bg-white border dark:border-base-700/40 border-light-border mb-8 text-sm shadow-sm"
          >
            <span>🚀</span>
            <span class="dark:text-text-secondary text-light-muted font-medium"
              >Landing Pages de Alto Impacto</span
            >
          </div>
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white text-light-text leading-[1.06] tracking-tight mb-8"
          >
            Lleva tu negocio al
            <span class="relative">
              siguiente nivel
              <span
                class="absolute -bottom-2 left-0 w-full h-3 rounded-sm opacity-20"
                style="background: linear-gradient(90deg, #f97316, #3b82f6)"
              ></span>
            </span>
            con una web que vende
          </h1>
          <p
            class="text-xl dark:text-text-secondary text-light-muted max-w-xl leading-relaxed mb-10"
          >
            Transforma tu presencia digital con una landing page diseñada para
            vender y captar clientes automáticamente.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              :href="waDemo"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
              style="
                background: linear-gradient(135deg, #f97316, #ea580c);
                box-shadow: 0 4px 16px rgba(249, 115, 22, 0.25);
              "
            >
              Solicita tu demo gratis
            </a>
            <router-link
              to="/landings/demo"
              class="px-8 py-4 rounded-2xl dark:bg-base-800/60 bg-white border dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:text-white hover:text-light-text transition shadow-sm"
            >
              Ver demo en vivo
            </router-link>
            <a
              :href="waContratar"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 rounded-2xl dark:bg-base-800/60 bg-white border dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:text-white hover:text-light-text transition shadow-sm"
            >
              Quiero cotizar mi landing
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain points — emoji blocks, editorial feel -->
    <section
      class="dark:bg-base-800/20 bg-white/60 border-y dark:border-base-700/30 border-light-border py-20 px-6"
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-2xl font-bold dark:text-white text-light-text mb-10 text-center"
        >
          ¿Te identificas?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="pain in painPoints"
            :key="pain.text"
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/30 border-light-border shadow-sm"
          >
            <span class="text-3xl block mb-4">{{ pain.emoji }}</span>
            <p
              class="dark:text-text-primary text-light-text text-sm font-medium leading-relaxed"
            >
              {{ pain.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution — warm accent block -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div class="lg:col-span-2">
          <h2
            class="text-3xl sm:text-4xl font-bold dark:text-white text-light-text leading-tight mb-4"
          >
            La Solución
          </h2>
          <p class="dark:text-text-secondary text-light-muted leading-relaxed">
            Una landing page de alto impacto, diseñada específicamente para tu
            tipo de negocio.
          </p>
        </div>
        <div class="lg:col-span-3 space-y-3">
          <div
            v-for="point in solutionPoints"
            :key="point"
            class="flex items-center gap-4 p-5 rounded-2xl dark:bg-base-800/30 bg-white border dark:border-base-700/30 border-light-border shadow-sm"
          >
            <div
              class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style="background: rgba(249, 115, 22, 0.08)"
            >
              <LucideIcon
                name="check"
                class-name="w-4 h-4"
                style="color: #f97316"
              />
            </div>
            <p
              class="dark:text-text-primary text-light-text text-sm font-medium"
            >
              {{ point }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits — card grid with soft shadows -->
    <section class="dark:bg-base-800/20 bg-light-card/30 py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <h2
          class="text-3xl font-bold dark:text-white text-light-text text-center mb-4"
        >
          Beneficios
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted text-center mb-14 max-w-md mx-auto"
        >
          Todo lo que consigues con tu nueva landing page
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="b in benefits"
            :key="b.title"
            class="p-7 rounded-2xl dark:bg-base-800/40 bg-white border dark:border-base-700/30 border-light-border shadow-sm hover:shadow-md transition"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style="background: rgba(249, 115, 22, 0.06)"
            >
              <LucideIcon
                :name="b.icon"
                class-name="w-5 h-5"
                style="color: #f97316"
              />
            </div>
            <h3 class="font-bold dark:text-white text-light-text mb-2">
              {{ b.title }}
            </h3>
            <p
              class="dark:text-text-secondary text-light-muted text-sm leading-relaxed"
            >
              {{ b.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual mockup — modular blocks -->
    <section class="max-w-5xl mx-auto px-6 py-24">
      <h2
        class="text-3xl font-bold dark:text-white text-light-text text-center mb-4"
      >
        Así luce tu landing
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted text-center mb-14 max-w-md mx-auto"
      >
        Cada sección diseñada con un propósito de conversión
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div
          v-for="(s, i) in mockupSections"
          :key="s.label"
          class="p-5 rounded-2xl dark:bg-base-800/30 bg-white border dark:border-base-700/30 border-light-border text-center shadow-sm"
        >
          <p
            class="text-2xl font-bold mb-2"
            style="color: rgba(249, 115, 22, 0.2)"
          >
            {{ i + 1 }}
          </p>
          <p class="dark:text-white text-light-text text-sm font-semibold mb-1">
            {{ s.label }}
          </p>
          <p
            class="dark:text-text-secondary/60 text-light-muted/60 text-xs leading-snug"
          >
            {{ s.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- What's included + Bonuses — two columns -->
    <section
      class="dark:bg-base-800/20 bg-white/60 border-y dark:border-base-700/30 border-light-border py-24 px-6"
    >
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Includes -->
        <div>
          <h2 class="text-2xl font-bold dark:text-white text-light-text mb-8">
            ¿Qué incluye?
          </h2>
          <ul class="space-y-4">
            <li
              v-for="item in includes"
              :key="item"
              class="flex items-center gap-3"
            >
              <div
                class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                style="background: rgba(249, 115, 22, 0.06)"
              >
                <LucideIcon
                  name="check"
                  class-name="w-3.5 h-3.5"
                  style="color: #f97316"
                />
              </div>
              <p class="dark:text-text-primary text-light-text text-sm">
                {{ item }}
              </p>
            </li>
          </ul>
        </div>
        <!-- Bonuses -->
        <div>
          <h2 class="text-2xl font-bold dark:text-white text-light-text mb-8">
            Bonos exclusivos
          </h2>
          <div class="space-y-3">
            <div
              v-for="bonus in bonuses"
              :key="bonus.text"
              class="flex items-start gap-4 p-5 rounded-2xl dark:bg-base-800/30 bg-light-surface border dark:border-base-700/30 border-light-border"
            >
              <span class="text-xl shrink-0">{{ bonus.emoji }}</span>
              <p
                class="dark:text-text-primary text-light-text text-sm leading-relaxed"
              >
                {{ bonus.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials — quote with left border accent -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <h2
        class="text-2xl font-bold dark:text-white text-light-text text-center mb-14"
      >
        Lo que dicen nuestros clientes
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="relative p-7 rounded-2xl dark:bg-base-800/30 bg-white border dark:border-base-700/30 border-light-border shadow-sm"
        >
          <div
            class="absolute left-0 top-7 bottom-7 w-1 rounded-full"
            style="background: linear-gradient(180deg, #f97316, #3b82f6)"
          ></div>
          <p
            class="dark:text-text-primary text-light-text leading-relaxed mb-6 pl-5 text-sm"
          >
            "{{ t.quote }}"
          </p>
          <div class="pl-5">
            <p class="font-semibold dark:text-white text-light-text text-sm">
              {{ t.name }}
            </p>
            <p class="dark:text-text-secondary/50 text-light-muted/50 text-xs">
              {{ t.role }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Guarantee -->
    <section class="max-w-7xl mx-auto px-6 pb-12">
      <div
        class="p-8 rounded-2xl dark:bg-base-800/20 bg-white border dark:border-base-700/30 border-light-border text-center shadow-sm"
      >
        <div
          class="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
          style="background: rgba(59, 133, 246, 0.06)"
        >
          <LucideIcon name="shield" class-name="w-6 h-6 text-brand-500" />
        </div>
        <h3 class="font-bold dark:text-white text-light-text text-lg mb-2">
          Garantía de resultados
        </h3>
        <p class="dark:text-text-secondary text-light-muted text-sm">
          Si no recibes más prospectos en el primer mes, optimizamos tu landing
          gratis.
        </p>
      </div>
    </section>

    <!-- Demo 21 días -->
    <section class="max-w-5xl mx-auto px-6 pb-12">
      <div
        class="p-8 rounded-2xl dark:bg-base-800/20 bg-white border dark:border-amber-500/20 border-amber-200 shadow-sm overflow-hidden relative"
      >
        <div
          class="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-[0.06] pointer-events-none"
          style="background: radial-gradient(circle, #f59e0b, transparent 60%)"
        ></div>
        <div class="relative flex flex-col lg:flex-row lg:items-center gap-8">
          <div class="flex-1 min-w-0">
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl dark:bg-amber-500/10 bg-amber-50 border dark:border-amber-500/20 border-amber-200 mb-4 text-xs"
            >
              <span>🧪</span>
              <span class="dark:text-amber-400 text-amber-700 font-semibold"
                >Demo 21 días</span
              >
            </div>
            <h3 class="font-bold dark:text-white text-light-text text-xl mb-2">
              ¿Prefieres ver antes de decidir?
            </h3>
            <p
              class="dark:text-text-secondary text-light-muted text-sm leading-relaxed mb-4"
            >
              Por
              <span class="dark:text-amber-400 text-amber-700 font-bold"
                >$999 MXN</span
              >
              te armamos tu landing real, con tu contenido, publicada y
              funcionando 21 días. Si te convence y contratas, se descuenta del
              anticipo — no pagas nada extra.
            </p>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4"
                  style="color: #f97316"
                />
                Tu landing real con tu contenido
              </li>
              <li
                class="flex items-center gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4"
                  style="color: #f97316"
                />
                Publicada en tuneogocio.devifly.dev
              </li>
              <li
                class="flex items-center gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4"
                  style="color: #f97316"
                />
                $999 se descuentan al contratar cualquier plan
              </li>
            </ul>
          </div>
          <div class="shrink-0 flex flex-col items-center gap-3">
            <a
              :href="waDemo21"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 rounded-2xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg"
              style="
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: #000;
                box-shadow: 0 4px 16px rgba(245, 158, 11, 0.25);
              "
            >
              Solicitar demo 21 días
            </a>
            <p class="dark:text-text-secondary/40 text-light-muted/40 text-xs">
              Sin compromisos · Se desactiva al día 22
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing packages -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <h2
        class="text-3xl font-bold dark:text-white text-light-text text-center mb-4"
      >
        Elige tu plan
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted text-center mb-16 max-w-xl mx-auto text-sm"
      >
        Desde una landing de entrada hasta un portal completo listo para crecer.
      </p>
      <div class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        <div
          v-for="pkg in landingPackages"
          :key="pkg.name"
          class="relative flex flex-col rounded-lg overflow-hidden"
          :class="
            pkg.highlighted
              ? 'border-2'
              : 'border dark:border-base-700/40 border-light-border'
          "
          :style="
            pkg.highlighted
              ? 'border-color: #f97316; background: linear-gradient(145deg, rgba(249,115,22,0.06), rgba(234,88,12,0.04))'
              : ''
          "
        >
          <div
            v-if="pkg.badge"
            class="absolute top-0 right-0 py-1.5 px-4 text-white text-xs font-bold rounded-bl-xl"
            :class="pkg.vip ? 'bg-blue-500' : 'bg-orange-500'"
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
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-6 font-medium"
            >
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
                    (pkg.vip ? 'text-blue-400' : 'text-orange-500')
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
              to="/landings/demo"
              class="block w-full text-center px-4 py-3 rounded-xl font-semibold text-sm transition"
              :class="
                pkg.highlighted
                  ? 'text-white'
                  : pkg.vip
                    ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20'
                    : 'border dark:border-base-700/50 border-light-border dark:text-orange-400 text-orange-500'
              "
              :style="
                pkg.highlighted
                  ? 'background: linear-gradient(135deg, #f97316, #ea580c); box-shadow: 0 0 20px rgba(249,115,22,0.3)'
                  : !pkg.vip
                    ? 'background: rgba(249,115,22,0.06)'
                    : ''
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
              class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm transition hover:text-orange-500"
            >
              <span class="inline-flex items-center gap-2">
                Contratar plan
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison table -->
    <section
      class="dark:bg-base-800/20 bg-white/60 border-y dark:border-base-700/30 border-light-border px-6 py-20"
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-2xl font-bold dark:text-white text-light-text text-center mb-12"
        >
          Comparación de planes
        </h2>
        <div
          class="overflow-x-auto rounded-2xl border dark:border-base-700/30 border-light-border"
        >
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b dark:border-base-700/30 border-light-border">
                <th
                  class="text-left py-4 px-6 dark:text-text-secondary text-light-muted font-medium"
                >
                  Característica
                </th>
                <th
                  class="text-center py-4 px-4 dark:text-white text-light-text font-semibold whitespace-nowrap"
                >
                  One Page
                </th>
                <th
                  class="text-center py-4 px-4 font-semibold whitespace-nowrap text-orange-500"
                >
                  Multi-Sección
                </th>
                <th
                  class="text-center py-4 px-4 text-blue-400 font-semibold whitespace-nowrap"
                >
                  Portal Avanzado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.feature"
                class="border-b dark:border-base-700/20 border-light-border/60 last:border-0 transition-colors hover:dark:bg-base-800/20 hover:bg-orange-50/30"
              >
                <td
                  class="py-3 px-6 dark:text-text-secondary text-light-muted whitespace-nowrap"
                >
                  {{ row.feature }}
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.onePage"
                    name="check"
                    class-name="w-4 h-4 mx-auto dark:text-text-secondary text-light-muted"
                  />
                  <span
                    v-else
                    class="dark:text-text-secondary/30 text-light-muted/30"
                    >-</span
                  >
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.multi"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-orange-500"
                  />
                  <span
                    v-else
                    class="dark:text-text-secondary/30 text-light-muted/30"
                    >-</span
                  >
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.portal"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-blue-400"
                  />
                  <span
                    v-else
                    class="dark:text-text-secondary/30 text-light-muted/30"
                    >-</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Final — warm, inviting -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.05]"
        style="
          background: radial-gradient(
            ellipse at center,
            #f97316,
            transparent 60%
          );
        "
      ></div>
      <div class="relative max-w-3xl mx-auto">
        <h2
          class="text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 tracking-tight leading-tight"
        >
          Empieza a captar clientes
          <span class="relative inline-block">
            hoy mismo
            <span
              class="absolute -bottom-1.5 left-0 w-full h-3 rounded-sm opacity-15"
              style="background: linear-gradient(90deg, #f97316, #3b82f6)"
            ></span>
          </span>
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted mb-10 text-lg max-w-lg mx-auto"
        >
          Cuéntanos la idea, el público y el objetivo. Te entregamos propuesta
          en 24 horas.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-2xl text-white font-bold text-sm transition-all hover:scale-105 hover:shadow-lg"
            style="
              background: linear-gradient(135deg, #f97316, #ea580c);
              box-shadow: 0 4px 16px rgba(249, 115, 22, 0.25);
            "
          >
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-2xl dark:bg-base-800/60 bg-white border dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:text-white hover:text-light-text transition shadow-sm"
          >
            Ver ejemplos de páginas
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
