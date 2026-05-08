<script setup>
/**
 * Landing: Catálogo Digital para vendedoras / Nenis
 * Palette: emerald (matches navbar #10b981)
 * Style: Stripe — refined cards, glass, depth, premium polish
 * Section order: Hero · Demo navegable · Beneficios · Categorías/filtros · WhatsApp pedidos · Integraciones · Casos reales · Pricing · FAQ · CTA
 */
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const wa = (m) => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const waDemo = wa("¡Hola! Me interesa un catálogo digital para mi negocio de ventas 🛍️");
const waContratar = wa("Quiero cotizar mi catálogo digital de productos 🛍️");
const waBasico = wa("¡Hola! Me interesa el catálogo digital plan Básico ($1,499 MXN) 🛍️");
const waPro = wa("¡Hola! Me interesa el catálogo digital plan Pro ($3,499 MXN) ✨");
const waPremium = wa("¡Hola! Me interesa el catálogo digital plan Premium VIP ($6,999 MXN) 💎");

const openFaq = ref(null);
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i };

const benefits = [
  {
    icon: "shopping-bag",
    title: "Vende sin pagar comisiones",
    desc: "Olvídate del 12% de Mercado Libre o el 20% de marketplaces. El cliente te paga directo a ti.",
  },
  {
    icon: "send",
    title: "Comparte con un solo link",
    desc: "Un link en tu bio, en stories, en WhatsApp. Tus productos siempre disponibles 24/7.",
  },
  {
    icon: "trending-up",
    title: "Ticket promedio más alto",
    desc: "Cuando ven todo el catálogo, compran más cosas en un solo pedido. Adiós ventas de un solo producto.",
  },
  {
    icon: "clock",
    title: "Ahorra horas al día",
    desc: "Deja de mandar fotos y precios uno por uno. El catálogo responde por ti, hasta cuando duermes.",
  },
];

const categoryDemo = [
  { name: "Todo", count: 48, active: true },
  { name: "Ropa", count: 22, active: false },
  { name: "Accesorios", count: 14, active: false },
  { name: "Maquillaje", count: 12, active: false },
];

const filterFeatures = [
  { icon: "boxes", title: "Categorías y subcategorías", desc: "Organiza por tipo, ocasión o temporada — sin límites." },
  { icon: "search", title: "Buscador en vivo", desc: "Tus clientas encuentran productos en segundos por nombre o tag." },
  { icon: "ruler", title: "Filtros por talla y color", desc: "Filtra ropa por talla, accesorios por color, maquillaje por tono." },
  { icon: "tag", title: "Etiquetas: nuevo, popular, oferta", desc: "Resalta lo importante con badges automáticos en cada producto." },
  { icon: "package-search", title: "Control de stock visual", desc: "Marca productos agotados en tiempo real para no decepcionar a nadie." },
  { icon: "sparkles", title: "Productos destacados", desc: "Pin de tus best sellers arriba del catálogo. Tú decides qué se ve primero." },
];

const integrations = [
  { name: "WhatsApp Business", icon: "message-circle", desc: "Pedidos directos a tu número con todo formateado." },
  { name: "Instagram", icon: "instagram", desc: "Link en bio + posts shoppables que llevan a productos." },
  { name: "Mercado Pago", icon: "credit-card", desc: "Cobra en línea con tarjeta o transferencia (plan Premium)." },
  { name: "Google", icon: "globe", desc: "SEO local para que te encuentren al buscar tu producto en tu zona." },
  { name: "TikTok", icon: "play", desc: "Link en bio que dispara conversiones desde tus videos virales." },
  { name: "Hojas de cálculo", icon: "file-text", desc: "Importa/exporta tu inventario a Excel o Google Sheets." },
];

const testimonials = [
  {
    name: "Paola Ruiz",
    handle: "@modaparapaola",
    avatar: "P",
    quote: "Ahora mis clientas ven todo mi catálogo y me piden directo. Me triplicaron las ventas y dejé de pasar 3 horas mandando fotos cada noche.",
    metric: "3× ventas en 60 días",
    stars: 5,
  },
  {
    name: "Fernanda López",
    handle: "@accesorios_df",
    avatar: "F",
    quote: "El control de stock me cambió la vida. Ya no vendo cosas que no tengo, ni decepciono a nadie. Y los filtros por color son lo más para mis aretes.",
    metric: "0 cancelaciones por stock",
    stars: 5,
  },
  {
    name: "Karla Méndez",
    handle: "@kosmetiks_mx",
    avatar: "K",
    quote: "Me ahorro tiempo y ya no pierdo ventas por no contestar rápido. Mis clientas piden a las 11 PM y al otro día solo confirmo y empaco.",
    metric: "+40% ticket promedio",
    stars: 5,
  },
];

