<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        align="center"
        :eyebrow="locale === 'es' ? 'Inversión transparente' : 'Transparent investment'"
        :title="locale === 'es' ? 'Precios desde el día uno. Sin sorpresas.' : 'Pricing from day one. No surprises.'"
        :subtitle="locale === 'es'
          ? 'Cada producto tiene un punto de entrada claro. Cotizamos a medida si tu proyecto necesita más.'
          : 'Every product has a clear entry point. We quote custom if your project needs more.'"
      />

      <!-- Pricing tiles -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="(tier, i) in tiers"
          :key="tier.key"
          data-animate
          :class="[
            tier.featured
              ? 'lg:scale-[1.03] lg:-translate-y-2 dark:bg-gradient-to-b dark:from-brand-500/10 from-brand-500/5 to-transparent dark:border-brand-500/35 border-brand-500/40'
              : 'dark:bg-base-900/55 bg-light-surface/85 dark:border-white/8 border-light-border',
            `delay-${(i + 1) * 100}`,
          ]"
          class="relative rounded-2xl border backdrop-blur-xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50"
        >
          <!-- Featured badge -->
          <div v-if="tier.featured" class="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-cyan-glow text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
            <LucideIcon name="flame" class-name="w-3 h-3" />
            {{ locale === "es" ? "Más solicitado" : "Most requested" }}
          </div>

          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5" :class="tier.iconBg">
            <LucideIcon :name="tier.icon" :class-name="`w-5 h-5 ${tier.iconColor}`" />
          </div>

          <!-- Title -->
          <h3 class="font-display text-xl font-bold dark:text-white text-light-text mb-2">
            {{ tier.title[locale] }}
          </h3>
          <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed mb-6 min-h-[42px]">
            {{ tier.subtitle[locale] }}
          </p>

          <!-- Price -->
          <div class="mb-6">
            <span class="text-[11px] font-bold uppercase tracking-[0.2em] dark:text-text-secondary text-light-muted">
              {{ locale === "es" ? "Desde" : "From" }}
            </span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="font-display text-4xl sm:text-5xl font-bold text-gradient tabular-nums leading-none">
                {{ locale === "es" ? tier.priceEs : tier.priceEn }}
              </span>
            </div>
            <div class="text-xs dark:text-text-secondary text-light-muted mt-2">
              {{ tier.delivery[locale] }}
            </div>
          </div>

          <!-- Features -->
          <ul class="space-y-2.5 mb-7">
            <li v-for="feat in tier.features[locale]" :key="feat" class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted">
              <LucideIcon name="check" class-name="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <router-link
            :to="tier.link"
            class="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm transition-all"
            :class="tier.featured
              ? 'bg-gradient-to-r from-brand-500 to-cyan-glow text-white shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_45px_rgba(59,130,246,0.55)]'
              : 'dark:bg-white/5 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text hover:dark:border-brand-500/40 hover:border-brand-500/50'"
          >
            {{ tier.cta[locale] }}
            <span aria-hidden="true">→</span>
          </router-link>
        </article>
      </div>

      <!-- Footnote + full pricing CTA -->
      <div data-animate class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 text-center delay-500">
        <p class="text-sm dark:text-text-secondary text-light-muted">
          {{ locale === "es"
            ? "* Precios de referencia en MXN. Demo de 21 días disponible para validar antes de pagar el total."
            : "* Reference prices in MXN. 21-day demo available to validate before paying the full amount." }}
        </p>
        <router-link
          to="/pricing"
          class="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 whitespace-nowrap"
        >
          {{ locale === "es" ? "Ver todos los precios" : "See all pricing" }}
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
    icon: "rocket",
    iconBg: "dark:bg-brand-500/15 bg-brand-500/10",
    iconColor: "text-brand-400",
    featured: false,
    title: { es: "Starter", en: "Starter" },
    subtitle: {
      es: "Invitaciones, catálogos y menús digitales. Listos en menos de 2 semanas.",
      en: "Invitations, catalogs, and digital menus. Ready in under 2 weeks.",
    },
    priceEs: "$499",
    priceEn: "$29",
    delivery: { es: "MXN · Entrega 1-2 semanas", en: "USD · 1-2 week delivery" },
    features: {
      es: ["Diseño responsive premium", "WhatsApp integrado", "Hosting + dominio incluido (1 año)", "Demo de 21 días disponible"],
      en: ["Premium responsive design", "WhatsApp integrated", "Hosting + domain included (1 year)", "21-day demo available"],
    },
    cta: { es: "Cotizar Starter", en: "Quote Starter" },
    link: "/products",
  },
  {
    key: "growth",
    icon: "trending-up",
    iconBg: "dark:bg-brand-500/15 bg-brand-500/10",
    iconColor: "text-brand-400",
    featured: true,
    title: { es: "Growth", en: "Growth" },
    subtitle: {
      es: "Landings de alta conversión y sitios para salones de eventos con cotizador.",
      en: "High-conversion landings and venue sites with online quoter.",
    },
    priceEs: "$4,999",
    priceEn: "$299",
    delivery: { es: "MXN · Entrega 2-3 semanas", en: "USD · 2-3 week delivery" },
    features: {
      es: ["UX orientado a venta", "SEO + analytics configurados", "Tests A/B ready", "Soporte 30 días incluido", "Cotizador online (en Pro)"],
      en: ["Sales-oriented UX", "SEO + analytics configured", "A/B test ready", "30-day support included", "Online quoter (Pro plan)"],
    },
    cta: { es: "Cotizar Growth", en: "Quote Growth" },
    link: "/landings",
  },
  {
    key: "scale",
    icon: "cpu",
    iconBg: "dark:bg-cyan-glow/15 bg-cyan-500/10",
    iconColor: "dark:text-cyan-glow text-cyan-600",
    featured: false,
    title: { es: "Scale / SaaS", en: "Scale / SaaS" },
    subtitle: {
      es: "Sistemas a medida, multi-tenant y plataformas SaaS completas con dashboards.",
      en: "Custom systems, multi-tenant, and full SaaS platforms with dashboards.",
    },
    priceEs: "Cotización",
    priceEn: "Quote",
    delivery: { es: "MXN · Por alcance", en: "USD · By scope" },
    features: {
      es: ["Arquitectura multi-tenant", "Dashboards + APIs documentadas", "Integraciones con pasarelas y CRMs", "CI/CD y monitoreo", "Soporte continuo"],
      en: ["Multi-tenant architecture", "Dashboards + documented APIs", "Gateway and CRM integrations", "CI/CD and monitoring", "Continuous support"],
    },
    cta: { es: "Hablar con un experto", en: "Talk to an expert" },
    link: "/contact",
  },
];
</script>
