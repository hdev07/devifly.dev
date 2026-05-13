<script setup>
/**
 * Landing: Landing Pages para Negocios
 * Estilo visual: Spotify dark — misma estructura que Menús Digitales, acento azul navbar (#3b82f6)
 * Secciones: Hero · Stats · Pain · Demo Preview · Features · How it Works · Testimonials · Pricing · FAQ · Demo 21d · CTA Final
 */
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa una landing page de alto impacto para mi negocio 🚀")}`;
const waContratar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar una landing page para mi negocio 🚀")}`;
const waDemo21 = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el demo de 21 días de la landing page por $999 MXN 🚀")}`;
const waOnePage = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar la landing page plan One Page ($4,999 MXN) 🚀")}`;
const waMultiSeccion = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar la landing page plan Multi-Sección ($7,999 MXN) 🚀")}`;
const waPortal = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar el Portal Avanzado de landing page ($12,999 MXN) 🚀")}`;

const openFaq = ref(null);
const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};

const stats = [
  { value: "+85", label: "Landings activas" },
  { value: "+120", label: "Negocios atendidos" },
  { value: "97%", label: "Satisfacción" },
  { value: "< 7 días", label: "Entrega" },
];

const painPoints = [
  {
    icon: "share-2",
    title: "Solo redes sociales",
    desc: "Tu negocio depende de Instagram o Facebook. Si el algoritmo cambia, pierdes visibilidad y leads de un día para otro.",
  },
  {
    icon: "globe",
    title: "Web que no convierte",
    desc: "Tienes página web o linktree, pero no explica tu oferta ni lleva al visitante a contactarte con intención real.",
  },
  {
    icon: "trending-down",
    title: "Campañas sin retorno",
    desc: "Inviertes en anuncios y el tráfico rebota. Sin estructura de conversión, cada clic es dinero tirado.",
  },
  {
    icon: "message-circle",
    title: "WhatsApp sin contexto",
    desc: "Te escriben «¿precio?» o «info» sin saber qué vendes. Pierdes tiempo calificando prospectos fríos.",
  },
];