const catalogPackages = [
  {
    name: "Básico",
    price: "$1,499",
    tagline: "Para empezar a vender de forma profesional",
    wa: waBasico,
    highlighted: false,
    badge: null,
    vip: false,
    icon: "shopping-bag",
    features: [
      "Hasta 50 productos",
      "1 categoría",
      "Galería 2 fotos por producto",
      "Control de precios",
      "Link compartible",
      "Botón de WhatsApp",
      "Diseño responsive",
      "Entrega: 1 semana",
    ],
    excluded: ["Productos ilimitados", "Categorías ilimitadas", "5 fotos por producto", "Tallas y colores", "Stock", "Buscador", "Panel admin", "Múltiples vendedoras", "Cupones", "Reportes", "Dominio propio", "Pagos en línea"],
  },
  {
    name: "Pro",
    price: "$3,499",
    tagline: "Para vendedoras que ya venden fuerte y quieren crecer",
    wa: waPro,
    highlighted: true,
    badge: "Más popular",
    vip: false,
    icon: "store",
    features: [
      "Todo lo del Básico",
      "Productos ilimitados",
      "Categorías ilimitadas",
      "Hasta 5 fotos por producto",
      "Control de tallas y colores",
      "Control de stock",
      "Buscador de productos",
      "Panel admin completo",
      "Entrega: 2 semanas",
    ],
    excluded: ["Múltiples vendedoras", "Cupones", "Reportes", "Dominio propio", "Notificaciones WA", "Pagos en línea"],
  },
  {
    name: "Premium VIP",
    price: "$6,999",
    tagline: "Para negocios serios con múltiples vendedoras",
    wa: waPremium,
    highlighted: false,
    badge: "VIP",
    vip: true,
    icon: "gem",
    features: [
      "Todo lo del Pro",
      "Múltiples vendedoras (catálogos)",
      "Cupones y descuentos",
      "Reportes de productos más vistos",
      "Dominio personalizado",
      "Notificaciones por WhatsApp",
      "Integración pagos en línea",
      "Soporte prioritario",
      "Entrega: 3–4 semanas",
    ],
    excluded: [],
  },
];

