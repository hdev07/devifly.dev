<script setup>
/**
 * Landing: Sistema PRO de Reservaciones para Salones
 * Estilo visual: Vercel — minimalista, monocromo, tipografía monumental, whitespace generoso
 */
import { ref } from "vue";
import LucideIcon from "../../components/LucideIcon.vue";
import { RouterLink } from "vue-router";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Tengo un salón de eventos y me interesa una demo del Sistema PRO de Reservaciones 🏛️")}`;
const waCotizar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar el Sistema PRO de Reservaciones para mi salón 🏛️")}`;
const waDemo21 = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el demo de 21 días para mi salón de eventos por $999 MXN 🏛️")}`;

const painPoints = [
  "¿Sigues respondiendo lo mismo en WhatsApp todo el día?",
  "¿Pierdes clientes porque no contestas rápido?",
  "¿Te preguntan siempre lo mismo: precios, fechas, paquetes?",
  "¿Tu Instagram no te genera reservaciones reales?",
];

const benefits = [
  { icon: "zap", label: "Más cotizaciones sin esfuerzo" },
  { icon: "clock", label: "Menos tiempo pegado al celular" },
  { icon: "sparkles", label: "Imagen premium que genera confianza" },
  { icon: "calendar-days", label: "Agenda llena de eventos, no de dudas" },
  { icon: "target", label: "Clientes que llegan listos para apartar" },
];

const includes = [
  "Página web profesional optimizada para ventas",
  "Agenda de fechas disponibles (evita perder clientes)",
  "Botón de WhatsApp con mensaje prellenado (más conversiones)",
  "Formulario de cotización inteligente (leads de calidad)",
  "Galería tipo premium (genera deseo)",
  "Integración con Google Maps (fácil de encontrar)",
  "SEO básico para aparecer en Google",
];

const bonuses = [
  {
    icon: "eye",
    title: "Auditoría de Instagram",
    desc: "Mejoramos tu perfil para vender más",
  },
  {
    icon: "pen-tool",
    title: "Textos de venta incluidos",
    desc: "No te preocupes por el copy",
  },
  {
    icon: "sparkles",
    title: "Demo 21 días por $999 MXN",
    desc: "Prueba tu sitio real antes de contratar. Se descuenta al firmar.",
  },
];

const testimonials = [
  {
    quote:
      "Antes perdía clientes por no contestar a tiempo. Ahora mi agenda se llena sola y solo atiendo a los que realmente quieren reservar.",
    name: "Mariana",
    place: "Salón Jardín Encantado",
  },
  {
    quote:
      "Mi página se ve increíble, recibo más mensajes y cierro más eventos. ¡Vale cada peso!",
    name: "Luis",
    place: "Terraza Real",
  },
];

const mockupFeatures = [
  { label: "Agenda interactiva", sub: "Fechas disponibles al instante" },
  { label: "Galería premium", sub: "Fotos que venden tu espacio" },
  { label: "Formulario inteligente", sub: "Solo clientes reales" },
];

const openFaq = ref(null);

const waEsencial = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Esencial del Sistema de Reservaciones para mi salón 🏛️")}`;
const waPro = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Pro del Sistema de Reservaciones para mi salón 🏛️")}`;
const waPremium = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Premium VIP del Sistema de Reservaciones para mi salón 🏛️")}`;

const reservationPackages = [
  {
    name: "Esencial",
    tagline: "Presencia profesional que genera confianza",
    price: "$5,999",
    icon: "building",
    features: [
      "Diseño responsivo premium",
      "Galería de fotos (hasta 20)",
      "Formulario de contacto",
      "Integración WhatsApp",
      "Mapa de ubicación interactivo",
      "SEO local optimizado",
    ],
    excluded: [
      "Cotizador en línea",
      "Calendario de disponibilidad",
      "Galería con videos",
      "Sección paquetes/servicios",
      "Blog de eventos",
      "Google Calendar sync",
      "Panel admin completo",
      "CRM clientes integrado",
      "Pagos anticipo en línea",
      "Contratos digitales",
      "Multi-salón / Sucursales",
      "Analíticas y reportes",
    ],
    note: "Hasta 20 fotos · Entrega 2 semanas",
    demo: "/salones-eventos/demo",
    wa: waEsencial,
  },
  {
    name: "Pro",
    tagline: "Todo para convertir visitas en reservaciones",
    price: "$9,999",
    icon: "building-2",
    features: [
      "Todo lo de Esencial",
      "Cotizador en línea",
      "Calendario de disponibilidad",
      "Galería con videos",
      "Sección paquetes/servicios",
      "Blog de eventos",
      "Google Calendar sync",
    ],
    excluded: [
      "Panel admin completo",
      "CRM clientes integrado",
      "Pagos anticipo en línea",
      "Contratos digitales",
      "Multi-salón / Sucursales",
      "Analíticas y reportes",
    ],
    note: "Fotos ilimitadas + videos · Entrega 3 semanas",
    demo: "/salones-eventos/demo",
    wa: waPro,
    highlighted: true,
    badge: "Más vendido",
  },
  {
    name: "Premium VIP",
    tagline: "Gestión completa de tu negocio de eventos",
    price: "$16,999",
    icon: "gem",
    features: [
      "Todo lo de Pro",
      "Panel admin completo",
      "CRM clientes integrado",
      "Pagos anticipo en línea",
      "Contratos digitales",
      "Multi-salón / Sucursales",
      "Analíticas y reportes",
    ],
    note: "Multi-salón · CRM completo · Entrega 4–5 semanas",
    demo: "/salones-eventos/demo",
    wa: waPremium,
    vip: true,
    badge: "VIP",
  },
];