const features = [
  {
    icon: "smartphone",
    title: "Diseño responsive premium",
    desc: "Pensada para verse impecable en celular, donde llega la mayoría de tu tráfico pagado y orgánico.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: "target",
    title: "Estructura de conversión",
    desc: "Hero, beneficios, objeciones, prueba social y CTA — cada bloque con un propósito comercial claro.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: "message-square",
    title: "WhatsApp integrado",
    desc: "Botones y formularios que envían prospectos filtrados directo a tu WhatsApp con contexto.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: "file-text",
    title: "Formularios inteligentes",
    desc: "Captura nombre, necesidad y datos clave antes del contacto para que cierres más rápido.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: "search",
    title: "SEO base optimizado",
    desc: "Base técnica limpia, velocidad y estructura para que Google entienda tu oferta desde el día uno.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: "zap",
    title: "Velocidad optimizada",
    desc: "Carga rápida en móvil para reducir rebote y aprovechar cada visita de campaña.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: "pen-tool",
    title: "Copy de venta incluido",
    desc: "Textos orientados a conversión — no te preocupes por redactar propuesta, beneficios ni CTAs.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: "bar-chart-2",
    title: "Medición para campañas",
    desc: "Integración con herramientas de analítica para saber qué tráfico convierte (planes Multi-Sección+).",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: "layout-template",
    title: "CMS autoadministrable",
    desc: "Actualiza textos, fotos y ofertas sin depender de nosotros (plan Portal Avanzado).",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: "layers",
    title: "Arquitectura escalable",
    desc: "Estructura preparada para crecer en secciones, contenido y posicionamiento orgánico.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const steps = [
  {
    number: "01",
    icon: "message-circle",
    title: "Cuéntanos tu negocio",
    desc: "Comparte tu oferta, público objetivo y objetivo comercial. Definimos estructura y mensaje clave.",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
  },
  {
    number: "02",
    icon: "palette",
    title: "Diseñamos y construimos",
    desc: "En menos de 7 días hábiles tienes tu landing publicada, con copy, diseño y CTAs listos para vender.",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
  },
  {
    number: "03",
    icon: "rocket",
    title: "Publicamos y conviertes",
    desc: "Te entregamos tu URL y conexiones. Empiezas a captar prospectos desde el primer día.",
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
  },
];

const testimonials = [
  {
    name: "Andrea Morales",
    role: "Emprendedora de belleza, CDMX",
    avatar: "AM",
    avatarBg: "bg-blue-500/20",
    avatarColor: "text-blue-400",
    text: "Mi negocio creció desde que tengo la landing. Recibo más mensajes calificados y cierro más ventas sin estar pegada al teléfono todo el día.",
    stars: 5,
  },
  {
    name: "David Ruiz",
    role: "Servicios Express, Guadalajara",
    avatar: "DR",
    avatarBg: "bg-cyan-500/20",
    avatarColor: "text-cyan-400",
    text: "Antes mandaba el link de Instagram y la gente no entendía qué hacía. Ahora mis clientes me encuentran fácil, ven precios y me contactan directo.",
    stars: 5,
  },
  {
    name: "Laura Vega",
    role: "Consultora de negocios, Monterrey",
    avatar: "LV",
    avatarBg: "bg-violet-500/20",
    avatarColor: "text-violet-400",
    text: "Invertía en Meta Ads y casi nadie escribía. Con la landing de Devifly el costo por lead bajó y los prospectos llegan sabiendo qué necesitan.",
    stars: 5,
  },
];

const landingPackages = [
  {
    name: "One Page",
    icon: "layout",
    price: "$4,999",
    period: "pago único",
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
    icon: "layers",
    price: "$7,999",
    period: "pago único",
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
    icon: "building-2",
    price: "$12,999",
    period: "pago único",
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
  { feature: "Diseño responsive premium", onePage: true, multi: true, portal: true },
  { feature: "SEO base optimizado", onePage: true, multi: true, portal: true },
  { feature: "Formulario / WhatsApp integrado", onePage: true, multi: true, portal: true },
  { feature: "Versión móvil optimizada", onePage: true, multi: true, portal: true },
  { feature: "Múltiples bloques y secciones", onePage: false, multi: true, portal: true },
  { feature: "Estructura para objeciones", onePage: false, multi: true, portal: true },
  { feature: "Catálogo o servicios básico", onePage: false, multi: true, portal: true },
  { feature: "Medición para campañas", onePage: false, multi: true, portal: true },
  { feature: "CMS autoadministrable", onePage: false, multi: false, portal: true },
  { feature: "SEO técnico ampliado", onePage: false, multi: false, portal: true },
  { feature: "Arquitectura de contenido", onePage: false, multi: false, portal: true },
  { feature: "Preparado para crecer", onePage: false, multi: false, portal: true },
];

const faqs = [
  {
    q: "¿En cuánto tiempo me entregan la landing?",
    a: "En menos de 7 días hábiles desde que nos compartes tu oferta, materiales y objetivo comercial. Si tienes todo listo, podemos ser más rápidos.",
  },
  {
    q: "¿Eso no es solo una página? ¿Por qué cuesta $5,000 o más?",
    a: "Es una página pensada para vender: estructura de conversión, copy orientado a resultados, formularios, velocidad optimizada y CTAs claros. Lo que pagas no es «la página», es la estrategia y ejecución para convertir visitas en prospectos.",
  },
  {
    q: "¿Puedo actualizar textos y ofertas yo mismo?",
    a: "En el plan Portal Avanzado incluimos CMS para que actualices contenido sin depender de nosotros. En One Page y Multi-Sección, los cambios los gestiona el equipo de Devifly.",
  },
  {
    q: "¿Funciona con mis campañas de Meta o Google Ads?",
    a: "Sí. Diseñamos la landing para recibir tráfico pagado y orgánico. En Multi-Sección y Portal Avanzado incluimos medición para que sepas qué campañas convierten.",
  },
  {
    q: "¿Y si ya tengo un sitio web viejo?",
    a: "Podemos crear una landing enfocada en conversión para campañas específicas o reemplazar tu sitio actual si ya no cumple el objetivo comercial. Te asesoramos según tu caso.",
  },
  {
    q: "¿Puedo ver una demo antes de contratar?",
    a: "Sí. Puedes ver la demo genérica desde esta página. También ofrecemos Demo de 21 días con tu contenido real por $999 MXN — si contratas, ese monto se descuenta del anticipo.",
  },
  {
    q: "¿Incluyen textos y copy de venta?",
    a: "Sí. Incluimos redacción orientada a conversión para hero, beneficios, objeciones y CTAs. Tú nos das la información del negocio; nosotros la convertimos en mensaje que vende.",
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
          style="background: radial-gradient(ellipse, #3b82f6 0%, transparent 70%)"
        />
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: copy -->
          <div>
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6"
            >
              <div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Landing Pages de Alto Impacto
            </div>

            <h1
              class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Tu negocio merece una web que
              <span class="text-blue-400">convierta más</span>
            </h1>

            <p class="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl">
              Landing page premium con estructura de conversión, copy de venta,
              formularios inteligentes e integración con WhatsApp. Diseñada para
              captar prospectos, no solo «tener presencia».
            </p>

            <div class="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <RouterLink
                to="/landings/demo"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-blue-500 text-white font-bold text-sm hover:bg-blue-400 transition-all hover:scale-105 shadow-[0_0_24px_rgba(59,130,246,0.35)]"
              >
                <LucideIcon name="play-circle" class-name="w-4 h-4" />
                Ver demo en vivo
              </RouterLink>
              <a
                :href="waContratar"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-blue-500/40 hover:text-white transition"
              >
                Cotizar mi landing
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
            </div>

            <div class="flex items-center gap-3 text-xs text-neutral-500 flex-wrap">
              <span class="flex items-center gap-1">
                <LucideIcon name="check-circle" class-name="w-3.5 h-3.5 text-blue-400" />
                Copy de venta incluido
              </span>
              <span class="w-px h-3 bg-neutral-700" />
              <span class="flex items-center gap-1">
                <LucideIcon name="check-circle" class-name="w-3.5 h-3.5 text-blue-400" />
                Entrega en &lt; 7 días
              </span>
              <span class="w-px h-3 bg-neutral-700" />
              <span class="flex items-center gap-1">
                <LucideIcon name="check-circle" class-name="w-3.5 h-3.5 text-blue-400" />
                WhatsApp integrado
              </span>
            </div>
          </div>

          <!-- Right: phone mockup -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-30"
                style="background: linear-gradient(135deg, #3b82f6, #22d3ee)"
              />

              <div
                class="relative w-64 sm:w-72 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
                style="background: linear-gradient(135deg, #1a1a1a 0%, #111 100%)"
              >
                <div class="flex items-center justify-between px-6 pt-4 pb-2">
                  <span class="text-white/60 text-[10px]">9:41</span>
                  <div
                    class="w-16 h-5 rounded-full bg-black mx-auto absolute left-1/2 -translate-x-1/2 top-2"
                  />
                  <div class="flex gap-1">
                    <div class="w-3 h-1.5 rounded-sm bg-white/60" />
                    <div class="w-1 h-1.5 rounded-sm bg-white/60" />
                  </div>
                </div>

                <div class="px-4 py-4 border-b border-white/5" style="background: #141414">
                  <div class="text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Tu negocio
                  </div>
                  <div class="text-white text-sm font-bold leading-snug mb-2">
                    Más clientes,<br />menos fricción
                  </div>
                  <div
                    class="inline-block px-3 py-1 rounded-full bg-blue-500 text-white text-[10px] font-bold"
                  >
                    Cotizar ahora
                  </div>
                </div>

                <div class="px-4 py-3 space-y-0" style="background: #0f0f0f">
                  <div
                    v-for="block in [
                      { label: 'Beneficios', icon: 'sparkles' },
                      { label: 'Testimonios', icon: 'star' },
                      { label: 'Formulario', icon: 'file-text' },
                    ]"
                    :key="block.label"
                    class="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 mb-2.5"
                    style="background: #1a1a1a"
                  >
                    <div
                      class="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0"
                    >
                      <LucideIcon :name="block.icon" class-name="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div class="text-white text-xs font-semibold">{{ block.label }}</div>
                  </div>

                  <div class="flex items-center justify-center gap-2 pt-1">
                    <LucideIcon name="message-circle" class-name="w-3.5 h-3.5 text-green-500" />
                    <span class="text-neutral-600 text-[10px]">tunegocio.devifly.dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── STATS BAR ─────────────────────────────────────────────────── -->
    <section class="px-6 py-10 border-y border-neutral-800" style="background: #111">
      <div class="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="font-display text-3xl font-extrabold text-blue-400 mb-1">
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
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Tu web realmente vende?
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Cada día sin una landing de conversión pierdes prospectos, campañas
            y oportunidades de cerrar más rápido.
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
              <LucideIcon :name="point.icon" class-name="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 class="text-white font-semibold text-sm mb-1">{{ point.title }}</h3>
              <p class="text-neutral-500 text-sm leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── DEMO PREVIEW CTA ─────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-5xl mx-auto">
        <div
          class="relative rounded-3xl overflow-hidden border border-blue-500/20 p-8 sm:p-12"
          style="background: linear-gradient(135deg, #0d1020 0%, #0a0a0a 60%, #0d1a2a 100%)"
        >
          <div
            class="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style="background: radial-gradient(ellipse, #3b82f6, transparent 70%)"
          />

          <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6"
              >
                <LucideIcon name="eye" class-name="w-3.5 h-3.5" />
                Demo interactivo disponible
              </div>
              <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Prueba la landing<br />
                <span class="text-blue-400">antes de comprometerte</span>
              </h2>
              <p class="text-neutral-400 mb-8 leading-relaxed">
                Navega por una demo real con hero, beneficios, formulario y
                WhatsApp. Así se verá la landing de tu negocio.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <RouterLink
                  to="/landings/demo"
                  class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-blue-500 text-white font-bold text-sm hover:bg-blue-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <LucideIcon name="smartphone" class-name="w-4 h-4" />
                  Abrir demo interactivo
                </RouterLink>
                <a
                  :href="waDemo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-blue-500/30 text-blue-400 font-semibold text-sm hover:bg-blue-500/10 transition"
                >
                  Quiero la mía así
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </a>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="chip in [
                  { icon: 'target', text: 'Hero de conversión' },
                  { icon: 'sparkles', text: 'Beneficios claros' },
                  { icon: 'file-text', text: 'Formulario inteligente' },
                  { icon: 'message-circle', text: 'WhatsApp directo' },
                  { icon: 'star', text: 'Prueba social' },
                  { icon: 'zap', text: 'Carga ultrarrápida' },
                ]"
                :key="chip.text"
                class="flex items-center gap-3 p-4 rounded-xl border border-blue-500/10"
                style="background: rgba(59, 130, 246, 0.04)"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0"
                >
                  <LucideIcon :name="chip.icon" class-name="w-4 h-4 text-blue-400" />
                </div>
                <span class="text-white text-xs font-semibold">{{ chip.text }}</span>
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="star" class-name="w-3.5 h-3.5" />
            Todo lo que incluye
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Una landing que trabaja por ti
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Cada función está pensada para convertir visitas en prospectos
            calificados y cerrar más ventas.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all hover:-translate-y-0.5"
            style="background: #111"
          >
            <div :class="['w-11 h-11 rounded-xl flex items-center justify-center mb-4', feature.bg]">
              <LucideIcon :name="feature.icon" :class-name="`w-5 h-5 ${feature.color}`" />
            </div>
            <h3 class="text-white font-semibold text-sm mb-2">{{ feature.title }}</h3>
            <p class="text-neutral-500 text-sm leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── HOW IT WORKS ─────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="map" class-name="w-3.5 h-3.5" />
            Proceso
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Así de fácil empezamos
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">
            En menos de una semana tu negocio ya tiene su landing publicada y
            lista para captar clientes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            class="hidden md:block absolute top-10 left-1/3 right-1/3 h-px border-t border-dashed border-neutral-700"
          />

          <div v-for="step in steps" :key="step.number" class="text-center relative">
            <div
              :class="[
                'inline-flex items-center justify-center w-20 h-20 rounded-2xl border mb-5 mx-auto',
                step.border,
                step.bg,
              ]"
            >
              <LucideIcon :name="step.icon" :class-name="`w-8 h-8 ${step.color}`" />
            </div>
            <div :class="['font-display text-xs font-bold mb-2', step.color]">
              PASO {{ step.number }}
            </div>
            <h3 class="text-white font-bold text-base mb-2">{{ step.title }}</h3>
            <p class="text-neutral-500 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-bold text-sm hover:bg-blue-400 transition-all hover:scale-105"
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="message-square" class-name="w-3.5 h-3.5" />
            Testimoniales
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Lo que dicen los negocios
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">Emprendedores reales, resultados reales.</p>
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
                class-name="w-4 h-4 text-amber-400 fill-current"
              />
            </div>
            <p class="text-neutral-300 text-sm leading-relaxed mb-6 flex-1">"{{ t.text }}"</p>
            <div class="flex items-center gap-3 pt-4 border-t border-neutral-800">
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="tag" class-name="w-3.5 h-3.5" />
            Planes y precios
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Elige el plan para tu negocio
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Pago único, sin mensualidades ni sorpresas. Desde campaña puntual
            hasta portal completo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in landingPackages"
            :key="pkg.name"
            :class="[
              'relative flex flex-col rounded-2xl border p-7 transition-all',
              pkg.highlighted
                ? 'border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.12)]'
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
                pkg.highlighted ? 'bg-blue-500 text-white' : 'bg-violet-500 text-white',
              ]"
            >
              {{ pkg.badge }}
            </div>

            <div class="flex items-center gap-3 mb-5">
              <div
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  pkg.highlighted
                    ? 'bg-blue-500/15'
                    : pkg.vip
                      ? 'bg-violet-500/15'
                      : 'bg-neutral-800',
                ]"
              >
                <LucideIcon
                  :name="pkg.icon"
                  :class-name="`w-5 h-5 ${pkg.highlighted ? 'text-blue-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-400'}`"
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
                  pkg.highlighted ? 'text-blue-400' : pkg.vip ? 'text-violet-400' : 'text-white',
                ]"
              >
                {{ pkg.price }}
              </span>
              <span class="text-neutral-500 text-sm ml-2">MXN · {{ pkg.period }}</span>
            </div>

            <ul class="space-y-2.5 mb-7 flex-1">
              <li v-for="f in pkg.features" :key="f" class="flex items-start gap-2.5 text-sm">
                <LucideIcon
                  name="check"
                  :class-name="`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-blue-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-500'}`"
                />
                <span class="text-neutral-300">{{ f }}</span>
              </li>
              <li v-for="f in pkg.excluded" :key="f" class="flex items-start gap-2.5 text-sm">
                <LucideIcon name="minus" class-name="w-4 h-4 flex-shrink-0 mt-0.5 text-neutral-700" />
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
                    ? 'bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                    : pkg.vip
                      ? 'bg-violet-600 text-white hover:bg-violet-500'
                      : 'bg-neutral-700 text-white hover:bg-neutral-600',
                ]"
              >
                Contratar {{ pkg.name }}
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
              <RouterLink
                to="/landings/demo"
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
        <h2 class="font-display text-2xl font-bold text-white text-center mb-10">
          Comparación detallada de planes
        </h2>
        <div class="overflow-x-auto rounded-2xl border border-neutral-800">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-neutral-800" style="background: #111">
                <th class="text-left py-4 px-6 text-neutral-400 font-medium">Característica</th>
                <th class="text-center py-4 px-4 text-white font-semibold whitespace-nowrap">
                  One Page
                </th>
                <th class="text-center py-4 px-4 text-blue-400 font-semibold whitespace-nowrap">
                  Multi-Sección
                </th>
                <th class="text-center py-4 px-4 text-violet-400 font-semibold whitespace-nowrap">
                  Portal Avanzado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.feature"
                class="border-b border-neutral-800/50 last:border-0 hover:bg-blue-500/5 transition-colors"
                style="background: #0f0f0f"
              >
                <td class="py-3 px-6 text-neutral-400 whitespace-nowrap">{{ row.feature }}</td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.onePage"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-neutral-500"
                  />
                  <span v-else class="text-neutral-700">—</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.multi"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-blue-400"
                  />
                  <span v-else class="text-neutral-700">—</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.portal"
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="help-circle" class-name="w-3.5 h-3.5" />
            Preguntas frecuentes
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Resolvemos tus dudas
          </h2>
          <p class="text-neutral-400">
            Si tienes más preguntas, escríbenos por WhatsApp — respondemos rápido.
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="rounded-2xl border border-neutral-800 overflow-hidden transition-all"
            :class="openFaq === i ? 'border-blue-500/30' : ''"
            style="background: #1a1a1a"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="text-white font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                :class-name="`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'text-blue-400' : 'text-neutral-500'}`"
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-neutral-400 text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition"
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
          class="relative rounded-3xl overflow-hidden border border-amber-500/20 p-8 sm:p-14 text-center"
          style="background: linear-gradient(135deg, #1a1200 0%, #0a0a0a 50%, #0a0f1a 100%)"
        >
          <div
            class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-20 -translate-y-1/2"
            style="background: radial-gradient(ellipse, #f59e0b, transparent 70%)"
          />

          <div class="relative">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-7"
            >
              <LucideIcon name="calendar-clock" class-name="w-3.5 h-3.5" />
              Demo 21 días — Oferta especial
            </div>

            <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              ¿Quieres probarlo antes de decidir?
            </h2>
            <p class="text-neutral-400 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
              Por solo
              <span class="text-amber-400 font-bold">$999 MXN</span> armamos tu landing real — con
              tu contenido, oferta y CTAs — publicada y funcionando durante
              <strong class="text-white">21 días</strong>. Si luego contratas, los $999 se descuentan
              del anticipo. No pagas nada extra.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              <div
                class="p-5 rounded-2xl border border-amber-500/15"
                style="background: rgba(245, 158, 11, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon name="layout" class-name="w-5 h-5 text-amber-400" />
                </div>
                <p class="text-white font-semibold text-sm mb-1">Tu landing real</p>
                <p class="text-neutral-500 text-xs">Con tu oferta, textos y objetivo comercial</p>
              </div>
              <div
                class="p-5 rounded-2xl border border-amber-500/15"
                style="background: rgba(245, 158, 11, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon name="globe" class-name="w-5 h-5 text-amber-400" />
                </div>
                <p class="text-white font-semibold text-sm mb-1">Publicada y funcional</p>
                <p class="text-neutral-500 text-xs">En tuneogocio.devifly.dev, lista para compartir</p>
              </div>
              <div
                class="p-5 rounded-2xl border border-amber-500/15"
                style="background: rgba(245, 158, 11, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon name="receipt" class-name="w-5 h-5 text-blue-400" />
                </div>
                <p class="text-white font-semibold text-sm mb-1">Se descuenta al contratar</p>
                <p class="text-neutral-500 text-xs">Los $999 se restan del anticipo de cualquier plan</p>
              </div>
            </div>

            <a
              :href="waDemo21"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_24px_rgba(245,158,11,0.3)]"
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
          class="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8"
        >
          <LucideIcon name="rocket" class-name="w-8 h-8 text-blue-400" />
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          Lleva tu negocio al<br />
          <span class="text-blue-400">siguiente nivel</span>
        </h2>
        <p class="text-neutral-400 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
          Empieza hoy. Escríbenos por WhatsApp y en menos de 7 días tu negocio ya
          tiene una landing que convierte.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-full bg-blue-500 text-white font-bold text-sm hover:bg-blue-400 transition-all hover:scale-105 shadow-[0_0_24px_rgba(59,130,246,0.3)]"
          >
            Cotizar mi landing page
          </a>
          <RouterLink
            to="/landings/demo"
            class="px-10 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-blue-500/30 hover:text-white transition"
          >
            Ver demo primero
          </RouterLink>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-neutral-600">
          <span class="flex items-center gap-1.5">
            <LucideIcon name="shield-check" class-name="w-3.5 h-3.5 text-blue-500/60" />
            Pago único, sin mensualidades
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="clock" class-name="w-3.5 h-3.5 text-blue-500/60" />
            Entrega en menos de 7 días
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="headphones" class-name="w-3.5 h-3.5 text-blue-500/60" />
            Soporte en español
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="pen-tool" class-name="w-3.5 h-3.5 text-blue-500/60" />
            Copy de venta incluido
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
