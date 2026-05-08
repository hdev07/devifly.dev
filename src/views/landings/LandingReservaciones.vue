<script setup>
/**
 * Landing: Sistema PRO de Reservaciones para Salones
 * Palette: rose (matches navbar #f43f5e)
 * Style: Stripe — high-trust premium, dark surfaces, rose accents, ROI calculator
 * Section order: Hero brutal · Video walkthrough · Cómo entran reservas · Calendario · Automatizaciones · Casos de éxito · ROI · Pricing · FAQs · Agenda demo
 */
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const wa = (m) => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const waDemo = wa("¡Hola! Tengo un salón de eventos y me interesa una demo del Sistema PRO de Reservaciones 🏛️");
const waCotizar = wa("Quiero cotizar el Sistema PRO de Reservaciones para mi salón 🏛️");
const waDemo21 = wa("¡Hola! Me interesa el demo de 21 días para mi salón de eventos por $999 MXN 🏛️");
const waEsencial = wa("¡Hola! Me interesa el plan Esencial del Sistema de Reservaciones 🏛️");
const waPro = wa("¡Hola! Me interesa el plan Pro del Sistema de Reservaciones 🏛️");
const waPremium = wa("¡Hola! Me interesa el plan Premium VIP del Sistema de Reservaciones 🏛️");

const openFaq = ref(null);
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i };

const stats = [
  { value: "500+", label: "Eventos gestionados" },
  { value: "48h", label: "Para publicar" },
  { value: "3×", label: "Más cotizaciones" },
  { value: "100%", label: "Garantizado" },
];

// ROI Calculator
const ticketPromedio = ref(35000);
const cotizacionesActuales = ref(8);
const tasaConversion = ref(20);

const eventosActuales = computed(() => Math.round((cotizacionesActuales.value * tasaConversion.value) / 100));
const ingresoActual = computed(() => eventosActuales.value * ticketPromedio.value);
const cotizacionesNuevas = computed(() => Math.round(cotizacionesActuales.value * 3));
const eventosNuevos = computed(() => Math.round((cotizacionesNuevas.value * tasaConversion.value) / 100));
const ingresoNuevo = computed(() => eventosNuevos.value * ticketPromedio.value);
const ingresoExtra = computed(() => ingresoNuevo.value - ingresoActual.value);
const fmt = (n) => "$" + n.toLocaleString("es-MX");

// Cómo entran reservas (lead funnel)
const funnelSteps = [
  { num: "01", icon: "instagram", title: "Instagram / Google", desc: "Cliente te encuentra y entra a tu sitio." },
  { num: "02", icon: "images", title: "Galería que vende", desc: "Ve fotos premium e imagina su evento ahí." },
  { num: "03", icon: "calculator", title: "Cotizador en línea", desc: "Arma su evento, elige paquete, ve precio." },
  { num: "04", icon: "calendar-check", title: "Reserva disponible", desc: "Ve qué fechas hay libres y bloquea la suya." },
  { num: "05", icon: "message-circle", title: "Llega a tu WhatsApp", desc: "Lead calificado, listo para cerrar." },
];

// Calendario features
const calendarFeatures = [
  { icon: "calendar-days", title: "Disponibilidad en tiempo real", desc: "Tus clientes ven fechas libres al instante. Sin doble reservas, sin llamadas de '¿y ese día?'" },
  { icon: "shield-check", title: "Bloqueos automáticos", desc: "Cuando se confirma una reserva, esa fecha se cierra para todos. Tú no tocas nada." },
  { icon: "users-2", title: "CRM por evento", desc: "Cada cliente con su historial, anticipos, contratos y notas. Todo en un solo lugar." },
  { icon: "credit-card", title: "Pagos de anticipo en línea", desc: "Recibe depósitos para apartar fechas. Menos cancelaciones, más compromiso." },
];

// Automatizaciones
const automations = [
  {
    icon: "send",
    title: "Confirmación automática",
    desc: "Cuando el cliente reserva, le mandas confirmación + recordatorios sin levantar un dedo.",
    tag: "Ahorra 4h/semana",
  },
  {
    icon: "file-text",
    title: "Contratos digitales",
    desc: "Genera y envía contratos para firma electrónica. Adiós PDFs editables y firmas escaneadas.",
    tag: "Cierra más rápido",
  },
  {
    icon: "calendar",
    title: "Recordatorios programados",
    desc: "El sistema avisa al cliente 30 días, 7 días y 1 día antes. Cero olvidos, cero cancelaciones.",
    tag: "-50% no-shows",
  },
  {
    icon: "chart-pie",
    title: "Reportes automáticos",
    desc: "Cada lunes te llega un resumen: cotizaciones, conversiones, ingresos, fechas libres.",
    tag: "Decisiones con datos",
  },
  {
    icon: "instagram",
    title: "Sync con Google Calendar",
    desc: "Tu agenda personal y la del salón siempre sincronizadas. Sin doble booking nunca más.",
    tag: "Sin conflictos",
  },
  {
    icon: "megaphone",
    title: "Email marketing post-evento",
    desc: "Pide reseñas, fotos y referidos automáticamente después de cada evento. Tu mejor publicidad.",
    tag: "+30% referidos",
  },
];

