<script setup>
/**
 * Landing: Invitaciones Web Personalizadas
 * Palette: violet/purple (matches navbar #a78bfa)
 * Style: Stripe — refined gradients, glass, depth, asymmetric layout
 * Section order: Hero · Demo · Benefits · Templates · How · What's included · Pricing · FAQ · Testimonials · CTA
 */
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const waDemo = wa("¡Hola! Me interesa una demo de invitaciones web personalizadas para mi evento 💌");
const waContratar = wa("Quiero cotizar una invitación web personalizada 💌");
const waEsencial = wa("¡Hola! Me interesa contratar el Plan Esencial de invitaciones digitales ($499 MXN) 💌");
const waPro = wa("¡Hola! Me interesa contratar el Plan Pro de invitaciones digitales ($899 MXN) ✨");
const waPremium = wa("¡Hola! Me interesa contratar el Plan Premium de invitaciones digitales ($1,599 MXN) 💎");

const openFaq = ref(null);
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i };

// Themes / templates available
const themes = [
  {
    id: "boda",
    name: "Boda elegante",
    desc: "Tipografía serif, dorados sutiles y galería editorial.",
    palette: ["#fdf2f8", "#fce7f3", "#f5d0fe", "#a78bfa"],
    icon: "heart",
  },
  {
    id: "xv",
    name: "XV años glam",
    desc: "Acentos rosados y dorados con animaciones tipo confetti.",
    palette: ["#fdf2f8", "#f5d0fe", "#d8b4fe", "#7c3aed"],
    icon: "sparkles",
  },
  {
    id: "bautizo",
    name: "Bautizo / baby",
    desc: "Pasteles suaves, tipografía redonda, ilustraciones dulces.",
    palette: ["#eff6ff", "#dbeafe", "#e9d5ff", "#a78bfa"],
    icon: "smile",
  },
  {
    id: "corporate",
    name: "Eventos corporativos",
    desc: "Sobrio, dark mode, ideal para inauguraciones y galas.",
    palette: ["#0b0b0b", "#1e1b4b", "#4c1d95", "#a78bfa"],
    icon: "briefcase",
  },
  {
    id: "minimal",
    name: "Minimal moderno",
    desc: "Mucho espacio, líneas finas, foto de portada protagonista.",
    palette: ["#ffffff", "#f1f5f9", "#e2e8f0", "#7c3aed"],
    icon: "wand-sparkles",
  },
  {
    id: "tropical",
    name: "Destino / playa",
    desc: "Tonos arena, esmeralda y palma para destination weddings.",
    palette: ["#fffbeb", "#fef3c7", "#a7f3d0", "#7c3aed"],
    icon: "palette",
  },
];

const benefits = [
  {
    icon: "send",
    title: "Envíos ilimitados, cero papel",
    desc: "Comparte tu invitación por WhatsApp, redes o link. Sin imprenta, sin mensajería, sin esperas.",
  },
  {
    icon: "users-2",
    title: "RSVP en tiempo real",
    desc: "Las confirmaciones llegan a tu panel al instante. Sabes exactamente quién va y quién no.",
  },
  {
    icon: "smartphone",
    title: "Siempre a la mano",
    desc: "Tus invitados abren la invitación desde su celular cuantas veces quieran. Nadie pierde la dirección.",
  },
  {
    icon: "sparkles",
    title: "Imagen única",
    desc: "Animaciones, música y galería interactiva. Imposible de ignorar — y de olvidar.",
  },
];

const steps = [
  {
    num: "01",
    icon: "message-circle",
    title: "Cuéntanos del evento",
    desc: "Nombres, fecha, lugar y el estilo que tienes en mente. Te asesoramos en redacción si quieres.",
  },
  {
    num: "02",
    icon: "palette",
    title: "Diseñamos tu invitación",
    desc: "En 3–5 días tienes el primer borrador con tu paleta, tipografía y fotos. Ajustes ilimitados.",
  },
  {
    num: "03",
    icon: "rocket",
    title: "La compartes y listo",
    desc: "Recibes el link único, el QR y el panel de RSVP. La compartes y empiezas a recibir confirmaciones.",
  },
];

