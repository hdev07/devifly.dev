<template>
  <section id="services" class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        :eyebrow="locale === 'es' ? 'Servicios' : 'Services'"
        :title="locale === 'es' ? 'Resolvemos los problemas que cuestan ventas' : 'We solve the problems costing you sales'"
        :subtitle="locale === 'es'
          ? 'Cada servicio nace de un problema real que vemos en negocios todos los dias. Asi atacamos cada uno.'
          : 'Every service starts from a real problem we see in businesses every day. Here is how we tackle each.'"
      />

      <!-- Service cards: P -> S -> R -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="(svc, i) in services"
          :key="svc.key"
          data-animate
          :class="`delay-${(i + 1) * 100}`"
          class="group relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
        >
          <!-- Top accent bar -->
          <div class="h-1 w-full" :class="svc.accent"></div>

          <div class="p-6 sm:p-7 flex flex-col gap-5 h-full">
            <!-- Icon + title -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                :class="svc.iconBg"
              >
                <LucideIcon :name="svc.icon" :class-name="`w-5 h-5 ${svc.iconColor}`" />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-display text-lg font-bold dark:text-white text-light-text leading-snug">
                  {{ svc.title[locale] }}
                </h3>
                <p class="text-xs uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mt-1">
                  {{ svc.tag[locale] }}
                </p>
              </div>
            </div>

            <!-- Problem -->
            <div class="flex items-start gap-3 p-4 rounded-xl dark:bg-red-500/5 bg-red-500/5 border dark:border-red-400/15 border-red-400/20">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-red-500/15 bg-red-500/10">
                <LucideIcon name="x" class-name="w-3.5 h-3.5 dark:text-red-400 text-red-500" />
              </div>
              <div class="flex-1">
                <span class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-red-400 text-red-500 block mb-1">
                  {{ locale === "es" ? "Problema" : "Problem" }}
                </span>
                <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                  {{ svc.problem[locale] }}
                </p>
              </div>
            </div>

            <!-- Solution -->
            <div class="flex items-start gap-3 p-4 rounded-xl dark:bg-brand-500/5 bg-brand-500/5 border dark:border-brand-500/20 border-brand-500/25">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-brand-500/15 bg-brand-500/10">
                <LucideIcon name="zap" class-name="w-3.5 h-3.5 text-brand-400" />
              </div>
              <div class="flex-1">
                <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 block mb-1">
                  {{ locale === "es" ? "Solución" : "Solution" }}
                </span>
                <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                  {{ svc.solution[locale] }}
                </p>
              </div>
            </div>

            <!-- Result -->
            <div class="mt-auto flex items-start gap-3 p-4 rounded-xl dark:bg-emerald-500/5 bg-emerald-500/5 border dark:border-emerald-400/20 border-emerald-400/25">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-emerald-500/15 bg-emerald-500/10">
                <LucideIcon name="trending-up" class-name="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div class="flex-1">
                <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 block mb-1">
                  {{ locale === "es" ? "Resultado" : "Result" }}
                </span>
                <p class="text-sm font-semibold dark:text-white text-light-text leading-relaxed">
                  {{ svc.result[locale] }}
                </p>
              </div>
            </div>

            <!-- CTA -->
            <router-link
              :to="svc.link"
              class="inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-light-card border dark:border-white/8 border-light-border dark:text-white text-light-text text-xs font-semibold transition-all hover:dark:border-brand-500/40 hover:border-brand-500/50 group/cta"
            >
              <span>{{ svc.cta[locale] }}</span>
              <LucideIcon name="arrow-right" class-name="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
            </router-link>
          </div>
        </article>
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

