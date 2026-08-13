<template>
  <section id="demos" class="relative py-24 sm:py-32 overflow-hidden scroll-mt-20">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        :eyebrow="t('demos.eyebrow')"
        :title="t('demos.title')"
        :subtitle="t('demos.subtitle')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <router-link
          v-for="(demo, i) in demos"
          :key="demo.key"
          :to="demo.href"
          data-animate
          :class="`delay-${(i + 1) * 100}`"
          class="group relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
        >
          <div
            class="relative aspect-[16/11] overflow-hidden dark:bg-zinc-950 bg-zinc-100"
          >
            <img
              :src="demo.thumb"
              :alt="demo.title[locale]"
              class="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-0"
              loading="lazy"
            />
            <img
              :src="demo.preview"
              :alt="demo.title[locale]"
              class="absolute inset-0 h-full w-full object-cover object-top opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"
            />
            <div
              class="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3"
            >
              <div>
                <h3 class="font-display text-lg font-bold text-white">
                  {{ demo.title[locale] }}
                </h3>
                <p class="text-xs text-white/70 mt-0.5">
                  {{ demo.subtitle[locale] }}
                </p>
              </div>
              <span
                class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white group-hover:bg-brand-500/90 transition-colors"
              >
                <LucideIcon name="play" class-name="w-4 h-4" />
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";
import LucideIcon from "./LucideIcon.vue";
// Capturas reales de cada demo (portada + una sección interior para el hover).
// Se regeneran con scratchpad/shots.mjs contra el dev server.
import invitacionesThumb from "../assets/img/demos/invitaciones-thumb.jpg";
import invitacionesPreview from "../assets/img/demos/invitaciones-preview.jpg";
import menusThumb from "../assets/img/demos/menus-thumb.jpg";
import menusPreview from "../assets/img/demos/menus-preview.jpg";
import catalogosThumb from "../assets/img/demos/catalogos-thumb.jpg";
import catalogosPreview from "../assets/img/demos/catalogos-preview.jpg";
import salonesThumb from "../assets/img/demos/salones-thumb.jpg";
import salonesPreview from "../assets/img/demos/salones-preview.jpg";
import landingThumb from "../assets/img/demos/landing-thumb.jpg";
import landingPreview from "../assets/img/demos/landing-preview.jpg";

const { t, locale } = useI18n();

const demos = computed(() => [
  {
    key: "invitaciones",
    href: "/invitaciones/premium",
    thumb: invitacionesThumb,
    preview: invitacionesPreview,
    title: { es: "Invitaciones digitales", en: "Digital invitations" },
    subtitle: {
      es: "Boda · RSVP, pases y galería",
      en: "Wedding · RSVP, passes and gallery",
    },
  },
  {
    key: "menus",
    href: "/menus-digitales/premium",
    thumb: menusThumb,
    preview: menusPreview,
    title: { es: "Menús digitales", en: "Digital menus" },
    subtitle: {
      es: "Restaurante · 3 sucursales y alérgenos",
      en: "Restaurant · 3 branches and allergens",
    },
  },
  {
    key: "catalogos",
    href: "/catalogos/premium",
    thumb: catalogosThumb,
    preview: catalogosPreview,
    title: { es: "Catálogos digitales", en: "Digital catalogs" },
    subtitle: {
      es: "Joyería · Carrito y pago en línea",
      en: "Jewelry · Cart and online payment",
    },
  },
  {
    key: "salones",
    href: "/salones-eventos/premium",
    thumb: salonesThumb,
    preview: salonesPreview,
    title: { es: "Salones de eventos", en: "Event venues" },
    subtitle: {
      es: "Cotizador, calendario y paquetes",
      en: "Quote builder, calendar and packages",
    },
  },
  {
    key: "landing",
    href: "/landing-pages/premium",
    thumb: landingThumb,
    preview: landingPreview,
    title: { es: "Landing pages", en: "Landing pages" },
    subtitle: {
      es: "Negocio local · Formulario y prueba social",
      en: "Local business · Form and social proof",
    },
  },
]);
</script>