const reservationComparisonRows = [
  { feature: "Diseño responsivo premium", col1: true, col2: true, col3: true },
  { feature: "Galería de fotos", col1: true, col2: true, col3: true },
  { feature: "Formulario de contacto", col1: true, col2: true, col3: true },
  { feature: "Integración WhatsApp", col1: true, col2: true, col3: true },
  {
    feature: "Mapa de ubicación interactivo",
    col1: true,
    col2: true,
    col3: true,
  },
  { feature: "SEO local optimizado", col1: true, col2: true, col3: true },
  { feature: "Cotizador en línea", col1: false, col2: true, col3: true },
  {
    feature: "Calendario de disponibilidad",
    col1: false,
    col2: true,
    col3: true,
  },
  { feature: "Galería con videos", col1: false, col2: true, col3: true },
  {
    feature: "Sección paquetes / servicios",
    col1: false,
    col2: true,
    col3: true,
  },
  { feature: "Blog de eventos", col1: false, col2: true, col3: true },
  { feature: "Google Calendar sync", col1: false, col2: true, col3: true },
  { feature: "Panel admin completo", col1: false, col2: false, col3: true },
  { feature: "CRM clientes integrado", col1: false, col2: false, col3: true },
  { feature: "Pagos anticipo en línea", col1: false, col2: false, col3: true },
  { feature: "Contratos digitales", col1: false, col2: false, col3: true },
  { feature: "Multi-salón / Sucursales", col1: false, col2: false, col3: true },
  { feature: "Analíticas y reportes", col1: false, col2: false, col3: true },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0">
    <!-- Hero — Vercel: left-aligned, monumental type, restrained -->
    <section class="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-6 font-mono"
      >
        Sistema PRO de Reservaciones
      </p>
      <h1
        class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white text-light-text leading-[1.05] tracking-tight max-w-4xl mb-8"
      >
        ¿Listo para llenar tu agenda
        <span class="dark:text-brand-400 text-brand-600"
          >sin perder tiempo</span
        >
        respondiendo mensajes repetitivos?
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-xl mb-10 leading-relaxed"
      >
        Una página web que trabaja por ti 24/7, responde dudas, filtra clientes
        reales y te ayuda a cerrar más eventos.
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          :href="waDemo"
          target="_blank"
          rel="noopener noreferrer"
          class="px-7 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition dark:bg-white dark:text-black"
        >
          Quiero más reservaciones
        </a>
        <a
          :href="waCotizar"
          target="_blank"
          rel="noopener noreferrer"
          class="px-7 py-3.5 rounded-lg border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:border-white hover:dark:text-white hover:border-light-text hover:text-light-text transition"
        >
          Solicita tu demo gratis
        </a>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-6xl mx-auto px-6">
      <div class="h-px dark:bg-base-700/50 bg-light-border"></div>
    </div>

    <!-- Pain points — numbered, minimal -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        01 / El Problema
      </p>
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-12 max-w-2xl"
      >
        ¿Te identificas con esto?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
        <div
          v-for="(pain, i) in painPoints"
          :key="i"
          class="flex items-start gap-4 py-4 border-l-2 dark:border-base-600 border-light-border pl-6"
        >
          <span
            class="font-mono text-xs dark:text-text-secondary/40 text-light-muted/40 mt-0.5"
            >0{{ i + 1 }}</span
          >
          <p class="dark:text-text-secondary text-light-muted leading-relaxed">
            {{ pain }}
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-6xl mx-auto px-6">
      <div class="h-px dark:bg-base-700/50 bg-light-border"></div>
    </div>

    <!-- Solution -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        02 / La Solución
      </p>
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-6 max-w-3xl"
      >
        Sistema PRO de Reservaciones
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted max-w-2xl mb-12 text-lg leading-relaxed"
      >
        Imagina tener una página web que trabaja por ti 24/7, responde dudas,
        filtra clientes reales y te ayuda a cerrar más eventos… mientras tú te
        enfocas en lo importante.
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div class="py-6 text-center">
          <LucideIcon
            name="zap"
            class-name="w-5 h-5 mx-auto mb-3 dark:text-white text-light-text"
          />
          <p class="text-sm dark:text-text-secondary text-light-muted">
            Automatiza respuestas
          </p>
        </div>
        <div class="py-6 text-center">
          <LucideIcon
            name="calendar-days"
            class-name="w-5 h-5 mx-auto mb-3 dark:text-white text-light-text"
          />
          <p class="text-sm dark:text-text-secondary text-light-muted">
            Agenda de fechas
          </p>
        </div>
        <div class="py-6 text-center">
          <LucideIcon
            name="target"
            class-name="w-5 h-5 mx-auto mb-3 dark:text-white text-light-text"
          />
          <p class="text-sm dark:text-text-secondary text-light-muted">
            Cotizaciones reales
          </p>
        </div>
        <div class="py-6 text-center">
          <LucideIcon
            name="sparkles"
            class-name="w-5 h-5 mx-auto mb-3 dark:text-white text-light-text"
          />
          <p class="text-sm dark:text-text-secondary text-light-muted">
            Imagen profesional
          </p>
        </div>
      </div>
    </section>

    <!-- Benefits — horizontal grid -->
    <section class="dark:bg-base-900/50 bg-light-card/40 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <p
          class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
        >
          03 / Beneficios
        </p>
        <h2
          class="font-display text-3xl font-bold dark:text-white text-light-text mb-16"
        >
          Lo que vas a notar desde el primer mes
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div v-for="b in benefits" :key="b.label" class="group">
            <div
              class="w-10 h-10 rounded-lg dark:bg-base-800 bg-light-surface border dark:border-base-700 border-light-border flex items-center justify-center mb-4 group-hover:dark:border-white/30 group-hover:border-light-text/30 transition"
            >
              <LucideIcon
                :name="b.icon"
                class-name="w-4 h-4 dark:text-white text-light-text"
              />
            </div>
            <p
              class="text-sm dark:text-text-primary text-light-text font-medium"
            >
              {{ b.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual mockup — browser frame Vercel-style -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        04 / Experiencia Visual
      </p>
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-12"
      >
        Así se ve tu nueva página
      </h2>
      <div
        class="rounded-xl border dark:border-base-700 border-light-border overflow-hidden shadow-2xl"
      >
        <!-- Browser bar -->
        <div
          class="flex items-center gap-2 px-5 py-3 border-b"
          style="background: #0a0f0d; border-color: rgba(16, 185, 129, 0.15)"
        >
          <div class="flex gap-1.5">
            <div class="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-amber-400/50"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
          </div>
          <div
            class="flex-1 mx-4 py-1.5 px-4 rounded-md text-xs font-mono"
            style="
              background: rgba(16, 185, 129, 0.04);
              color: rgba(16, 185, 129, 0.4);
              border: 1px solid rgba(16, 185, 129, 0.08);
            "
          >
            jardín-victoria.com
          </div>
        </div>
        <!-- Content preview — cinematic dark salon -->
        <div class="relative" style="background: #0a0f0d">
          <!-- Hero area -->
          <div class="relative px-8 sm:px-12 pt-10 pb-8 overflow-hidden">
            <!-- Ambient glow -->
            <div
              class="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px]"
              style="background: rgba(16, 185, 129, 0.06)"
            ></div>
            <div
              class="absolute bottom-0 left-1/4 w-32 h-32 rounded-full blur-[40px]"
              style="background: rgba(5, 150, 105, 0.04)"
            ></div>
            <!-- Nav -->
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center gap-2">
                <div
                  class="w-7 h-7 rounded-full flex items-center justify-center"
                  style="background: linear-gradient(135deg, #10b981, #059669)"
                >
                  <span class="text-white text-[10px] font-bold">JV</span>
                </div>
                <span class="text-xs font-semibold text-white"
                  >Jardín Victoria</span
                >
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[10px]" style="color: rgba(16, 185, 129, 0.5)"
                  >Galería</span
                >
                <span class="text-[10px]" style="color: rgba(16, 185, 129, 0.5)"
                  >Paquetes</span
                >
                <span
                  class="px-3 py-1.5 rounded-lg text-[10px] font-semibold text-white"
                  style="background: linear-gradient(135deg, #10b981, #059669)"
                  >Cotizar</span
                >
              </div>
            </div>
            <!-- Title -->
            <p
              class="text-[10px] uppercase tracking-widest mb-2"
              style="color: rgba(16, 185, 129, 0.5)"
            >
              Salón de eventos
            </p>
            <p
              class="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3"
              style="font-family: system-ui"
            >
              Jardín <span style="color: #10b981">Victoria</span>
            </p>
            <p
              class="text-xs mb-5 max-w-md"
              style="color: rgba(255, 255, 255, 0.4)"
            >
              El lugar perfecto para hacer tus sueños realidad. Bodas, XV años y
              eventos corporativos.
            </p>
            <!-- CTA buttons -->
            <div class="flex gap-3 mb-6">
              <div
                class="px-4 py-2 rounded-lg text-[11px] font-semibold text-white"
                style="background: linear-gradient(135deg, #10b981, #059669)"
              >
                <span class="flex items-center gap-1.5">
                  <LucideIcon name="calendar" class-name="w-3 h-3" />
                  Reservar evento
                </span>
              </div>
              <div
                class="px-4 py-2 rounded-lg text-[11px] font-semibold"
                style="
                  border: 1px solid rgba(16, 185, 129, 0.2);
                  color: rgba(16, 185, 129, 0.7);
                "
              >
                <span class="flex items-center gap-1.5">
                  <LucideIcon name="images" class-name="w-3 h-3" />
                  Ver galería
                </span>
              </div>
            </div>
            <!-- Availability badge -->
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px]"
              style="
                background: rgba(16, 185, 129, 0.06);
                border: 1px solid rgba(16, 185, 129, 0.12);
                color: #10b981;
              "
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
              ></span>
              Fechas disponibles 2026
            </div>
          </div>
          <!-- Feature cards row -->
          <div class="px-8 sm:px-12 pb-8 grid grid-cols-3 gap-3">
            <div
              v-for="feat in mockupFeatures"
              :key="feat.label"
              class="p-4 rounded-lg"
              style="
                background: rgba(16, 185, 129, 0.03);
                border: 1px solid rgba(16, 185, 129, 0.08);
              "
            >
              <p class="font-semibold text-white text-[11px] mb-1">
                {{ feat.label }}
              </p>
              <p class="text-[9px]" style="color: rgba(255, 255, 255, 0.3)">
                {{ feat.sub }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <router-link
          to="/salones-eventos/demo"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted text-sm font-semibold hover:dark:border-white hover:dark:text-white hover:border-light-text hover:text-light-text transition"
        >
          <LucideIcon name="eye" class-name="w-4 h-4" />
          Ver demo en vivo
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </section>

    <!-- What's included -->
    <section class="dark:bg-base-900/50 bg-light-card/40 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <p
          class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
        >
          05 / Incluye
        </p>
        <h2
          class="font-display text-3xl font-bold dark:text-white text-light-text mb-12"
        >
          ¿Qué incluye el Sistema PRO?
        </h2>
        <div class="space-y-0">
          <div
            v-for="(item, i) in includes"
            :key="i"
            class="flex items-center gap-6 py-5 border-b dark:border-base-700/40 border-light-border/60"
          >
            <span
              class="font-mono text-xs dark:text-text-secondary/30 text-light-muted/30 w-6 text-right shrink-0"
              >{{ String(i + 1).padStart(2, "0") }}</span
            >
            <LucideIcon
              name="check"
              class-name="w-4 h-4 dark:text-brand-400 text-brand-600 shrink-0"
            />
            <p class="text-sm dark:text-text-primary text-light-text">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bonuses -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        06 / Bonos Exclusivos
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div
          v-for="bonus in bonuses"
          :key="bonus.title"
          class="p-6 rounded-xl border dark:border-base-700/50 border-light-border hover:dark:border-base-600 hover:border-light-muted/30 transition"
        >
          <LucideIcon
            :name="bonus.icon"
            class-name="w-5 h-5 dark:text-brand-400 text-brand-600 mb-4"
          />
          <h3
            class="font-semibold dark:text-white text-light-text text-sm mb-1"
          >
            {{ bonus.title }}
          </h3>
          <p class="text-xs dark:text-text-secondary text-light-muted">
            {{ bonus.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-6xl mx-auto px-6">
      <div class="h-px dark:bg-base-700/50 bg-light-border"></div>
    </div>

    <!-- Testimonials -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-12 font-mono"
      >
        07 / Lo que dicen otros dueños de salones
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div v-for="t in testimonials" :key="t.name">
          <p
            class="font-display text-4xl font-bold dark:text-base-600/60 text-light-border leading-none mb-4"
          >
            "
          </p>
          <p
            class="dark:text-text-primary text-light-text leading-relaxed mb-6 text-lg"
          >
            {{ t.quote }}
          </p>
          <div>
            <p class="font-semibold dark:text-white text-light-text text-sm">
              {{ t.name }}
            </p>
            <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">
              {{ t.place }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Guarantee + Offer -->
    <section class="dark:bg-base-900/50 bg-light-card/40 py-24 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <LucideIcon
          name="shield"
          class-name="w-8 h-8 mx-auto mb-6 dark:text-brand-400 text-brand-600"
        />
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text mb-4"
        >
          Garantía sin riesgo
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted mb-8 leading-relaxed"
        >
          Si no recibes más solicitudes en el primer mes, optimizamos tu página
          sin costo hasta que lo logres.
        </p>
        <p
          class="text-xs dark:text-text-secondary/40 text-light-muted/40 uppercase tracking-wider"
        >
          Invertir en tu sistema de reservaciones es invertir en más eventos,
          más ingresos y menos estrés.
        </p>
      </div>
    </section>

    <!-- Pricing packages -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        06 / Planes
      </p>
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4 max-w-2xl"
      >
        Elige tu plan
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-16 max-w-xl text-base leading-relaxed"
      >
        Desde una página profesional hasta un sistema completo de gestión de
        eventos.
      </p>
      <div class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        <div
          v-for="pkg in reservationPackages"
          :key="pkg.name"
          class="relative flex flex-col rounded-lg overflow-hidden"
          :class="
            pkg.highlighted
              ? 'border-2 dark:border-white border-light-text'
              : 'border dark:border-base-700 border-light-border'
          "
        >
          <div
            v-if="pkg.badge"
            class="absolute top-0 right-0 py-1.5 px-4 text-sm font-bold rounded-bl-xl"
            :class="
              pkg.vip ? 'bg-emerald-500 text-white' : 'bg-white text-black'
            "
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
            <div class="flex items-center gap-3 mb-3">
              <LucideIcon
                :name="pkg.icon"
                :class-name="
                  'w-5 h-5 ' +
                  (pkg.vip
                    ? 'text-emerald-400'
                    : pkg.highlighted
                      ? 'dark:text-white text-light-text'
                      : 'dark:text-text-secondary text-light-muted')
                "
              />
              <h3
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                {{ pkg.name }}
              </h3>
            </div>
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
            <ul class="space-y-3 mb-4">
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
                      ? 'text-emerald-400'
                      : pkg.highlighted
                        ? 'dark:text-white text-light-text'
                        : 'dark:text-text-secondary/60 text-light-muted/60')
                  "
                />
                {{ f }}
              </li>
            </ul>
            <ul
              v-if="pkg.excluded?.length"
              class="space-y-3 mb-4 border-t dark:border-base-700/40 border-light-border pt-4"
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
            <p
              v-if="pkg.note"
              class="text-xs dark:text-text-secondary/50 text-light-muted/50 font-mono"
            >
              {{ pkg.note }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              :to="pkg.demo"
              class="block w-full text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition"
              :class="
                pkg.highlighted
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : pkg.vip
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                    : 'border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted hover:dark:border-white hover:dark:text-white'
              "
            >
              <span class="inline-flex items-center gap-2">
                <LucideIcon name="search" class-name="w-4 h-4" />
                Demo
              </span>
            </router-link>
            <a
              :href="pkg.wa"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-2.5 rounded-lg border dark:border-base-700 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm transition hover:dark:border-white hover:dark:text-white hover:border-light-text hover:text-light-text"
            >
              <span class="inline-flex items-center gap-2">
                Contratar
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-6xl mx-auto px-6">
      <div class="h-px dark:bg-base-700/50 bg-light-border"></div>
    </div>

    <!-- Demo 21 días -->
    <section class="max-w-5xl mx-auto px-6 py-24">
      <div
        class="rounded-2xl border dark:border-base-700/40 border-light-border dark:bg-base-900/40 bg-light-card/60 p-8 md:p-12"
      >
        <div class="text-center mb-10">
          <p
            class="text-xs tracking-[0.2em] uppercase dark:text-amber-400/70 text-amber-600/70 mb-3 font-mono"
          >
            Prueba antes de decidir
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            Demo 21 días por
            <span class="dark:text-amber-400 text-amber-600">$999 MXN</span>
          </h2>
          <p
            class="dark:text-text-secondary text-light-muted max-w-2xl mx-auto text-base leading-relaxed"
          >
            Te armamos el sitio de tu salón con tu contenido real, publicado y
            funcionando durante 21 días. Si decides contratar, los $999 se
            descuentan del anticipo.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div
            class="p-5 rounded-xl dark:bg-base-800/50 bg-light-surface border dark:border-base-700/40 border-light-border text-center"
          >
            <div
              class="w-10 h-10 rounded-xl dark:bg-base-700/50 bg-white border dark:border-base-600/50 border-light-border flex items-center justify-center mx-auto mb-3"
            >
              <LucideIcon
                name="image"
                class-name="w-5 h-5 dark:text-white text-light-text"
              />
            </div>
            <p
              class="dark:text-white text-light-text font-semibold text-sm mb-1"
            >
              Tu salón real
            </p>
            <p class="dark:text-text-secondary/60 text-light-muted/60 text-xs">
              Con tus fotos, servicios y datos reales
            </p>
          </div>
          <div
            class="p-5 rounded-xl dark:bg-base-800/50 bg-light-surface border dark:border-base-700/40 border-light-border text-center"
          >
            <div
              class="w-10 h-10 rounded-xl dark:bg-base-700/50 bg-white border dark:border-base-600/50 border-light-border flex items-center justify-center mx-auto mb-3"
            >
              <LucideIcon
                name="share-2"
                class-name="w-5 h-5 dark:text-white text-light-text"
              />
            </div>
            <p
              class="dark:text-white text-light-text font-semibold text-sm mb-1"
            >
              Publicado y compartible
            </p>
            <p class="dark:text-text-secondary/60 text-light-muted/60 text-xs">
              Enséñalo a clientes, compártelo en redes
            </p>
          </div>
          <div
            class="p-5 rounded-xl dark:bg-base-800/50 bg-light-surface border dark:border-base-700/40 border-light-border text-center"
          >
            <div
              class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3"
            >
              <LucideIcon name="receipt" class-name="w-5 h-5 text-amber-500" />
            </div>
            <p
              class="dark:text-white text-light-text font-semibold text-sm mb-1"
            >
              Se descuenta al contratar
            </p>
            <p class="dark:text-text-secondary/60 text-light-muted/60 text-xs">
              Los $999 se restan del anticipo de cualquier plan
            </p>
          </div>
        </div>
        <div class="text-center">
          <a
            :href="waDemo21"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-black font-bold text-sm hover:bg-neutral-200 transition dark:bg-white dark:text-black"
          >
            Solicitar demo de 21 días
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
          <p
            class="dark:text-text-secondary/40 text-light-muted/40 text-xs mt-4 font-mono"
          >
            Si no te convence, se desactiva al día 22. Sin compromisos.
          </p>
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
        Elige el sistema que necesita tu salón.
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
                Esencial
              </th>
              <th
                class="text-center px-4 py-4 dark:text-white text-light-text font-semibold"
              >
                Pro
              </th>
              <th class="text-center px-4 py-4 text-emerald-400 font-semibold">
                Premium VIP
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in reservationComparisonRows"
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
                  class-name="w-4 h-4 dark:text-white text-light-text mx-auto"
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
                  class-name="w-4 h-4 dark:text-white text-light-text mx-auto"
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
                  class-name="w-4 h-4 text-emerald-400 mx-auto"
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

    <!-- CTA Final -->
    <section class="py-32 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h2
          class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 tracking-tight"
        >
          ¿Listo para llenar tu agenda?
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-10 text-lg">
          No es solo una página web, es el sistema que te va a ayudar a
          conseguir más eventos, sin perder tiempo y con una imagen profesional.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 rounded-lg bg-white text-black font-bold text-sm hover:bg-neutral-200 transition dark:bg-white dark:text-black"
          >
            Quiero más reservaciones
          </a>
          <a
            :href="waCotizar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 rounded-lg border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:text-white hover:text-light-text transition"
          >
            Quiero cotizar mi sistema
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
