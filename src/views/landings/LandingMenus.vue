<script setup>
/**
 * Landing: Menús Digitales Interactivos para Restaurantes
 * Estilo visual: Spotify — colores vibrantes, backgrounds sólidos, rounded shapes, bold y playful
 * Secciones: Hero · Stats · Pain · Demo Preview · Features · How it Works · Testimonials · Pricing · FAQ · Demo 21d · CTA Final
 */
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Tengo un restaurante y me interesa el menú digital interactivo 🍽️")}`;
const waContratar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar un menú digital para mi restaurante 🍽️")}`;
const waDemo21 = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el demo de 21 días del menú digital por $999 MXN 🍽️")}`;
const waSmall = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Esencial ($3,999 MXN) 🍽️")}`;
const waMedium = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Profesional ($7,999 MXN) 🍽️")}`;
const waLarge = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa el menú digital plan Enterprise ($14,999 MXN) 🍽️")}`;

const openFaq = ref(null);
const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};

const stats = [
  { value: "+120", label: "Menús activos" },
  { value: "+80", label: "Restaurantes" },
  { value: "98%", label: "Satisfacción" },
  { value: "< 5 días", label: "Entrega" },
];

const painPoints = [
  {
    icon: "printer",
    title: "Impresión cara, sin fin",
    desc: "Cada vez que cambia un precio o un platillo, tienes que reimprimir todo. Tiempo y dinero perdido.",
  },
  {
    icon: "wifi-off",
    title: "Sin presencia digital real",
    desc: "Un cliente busca tu restaurante en Google o Instagram y no puede ver tu menú fácilmente.",
  },
  {
    icon: "bar-chart-2",
    title: "Cero datos de tu negocio",
    desc: "No sabes qué platillos son los más vistos, ni cuándo hay más tráfico en tu menú.",
  },
  {
    icon: "frown",
    title: "Mala experiencia del cliente",
    desc: "Menús sucios, ilegibles o desactualizados generan desconfianza y reducen el ticket promedio.",
  },
];