const services = [
  {
    key: "landing",
    icon: "rocket",
    iconBg: "dark:bg-brand-500/15 bg-brand-500/10",
    iconColor: "text-brand-400",
    accent: "bg-gradient-to-r from-brand-500 to-cyan-glow",
    title: { es: "Landing de Alta Conversión", en: "High-Conversion Landing" },
    tag: { es: "Web · Conversión", en: "Web · Conversion" },
    problem: {
      es: "Inviertes en ads pero la página convierte mal y el costo por lead se dispara.",
      en: "You spend on ads but the page converts poorly and CPL skyrockets.",
    },
    solution: {
      es: "Diseño orientado a una sola acción, copy persuasivo y carga ultra-rápida con tracking listo.",
      en: "Single-action design, persuasive copy, and ultra-fast load with tracking ready.",
    },
    result: {
      es: "+45% en leads y reducción significativa del costo de adquisición.",
      en: "+45% in leads and significantly lower acquisition cost.",
    },
    cta: { es: "Ver landing en vivo", en: "See live landing" },
    link: "/landings",
  },
  {
    key: "invitaciones",
    icon: "party-popper",
    iconBg: "dark:bg-pink-500/15 bg-pink-500/10",
    iconColor: "dark:text-pink-400 text-pink-500",
    accent: "bg-gradient-to-r from-pink-500 to-violet-soft",
    title: { es: "Invitaciones Digitales", en: "Digital Invitations" },
    tag: { es: "Eventos · RSVP", en: "Events · RSVP" },
    problem: {
      es: "Invitaciones en papel se pierden, los RSVP se manejan en grupos de WhatsApp y no sabes cuánta gente va.",
      en: "Paper invites get lost, RSVPs live in WhatsApp groups, and you don't know who's coming.",
    },
    solution: {
      es: "Invitación web con cuenta regresiva, RSVP integrado, control de pases y QR de acceso.",
      en: "Web invitation with countdown, integrated RSVP, pass control, and QR access.",
    },
    result: {
      es: "100% de control sobre tus invitados antes y durante el evento.",
      en: "100% control over guests before and during the event.",
    },
    cta: { es: "Ver demo de invitación", en: "See invitation demo" },
    link: "/invitaciones",
  },
  {
    key: "menus",
    icon: "utensils-crossed",
    iconBg: "dark:bg-amber-500/15 bg-amber-500/10",
    iconColor: "dark:text-amber-400 text-amber-500",
    accent: "bg-gradient-to-r from-amber-500 to-orange-400",
    title: { es: "Menús Digitales con QR", en: "Digital Menus with QR" },
    tag: { es: "Restaurantes", en: "Restaurants" },
    problem: {
      es: "Imprimir menús cada vez que cambia un precio cuesta tiempo y dinero, y los clientes no encuentran lo que buscan.",
      en: "Reprinting menus every time a price changes wastes time and money — and customers can't find what they want.",
    },
    solution: {
      es: "Menú web con QR, categorías editables al instante y botón directo de pedido por WhatsApp.",
      en: "Web menu with QR, instantly editable categories, and direct WhatsApp order button.",
    },
    result: {
      es: "Cero impresiones, pedidos directos al teléfono y ticket promedio más alto.",
      en: "Zero printing, direct phone orders, and higher average ticket.",
    },
    cta: { es: "Ver menú demo", en: "See demo menu" },
    link: "/menus-digitales",
  },
  {
    key: "salones",
    icon: "tent",
    iconBg: "dark:bg-emerald-500/15 bg-emerald-500/10",
    iconColor: "dark:text-emerald-400 text-emerald-500",
    accent: "bg-gradient-to-r from-emerald-500 to-teal-400",
    title: { es: "Reservas para Salones", en: "Venue Booking Sites" },
    tag: { es: "Eventos · Reservas", en: "Events · Booking" },
    problem: {
      es: "Pierdes prospectos porque no responden rápido, y el calendario lo llevas en una libreta o WhatsApp.",
      en: "You lose leads because reps respond slow, and the calendar lives in a notebook or WhatsApp.",
    },
    solution: {
      es: "Sitio con galería, cotizador y calendario sincronizado con Google Calendar y CRM ligero.",
      en: "Site with gallery, online quoter, and calendar synced to Google Calendar and a light CRM.",
    },
    result: {
      es: "Más reservas confirmadas con menos tiempo de gestión por evento.",
      en: "More confirmed bookings with less management time per event.",
    },
    cta: { es: "Ver demo de salón", en: "See venue demo" },
    link: "/salones-eventos",
  },
  {
    key: "catalogos",
    icon: "shopping-bag",
    iconBg: "dark:bg-violet-500/15 bg-violet-500/10",
    iconColor: "dark:text-violet-300 text-violet-500",
    accent: "bg-gradient-to-r from-violet-soft to-fuchsia-400",
    title: { es: "Catálogos Digitales", en: "Digital Catalogs" },
    tag: { es: "Comercio · WhatsApp", en: "Commerce · WhatsApp" },
    problem: {
      es: "Vender por WhatsApp con fotos sueltas y stories caducados es caótico y limita tu volumen.",
      en: "Selling on WhatsApp with loose photos and expiring stories is chaotic and caps your volume.",
    },
    solution: {
      es: "Catálogo web mobile-first con buscador, variantes (talla/color) y botón de pedido a WhatsApp.",
      en: "Mobile-first web catalog with search, variants (size/color), and WhatsApp order button.",
    },
    result: {
      es: "Tu cliente decide solo y te llega un mensaje listo para cerrar venta.",
      en: "Customers decide on their own and you get a message ready to close.",
    },
    cta: { es: "Ver catálogo demo", en: "See demo catalog" },
    link: "/catalogos-nenis",
  },
  {
    key: "saas",
    icon: "cpu",
    iconBg: "dark:bg-cyan-glow/15 bg-cyan-500/10",
    iconColor: "dark:text-cyan-glow text-cyan-600",
    accent: "bg-gradient-to-r from-cyan-glow to-brand-500",
    title: { es: "SaaS / Software a Medida", en: "Custom SaaS / Software" },
    tag: { es: "Producto · Operación", en: "Product · Operations" },
    problem: {
      es: "Tu operación corre en hojas de cálculo y procesos manuales que ya no escalan.",
      en: "Your operation runs on spreadsheets and manual processes that no longer scale.",
    },
    solution: {
      es: "Plataforma multi-tenant con dashboards, roles, integraciones y APIs documentadas.",
      en: "Multi-tenant platform with dashboards, roles, integrations, and documented APIs.",
    },
    result: {
      es: "Menos errores humanos, más velocidad y datos para decidir.",
      en: "Fewer human errors, more speed, and data to decide on.",
    },
    cta: { es: "Hablar de mi proyecto", en: "Talk about my project" },
    link: "/contact",
  },
];
</script>
