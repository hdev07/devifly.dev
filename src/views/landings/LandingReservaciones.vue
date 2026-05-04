<script setup>
import { ref, computed } from "vue";
import LucideIcon from "../../components/LucideIcon.vue";
import { RouterLink } from "vue-router";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Tengo un salón de eventos y me interesa una demo del Sistema PRO de Reservaciones 🏛️")}`;
const waCotizar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar el Sistema PRO de Reservaciones para mi salón 🏛️")}`;
const waDemo21 = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el demo de 21 días para mi salón de eventos por $999 MXN 🏛️")}`;
const waEsencial = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Esencial del Sistema de Reservaciones para mi salón 🏛️")}`;
const waPro = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Pro del Sistema de Reservaciones para mi salón 🏛️")}`;
const waPremium = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el plan Premium VIP del Sistema de Reservaciones para mi salón 🏛️")}`;

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
    desc: "Tus clientes ven fechas libres al instante. Sin llamadas de 'y ese día?'. Sin doble reservas.",
    tag: "Convierte 24/7",
  },
  {
    icon: "calculator",
    title: "Cotizador inteligente",
    desc: "El cliente arma su evento, elige paquete, invitados y extras. Tú recibes leads calificados listos para cerrar.",
    tag: "Leads de calidad",
  },
  {
    icon: "images",
    title: "Galería premium",
    desc: "Fotos y video que generan deseo. El cliente imagina su boda ahí antes de llamarte.",
    tag: "Genera deseo",
  },
  {
    icon: "message-circle",
    title: "WhatsApp directo",
    desc: "Botón con mensaje prellenado según lo que vio el cliente. Más conversión, menos fricción.",
    tag: "+60% conversión",
  },
  {
    icon: "map-pin",
    title: "Google Maps integrado",
    desc: "Mapa interactivo con tus datos. Fácil de encontrar en Google y con SEO local optimizado.",
    tag: "SEO local",
  },
  {
    icon: "smartphone",
    title: "100% responsivo",
    desc: "Se ve perfecto en celular, tablet y computadora. Tu cliente cotiza desde donde sea.",
    tag: "Mobile first",
  },
];

const premiumFeatures = [
  {
    icon: "shield-check",
    title: "Panel admin completo",
    desc: "Gestiona reservaciones, clientes y fechas desde un panel propio.",
  },
  {
    icon: "users",
    title: "CRM de clientes",
    desc: "Historial, seguimientos y datos de cada cliente en un solo lugar.",
  },
  {
    icon: "credit-card",
    title: "Pagos de anticipo en línea",
    desc: "Recibe depósitos para apartar fechas. Menos cancelaciones.",
  },
  {
    icon: "file-text",
    title: "Contratos digitales",
    desc: "Genera y firma contratos automáticamente desde la plataforma.",
  },
  {
    icon: "building-2",
    title: "Multi-salón / Sucursales",
    desc: "Gestiona varios espacios o ubicaciones desde un solo sistema.",
  },
  {
    icon: "bar-chart-2",
    title: "Analíticas y reportes",
    desc: "Ve qué eventos generan más ingresos y toma mejores decisiones.",
  },
];

const steps = [
  {
    num: "01",
    icon: "camera",
    title: "Nos mandas tu contenido",
    desc: "Fotos de tu salón, info de paquetes y precios. Eso es todo lo que necesitamos para arrancar.",
  },
  {
    num: "02",
    icon: "code-2",
    title: "Construimos tu sistema",
    desc: "En 2–4 semanas armamos tu página completa con cotizador, galería y agenda. Te mandamos avances.",
  },
  {
    num: "03",
    icon: "rocket",
    title: "Lanzamos y empiezas a recibir leads",
    desc: "Tu sistema queda publicado. Los clientes llegan, cotizan solos y tú solo cierras eventos.",
  },
];

