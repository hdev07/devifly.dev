<script setup>
/**
 * Landing: Menús Digitales para Restaurantes
 * Palette: amber (matches navbar #f59e0b)
 * Style: Stripe/Vercel — refined dark surfaces, amber accents, premium typography
 * Section order: Hero · QR demo en vivo · Problemas · Features · WhatsApp pedidos · Casos reales · Pricing · FAQ · CTA
 */
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const wa = (m) => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const waDemo = wa("¡Hola! Tengo un restaurante y me interesa el menú digital interactivo 🍽️");
const waContratar = wa("Quiero cotizar un menú digital para mi restaurante 🍽️");
const waDemo21 = wa("¡Hola! Me interesa el demo de 21 días del menú digital por $999 MXN 🍽️");
const waSmall = wa("¡Hola! Me interesa el menú digital plan Esencial ($3,999 MXN) 🍽️");
const waMedium = wa("¡Hola! Me interesa el menú digital plan Profesional ($7,999 MXN) 🍽️");
const waLarge = wa("¡Hola! Me interesa el menú digital plan Enterprise ($14,999 MXN) 🍽️");

const openFaq = ref(null);
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i };

const stats = [
  { value: "+120", label: "Menús activos" },
  { value: "+80", label: "Restaurantes" },
  { value: "98%", label: "Satisfacción" },
  { value: "<5d", label: "Entrega" },
];

const painPoints = [
  {
    icon: "tag",
    title: "Reimprimir cada vez que cambias precios",
    desc: "Cada subida de costos te cuesta papel, tiempo y diseñador. Y para cuando llega, ya cambió otra vez.",
  },
  {
    icon: "globe",
    title: "Cero presencia digital real",
    desc: "Tus clientes te buscan en Google o Instagram y no encuentran tu menú. Pierdes ventas antes de empezar.",
  },
  {
    icon: "chart-pie",
    title: "Sin datos del negocio",
    desc: "No sabes qué platillos llaman la atención, ni en qué horarios revisan tu menú. Decides a ciegas.",
  },
  {
    icon: "x",
    title: "Mala experiencia del cliente",
    desc: "Menús sucios, ilegibles o desactualizados generan desconfianza y reducen tu ticket promedio.",
  },
];

const features = [
  { icon: "smartphone", title: "Mobile-first premium", desc: "Diseñado para verse perfecto en celular — donde el 95% de tus clientes lo abre." },
  { icon: "search", title: "Buscador de platillos", desc: "Tus clientes encuentran lo que quieren al instante. Sin scrollear interminablemente." },
  { icon: "qr-code", title: "QR personalizado", desc: "QR con tu marca para mesas, mostrador, tarjetas y redes sociales." },
  { icon: "square-pen", title: "Precios siempre al día", desc: "Cambia precios o platillos sin reimprimir nada. En segundos, desde el celular." },
  { icon: "tag", title: "Promociones con banner", desc: "Destaca platillos del día o promos visualmente — irresistible para tus clientes." },
  { icon: "boxes", title: "Categorías y subcategorías", desc: "Organiza entradas, fuertes, postres y bebidas con navegación limpia." },
  { icon: "image", title: "Fotos de alta calidad", desc: "Las fotos venden. Cada platillo con su imagen apetecible y descripción." },
  { icon: "shield-check", title: "Alérgenos e ingredientes", desc: "Información de alérgenos y porciones para clientes exigentes y normas sanitarias." },
  { icon: "globe", title: "Dominio personalizado", desc: "Tu menú en menu.turestaurante.com — no en una app genérica con branding ajeno." },
  { icon: "building-2", title: "Multi-sucursal", desc: "Un sistema central, varias sucursales. Gestiona todo desde un solo lugar." },
];

const waSteps = [
  { num: "01", title: "Cliente escanea el QR", desc: "Desde la mesa, sin descargar nada. El menú abre en su celular en <2s." },
  { num: "02", title: "Arma su pedido", desc: "Selecciona platillos, agrega cantidades, deja notas (sin cebolla, etc)." },
  { num: "03", title: "Llega a tu WhatsApp", desc: "El pedido entra a tu número con todo formateado, listo para confirmar." },
];