const faqs = [
  { q: "¿En cuánto tiempo está listo mi catálogo?", a: "Básico en 1 semana, Pro en 2 semanas y Premium VIP en 3–4 semanas. Depende de qué tan rápido nos compartas tus fotos y precios." },
  { q: "¿Puedo actualizar mis productos yo misma?", a: "En Pro y Premium VIP sí — incluimos un panel sencillo para que agregues, edites o quites productos cuando quieras. En Básico, los cambios los gestionamos nosotros." },
  { q: "¿Mis clientas necesitan descargar una app?", a: "No. El catálogo es una página web que se abre en cualquier celular. Solo compartes el link y listo — cero descargas, cero registros." },
  { q: "¿Cobro comisiones por venta?", a: "No. Es pago único por el catálogo y todas las ventas son tuyas al 100%. No hay comisiones por pedido ni por mes (excepto el hosting anual a partir del segundo año)." },
  { q: "¿Cómo recibo los pedidos?", a: "Tus clientas arman su carrito y al pagar te llega el pedido formateado a tu WhatsApp con productos, cantidades y notas. En el Premium VIP también puedes recibir pago en línea con tarjeta." },
  { q: "¿Puedo subir cuántos productos quiera?", a: "Básico hasta 50 productos. Pro y Premium VIP son ilimitados. Cada producto puede tener fotos, descripción, tallas y colores." },
  { q: "¿Qué pasa si vendo en grupo / con otras vendedoras?", a: "El Premium VIP soporta múltiples catálogos por vendedora con un dashboard central donde tú ves las ventas de cada una. Ideal para emprendedoras que crecieron a equipo." },
  { q: "¿Funciona con Mercado Pago / pagos con tarjeta?", a: "Sí, en el Premium VIP integramos pagos en línea con Mercado Pago. Tus clientas pagan con tarjeta u OXXO y el dinero llega directo a tu cuenta." },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div
        class="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full opacity-25"
        style="background: radial-gradient(ellipse, #10b981 0%, transparent 65%)"
      ></div>

      <div class="relative text-center">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-medium"
          style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399"
        >
          <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background: #10b981"></span>
          Catálogos Digitales · Sin comisiones
        </div>

        <h1
          class="font-display text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.04] tracking-tight mb-7 max-w-5xl mx-auto"
        >
          <span class="dark:text-white text-light-text">Vende más con tu propio </span>
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)"
          >catálogo digital</span>
        </h1>

        <p class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Crea tu catálogo online, fácil de compartir y sin comisiones.
          Organiza tus productos, recibe pedidos directo a WhatsApp y cobra hasta con tarjeta.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          <RouterLink
            to="/catalogos-nenis/demo"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #059669, #10b981); box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4)"
          >
            <LucideIcon name="play" class-name="w-4 h-4" />
            Ver demo gratis
          </RouterLink>
          <a
            :href="waContratar" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border font-semibold text-sm transition"
            style="border-color: rgba(16, 185, 129, 0.3); color: #34d399; background: rgba(16, 185, 129, 0.04)"
          >
            Quiero el mío
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/70 text-light-muted/70">
          <span class="flex items-center gap-1.5">
            <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #10b981" />
            Sin comisiones por venta
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #10b981" />
            Pedidos directos a WhatsApp
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #10b981" />
            Entrega 1–2 semanas
          </span>
        </div>
      </div>
    </section>

    <!-- ─── 2 · DEMO NAVEGABLE ───────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
              01 / Demo navegable
            </p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-5 leading-tight">
              Tócalo, navégalo, pídelo
            </h2>
            <p class="dark:text-text-secondary text-light-muted mb-8 leading-relaxed">
              Esta es una demo real con productos, fotos, precios, filtros y botón de WhatsApp.
              Exactamente así se va a ver el tuyo.
            </p>
            <RouterLink
              to="/catalogos-nenis/demo"
              class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style="background: linear-gradient(135deg, #059669, #10b981); box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3)"
            >
              <LucideIcon name="smartphone" class-name="w-4 h-4" />
              Abrir demo en vivo
              <LucideIcon name="arrow-right" class-name="w-4 h-4" />
            </RouterLink>

            <div class="mt-8 grid grid-cols-2 gap-3">
              <div
                v-for="chip in [
                  { icon: 'search', text: 'Buscador en vivo' },
                  { icon: 'tag', text: 'Filtros y categorías' },
                  { icon: 'shopping-bag', text: 'Carrito de compras' },
                  { icon: 'message-circle', text: 'Pedido a WhatsApp' },
                ]"
                :key="chip.text"
                class="flex items-center gap-2 p-3 rounded-lg border"
                style="background: rgba(16, 185, 129, 0.04); border-color: rgba(16, 185, 129, 0.15)"
              >
                <LucideIcon :name="chip.icon" class-name="w-4 h-4" style="color: #34d399" />
                <span class="text-xs font-semibold dark:text-white text-light-text">{{ chip.text }}</span>
              </div>
            </div>
          </div>

          <!-- Phone mockup -->
          <div class="flex justify-center">
            <div class="relative">
              <div
                class="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-40"
                style="background: linear-gradient(135deg, #10b981, #34d399)"
              ></div>
              <div
                class="relative w-72 rounded-[2.5rem] border p-3 shadow-2xl overflow-hidden"
                style="border-color: rgba(16, 185, 129, 0.2); background: linear-gradient(180deg, #f0fdf4, #ecfdf5, #f0fdfa)"
              >
                <div class="flex items-center justify-between px-4 py-1.5 text-[9px]" style="color: #059669">
                  <span>9:41</span>
                  <div class="w-16 h-4 rounded-full" style="background: rgba(16, 185, 129, 0.06)"></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden" style="background: white">
                  <!-- Store header -->
                  <div
                    class="p-4 pb-3 text-center"
                    style="background: linear-gradient(180deg, #f0fdf4, white)"
                  >
                    <div
                      class="w-12 h-12 rounded-2xl mx-auto mb-2 flex items-center justify-center"
                      style="background: linear-gradient(135deg, #10b981, #059669)"
                    >
                      <LucideIcon name="shopping-bag" class-name="w-6 h-6 text-white" />
                    </div>
                    <p class="text-sm font-bold" style="color: #1f2937">Boutique Lupita ✨</p>
                    <p class="text-[9px]" style="color: #9ca3af">Ropa y accesorios de moda</p>
                    <div class="flex justify-center gap-2 mt-2">
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px]"
                        style="background: #f0fdf4; color: #059669">
                        <LucideIcon name="map-pin" class-name="w-2.5 h-2.5" /> CDMX
                      </span>
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px]"
                        style="background: #ecfdf5; color: #10b981">
                        <LucideIcon name="truck" class-name="w-2.5 h-2.5" /> Envíos
                      </span>
                    </div>
                  </div>

                  <!-- Search -->
                  <div class="px-4 pb-2">
                    <div
                      class="flex items-center gap-2 px-3 py-2 rounded-xl mb-3"
                      style="background: #f9fafb; border: 1px solid #f3f4f6"
                    >
                      <LucideIcon name="search" class-name="w-3 h-3" style="color: #d1d5db" />
                      <span class="text-[9px]" style="color: #d1d5db">Buscar productos...</span>
                    </div>
                    <div class="flex gap-1.5 overflow-hidden">
                      <span class="shrink-0 px-2.5 py-1 rounded-full text-[9px] font-semibold text-white"
                        style="background: #10b981">Todo</span>
                      <span class="shrink-0 px-2.5 py-1 rounded-full text-[9px]"
                        style="background: #f0fdf4; color: #10b981">Ropa</span>
                      <span class="shrink-0 px-2.5 py-1 rounded-full text-[9px]"
                        style="background: #f0fdf4; color: #10b981">Accesorios</span>
                    </div>
                  </div>

                  <!-- Products -->
                  <div class="px-4 pb-4 grid grid-cols-2 gap-2">
                    <div
                      v-for="product in [
                        { name: 'Bolsa Elegante', price: '$350', tag: 'Nuevo' },
                        { name: 'Aretes Dorados', price: '$120', tag: null },
                        { name: 'Set Maquillaje', price: '$580', tag: 'Popular' },
                        { name: 'Blusa Boho', price: '$290', tag: null },
                      ]"
                      :key="product.name"
                      class="rounded-xl overflow-hidden"
                      style="background: #fafafa; border: 1px solid #f3f4f6"
                    >
                      <div class="h-16 flex items-center justify-center"
                        style="background: linear-gradient(135deg, #f0fdf4, #ecfdf5)">
                        <LucideIcon name="shopping-bag" class-name="w-5 h-5"
                          style="color: rgba(16, 185, 129, 0.4)" />
                      </div>
                      <div class="p-2">
                        <div class="flex items-center gap-1 mb-0.5">
                          <p class="text-[10px] font-semibold" style="color: #1f2937">{{ product.name }}</p>
                          <span v-if="product.tag"
                            class="px-1 py-0.5 rounded text-[7px] font-bold text-white"
                            :style="product.tag === 'Nuevo' ? 'background: #10b981' : 'background: #059669'"
                          >{{ product.tag }}</span>
                        </div>
                        <p class="text-[10px] font-bold" style="color: #059669">{{ product.price }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- WhatsApp CTA -->
                  <div class="px-4 pb-4">
                    <div
                      class="py-2.5 rounded-xl text-center text-[11px] font-bold text-white flex items-center justify-center gap-1.5"
                      style="background: linear-gradient(135deg, #10b981, #059669)"
                    >
                      <LucideIcon name="message-circle" class-name="w-3.5 h-3.5" />
                      Pedir por WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 3 · BENEFICIOS COMERCIALES ──────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(16, 185, 129, 0.05), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
            02 / Beneficios comerciales
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Lo que cambia cuando tienes tu catálogo
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            No es solo verse profesional. Es vender más, sin pagar comisiones, ahorrando horas al día.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="b in benefits"
            :key="b.title"
            class="p-6 rounded-2xl border transition hover:-translate-y-1"
            style="background: rgba(16, 185, 129, 0.03); border-color: rgba(16, 185, 129, 0.18)"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.18), rgba(16, 185, 129, 0.08))"
            >
              <LucideIcon :name="b.icon" class-name="w-5 h-5" style="color: #34d399" />
            </div>
            <h3 class="font-semibold dark:text-white text-light-text text-sm mb-2">{{ b.title }}</h3>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 · CATEGORÍAS Y FILTROS ────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <!-- Mock filter UI -->
          <div
            class="rounded-2xl border p-6"
            style="background: rgba(11, 25, 17, 0.5); border-color: rgba(16, 185, 129, 0.2)"
          >
            <p class="text-xs font-mono mb-4" style="color: rgba(16, 185, 129, 0.7)">Vista del catálogo</p>

            <!-- Category pills -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="cat in categoryDemo"
                :key="cat.name"
                class="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition"
                :style="cat.active
                  ? 'background: linear-gradient(135deg, #10b981, #059669); color: white; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4)'
                  : 'background: rgba(16, 185, 129, 0.08); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2)'"
              >
                {{ cat.name }}
                <span class="opacity-60">{{ cat.count }}</span>
              </span>
            </div>

            <!-- Filter row -->
            <div class="flex flex-wrap gap-2 mb-5 pb-5 border-b" style="border-color: rgba(16, 185, 129, 0.1)">
              <span class="px-2.5 py-1 rounded-md text-[11px] font-mono"
                style="background: rgba(16, 185, 129, 0.05); color: rgba(255, 255, 255, 0.6); border: 1px solid rgba(16, 185, 129, 0.12)">
                Talla: M
              </span>
              <span class="px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center gap-1.5"
                style="background: rgba(16, 185, 129, 0.05); color: rgba(255, 255, 255, 0.6); border: 1px solid rgba(16, 185, 129, 0.12)">
                Color: <span class="w-2.5 h-2.5 rounded-full" style="background: #ec4899"></span> Rosa
              </span>
              <span class="px-2.5 py-1 rounded-md text-[11px] font-mono"
                style="background: rgba(16, 185, 129, 0.05); color: rgba(255, 255, 255, 0.6); border: 1px solid rgba(16, 185, 129, 0.12)">
                Precio: $200–500
              </span>
            </div>

            <!-- Mock product grid -->
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="i in 4" :key="i"
                class="rounded-xl overflow-hidden border"
                style="background: rgba(255, 255, 255, 0.03); border-color: rgba(16, 185, 129, 0.1)"
              >
                <div class="aspect-square flex items-center justify-center"
                  style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04))">
                  <LucideIcon name="shopping-bag" class-name="w-8 h-8" style="color: rgba(16, 185, 129, 0.3)" />
                </div>
                <div class="p-3">
                  <div class="flex items-center justify-between gap-2">
                    <p class="text-xs font-semibold dark:text-white text-light-text truncate">Producto {{ i }}</p>
                    <span v-if="i === 1" class="px-1.5 py-0.5 rounded text-[8px] font-bold text-white"
                      style="background: #10b981">Nuevo</span>
                  </div>
                  <p class="text-xs font-bold mt-1" style="color: #34d399">${{ 290 + i * 70 }}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
              03 / Categorías &amp; filtros
            </p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-5 leading-tight">
              Tus clientas encuentran lo que buscan
            </h2>
            <p class="dark:text-text-secondary text-light-muted mb-8 leading-relaxed">
              Cuanto más fácil de buscar, más comprar. Filtros por categoría, talla, color y stock —
              todo nativo, sin scroll infinito.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="f in filterFeatures"
                :key="f.title"
                class="flex gap-3 p-4 rounded-xl border"
                style="background: rgba(16, 185, 129, 0.03); border-color: rgba(16, 185, 129, 0.12)"
              >
                <div
                  class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style="background: rgba(16, 185, 129, 0.1)"
                >
                  <LucideIcon :name="f.icon" class-name="w-4 h-4" style="color: #34d399" />
                </div>
                <div>
                  <h3 class="dark:text-white text-light-text font-semibold text-xs mb-1">{{ f.title }}</h3>
                  <p class="text-[11px] dark:text-text-secondary text-light-muted leading-snug">{{ f.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 5 · WHATSAPP PEDIDOS ─────────────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
            04 / Pedidos por WhatsApp
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Del catálogo a tu chat, formateado
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Tus clientas arman su carrito y al confirmar te llega el pedido completo: productos, cantidades, talla, color, dirección. Todo.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <!-- Cart preview -->
          <div
            class="rounded-2xl border p-6"
            style="background: rgba(11, 25, 17, 0.5); border-color: rgba(16, 185, 129, 0.2)"
          >
            <p class="text-xs font-mono mb-4 flex items-center gap-2" style="color: rgba(16, 185, 129, 0.7)">
              <LucideIcon name="shopping-cart" class-name="w-3.5 h-3.5" />
              Carrito de la clienta
            </p>
            <div class="space-y-3">
              <div
                v-for="item in [
                  { name: 'Blusa Boho', size: 'M · Rosa', qty: 1, price: 290 },
                  { name: 'Aretes Dorados', size: '—', qty: 2, price: 240 },
                  { name: 'Bolsa Elegante', size: 'Beige', qty: 1, price: 350 },
                ]"
                :key="item.name"
                class="flex items-center gap-3 p-3 rounded-xl border"
                style="background: rgba(16, 185, 129, 0.03); border-color: rgba(16, 185, 129, 0.1)"
              >
                <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                  style="background: rgba(16, 185, 129, 0.1)">
                  <LucideIcon name="shopping-bag" class-name="w-4 h-4" style="color: #34d399" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-semibold dark:text-white text-light-text truncate">{{ item.name }}</p>
                  <p class="text-[10px]" style="color: rgba(255, 255, 255, 0.5)">{{ item.size }} · ×{{ item.qty }}</p>
                </div>
                <p class="text-xs font-bold" style="color: #34d399">${{ item.price }}</p>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t flex items-center justify-between" style="border-color: rgba(16, 185, 129, 0.15)">
              <span class="text-xs dark:text-text-secondary text-light-muted">Total</span>
              <span class="font-display text-xl font-bold" style="color: #34d399">$880 MXN</span>
            </div>
          </div>

          <div class="hidden lg:flex flex-col items-center">
            <LucideIcon name="arrow-right" class-name="w-8 h-8" style="color: #10b981" />
          </div>

          <!-- WhatsApp formatted message -->
          <div
            class="rounded-2xl p-6 border"
            style="background: rgba(11, 25, 17, 0.5); border-color: rgba(34, 197, 94, 0.25)"
          >
            <div class="flex items-center gap-3 mb-4 pb-4 border-b" style="border-color: rgba(34, 197, 94, 0.15)">
              <div class="w-10 h-10 rounded-full flex items-center justify-center"
                style="background: rgba(34, 197, 94, 0.2)">
                <LucideIcon name="message-circle" class-name="w-5 h-5" style="color: #22c55e" />
              </div>
              <div>
                <p class="dark:text-white text-light-text font-semibold text-sm">@ana_clienta</p>
                <p class="text-xs" style="color: rgba(34, 197, 94, 0.8)">● enviado · pedido nuevo</p>
              </div>
            </div>
            <div
              class="rounded-xl p-4 text-xs font-mono leading-relaxed"
              style="background: rgba(34, 197, 94, 0.06); color: rgba(255, 255, 255, 0.85)"
            >
              <span style="color: #34d399">🛍️ NUEVO PEDIDO · BOUTIQUE LUPITA</span><br><br>
              · Blusa Boho — Talla M · Rosa<br>
              · Aretes Dorados ×2<br>
              · Bolsa Elegante — Beige<br><br>
              <span style="color: rgba(255, 255, 255, 0.6)">Envío a: Roma Norte, CDMX</span><br>
              <span style="color: rgba(255, 255, 255, 0.6)">Notas: ¿pueden empacar para regalo?</span><br><br>
              <span style="color: #22c55e">Total: $880 MXN</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6 · INTEGRACIONES ────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
            05 / Integraciones
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Se lleva bien con todas tus herramientas
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Tu catálogo se conecta con donde ya están tus clientas. Sin que tengas que aprender nada nuevo.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div
            v-for="int in integrations"
            :key="int.name"
            class="p-6 rounded-2xl border transition hover:-translate-y-1 group"
            style="background: rgba(16, 185, 129, 0.03); border-color: rgba(16, 185, 129, 0.15)"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition group-hover:scale-110"
              style="background: rgba(16, 185, 129, 0.1)"
            >
              <LucideIcon :name="int.icon" class-name="w-5 h-5" style="color: #34d399" />
            </div>
            <h3 class="dark:text-white text-light-text font-semibold text-sm mb-1.5">{{ int.name }}</h3>
            <p class="text-xs dark:text-text-secondary text-light-muted leading-relaxed">{{ int.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 7 · CASOS REALES ─────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(16, 185, 129, 0.04), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
            06 / Casos reales
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Vendedoras que ya están vendiendo más
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="p-7 rounded-2xl border flex flex-col transition hover:-translate-y-1"
            style="background: rgba(16, 185, 129, 0.03); border-color: rgba(16, 185, 129, 0.15)"
          >
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="s in t.stars" :key="s"
                name="star"
                class-name="w-4 h-4"
                style="color: #10b981; fill: #10b981"
              />
            </div>
            <p class="dark:text-text-primary text-light-text leading-relaxed text-sm mb-5 flex-1">"{{ t.quote }}"</p>
            <div
              class="px-3 py-2 rounded-lg text-xs font-mono mb-5 inline-flex items-center gap-2 self-start"
              style="background: rgba(16, 185, 129, 0.1); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2)"
            >
              <LucideIcon name="trending-up" class-name="w-3.5 h-3.5" />
              {{ t.metric }}
            </div>
            <div class="flex items-center gap-3 pt-5 border-t" style="border-color: rgba(16, 185, 129, 0.15)">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style="background: linear-gradient(135deg, #059669, #10b981)"
              >{{ t.avatar }}</div>
              <div>
                <p class="dark:text-white text-light-text font-semibold text-sm">{{ t.name }}</p>
                <p class="text-xs font-mono" style="color: rgba(16, 185, 129, 0.7)">{{ t.handle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 8 · PRICING ──────────────────────────────────── -->
    <section id="precios" class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
            07 / Pricing
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Elige tu plan
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Pago único, sin comisiones por venta. Desde lo básico hasta multi-vendedora.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in catalogPackages"
            :key="pkg.name"
            class="relative flex flex-col rounded-2xl border p-7 transition"
            :style="pkg.highlighted
              ? 'border-color: #10b981; background: linear-gradient(145deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.02)); box-shadow: 0 30px 80px -20px rgba(16, 185, 129, 0.4); border-width: 2px'
              : pkg.vip
                ? 'border-color: rgba(168, 85, 247, 0.3); background: rgba(168, 85, 247, 0.03)'
                : 'border-color: rgba(16, 185, 129, 0.15); background: rgba(16, 185, 129, 0.02)'"
          >
            <div
              v-if="pkg.badge"
              class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
              :style="pkg.vip
                ? 'background: linear-gradient(135deg, #a855f7, #c084fc); color: white'
                : 'background: linear-gradient(135deg, #059669, #10b981); color: white'"
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
                  ? 'background: rgba(16, 185, 129, 0.18)'
                  : pkg.vip
                    ? 'background: rgba(168, 85, 247, 0.18)'
                    : 'background: rgba(16, 185, 129, 0.1)'"
              >
                <LucideIcon
                  :name="pkg.icon"
                  class-name="w-5 h-5"
                  :style="pkg.vip ? 'color: #c084fc' : 'color: #34d399'"
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
                :style="pkg.vip ? 'color: #c084fc' : 'color: #34d399'"
              >{{ pkg.price }}</span>
              <span class="text-sm dark:text-text-secondary text-light-muted ml-2">MXN · pago único</span>
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
                  :style="pkg.vip ? 'color: #c084fc' : 'color: #10b981'"
                />
                <span class="dark:text-text-primary text-light-text">{{ f }}</span>
              </li>
            </ul>

            <ul
              v-if="pkg.excluded?.length"
              class="space-y-2 mb-5 border-t pt-4"
              style="border-color: rgba(16, 185, 129, 0.15)"
            >
              <li
                v-for="ex in pkg.excluded.slice(0, 4)"
                :key="ex"
                class="flex items-start gap-2 text-xs dark:text-text-secondary/40 text-light-muted/40 line-through"
              >
                <LucideIcon name="minus" class-name="w-3.5 h-3.5 mt-0.5 shrink-0" />
                {{ ex }}
              </li>
              <li
                v-if="pkg.excluded.length > 4"
                class="text-xs dark:text-text-secondary/50 text-light-muted/50 italic pl-5"
              >
                + {{ pkg.excluded.length - 4 }} más
              </li>
            </ul>

            <div class="space-y-2.5">
              <a
                :href="pkg.wa" target="_blank" rel="noopener noreferrer"
                class="block w-full text-center px-4 py-3 rounded-xl font-bold text-sm transition"
                :style="pkg.highlighted
                  ? 'background: linear-gradient(135deg, #059669, #10b981); color: white; box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35)'
                  : pkg.vip
                    ? 'background: linear-gradient(135deg, #a855f7, #c084fc); color: white'
                    : 'background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399'"
              >
                <span class="inline-flex items-center gap-2">
                  Contratar {{ pkg.name }}
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </span>
              </a>
              <RouterLink
                to="/catalogos-nenis/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl border text-sm transition"
                style="border-color: rgba(16, 185, 129, 0.2); color: rgba(52, 211, 153, 0.85)"
              >
                <LucideIcon name="eye" class-name="w-4 h-4 inline mr-2" />
                Ver demo
              </RouterLink>
            </div>
          </div>
        </div>

        <p class="text-center mt-10 text-xs dark:text-text-secondary/60 text-light-muted/60">
          <LucideIcon name="shield-check" class-name="w-3.5 h-3.5 inline mr-1" style="color: #10b981" />
          Garantía de satisfacción · Si no vendes más en el primer mes, optimizamos tu catálogo gratis.
        </p>
      </div>
    </section>

    <!-- ─── 9 · FAQ ──────────────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(16, 185, 129, 0.04), transparent)"
    >
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(16, 185, 129, 0.7)">
            08 / Preguntas frecuentes
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Resolvemos tus dudas
          </h2>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="rounded-2xl border overflow-hidden transition-all"
            :style="openFaq === i
              ? 'border-color: rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.04)'
              : 'border-color: rgba(16, 185, 129, 0.12); background: rgba(16, 185, 129, 0.02)'"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="dark:text-white text-light-text font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                class-name="w-4 h-4 shrink-0 transition"
                :style="openFaq === i ? 'color: #34d399' : 'color: rgba(16, 185, 129, 0.5)'"
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
            style="color: #34d399"
          >
            ¿Tienes otra pregunta? Escríbenos
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 10 · CTA FINAL ───────────────────────────────── -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse at center, rgba(16, 185, 129, 0.18), transparent 65%)"
      ></div>

      <div class="relative max-w-3xl mx-auto">
        <div
          class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8 border"
          style="background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.25)"
        >
          <LucideIcon name="shopping-bag" class-name="w-8 h-8" style="color: #34d399" />
        </div>

        <h2 class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 tracking-tight leading-tight">
          Empieza a vender más
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #10b981, #34d399, #6ee7b7)"
          >hoy mismo</span>
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-10 text-lg max-w-xl mx-auto">
          Tu catálogo digital listo en 1–2 semanas. Sin comisiones por venta, sin complicaciones.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            :href="waDemo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #059669, #10b981); box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4)"
          >
            <LucideIcon name="sparkles" class-name="w-4 h-4" />
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border font-semibold text-sm transition"
            style="border-color: rgba(16, 185, 129, 0.35); color: #34d399; background: rgba(16, 185, 129, 0.04)"
          >
            Quiero mi catálogo
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/60 text-light-muted/60">
          <span class="flex items-center gap-1.5">
            <LucideIcon name="shield-check" class-name="w-3.5 h-3.5" style="color: rgba(16, 185, 129, 0.7)" />
            Sin comisiones por venta
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="clock" class-name="w-3.5 h-3.5" style="color: rgba(16, 185, 129, 0.7)" />
            Entrega 1–2 semanas
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="message-circle" class-name="w-3.5 h-3.5" style="color: rgba(16, 185, 129, 0.7)" />
            Soporte WhatsApp
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