const testimonials = [
  {
    stars: 5,
    quote:
      "Antes perdía clientes por no contestar a tiempo. Ahora mi agenda se llena sola y solo atiendo a los que realmente quieren reservar.",
    name: "Mariana R.",
    place: "Salón Jardín Encantado",
    icon: "tent",
  },
  {
    stars: 5,
    quote:
      "Mi página se ve increíble, recibo más mensajes y cierro más eventos. ¡Vale cada peso! En el primer mes recuperé la inversión.",
    name: "Luis M.",
    place: "Terraza Real",
    icon: "building-2",
  },
  {
    stars: 5,
    quote:
      "El cotizador es lo que más nos gusta. Los clientes llegan sabiendo cuánto van a pagar. No hay regateo, solo cierres.",
    name: "Patricia V.",
    place: "Hacienda Los Arcos",
    icon: "landmark",
  },
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

const packages = [
  {
    name: "Esencial",
    tagline: "Presencia profesional que genera confianza",
    price: "$5,999",
    icon: "building",
    note: "Hasta 20 fotos · Entrega 2 semanas",
    demo: "/salones-eventos/demo",
    wa: waEsencial,
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
    tagline: "Todo para convertir visitas en reservaciones",
    price: "$9,999",
    icon: "building-2",
    note: "Fotos ilimitadas + videos · Entrega 3 semanas",
    demo: "/salones-eventos/demo",
    wa: waPro,
    highlighted: true,
    badge: "Más vendido",
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
    tagline: "Gestión completa de tu negocio de eventos",
    price: "$16,999",
    icon: "gem",
    note: "Multi-salón · CRM completo · Entrega 4–5 semanas",
    demo: "/salones-eventos/demo",
    wa: waPremium,
    vip: true,
    badge: "VIP",
    features: [
      "Todo lo de Pro",
      "Panel admin completo",
      "CRM clientes integrado",
      "Pagos anticipo en línea",
      "Contratos digitales",
      "Multi-salón / Sucursales",
      "Analíticas y reportes",
    ],
  },
];

const comparisonRows = [
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

const mockupFeatures = [
  {
    label: "Agenda interactiva",
    sub: "Fechas disponibles al instante",
    icon: "calendar-days",
  },
  {
    label: "Galería premium",
    sub: "Fotos que venden tu espacio",
    icon: "images",
  },
  {
    label: "Cotizador en línea",
    sub: "Leads calificados 24/7",
    icon: "calculator",
  },
];

const openFaq = ref(null);
const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-x-hidden">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="relative max-w-7xl mx-auto px-6 pt-16 pb-20">
      <!-- Ambient glow -->
      <div
        class="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[120px] dark:bg-brand-500/8 bg-brand-500/5"
      ></div>
      <div
        class="pointer-events-none absolute top-40 -left-10 w-64 h-64 rounded-full blur-[100px] dark:bg-brand-600/5 bg-brand-600/3"
      ></div>

      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-5 font-mono"
      >
        Sistema PRO · Salones & Eventos
      </p>

      <h1
        class="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-bold dark:text-white text-light-text leading-[1.04] tracking-tight max-w-4xl mb-7"
      >
        Tu salón merece una página
        <span class="dark:text-brand-400 text-brand-600">
          que venda eventos</span
        >, no solo que exista.
      </h1>

      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mb-10 leading-relaxed"
      >
        Un sistema web completo que responde dudas, filtra clientes y llena tu
        agenda — mientras tú te enfocas en hacer eventos inolvidables.
      </p>

      <div class="flex flex-wrap gap-4 mb-16">
        <a
          :href="waDemo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-neutral-100 transition shadow-lg"
        >
          <LucideIcon name="calendar-check" class-name="w-4 h-4" />
          Quiero más reservaciones
        </a>
        <router-link
          to="/salones-eventos/demo"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:border-white hover:dark:text-white hover:border-light-text hover:text-light-text transition"
        >
          <LucideIcon name="eye" class-name="w-4 h-4" />
          Ver demo en vivo
        </router-link>
      </div>

      <!-- Stats bar -->
      <div
        class="grid grid-cols-2 sm:grid-cols-4 gap-px dark:bg-base-700/40 bg-light-border rounded-2xl overflow-hidden border dark:border-base-700/40 border-light-border"
      >
        <div
          v-for="s in stats"
          :key="s.label"
          class="dark:bg-base-900 bg-white px-6 py-5 text-center"
        >
          <p
            class="font-display text-3xl font-bold dark:text-white text-light-text mb-1"
          >
            {{ s.value }}
          </p>
          <p class="text-xs dark:text-text-secondary/70 text-light-muted/70">
            {{ s.label }}
          </p>
        </div>
      </div>
    </section>

    <!-- ─── DEMO PREVIEW ──────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="text-center mb-10">
        <p
          class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
        >
          Experiencia visual
        </p>
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
        >
          Así se ve tu nuevo sistema
        </h2>
        <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
          Diseñado para impresionar, convencer y convertir. Tu salón con la
          imagen que merece.
        </p>
      </div>

      <!-- Browser frame -->
      <div
        class="rounded-2xl border dark:border-base-700 border-light-border overflow-hidden shadow-2xl"
      >
        <!-- Bar -->
        <div
          class="flex items-center gap-2 px-5 py-3 border-b"
          style="background: #0a0f0d; border-color: rgba(201, 169, 110, 0.15)"
        >
          <div class="flex gap-1.5">
            <div class="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-amber-400/50"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
          </div>
          <div
            class="flex-1 mx-4 py-1.5 px-4 rounded-md text-xs font-mono"
            style="
              background: rgba(201, 169, 110, 0.05);
              color: rgba(201, 169, 110, 0.45);
              border: 1px solid rgba(201, 169, 110, 0.1);
            "
          >
            jardín-victoria.com
          </div>
          <div
            class="text-[10px] font-mono"
            style="color: rgba(201, 169, 110, 0.3)"
          >
            ● En vivo
          </div>
        </div>

        <!-- Content preview -->
        <div class="relative" style="background: #0c0a09">
          <!-- Ambient -->
          <div
            class="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px]"
            style="background: rgba(201, 169, 110, 0.06)"
          ></div>
          <div
            class="pointer-events-none absolute bottom-0 left-1/3 w-40 h-40 rounded-full blur-[60px]"
            style="background: rgba(201, 169, 110, 0.04)"
          ></div>

          <!-- Nav bar mockup -->
          <div
            class="flex items-center justify-between px-8 sm:px-12 pt-6 pb-4 border-b"
            style="border-color: rgba(201, 169, 110, 0.08)"
          >
            <div class="flex items-center gap-2">
              <div
                class="w-7 h-7 rounded-full flex items-center justify-center"
                style="background: linear-gradient(135deg, #c9a96e, #a07840)"
              >
                <span class="text-white text-[10px] font-bold">JV</span>
              </div>
              <span class="text-sm font-semibold text-white"
                >Jardín Victoria</span
              >
            </div>
            <div class="hidden sm:flex items-center gap-4">
              <span class="text-[11px]" style="color: rgba(201, 169, 110, 0.5)"
                >Galería</span
              >
              <span class="text-[11px]" style="color: rgba(201, 169, 110, 0.5)"
                >Paquetes</span
              >
              <span class="text-[11px]" style="color: rgba(201, 169, 110, 0.5)"
                >Espacios</span
              >
              <span
                class="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-black"
                style="background: linear-gradient(135deg, #c9a96e, #a07840)"
                >Cotizar evento</span
              >
            </div>
          </div>

          <!-- Hero mockup content -->
          <div class="px-8 sm:px-12 pt-10 pb-8">
            <p
              class="text-[10px] uppercase tracking-widest mb-2"
              style="color: rgba(201, 169, 110, 0.5)"
            >
              Salón de eventos · Guadalajara
            </p>
            <p
              class="text-2xl sm:text-4xl font-bold text-white leading-tight mb-3"
              style="font-family: system-ui"
            >
              Donde cada momento
              <span style="color: #c9a96e">se convierte</span> en un recuerdo
              eterno
            </p>
            <p
              class="text-xs mb-6 max-w-md"
              style="color: rgba(255, 255, 255, 0.4)"
            >
              Bodas, XV años, eventos corporativos y celebraciones únicas.
              Capacidad para 400 invitados en 4 espacios exclusivos.
            </p>

            <!-- Mini stats row -->
            <div class="flex gap-6 mb-6">
              <div>
                <p class="text-lg font-bold text-white">500+</p>
                <p class="text-[9px]" style="color: rgba(201, 169, 110, 0.5)">
                  Eventos realizados
                </p>
              </div>
              <div
                style="width: 1px; background: rgba(201, 169, 110, 0.1)"
              ></div>
              <div>
                <p class="text-lg font-bold text-white">400</p>
                <p class="text-[9px]" style="color: rgba(201, 169, 110, 0.5)">
                  Capacidad máx.
                </p>
              </div>
              <div
                style="width: 1px; background: rgba(201, 169, 110, 0.1)"
              ></div>
              <div>
                <p class="text-lg font-bold text-white">15+</p>
                <p class="text-[9px]" style="color: rgba(201, 169, 110, 0.5)">
                  Años de experiencia
                </p>
              </div>
            </div>

            <div class="flex gap-3 mb-6">
              <div
                class="px-4 py-2 rounded-lg text-[11px] font-semibold text-black flex items-center gap-1.5"
                style="background: linear-gradient(135deg, #c9a96e, #a07840)"
              >
                <LucideIcon name="calendar" class-name="w-3 h-3" />
                Cotizar mi evento
              </div>
              <div
                class="px-4 py-2 rounded-lg text-[11px] font-semibold flex items-center gap-1.5"
                style="
                  border: 1px solid rgba(201, 169, 110, 0.25);
                  color: rgba(201, 169, 110, 0.7);
                "
              >
                <LucideIcon name="images" class-name="w-3 h-3" />
                Ver galería
              </div>
            </div>

            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px]"
              style="
                background: rgba(201, 169, 110, 0.06);
                border: 1px solid rgba(201, 169, 110, 0.12);
                color: #c9a96e;
              "
            >
              <span
                class="w-1.5 h-1.5 rounded-full animate-pulse"
                style="background: #c9a96e"
              ></span>
              Fechas disponibles 2026
            </div>
          </div>

          <!-- Feature cards row -->
          <div class="px-8 sm:px-12 pb-8 grid grid-cols-3 gap-3">
            <div
              v-for="feat in mockupFeatures"
              :key="feat.label"
              class="p-4 rounded-xl"
              style="
                background: rgba(201, 169, 110, 0.04);
                border: 1px solid rgba(201, 169, 110, 0.09);
              "
            >
              <LucideIcon
                :name="feat.icon"
                class-name="w-4 h-4 mb-2"
                style="color: rgba(201, 169, 110, 0.6)"
              />
              <p class="font-semibold text-white text-[11px] mb-0.5">
                {{ feat.label }}
              </p>
              <p class="text-[9px]" style="color: rgba(255, 255, 255, 0.3)">
                {{ feat.sub }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <router-link
          to="/salones-eventos/demo"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted text-sm font-semibold hover:dark:border-white hover:dark:text-white hover:border-light-text hover:text-light-text transition group"
        >
          <LucideIcon
            name="play-circle"
            class-name="w-4 h-4 group-hover:text-brand-400 transition"
          />
          Explorar demo completo e interactivo
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </router-link>
      </div>
    </section>

    <!-- ─── PAIN POINTS ───────────────────────────────────── -->
    <section class="dark:bg-base-900/50 bg-light-card/40 py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <p
          class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
        >
          01 / El problema real
        </p>
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4 max-w-2xl"
        >
          ¿Te suena familiar?
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted mb-14 max-w-xl text-base"
        >
          Si administras un salón de eventos, probablemente vives esto todos los
          días.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="pain in painPoints"
            :key="pain.title"
            class="group flex gap-5 p-6 rounded-xl border dark:border-base-700/60 border-light-border dark:bg-base-900/60 bg-white hover:dark:border-base-600 hover:border-light-muted/40 transition"
          >
            <div
              class="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center dark:bg-red-500/10 bg-red-50 border dark:border-red-500/20 border-red-100"
            >
              <LucideIcon :name="pain.icon" class-name="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3
                class="font-semibold dark:text-white text-light-text text-sm mb-1.5"
              >
                {{ pain.title }}
              </h3>
              <p
                class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
              >
                {{ pain.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SOLUTION INTRO ────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        02 / La solución
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-6 leading-tight"
          >
            Un sistema que trabaja por ti,
            <span class="dark:text-brand-400 text-brand-600">
              incluso mientras duermes</span
            >
          </h2>
          <p
            class="dark:text-text-secondary text-light-muted text-base mb-8 leading-relaxed"
          >
            El Sistema PRO de Reservaciones es una página web diseñada
            específicamente para salones de eventos. Responde dudas, muestra
            disponibilidad, genera cotizaciones y dirige al cliente directo a
            WhatsApp para cerrar.
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div
                class="w-6 h-6 rounded-full dark:bg-brand-500/20 bg-brand-50 flex items-center justify-center shrink-0"
              >
                <LucideIcon
                  name="check"
                  class-name="w-3.5 h-3.5 dark:text-brand-400 text-brand-600"
                />
              </div>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                Clientes que llegan ya listos para apartar
              </p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="w-6 h-6 rounded-full dark:bg-brand-500/20 bg-brand-50 flex items-center justify-center shrink-0"
              >
                <LucideIcon
                  name="check"
                  class-name="w-3.5 h-3.5 dark:text-brand-400 text-brand-600"
                />
              </div>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                Sin responder lo mismo 50 veces al día
              </p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="w-6 h-6 rounded-full dark:bg-brand-500/20 bg-brand-50 flex items-center justify-center shrink-0"
              >
                <LucideIcon
                  name="check"
                  class-name="w-3.5 h-3.5 dark:text-brand-400 text-brand-600"
                />
              </div>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                Imagen premium que genera confianza antes de hablar
              </p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="w-6 h-6 rounded-full dark:bg-brand-500/20 bg-brand-50 flex items-center justify-center shrink-0"
              >
                <LucideIcon
                  name="check"
                  class-name="w-3.5 h-3.5 dark:text-brand-400 text-brand-600"
                />
              </div>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                Más eventos, más ingresos, menos estrés
              </p>
            </div>
          </div>
        </div>

        <!-- Right side visual -->
        <div class="relative">
          <div
            class="rounded-2xl p-8 dark:bg-base-900/60 bg-light-card/60 border dark:border-base-700/50 border-light-border"
          >
            <!-- Fake message thread -->
            <div
              class="flex items-center gap-2 mb-6 pb-4 border-b dark:border-base-700/40 border-light-border"
            >
              <div
                class="w-2 h-2 rounded-full bg-green-400 animate-pulse"
              ></div>
              <span
                class="text-xs font-mono dark:text-text-secondary/60 text-light-muted/60"
                >Sistema activo · respondiendo ahora</span
              >
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex justify-end">
                <div
                  class="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-xs bg-green-500 text-white"
                >
                  Hola, ¿tienen disponibilidad para el 15 de marzo para 200
                  personas?
                </div>
              </div>
              <div class="flex justify-start">
                <div
                  class="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tl-sm text-xs dark:bg-base-800 bg-white border dark:border-base-700/40 border-light-border dark:text-text-secondary text-light-muted"
                >
                  ¡Hola! El 15 de marzo está disponible. Aquí puedes ver
                  nuestros paquetes y calcular tu cotización al instante 👉
                  jardín-victoria.com/cotizar
                </div>
              </div>
              <div class="flex justify-end">
                <div
                  class="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-xs bg-green-500 text-white"
                >
                  ¡Perfecto! Ya vi los paquetes, quiero apartar esa fecha 🎉
                </div>
              </div>
            </div>
            <div
              class="text-center p-3 rounded-xl dark:bg-brand-500/10 bg-brand-50 border dark:border-brand-500/20 border-brand-100"
            >
              <p
                class="text-xs font-semibold dark:text-brand-400 text-brand-600"
              >
                Reservación cerrada — sin llamadas repetitivas
              </p>
            </div>
          </div>
          <!-- Glow -->
          <div
            class="pointer-events-none absolute inset-0 rounded-2xl"
            style="box-shadow: 0 0 60px rgba(16, 185, 129, 0.04)"
          ></div>
        </div>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6">
      <div class="h-px dark:bg-base-700/50 bg-light-border"></div>
    </div>

    <!-- ─── FEATURES GRID ─────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        03 / Funcionalidades
      </p>
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4 max-w-2xl"
      >
        Todo lo que necesita tu salón para vender más
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-16 max-w-xl">
        Cada función fue diseñada para convertir visitas en reservaciones. Nada
        de relleno.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feat in features"
          :key="feat.title"
          class="group relative p-6 rounded-xl border dark:border-base-700/50 border-light-border hover:dark:border-base-600 hover:border-light-muted/40 transition dark:bg-base-900/30 bg-white"
        >
          <div class="flex items-start justify-between mb-5">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center dark:bg-base-800 bg-light-surface border dark:border-base-700 border-light-border group-hover:dark:border-brand-500/30 group-hover:border-brand-500/20 transition"
            >
              <LucideIcon
                :name="feat.icon"
                class-name="w-5 h-5 dark:text-brand-400 text-brand-600"
              />
            </div>
            <span
              class="text-[10px] font-mono px-2 py-1 rounded-full dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400/80 text-brand-700 border dark:border-brand-500/20 border-brand-100"
            >
              {{ feat.tag }}
            </span>
          </div>
          <h3
            class="font-semibold dark:text-white text-light-text text-base mb-2"
          >
            {{ feat.title }}
          </h3>
          <p
            class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
          >
            {{ feat.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- ─── HOW IT WORKS ──────────────────────────────────── -->
    <section class="dark:bg-base-900/50 bg-light-card/40 py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <p
          class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono text-center"
        >
          04 / ¿Cómo funciona?
        </p>
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4 text-center"
        >
          De cero a recibir reservaciones en 3 pasos
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted mb-16 text-center max-w-xl mx-auto"
        >
          Sin complicaciones técnicas. Tú pones el salón, nosotros ponemos el
          sistema.
        </p>

        <div class="relative">
          <!-- Connecting line -->
          <div
            class="hidden lg:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px dark:bg-base-700/60 bg-light-border"
          ></div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div
              v-for="step in steps"
              :key="step.num"
              class="relative text-center lg:text-left"
            >
              <!-- Icon circle -->
              <div
                class="w-16 h-16 rounded-2xl mx-auto lg:mx-0 mb-6 flex items-center justify-center dark:bg-base-800 bg-white border dark:border-base-700 border-light-border relative z-10"
              >
                <LucideIcon
                  :name="step.icon"
                  class-name="w-7 h-7 dark:text-brand-400 text-brand-600"
                />
                <span
                  class="absolute -top-2 -right-2 w-5 h-5 rounded-full dark:bg-base-700 bg-light-border flex items-center justify-center text-[10px] font-mono dark:text-text-secondary text-light-muted"
                  >{{ step.num }}</span
                >
              </div>
              <h3
                class="font-display font-bold dark:text-white text-light-text text-lg mb-3"
              >
                {{ step.title }}
              </h3>
              <p
                class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
              >
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PREMIUM FEATURES (VIP) ───────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        05 / Funciones Premium VIP
      </p>
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4 max-w-2xl"
      >
        Gestión completa de tu negocio de eventos
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-16 max-w-xl">
        El plan Premium VIP convierte tu página en un sistema empresarial
        completo.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="feat in premiumFeatures"
          :key="feat.title"
          class="flex gap-4 p-5 rounded-xl border dark:border-emerald-500/15 border-emerald-500/10 dark:bg-emerald-500/5 bg-emerald-50/50"
        >
          <div
            class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 dark:bg-emerald-500/10 bg-emerald-100 border dark:border-emerald-500/20 border-emerald-200"
          >
            <LucideIcon
              :name="feat.icon"
              class-name="w-4 h-4 text-emerald-500"
            />
          </div>
          <div>
            <h3
              class="font-semibold text-sm dark:text-white text-light-text mb-1"
            >
              {{ feat.title }}
            </h3>
            <p
              class="text-xs dark:text-text-secondary text-light-muted leading-relaxed"
            >
              {{ feat.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6">
      <div class="h-px dark:bg-base-700/50 bg-light-border"></div>
    </div>

    <!-- ─── TESTIMONIALS ──────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        06 / Resultados reales
      </p>
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
      >
        Lo que dicen otros dueños de salones
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-16 max-w-xl">
        No son promesas. Son resultados de salones que ya tienen el sistema
        funcionando.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="p-7 rounded-2xl border dark:border-base-700/50 border-light-border dark:bg-base-900/40 bg-white flex flex-col"
        >
          <!-- Stars -->
          <div class="flex gap-0.5 mb-5">
            <LucideIcon
              v-for="n in t.stars"
              :key="n"
              name="star"
              class-name="w-4 h-4 fill-amber-400 text-amber-400"
            />
          </div>

          <p
            class="dark:text-text-primary text-light-text leading-relaxed text-sm mb-6 flex-1"
          >
            "{{ t.quote }}"
          </p>

          <div
            class="flex items-center gap-3 pt-5 border-t dark:border-base-700/40 border-light-border"
          >
            <div
              class="w-9 h-9 rounded-full dark:bg-base-800 bg-light-surface border dark:border-base-700 border-light-border flex items-center justify-center"
            >
              <LucideIcon
                :name="t.icon"
                class-name="w-4 h-4 dark:text-text-secondary text-light-muted"
              />
            </div>
            <div>
              <p class="font-semibold dark:text-white text-light-text text-sm">
                {{ t.name }}
              </p>
              <p
                class="text-xs dark:text-text-secondary/60 text-light-muted/60"
              >
                {{ t.place }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── GUARANTEE ─────────────────────────────────────── -->
    <section class="dark:bg-base-900/50 bg-light-card/40 py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div
          class="rounded-2xl border dark:border-brand-500/20 border-brand-200 dark:bg-brand-500/5 bg-brand-50/30 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10"
        >
          <div
            class="w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center dark:bg-brand-500/15 bg-brand-100 border dark:border-brand-500/25 border-brand-200"
          >
            <LucideIcon
              name="shield-check"
              class-name="w-8 h-8 dark:text-brand-400 text-brand-600"
            />
          </div>
          <div>
            <h2
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-3"
            >
              Garantía de resultados — sin letra chiquita
            </h2>
            <p
              class="dark:text-text-secondary text-light-muted leading-relaxed mb-4"
            >
              Si en el primer mes después del lanzamiento no ves más solicitudes
              de cotización, optimizamos tu sistema sin costo extra hasta que
              empieces a ver resultados. Punto.
            </p>
            <p
              class="text-xs dark:text-text-secondary/50 text-light-muted/50 font-mono uppercase tracking-wider"
            >
              Invertir en tu sistema es invertir en más eventos, más ingresos y
              menos estrés.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PRICING ───────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono"
      >
        07 / Planes y precios
      </p>
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4 max-w-2xl"
      >
        Elige el plan que le viene a tu salón
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-16 max-w-xl">
        Desde presencia profesional hasta gestión completa. Todos incluyen
        garantía.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="pkg in packages"
          :key="pkg.name"
          class="relative flex flex-col rounded-2xl overflow-hidden border transition"
          :class="
            pkg.highlighted
              ? 'border-2 dark:border-white border-light-text shadow-xl'
              : pkg.vip
                ? 'border dark:border-emerald-500/30 border-emerald-200'
                : 'border dark:border-base-700 border-light-border'
          "
        >
          <!-- Badge -->
          <div
            v-if="pkg.badge"
            class="absolute top-0 right-0 py-1.5 px-4 text-xs font-bold rounded-bl-xl"
            :class="
              pkg.vip ? 'bg-emerald-500 text-white' : 'bg-white text-black'
            "
          >
            <span class="inline-flex items-center gap-1">
              {{ pkg.badge }}
              <LucideIcon
                :name="pkg.vip ? 'gem' : 'flame'"
                class-name="w-3 h-3"
              />
            </span>
          </div>

          <div class="p-8 flex-1" :class="pkg.badge ? 'pt-10' : ''">
            <!-- Name + icon -->
            <div class="flex items-center gap-3 mb-2">
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
                class="font-display text-xl font-bold dark:text-white text-light-text"
              >
                {{ pkg.name }}
              </h3>
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-6">
              {{ pkg.tagline }}
            </p>

            <!-- Price -->
            <div class="mb-7">
              <span
                class="font-display text-4xl font-bold dark:text-white text-light-text"
                >{{ pkg.price }}</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
              <p
                class="text-xs dark:text-text-secondary/50 text-light-muted/50 font-mono mt-1"
              >
                {{ pkg.note }}
              </p>
            </div>

            <!-- Included -->
            <ul class="space-y-2.5 mb-4">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-start gap-2.5 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  :name="pkg.vip ? 'sparkles' : 'check'"
                  :class-name="
                    'w-4 h-4 mt-0.5 shrink-0 ' +
                    (pkg.vip
                      ? 'text-emerald-400'
                      : pkg.highlighted
                        ? 'dark:text-white text-light-text'
                        : 'dark:text-brand-400/70 text-brand-600/70')
                  "
                />
                {{ f }}
              </li>
            </ul>

            <!-- Excluded -->
            <ul
              v-if="pkg.excluded?.length"
              class="space-y-2 border-t dark:border-base-700/40 border-light-border pt-4"
            >
              <li
                v-for="ex in pkg.excluded"
                :key="ex"
                class="flex items-start gap-2 text-xs dark:text-text-secondary/40 text-light-muted/40 line-through"
              >
                <LucideIcon
                  name="minus"
                  class-name="w-3.5 h-3.5 mt-0.5 shrink-0"
                />
                {{ ex }}
              </li>
            </ul>
          </div>

          <!-- CTA area -->
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              :to="pkg.demo"
              class="block w-full text-center px-4 py-2.5 rounded-xl font-semibold text-sm transition"
              :class="
                pkg.highlighted
                  ? 'bg-white text-black hover:bg-neutral-100'
                  : pkg.vip
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                    : 'border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted hover:dark:border-white hover:dark:text-white'
              "
            >
              <span class="inline-flex items-center justify-center gap-2">
                <LucideIcon name="eye" class-name="w-4 h-4" />
                Ver demo
              </span>
            </router-link>
            <a
              :href="pkg.wa"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-2.5 rounded-xl border dark:border-base-700 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm transition hover:dark:border-white hover:dark:text-white hover:border-light-text hover:text-light-text"
            >
              <span class="inline-flex items-center justify-center gap-2">
                Contratar plan
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── DEMO 21 DÍAS ──────────────────────────────────── -->
    <section class="dark:bg-base-900/50 bg-light-card/40 py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <div
          class="rounded-2xl border dark:border-amber-500/20 border-amber-200 dark:bg-amber-500/5 bg-amber-50/30 p-10 md:p-14"
        >
          <div class="flex flex-col md:flex-row items-start gap-10">
            <div class="md:flex-1">
              <p
                class="text-xs tracking-[0.2em] uppercase dark:text-amber-400/70 text-amber-600/70 mb-3 font-mono"
              >
                Prueba real antes de decidir
              </p>
              <h2
                class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
              >
                Demo 21 días por
                <span class="dark:text-amber-400 text-amber-600">$999 MXN</span>
              </h2>
              <p
                class="dark:text-text-secondary text-light-muted mb-8 leading-relaxed"
              >
                Armamos el sitio de tu salón con tu contenido real, lo
                publicamos y lo tienes funcionando durante 21 días. Si te
                convence y contratas, los $999 se descuentan del anticipo.
              </p>

              <div class="space-y-3 mb-8">
                <div class="flex items-center gap-3">
                  <LucideIcon
                    name="image"
                    class-name="w-4 h-4 dark:text-amber-400 text-amber-600"
                  />
                  <p class="text-sm dark:text-text-secondary text-light-muted">
                    Tu salón real — con tus fotos, servicios y precios
                  </p>
                </div>
                <div class="flex items-center gap-3">
                  <LucideIcon
                    name="share-2"
                    class-name="w-4 h-4 dark:text-amber-400 text-amber-600"
                  />
                  <p class="text-sm dark:text-text-secondary text-light-muted">
                    Publicado y compartible en redes sociales
                  </p>
                </div>
                <div class="flex items-center gap-3">
                  <LucideIcon
                    name="receipt"
                    class-name="w-4 h-4 dark:text-amber-400 text-amber-600"
                  />
                  <p class="text-sm dark:text-text-secondary text-light-muted">
                    Los $999 se restan del anticipo si contratas
                  </p>
                </div>
                <div class="flex items-center gap-3">
                  <LucideIcon
                    name="x-circle"
                    class-name="w-4 h-4 dark:text-text-secondary/50 text-light-muted/50"
                  />
                  <p
                    class="text-sm dark:text-text-secondary/50 text-light-muted/50"
                  >
                    Si no te convence, se desactiva al día 22. Sin compromisos.
                  </p>
                </div>
              </div>

              <a
                :href="waDemo21"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-100 transition shadow-md"
              >
                Solicitar demo de 21 días
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
            </div>

            <div class="md:w-64 shrink-0 space-y-4">
              <div
                class="p-5 rounded-xl dark:bg-base-800/60 bg-white border dark:border-base-700/40 border-amber-100 text-center"
              >
                <p
                  class="font-display text-3xl font-bold dark:text-white text-light-text mb-1"
                >
                  21
                </p>
                <p class="text-xs dark:text-text-secondary text-light-muted">
                  Días de prueba real
                </p>
              </div>
              <div
                class="p-5 rounded-xl dark:bg-base-800/60 bg-white border dark:border-base-700/40 border-amber-100 text-center"
              >
                <p
                  class="font-display text-3xl font-bold dark:text-amber-400 text-amber-600 mb-1"
                >
                  $999
                </p>
                <p class="text-xs dark:text-text-secondary text-light-muted">
                  MXN · descontable
                </p>
              </div>
              <div
                class="p-5 rounded-xl dark:bg-base-800/60 bg-white border dark:border-base-700/40 border-amber-100 text-center"
              >
                <p
                  class="font-display text-3xl font-bold dark:text-white text-light-text mb-1"
                >
                  48h
                </p>
                <p class="text-xs dark:text-text-secondary text-light-muted">
                  Para tenerlo publicado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMPARISON TABLE ──────────────────────────────── -->
    <section class="max-w-5xl mx-auto px-6 py-24">
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text text-center mb-2 tracking-tight"
      >
        Compara los planes
      </h2>
      <p class="text-center dark:text-text-secondary text-light-muted mb-10">
        Elige el sistema que necesita tu salón. Todos incluyen garantía.
      </p>
      <div
        class="overflow-x-auto rounded-xl border dark:border-base-800 border-light-border"
      >
        <table class="w-full text-sm">
          <thead>
            <tr
              class="dark:bg-base-900 bg-light-card border-b dark:border-base-800 border-light-border"
            >
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
                class="text-center px-4 py-4 dark:text-white text-light-text font-semibold border-x dark:border-base-700 border-light-border"
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
              v-for="(row, i) in comparisonRows"
              :key="i"
              class="border-b dark:border-base-800/60 border-light-border/60 last:border-0"
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
                  class-name="w-4 h-4 dark:text-brand-400 text-brand-600 mx-auto"
                />
                <span
                  v-else
                  class="dark:text-base-700 text-light-border text-lg leading-none"
                  >—</span
                >
              </td>
              <td
                class="text-center px-4 py-3 border-x dark:border-base-700/40 border-light-border/40"
              >
                <LucideIcon
                  v-if="row.col2"
                  name="check"
                  class-name="w-4 h-4 dark:text-white text-light-text mx-auto"
                />
                <span
                  v-else
                  class="dark:text-base-700 text-light-border text-lg leading-none"
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
                  class="dark:text-base-700 text-light-border text-lg leading-none"
                  >—</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="max-w-5xl mx-auto px-6">
      <div class="h-px dark:bg-base-800 bg-light-border"></div>
    </div>

    <!-- ─── FAQ ───────────────────────────────────────────── -->
    <section class="max-w-3xl mx-auto px-6 py-24">
      <p
        class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-3 font-mono text-center"
      >
        08 / Preguntas frecuentes
      </p>
      <h2
        class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text text-center mb-14"
      >
        Todo lo que necesitas saber
      </h2>

      <div class="space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="rounded-xl border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <button
            @click="toggleFaq(i)"
            class="w-full flex items-center justify-between px-6 py-4 text-left dark:hover:bg-base-800/50 hover:bg-light-card/60 transition"
          >
            <span
              class="font-semibold dark:text-white text-light-text text-sm pr-4"
              >{{ faq.q }}</span
            >
            <LucideIcon
              :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
              class-name="w-4 h-4 dark:text-text-secondary text-light-muted shrink-0 transition"
            />
          </button>
          <div
            v-if="openFaq === i"
            class="px-6 pb-5 border-t dark:border-base-700/40 border-light-border pt-4"
          >
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
            >
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
          ¿Tienes otra pregunta?
        </p>
        <a
          :href="waCotizar"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border dark:border-base-600 border-light-border dark:text-text-secondary text-light-muted text-sm font-semibold hover:dark:border-white hover:dark:text-white hover:border-light-text hover:text-light-text transition"
        >
          <LucideIcon name="message-circle" class-name="w-4 h-4" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>

    <!-- ─── FINAL CTA ──────────────────────────────────────── -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <!-- Ambient -->
      <div class="pointer-events-none absolute inset-0">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] dark:bg-brand-500/8 bg-brand-500/5"
        ></div>
      </div>

      <div class="relative max-w-3xl mx-auto">
        <p
          class="text-xs tracking-[0.2em] uppercase dark:text-text-secondary/60 text-light-muted/60 mb-5 font-mono"
        >
          Listo para empezar
        </p>
        <h2
          class="font-display text-4xl sm:text-6xl font-bold dark:text-white text-light-text mb-6 tracking-tight leading-[1.04]"
        >
          ¿Listo para que tu salón
          <span class="dark:text-brand-400 text-brand-600">
            llene su agenda</span
          >?
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted mb-12 text-lg max-w-xl mx-auto leading-relaxed"
        >
          No es solo una página web. Es el sistema que te va a ayudar a
          conseguir más eventos, sin perder tiempo y con una imagen que inspira
          confianza.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-100 transition shadow-lg"
          >
            <LucideIcon name="calendar-check" class-name="w-4 h-4" />
            Quiero más reservaciones
          </a>
          <a
            :href="waDemo21"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border dark:border-amber-500/40 border-amber-300 dark:text-amber-400 text-amber-600 font-semibold text-sm hover:dark:bg-amber-500/10 hover:bg-amber-50 transition"
          >
            <LucideIcon name="play-circle" class-name="w-4 h-4" />
            Demo 21 días — $999 MXN
          </a>
        </div>

        <p
          class="text-xs dark:text-text-secondary/40 text-light-muted/40 font-mono"
        >
          Garantía incluida · Sin contratos permanentes · Entrega en 2–5 semanas
        </p>
      </div>
    </section>
  </main>
</template>
