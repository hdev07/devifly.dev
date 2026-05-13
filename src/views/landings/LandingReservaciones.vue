<script setup>
/**
 * Landing: Web para Salones de Eventos
 * Estilo visual: Spotify dark — acento rojo navbar (#ef4444)
 * Secciones: Hero · Stats · Pain · Demo Preview · Features · How it Works · Testimonials · Pricing · FAQ · Demo 21d · CTA Final
 */
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Tengo un salón de eventos y me interesa una demo del Sistema PRO de Reservaciones 🏛️")}`;
const waCotizar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar el Sistema PRO de Reservaciones para mi salón 🏛️")}`;
const waDemo21 = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el demo de 21 días para mi salón de eventos por $999 MXN 🏛️")}`;
const waEsencial = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Esencial del Sistema de Reservaciones para mi salón 🏛️")}`;
const waPro = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Pro del Sistema de Reservaciones para mi salón 🏛️")}`;
const waPremium = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Premium VIP del Sistema de Reservaciones para mi salón 🏛️")}`;

const openFaq = ref(null);
const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};

const stats = [
  { value: "500+", label: "Eventos gestionados" },
  { value: "48h", label: "Tiempo de entrega inicial" },
  { value: "3×", label: "Más cotizaciones al mes" },
  { value: "100%", label: "Clientes satisfechos" },
];

const painPoints = [
  {
    icon: "message-circle-x",
    title: "Respondes lo mismo todo el día",
    desc: "Precios, disponibilidad, paquetes… siempre lo mismo por WhatsApp mientras atiendes eventos.",
  },
  {
    icon: "clock-x",
    title: "Clientes que no contestas a tiempo",
    desc: "Un salón que responde más rápido se lleva la reservación. Cada hora que tardas, pierdes dinero.",
  },
  {
    icon: "instagram",
    title: "Instagram que no convierte",
    desc: "Muchos seguidores, pocos reservados. Publicar bonito no es suficiente para llenar tu agenda.",
  },
  {
    icon: "calendar-x",
    title: "Agenda llena de dudas, no de eventos",
    desc: "Gestionas WhatsApp, Excel y notas. Pierdes fechas, doble reservas y tiempo valioso.",
  },
];

