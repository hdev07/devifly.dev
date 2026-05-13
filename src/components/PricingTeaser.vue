<template>
  <section class="relative py-20 sm:py-28 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-5xl mx-auto px-6">
      <SectionHeader
        align="center"
        :eyebrow="locale === 'es' ? 'Inversión' : 'Investment'"
        :title="locale === 'es' ? 'Precios claros, sin letra chica' : 'Clear pricing, no fine print'"
        :subtitle="locale === 'es'
          ? 'Tres niveles según la complejidad de tu proyecto. Cotizamos a medida si necesitas más.'
          : 'Three tiers by project complexity. We quote custom if you need more.'"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-10">
        <article
          v-for="tier in tiers"
          :key="tier.key"
          class="relative flex flex-col rounded-2xl border p-6 sm:p-7 transition-all duration-300"
          :class="tier.featured
            ? 'border-brand-500/50 dark:bg-brand-500/[0.06] bg-brand-500/[0.04] shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)] md:-translate-y-1'
            : 'dark:bg-base-900/40 bg-white dark:border-base-700/50 border-light-border'"
        >
          <div
            v-if="tier.featured"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wide"
          >
            {{ locale === "es" ? "Más solicitado" : "Most requested" }}
          </div>

          <div class="mb-4">
            <h3 class="font-display text-lg font-bold dark:text-white text-light-text">
              {{ tier.title[locale] }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mt-1 leading-relaxed">
              {{ tier.subtitle[locale] }}
            </p>
          </div>

          <div class="mb-5">
            <span class="text-[11px] font-semibold uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted">
              {{ locale === "es" ? "Desde" : "From" }}
            </span>
            <div class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text tabular-nums mt-1">
              {{ locale === "es" ? tier.priceEs : tier.priceEn }}
            </div>
            <p class="text-xs dark:text-text-secondary text-light-muted mt-1">
              {{ tier.delivery[locale] }}
            </p>
          </div>

          <ul class="space-y-2 mb-6 flex-1">
            <li
              v-for="feat in tier.features[locale]"
              :key="feat"
              class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
            >
              <LucideIcon name="check" class-name="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <router-link
            :to="tier.link"
            class="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition"
            :class="tier.featured
              ? 'bg-brand-500 text-white hover:bg-brand-600'
              : 'bg-brand-500/10 border border-brand-500/25 text-brand-500 hover:bg-brand-500/15'"
          >
            {{ tier.cta[locale] }}
          </router-link>
        </article>
      </div>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p class="text-xs dark:text-text-secondary text-light-muted max-w-md">
          {{ locale === "es"
            ? "* Precios de referencia en MXN. Demo de 21 días disponible en productos seleccionados."
            : "* Reference prices in MXN. 21-day demo available on select products." }}
        </p>
        <router-link
          to="/pricing"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-400 whitespace-nowrap"
        >
          {{ locale === "es" ? "Ver todos los planes" : "See all plans" }}
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { locale } = useI18n();

const tiers = [
  {
    key: "starter",
    featured: false,
    title: { es: "Starter", en: "Starter" },
    subtitle: {
      es: "Invitaciones, catálogos y menús digitales.",
      en: "Invitations, catalogs, and digital menus.",
    },
    priceEs: "$499",
    priceEn: "$29",
    delivery: { es: "MXN · 1-2 semanas", en: "USD · 1-2 weeks" },
    features: {
      es: ["Diseño responsive", "WhatsApp integrado", "Hosting 1 año incluido"],
      en: ["Responsive design", "WhatsApp integrated", "1 year hosting included"],
    },
    cta: { es: "Ver planes", en: "View plans" },
    link: "/pricing",
  },
  {
    key: "growth",
    featured: true,
    title: { es: "Growth", en: "Growth" },
    subtitle: {
      es: "Landings y sitios para salones de eventos.",
      en: "Landings and venue websites.",
    },
    priceEs: "$4,999",
    priceEn: "$299",
    delivery: { es: "MXN · 2-3 semanas", en: "USD · 2-3 weeks" },
    features: {
      es: ["UX orientado a venta", "SEO + analytics", "Soporte 30 días"],
      en: ["Sales-oriented UX", "SEO + analytics", "30-day support"],
    },
    cta: { es: "Ver planes", en: "View plans" },
    link: "/pricing",
  },
  {
    key: "scale",
    featured: false,
    title: { es: "Scale / SaaS", en: "Scale / SaaS" },
    subtitle: {
      es: "Sistemas a medida y plataformas SaaS.",
      en: "Custom systems and SaaS platforms.",
    },
    priceEs: "A cotizar",
    priceEn: "Custom",
    delivery: { es: "MXN · Por alcance", en: "USD · By scope" },
    features: {
      es: ["Arquitectura a medida", "Dashboards + APIs", "Soporte continuo"],
      en: ["Custom architecture", "Dashboards + APIs", "Ongoing support"],
    },
    cta: { es: "Hablar con un experto", en: "Talk to an expert" },
    link: "/contact",
  },
];
</script>