const testimonials = [
  {
    name: "Carlos Ramírez",
    role: "Dueño · Taquería El Patrón, CDMX",
    avatar: "CR",
    text: "Antes imprimía 200 menús cada mes por cambios de precio. Ahora actualizo desde el celular en 2 minutos. Me ahorré más de $3,000 MXN en el primer mes solo en impresiones.",
    metric: "-$3,000 MXN/mes en impresiones",
    stars: 5,
  },
  {
    name: "Sofía Torres",
    role: "Gerente · Restaurante Fusión, GDL",
    avatar: "ST",
    text: "Nuestros clientes nos dicen que el menú se ve increíble. Lo comparten en sus historias de Instagram y eso nos ha traído nuevos clientes. El buscador es maravilloso.",
    metric: "+22% nuevos clientes por IG",
    stars: 5,
  },
  {
    name: "Miguel Díaz",
    role: "Food Truck · Birrias Mike, MTY",
    avatar: "MD",
    text: "Para un food truck es perfecto. Cambio el menú del día en segundos y mis clientes ya saben que pueden ver lo de hoy antes de llegar. Esto me genera ventas anticipadas.",
    metric: "Ventas anticipadas todos los días",
    stars: 5,
  },
];

const menuPackages = [
  {
    name: "Esencial",
    icon: "store",
    price: "$3,999",
    period: "pago único",
    tagline: "Restaurantes pequeños y food trucks",
    wa: waSmall,
    highlighted: false,
    badge: null,
    vip: false,
    features: [
      "Diseño mobile-first premium",
      "Hasta 30 platillos",
      "Categorías con fotos",
      "Precios actualizables",
      "QR personalizado",
      "Subdominio incluido (.devifly.dev)",
      "Hosting 1 año",
    ],
    excluded: ["Buscador de platillos", "Banner de promociones", "Alérgenos / porciones", "Dominio .com propio", "Panel para editar", "Multi-sucursal"],
  },
  {
    name: "Profesional",
    icon: "utensils",
    price: "$7,999",
    period: "pago único",
    tagline: "Restaurantes medianos en crecimiento",
    wa: waMedium,
    highlighted: true,
    badge: "Más popular",
    vip: false,
    features: [
      "Todo lo de Esencial",
      "Hasta 100 platillos",
      "Subcategorías ilimitadas",
      "Banner de promociones",
      "Buscador de productos",
      "Alérgenos y porciones",
      "Dominio personalizado (.com)",
      "Panel para editar platillos",
    ],
    excluded: ["Platillos ilimitados", "Multi-sucursal"],
  },
  {
    name: "Enterprise",
    icon: "building-2",
    price: "$14,999",
    period: "pago único",
    tagline: "Cadenas con varias sucursales",
    wa: waLarge,
    highlighted: false,
    badge: "Completo",
    vip: true,
    features: [
      "Todo lo de Profesional",
      "Platillos ilimitados",
      "Múltiples sucursales",
      "Panel multi-sucursal avanzado",
      "Integración redes sociales",
      "Analíticas de visitas",
      "Soporte prioritario",
      "Onboarding personalizado",
    ],
    excluded: [],
  },
];