const features = [
  {
    icon: "smartphone",
    title: "Mobile-first premium",
    desc: "Diseñado para verse perfecto en el celular, donde el 95% de tus clientes lo abrirán.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: "search",
    title: "Buscador de platillos",
    desc: "Tus clientes encuentran lo que quieren al instante. Sin scrollear interminablemente.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: "qr-code",
    title: "QR code personalizado",
    desc: "Un QR con tu marca para poner en mesas, mostrador, redes sociales o tarjetas.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: "pencil",
    title: "Precios siempre al día",
    desc: "Actualiza precios o platillos sin reimprimir nada. Cambia lo que necesites cuando quieras.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: "tag",
    title: "Promociones con banner",
    desc: "Destaca tus promos del día o platillos especiales en un banner visual irresistible.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: "layers",
    title: "Categorías y subcategorías",
    desc: "Organiza entradas, platos fuertes, postres, bebidas y más con una navegación limpia.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: "image",
    title: "Fotos de alta calidad",
    desc: "Las fotos venden. Cada platillo puede tener su imagen apetecible y descripción detallada.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: "shield-check",
    title: "Alérgenos e ingredientes",
    desc: "Información de alérgenos y porciones para clientes exigentes y cumplir normas sanitarias.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: "globe",
    title: "Dominio personalizado",
    desc: "Tu menú en menu.turestaurante.com — no en una app genérica ni con branding ajeno.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: "building-2",
    title: "Multi-sucursal",
    desc: "Un sistema central, múltiples sucursales. Gestiona todo desde un solo lugar.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const steps = [
  {
    number: "01",
    icon: "message-circle",
    title: "Nos compartes tu menú",
    desc: "Envíanos tu menú actual (foto, PDF o lista). Recopilamos platillos, categorías y precios.",
    color: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
  },
  {
    number: "02",
    icon: "palette",
    title: "Diseñamos y construimos",
    desc: "En menos de 5 días hábiles tienes tu menú digital publicado, con tu imagen y estilo.",
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
  },
  {
    number: "03",
    icon: "qr-code",
    title: "Listo para usar",
    desc: "Te entregamos tu QR y link. Ponlo en las mesas y listo — tu restaurante al siguiente nivel.",
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
  },
];

const testimonials = [
  {
    name: "Carlos Ramírez",
    role: "Dueño de Taquería El Patrón, CDMX",
    avatar: "CR",
    avatarBg: "bg-green-500/20",
    avatarColor: "text-green-400",
    text: "Antes imprimía 200 menús cada mes por cambios de precio. Ahora actualizo desde el celular en 2 minutos. Me ahorré más de $3,000 pesos en el primer mes solo en impresiones.",
    stars: 5,
  },
  {
    name: "Sofía Torres",
    role: "Gerente de Restaurante Fusión, Guadalajara",
    avatar: "ST",
    avatarBg: "bg-amber-500/20",
    avatarColor: "text-amber-400",
    text: "Nuestros clientes nos dicen que el menú se ve increíble. Lo comparten en sus historias de Instagram y eso nos ha traído nuevos clientes. El buscador es una maravilla para menús largos.",
    stars: 5,
  },
  {
    name: "Miguel Ángel Díaz",
    role: "Food Truck Birrias Mike, Monterrey",
    avatar: "MD",
    avatarBg: "bg-violet-500/20",
    avatarColor: "text-violet-400",
    text: "Para un food truck es perfecto. Cambio el menú del día en segundos y mis clientes ya saben que lo pueden ver antes de llegar. Esto me genera ventas anticipadas todos los días.",
    stars: 5,
  },
];

const menuPackages = [
  {
    name: "Esencial",
    icon: "store",
    price: "$3,999",
    period: "pago único",
    tagline: "Para restaurantes pequeños y food trucks",
    wa: waSmall,
    highlighted: false,
    badge: null,
    vip: false,
    features: [
      "Diseño mobile-first premium",
      "Hasta 30 platillos",
      "Categorías con fotos",
      "Precios actualizables",
      "QR code personalizado",
      "Dominio incluido (.devifly.dev)",
      "Deploy y hosting 1 año",
    ],
    excluded: [
      "Buscador de platillos",
      "Sección de promociones con banner",
      "Detalle con alérgenos y porciones",
      "Dominio personalizado (.com)",
      "Panel para editar platillos",
      "Múltiples sucursales",
    ],
  },
  {
    name: "Profesional",
    icon: "utensils",
    price: "$7,999",
    period: "pago único",
    tagline: "Para restaurantes medianos en crecimiento",
    wa: waMedium,
    highlighted: true,
    badge: "Más popular",
    vip: false,
    features: [
      "Todo lo de Esencial",
      "Hasta 100 platillos",
      "Subcategorías ilimitadas",
      "Sección de promociones con banner",
      "Buscador de productos",
      "Detalle con alérgenos y porciones",
      "Dominio personalizado (.com)",
      "Panel básico para editar platillos",
    ],
    excluded: ["Platillos ilimitados", "Múltiples sucursales"],
  },
  {
    name: "Enterprise",
    icon: "building-2",
    price: "$14,999",
    period: "pago único",
    tagline: "Para cadenas y restaurantes con varias sucursales",
    wa: waLarge,
    highlighted: false,
    badge: "Completo",
    vip: true,
    features: [
      "Todo lo de Profesional",
      "Platillos ilimitados",
      "Múltiples sucursales",
      "Panel avanzado multi-sucursal",
      "Integración con redes sociales",
      "Analíticas de visitas básicas",
      "Soporte prioritario",
      "Onboarding personalizado",
    ],
    excluded: [],
  },
];

const menuComparisonRows = [
  { feature: "Diseño mobile-first", small: true, medium: true, large: true },
  { feature: "Categorías con fotos", small: true, medium: true, large: true },
  { feature: "Precios actualizables", small: true, medium: true, large: true },
  { feature: "QR code personalizado", small: true, medium: true, large: true },
  { feature: "Hosting 1 año incluido", small: true, medium: true, large: true },
  { feature: "Hasta 30 platillos", small: true, medium: false, large: false },
  { feature: "Hasta 100 platillos", small: false, medium: true, large: false },
  { feature: "Platillos ilimitados", small: false, medium: false, large: true },
  {
    feature: "Subcategorías ilimitadas",
    small: false,
    medium: true,
    large: true,
  },
  { feature: "Banner de promociones", small: false, medium: true, large: true },
  { feature: "Buscador de platillos", small: false, medium: true, large: true },
  { feature: "Alérgenos y porciones", small: false, medium: true, large: true },
  {
    feature: "Dominio personalizado (.com)",
    small: false,
    medium: true,
    large: true,
  },
  {
    feature: "Panel para editar platillos",
    small: false,
    medium: true,
    large: true,
  },
  { feature: "Múltiples sucursales", small: false, medium: false, large: true },
  { feature: "Panel multi-sucursal", small: false, medium: false, large: true },
  {
    feature: "Analíticas de visitas",
    small: false,
    medium: false,
    large: true,
  },
  { feature: "Soporte prioritario", small: false, medium: false, large: true },
];

const faqs = [
  {
    q: "¿En cuánto tiempo me entregan el menú digital?",
    a: "En menos de 5 días hábiles desde que nos compartes tu menú y materiales (fotos, platillos, precios). Si tienes todo listo, podemos ser incluso más rápidos.",
  },
  {
    q: "¿Puedo actualizar precios y platillos yo mismo?",
    a: "En los planes Profesional y Enterprise incluimos un panel básico para que tú o tu equipo puedan actualizar precios, platillos y descripciones sin depender de nosotros. En el plan Esencial, los cambios los gestiona el equipo de Devifly.",
  },
  {
    q: "¿El menú funciona sin que el cliente descargue ninguna app?",
    a: "Sí, totalmente. El menú digital es una página web — se abre directo desde el celular al escanear el QR o tocar el link. Cero descargas, cero registros, cero fricción.",
  },
  {
    q: "¿Qué pasa después del primer año de hosting?",
    a: "Al finalizar el primer año, el hosting tiene un costo de renovación de $1,200 MXN/año por plan Esencial, $1,800 MXN/año por Profesional y $2,400 MXN/año por Enterprise. Te avisamos con anticipación.",
  },
  {
    q: "¿Puedo usar mi propio dominio (menu.mirestaurante.com)?",
    a: "Sí, en los planes Profesional y Enterprise incluimos la configuración del dominio personalizado. Si ya tienes un dominio, lo conectamos; si no, te ayudamos a conseguirlo.",
  },
  {
    q: "¿El menú se ve bien en todos los celulares?",
    a: "Absolutamente. Está diseñado con enfoque mobile-first y probado en iOS y Android, en Chrome, Safari y otros navegadores. Se adapta a cualquier tamaño de pantalla.",
  },
  {
    q: "¿Puedo ver una demo antes de contratar?",
    a: "Sí. Puedes ver la demo genérica ahora mismo desde esta página. Además, ofrecemos un Demo de 21 días con tu menú real por $999 MXN — si luego contratas, ese monto se descuenta del anticipo.",
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
      <!-- Background glow -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20"
          style="
            background: radial-gradient(ellipse, #4ade80 0%, transparent 70%);
          "
        ></div>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: copy -->
          <div>
            <!-- badge -->
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6"
            >
              <span
                class="w-2 h-2 rounded-full bg-green-400 animate-pulse"
              ></span>
              Menús Digitales Interactivos
            </div>

            <h1
              class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Tu restaurante merece un menú que
              <span class="text-green-400"> venda más</span>
            </h1>

            <p class="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl">
              Menú digital premium con QR personalizado, fotos de tus platillos,
              buscador y precios siempre al día. Sin apps, sin impresiones, sin
              complicaciones.
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <RouterLink
                to="/menus-digitales/demo"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-green-400 text-green-950 font-bold text-sm hover:bg-green-300 transition-all hover:scale-105 shadow-[0_0_24px_rgba(74,222,128,0.3)]"
              >
                <LucideIcon name="play-circle" class-name="w-4 h-4" />
                Ver demo en vivo
              </RouterLink>
              <a
                :href="waContratar"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-green-500/40 hover:text-white transition"
              >
                Cotizar mi menú
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
            </div>

            <!-- Mini trust -->
            <div class="flex items-center gap-3 text-xs text-neutral-500">
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-green-400"
                />
                Sin app que descargar
              </span>
              <span class="w-px h-3 bg-neutral-700"></span>
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-green-400"
                />
                Entrega en &lt; 5 días
              </span>
              <span class="w-px h-3 bg-neutral-700"></span>
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-green-400"
                />
                QR incluido
              </span>
            </div>
          </div>

          <!-- Right: phone mockup -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <!-- Outer glow -->
              <div
                class="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-30"
                style="background: linear-gradient(135deg, #4ade80, #22d3ee)"
              ></div>

              <!-- Phone frame -->
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

                <!-- App header -->
                <div
                  class="px-4 py-3 border-b border-white/5"
                  style="background: #141414"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <div
                        class="text-amber-400 text-xs font-bold tracking-widest uppercase"
                      >
                        Restaurante
                      </div>
                      <div class="text-white text-sm font-semibold">
                        El Patrón
                      </div>
                    </div>
                    <div
                      class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center"
                    >
                      <LucideIcon
                        name="search"
                        class-name="w-3.5 h-3.5 text-amber-400"
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
                    class="px-3 py-1 rounded-full bg-amber-500 text-black text-[10px] font-bold whitespace-nowrap"
                    >Tacos</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] whitespace-nowrap"
                    >Bebidas</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] whitespace-nowrap"
                    >Postres</span
                  >
                </div>

                <!-- Menu items -->
                <div class="px-4 py-3 space-y-3" style="background: #0f0f0f">
                  <div
                    v-for="item in [
                      {
                        name: 'Taco de Birria',
                        price: '$45',
                        img: '🌮',
                        badge: null,
                      },
                      {
                        name: 'Orden Volcanes',
                        price: '$89',
                        img: '🔥',
                        badge: 'Popular',
                      },
                      {
                        name: 'Agua de Jamaica',
                        price: '$25',
                        img: '🧃',
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
                          class="px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[9px] font-bold"
                          >{{ item.badge }}</span
                        >
                      </div>
                      <p class="text-amber-400 text-xs font-bold">
                        {{ item.price }}
                      </p>
                    </div>
                  </div>

                  <!-- QR hint -->
                  <div class="flex items-center justify-center gap-2 pt-1">
                    <LucideIcon
                      name="qr-code"
                      class-name="w-3.5 h-3.5 text-neutral-600"
                    />
                    <span class="text-neutral-600 text-[10px]"
                      >menu.elpatron.com</span
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
          <div class="font-display text-3xl font-extrabold text-green-400 mb-1">
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
            ¿Todavía usas menú físico?
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Cada día que sigues con el menú de papel, estás perdiendo dinero,
            clientes y oportunidades.
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
          class="relative rounded-3xl overflow-hidden border border-green-500/20 p-8 sm:p-12"
          style="
            background: linear-gradient(
              135deg,
              #0d1f0d 0%,
              #0a0a0a 60%,
              #0d1020 100%
            );
          "
        >
          <!-- bg glow -->
          <div
            class="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style="
              background: radial-gradient(ellipse, #4ade80, transparent 70%);
            "
          ></div>

          <div
            class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6"
              >
                <LucideIcon name="eye" class-name="w-3.5 h-3.5" />
                Demo interactivo disponible
              </div>
              <h2
                class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight"
              >
                Prueba el menú digital<br />
                <span class="text-green-400">antes de comprometerte</span>
              </h2>
              <p class="text-neutral-400 mb-8 leading-relaxed">
                Navega por una demo real con platillos, fotos, buscador y QR.
                Exactamente así se verá el menú de tu restaurante.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <RouterLink
                  to="/menus-digitales/demo"
                  class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-green-400 text-green-950 font-bold text-sm hover:bg-green-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.25)]"
                >
                  <LucideIcon name="smartphone" class-name="w-4 h-4" />
                  Abrir demo interactivo
                </RouterLink>
                <a
                  :href="waDemo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition"
                >
                  Quiero el mío así
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </a>
              </div>
            </div>

            <!-- Feature chips -->
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="chip in [
                  { icon: 'search', text: 'Buscador en vivo' },
                  { icon: 'image', text: 'Fotos por platillo' },
                  { icon: 'tag', text: 'Banner de promos' },
                  { icon: 'layers', text: 'Categorías claras' },
                  { icon: 'qr-code', text: 'QR personalizado' },
                  { icon: 'smartphone', text: 'Fluido en móvil' },
                ]"
                :key="chip.text"
                class="flex items-center gap-3 p-4 rounded-xl border border-green-500/10"
                style="background: rgba(74, 222, 128, 0.04)"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0"
                >
                  <LucideIcon
                    :name="chip.icon"
                    class-name="w-4 h-4 text-green-400"
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="star" class-name="w-3.5 h-3.5" />
            Todo lo que incluye
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Un menú digital que trabaja por ti
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Cada función está diseñada para mejorar la experiencia del cliente y
            ayudarte a vender más.
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="map" class-name="w-3.5 h-3.5" />
            Proceso
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Así de fácil empezamos
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">
            En menos de una semana tu restaurante ya tiene su menú digital
            publicado y funcionando.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Connector line (desktop) -->
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
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-400 text-green-950 font-bold text-sm hover:bg-green-300 transition-all hover:scale-105"
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="message-square" class-name="w-3.5 h-3.5" />
            Testimoniales
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Lo que dicen los restaurantes
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">
            Restaurantes reales, resultados reales.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="p-7 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition flex flex-col"
            style="background: #111"
          >
            <!-- Stars -->
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="s in t.stars"
                :key="s"
                name="star"
                class-name="w-4 h-4 text-amber-400 fill-current"
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="tag" class-name="w-3.5 h-3.5" />
            Planes y precios
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Elige el plan para tu restaurante
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            Pago único, sin mensualidades ni sorpresas. Hosting incluido el
            primer año.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in menuPackages"
            :key="pkg.name"
            :class="[
              'relative flex flex-col rounded-2xl border p-7 transition-all',
              pkg.highlighted
                ? 'border-green-500/50 shadow-[0_0_40px_rgba(74,222,128,0.12)]'
                : pkg.vip
                  ? 'border-violet-500/30'
                  : 'border-neutral-800',
            ]"
            style="background: #1a1a1a"
          >
            <!-- Badge -->
            <div
              v-if="pkg.badge"
              :class="[
                'absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap',
                pkg.highlighted
                  ? 'bg-green-400 text-green-950'
                  : 'bg-violet-500 text-white',
              ]"
            >
              {{ pkg.badge }}
            </div>

            <!-- Icon + name -->
            <div class="flex items-center gap-3 mb-5">
              <div
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  pkg.highlighted
                    ? 'bg-green-500/15'
                    : pkg.vip
                      ? 'bg-violet-500/15'
                      : 'bg-neutral-800',
                ]"
              >
                <LucideIcon
                  :name="pkg.icon"
                  :class-name="`w-5 h-5 ${pkg.highlighted ? 'text-green-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-400'}`"
                />
              </div>
              <div>
                <div class="text-white font-bold">{{ pkg.name }}</div>
                <div class="text-neutral-500 text-xs">{{ pkg.tagline }}</div>
              </div>
            </div>

            <!-- Price -->
            <div class="mb-6">
              <span
                :class="[
                  'font-display text-4xl font-extrabold',
                  pkg.highlighted
                    ? 'text-green-400'
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

            <!-- Features -->
            <ul class="space-y-2.5 mb-7 flex-1">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-start gap-2.5 text-sm"
              >
                <LucideIcon
                  name="check"
                  :class-name="`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-green-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-500'}`"
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

            <!-- CTA -->
            <div class="space-y-2.5">
              <a
                :href="pkg.wa"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]',
                  pkg.highlighted
                    ? 'bg-green-400 text-green-950 hover:bg-green-300 shadow-[0_0_20px_rgba(74,222,128,0.2)]'
                    : pkg.vip
                      ? 'bg-violet-600 text-white hover:bg-violet-500'
                      : 'bg-neutral-700 text-white hover:bg-neutral-600',
                ]"
              >
                Contratar {{ pkg.name }}
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </a>
              <RouterLink
                to="/menus-digitales/demo"
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
                  class="text-center py-4 px-4 text-green-400 font-semibold whitespace-nowrap"
                >
                  Profesional
                </th>
                <th
                  class="text-center py-4 px-4 text-violet-400 font-semibold whitespace-nowrap"
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in menuComparisonRows"
                :key="row.feature"
                class="border-b border-neutral-800/50 last:border-0 hover:bg-green-500/5 transition-colors"
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
                    class-name="w-4 h-4 mx-auto text-green-400"
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-5"
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
            :class="openFaq === i ? 'border-green-500/30' : ''"
            style="background: #1a1a1a"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="text-white font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                :class-name="`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'text-green-400' : 'text-neutral-500'}`"
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
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-green-400 text-sm font-semibold hover:text-green-300 transition"
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
          style="
            background: linear-gradient(
              135deg,
              #1a1200 0%,
              #0a0a0a 50%,
              #0a0f1a 100%
            );
          "
        >
          <!-- glow -->
          <div
            class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-20 -translate-y-1/2"
            style="
              background: radial-gradient(ellipse, #f59e0b, transparent 70%);
            "
          ></div>

          <div class="relative">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-7"
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
              <span class="text-amber-400 font-bold">$999 MXN</span> armamos tu
              menú digital real — con tus platillos, fotos y precios — publicado
              y funcionando durante <strong class="text-white">21 días</strong>.
              Si luego contratas, los $999 se descuentan del anticipo. No pagas
              nada extra.
            </p>

            <div
              class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
            >
              <div
                class="p-5 rounded-2xl border border-amber-500/15"
                style="background: rgba(245, 158, 11, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="utensils-crossed"
                    class-name="w-5 h-5 text-amber-400"
                  />
                </div>
                <p class="text-white font-semibold text-sm mb-1">
                  Tu menú real
                </p>
                <p class="text-neutral-500 text-xs">
                  Con tus platillos, categorías y precios reales
                </p>
              </div>
              <div
                class="p-5 rounded-2xl border border-amber-500/15"
                style="background: rgba(245, 158, 11, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="qr-code"
                    class-name="w-5 h-5 text-amber-400"
                  />
                </div>
                <p class="text-white font-semibold text-sm mb-1">
                  Publicado y funcional
                </p>
                <p class="text-neutral-500 text-xs">
                  Accesible por QR, listo para usar en mesas
                </p>
              </div>
              <div
                class="p-5 rounded-2xl border border-amber-500/15"
                style="background: rgba(245, 158, 11, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="receipt"
                    class-name="w-5 h-5 text-green-400"
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
        <!-- Icon -->
        <div
          class="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8"
        >
          <LucideIcon name="utensils" class-name="w-8 h-8 text-green-400" />
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          Lleva tu restaurante al<br />
          <span class="text-green-400">siguiente nivel</span>
        </h2>
        <p
          class="text-neutral-400 mb-10 text-lg max-w-xl mx-auto leading-relaxed"
        >
          Empieza hoy. Escríbenos por WhatsApp y en menos de 5 días tu
          restaurante ya tiene menú digital.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-full bg-green-400 text-green-950 font-bold text-sm hover:bg-green-300 transition-all hover:scale-105 shadow-[0_0_24px_rgba(74,222,128,0.25)]"
          >
            Cotizar mi menú digital
          </a>
          <RouterLink
            to="/menus-digitales/demo"
            class="px-10 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-green-500/30 hover:text-white transition"
          >
            Ver demo primero
          </RouterLink>
        </div>

        <!-- Trust signals -->
        <div
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-neutral-600"
        >
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="shield-check"
              class-name="w-3.5 h-3.5 text-green-500/60"
            />
            Pago único, sin mensualidades
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="clock"
              class-name="w-3.5 h-3.5 text-green-500/60"
            />
            Entrega en menos de 5 días
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="headphones"
              class-name="w-3.5 h-3.5 text-green-500/60"
            />
            Soporte en español
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="smartphone"
              class-name="w-3.5 h-3.5 text-green-500/60"
            />
            Sin app que descargar
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
