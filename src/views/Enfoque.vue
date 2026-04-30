<template>
  <main class="pt-24 pb-0">
    <section class="relative py-10 sm:py-14 overflow-hidden">
      <AmbientGlow variant="subtle" />

      <div class="relative max-w-7xl mx-auto px-6 text-center mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border backdrop-blur-md mb-6 text-sm dark:text-text-secondary text-light-muted"
        >
          <LucideIcon name="target" class-name="w-4 h-4 text-brand-500" />
          {{ t("approachPage.badge") }}
        </div>
        <h1 class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-4xl mx-auto leading-tight">
          {{ t("approachPage.title") }}
        </h1>
        <p class="text-lg dark:text-text-secondary text-light-muted max-w-3xl mx-auto">
          {{ t("approachPage.subtitle") }}
        </p>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 mb-24">
        <div class="space-y-6">
        <article
          v-for="item in approachItems"
          :key="item.key"
          class="group relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
        >
          <div class="h-1 w-full bg-linear-to-r from-brand-500 to-cyan-glow"></div>

          <div class="p-8">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-12 h-12 rounded-xl dark:bg-brand-500/15 bg-brand-500/10 border dark:border-brand-500/30 border-brand-500/25 flex items-center justify-center shrink-0">
              <LucideIcon :name="item.icon" class-name="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <h2 class="font-display text-2xl font-bold dark:text-white text-light-text mb-1">
                {{ locale === "es" ? item.titleEs : item.titleEn }}
              </h2>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                {{ locale === "es" ? item.segmentEs : item.segmentEn }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="flex items-start gap-3 p-4 rounded-xl dark:bg-red-500/5 bg-red-500/5 border dark:border-red-400/15 border-red-400/20">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-red-500/15 bg-red-500/10">
                <LucideIcon name="x" class-name="w-3.5 h-3.5 dark:text-red-400 text-red-500" />
              </div>
              <div class="flex-1">
              <span class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-red-400 text-red-500 mb-2 block">
                {{ t("approachPage.columns.problem") }}
              </span>
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                {{ locale === "es" ? item.problemEs : item.problemEn }}
              </p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 rounded-xl dark:bg-brand-500/5 bg-brand-500/5 border dark:border-brand-500/20 border-brand-500/25">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-brand-500/15 bg-brand-500/10">
                <LucideIcon name="zap" class-name="w-3.5 h-3.5 text-brand-400" />
              </div>
              <div class="flex-1">
              <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-2 block">
                {{ t("approachPage.columns.approach") }}
              </span>
              <ul class="space-y-2">
                <li
                  v-for="point in locale === 'es' ? item.approachEs : item.approachEn"
                  :key="point"
                  class="text-sm dark:text-text-secondary text-light-muted flex items-start gap-2 leading-relaxed"
                >
                  <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-brand-400" />
                  {{ point }}
                </li>
              </ul>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 rounded-xl dark:bg-emerald-500/5 bg-emerald-500/5 border dark:border-emerald-400/20 border-emerald-400/25">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-emerald-500/15 bg-emerald-500/10">
                <LucideIcon name="trending-up" class-name="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div class="flex-1">
              <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 mb-2 block">
                {{ t("approachPage.columns.impact") }}
              </span>
              <p class="text-sm font-semibold dark:text-white text-light-text leading-relaxed">
                {{ locale === "es" ? item.impactEs : item.impactEn }}
              </p>
              </div>
            </div>
          </div>
          </div>
        </article>
        </div>
      </div>
    </section>

    <div class="relative dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6 text-center overflow-hidden">
      <div aria-hidden="true" class="absolute inset-0 pointer-events-none dark:opacity-100 opacity-70">
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-brand-500/10 blur-3xl"></div>
      </div>
      <div class="relative">
      <h2 class="font-display text-3xl font-bold dark:text-white text-light-text mb-4">
        {{ t("approachPage.ctaTitle") }}
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-8 max-w-2xl mx-auto">
        {{ t("approachPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-500 via-brand-500 to-cyan-glow text-white font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_55px_rgba(59,130,246,0.55)] hover:brightness-110 transition-all"
      >
        {{ t("approachPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";
import AmbientGlow from "../components/ui/AmbientGlow.vue";

const { t, locale } = useI18n();

const approachItems = [
  {
    key: "landing",
    icon: "layout-template",
    titleEs: "Landing Pages de conversión",
    titleEn: "High-conversion landing pages",
    segmentEs: "Negocios locales, servicios profesionales y marcas personales",
    segmentEn: "Local businesses, professional services, and personal brands",
    problemEs: "Tienen visitas, pero pocas conversaciones reales o solicitudes de venta.",
    problemEn: "They get traffic, but very few real conversations or sales inquiries.",
    approachEs: [
      "Propuesta de valor clara en los primeros segundos",
      "Estructura enfocada en CTA y WhatsApp",
      "Pruebas sociales y mensajes de confianza",
    ],
    approachEn: [
      "Clear value proposition in the first seconds",
      "CTA and WhatsApp-focused structure",
      "Social proof and trust-building messaging",
    ],
    impactEs: "Más prospectos calificados y menor costo por cliente potencial.",
    impactEn: "More qualified leads and lower cost per potential customer.",
  },
  {
    key: "booking",
    icon: "calendar-check",
    titleEs: "Reservaciones y agenda automatizada",
    titleEn: "Bookings and automated scheduling",
    segmentEs: "Salones, consultorios, estudios y servicios por cita",
    segmentEn: "Venues, clinics, studios, and appointment-based services",
    problemEs: "Pierden ventas por seguimiento manual, mensajes dispersos y mala confirmación.",
    problemEn: "They lose sales due to manual follow-up, scattered messages, and poor confirmations.",
    approachEs: [
      "Formulario y calendario conectados al flujo comercial",
      "Recordatorios para reducir ausencias",
      "Panel para controlar disponibilidad y estatus",
    ],
    approachEn: [
      "Form and calendar connected to the sales flow",
      "Reminders to reduce no-shows",
      "Dashboard to track availability and status",
    ],
    impactEs: "Más citas efectivas y operación más predecible semana a semana.",
    impactEn: "More completed appointments and a more predictable weekly operation.",
  },
  {
    key: "catalog",
    icon: "book-open-text",
    titleEs: "Catálogos y menús digitales",
    titleEn: "Digital catalogs and menus",
    segmentEs: "Vendedoras, restaurantes y negocios con inventario dinámico",
    segmentEn: "Sellers, restaurants, and businesses with dynamic inventory",
    problemEs: "Actualizar por chat toma tiempo y provoca errores en precios y productos.",
    problemEn: "Updating through chat takes time and causes pricing/product errors.",
    approachEs: [
      "Catálogo visual fácil de compartir por enlace",
      "Edición rápida de productos, precios y disponibilidad",
      "Flujo de pedido directo a WhatsApp o formulario",
    ],
    approachEn: [
      "Visual catalog easy to share via link",
      "Fast editing of products, pricing, and availability",
      "Order flow directly to WhatsApp or form",
    ],
    impactEs: "Menos fricción para comprar y más pedidos cerrados por canal digital.",
    impactEn: "Less buying friction and more closed orders from digital channels.",
  },
];
</script>
