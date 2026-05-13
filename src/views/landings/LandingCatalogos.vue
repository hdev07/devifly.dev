<script setup>
/**
 * Landing: Catálogos Digitales
 * Palette: emerald/green (matches navbar #10b981)
 * Style: Stripe — refined gradients, glass, depth, asymmetric layout
 * Section order: Hero · Demo · Benefits · Templates · How · What's included · Pricing · FAQ · Testimonials · CTA
 */
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const waDemo = wa(
  "¡Hola! Me interesa un catálogo digital para mi negocio de ventas 🛍️",
);
const waContratar = wa("Quiero cotizar mi catálogo digital de productos 🛍️");
const waBasico = wa(
  "¡Hola! Me interesa el Plan Básico de catálogo digital ($1,499 MXN) 🛍️",
);
const waPro = wa(
  "¡Hola! Me interesa el Plan Pro de catálogo digital ($3,499 MXN) ✨",
);
const waPremium = wa(
  "¡Hola! Me interesa el Plan Premium VIP de catálogo digital ($6,999 MXN) 💎",
);

const openFaq = ref(null);
const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};

const themes = [
  {
    id: "moda",
    name: "Moda & accesorios",
    desc: "Grid de productos, tallas y colores, etiquetas de novedad y ofertas.",
    palette: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#10b981"],
    icon: "shopping-bag",
  },
  {
    id: "belleza",
    name: "Belleza & cosméticos",
    desc: "Tonos suaves, fotos grandes y categorías por tipo de producto.",
    palette: ["#fdf2f8", "#fce7f3", "#d1fae5", "#059669"],
    icon: "sparkles",
  },
  {
    id: "reposteria",
    name: "Repostería & postres",
    desc: "Estilo cálido, precios claros y botón de pedido directo a WhatsApp.",
    palette: ["#fffbeb", "#fef3c7", "#a7f3d0", "#10b981"],
    icon: "cake",
  },
  {
    id: "joyeria",
    name: "Joyería artesanal",
    desc: "Fondo elegante, galería de detalle y sensación premium en cada pieza.",
    palette: ["#0b0b0b", "#064e3b", "#065f46", "#34d399"],
    icon: "gem",
  },
  {
    id: "deportivo",
    name: "Ropa deportiva",
    desc: "Dinámico, con stock visible y filtros por talla y género.",
    palette: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#059669"],
    icon: "zap",
  },
  {
    id: "regalos",
    name: "Regalos & detalles",
    desc: "Catálogo versátil para temporadas, combos y productos personalizados.",
    palette: ["#ffffff", "#f0fdf4", "#d1fae5", "#10b981"],
    icon: "gift",
  },
];

const benefits = [
  {
    icon: "clock",
    title: "Ahorra horas cada día",
    desc: "Deja de mandar fotos y precios uno por uno. Tu catálogo responde por ti las 24 horas.",
  },
  {
    icon: "trending-up",
    title: "Más ventas, menos fricción",
    desc: "Tus clientas ven todo, eligen y te escriben directo a WhatsApp con el pedido listo.",
  },
  {
    icon: "smartphone",
    title: "Siempre en el bolsillo",
    desc: "Un solo link que compartes en historias, grupos y chats. Sin app, sin comisiones.",
  },
  {
    icon: "sparkles",
    title: "Imagen profesional",
    desc: "Diseño limpio, fotos organizadas y marca propia que genera confianza al instante.",
  },
];

const steps = [
  {
    num: "01",
    icon: "message-circle",
    title: "Cuéntanos de tu negocio",
    desc: "Qué vendes, cómo organizas tus productos y qué estilo quieres transmitir.",
  },
  {
    num: "02",
    icon: "palette",
    title: "Armamos tu catálogo",
    desc: "En 1–4 semanas según tu plan, con tus fotos, precios, categorías y botón de WhatsApp.",
  },
  {
    num: "03",
    icon: "rocket",
    title: "Compartes y vendes",
    desc: "Recibes tu link único, lo publicas y empiezas a recibir pedidos sin intermediarios.",
  },
];