const testimonials = [
  {
    stars: 5,
    quote: "Antes perdía clientes por no contestar a tiempo. Ahora mi agenda se llena sola y solo atiendo a los que realmente quieren reservar.",
    name: "Mariana R.",
    place: "Salón Jardín Encantado · Puebla",
    metric: "+40% reservaciones cerradas",
  },
  {
    stars: 5,
    quote: "Mi página se ve increíble, recibo más mensajes y cierro más eventos. Vale cada peso. En el primer mes recuperé la inversión.",
    name: "Luis M.",
    place: "Terraza Real · CDMX",
    metric: "ROI en 30 días",
  },
  {
    stars: 5,
    quote: "El cotizador es lo que más me gusta. Los clientes llegan sabiendo cuánto van a pagar. No hay regateo, solo cierres.",
    name: "Patricia V.",
    place: "Hacienda Los Arcos · Querétaro",
    metric: "Cierres directos sin regateo",
  },
];

const packages = [
  {
    name: "Esencial",
    tagline: "Presencia profesional que genera confianza",
    price: "$5,999",
    icon: "building",
    note: "Hasta 20 fotos · Entrega 2 semanas",
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
      "CRM de clientes",
      "Pagos en línea",
    ],
  },
  {
    name: "Pro",
    tagline: "Todo para convertir visitas en reservaciones",
    price: "$9,999",
    icon: "building-2",
    note: "Fotos ilimitadas + videos · Entrega 3 semanas",
    wa: waPro,
    highlighted: true,
    badge: "Más vendido",
    features: [
      "Todo lo de Esencial",
      "Cotizador en línea",
      "Calendario de disponibilidad",
      "Galería con videos",
      "Sección paquetes / servicios",
      "Blog de eventos",
      "Sync Google Calendar",
    ],
    excluded: [
      "Panel admin completo",
      "CRM clientes integrado",
      "Pagos anticipo en línea",
      "Contratos digitales",
      "Multi-salón",
      "Analíticas y reportes",
    ],
  },
  {
    name: "Premium VIP",
    tagline: "Gestión completa de tu negocio de eventos",
    price: "$16,999",
    icon: "gem",
    note: "Multi-salón · CRM completo · Entrega 4–5 semanas",
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
    excluded: [],
  },
];