const faqs = [
  { q: "¿En cuánto tiempo entregan el menú?", a: "Menos de 5 días hábiles desde que nos compartes platillos, fotos y precios. Si tienes todo listo, podemos ser más rápidos." },
  { q: "¿Puedo actualizar precios y platillos yo mismo?", a: "En los planes Profesional y Enterprise sí — incluimos un panel sencillo. En Esencial, los cambios los hacemos nosotros sin costo." },
  { q: "¿Mis clientes necesitan descargar una app?", a: "No. El menú es una página web — abre directo desde el celular al escanear el QR. Cero descargas, cero registros, cero fricción." },
  { q: "¿Qué pasa después del primer año de hosting?", a: "Renovación anual: $1,200 MXN Esencial · $1,800 Profesional · $2,400 Enterprise. Te avisamos con anticipación." },
  { q: "¿Puedo usar mi propio dominio?", a: "Sí, en Profesional y Enterprise incluimos la configuración del dominio (.com). Si ya lo tienes, lo conectamos." },
  { q: "¿Funciona en todos los celulares?", a: "Probado en iOS y Android, en Chrome, Safari y otros. Se adapta a cualquier tamaño de pantalla." },
  { q: "¿Puedo probar antes de comprar?", a: "Sí. Demo de 21 días con tu menú real por $999 MXN — si contratas, ese monto se descuenta del anticipo." },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-hidden">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="relative px-6 pt-16 pb-24">
      <!-- Ambient amber glow -->
      <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-25"
        style="background: radial-gradient(ellipse, #f59e0b 0%, transparent 65%)"
      ></div>

      <div class="relative max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6"
              style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24"
            >
              <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background: #f59e0b"></span>
              Menús Digitales · QR &amp; pedidos por WhatsApp
            </div>

            <h1 class="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight mb-6">
              <span class="dark:text-white text-light-text">Tu restaurante merece un menú que </span>
              <span
                class="bg-clip-text text-transparent"
                style="background-image: linear-gradient(135deg, #f59e0b, #fbbf24, #fde68a)"
              >venda más</span>
            </h1>

            <p class="text-lg dark:text-text-secondary text-light-muted leading-relaxed mb-8 max-w-xl">
              Menú digital premium con QR personalizado, fotos de tus platillos, buscador y precios siempre al día.
              Sin apps, sin reimpresiones, sin complicaciones.
            </p>

            <div class="flex flex-col sm:flex-row items-start gap-3 mb-10">
              <RouterLink
                to="/menus-digitales/demo"
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-black font-bold text-sm transition-all hover:scale-105"
                style="background: linear-gradient(135deg, #f59e0b, #fbbf24); box-shadow: 0 8px 32px rgba(245, 158, 11, 0.4)"
              >
                <LucideIcon name="play" class-name="w-4 h-4" />
                Ver demo en vivo
              </RouterLink>
              <a
                :href="waContratar" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border font-semibold text-sm transition"
                style="border-color: rgba(245, 158, 11, 0.3); color: #fbbf24; background: rgba(245, 158, 11, 0.04)"
              >
                Cotizar mi menú
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
            </div>

            <!-- Trust strip -->
            <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs dark:text-text-secondary/70 text-light-muted/70">
              <span class="flex items-center gap-1.5">
                <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #f59e0b" />
                Sin app que descargar
              </span>
              <span class="flex items-center gap-1.5">
                <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #f59e0b" />
                Entrega en &lt; 5 días
              </span>
              <span class="flex items-center gap-1.5">
                <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #f59e0b" />
                QR incluido
              </span>
            </div>
          </div>

          <!-- Phone mockup -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-40"
                style="background: linear-gradient(135deg, #f59e0b, #fbbf24)"
              ></div>
              <div
                class="relative w-64 sm:w-72 rounded-[2.5rem] border overflow-hidden shadow-2xl"
                style="background: linear-gradient(135deg, #1a1a1a 0%, #111 100%); border-color: rgba(245, 158, 11, 0.15)"
              >
                <div class="flex items-center justify-between px-6 pt-4 pb-2">
                  <span class="text-white/60 text-[10px]">9:41</span>
                  <div class="w-16 h-5 rounded-full bg-black mx-auto absolute left-1/2 -translate-x-1/2 top-2"></div>
                  <div class="flex gap-1">
                    <div class="w-3 h-1.5 rounded-sm bg-white/60"></div>
                    <div class="w-1 h-1.5 rounded-sm bg-white/60"></div>
                  </div>
                </div>
                <div class="px-4 py-3 border-b border-white/5" style="background: #141414">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-amber-400 text-xs font-bold tracking-widest uppercase">Restaurante</div>
                      <div class="text-white text-sm font-semibold">El Patrón</div>
                    </div>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center"
                      style="background: rgba(245, 158, 11, 0.2); border: 1px solid rgba(245, 158, 11, 0.3)">
                      <LucideIcon name="search" class-name="w-3.5 h-3.5" style="color: #fbbf24" />
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 px-4 py-2 overflow-hidden" style="background: #111">
                  <span class="px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap text-black"
                    style="background: #f59e0b">Tacos</span>
                  <span class="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] whitespace-nowrap">Bebidas</span>
                  <span class="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] whitespace-nowrap">Postres</span>
                </div>
                <div class="px-4 py-3 space-y-2.5" style="background: #0f0f0f">
                  <div
                    v-for="item in [
                      { name: 'Taco de Birria', price: '$45', img: '🌮', badge: null },
                      { name: 'Orden Volcanes', price: '$89', img: '🔥', badge: 'Popular' },
                      { name: 'Agua de Jamaica', price: '$25', img: '🧃', badge: null },
                    ]"
                    :key="item.name"
                    class="flex items-center gap-3 p-2.5 rounded-xl border border-white/5"
                    style="background: #1a1a1a"
                  >
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style="background: #222">{{ item.img }}</div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-1.5">
                        <p class="text-white text-xs font-semibold truncate">{{ item.name }}</p>
                        <span v-if="item.badge"
                          class="px-1.5 py-0.5 rounded-full text-[9px] font-bold"
                          style="background: rgba(245, 158, 11, 0.2); color: #fbbf24">{{ item.badge }}</span>
                      </div>
                      <p class="text-xs font-bold" style="color: #fbbf24">{{ item.price }}</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-2 pt-1">
                    <LucideIcon name="qr-code" class-name="w-3.5 h-3.5" style="color: #525252" />
                    <span class="text-[10px]" style="color: #525252">menu.elpatron.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats bar -->
        <div
          class="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border"
          style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.2)"
        >
          <div
            v-for="s in stats"
            :key="s.label"
            class="px-6 py-5 text-center"
            style="background: rgba(11, 11, 11, 0.85)"
          >
            <p class="font-display text-3xl font-bold mb-1" style="color: #fbbf24">{{ s.value }}</p>
            <p class="text-xs" style="color: rgba(255, 255, 255, 0.5)">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 2 · QR DEMO EN VIVO ─────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(245, 158, 11, 0.7)">
            01 / QR demo en vivo
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Escanéalo. Pruébalo. Compártelo.
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Así de fácil será para tus clientes ver tu menú: un QR en la mesa, una página real navegable, cero fricción.
          </p>
        </div>

        <div
          class="rounded-3xl border overflow-hidden p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.06) 0%, rgba(11, 11, 11, 0.4) 60%, rgba(245, 158, 11, 0.04) 100%); border-color: rgba(245, 158, 11, 0.2)"
        >
          <div>
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.25); color: #fbbf24"
            >
              <LucideIcon name="eye" class-name="w-3.5 h-3.5" />
              Demo interactivo disponible
            </div>
            <h3 class="font-display text-2xl sm:text-3xl font-bold dark:text-white text-light-text mb-4 leading-tight">
              Prueba el menú digital
              <span style="color: #fbbf24">antes de comprometerte</span>
            </h3>
            <p class="dark:text-text-secondary text-light-muted mb-7 leading-relaxed">
              Navega por una demo real con platillos, fotos, buscador y QR funcional.
              Exactamente así se verá el menú de tu restaurante.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <RouterLink
                to="/menus-digitales/demo"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-black font-bold text-sm transition-all hover:scale-105"
                style="background: linear-gradient(135deg, #f59e0b, #fbbf24); box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3)"
              >
                <LucideIcon name="smartphone" class-name="w-4 h-4" />
                Abrir demo interactivo
              </RouterLink>
              <a
                :href="waDemo" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border text-sm font-semibold transition"
                style="border-color: rgba(245, 158, 11, 0.3); color: #fbbf24"
              >
                Quiero el mío así
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- QR + features -->
          <div class="flex flex-col items-center gap-6">
            <!-- Stylized QR -->
            <div
              class="relative w-44 h-44 rounded-2xl p-4 flex items-center justify-center"
              style="background: white; box-shadow: 0 20px 50px rgba(245, 158, 11, 0.3)"
            >
              <!-- Faux QR pattern using grid -->
              <div class="grid grid-cols-7 gap-1 w-full h-full">
                <template v-for="i in 49" :key="i">
                  <div
                    class="rounded-sm"
                    :style="`background: ${[1,2,3,5,7,8,11,12,13,14,15,17,18,21,22,23,25,26,27,29,33,34,35,36,37,39,41,43,45,47,48,49].includes(i) ? '#0a0a0a' : 'transparent'}`"
                  ></div>
                </template>
              </div>
              <!-- Center logo -->
              <div
                class="absolute inset-0 m-auto w-10 h-10 rounded-lg flex items-center justify-center"
                style="background: #f59e0b; border: 3px solid white"
              >
                <LucideIcon name="utensils" class-name="w-5 h-5 text-black" />
              </div>
            </div>
            <p class="text-xs font-mono" style="color: rgba(245, 158, 11, 0.7)">menu.tu-restaurante.com</p>

            <!-- Feature chips grid -->
            <div class="grid grid-cols-2 gap-2.5 w-full max-w-sm">
              <div
                v-for="chip in [
                  { icon: 'search', text: 'Buscador en vivo' },
                  { icon: 'image', text: 'Fotos por platillo' },
                  { icon: 'tag', text: 'Banner de promos' },
                  { icon: 'boxes', text: 'Categorías claras' },
                ]"
                :key="chip.text"
                class="flex items-center gap-2 p-2.5 rounded-lg border"
                style="background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.15)"
              >
                <div
                  class="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                  style="background: rgba(245, 158, 11, 0.12)"
                >
                  <LucideIcon :name="chip.icon" class-name="w-3.5 h-3.5" style="color: #fbbf24" />
                </div>
                <span class="text-xs font-semibold dark:text-white text-light-text">{{ chip.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 3 · PROBLEMAS QUE RESUELVE ───────────────────── -->
    <section class="px-6 py-24" style="background: linear-gradient(180deg, rgba(245, 158, 11, 0.04), transparent)">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(245, 158, 11, 0.7)">
            02 / Problemas que resuelve
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            ¿Todavía usas menú físico?
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Cada día que sigues con el menú de papel, estás perdiendo dinero, clientes y oportunidades.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="point in painPoints"
            :key="point.title"
            class="flex gap-4 p-6 rounded-2xl border"
            style="background: rgba(245, 158, 11, 0.03); border-color: rgba(245, 158, 11, 0.15)"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style="background: rgba(245, 158, 11, 0.12)"
            >
              <LucideIcon :name="point.icon" class-name="w-5 h-5" style="color: #fbbf24" />
            </div>
            <div>
              <h3 class="dark:text-white text-light-text font-semibold text-sm mb-1.5">{{ point.title }}</h3>
              <p class="dark:text-text-secondary text-light-muted text-sm leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 · FEATURES ─────────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(245, 158, 11, 0.7)">
            03 / Features
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Un menú que trabaja por ti
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Cada función está diseñada para mejorar la experiencia del cliente y ayudarte a vender más.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 rounded-2xl border transition-all hover:-translate-y-0.5 group"
            style="background: rgba(245, 158, 11, 0.02); border-color: rgba(245, 158, 11, 0.12)"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition group-hover:scale-110"
              style="background: rgba(245, 158, 11, 0.1)"
            >
              <LucideIcon :name="feature.icon" class-name="w-5 h-5" style="color: #fbbf24" />
            </div>
            <h3 class="dark:text-white text-light-text font-semibold text-sm mb-2">{{ feature.title }}</h3>
            <p class="dark:text-text-secondary text-light-muted text-sm leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 5 · INTEGRACIÓN WHATSAPP PEDIDOS ─────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(34, 197, 94, 0.04), rgba(245, 158, 11, 0.04))"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(245, 158, 11, 0.7)">
            04 / Pedidos por WhatsApp
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Del QR a tu WhatsApp en 3 pasos
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            El cliente arma el pedido desde el menú y a ti te llega formateado, listo para confirmar y servir.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <!-- Steps -->
          <div class="space-y-5">
            <div
              v-for="step in waSteps"
              :key="step.num"
              class="flex gap-4 p-5 rounded-2xl border"
              style="background: rgba(245, 158, 11, 0.04); border-color: rgba(245, 158, 11, 0.15)"
            >
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold"
                style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: #0b0b0b"
              >{{ step.num }}</div>
              <div>
                <h3 class="dark:text-white text-light-text font-semibold text-sm mb-1">{{ step.title }}</h3>
                <p class="dark:text-text-secondary text-light-muted text-sm leading-relaxed">{{ step.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Arrow / connector for desktop -->
          <div class="hidden lg:flex flex-col items-center">
            <LucideIcon name="arrow-right" class-name="w-8 h-8" style="color: #f59e0b" />
          </div>

          <!-- WhatsApp message preview -->
          <div
            class="rounded-2xl p-6 border"
            style="background: rgba(11, 11, 11, 0.4); border-color: rgba(34, 197, 94, 0.25)"
          >
            <div class="flex items-center gap-3 mb-4 pb-4 border-b" style="border-color: rgba(34, 197, 94, 0.15)">
              <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: rgba(34, 197, 94, 0.2)">
                <LucideIcon name="message-circle" class-name="w-5 h-5" style="color: #22c55e" />
              </div>
              <div>
                <p class="dark:text-white text-light-text font-semibold text-sm">El Patrón · Mesa 4</p>
                <p class="text-xs" style="color: rgba(34, 197, 94, 0.8)">● en línea — recibido ahora</p>
              </div>
            </div>
            <div
              class="rounded-xl p-4 text-xs font-mono leading-relaxed"
              style="background: rgba(34, 197, 94, 0.08); color: rgba(255, 255, 255, 0.85)"
            >
              <span style="color: #fbbf24">🍽️ NUEVO PEDIDO · MESA 4</span><br><br>
              · 2× Taco de Birria — $90<br>
              · 1× Orden de Volcanes — $89<br>
              · 2× Agua de Jamaica — $50<br><br>
              <span style="color: rgba(255, 255, 255, 0.6)">Notas: sin cebolla en uno de los tacos</span><br><br>
              <span style="color: #22c55e">Total: $229 MXN</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6 · CASOS REALES ─────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(245, 158, 11, 0.7)">
            05 / Casos reales
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Restaurantes reales, resultados reales
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="p-7 rounded-2xl border flex flex-col transition hover:-translate-y-1"
            style="background: rgba(245, 158, 11, 0.03); border-color: rgba(245, 158, 11, 0.15)"
          >
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="s in t.stars"
                :key="s"
                name="star"
                class-name="w-4 h-4"
                style="color: #f59e0b; fill: #f59e0b"
              />
            </div>
            <p class="dark:text-text-primary text-light-text text-sm leading-relaxed mb-5 flex-1">"{{ t.text }}"</p>
            <div
              class="px-3 py-2 rounded-lg text-xs font-mono mb-5 inline-flex items-center gap-2 self-start"
              style="background: rgba(245, 158, 11, 0.1); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.2)"
            >
              <LucideIcon name="trending-up" class-name="w-3.5 h-3.5" />
              {{ t.metric }}
            </div>
            <div class="flex items-center gap-3 pt-5 border-t" style="border-color: rgba(245, 158, 11, 0.15)">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: #0b0b0b"
              >{{ t.avatar }}</div>
              <div>
                <p class="dark:text-white text-light-text font-semibold text-sm">{{ t.name }}</p>
                <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">{{ t.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 7 · PRICING ──────────────────────────────────── -->
    <section
      id="precios"
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(245, 158, 11, 0.06), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(245, 158, 11, 0.7)">
            06 / Pricing
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Elige el plan para tu restaurante
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Pago único, sin mensualidades ni sorpresas. Hosting incluido el primer año.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in menuPackages"
            :key="pkg.name"
            class="relative flex flex-col rounded-2xl border p-7 transition"
            :style="pkg.highlighted
              ? 'border-color: #f59e0b; background: linear-gradient(145deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.02)); box-shadow: 0 30px 80px -20px rgba(245, 158, 11, 0.4)'
              : pkg.vip
                ? 'border-color: rgba(168, 85, 247, 0.3); background: rgba(168, 85, 247, 0.03)'
                : 'border-color: rgba(245, 158, 11, 0.15); background: rgba(245, 158, 11, 0.02)'"
          >
            <div
              v-if="pkg.badge"
              class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
              :style="pkg.highlighted
                ? 'background: linear-gradient(135deg, #f59e0b, #fbbf24); color: #0b0b0b'
                : 'background: linear-gradient(135deg, #a855f7, #c084fc); color: white'"
            >{{ pkg.badge }}</div>

            <div class="flex items-center gap-3 mb-5">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center"
                :style="pkg.highlighted
                  ? 'background: rgba(245, 158, 11, 0.18)'
                  : pkg.vip
                    ? 'background: rgba(168, 85, 247, 0.18)'
                    : 'background: rgba(245, 158, 11, 0.1)'"
              >
                <LucideIcon
                  :name="pkg.icon"
                  class-name="w-5 h-5"
                  :style="pkg.vip ? 'color: #c084fc' : 'color: #fbbf24'"
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
                :style="pkg.vip ? 'color: #c084fc' : 'color: #fbbf24'"
              >{{ pkg.price }}</span>
              <span class="text-sm dark:text-text-secondary text-light-muted ml-2">MXN · {{ pkg.period }}</span>
            </div>

            <ul class="space-y-2.5 mb-6 flex-1">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-start gap-2.5 text-sm"
              >
                <LucideIcon
                  :name="pkg.vip ? 'sparkles' : 'check'"
                  class-name="w-4 h-4 flex-shrink-0 mt-0.5"
                  :style="pkg.vip ? 'color: #c084fc' : 'color: #f59e0b'"
                />
                <span class="dark:text-text-primary text-light-text">{{ f }}</span>
              </li>
              <li
                v-for="f in pkg.excluded"
                :key="f"
                class="flex items-start gap-2.5 text-sm dark:text-text-secondary/40 text-light-muted/40 line-through"
              >
                <LucideIcon name="minus" class-name="w-4 h-4 flex-shrink-0 mt-0.5 opacity-60" />
                {{ f }}
              </li>
            </ul>

            <div class="space-y-2.5">
              <a
                :href="pkg.wa" target="_blank" rel="noopener noreferrer"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                :style="pkg.highlighted
                  ? 'background: linear-gradient(135deg, #f59e0b, #fbbf24); color: #0b0b0b; box-shadow: 0 8px 20px rgba(245, 158, 11, 0.25)'
                  : pkg.vip
                    ? 'background: linear-gradient(135deg, #a855f7, #c084fc); color: white'
                    : 'background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24'"
              >
                Contratar {{ pkg.name }}
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
              <RouterLink
                to="/menus-digitales/demo"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm transition"
                style="border-color: rgba(245, 158, 11, 0.2); color: rgba(251, 191, 36, 0.85)"
              >
                <LucideIcon name="play" class-name="w-3.5 h-3.5" />
                Ver demo
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Demo 21 días -->
        <div
          class="mt-12 rounded-2xl border p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
          style="background: rgba(245, 158, 11, 0.04); border-color: rgba(245, 158, 11, 0.2)"
        >
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style="background: rgba(245, 158, 11, 0.12)"
          >
            <LucideIcon name="calendar" class-name="w-7 h-7" style="color: #fbbf24" />
          </div>
          <div class="flex-1">
            <p class="text-xs font-mono mb-1" style="color: rgba(245, 158, 11, 0.7)">Oferta especial · prueba real</p>
            <h3 class="dark:text-white text-light-text font-display text-xl font-bold mb-1">
              Demo 21 días con tu menú real por <span style="color: #fbbf24">$999 MXN</span>
            </h3>
            <p class="dark:text-text-secondary text-light-muted text-sm">
              Armamos tu menú con tus platillos reales y lo dejamos publicado 21 días. Si contratas, los $999 se descuentan del anticipo.
            </p>
          </div>
          <a
            :href="waDemo21" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-black font-bold text-sm transition-all hover:scale-105 flex-shrink-0"
            style="background: linear-gradient(135deg, #f59e0b, #fbbf24); box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3)"
          >
            Solicitar demo 21 días
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 8 · FAQ ──────────────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(245, 158, 11, 0.7)">
            07 / Preguntas frecuentes
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Resolvemos tus dudas
          </h2>
          <p class="dark:text-text-secondary text-light-muted">
            Si te queda alguna, escríbenos por WhatsApp — respondemos rápido.
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="rounded-2xl border overflow-hidden transition-all"
            :style="openFaq === i
              ? 'border-color: rgba(245, 158, 11, 0.4); background: rgba(245, 158, 11, 0.04)'
              : 'border-color: rgba(245, 158, 11, 0.12); background: rgba(245, 158, 11, 0.02)'"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="dark:text-white text-light-text font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                class-name="w-4 h-4 shrink-0 transition"
                :style="openFaq === i ? 'color: #fbbf24' : 'color: rgba(245, 158, 11, 0.5)'"
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <a
            :href="waDemo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold transition"
            style="color: #fbbf24"
          >
            ¿Tienes otra pregunta? Escríbenos
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 9 · CTA FINAL ────────────────────────────────── -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.18), transparent 65%)"
      ></div>

      <div class="relative max-w-3xl mx-auto">
        <div
          class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8 border"
          style="background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.25)"
        >
          <LucideIcon name="utensils" class-name="w-8 h-8" style="color: #fbbf24" />
        </div>

        <h2 class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 tracking-tight leading-tight">
          Lleva tu restaurante al<br>
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #f59e0b, #fbbf24, #fde68a)"
          >siguiente nivel</span>
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-10 text-lg max-w-xl mx-auto leading-relaxed">
          Empieza hoy. Escríbenos por WhatsApp y en menos de 5 días tu restaurante ya tiene menú digital.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            :href="waContratar" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-black font-bold text-sm transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #f59e0b, #fbbf24); box-shadow: 0 8px 32px rgba(245, 158, 11, 0.4)"
          >
            Cotizar mi menú digital
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
          <RouterLink
            to="/menus-digitales/demo"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border font-semibold text-sm transition"
            style="border-color: rgba(245, 158, 11, 0.3); color: #fbbf24"
          >
            Ver demo primero
            <LucideIcon name="play" class-name="w-4 h-4" />
          </RouterLink>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/60 text-light-muted/60">
          <span class="flex items-center gap-1.5">
            <LucideIcon name="shield-check" class-name="w-3.5 h-3.5" style="color: rgba(245, 158, 11, 0.7)" />
            Pago único
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="clock" class-name="w-3.5 h-3.5" style="color: rgba(245, 158, 11, 0.7)" />
            Entrega &lt;5 días
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="message-circle" class-name="w-3.5 h-3.5" style="color: rgba(245, 158, 11, 0.7)" />
            Soporte español
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="smartphone" class-name="w-3.5 h-3.5" style="color: rgba(245, 158, 11, 0.7)" />
            Sin app
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