const includes = [
  { icon: "layout-grid", text: "Catálogo digital personalizado con tu marca" },
  { icon: "message-circle", text: "Botón de pedido directo a WhatsApp" },
  { icon: "folder-open", text: "Organización por categorías y productos" },
  { icon: "image", text: "Galería de fotos por producto" },
  { icon: "search", text: "Buscador de productos (plan Pro+)" },
  { icon: "bar-chart-2", text: "Control de stock y tallas (plan Pro+)" },
  { icon: "refresh-cw", text: "Actualización ilimitada de productos" },
  { icon: "shield-check", text: "Hosting, SSL y soporte incluidos" },
];

const packages = [
  {
    name: "Básico",
    price: "$1,499",
    tagline: "Para empezar a vender de forma profesional",
    demo: "/catalogos-nenis/demo",
    wa: waBasico,
    highlighted: false,
    badge: null,
    vip: false,
    validity: "Entrega: 1 semana",
    features: [
      "Hasta 50 productos",
      "1 categoría",
      "Galería de 2 fotos por producto",
      "Control de precios",
      "Link compartible",
      "Botón de WhatsApp",
      "Diseño responsive",
    ],
    excluded: [
      "Productos ilimitados",
      "Categorías ilimitadas",
      "Hasta 5 fotos por producto",
      "Control de tallas y colores",
      "Control de stock",
      "Buscador de productos",
      "Panel admin completo",
      "Múltiples vendedoras (catálogos)",
      "Cupones y descuentos",
      "Dominio personalizado",
    ],
  },
  {
    name: "Pro",
    price: "$3,499",
    tagline: "Para negocios que ya venden fuerte y quieren crecer",
    demo: "/catalogos-nenis/pro",
    wa: waPro,
    highlighted: true,
    badge: "Más popular",
    vip: false,
    validity: "Entrega: 2 semanas",
    features: [
      "Todo lo del Básico",
      "Productos ilimitados",
      "Categorías ilimitadas",
      "Hasta 5 fotos por producto",
      "Control de tallas y colores",
      "Control de stock",
      "Buscador de productos",
      "Panel admin completo",
    ],
    excluded: [
      "Múltiples vendedoras (catálogos)",
      "Cupones y descuentos",
      "Reportes de productos más vistos",
      "Dominio personalizado",
      "Notificaciones por WhatsApp",
      "Integración con pagos en línea",
      "Soporte prioritario",
    ],
  },
  {
    name: "Premium VIP",
    price: "$6,999",
    tagline: "Para negocios serios con múltiples vendedoras",
    demo: "/catalogos-nenis/premium",
    wa: waPremium,
    highlighted: false,
    badge: "Experiencia VIP",
    vip: true,
    validity: "Entrega: 3–4 semanas",
    features: [
      "Todo lo del Pro",
      "Múltiples vendedoras (catálogos)",
      "Cupones y descuentos",
      "Reportes de productos más vistos",
      "Dominio personalizado",
      "Notificaciones por WhatsApp",
      "Integración con pagos en línea",
      "Soporte prioritario",
    ],
    excluded: [],
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda en estar listo mi catálogo?",
    a: "Según el plan: Básico en 1 semana, Pro en 2 semanas y Premium VIP en 3–4 semanas desde que nos compartes tus productos, fotos y preferencias de diseño.",
  },
  {
    q: "¿Puedo actualizar productos yo misma?",
    a: "Sí. En los planes Pro y Premium VIP tienes panel admin completo para agregar, editar o quitar productos cuando quieras. En el plan Básico nos escribes y te ayudamos con los cambios.",
  },
  {
    q: "¿Cobran comisión por cada venta?",
    a: "No. Es pago único por el catálogo. Tus clientas te pagan directo — tú decides si por transferencia, efectivo o el método que prefieras.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "Para nada. Nosotros armamos todo y te explicamos cómo compartir tu link y recibir pedidos. El panel admin es sencillo y pensado para usarse desde el celular.",
  },
  {
    q: "¿Funciona en celular y computadora?",
    a: "Sí, tu catálogo se ve perfecto en cualquier dispositivo. Tus clientas lo abren desde WhatsApp, Instagram o donde lo compartas.",
  },
  {
    q: "¿Puedo tener varias vendedoras con su propio catálogo?",
    a: "Sí, en el plan Premium VIP. Cada vendedora tiene su catálogo independiente bajo la misma cuenta, ideal para equipos de venta o distribuidoras.",
  },
  {
    q: "¿Qué pasa si no me gusta el resultado?",
    a: "Trabajamos contigo hasta que quede como lo quieres. Si en el primer mes no ves mejora en tus ventas, te ayudamos a optimizar tu catálogo sin costo extra.",
  },
];