const features = [
  {
    icon: "calendar-days",
    title: "Agenda de disponibilidad",
    desc: "Tus clientes ven fechas libres al instante. Sin llamadas de '¿y ese día?'. Sin doble reservas.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: "calculator",
    title: "Cotizador inteligente",
    desc: "El cliente arma su evento, elige paquete, invitados y extras. Tú recibes leads calificados listos para cerrar.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: "images",
    title: "Galería premium",
    desc: "Fotos y video que generan deseo. El cliente imagina su boda ahí antes de llamarte.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: "message-circle",
    title: "WhatsApp directo",
    desc: "Botón con mensaje prellenado según lo que vio el cliente. Más conversión, menos fricción.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: "map-pin",
    title: "Google Maps integrado",
    desc: "Mapa interactivo con tus datos. Fácil de encontrar en Google y con SEO local optimizado.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: "smartphone",
    title: "100% responsivo",
    desc: "Se ve perfecto en celular, tablet y computadora. Tu cliente cotiza desde donde sea.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: "shield-check",
    title: "Panel admin completo",
    desc: "Gestiona reservaciones, clientes y fechas desde un panel propio.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: "users",
    title: "CRM de clientes",
    desc: "Historial, seguimientos y datos de cada cliente en un solo lugar.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: "credit-card",
    title: "Pagos de anticipo en línea",
    desc: "Recibe depósitos para apartar fechas. Menos cancelaciones.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: "building-2",
    title: "Multi-salón / Sucursales",
    desc: "Gestiona varios espacios o ubicaciones desde un solo sistema.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const steps = [
  {
    number: "01",
    icon: "camera",
    title: "Nos mandas tu contenido",
    desc: "Fotos de tu salón, info de paquetes y precios. Eso es todo lo que necesitamos para arrancar.",
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/10",
  },
  {
    number: "02",
    icon: "code-2",
    title: "Construimos tu sistema",
    desc: "En 2–4 semanas armamos tu página completa con cotizador, galería y agenda. Te mandamos avances.",
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/10",
  },
  {
    number: "03",
    icon: "rocket",
    title: "Lanzamos y recibes leads",
    desc: "Tu sistema queda publicado. Los clientes llegan, cotizan solos y tú solo cierras eventos.",
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
  },
];

const testimonials = [
  {
    name: "Mariana R.",
    role: "Salón Jardín Encantado, Guadalajara",
    avatar: "MR",
    avatarBg: "bg-red-500/20",
    avatarColor: "text-red-400",
    text: "Antes perdía clientes por no contestar a tiempo. Ahora mi agenda se llena sola y solo atiendo a los que realmente quieren reservar.",
    stars: 5,
  },
  {
    name: "Luis M.",
    role: "Terraza Real, CDMX",
    avatar: "LM",
    avatarBg: "bg-red-500/20",
    avatarColor: "text-red-400",
    text: "Mi página se ve increíble, recibo más mensajes y cierro más eventos. ¡Vale cada peso! En el primer mes recuperé la inversión.",
    stars: 5,
  },
  {
    name: "Patricia V.",
    role: "Hacienda Los Arcos, Monterrey",
    avatar: "PV",
    avatarBg: "bg-violet-500/20",
    avatarColor: "text-violet-400",
    text: "El cotizador es lo que más nos gusta. Los clientes llegan sabiendo cuánto van a pagar. No hay regateo, solo cierres.",
    stars: 5,
  },
];

const salonPackages = [
  {
    name: "Esencial",
    icon: "building",
    price: "$5,999",
    period: "pago único",
    tagline: "Presencia profesional que genera confianza",
    wa: waEsencial,
    highlighted: false,
    badge: null,
    vip: false,
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
      "Panel admin",
      "CRM clientes",
      "Pagos en línea",
    ],
  },
  {
    name: "Pro",
    icon: "building-2",
    price: "$9,999",
    period: "pago único",
    tagline: "Todo para convertir visitas en reservaciones",
    wa: waPro,
    highlighted: true,
    badge: "Más vendido",
    vip: false,
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
  },
  {
    name: "Premium VIP",
    icon: "gem",
    price: "$16,999",
    period: "pago único",
    tagline: "Gestión completa de tu negocio de eventos",
    wa: waPremium,
    highlighted: false,
    badge: "VIP",
    vip: true,
    features: [
      "Todo lo de Pro",
      "Panel admin completo",
      "CRM clientes integrado",
      "Pagos anticipo en línea",
      "Contratos digitales",
      "Multi-salón / Sucursales",
      "Analíticas y reportes",
    ],
    excluded: [],
  },
];

const salonComparisonRows = [
  { feature: "Diseño responsivo premium", small: true, medium: true, large: true },
  { feature: "Galería de fotos", small: true, medium: true, large: true },
  { feature: "Formulario de contacto", small: true, medium: true, large: true },
  { feature: "Integración WhatsApp", small: true, medium: true, large: true },
  { feature: "Mapa de ubicación interactivo", small: true, medium: true, large: true },
  { feature: "SEO local optimizado", small: true, medium: true, large: true },
  { feature: "Cotizador en línea", small: false, medium: true, large: true },
  { feature: "Calendario de disponibilidad", small: false, medium: true, large: true },
  { feature: "Galería con videos", small: false, medium: true, large: true },
  { feature: "Sección paquetes / servicios", small: false, medium: true, large: true },
  { feature: "Blog de eventos", small: false, medium: true, large: true },
  { feature: "Google Calendar sync", small: false, medium: true, large: true },
  { feature: "Panel admin completo", small: false, medium: false, large: true },
  { feature: "CRM clientes integrado", small: false, medium: false, large: true },
  { feature: "Pagos anticipo en línea", small: false, medium: false, large: true },
  { feature: "Contratos digitales", small: false, medium: false, large: true },
  { feature: "Multi-salón / Sucursales", small: false, medium: false, large: true },
  { feature: "Analíticas y reportes", small: false, medium: false, large: true },
];

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en estar lista mi página?",
    a: "El plan Esencial se entrega en 2 semanas, el Pro en 3 semanas y el Premium VIP en 4–5 semanas. Todo depende de qué tan rápido nos compartes tu contenido (fotos, info, precios).",
  },
  {
    q: "¿Qué necesito darles para empezar?",
    a: "Solo fotos de tu salón, la info de tus paquetes y servicios, y tus datos de contacto. Nosotros nos encargamos del resto: textos, diseño, configuración y publicación.",
  },
  {
    q: "¿Puedo probar antes de contratar?",
    a: "Sí. Tenemos el Demo de 21 días por $999 MXN donde armamos tu sitio real con tu contenido y lo publicamos para que lo pruebes. Si decides contratar, esos $999 se descuentan del anticipo.",
  },
  {
    q: "¿Qué pasa si no me genera más reservaciones?",
    a: "Tenemos garantía de resultados. Si en el primer mes no notas mejoras, optimizamos tu sitio sin costo hasta que empieces a ver resultados. Sin letras chiquitas.",
  },
  {
    q: "¿Necesito saber de tecnología para manejarlo?",
    a: "No. El sistema fue diseñado para dueños de salones, no para técnicos. Si tienes plan Pro o Premium VIP, te damos capacitación y soporte para que administres todo fácilmente.",
  },
  {
    q: "¿Incluye dominio y hosting?",
    a: "Sí, el primer año de hosting y la configuración del dominio están incluidos. A partir del segundo año se cobra una mensualidad de mantenimiento muy accesible.",
  },
  {
    q: "¿Puedo actualizar mi plan después?",
    a: "Claro. Puedes empezar con el plan Esencial y escalar al Pro o Premium VIP cuando lo necesites. Solo se cobra la diferencia.",
  },
];
</script>