const includes = [
  { icon: "palette", text: "Diseño 100% personalizado (colores, tipografía y fotos tuyas)" },
  { icon: "calendar-days", text: "Cuenta regresiva e itinerario del evento" },
  { icon: "map-pin", text: "Ubicación con Google Maps integrado" },
  { icon: "images", text: "Galería de fotos y video" },
  { icon: "users-2", text: "Confirmación RSVP automática" },
  { icon: "gift", text: "Mesa de regalos (links a tu lista)" },
  { icon: "wand-sparkles", text: "Edición ilimitada antes del evento" },
  { icon: "shield-check", text: "Hosting y soporte hasta el día del evento" },
];

const packages = [
  {
    name: "Esencial",
    price: "$499",
    tagline: "Lo esencial para compartir tu evento",
    demo: "/invitaciones/esencial",
    wa: waEsencial,
    highlighted: false,
    badge: null,
    vip: false,
    validity: "Vigencia 3 meses",
    features: [
      "Cuenta regresiva e itinerario",
      "Ubicación con GPS",
      "Galería de fotos",
      "Confirmación de asistencia",
      "Mesa de regalos (link)",
      "Código de vestimenta y hashtag",
      "Mención de padres / padrinos",
      "Envíos ilimitados",
    ],
    excluded: [
      "Música de fondo y animaciones",
      "Galería de video",
      "Listado de asistencia confirmada",
      "Pases asignados por invitado",
      "Confirmación por WhatsApp",
      "Playlist colaborativa",
      "QR y control de acceso",
      "Diseño completamente personalizado",
    ],
  },
  {
    name: "Pro",
    price: "$899",
    tagline: "El plan ideal para eventos memorables",
    demo: "/invitaciones/pro",
    wa: waPro,
    highlighted: true,
    badge: "Más popular",
    vip: false,
    validity: "Vigencia 6 meses",
    features: [
      "Todo lo de Esencial",
      "Música de fondo y animaciones",
      "Galería de fotos y video",
      "Listado de asistencia confirmada",
      "Pases asignados por invitado",
      "Confirmación por WhatsApp + formulario",
      "Botón para agregar al calendario",
      "Playlist colaborativa",
    ],
    excluded: [
      "Invitaciones personalizadas por invitado",
      "Link único por invitación",
      "QR y control de acceso",
      "Diseño completamente personalizado",
      "Álbum colaborativo",
    ],
  },
  {
    name: "Premium VIP",
    price: "$1,599",
    tagline: "Control total + personalización + acceso QR",
    demo: "/invitaciones/premium",
    wa: waPremium,
    highlighted: false,
    badge: "Experiencia VIP",
    vip: true,
    validity: "Vigencia 12 meses",
    features: [
      "Todo lo de Pro",
      "Invitaciones personalizadas por invitado",
      "Nombre y pases por familia",
      "Link único por invitación",
      "QR y sistema de check-in",
      "Control de acceso en evento",
      "Diseño completamente personalizado",
      "Álbum colaborativo de fotos",
    ],
    excluded: [],
  },
];

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en estar lista mi invitación?",
    a: "El primer borrador lo entregamos en 3 a 5 días hábiles desde que nos compartes la información del evento, fotos y preferencias. Después tienes ediciones ilimitadas hasta dejarla perfecta.",
  },
  {
    q: "¿Puedo pedir cambios después de aprobarla?",
    a: "Sí. Mientras esté activa la vigencia de tu plan (3, 6 o 12 meses), puedes editar textos, fechas, fotos y galería las veces que quieras sin costo extra.",
  },
  {
    q: "¿Cómo se la mando a mis invitados?",
    a: "Te entregamos un link único (y un QR). Lo compartes por WhatsApp, redes sociales, mail o el medio que prefieras. En el plan Premium VIP cada invitado recibe su propio link con su nombre.",
  },
  {
    q: "¿Necesito saber de tecnología para usarla?",
    a: "No. Tú nos das la información y nosotros la armamos. Tendrás un panel sencillo donde ves los RSVP en tiempo real — pensado para que cualquier persona lo use desde el celular.",
  },
  {
    q: "¿Qué pasa si me arrepiento del diseño?",
    a: "Tenemos garantía total: si no te gusta el resultado, te devolvemos tu dinero. Pero antes intentaremos llegar al diseño que sí amas — los cambios son ilimitados.",
  },
  {
    q: "¿La invitación se ve bien en cualquier celular?",
    a: "Sí, está optimizada para iOS y Android, con cualquier tamaño de pantalla. También funciona en computadora y tablet.",
  },
  {
    q: "¿Puedo agregar música, animaciones o video?",
    a: "Sí, en los planes Pro y Premium VIP. Música de fondo, animaciones de entrada, video de portada y playlist colaborativa donde tus invitados sugieren canciones.",
  },
];