const faqs = [
  { q: "¿Cuánto tiempo tarda en estar lista mi página?", a: "Esencial 2 semanas · Pro 3 semanas · Premium VIP 4–5 semanas. Depende de qué tan rápido nos compartes contenido (fotos, info, precios)." },
  { q: "¿Qué necesito darles para empezar?", a: "Solo fotos del salón, info de paquetes y servicios, y tus datos de contacto. Nosotros nos encargamos del resto: textos, diseño, configuración y publicación." },
  { q: "¿Puedo probar antes de contratar?", a: "Sí. Tenemos el Demo de 21 días por $999 MXN donde armamos tu sitio real con tu contenido. Si decides contratar, esos $999 se descuentan del anticipo." },
  { q: "¿Qué pasa si no me genera más reservaciones?", a: "Garantía de resultados. Si en el primer mes no notas mejoras, optimizamos tu sitio sin costo hasta que veas resultados. Sin letras chiquitas." },
  { q: "¿Necesito saber de tecnología para manejarlo?", a: "No. El sistema fue diseñado para dueños de salones, no para técnicos. Capacitación incluida en Pro y Premium VIP." },
  { q: "¿Incluye dominio y hosting?", a: "Sí, primer año de hosting + configuración del dominio incluidos. A partir del segundo año hay una mensualidad de mantenimiento accesible." },
  { q: "¿Puedo subir de plan después?", a: "Claro. Puedes empezar con Esencial y escalar al Pro o Premium VIP cuando lo necesites. Solo se cobra la diferencia." },
  { q: "¿Cómo recibo los pagos de anticipo?", a: "En el plan Premium VIP integramos Stripe / pasarela mexicana. El cliente paga online y el dinero llega directo a tu cuenta — nosotros no tocamos nada." },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-x-hidden">
    <!-- ─── HERO BRUTAL ─────────────────────────────── -->
    <section class="relative max-w-7xl mx-auto px-6 pt-12 pb-20">
      <div
        class="pointer-events-none absolute -top-20 -right-20 w-[600px] h-[500px] rounded-full blur-[120px] opacity-30"
        style="background: radial-gradient(ellipse, #f43f5e, transparent 65%)"
      ></div>
      <div
        class="pointer-events-none absolute top-40 -left-10 w-72 h-72 rounded-full blur-[100px] opacity-20"
        style="background: radial-gradient(circle, #e11d48, transparent 65%)"
      ></div>

      <div class="relative">
        <p class="text-xs tracking-[0.25em] uppercase font-mono mb-5" style="color: rgba(244, 63, 94, 0.7)">
          Sistema PRO · Salones &amp; Eventos
        </p>

        <h1
          class="font-display text-5xl sm:text-6xl lg:text-[5rem] font-bold dark:text-white text-light-text leading-[1.02] tracking-tight max-w-5xl mb-7"
        >
          Tu salón merece una página que
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #fb7185 100%)"
          >venda eventos</span>,
          no solo que exista.
        </h1>

        <p class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mb-10 leading-relaxed">
          Un sistema web completo que responde dudas, filtra clientes y llena tu agenda
          — mientras tú te enfocas en hacer eventos inolvidables.
        </p>

        <div class="flex flex-wrap gap-4 mb-14">
          <a
            :href="waDemo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #e11d48, #f43f5e); box-shadow: 0 10px 32px rgba(244, 63, 94, 0.4)"
          >
            <LucideIcon name="calendar-check" class-name="w-4 h-4" />
            Quiero más reservaciones
          </a>
          <RouterLink
            to="/salones-eventos/demo"
            class="inline-flex items-center gap-2 px-7 py-4 rounded-xl border font-semibold text-sm transition"
            style="border-color: rgba(244, 63, 94, 0.35); color: #fb7185; background: rgba(244, 63, 94, 0.04)"
          >
            <LucideIcon name="play" class-name="w-4 h-4" />
            Ver demo en vivo
          </RouterLink>
        </div>

        <!-- Stats bar -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border"
          style="background: rgba(244, 63, 94, 0.2); border-color: rgba(244, 63, 94, 0.2)"
        >
          <div
            v-for="s in stats"
            :key="s.label"
            class="px-6 py-6 text-center"
            style="background: rgba(15, 8, 12, 0.92)"
          >
            <p class="font-display text-3xl sm:text-4xl font-bold mb-1" style="color: #fb7185">{{ s.value }}</p>
            <p class="text-xs" style="color: rgba(255, 255, 255, 0.5)">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 2 · VIDEO WALKTHROUGH ─────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
            01 / Walkthrough
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Mira cómo se ve tu nuevo sistema
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Un recorrido por todas las pantallas que verán tus clientes — y por el panel donde tú gestionas todo.
          </p>
        </div>

        <!-- Browser frame walkthrough -->
        <div
          class="rounded-2xl border overflow-hidden shadow-2xl group cursor-pointer transition hover:-translate-y-1"
          style="border-color: rgba(244, 63, 94, 0.2)"
          @click="$router.push('/salones-eventos/demo')"
        >
          <!-- Browser bar -->
          <div
            class="flex items-center gap-2 px-5 py-3 border-b"
            style="background: #0a0a0c; border-color: rgba(244, 63, 94, 0.15)"
          >
            <div class="flex gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-amber-400/60"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
            </div>
            <div
              class="flex-1 mx-4 py-1.5 px-4 rounded-md text-xs font-mono"
              style="background: rgba(244, 63, 94, 0.05); color: rgba(251, 113, 133, 0.55); border: 1px solid rgba(244, 63, 94, 0.12)"
            >jardin-victoria.com</div>
            <div class="text-[10px] font-mono flex items-center gap-1.5" style="color: rgba(251, 113, 133, 0.7)">
              <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background: #f43f5e"></span>
              En vivo
            </div>
          </div>

          <!-- Walkthrough content with play overlay -->
          <div class="relative" style="background: #0c0a0e; min-height: 420px">
            <div
              class="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full blur-[90px] opacity-30"
              style="background: radial-gradient(ellipse, #f43f5e, transparent 70%)"
            ></div>

            <!-- Mock nav -->
            <div
              class="flex items-center justify-between px-8 sm:px-12 pt-6 pb-4 border-b"
              style="border-color: rgba(244, 63, 94, 0.1)"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                  style="background: linear-gradient(135deg, #f43f5e, #e11d48)"
                >JV</div>
                <span class="text-sm font-semibold text-white">Jardín Victoria</span>
              </div>
              <div class="hidden sm:flex items-center gap-4">
                <span class="text-[11px]" style="color: rgba(251, 113, 133, 0.55)">Galería</span>
                <span class="text-[11px]" style="color: rgba(251, 113, 133, 0.55)">Paquetes</span>
                <span class="text-[11px]" style="color: rgba(251, 113, 133, 0.55)">Espacios</span>
                <span class="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white"
                  style="background: linear-gradient(135deg, #f43f5e, #e11d48)">Cotizar evento</span>
              </div>
            </div>

            <!-- Hero mock -->
            <div class="px-8 sm:px-12 pt-10 pb-8">
              <p class="text-[10px] uppercase tracking-widest mb-2" style="color: rgba(251, 113, 133, 0.55)">
                Salón de eventos · Guadalajara
              </p>
              <p class="text-2xl sm:text-4xl font-bold text-white leading-tight mb-3">
                Donde cada momento <span style="color: #fb7185">se convierte</span> en un recuerdo eterno
              </p>
              <p class="text-xs mb-6 max-w-md" style="color: rgba(255, 255, 255, 0.4)">
                Bodas, XV años y eventos corporativos. Capacidad para 400 invitados en 4 espacios exclusivos.
              </p>
              <div class="flex gap-3">
                <div class="px-4 py-2 rounded-lg text-[11px] font-semibold text-white flex items-center gap-1.5"
                  style="background: linear-gradient(135deg, #f43f5e, #e11d48)">
                  <LucideIcon name="calendar" class-name="w-3 h-3" />
                  Cotizar mi evento
                </div>
                <div class="px-4 py-2 rounded-lg text-[11px] font-semibold flex items-center gap-1.5"
                  style="border: 1px solid rgba(244, 63, 94, 0.3); color: rgba(251, 113, 133, 0.85)">
                  <LucideIcon name="images" class-name="w-3 h-3" />
                  Ver galería
                </div>
              </div>
            </div>

            <!-- Play button overlay -->
            <div class="absolute inset-0 flex items-center justify-center group-hover:bg-black/30 transition">
              <div
                class="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                style="background: linear-gradient(135deg, #f43f5e, #e11d48); box-shadow: 0 20px 60px rgba(244, 63, 94, 0.6)"
              >
                <LucideIcon name="play" class-name="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <RouterLink
            to="/salones-eventos/demo"
            class="inline-flex items-center gap-2 text-sm font-semibold transition"
            style="color: #fb7185"
          >
            Explorar demo completo e interactivo
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ─── 3 · CÓMO ENTRAN LAS RESERVAS ────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(244, 63, 94, 0.05), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
            02 / Cómo entran reservas
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Del scroll en Instagram a tu agenda
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            El cliente pasa por 5 pasos sin que tú levantes el teléfono. Te llega listo para cerrar.
          </p>
        </div>

        <!-- Funnel steps - visual flow -->
        <div class="relative grid grid-cols-1 md:grid-cols-5 gap-3">
          <div
            class="hidden md:block absolute top-7 left-[10%] right-[10%] h-px border-t border-dashed"
            style="border-color: rgba(244, 63, 94, 0.3)"
          ></div>

          <div
            v-for="(step, i) in funnelSteps"
            :key="step.num"
            class="relative text-center"
          >
            <div
              class="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center border relative z-10"
              :style="`background: rgba(244, 63, 94, ${0.05 + i * 0.02}); border-color: rgba(244, 63, 94, ${0.2 + i * 0.05}); box-shadow: 0 10px 30px -10px rgba(244, 63, 94, ${0.3 + i * 0.05})`"
            >
              <LucideIcon :name="step.icon" class-name="w-6 h-6" style="color: #fb7185" />
            </div>
            <p class="font-mono text-[10px] mb-1.5" style="color: rgba(244, 63, 94, 0.7)">{{ step.num }}</p>
            <h3 class="dark:text-white text-light-text font-semibold text-sm mb-1.5">{{ step.title }}</h3>
            <p class="text-xs dark:text-text-secondary text-light-muted leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>

        <!-- WhatsApp result -->
        <div
          class="mt-14 max-w-2xl mx-auto rounded-2xl p-6 border"
          style="background: rgba(34, 197, 94, 0.04); border-color: rgba(34, 197, 94, 0.2)"
        >
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2 h-2 rounded-full animate-pulse" style="background: #22c55e"></span>
            <span class="text-xs font-mono" style="color: rgba(255, 255, 255, 0.6)">Llegando ahora a tu WhatsApp</span>
          </div>
          <div class="space-y-2.5">
            <div class="flex justify-end">
              <div class="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-xs text-white"
                style="background: #22c55e">
                Hola, confirmo evento del 15 de marzo · 200 personas · Paquete Diamante 💎 · listo para apartar fecha
              </div>
            </div>
          </div>
          <div
            class="mt-4 text-center p-3 rounded-xl"
            style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.2)"
          >
            <p class="text-xs font-semibold" style="color: #fb7185">
              Lead calificado — sin llamadas repetitivas, sin regateo
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 · GESTIÓN DE CALENDARIO ─────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
              03 / Gestión de calendario
            </p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-5 leading-tight">
              Tu agenda, en piloto automático
            </h2>
            <p class="dark:text-text-secondary text-light-muted mb-8 leading-relaxed">
              Olvídate de WhatsApp, Excel y notas en papel. Toda tu operación en una sola pantalla — y los clientes
              ven solo lo que tú quieres que vean.
            </p>
            <div class="space-y-3">
              <div
                v-for="f in calendarFeatures"
                :key="f.title"
                class="flex gap-4 p-4 rounded-xl border"
                style="background: rgba(244, 63, 94, 0.03); border-color: rgba(244, 63, 94, 0.15)"
              >
                <div
                  class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style="background: rgba(244, 63, 94, 0.1)"
                >
                  <LucideIcon :name="f.icon" class-name="w-5 h-5" style="color: #fb7185" />
                </div>
                <div>
                  <h3 class="dark:text-white text-light-text font-semibold text-sm mb-1">{{ f.title }}</h3>
                  <p class="text-xs dark:text-text-secondary text-light-muted leading-relaxed">{{ f.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Calendar mockup -->
          <div class="relative">
            <div
              class="rounded-2xl p-6 border"
              style="background: rgba(15, 8, 12, 0.6); border-color: rgba(244, 63, 94, 0.25); box-shadow: 0 30px 80px -20px rgba(244, 63, 94, 0.4)"
            >
              <div class="flex items-center justify-between mb-5">
                <div>
                  <p class="text-xs font-mono" style="color: rgba(244, 63, 94, 0.7)">Marzo 2026</p>
                  <p class="text-white font-display text-lg font-bold">Disponibilidad</p>
                </div>
                <div class="flex gap-1.5">
                  <span class="w-7 h-7 rounded-md flex items-center justify-center"
                    style="background: rgba(244, 63, 94, 0.1); color: #fb7185">
                    <LucideIcon name="chevron-left" class-name="w-3.5 h-3.5" />
                  </span>
                  <span class="w-7 h-7 rounded-md flex items-center justify-center"
                    style="background: rgba(244, 63, 94, 0.1); color: #fb7185">
                    <LucideIcon name="chevron-right" class-name="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-7 gap-1 mb-4">
                <div v-for="d in ['L','M','M','J','V','S','D']" :key="d"
                  class="text-center text-[10px] font-bold py-1"
                  style="color: rgba(244, 63, 94, 0.6)">{{ d }}</div>
              </div>

              <div class="grid grid-cols-7 gap-1.5">
                <template v-for="n in 31" :key="n">
                  <div
                    class="aspect-square rounded-md flex items-center justify-center text-xs font-medium"
                    :style="[7, 14, 21, 28].includes(n)
                      ? 'background: rgba(239, 68, 68, 0.15); color: rgba(255, 255, 255, 0.4); text-decoration: line-through'
                      : [3, 10, 17, 24, 31].includes(n)
                        ? 'background: rgba(244, 63, 94, 0.25); color: white; box-shadow: inset 0 0 0 1px rgba(244, 63, 94, 0.5)'
                        : 'background: rgba(255, 255, 255, 0.03); color: rgba(255, 255, 255, 0.7)'"
                  >{{ n }}</div>
                </template>
              </div>

              <div class="mt-5 pt-5 border-t" style="border-color: rgba(244, 63, 94, 0.15)">
                <div class="flex items-center gap-3 text-xs">
                  <span class="flex items-center gap-1.5" style="color: rgba(255, 255, 255, 0.7)">
                    <span class="w-2 h-2 rounded" style="background: rgba(244, 63, 94, 0.5)"></span>
                    Disponible
                  </span>
                  <span class="flex items-center gap-1.5" style="color: rgba(255, 255, 255, 0.5)">
                    <span class="w-2 h-2 rounded" style="background: rgba(239, 68, 68, 0.4)"></span>
                    Reservado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 5 · AUTOMATIZACIONES ──────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(244, 63, 94, 0.05), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
            04 / Automatizaciones
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Lo que el sistema hace por ti
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Cada hora gastada en tareas repetitivas es un evento que dejas de cerrar. Estas las hacemos por ti.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="auto in automations"
            :key="auto.title"
            class="p-6 rounded-2xl border transition hover:-translate-y-1"
            style="background: rgba(244, 63, 94, 0.03); border-color: rgba(244, 63, 94, 0.15)"
          >
            <div class="flex items-start justify-between mb-5">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center"
                style="background: rgba(244, 63, 94, 0.1)"
              >
                <LucideIcon :name="auto.icon" class-name="w-5 h-5" style="color: #fb7185" />
              </div>
              <span
                class="text-[10px] font-mono px-2 py-1 rounded-full"
                style="background: rgba(244, 63, 94, 0.1); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.2)"
              >{{ auto.tag }}</span>
            </div>
            <h3 class="dark:text-white text-light-text font-semibold text-base mb-2">{{ auto.title }}</h3>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">{{ auto.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6 · CASOS DE ÉXITO ───────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
            05 / Casos de éxito
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Salones reales con resultados reales
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="p-7 rounded-2xl border flex flex-col transition hover:-translate-y-1"
            style="background: rgba(244, 63, 94, 0.03); border-color: rgba(244, 63, 94, 0.15)"
          >
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="n in t.stars" :key="n"
                name="star"
                class-name="w-4 h-4"
                style="color: #f43f5e; fill: #f43f5e"
              />
            </div>
            <p class="dark:text-text-primary text-light-text leading-relaxed text-sm mb-5 flex-1">"{{ t.quote }}"</p>
            <div
              class="px-3 py-2 rounded-lg text-xs font-mono mb-5 inline-flex items-center gap-2 self-start"
              style="background: rgba(244, 63, 94, 0.1); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.2)"
            >
              <LucideIcon name="trending-up" class-name="w-3.5 h-3.5" />
              {{ t.metric }}
            </div>
            <div class="flex items-center gap-3 pt-5 border-t" style="border-color: rgba(244, 63, 94, 0.15)">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style="background: linear-gradient(135deg, #e11d48, #f43f5e)"
              >{{ t.name.slice(0, 1) }}</div>
              <div>
                <p class="dark:text-white text-light-text font-semibold text-sm">{{ t.name }}</p>
                <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">{{ t.place }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 7 · ROI CALCULATOR ───────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(244, 63, 94, 0.06), transparent)"
    >
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
            06 / Calculadora de ROI
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            ¿Cuántas reservas estás perdiendo hoy?
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Mueve los sliders con tu realidad y mira lo que un sistema PRO podría agregar a tu facturación.
          </p>
        </div>

        <div
          class="rounded-3xl border p-8 sm:p-10"
          style="background: rgba(15, 8, 12, 0.6); border-color: rgba(244, 63, 94, 0.25)"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <!-- Inputs -->
            <div class="space-y-6">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <label class="text-sm font-semibold dark:text-white text-light-text">Ticket promedio por evento</label>
                  <span class="text-sm font-mono font-bold" style="color: #fb7185">{{ fmt(ticketPromedio) }}</span>
                </div>
                <input
                  v-model.number="ticketPromedio"
                  type="range" min="10000" max="200000" step="5000"
                  class="roi-range w-full"
                  :style="`--fill: ${((ticketPromedio - 10000) / (200000 - 10000)) * 100}%`"
                />
                <div class="flex justify-between text-[10px] mt-1" style="color: rgba(255, 255, 255, 0.4)">
                  <span>$10K</span><span>$200K</span>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-3">
                  <label class="text-sm font-semibold dark:text-white text-light-text">Cotizaciones / mes (hoy)</label>
                  <span class="text-sm font-mono font-bold" style="color: #fb7185">{{ cotizacionesActuales }}</span>
                </div>
                <input
                  v-model.number="cotizacionesActuales"
                  type="range" min="2" max="40" step="1"
                  class="roi-range w-full"
                  :style="`--fill: ${((cotizacionesActuales - 2) / (40 - 2)) * 100}%`"
                />
                <div class="flex justify-between text-[10px] mt-1" style="color: rgba(255, 255, 255, 0.4)">
                  <span>2</span><span>40</span>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-3">
                  <label class="text-sm font-semibold dark:text-white text-light-text">Tasa de cierre actual</label>
                  <span class="text-sm font-mono font-bold" style="color: #fb7185">{{ tasaConversion }}%</span>
                </div>
                <input
                  v-model.number="tasaConversion"
                  type="range" min="5" max="60" step="1"
                  class="roi-range w-full"
                  :style="`--fill: ${((tasaConversion - 5) / (60 - 5)) * 100}%`"
                />
                <div class="flex justify-between text-[10px] mt-1" style="color: rgba(255, 255, 255, 0.4)">
                  <span>5%</span><span>60%</span>
                </div>
              </div>
            </div>

            <!-- Result -->
            <div class="space-y-4">
              <div
                class="rounded-2xl p-5 border"
                style="background: rgba(244, 63, 94, 0.03); border-color: rgba(244, 63, 94, 0.15)"
              >
                <p class="text-xs font-mono mb-2" style="color: rgba(255, 255, 255, 0.5)">Hoy facturas aprox.</p>
                <p class="font-display text-2xl font-bold dark:text-white text-light-text">{{ fmt(ingresoActual) }}</p>
                <p class="text-xs mt-1" style="color: rgba(255, 255, 255, 0.5)">{{ eventosActuales }} eventos / mes</p>
              </div>

              <div class="flex items-center justify-center py-1">
                <LucideIcon name="arrow-right" class-name="w-5 h-5 rotate-90" style="color: #f43f5e" />
              </div>

              <div
                class="rounded-2xl p-5 border-2 relative overflow-hidden"
                style="border-color: #f43f5e; background: linear-gradient(145deg, rgba(244, 63, 94, 0.12), rgba(225, 29, 72, 0.04))"
              >
                <div
                  class="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-40"
                  style="background: #f43f5e"
                ></div>
                <div class="relative">
                  <p class="text-xs font-mono mb-2" style="color: #fb7185">Con el Sistema PRO (3× más cotizaciones)</p>
                  <p class="font-display text-3xl font-extrabold mb-1"
                    style="background: linear-gradient(135deg, #fb7185, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent">
                    {{ fmt(ingresoNuevo) }}
                  </p>
                  <p class="text-xs" style="color: rgba(255, 255, 255, 0.6)">
                    {{ eventosNuevos }} eventos / mes
                  </p>
                  <div class="mt-4 pt-4 border-t flex items-center justify-between" style="border-color: rgba(244, 63, 94, 0.2)">
                    <span class="text-xs dark:text-text-secondary text-light-muted">+ Ingreso adicional</span>
                    <span class="font-display font-bold" style="color: #fb7185">{{ fmt(ingresoExtra) }}/mes</span>
                  </div>
                </div>
              </div>

              <p class="text-[11px] text-center" style="color: rgba(255, 255, 255, 0.4)">
                * Estimación basada en clientes que pasaron de WhatsApp manual a sistema PRO
              </p>
            </div>
          </div>

          <div class="mt-10 text-center">
            <a
              :href="waCotizar" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style="background: linear-gradient(135deg, #e11d48, #f43f5e); box-shadow: 0 10px 28px rgba(244, 63, 94, 0.4)"
            >
              Quiero estos números para mi salón
              <LucideIcon name="arrow-right" class-name="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 8 · PRICING ──────────────────────────── -->
    <section id="precios" class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
            07 / Pricing
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Elige el plan que le viene a tu salón
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Desde presencia profesional hasta gestión completa. Todos incluyen garantía.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="relative flex flex-col rounded-2xl border p-7 transition"
            :style="pkg.highlighted
              ? 'border-color: #f43f5e; background: linear-gradient(145deg, rgba(244, 63, 94, 0.1), rgba(244, 63, 94, 0.02)); box-shadow: 0 30px 80px -20px rgba(244, 63, 94, 0.4); border-width: 2px'
              : pkg.vip
                ? 'border-color: rgba(198, 167, 94, 0.3); background: rgba(198, 167, 94, 0.03)'
                : 'border-color: rgba(244, 63, 94, 0.15); background: rgba(244, 63, 94, 0.02)'"
          >
            <div
              v-if="pkg.badge"
              class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
              :style="pkg.vip
                ? 'background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b'
                : 'background: linear-gradient(135deg, #e11d48, #f43f5e); color: white'"
            >
              <span class="inline-flex items-center gap-1">
                {{ pkg.badge }}
                <LucideIcon :name="pkg.vip ? 'gem' : 'flame'" class-name="w-3 h-3" />
              </span>
            </div>

            <div class="flex items-center gap-3 mb-5" :class="pkg.badge ? 'pt-4' : ''">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center"
                :style="pkg.highlighted
                  ? 'background: rgba(244, 63, 94, 0.18)'
                  : pkg.vip
                    ? 'background: rgba(198, 167, 94, 0.18)'
                    : 'background: rgba(244, 63, 94, 0.1)'"
              >
                <LucideIcon
                  :name="pkg.icon"
                  class-name="w-5 h-5"
                  :style="pkg.vip ? 'color: #c6a75e' : 'color: #fb7185'"
                />
              </div>
              <div>
                <div class="dark:text-white text-light-text font-bold">{{ pkg.name }}</div>
                <div class="text-xs dark:text-text-secondary/70 text-light-muted/70">{{ pkg.tagline }}</div>
              </div>
            </div>

            <div class="mb-6">
              <span
                class="font-display text-4xl font-extrabold"
                :style="pkg.vip ? 'color: #c6a75e' : 'color: #fb7185'"
              >{{ pkg.price }}</span>
              <span class="text-sm dark:text-text-secondary text-light-muted ml-2">MXN</span>
              <p class="text-xs font-mono mt-1" style="color: rgba(244, 63, 94, 0.55)">{{ pkg.note }}</p>
            </div>

            <ul class="space-y-2.5 mb-5 flex-1">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-start gap-2.5 text-sm"
              >
                <LucideIcon
                  :name="pkg.vip ? 'sparkles' : 'check'"
                  class-name="w-4 h-4 flex-shrink-0 mt-0.5"
                  :style="pkg.vip ? 'color: #c6a75e' : 'color: #f43f5e'"
                />
                <span class="dark:text-text-primary text-light-text">{{ f }}</span>
              </li>
            </ul>
            <ul
              v-if="pkg.excluded?.length"
              class="space-y-2 mb-5 border-t pt-4"
              style="border-color: rgba(244, 63, 94, 0.15)"
            >
              <li
                v-for="ex in pkg.excluded"
                :key="ex"
                class="flex items-start gap-2 text-xs dark:text-text-secondary/40 text-light-muted/40 line-through"
              >
                <LucideIcon name="minus" class-name="w-3.5 h-3.5 mt-0.5 shrink-0" />
                {{ ex }}
              </li>
            </ul>

            <div class="space-y-2.5">
              <a
                :href="pkg.wa" target="_blank" rel="noopener noreferrer"
                class="block w-full text-center px-4 py-3 rounded-xl font-bold text-sm transition"
                :style="pkg.highlighted
                  ? 'background: linear-gradient(135deg, #e11d48, #f43f5e); color: white; box-shadow: 0 8px 24px rgba(244, 63, 94, 0.35)'
                  : pkg.vip
                    ? 'background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b'
                    : 'background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.3); color: #fb7185'"
              >
                <span class="inline-flex items-center gap-2">
                  Contratar plan
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </span>
              </a>
              <RouterLink
                to="/salones-eventos/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl border text-sm transition"
                style="border-color: rgba(244, 63, 94, 0.2); color: rgba(251, 113, 133, 0.85)"
              >
                <LucideIcon name="eye" class-name="w-4 h-4 inline mr-2" />
                Ver demo
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Demo 21 días -->
        <div
          class="mt-12 rounded-2xl border p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
          style="background: rgba(244, 63, 94, 0.04); border-color: rgba(244, 63, 94, 0.2)"
        >
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style="background: rgba(244, 63, 94, 0.12)"
          >
            <LucideIcon name="calendar" class-name="w-7 h-7" style="color: #fb7185" />
          </div>
          <div class="flex-1">
            <p class="text-xs font-mono mb-1" style="color: rgba(244, 63, 94, 0.7)">Prueba real antes de decidir</p>
            <h3 class="dark:text-white text-light-text font-display text-xl font-bold mb-1">
              Demo 21 días con tu salón real por <span style="color: #fb7185">$999 MXN</span>
            </h3>
            <p class="dark:text-text-secondary text-light-muted text-sm">
              Armamos tu sitio con tus fotos y servicios, lo publicamos 21 días. Si contratas, los $999 se descuentan del anticipo.
            </p>
          </div>
          <a
            :href="waDemo21" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all hover:scale-105 flex-shrink-0"
            style="background: linear-gradient(135deg, #e11d48, #f43f5e); box-shadow: 0 8px 20px rgba(244, 63, 94, 0.3)"
          >
            Solicitar demo 21 días
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 9 · FAQ DE OPERACIÓN ─────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(244, 63, 94, 0.04), transparent)"
    >
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(244, 63, 94, 0.7)">
            08 / Preguntas frecuentes
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Todo lo que necesitas saber
          </h2>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="rounded-2xl border overflow-hidden transition-all"
            :style="openFaq === i
              ? 'border-color: rgba(244, 63, 94, 0.4); background: rgba(244, 63, 94, 0.04)'
              : 'border-color: rgba(244, 63, 94, 0.12); background: rgba(244, 63, 94, 0.02)'"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="dark:text-white text-light-text font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                class-name="w-4 h-4 shrink-0 transition"
                :style="openFaq === i ? 'color: #fb7185' : 'color: rgba(244, 63, 94, 0.5)'"
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 10 · AGENDA DEMO (CTA FINAL) ──────────── -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse at center, rgba(244, 63, 94, 0.18), transparent 65%)"
      ></div>

      <div class="relative max-w-3xl mx-auto">
        <p class="text-[11px] tracking-[0.25em] uppercase font-mono mb-5" style="color: rgba(244, 63, 94, 0.7)">
          Listo para empezar
        </p>
        <h2 class="font-display text-4xl sm:text-6xl font-bold dark:text-white text-light-text mb-6 tracking-tight leading-[1.04]">
          ¿Listo para que tu salón
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #f43f5e, #e11d48, #fb7185)"
          >llene su agenda</span>?
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-12 text-lg max-w-xl mx-auto leading-relaxed">
          Agenda una demo de 20 minutos por WhatsApp. Te enseñamos el sistema con un caso real y armamos contigo
          el plan que te conviene.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            :href="waDemo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #e11d48, #f43f5e); box-shadow: 0 10px 32px rgba(244, 63, 94, 0.4)"
          >
            <LucideIcon name="calendar-check" class-name="w-4 h-4" />
            Agendar demo de 20 min
          </a>
          <a
            :href="waDemo21" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border font-semibold text-sm transition"
            style="border-color: rgba(244, 63, 94, 0.35); color: #fb7185; background: rgba(244, 63, 94, 0.04)"
          >
            <LucideIcon name="play" class-name="w-4 h-4" />
            Demo 21 días — $999 MXN
          </a>
        </div>

        <p class="text-xs font-mono" style="color: rgba(255, 255, 255, 0.4)">
          Garantía incluida · Sin contratos permanentes · Entrega en 2–5 semanas
        </p>
      </div>
    </section>
  </main>
</template>