<template>
  <main class="landing-shell" style="background: #0a0a0a">
    <!-- ─── HERO ─────────────────────────────────────────────────────── -->
    <section
      class="relative overflow-hidden px-6 pt-28 pb-20 sm:pt-36 sm:pb-28"
      style="background: #0a0a0a"
    >
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20"
          style="
            background: radial-gradient(ellipse, #ef4444 0%, transparent 70%);
          "
        ></div>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: copy -->
          <div>
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-6"
            >
              <span
                class="w-2 h-2 rounded-full bg-red-500 animate-pulse"
              ></span>
              Salones & Eventos · Sistema PRO
            </div>

            <h1
              class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Tu salón merece una página que
              <span class="text-red-400"> venda eventos</span>
            </h1>

            <p class="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl">
              Sistema web completo con cotizador, agenda de disponibilidad,
              galería premium y WhatsApp directo. Responde dudas 24/7 mientras
              tú te enfocas en hacer eventos inolvidables.
            </p>

            <div class="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <RouterLink
                to="/salones-eventos/demo"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-red-500 text-neutral-950 font-bold text-sm hover:bg-red-400 transition-all hover:scale-105 shadow-[0_0_24px_rgba(239,68,68,0.3)]"
              >
                <LucideIcon name="play-circle" class-name="w-4 h-4" />
                Ver demo en vivo
              </RouterLink>
              <a
                :href="waCotizar"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-red-500/40 hover:text-white transition"
              >
                Cotizar mi salón
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
            </div>

            <div class="flex items-center gap-3 text-xs text-neutral-500">
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-red-400"
                />
                Cotizador incluido
              </span>
              <span class="w-px h-3 bg-neutral-700"></span>
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-red-400"
                />
                Entrega en 2–5 semanas
              </span>
              <span class="w-px h-3 bg-neutral-700"></span>
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-red-400"
                />
                Garantía de resultados
              </span>
            </div>
          </div>

          <!-- Right: phone mockup -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-30"
                style="background: linear-gradient(135deg, #ef4444, #a855f7)"
              ></div>

              <div
                class="relative w-64 sm:w-72 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
                style="
                  background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
                "
              >
                <!-- Status bar -->
                <div class="flex items-center justify-between px-6 pt-4 pb-2">
                  <span class="text-white/60 text-[10px]">9:41</span>
                  <div
                    class="w-16 h-5 rounded-full bg-black mx-auto absolute left-1/2 -translate-x-1/2 top-2"
                  ></div>
                  <div class="flex gap-1">
                    <div class="w-3 h-1.5 rounded-sm bg-white/60"></div>
                    <div class="w-1 h-1.5 rounded-sm bg-white/60"></div>
                  </div>
                </div>

                <!-- App header (navbar rojo) -->
                <div
                  class="px-4 py-3 border-b border-white/5"
                  style="background: #141414"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <div
                        class="text-red-400 text-xs font-bold tracking-widest uppercase"
                      >
                        Salón de eventos
                      </div>
                      <div class="text-white text-sm font-semibold">
                        Jardín Victoria
                      </div>
                    </div>
                    <div
                      class="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center"
                    >
                      <LucideIcon
                        name="calendar"
                        class-name="w-3.5 h-3.5 text-red-400"
                      />
                    </div>
                  </div>
                </div>

                <!-- Category tabs -->
                <div
                  class="flex gap-2 px-4 py-2 overflow-hidden"
                  style="background: #111"
                >
                  <span
                    class="px-3 py-1 rounded-full bg-red-500 text-black text-[10px] font-bold whitespace-nowrap"
                    >Bodas</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] whitespace-nowrap"
                    >XV años</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] whitespace-nowrap"
                    >Corporativo</span
                  >
                </div>

                <!-- Paquetes -->
                <div class="px-4 py-3 space-y-3" style="background: #0f0f0f">
                  <div
                    v-for="item in [
                      {
                        name: 'Paquete Oro',
                        price: '$899/persona',
                        img: '💍',
                        badge: null,
                      },
                      {
                        name: 'Paquete Diamante',
                        price: '$1,299/persona',
                        img: '✨',
                        badge: 'Popular',
                      },
                      {
                        name: 'Terraza Premium',
                        price: 'Desde $45,000',
                        img: '🌿',
                        badge: null,
                      },
                    ]"
                    :key="item.name"
                    class="flex items-center gap-3 p-2.5 rounded-xl border border-white/5"
                    style="background: #1a1a1a"
                  >
                    <div
                      class="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style="background: #222"
                    >
                      {{ item.img }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-1.5">
                        <p class="text-white text-xs font-semibold truncate">
                          {{ item.name }}
                        </p>
                        <span
                          v-if="item.badge"
                          class="px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[9px] font-bold"
                          >{{ item.badge }}</span
                        >
                      </div>
                      <p class="text-red-400 text-xs font-bold">
                        {{ item.price }}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-center justify-center gap-2 pt-1">
                    <LucideIcon
                      name="calendar-check"
                      class-name="w-3.5 h-3.5 text-neutral-600"
                    />
                    <span class="text-neutral-600 text-[10px]"
                      >jardin-victoria.com</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── STATS BAR ─────────────────────────────────────────────────── -->
    <section
      class="px-6 py-10 border-y border-neutral-800"
      style="background: #111"
    >
      <div
        class="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
      >
        <div v-for="stat in stats" :key="stat.label">
          <div class="font-display text-3xl font-extrabold text-red-400 mb-1">
            {{ stat.value }}
          </div>
          <div class="text-neutral-500 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- ─── PAIN POINTS ──────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #0a0a0a">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="alert-triangle" class-name="w-3.5 h-3.5" />
            El problema real
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            ¿Tu salón sigue vendiendo por WhatsApp?
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Cada día sin un sistema web profesional pierdes reservaciones,
            tiempo y la confianza de clientes que buscan en Google.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="point in painPoints"
            :key="point.title"
            class="flex gap-4 p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition"
            style="background: #111"
          >
            <div
              class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0"
            >
              <LucideIcon
                :name="point.icon"
                class-name="w-5 h-5 text-red-400"
              />
            </div>
            <div>
              <h3 class="text-white font-semibold text-sm mb-1">
                {{ point.title }}
              </h3>
              <p class="text-neutral-500 text-sm leading-relaxed">
                {{ point.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── DEMO PREVIEW CTA ─────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-5xl mx-auto">
        <div
          class="relative rounded-3xl overflow-hidden border border-red-500/20 p-8 sm:p-12"
          style="
            background: linear-gradient(
              135deg,
              #1a0808 0%,
              #0a0a0a 60%,
              #0d0a14 100%
            );
          "
        >
          <div
            class="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style="
              background: radial-gradient(ellipse, #ef4444, transparent 70%);
            "
          ></div>

          <div
            class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-6"
              >
                <LucideIcon name="eye" class-name="w-3.5 h-3.5" />
                Demo interactivo disponible
              </div>
              <h2
                class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight"
              >
                Prueba el sistema de tu salón<br />
                <span class="text-red-400">antes de comprometerte</span>
              </h2>
              <p class="text-neutral-400 mb-8 leading-relaxed">
                Navega por una demo real con galería, cotizador, agenda y
                WhatsApp. Exactamente así se verá la página de tu salón.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <RouterLink
                  to="/salones-eventos/demo"
                  class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-red-500 text-neutral-950 font-bold text-sm hover:bg-red-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                >
                  <LucideIcon name="smartphone" class-name="w-4 h-4" />
                  Abrir demo interactivo
                </RouterLink>
                <a
                  :href="waDemo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-red-500/30 text-red-400 font-semibold text-sm hover:bg-red-500/10 transition"
                >
                  Quiero el mío así
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </a>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="chip in [
                  { icon: 'calculator', text: 'Cotizador en vivo' },
                  { icon: 'calendar-days', text: 'Agenda disponible' },
                  { icon: 'images', text: 'Galería premium' },
                  { icon: 'message-circle', text: 'WhatsApp directo' },
                  { icon: 'map-pin', text: 'Mapa integrado' },
                  { icon: 'smartphone', text: 'Fluido en móvil' },
                ]"
                :key="chip.text"
                class="flex items-center gap-3 p-4 rounded-xl border border-red-500/10"
                style="background: rgba(239, 68, 68, 0.04)"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0"
                >
                  <LucideIcon
                    :name="chip.icon"
                    class-name="w-4 h-4 text-red-400"
                  />
                </div>
                <span class="text-white text-xs font-semibold">{{
                  chip.text
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FEATURES ─────────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #0a0a0a">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="star" class-name="w-3.5 h-3.5" />
            Todo lo que incluye
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Un sistema que trabaja por ti
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Cada función está diseñada para convertir visitas en reservaciones
            y liberarte del WhatsApp repetitivo.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all hover:-translate-y-0.5"
            style="background: #111"
          >
            <div
              :class="[
                'w-11 h-11 rounded-xl flex items-center justify-center mb-4',
                feature.bg,
              ]"
            >
              <LucideIcon
                :name="feature.icon"
                :class-name="`w-5 h-5 ${feature.color}`"
              />
            </div>
            <h3 class="text-white font-semibold text-sm mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-neutral-500 text-sm leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── HOW IT WORKS ─────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="map" class-name="w-3.5 h-3.5" />
            Proceso
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            De cero a recibir leads en 3 pasos
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">
            Sin complicaciones técnicas. Tú pones el salón, nosotros ponemos
            el sistema.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            class="hidden md:block absolute top-10 left-1/3 right-1/3 h-px border-t border-dashed border-neutral-700"
          ></div>

          <div
            v-for="step in steps"
            :key="step.number"
            class="text-center relative"
          >
            <div
              :class="[
                'inline-flex items-center justify-center w-20 h-20 rounded-2xl border mb-5 mx-auto',
                step.border,
                step.bg,
              ]"
            >
              <LucideIcon
                :name="step.icon"
                :class-name="`w-8 h-8 ${step.color}`"
              />
            </div>
            <div :class="['font-display text-xs font-bold mb-2', step.color]">
              PASO {{ step.number }}
            </div>
            <h3 class="text-white font-bold text-base mb-2">
              {{ step.title }}
            </h3>
            <p class="text-neutral-500 text-sm leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-500 text-neutral-950 font-bold text-sm hover:bg-red-400 transition-all hover:scale-105"
          >
            Empezar ahora
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── TESTIMONIALS ─────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #0a0a0a">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="message-square" class-name="w-3.5 h-3.5" />
            Testimoniales
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Lo que dicen otros dueños de salones
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">
            Salones reales, resultados reales.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="p-7 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition flex flex-col"
            style="background: #111"
          >
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="s in t.stars"
                :key="s"
                name="star"
                class-name="w-4 h-4 text-red-400 fill-current"
              />
            </div>
            <p class="text-neutral-300 text-sm leading-relaxed mb-6 flex-1">
              "{{ t.text }}"
            </p>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-800"
            >
              <div
                :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0',
                  t.avatarBg,
                  t.avatarColor,
                ]"
              >
                {{ t.avatar }}
              </div>
              <div>
                <div class="text-white font-semibold text-sm">{{ t.name }}</div>
                <div class="text-neutral-500 text-xs">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PRICING ──────────────────────────────────────────────────── -->
    <section id="precios" class="px-6 py-20" style="background: #111">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="tag" class-name="w-3.5 h-3.5" />
            Planes y precios
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Elige el plan para tu salón
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Pago único, sin mensualidades ni sorpresas. Hosting incluido el
            primer año. Todos incluyen garantía.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in salonPackages"
            :key="pkg.name"
            :class="[
              'relative flex flex-col rounded-2xl border p-7 transition-all',
              pkg.highlighted
                ? 'border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.12)]'
                : pkg.vip
                  ? 'border-violet-500/30'
                  : 'border-neutral-800',
            ]"
            style="background: #1a1a1a"
          >
            <div
              v-if="pkg.badge"
              :class="[
                'absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap',
                pkg.highlighted
                  ? 'bg-red-500 text-neutral-950'
                  : 'bg-violet-500 text-white',
              ]"
            >
              {{ pkg.badge }}
            </div>

            <div class="flex items-center gap-3 mb-5">
              <div
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  pkg.highlighted
                    ? 'bg-red-500/15'
                    : pkg.vip
                      ? 'bg-violet-500/15'
                      : 'bg-neutral-800',
                ]"
              >
                <LucideIcon
                  :name="pkg.icon"
                  :class-name="`w-5 h-5 ${pkg.highlighted ? 'text-red-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-400'}`"
                />
              </div>
              <div>
                <div class="text-white font-bold">{{ pkg.name }}</div>
                <div class="text-neutral-500 text-xs">{{ pkg.tagline }}</div>
              </div>
            </div>

            <div class="mb-6">
              <span
                :class="[
                  'font-display text-4xl font-extrabold',
                  pkg.highlighted
                    ? 'text-red-400'
                    : pkg.vip
                      ? 'text-violet-400'
                      : 'text-white',
                ]"
              >
                {{ pkg.price }}
              </span>
              <span class="text-neutral-500 text-sm ml-2"
                >MXN · {{ pkg.period }}</span
              >
            </div>

            <ul class="space-y-2.5 mb-7 flex-1">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-start gap-2.5 text-sm"
              >
                <LucideIcon
                  name="check"
                  :class-name="`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-red-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-500'}`"
                />
                <span class="text-neutral-300">{{ f }}</span>
              </li>
              <li
                v-for="f in pkg.excluded"
                :key="f"
                class="flex items-start gap-2.5 text-sm"
              >
                <LucideIcon
                  name="minus"
                  class-name="w-4 h-4 flex-shrink-0 mt-0.5 text-neutral-700"
                />
                <span class="text-neutral-700">{{ f }}</span>
              </li>
            </ul>

            <div class="space-y-2.5">
              <a
                :href="pkg.wa"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]',
                  pkg.highlighted
                    ? 'bg-red-500 text-neutral-950 hover:bg-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    : pkg.vip
                      ? 'bg-violet-600 text-white hover:bg-violet-500'
                      : 'bg-neutral-700 text-white hover:bg-neutral-600',
                ]"
              >
                Contratar {{ pkg.name }}
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
              <RouterLink
                to="/salones-eventos/demo"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-neutral-700 text-neutral-400 text-sm hover:text-white hover:border-neutral-600 transition"
              >
                <LucideIcon name="play" class-name="w-3.5 h-3.5" />
                Ver demo
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMPARISON TABLE ─────────────────────────────────────────── -->
    <section class="px-6 py-16" style="background: #0a0a0a">
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold text-white text-center mb-10"
        >
          Comparación detallada de planes
        </h2>
        <div class="overflow-x-auto rounded-2xl border border-neutral-800">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-neutral-800" style="background: #111">
                <th class="text-left py-4 px-6 text-neutral-400 font-medium">
                  Característica
                </th>
                <th
                  class="text-center py-4 px-4 text-white font-semibold whitespace-nowrap"
                >
                  Esencial
                </th>
                <th
                  class="text-center py-4 px-4 text-red-400 font-semibold whitespace-nowrap"
                >
                  Pro
                </th>
                <th
                  class="text-center py-4 px-4 text-violet-400 font-semibold whitespace-nowrap"
                >
                  Premium VIP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in salonComparisonRows"
                :key="row.feature"
                class="border-b border-neutral-800/50 last:border-0 hover:bg-red-500/5 transition-colors"
                style="background: #0f0f0f"
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
                  <span v-else class="text-neutral-700">—</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.medium"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-red-400"
                  />
                  <span v-else class="text-neutral-700">—</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.large"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-violet-400"
                  />
                  <span v-else class="text-neutral-700">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ─── FAQ ──────────────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="help-circle" class-name="w-3.5 h-3.5" />
            Preguntas frecuentes
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Resolvemos tus dudas
          </h2>
          <p class="text-neutral-400">
            Si tienes más preguntas, escríbenos por WhatsApp — respondemos
            rápido.
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="rounded-2xl border border-neutral-800 overflow-hidden transition-all"
            :class="openFaq === i ? 'border-red-500/30' : ''"
            style="background: #1a1a1a"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="text-white font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                :class-name="`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'text-red-400' : 'text-neutral-500'}`"
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-neutral-400 text-sm leading-relaxed">
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <a
            :href="waCotizar"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-red-400 text-sm font-semibold hover:text-red-300 transition"
          >
            ¿Tienes otra pregunta? Escríbenos
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── DEMO 21 DÍAS ──────────────────────────────────────────────── -->
    <section class="px-6 py-24" style="background: #0a0a0a">
      <div class="max-w-4xl mx-auto">
        <div
          class="relative rounded-3xl overflow-hidden border border-red-500/20 p-8 sm:p-14 text-center"
          style="
            background: linear-gradient(
              135deg,
              #1a0808 0%,
              #0a0a0a 50%,
              #0a0a14 100%
            );
          "
        >
          <div
            class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-20 -translate-y-1/2"
            style="
              background: radial-gradient(ellipse, #ef4444, transparent 70%);
            "
          ></div>

          <div class="relative">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-7"
            >
              <LucideIcon name="calendar-clock" class-name="w-3.5 h-3.5" />
              Demo 21 días — Oferta especial
            </div>

            <h2
              class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
            >
              ¿Quieres probarlo antes de decidir?
            </h2>
            <p
              class="text-neutral-400 max-w-2xl mx-auto mb-10 text-base leading-relaxed"
            >
              Por solo
              <span class="text-red-400 font-bold">$999 MXN</span> armamos el
              sitio de tu salón con tu contenido real — publicado y funcionando
              durante <strong class="text-white">21 días</strong>. Si luego
              contratas, los $999 se descuentan del anticipo. No pagas nada
              extra.
            </p>

            <div
              class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
            >
              <div
                class="p-5 rounded-2xl border border-red-500/15"
                style="background: rgba(239, 68, 68, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="building-2"
                    class-name="w-5 h-5 text-red-400"
                  />
                </div>
                <p class="text-white font-semibold text-sm mb-1">
                  Tu salón real
                </p>
                <p class="text-neutral-500 text-xs">
                  Con tus fotos, paquetes y precios reales
                </p>
              </div>
              <div
                class="p-5 rounded-2xl border border-red-500/15"
                style="background: rgba(239, 68, 68, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="share-2"
                    class-name="w-5 h-5 text-red-400"
                  />
                </div>
                <p class="text-white font-semibold text-sm mb-1">
                  Publicado y funcional
                </p>
                <p class="text-neutral-500 text-xs">
                  Compartible en redes y WhatsApp
                </p>
              </div>
              <div
                class="p-5 rounded-2xl border border-red-500/15"
                style="background: rgba(239, 68, 68, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="receipt"
                    class-name="w-5 h-5 text-red-400"
                  />
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
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-500 text-black font-bold text-sm hover:bg-red-400 transition-all hover:scale-105 shadow-[0_0_24px_rgba(239,68,68,0.3)]"
            >
              Quiero mi demo de 21 días
              <LucideIcon name="arrow-right" class-name="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA FINAL ─────────────────────────────────────────────────── -->
    <section class="px-6 py-32 text-center" style="background: #111">
      <div class="max-w-3xl mx-auto">
        <div
          class="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-8"
        >
          <LucideIcon name="landmark" class-name="w-8 h-8 text-red-400" />
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          Lleva tu salón al<br />
          <span class="text-red-400">siguiente nivel</span>
        </h2>
        <p
          class="text-neutral-400 mb-10 text-lg max-w-xl mx-auto leading-relaxed"
        >
          Empieza hoy. Escríbenos por WhatsApp y en pocas semanas tu salón ya
          tiene un sistema que vende eventos mientras duermes.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            :href="waCotizar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-full bg-red-500 text-neutral-950 font-bold text-sm hover:bg-red-400 transition-all hover:scale-105 shadow-[0_0_24px_rgba(239,68,68,0.25)]"
          >
            Cotizar mi sistema
          </a>
          <RouterLink
            to="/salones-eventos/demo"
            class="px-10 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-red-500/30 hover:text-white transition"
          >
            Ver demo primero
          </RouterLink>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-neutral-600"
        >
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="shield-check"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            Garantía de resultados
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="clock"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            Entrega en 2–5 semanas
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="headphones"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            Soporte en español
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="calendar-check"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            Cotizador y agenda incluidos
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