const testimonials = [
  {
    quote: "Mis invitados amaron la invitación, todos confirmaron y nadie se perdió en el camino. La música de fondo fue el detalle que más comentaron.",
    name: "Ana García",
    event: "Boda · Marzo 2025",
    avatar: "A",
    stars: 5,
  },
  {
    quote: "Me ahorré tiempo y dinero, y la invitación se veía increíble. El control de RSVP por WhatsApp me cambió la vida — sabía exactamente quién iba.",
    name: "Carlos Méndez",
    event: "XV Años · Julio 2025",
    avatar: "C",
    stars: 5,
  },
  {
    quote: "La invitación de bautizo fue tan tierna que mis amigas la pidieron prestada para sus eventos. El proceso fue rapidísimo, en 4 días la tenía lista.",
    name: "Mariana López",
    event: "Bautizo · Septiembre 2025",
    avatar: "M",
    stars: 5,
  },
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-hidden">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="relative px-6 pt-20 pb-24">
      <!-- Ambient violet glow -->
      <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-30"
        style="background: radial-gradient(ellipse, #a78bfa 0%, transparent 65%)"
      ></div>
      <div
        class="pointer-events-none absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style="background: radial-gradient(circle, #8b5cf6, transparent 70%)"
      ></div>

      <div class="relative max-w-5xl mx-auto text-center">
        <!-- Eyebrow badge -->
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-medium"
          style="background: rgba(167, 139, 250, 0.1); border: 1px solid rgba(167, 139, 250, 0.25); color: #c4b5fd"
        >
          <span class="w-1.5 h-1.5 rounded-full" style="background: #a78bfa"></span>
          <LucideIcon name="party-popper" class-name="w-3.5 h-3.5" />
          Invitaciones Web Personalizadas
        </div>

        <h1
          class="font-display text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.04] tracking-tight mb-7"
        >
          <span class="dark:text-white text-light-text">Haz que tu evento sea </span>
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #c4b5fd 100%)"
          >inolvidable</span>
          <span class="dark:text-white text-light-text"> desde la invitación</span>
        </h1>

        <p class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Sorprende a tus invitados con una invitación digital interactiva, elegante y fácil de compartir.
          Sin papel, sin imprenta, sin pretextos para no llegar.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            :href="waDemo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #7c3aed, #a78bfa); box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4)"
          >
            <LucideIcon name="sparkles" class-name="w-4 h-4" />
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all border"
            style="border-color: rgba(167, 139, 250, 0.35); color: #c4b5fd; background: rgba(167, 139, 250, 0.04)"
          >
            Quiero cotizar mi invitación
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>

        <!-- Trust pills -->
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/70 text-light-muted/70">
          <span class="flex items-center gap-1.5">
            <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #a78bfa" />
            Edición ilimitada
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #a78bfa" />
            Entrega en 3–5 días
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #a78bfa" />
            RSVP en tiempo real
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5" style="color: #a78bfa" />
            Garantía total
          </span>
        </div>
      </div>
    </section>

    <!-- ─── 2 · DEMO INTERACTIVA ─────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
            01 / Demo interactiva
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Pruébala antes de pedirla
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Tres demos reales — Esencial, Pro y Premium VIP. Tócalas, abre la galería, prueba el RSVP. Así se ve la tuya.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <!-- Demo 1: Esencial -->
          <div class="flex flex-col items-center gap-3 group">
            <RouterLink to="/invitaciones/esencial" class="block transition-transform group-hover:-translate-y-1">
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
                style="border-color: rgba(167, 139, 250, 0.25); background: linear-gradient(180deg, #edf6ff, #f8f0ff, #fff5f6)"
              >
                <div class="flex items-center justify-between px-4 py-1.5 text-[9px]" style="color: #b0a7c0">
                  <span>9:41</span>
                  <div class="w-16 h-4 rounded-full" style="background: rgba(167, 139, 250, 0.1)"></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden p-5 text-center">
                  <LucideIcon name="heart" class-name="w-5 h-5 mx-auto mb-2" style="color: #6aade4" />
                  <p class="text-[9px] uppercase tracking-widest mb-1" style="color: #b0a7c0">Bautizo</p>
                  <p class="text-lg font-bold mb-1" style="color: #6aade4; font-family: serif">Santiago</p>
                  <div class="w-8 h-px mx-auto mb-2" style="background: rgba(167, 139, 250, 0.3)"></div>
                  <div
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[8px]"
                    style="background: rgba(106, 173, 228, 0.1); color: #6aade4"
                  >
                    <LucideIcon name="calendar" class-name="w-2.5 h-2.5" />
                    15 Mar 2026
                  </div>
                  <div
                    class="mt-3 py-1.5 rounded-full text-[8px] font-semibold text-white"
                    style="background: linear-gradient(135deg, #6aade4, #a78bfa)"
                  >Confirmar asistencia</div>
                </div>
              </div>
            </RouterLink>
            <div class="text-center">
              <p class="text-xs font-bold mb-1" style="color: #a78bfa">Esencial</p>
              <RouterLink
                to="/invitaciones/esencial"
                class="inline-flex items-center gap-1 text-[11px] dark:text-text-secondary text-light-muted hover:text-violet-400 transition"
              >
                Abrir demo <LucideIcon name="arrow-right" class-name="w-3 h-3" />
              </RouterLink>
            </div>
          </div>

          <!-- Demo 2: Pro (highlighted) -->
          <div class="flex flex-col items-center gap-3 group sm:-translate-y-4">
            <div class="absolute hidden sm:block translate-x-16 -translate-y-2 px-2.5 py-1 rounded-full text-[10px] font-bold text-white z-10" style="background: linear-gradient(135deg, #7c3aed, #a78bfa)">
              Más popular
            </div>
            <RouterLink to="/invitaciones/pro" class="block transition-transform group-hover:-translate-y-1">
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-2xl overflow-hidden"
                style="border-color: rgba(212, 175, 55, 0.3); background: linear-gradient(180deg, #f8f4f0, #f5ede6); box-shadow: 0 25px 60px rgba(124, 58, 237, 0.25)"
              >
                <div class="flex items-center justify-between px-4 py-1.5 text-[9px]" style="color: #c4a97d">
                  <span>9:41</span>
                  <div class="w-16 h-4 rounded-full" style="background: rgba(212, 175, 55, 0.08)"></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden p-5 text-center">
                  <div class="w-12 h-px mx-auto mb-2" style="background: linear-gradient(90deg, transparent, #d4af37, transparent)"></div>
                  <LucideIcon name="gem" class-name="w-5 h-5 mx-auto mb-2" style="color: #d4af37" />
                  <p class="text-[9px] uppercase tracking-widest mb-1" style="color: #c4a97d">Mis XV Años</p>
                  <p class="text-lg font-bold mb-1" style="color: #7a1e3a; font-family: serif">Valentina</p>
                  <div class="w-10 h-px mx-auto mb-2" style="background: linear-gradient(90deg, transparent, #d4af37, transparent)"></div>
                  <div
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[8px]"
                    style="background: rgba(212, 175, 55, 0.08); color: #d4af37; border: 1px solid rgba(212, 175, 55, 0.2)"
                  >
                    <LucideIcon name="calendar" class-name="w-2.5 h-2.5" />
                    20 Jul 2026
                  </div>
                  <div
                    class="mt-3 py-1.5 rounded-full text-[8px] font-semibold text-white"
                    style="background: linear-gradient(135deg, #d4af37, #c6a75e)"
                  >Confirmar asistencia</div>
                </div>
              </div>
            </RouterLink>
            <div class="text-center">
              <p class="text-xs font-bold mb-1" style="color: #d4af37">Pro</p>
              <RouterLink to="/invitaciones/pro" class="inline-flex items-center gap-1 text-[11px] dark:text-text-secondary text-light-muted hover:text-violet-400 transition">
                Abrir demo <LucideIcon name="arrow-right" class-name="w-3 h-3" />
              </RouterLink>
            </div>
          </div>

          <!-- Demo 3: Premium VIP -->
          <div class="flex flex-col items-center gap-3 group">
            <RouterLink to="/invitaciones/premium" class="block transition-transform group-hover:-translate-y-1">
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
                style="border-color: rgba(198, 167, 94, 0.25); background: #0b0b0b"
              >
                <div class="flex items-center justify-between px-4 py-1.5 text-[9px]" style="color: rgba(198, 167, 94, 0.4)">
                  <span>9:41</span>
                  <div class="w-16 h-4 rounded-full" style="background: rgba(198, 167, 94, 0.06)"></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden p-5 text-center">
                  <div class="w-16 h-16 mx-auto rounded-full mb-2"
                    style="background: radial-gradient(circle, rgba(198, 167, 94, 0.18), transparent 70%)"></div>
                  <LucideIcon name="sparkles" class-name="w-5 h-5 mx-auto mb-2 -mt-12" style="color: #c6a75e" />
                  <p class="text-[9px] uppercase tracking-widest mb-1 mt-4" style="color: rgba(198, 167, 94, 0.5)">
                    Nuestra Boda
                  </p>
                  <p
                    class="text-base font-bold mb-0.5"
                    style="background: linear-gradient(135deg, #c6a75e, #e8d5a3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: serif"
                  >Ana &amp; Carlos</p>
                  <div class="w-6 h-px mx-auto my-2" style="background: rgba(198, 167, 94, 0.3)"></div>
                  <div
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[8px]"
                    style="background: rgba(198, 167, 94, 0.06); color: #c6a75e; border: 1px solid rgba(198, 167, 94, 0.2)"
                  >
                    <LucideIcon name="calendar" class-name="w-2.5 h-2.5" />
                    10 Dic 2026
                  </div>
                  <div
                    class="mt-3 py-1.5 rounded-full text-[8px] font-bold"
                    style="background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b"
                  >Confirmar asistencia</div>
                </div>
              </div>
            </RouterLink>
            <div class="text-center">
              <p class="text-xs font-bold mb-1" style="color: #c6a75e">Premium VIP</p>
              <RouterLink to="/invitaciones/premium" class="inline-flex items-center gap-1 text-[11px] dark:text-text-secondary text-light-muted hover:text-violet-400 transition">
                Abrir demo <LucideIcon name="arrow-right" class-name="w-3 h-3" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 3 · BENEFICIOS ───────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(167, 139, 250, 0.04), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
            02 / Beneficios
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text max-w-2xl mb-4">
            Por qué la van a amar
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl">
            Cuatro razones por las que tus invitados, tu mamá y tu wedding planner te van a agradecer.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(b, i) in benefits"
            :key="b.title"
            class="p-6 rounded-2xl border transition hover:-translate-y-1"
            style="background: rgba(167, 139, 250, 0.04); border-color: rgba(167, 139, 250, 0.18)"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.18), rgba(167, 139, 250, 0.1))"
            >
              <LucideIcon :name="b.icon" class-name="w-5 h-5" style="color: #c4b5fd" />
            </div>
            <h3 class="font-semibold dark:text-white text-light-text text-sm mb-2">{{ b.title }}</h3>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 · TEMPLATES / THEMES ───────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
            03 / Templates &amp; estilos
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Encuentra tu estilo
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Empezamos a partir de un estilo base y lo adaptamos por completo a ti — colores, tipografía y fotos.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="theme in themes"
            :key="theme.id"
            class="group relative p-6 rounded-2xl border overflow-hidden transition hover:-translate-y-1"
            style="background: rgba(167, 139, 250, 0.03); border-color: rgba(167, 139, 250, 0.15)"
          >
            <!-- Palette preview -->
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
                style="background: rgba(167, 139, 250, 0.12)"
              >
                <LucideIcon :name="theme.icon" class-name="w-4 h-4" style="color: #c4b5fd" />
              </div>
              <h3 class="font-semibold dark:text-white text-light-text text-base pt-1.5">
                {{ theme.name }}
              </h3>
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">{{ theme.desc }}</p>

            <!-- Hover glow -->
            <div
              class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style="background: linear-gradient(135deg, rgba(167, 139, 250, 0.15), transparent 60%)"
            ></div>
          </div>
        </div>

        <p class="text-center text-xs dark:text-text-secondary/60 text-light-muted/60 mt-10">
          ¿Tienes un estilo distinto en mente? Lo construimos desde cero contigo.
        </p>
      </div>
    </section>

    <!-- ─── 5 · CÓMO FUNCIONA ────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="background: linear-gradient(180deg, rgba(124, 58, 237, 0.04), transparent)"
    >
      <div class="max-w-5xl mx-auto">
        <div class="mb-14 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
            04 / Cómo funciona
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            De la idea a las confirmaciones, en 3 pasos
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Tú nos das el evento. Nosotros te entregamos una invitación lista para impresionar.
          </p>
        </div>

        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Connector -->
          <div
            class="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px border-t border-dashed"
            style="border-color: rgba(167, 139, 250, 0.25)"
          ></div>

          <div
            v-for="step in steps"
            :key="step.num"
            class="relative text-center"
          >
            <div
              class="inline-flex items-center justify-center w-20 h-20 rounded-2xl border mb-5 mx-auto relative z-10"
              style="background: rgba(11, 6, 25, 0.6); border-color: rgba(167, 139, 250, 0.3); box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.4)"
            >
              <LucideIcon :name="step.icon" class-name="w-7 h-7" style="color: #c4b5fd" />
            </div>
            <p class="font-mono text-[11px] mb-2" style="color: rgba(167, 139, 250, 0.7)">
              PASO {{ step.num }}
            </p>
            <h3 class="font-display font-bold dark:text-white text-light-text text-lg mb-2">{{ step.title }}</h3>
            <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed max-w-xs mx-auto">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6 · QUÉ INCLUYE ──────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
              05 / Qué incluye
            </p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
              Todo lo que viene con tu invitación
            </h2>
            <p class="dark:text-text-secondary text-light-muted max-w-xl mb-8 leading-relaxed">
              Cero sorpresas en la entrega. Esto es lo que recibes desde el primer plan, listo para enviar.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="bonus in ['Edición ilimitada', 'Asesoría de redacción', 'Demo gratuita', 'Soporte WhatsApp']"
                :key="bonus"
                class="px-3 py-1.5 rounded-full text-xs font-medium"
                style="background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.2); color: #c4b5fd"
              >
                <LucideIcon name="gift" class-name="w-3 h-3 inline mr-1" />{{ bonus }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="item in includes"
              :key="item.text"
              class="flex items-start gap-3 p-4 rounded-xl border"
              style="background: rgba(167, 139, 250, 0.03); border-color: rgba(167, 139, 250, 0.15)"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style="background: rgba(167, 139, 250, 0.12)"
              >
                <LucideIcon :name="item.icon" class-name="w-4 h-4" style="color: #c4b5fd" />
              </div>
              <p class="text-xs dark:text-text-primary text-light-text font-medium leading-snug pt-1">
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
      style="background: linear-gradient(180deg, rgba(167, 139, 250, 0.06), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
            06 / Precios
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Elige tu paquete ideal
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            Pago único — sin mensualidades. Desde lo esencial hasta la experiencia VIP completa con QR.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="relative flex flex-col rounded-2xl overflow-hidden transition"
            :class="pkg.highlighted ? 'border-2' : 'border'"
            :style="pkg.highlighted
              ? 'border-color: #a78bfa; background: linear-gradient(145deg, rgba(167, 139, 250, 0.08), rgba(124, 58, 237, 0.04)); box-shadow: 0 30px 80px -20px rgba(124, 58, 237, 0.4)'
              : pkg.vip
                ? 'border-color: rgba(198, 167, 94, 0.3); background: rgba(198, 167, 94, 0.03)'
                : 'border-color: rgba(167, 139, 250, 0.15); background: rgba(167, 139, 250, 0.02)'"
          >
            <!-- Badge -->
            <div
              v-if="pkg.badge"
              class="absolute top-0 right-0 py-1.5 px-4 text-white text-xs font-bold rounded-bl-xl"
              :style="pkg.vip
                ? 'background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b'
                : 'background: linear-gradient(135deg, #7c3aed, #a78bfa)'"
            >
              <span class="inline-flex items-center gap-1">
                {{ pkg.badge }}
                <LucideIcon :name="pkg.vip ? 'gem' : 'flame'" class-name="w-3.5 h-3.5" />
              </span>
            </div>

            <div class="p-8 flex-1" :class="pkg.badge ? 'pt-12' : ''">
              <h3 class="font-display text-2xl font-bold dark:text-white text-light-text mb-1">{{ pkg.name }}</h3>
              <p class="text-sm dark:text-text-secondary text-light-muted mb-6">{{ pkg.tagline }}</p>

              <div class="mb-7">
                <span class="font-display text-4xl font-bold dark:text-white text-light-text">{{ pkg.price }}</span>
                <span class="text-sm dark:text-text-secondary text-light-muted ml-1">MXN</span>
                <p class="text-xs font-mono mt-1" style="color: rgba(167, 139, 250, 0.55)">{{ pkg.validity }}</p>
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
                    :style="pkg.vip ? 'color: #c6a75e' : 'color: #a78bfa'"
                  />
                  {{ f }}
                </li>
              </ul>

              <ul
                v-if="pkg.excluded?.length"
                class="space-y-2 border-t pt-4"
                style="border-color: rgba(167, 139, 250, 0.15)"
              >
                <li
                  v-for="ex in pkg.excluded"
                  :key="ex"
                  class="flex items-start gap-2.5 text-xs dark:text-text-secondary/45 text-light-muted/55 line-through"
                >
                  <LucideIcon name="minus" class-name="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-60" />
                  {{ ex }}
                </li>
              </ul>
            </div>

            <div class="px-8 pb-8 flex flex-col gap-2.5">
              <a
                :href="pkg.wa" target="_blank" rel="noopener noreferrer"
                class="block w-full text-center px-4 py-3 rounded-xl font-bold text-sm transition"
                :style="pkg.highlighted
                  ? 'background: linear-gradient(135deg, #7c3aed, #a78bfa); color: white; box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35)'
                  : pkg.vip
                    ? 'background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b'
                    : 'background: rgba(167, 139, 250, 0.12); border: 1px solid rgba(167, 139, 250, 0.3); color: #c4b5fd'"
              >
                <span class="inline-flex items-center gap-2">
                  Contratar {{ pkg.name }}
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </span>
              </a>
              <RouterLink
                :to="pkg.demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl border text-sm font-semibold transition"
                style="border-color: rgba(167, 139, 250, 0.2); color: rgba(196, 181, 253, 0.85)"
              >
                <span class="inline-flex items-center gap-2">
                  <LucideIcon name="eye" class-name="w-4 h-4" />
                  Ver demo
                </span>
              </RouterLink>
            </div>
          </div>
        </div>

        <p class="text-center mt-10 text-xs dark:text-text-secondary/60 text-light-muted/60">
          <LucideIcon name="shield-check" class-name="w-3.5 h-3.5 inline mr-1" style="color: #a78bfa" />
          Garantía total · Si no te encanta, te devolvemos tu dinero.
        </p>
      </div>
    </section>

    <!-- ─── 8 · FAQ ──────────────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-3xl mx-auto">
        <div class="mb-12 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
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
              ? 'border-color: rgba(167, 139, 250, 0.4); background: rgba(167, 139, 250, 0.04)'
              : 'border-color: rgba(167, 139, 250, 0.12); background: rgba(167, 139, 250, 0.02)'"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="dark:text-white text-light-text font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                class-name="w-4 h-4 shrink-0 transition"
                :style="openFaq === i ? 'color: #a78bfa' : 'color: rgba(167, 139, 250, 0.5)'"
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
            style="color: #a78bfa"
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
      style="background: linear-gradient(180deg, rgba(167, 139, 250, 0.05), transparent)"
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3" style="color: rgba(167, 139, 250, 0.7)">
            08 / Testimonios
          </p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="relative p-7 rounded-2xl border flex flex-col"
            style="background: rgba(167, 139, 250, 0.04); border-color: rgba(167, 139, 250, 0.15)"
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
            <p class="dark:text-text-primary text-light-text leading-relaxed text-sm mb-6 flex-1 italic">
              "{{ t.quote }}"
            </p>
            <div class="flex items-center gap-3 pt-5 border-t" style="border-color: rgba(167, 139, 250, 0.15)">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                style="background: linear-gradient(135deg, #7c3aed, #a78bfa)"
              >{{ t.avatar }}</div>
              <div>
                <p class="dark:text-white text-light-text font-semibold text-sm">{{ t.name }}</p>
                <p class="text-xs dark:text-text-secondary/60 text-light-muted/60">{{ t.event }}</p>
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
        style="background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.18), transparent 65%)"
      ></div>

      <div class="relative max-w-3xl mx-auto">
        <div
          class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8 border"
          style="background: rgba(167, 139, 250, 0.1); border-color: rgba(167, 139, 250, 0.25)"
        >
          <LucideIcon name="party-popper" class-name="w-8 h-8" style="color: #a78bfa" />
        </div>

        <h2 class="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          <span class="dark:text-white text-light-text">Sorprende a tus invitados con una </span>
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #a78bfa, #8b5cf6, #c4b5fd)"
          >invitación única</span>
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-10 text-lg max-w-xl mx-auto">
          Solicita tu demo gratis por WhatsApp y haz que tu evento sea inolvidable.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            :href="waDemo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #7c3aed, #a78bfa); box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4)"
          >
            <LucideIcon name="sparkles" class-name="w-4 h-4" />
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all border"
            style="border-color: rgba(167, 139, 250, 0.35); color: #c4b5fd; background: rgba(167, 139, 250, 0.04)"
          >
            Cotizar mi invitación
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/60 text-light-muted/60">
          <span class="flex items-center gap-1.5">
            <LucideIcon name="shield-check" class-name="w-3.5 h-3.5" style="color: rgba(167, 139, 250, 0.7)" />
            Garantía de satisfacción
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="clock-4" class-name="w-3.5 h-3.5" style="color: rgba(167, 139, 250, 0.7)" />
            Entrega en 3–5 días
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon name="message-circle" class-name="w-3.5 h-3.5" style="color: rgba(167, 139, 250, 0.7)" />
            Soporte en español
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