const testimonials = [
  {
    quote:
      "Ahora mis clientas ven todo mi catálogo y me piden directo. Vendo más y ya no paso el día mandando las mismas fotos.",
    name: "Paola R.",
    event: "Moda & accesorios · CDMX",
    avatar: "P",
    stars: 5,
  },
  {
    quote:
      "Me ahorro horas cada semana y la imagen se ve súper profesional. Mis clientas confían más desde que tengo el link del catálogo.",
    name: "Fernanda M.",
    event: "Belleza · Estado de México",
    avatar: "F",
    stars: 5,
  },
  {
    quote:
      "El panel admin es facilísimo. Actualizo precios y stock en minutos. El plan Pro valió cada peso.",
    name: "Lucía S.",
    event: "Repostería · Querétaro",
    avatar: "L",
    stars: 5,
  },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-hidden">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="relative px-6 pt-20 pb-24">
      <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-30"
        style="
          background: radial-gradient(ellipse, #10b981 0%, transparent 65%);
        "
      ></div>
      <div
        class="pointer-events-none absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style="background: radial-gradient(circle, #059669, transparent 70%)"
      ></div>

      <div class="relative max-w-5xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-medium"
          style="
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.25);
            color: #6ee7b7;
          "
        >
          <span
            class="w-1.5 h-1.5 rounded-full"
            style="background: #10b981"
          ></span>
          <LucideIcon name="shopping-bag" class-name="w-3.5 h-3.5" />
          Catálogos Digitales
        </div>

        <h1
          class="font-display text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.04] tracking-tight mb-7"
        >
          <span class="dark:text-white text-light-text">Vende más con tu </span>
          <span
            class="bg-clip-text text-transparent"
            style="
              background-image: linear-gradient(
                135deg,
                #10b981 0%,
                #059669 50%,
                #6ee7b7 100%
              );
            "
            >catálogo digital</span
          >
          <span class="dark:text-white text-light-text"> propio</span>
        </h1>

        <p
          class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Organiza tus productos, comparte un solo link y recibe pedidos directo
          a tu WhatsApp. Sin comisiones, sin intermediarios, sin perder ventas
          por no contestar a tiempo.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="
              background: linear-gradient(135deg, #059669, #10b981);
              box-shadow: 0 8px 32px rgba(5, 150, 105, 0.4);
            "
          >
            <LucideIcon name="sparkles" class-name="w-4 h-4" />
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all border"
            style="
              border-color: rgba(16, 185, 129, 0.35);
              color: #6ee7b7;
              background: rgba(16, 185, 129, 0.04);
            "
          >
            Quiero cotizar mi catálogo
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/70 text-light-muted/70"
        >
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            Sin comisiones
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            Listo en 1–4 semanas
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            Pedidos por WhatsApp
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            Garantía de satisfacción
          </span>
        </div>
      </div>
    </section>

    <!-- ─── 2 · DEMO INTERACTIVA ─────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            01 / Demo interactiva
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            Pruébalo antes de pedirlo
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Tres estilos de catálogo — Básico, Pro y Premium VIP. Explora la
            demo en vivo y mira cómo se vería el tuyo.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <!-- Demo Básico -->
          <div class="flex flex-col items-center gap-3 group">
            <RouterLink
              to="/catalogos-nenis/demo"
              class="block transition-transform group-hover:-translate-y-1"
            >
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
                style="
                  border-color: rgba(16, 185, 129, 0.25);
                  background: linear-gradient(180deg, #f0fdf4, #ecfdf5, #ffffff);
                "
              >
                <div
                  class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                  style="color: #6b7280"
                >
                  <span>9:41</span>
                  <div
                    class="w-16 h-4 rounded-full"
                    style="background: rgba(16, 185, 129, 0.1)"
                  ></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden p-4 text-center bg-white">
                  <div
                    class="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center"
                    style="background: linear-gradient(135deg, #10b981, #34d399)"
                  >
                    <span class="text-white text-sm font-bold">B</span>
                  </div>
                  <p class="text-[9px] uppercase tracking-widest mb-1" style="color: #9ca3af">
                    Boutique
                  </p>
                  <p class="text-sm font-bold mb-2" style="color: #065f46">
                    Lupita Moda
                  </p>
                  <div class="grid grid-cols-2 gap-1.5 mb-2">
                    <div class="h-10 rounded-lg" style="background: #ecfdf5"></div>
                    <div class="h-10 rounded-lg" style="background: #d1fae5"></div>
                  </div>
                  <div
                    class="py-1.5 rounded-full text-[8px] font-semibold text-white"
                    style="background: linear-gradient(135deg, #059669, #10b981)"
                  >
                    Pedir por WhatsApp
                  </div>
                </div>
              </div>
            </RouterLink>
            <div class="text-center">
              <p class="text-xs font-bold mb-1" style="color: #10b981">Básico</p>
              <RouterLink
                to="/catalogos-nenis/demo"
                class="inline-flex items-center gap-1 text-[11px] dark:text-text-secondary text-light-muted hover:text-emerald-400 transition"
              >
                Abrir demo
                <LucideIcon name="arrow-right" class-name="w-3 h-3" />
              </RouterLink>
            </div>
          </div>

          <!-- Demo Pro (highlighted) -->
          <div class="flex flex-col items-center gap-3 group sm:-translate-y-4 relative">
            <div
              class="absolute hidden sm:block translate-x-16 -translate-y-2 px-2.5 py-1 rounded-full text-[10px] font-bold text-white z-10"
              style="background: linear-gradient(135deg, #059669, #10b981)"
            >
              Más popular
            </div>
            <RouterLink
              to="/catalogos-nenis/pro"
              class="block transition-transform group-hover:-translate-y-1"
            >
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-2xl overflow-hidden"
                style="
                  border-color: rgba(16, 185, 129, 0.4);
                  background: linear-gradient(180deg, #ecfdf5, #f0fdf4);
                  box-shadow: 0 25px 60px rgba(5, 150, 105, 0.25);
                "
              >
                <div
                  class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                  style="color: #059669"
                >
                  <span>9:41</span>
                  <div
                    class="w-16 h-4 rounded-full"
                    style="background: rgba(16, 185, 129, 0.1)"
                  ></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden bg-white">
                  <div class="p-3 text-center" style="background: linear-gradient(180deg, #ecfdf5, white)">
                    <p class="text-xs font-bold" style="color: #065f46">Glam Beauty ✨</p>
                    <p class="text-[8px]" style="color: #9ca3af">Cosméticos & skincare</p>
                  </div>
                  <div class="px-3 pb-1">
                    <div
                      class="flex items-center gap-1.5 px-2 py-1.5 rounded-lg mb-2"
                      style="background: #f9fafb; border: 1px solid #f3f4f6"
                    >
                      <LucideIcon name="search" class-name="w-2.5 h-2.5" style="color: #d1d5db" />
                      <span class="text-[8px]" style="color: #d1d5db">Buscar...</span>
                    </div>
                    <div class="grid grid-cols-2 gap-1.5">
                      <div class="rounded-lg p-1.5" style="background: #f0fdf4">
                        <div class="h-8 rounded mb-1" style="background: #d1fae5"></div>
                        <p class="text-[8px] font-semibold" style="color: #065f46">Serum</p>
                        <p class="text-[8px] font-bold" style="color: #10b981">$280</p>
                      </div>
                      <div class="rounded-lg p-1.5" style="background: #f0fdf4">
                        <div class="h-8 rounded mb-1" style="background: #d1fae5"></div>
                        <p class="text-[8px] font-semibold" style="color: #065f46">Labial</p>
                        <p class="text-[8px] font-bold" style="color: #10b981">$150</p>
                      </div>
                    </div>
                  </div>
                  <div class="px-3 pb-3">
                    <div
                      class="py-1.5 rounded-full text-[8px] font-semibold text-white text-center"
                      style="background: linear-gradient(135deg, #059669, #10b981)"
                    >
                      Pedir por WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </RouterLink>
            <div class="text-center">
              <p class="text-xs font-bold mb-1" style="color: #059669">Pro</p>
              <RouterLink
                to="/catalogos-nenis/pro"
                class="inline-flex items-center gap-1 text-[11px] dark:text-text-secondary text-light-muted hover:text-emerald-400 transition"
              >
                Abrir demo
                <LucideIcon name="arrow-right" class-name="w-3 h-3" />
              </RouterLink>
            </div>
          </div>

          <!-- Demo Premium VIP -->
          <div class="flex flex-col items-center gap-3 group">
            <RouterLink
              to="/catalogos-nenis/premium"
              class="block transition-transform group-hover:-translate-y-1"
            >
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
                style="
                  border-color: rgba(198, 167, 94, 0.25);
                  background: #0b0b0b;
                "
              >
                <div
                  class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                  style="color: rgba(198, 167, 94, 0.4)"
                >
                  <span>9:41</span>
                  <div
                    class="w-16 h-4 rounded-full"
                    style="background: rgba(198, 167, 94, 0.06)"
                  ></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden p-4 text-center">
                  <LucideIcon
                    name="gem"
                    class-name="w-5 h-5 mx-auto mb-2"
                    style="color: #c6a75e"
                  />
                  <p
                    class="text-[9px] uppercase tracking-widest mb-1"
                    style="color: rgba(198, 167, 94, 0.5)"
                  >
                    Joyería VIP
                  </p>
                  <p
                    class="text-sm font-bold mb-2"
                    style="
                      background: linear-gradient(135deg, #c6a75e, #e8d5a3);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                    "
                  >
                    Oro &amp; Plata
                  </p>
                  <div class="grid grid-cols-2 gap-1.5 mb-2">
                    <div class="h-9 rounded-lg" style="background: rgba(198, 167, 94, 0.08)"></div>
                    <div class="h-9 rounded-lg" style="background: rgba(198, 167, 94, 0.08)"></div>
                  </div>
                  <div
                    class="py-1.5 rounded-full text-[8px] font-bold"
                    style="
                      background: linear-gradient(135deg, #c6a75e, #e8d5a3);
                      color: #0b0b0b;
                    "
                  >
                    Pedir por WhatsApp
                  </div>
                </div>
              </div>
            </RouterLink>
            <div class="text-center">
              <p class="text-xs font-bold mb-1" style="color: #c6a75e">Premium VIP</p>
              <RouterLink
                to="/catalogos-nenis/premium"
                class="inline-flex items-center gap-1 text-[11px] dark:text-text-secondary text-light-muted hover:text-emerald-400 transition"
              >
                Abrir demo
                <LucideIcon name="arrow-right" class-name="w-3 h-3" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 3 · BENEFICIOS ───────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="
        background: linear-gradient(
          180deg,
          rgba(16, 185, 129, 0.04),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            02 / Beneficios
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text max-w-2xl mb-4"
          >
            Por qué tu negocio lo necesita
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl">
            Cuatro razones por las que vender con catálogo digital cambia tu
            día a día — y tu bolsillo.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="b in benefits"
            :key="b.title"
            class="p-6 rounded-2xl border transition hover:-translate-y-1"
            style="
              background: rgba(16, 185, 129, 0.04);
              border-color: rgba(16, 185, 129, 0.18);
            "
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(5, 150, 105, 0.18),
                  rgba(16, 185, 129, 0.1)
                );
              "
            >
              <LucideIcon
                :name="b.icon"
                class-name="w-5 h-5"
                style="color: #6ee7b7"
              />
            </div>
            <h3
              class="font-semibold dark:text-white text-light-text text-sm mb-2"
            >
              {{ b.title }}
            </h3>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
            >
              {{ b.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 · ESTILOS ──────────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            03 / Estilos &amp; nichos
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            Adaptado a tu tipo de negocio
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Partimos de un estilo base y lo personalizamos con tu marca, fotos
            y categorías.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="theme in themes"
            :key="theme.id"
            class="group relative p-6 rounded-2xl border overflow-hidden transition hover:-translate-y-1"
            style="
              background: rgba(16, 185, 129, 0.03);
              border-color: rgba(16, 185, 129, 0.15);
            "
          >
            <div class="flex gap-1.5 mb-5">
              <div
                v-for="color in theme.palette"
                :key="color"
                class="w-8 h-8 rounded-lg border"
                :style="`background: ${color}; border-color: rgba(255, 255, 255, 0.08)`"
              ></div>
            </div>

            <div class="flex items-start gap-3 mb-2">
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style="background: rgba(16, 185, 129, 0.12)"
              >
                <LucideIcon
                  :name="theme.icon"
                  class-name="w-4 h-4"
                  style="color: #6ee7b7"
                />
              </div>
              <h3
                class="font-semibold dark:text-white text-light-text text-base pt-1.5"
              >
                {{ theme.name }}
              </h3>
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
            >
              {{ theme.desc }}
            </p>

            <div
              class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(16, 185, 129, 0.15),
                  transparent 60%
                );
              "
            ></div>
          </div>
        </div>

        <p
          class="text-center text-xs dark:text-text-secondary/60 text-light-muted/60 mt-10"
        >
          ¿Tu negocio es distinto? Lo diseñamos desde cero contigo.
        </p>
      </div>
    </section>

    <!-- ─── 5 · CÓMO FUNCIONA ────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="
        background: linear-gradient(
          180deg,
          rgba(5, 150, 105, 0.04),
          transparent
        );
      "
    >
      <div class="max-w-5xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            04 / Cómo funciona
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            De tus productos a tus primeros pedidos, en 3 pasos
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Tú nos das la info. Nosotros te entregamos un catálogo listo para
            vender.
          </p>
        </div>

        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px border-t border-dashed"
            style="border-color: rgba(16, 185, 129, 0.25)"
          ></div>

          <div
            v-for="step in steps"
            :key="step.num"
            class="relative text-center"
          >
            <div
              class="inline-flex items-center justify-center w-20 h-20 rounded-2xl border mb-5 mx-auto relative z-10"
              style="
                background: rgba(6, 20, 14, 0.6);
                border-color: rgba(16, 185, 129, 0.3);
                box-shadow: 0 10px 30px -10px rgba(5, 150, 105, 0.4);
              "
            >
              <LucideIcon
                :name="step.icon"
                class-name="w-7 h-7"
                style="color: #6ee7b7"
              />
            </div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: rgba(16, 185, 129, 0.7)"
            >
              PASO {{ step.num }}
            </p>
            <h3
              class="font-display font-bold dark:text-white text-light-text text-lg mb-2"
            >
              {{ step.title }}
            </h3>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed max-w-xs mx-auto"
            >
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6 · QUÉ INCLUYE ──────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
              style="color: rgba(16, 185, 129, 0.7)"
            >
              05 / Qué incluye
            </p>
            <h2
              class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
            >
              Todo lo que viene con tu catálogo
            </h2>
            <p
              class="dark:text-text-secondary text-light-muted max-w-xl mb-8 leading-relaxed"
            >
              Cero sorpresas en la entrega. Esto es lo que recibes listo para
              compartir y vender.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="bonus in [
                  'Demo con tus productos',
                  'Asesoría en fotografía',
                  'Plantillas de venta',
                  'Soporte WhatsApp',
                ]"
                :key="bonus"
                class="px-3 py-1.5 rounded-full text-xs font-medium"
                style="
                  background: rgba(16, 185, 129, 0.08);
                  border: 1px solid rgba(16, 185, 129, 0.2);
                  color: #6ee7b7;
                "
              >
                <LucideIcon name="gift" class-name="w-3 h-3 inline mr-1" />{{
                  bonus
                }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="item in includes"
              :key="item.text"
              class="flex items-start gap-3 p-4 rounded-xl border"
              style="
                background: rgba(16, 185, 129, 0.03);
                border-color: rgba(16, 185, 129, 0.15);
              "
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style="background: rgba(16, 185, 129, 0.12)"
              >
                <LucideIcon
                  :name="item.icon"
                  class-name="w-4 h-4"
                  style="color: #6ee7b7"
                />
              </div>
              <p
                class="text-xs dark:text-text-primary text-light-text font-medium leading-snug pt-1"
              >
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 7 · PRECIOS ──────────────────────────────────── -->
    <section
      class="px-6 py-24"
      id="precios"
      style="
        background: linear-gradient(
          180deg,
          rgba(16, 185, 129, 0.06),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            06 / Precios
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            Elige tu plan ideal
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Pago único — sin mensualidades ni comisiones. Desde lo básico hasta
            la experiencia VIP con múltiples vendedoras.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="relative flex flex-col rounded-2xl overflow-hidden transition"
            :class="pkg.highlighted ? 'border-2' : 'border'"
            :style="
              pkg.highlighted
                ? 'border-color: #10b981; background: linear-gradient(145deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04)); box-shadow: 0 30px 80px -20px rgba(5, 150, 105, 0.4)'
                : pkg.vip
                  ? 'border-color: rgba(198, 167, 94, 0.3); background: rgba(198, 167, 94, 0.03)'
                  : 'border-color: rgba(16, 185, 129, 0.15); background: rgba(16, 185, 129, 0.02)'
            "
          >
            <div
              v-if="pkg.badge"
              class="absolute top-0 right-0 py-1.5 px-4 text-white text-xs font-bold rounded-bl-xl"
              :style="
                pkg.vip
                  ? 'background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b'
                  : 'background: linear-gradient(135deg, #059669, #10b981)'
              "
            >
              <span class="inline-flex items-center gap-1">
                {{ pkg.badge }}
                <LucideIcon
                  :name="pkg.vip ? 'gem' : 'flame'"
                  class-name="w-3.5 h-3.5"
                />
              </span>
            </div>

            <div class="p-8 flex-1" :class="pkg.badge ? 'pt-12' : ''">
              <h3
                class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
              >
                {{ pkg.name }}
              </h3>
              <p class="text-sm dark:text-text-secondary text-light-muted mb-6">
                {{ pkg.tagline }}
              </p>

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
                  class="text-xs font-mono mt-1"
                  style="color: rgba(16, 185, 129, 0.55)"
                >
                  {{ pkg.validity }}
                </p>
              </div>

              <ul class="space-y-2.5 mb-5">
                <li
                  v-for="f in pkg.features"
                  :key="f"
                  class="flex items-start gap-2.5 text-sm dark:text-text-primary text-light-text"
                >
                  <LucideIcon
                    :name="pkg.vip ? 'sparkles' : 'check'"
                    class-name="w-4 h-4 mt-0.5 shrink-0"
                    :style="pkg.vip ? 'color: #c6a75e' : 'color: #10b981'"
                  />
                  {{ f }}
                </li>
              </ul>

              <ul
                v-if="pkg.excluded?.length"
                class="space-y-2 border-t pt-4"
                style="border-color: rgba(16, 185, 129, 0.15)"
              >
                <li
                  v-for="ex in pkg.excluded"
                  :key="ex"
                  class="flex items-start gap-2.5 text-xs dark:text-text-secondary/45 text-light-muted/55 line-through"
                >
                  <LucideIcon
                    name="minus"
                    class-name="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-60"
                  />
                  {{ ex }}
                </li>
              </ul>
            </div>

            <div class="px-8 pb-8 flex flex-col gap-2.5">
              <a
                :href="pkg.wa"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center px-4 py-3 rounded-xl font-bold text-sm transition"
                :style="
                  pkg.highlighted
                    ? 'background: linear-gradient(135deg, #059669, #10b981); color: white; box-shadow: 0 8px 24px rgba(5, 150, 105, 0.35)'
                    : pkg.vip
                      ? 'background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b'
                      : 'background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); color: #6ee7b7'
                "
              >
                <span class="inline-flex items-center gap-2">
                  Contratar {{ pkg.name }}
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </span>
              </a>
              <RouterLink
                :to="pkg.demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl border text-sm font-semibold transition"
                style="
                  border-color: rgba(16, 185, 129, 0.2);
                  color: rgba(110, 231, 183, 0.85);
                "
              >
                <span class="inline-flex items-center gap-2">
                  <LucideIcon name="eye" class-name="w-4 h-4" />
                  Ver demo
                </span>
              </RouterLink>
            </div>
          </div>
        </div>

        <p
          class="text-center mt-10 text-xs dark:text-text-secondary/60 text-light-muted/60"
        >
          <LucideIcon
            name="shield-check"
            class-name="w-3.5 h-3.5 inline mr-1"
            style="color: #10b981"
          />
          Garantía de satisfacción · Si no vendes más, te ayudamos a mejorar tu
          catálogo gratis.
        </p>
      </div>
    </section>

    <!-- ─── 8 · FAQ ──────────────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-3xl mx-auto">
        <div class="mb-12 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            07 / Preguntas frecuentes
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
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
            :style="
              openFaq === i
                ? 'border-color: rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.04)'
                : 'border-color: rgba(16, 185, 129, 0.12); background: rgba(16, 185, 129, 0.02)'
            "
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span
                class="dark:text-white text-light-text font-semibold text-sm"
                >{{ faq.q }}</span
              >
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                class-name="w-4 h-4 shrink-0 transition"
                :style="
                  openFaq === i
                    ? 'color: #10b981'
                    : 'color: rgba(16, 185, 129, 0.5)'
                "
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p
                class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
              >
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
            class="inline-flex items-center gap-2 text-sm font-semibold transition"
            style="color: #10b981"
          >
            ¿Tienes otra pregunta? Escríbenos
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 9 · TESTIMONIOS ──────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="
        background: linear-gradient(
          180deg,
          rgba(16, 185, 129, 0.05),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            08 / Testimonios
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            Lo que dicen nuestras clientas
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="relative p-7 rounded-2xl border flex flex-col"
            style="
              background: rgba(16, 185, 129, 0.04);
              border-color: rgba(16, 185, 129, 0.15);
            "
          >
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="s in t.stars"
                :key="s"
                name="star"
                class-name="w-4 h-4"
                style="color: #c6a75e; fill: #c6a75e"
              />
            </div>
            <p
              class="dark:text-text-primary text-light-text leading-relaxed text-sm mb-6 flex-1 italic"
            >
              "{{ t.quote }}"
            </p>
            <div
              class="flex items-center gap-3 pt-5 border-t"
              style="border-color: rgba(16, 185, 129, 0.15)"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                style="background: linear-gradient(135deg, #059669, #10b981)"
              >
                {{ t.avatar }}
              </div>
              <div>
                <p
                  class="dark:text-white text-light-text font-semibold text-sm"
                >
                  {{ t.name }}
                </p>
                <p
                  class="text-xs dark:text-text-secondary/60 text-light-muted/60"
                >
                  {{ t.event }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 10 · CTA FINAL ───────────────────────────────── -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none"
        style="
          background: radial-gradient(
            ellipse at center,
            rgba(5, 150, 105, 0.18),
            transparent 65%
          );
        "
      ></div>

      <div class="relative max-w-3xl mx-auto">
        <div
          class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8 border"
          style="
            background: rgba(16, 185, 129, 0.1);
            border-color: rgba(16, 185, 129, 0.25);
          "
        >
          <LucideIcon
            name="shopping-bag"
            class-name="w-8 h-8"
            style="color: #10b981"
          />
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight"
        >
          <span class="dark:text-white text-light-text"
            >Empieza a vender más con tu
          </span>
          <span
            class="bg-clip-text text-transparent"
            style="
              background-image: linear-gradient(
                135deg,
                #10b981,
                #059669,
                #6ee7b7
              );
            "
            >catálogo digital</span
          >
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted mb-10 text-lg max-w-xl mx-auto"
        >
          Solicita tu demo gratis por WhatsApp y deja de perder ventas por no
          tener todo organizado.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="
              background: linear-gradient(135deg, #059669, #10b981);
              box-shadow: 0 8px 32px rgba(5, 150, 105, 0.4);
            "
          >
            <LucideIcon name="sparkles" class-name="w-4 h-4" />
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all border"
            style="
              border-color: rgba(16, 185, 129, 0.35);
              color: #6ee7b7;
              background: rgba(16, 185, 129, 0.04);
            "
          >
            Cotizar mi catálogo
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/60 text-light-muted/60"
        >
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="shield-check"
              class-name="w-3.5 h-3.5"
              style="color: rgba(16, 185, 129, 0.7)"
            />
            Garantía de satisfacción
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="clock-4"
              class-name="w-3.5 h-3.5"
              style="color: rgba(16, 185, 129, 0.7)"
            />
            Listo en 1–4 semanas
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="message-circle"
              class-name="w-3.5 h-3.5"
              style="color: rgba(16, 185, 129, 0.7)"
            />
            Soporte en español
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
