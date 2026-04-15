<script setup>
/**
 * Landing: Invitaciones Web Personalizadas
 * Estilo visual: Stripe — gradientes ricos, glass morphism, profundidad, layout asimétrico
 */
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";

const WA = "+525635926679";
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa una demo de invitaciones web personalizadas para mi evento 💌")}`;
const waContratar = `https://wa.me/${WA}?text=${encodeURIComponent("Quiero cotizar una invitación web personalizada 💌")}`;
const waEsencial = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar el Plan Esencial de invitaciones digitales ($499 MXN) 💌")}`;
const waPro = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar el Plan Pro de invitaciones digitales ($899 MXN) ✨")}`;
const waPremium = `https://wa.me/${WA}?text=${encodeURIComponent("¡Hola! Me interesa contratar el Plan Premium de invitaciones digitales ($1,599 MXN) 💎")}`;

const packages = [
  {
    name: "Esencial",
    price: "$499",
    tagline: "Empieza rápido con lo esencial",
    summary: "Lo esencial para compartir tu evento",
    demo: "/invitaciones/esencial",
    wa: waEsencial,
    highlighted: false,
    badge: null,
    vip: false,
    features: [
      "Cuenta regresiva e Itinerario",
      "Ubicación con GPS",
      "Galería de fotos",
      "Confirmación de asistencia",
      "Mesa de regalos (link)",
      "Código de vestimenta y Hashtag",
      "Mención de padres / padrinos",
      "Sugerencia de hospedaje",
      "Envíos ilimitados",
    ],
    excluded:
      "NO incluye: Música, Personalizadas, QR, Pases, WhatsApp o Videos.",
    validity: "Vigencia: 3 meses",
  },
  {
    name: "Pro",
    price: "$899",
    tagline: "El plan ideal para eventos memorables",
    summary: "Controla tu evento y hazlo interactivo",
    demo: "/invitaciones/pro",
    wa: waPro,
    highlighted: true,
    badge: "Más popular",
    vip: false,
    features: [
      "Todo lo de Esencial",
      "Música de fondo y animaciones",
      "Galería de fotos y video",
      "Listado de asistencia confirmada",
      "Número de pases asignados",
      "Invitaciones múltiples (10-20 sugerido)",
      "Confirmación por WhatsApp + formulario",
      "Botón para agregar al calendario",
      "Playlist colaborativa",
    ],
  },
  {
    name: "Premium VIP",
    price: "$1,599",
    tagline: "Control total + personalización + acceso con QR",
    summary: "Experiencia completa + control total del evento",
    demo: "/invitaciones/premium",
    wa: waPremium,
    highlighted: false,
    badge: "Experiencia VIP",
    vip: true,
    features: [
      "Todo lo de Pro",
      "Invitaciones personalizadas por invitado",
      "Nombre de invitado o familia y pases",
      "Link único por invitación",
      "Código QR y sistema de check-in",
      "Control de acceso en evento",
      "Diseño completamente personalizado",
      "Álbum colaborativo y compartir fotos",
    ],
  },
];

const comparisonRows = [
  { feature: "Cuenta regresiva", esencial: true, pro: true, premium: true },
  { feature: "Ubicación GPS", esencial: true, pro: true, premium: true },
  { feature: "Itinerario", esencial: true, pro: true, premium: true },
  { feature: "Galería fotos", esencial: true, pro: true, premium: true },
  { feature: "RSVP", esencial: true, pro: true, premium: true },
  { feature: "Mesa de regalos", esencial: true, pro: true, premium: true },
  { feature: "Envíos ilimitados", esencial: true, pro: true, premium: true },
  { feature: "Galería video", esencial: false, pro: true, premium: true },
  { feature: "Música", esencial: false, pro: true, premium: true },
  { feature: "Playlist", esencial: false, pro: true, premium: true },
  { feature: "RSVP WhatsApp", esencial: false, pro: true, premium: true },
  { feature: "Pases por invitado", esencial: false, pro: true, premium: true },
  { feature: "Calendario", esencial: false, pro: true, premium: true },
  {
    feature: "Invitaciones personalizadas",
    esencial: false,
    pro: false,
    premium: true,
  },
  { feature: "QR acceso", esencial: false, pro: false, premium: true },
  { feature: "Control acceso", esencial: false, pro: false, premium: true },
  {
    feature: "Diseño personalizado",
    esencial: false,
    pro: false,
    premium: true,
  },
];

const painPoints = [
  { icon: "mail", text: "Tus invitados pierden la invitación impresa" },
  { icon: "users", text: "No sabes quién va a confirmar asistencia" },
  {
    icon: "sparkles",
    text: "Quieres que tu evento luzca único desde el primer contacto",
  },
];

const features = [
  {
    icon: "check",
    title: "RSVP en un clic",
    desc: "Confirma asistencia al instante desde cualquier dispositivo",
  },
  {
    icon: "map-pin",
    title: "Mapa interactivo",
    desc: "Tus invitados llegan sin perderse, con un toque",
  },
  {
    icon: "image",
    title: "Galería de fotos y video",
    desc: "Muestra los momentos más especiales de tu historia",
  },
  {
    icon: "heart",
    title: "Mensaje personalizado",
    desc: "Un detalle único para cada invitado que abre la invitación",
  },
];

const benefits = [
  "Ahorra en impresión y mensajería",
  "Tus invitados siempre tienen la invitación a la mano",
  "Recibe confirmaciones en tiempo real",
  "Da una imagen moderna y exclusiva",
];

const includes = [
  "Diseño personalizado (colores, fotos, tipografía)",
  "RSVP automático",
  "Galería multimedia",
  "Mapa interactivo",
  "Mensaje de agradecimiento",
];

const bonuses = [
  { icon: "pen-tool", text: "Edición ilimitada antes del evento" },
  { icon: "message-circle", text: "Asesoría en redacción de textos" },
  { icon: "eye", text: "Demo gratuita personalizada" },
];

const testimonials = [
  {
    quote:
      "Mis invitados amaron la invitación, todos confirmaron y nadie se perdió.",
    name: "Ana",
    event: "Boda 2025",
    avatar: "A",
  },
  {
    quote: "Me ahorré tiempo y dinero, y la invitación se veía increíble.",
    name: "Carlos",
    event: "XV Años",
    avatar: "C",
  },
];

const mockupSections = [
  "Portada animada con nombres y fecha",
  "Sección de detalles del evento",
  "Botón de confirmación RSVP",
  "Galería multimedia",
  "Mapa de ubicación",
];
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-hidden">
    <!-- Hero — Stripe: centered, gradient text, floating blobs -->
    <section class="relative py-24 px-6">
      <!-- Decorative blobs -->
      <div
        class="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #8b5cf6, transparent 70%)"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #6366f1, transparent 70%)"
      ></div>

      <div class="relative max-w-4xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-medium"
          style="
            background: rgba(139, 92, 246, 0.1);
            border: 1px solid rgba(139, 92, 246, 0.2);
            color: #a78bfa;
          "
        >
          <LucideIcon name="party-popper" class-name="w-3.5 h-3.5" />
          Invitaciones Web Personalizadas
        </div>
        <h1
          class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8"
        >
          <span class="dark:text-white text-light-text"
            >Haz que tu evento sea
          </span>
          <span
            class="bg-clip-text text-transparent"
            style="
              background-image: linear-gradient(
                135deg,
                #8b5cf6,
                #6366f1,
                #a78bfa
              );
            "
          >
            inolvidable
          </span>
          <span class="dark:text-white text-light-text">
            desde la invitación</span
          >
        </h1>
        <p
          class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Olvídate de lo tradicional. Sorprende a tus invitados con una
          invitación digital interactiva, elegante y fácil de compartir.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style="
              background: linear-gradient(135deg, #7c3aed, #6366f1);
              box-shadow: 0 8px 32px rgba(124, 58, 237, 0.35);
            "
          >
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 rounded-xl font-semibold text-sm transition-all border dark:text-violet-300 text-violet-600 hover:dark:bg-violet-500/10 hover:bg-violet-50"
            style="border-color: rgba(139, 92, 246, 0.3)"
          >
            Quiero cotizar mi invitación
          </a>
        </div>
      </div>
    </section>

    <!-- Pain points — glass cards -->
    <section class="max-w-7xl mx-auto px-6 pb-24">
      <h2
        class="text-center font-display text-2xl font-bold dark:text-white text-light-text mb-12"
      >
        ¿Te pasa esto?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="pain in painPoints"
          :key="pain.text"
          class="p-8 rounded-2xl backdrop-blur-lg border text-center"
          style="
            background: rgba(139, 92, 246, 0.04);
            border-color: rgba(139, 92, 246, 0.12);
          "
        >
          <div
            class="w-12 h-12 rounded-xl mx-auto mb-5 flex items-center justify-center"
            style="background: rgba(139, 92, 246, 0.1)"
          >
            <LucideIcon
              :name="pain.icon"
              class-name="w-5 h-5 text-violet-400"
            />
          </div>
          <p
            class="dark:text-text-primary text-light-text text-sm font-medium leading-relaxed"
          >
            {{ pain.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- Features — asymmetric 2-col layout, Stripe depth style -->
    <section
      class="py-24 px-6"
      style="
        background: linear-gradient(
          180deg,
          rgba(139, 92, 246, 0.03),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-6"
            >
              La solución: invitaciones que sorprenden
            </h2>
            <div class="space-y-6">
              <div
                v-for="feat in features"
                :key="feat.title"
                class="flex items-start gap-4 p-5 rounded-xl border transition hover:shadow-lg hover:shadow-violet-500/5"
                style="
                  background: rgba(139, 92, 246, 0.03);
                  border-color: rgba(139, 92, 246, 0.08);
                "
              >
                <div
                  class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(124, 58, 237, 0.15),
                      rgba(99, 102, 241, 0.1)
                    );
                  "
                >
                  <LucideIcon
                    :name="feat.icon"
                    class-name="w-4 h-4 text-violet-400"
                  />
                </div>
                <div>
                  <h3
                    class="font-semibold dark:text-white text-light-text text-sm mb-1"
                  >
                    {{ feat.title }}
                  </h3>
                  <p class="text-xs dark:text-text-secondary text-light-muted">
                    {{ feat.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Phone mockup -->
          <div class="flex justify-center">
            <div class="relative w-64">
              <!-- Phone frame -->
              <div
                class="rounded-[2.5rem] border-2 p-3 shadow-2xl"
                style="
                  background: linear-gradient(145deg, #1a0a2e, #12071f);
                  border-color: rgba(139, 92, 246, 0.2);
                  box-shadow: 0 25px 60px rgba(124, 58, 237, 0.2);
                "
              >
                <!-- Notch -->
                <div
                  class="w-24 h-5 mx-auto mb-3 rounded-full"
                  style="background: #0a0415"
                ></div>
                <!-- Screen -->
                <div
                  class="rounded-[1.5rem] overflow-hidden"
                  style="background: linear-gradient(180deg, #1e0a3a, #12071f)"
                >
                  <div class="p-6 text-center">
                    <p
                      class="text-violet-300/40 text-[10px] tracking-widest uppercase mb-2"
                    >
                      Te invitamos a
                    </p>
                    <h3 class="text-white font-display text-lg font-bold mb-1">
                      La Boda de
                    </h3>
                    <p
                      class="text-violet-300 font-display text-2xl font-bold mb-4"
                      style="font-style: italic"
                    >
                      Ana & Carlos
                    </p>
                    <div
                      class="w-12 h-px mx-auto mb-4"
                      style="background: rgba(139, 92, 246, 0.3)"
                    ></div>
                    <p class="text-violet-300/60 text-[11px] mb-1">
                      Sábado 15 de Marzo, 2025
                    </p>
                    <p class="text-violet-300/40 text-[10px] mb-6">
                      Jardín del Valle · 5:00 PM
                    </p>
                    <div
                      class="py-2.5 rounded-xl text-xs font-bold text-white mb-3"
                      style="
                        background: linear-gradient(135deg, #7c3aed, #6366f1);
                      "
                    >
                      Confirmar asistencia
                    </div>
                    <p class="text-violet-300/30 text-[9px]">
                      ¿Cómo llegar? · Mesa de regalos
                    </p>
                  </div>
                  <div
                    class="h-20"
                    style="
                      background: linear-gradient(
                        180deg,
                        rgba(139, 92, 246, 0.05),
                        rgba(139, 92, 246, 0.02)
                      );
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits — horizontal pills -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <h2
        class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-10"
      >
        Beneficios
      </h2>
      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="b in benefits"
          :key="b"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
          style="
            background: rgba(139, 92, 246, 0.06);
            border: 1px solid rgba(139, 92, 246, 0.12);
            color: #c4b5fd;
          "
        >
          <LucideIcon name="check" class-name="w-3.5 h-3.5 text-violet-400" />
          {{ b }}
        </div>
      </div>
    </section>

    <!-- Mockup sections — visual preview list -->
    <section
      class="py-20 px-6"
      style="
        background: linear-gradient(
          180deg,
          rgba(99, 102, 241, 0.04),
          transparent
        );
      "
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-4"
        >
          Así luce tu invitación
        </h2>
        <p
          class="text-sm dark:text-text-secondary text-light-muted text-center mb-12"
        >
          Vista previa de una invitación real creada por nosotros
        </p>

        <!-- 3 phone frames side by side -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <!-- Phone 1: Plan Esencial -->
          <div class="flex flex-col items-center gap-3">
            <div
              class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
              style="
                border-color: rgba(139, 92, 246, 0.15);
                background: linear-gradient(
                  180deg,
                  #edf6ff,
                  #fff5f6,
                  #f8f0ff,
                  #fff9e6
                );
              "
            >
              <div
                class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                style="color: #b0a7c0"
              >
                <span>9:41</span>
                <div
                  class="w-16 h-4 rounded-full"
                  style="background: rgba(139, 92, 246, 0.08)"
                ></div>
                <span>100%</span>
              </div>
              <div class="rounded-2xl overflow-hidden p-5 text-center">
                <!-- Decorative circles -->
                <div class="flex justify-center gap-2 mb-3">
                  <div
                    class="w-3 h-3 rounded-full"
                    style="background: #fbb6ce; opacity: 0.5"
                  ></div>
                  <div
                    class="w-2 h-2 rounded-full mt-1"
                    style="background: #93c5fd; opacity: 0.4"
                  ></div>
                  <div
                    class="w-3.5 h-3.5 rounded-full"
                    style="background: #c4b5fd; opacity: 0.4"
                  ></div>
                </div>
                <LucideIcon
                  name="heart"
                  class-name="w-5 h-5 mx-auto mb-2"
                  style="color: #6aade4"
                />
                <p
                  class="text-[9px] uppercase tracking-widest mb-1"
                  style="color: #b0a7c0"
                >
                  Bautizo
                </p>
                <p
                  class="text-lg font-bold mb-1"
                  style="color: #6aade4; font-family: serif"
                >
                  Santiago
                </p>
                <div
                  class="w-8 h-px mx-auto mb-2"
                  style="background: rgba(139, 92, 246, 0.2)"
                ></div>
                <div
                  class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[8px]"
                  style="background: rgba(106, 173, 228, 0.1); color: #6aade4"
                >
                  <LucideIcon name="calendar" class-name="w-2.5 h-2.5" />
                  15 Mar 2026
                </div>
                <p class="text-[8px] mt-2" style="color: #b0a7c0">
                  Con la bendición de sus padres
                </p>
                <div
                  class="mt-2 py-1.5 rounded-full text-[8px] font-semibold text-white"
                  style="background: linear-gradient(135deg, #6aade4, #8b5cf6)"
                >
                  Confirmar asistencia
                </div>
              </div>
            </div>
            <span class="text-xs font-semibold" style="color: #8b5cf6"
              >Esencial</span
            >
          </div>

          <!-- Phone 2: Plan Pro -->
          <div class="flex flex-col items-center gap-3">
            <div
              class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
              style="
                border-color: rgba(212, 175, 55, 0.2);
                background: linear-gradient(180deg, #f8f4f0, #f5ede6);
              "
            >
              <div
                class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                style="color: #c4a97d"
              >
                <span>9:41</span>
                <div
                  class="w-16 h-4 rounded-full"
                  style="background: rgba(212, 175, 55, 0.08)"
                ></div>
                <span>100%</span>
              </div>
              <div class="rounded-2xl overflow-hidden p-5 text-center">
                <!-- Gold corner decorations -->
                <div class="flex justify-center mb-2">
                  <div
                    class="w-12 h-px"
                    style="
                      background: linear-gradient(
                        90deg,
                        transparent,
                        #d4af37,
                        transparent
                      );
                    "
                  ></div>
                </div>
                <LucideIcon
                  name="gem"
                  class-name="w-5 h-5 mx-auto mb-2"
                  style="color: #d4af37"
                />
                <p
                  class="text-[9px] uppercase tracking-widest mb-1"
                  style="color: #c4a97d"
                >
                  Mis XV Años
                </p>
                <p
                  class="text-lg font-bold mb-1"
                  style="color: #7a1e3a; font-family: serif"
                >
                  Valentina
                </p>
                <div class="flex justify-center mb-2">
                  <div
                    class="w-10 h-px"
                    style="
                      background: linear-gradient(
                        90deg,
                        transparent,
                        #d4af37,
                        transparent
                      );
                    "
                  ></div>
                </div>
                <p class="text-[7px] italic mb-2" style="color: #c4a97d">
                  Con la bendición de Dios y mis padres
                </p>
                <div
                  class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[8px]"
                  style="
                    background: rgba(212, 175, 55, 0.08);
                    color: #d4af37;
                    border: 1px solid rgba(212, 175, 55, 0.15);
                  "
                >
                  <LucideIcon name="calendar" class-name="w-2.5 h-2.5" />
                  20 Jul 2026
                </div>
                <div
                  class="mt-2 py-1.5 rounded-full text-[8px] font-semibold text-white"
                  style="background: linear-gradient(135deg, #d4af37, #c6a75e)"
                >
                  Confirmar asistencia
                </div>
              </div>
            </div>
            <span class="text-xs font-semibold" style="color: #d4af37"
              >Pro — Más popular</span
            >
          </div>

          <!-- Phone 3: Plan Premium -->
          <div class="flex flex-col items-center gap-3">
            <div
              class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
              style="
                border-color: rgba(198, 167, 94, 0.15);
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
              <div class="rounded-2xl overflow-hidden p-5 text-center">
                <!-- Ambient glow -->
                <div
                  class="w-16 h-16 mx-auto rounded-full mb-2"
                  style="
                    background: radial-gradient(
                      circle,
                      rgba(198, 167, 94, 0.12) 0%,
                      transparent 70%
                    );
                  "
                ></div>
                <LucideIcon
                  name="sparkles"
                  class-name="w-5 h-5 mx-auto mb-2 -mt-12"
                  style="color: #c6a75e"
                />
                <p
                  class="text-[9px] uppercase tracking-widest mb-1 mt-4"
                  style="color: rgba(198, 167, 94, 0.5)"
                >
                  Nuestra Boda
                </p>
                <p
                  class="text-base font-bold mb-0.5"
                  style="
                    background: linear-gradient(135deg, #c6a75e, #e8d5a3);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-family: serif;
                  "
                >
                  Ana & Carlos
                </p>
                <div
                  class="w-6 h-px mx-auto my-2"
                  style="background: rgba(198, 167, 94, 0.25)"
                ></div>
                <div
                  class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[8px]"
                  style="
                    background: rgba(198, 167, 94, 0.06);
                    color: #c6a75e;
                    border: 1px solid rgba(198, 167, 94, 0.12);
                  "
                >
                  <LucideIcon name="calendar" class-name="w-2.5 h-2.5" />
                  10 Dic 2026
                </div>
                <div class="flex items-center justify-center gap-1 mt-1">
                  <span
                    class="px-1.5 py-0.5 rounded text-[7px] font-bold"
                    style="
                      background: rgba(198, 167, 94, 0.1);
                      color: #c6a75e;
                      border: 1px solid rgba(198, 167, 94, 0.15);
                    "
                    >ES</span
                  >
                  <span
                    class="px-1.5 py-0.5 rounded text-[7px]"
                    style="color: rgba(198, 167, 94, 0.3)"
                    >EN</span
                  >
                </div>
                <div
                  class="mt-2 py-1.5 rounded-full text-[8px] font-semibold"
                  style="
                    background: linear-gradient(135deg, #c6a75e, #e8d5a3);
                    color: #0b0b0b;
                  "
                >
                  Confirmar asistencia
                </div>
              </div>
            </div>
            <span class="text-xs font-semibold" style="color: #c6a75e"
              >Premium VIP</span
            >
          </div>
        </div>

        <div class="flex justify-center mt-10">
          <router-link
            to="/invitaciones/esencial"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition"
            style="
              background: rgba(139, 92, 246, 0.08);
              border: 1px solid rgba(139, 92, 246, 0.2);
              color: rgb(139, 92, 246);
            "
          >
            <LucideIcon name="eye" class-name="w-4 h-4" />
            Ver demo en vivo
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- What's included + Bonuses -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Includes -->
        <div>
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text mb-8"
          >
            ¿Qué incluye?
          </h2>
          <ul class="space-y-4">
            <li
              v-for="item in includes"
              :key="item"
              class="flex items-start gap-3"
            >
              <div
                class="w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0"
                style="background: rgba(139, 92, 246, 0.12)"
              >
                <LucideIcon name="check" class-name="w-3 h-3 text-violet-400" />
              </div>
              <p class="text-sm dark:text-text-primary text-light-text">
                {{ item }}
              </p>
            </li>
          </ul>
        </div>
        <!-- Bonuses -->
        <div>
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text mb-8"
          >
            <span style="color: #a78bfa">🎁</span> Bonos exclusivos
          </h2>
          <div class="space-y-4">
            <div
              v-for="bonus in bonuses"
              :key="bonus.text"
              class="flex items-center gap-4 p-4 rounded-xl border"
              style="
                background: rgba(139, 92, 246, 0.04);
                border-color: rgba(139, 92, 246, 0.1);
              "
            >
              <LucideIcon
                :name="bonus.icon"
                class-name="w-5 h-5 text-violet-400 shrink-0"
              />
              <p class="text-sm dark:text-text-primary text-light-text">
                {{ bonus.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials — accent bar on left -->
    <section
      class="py-24 px-6"
      style="
        background: linear-gradient(
          180deg,
          rgba(139, 92, 246, 0.04),
          transparent
        );
      "
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-16"
        >
          Lo que dicen nuestros clientes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="relative p-8 rounded-2xl border"
            style="
              background: rgba(139, 92, 246, 0.03);
              border-color: rgba(139, 92, 246, 0.1);
            "
          >
            <div
              class="absolute left-0 top-8 bottom-8 w-1 rounded-full"
              style="background: linear-gradient(180deg, #7c3aed, #6366f1)"
            ></div>
            <p
              class="dark:text-text-primary text-light-text leading-relaxed mb-6 pl-4 text-sm italic"
            >
              "{{ t.quote }}"
            </p>
            <div class="flex items-center gap-3 pl-4">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                style="background: linear-gradient(135deg, #7c3aed, #6366f1)"
              >
                {{ t.avatar }}
              </div>
              <div>
                <p
                  class="font-semibold dark:text-white text-light-text text-sm"
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

    <!-- Guarantee -->
    <section class="max-w-7xl mx-auto px-6 py-16 text-center">
      <div
        class="p-8 rounded-2xl border"
        style="
          background: rgba(139, 92, 246, 0.04);
          border-color: rgba(139, 92, 246, 0.12);
        "
      >
        <LucideIcon
          name="shield"
          class-name="w-7 h-7 mx-auto mb-4 text-violet-400"
        />
        <h3
          class="font-display text-lg font-bold dark:text-white text-light-text mb-2"
        >
          Garantía total
        </h3>
        <p class="text-sm dark:text-text-secondary text-light-muted">
          Si no te encanta el diseño, ¡te devolvemos tu dinero!
        </p>
      </div>
    </section>

    <!-- Pricing packages -->
    <section
      class="py-24 px-6"
      style="
        background: linear-gradient(
          180deg,
          rgba(139, 92, 246, 0.04),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text text-center mb-4"
        >
          Elige tu paquete ideal
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted text-center mb-16 max-w-xl mx-auto text-sm"
        >
          Desde lo esencial hasta la experiencia VIP completa con control de
          acceso QR.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="relative flex flex-col rounded-2xl overflow-hidden"
            :class="
              pkg.highlighted
                ? 'border-2 border-violet-500'
                : 'border dark:border-base-700/50 border-light-border'
            "
            :style="
              pkg.highlighted
                ? 'background: linear-gradient(145deg, rgba(139, 92, 246, 0.06), rgba(99, 102, 241, 0.04))'
                : 'background: rgba(139, 92, 246, 0.02)'
            "
          >
            <!-- Badge -->
            <div
              v-if="pkg.badge"
              class="absolute top-0 right-0 py-1.5 px-4 text-white text-xs font-bold rounded-bl-xl"
              :class="pkg.vip ? 'bg-violet-500' : 'bg-violet-600'"
            >
              <span class="inline-flex items-center gap-1">
                {{ pkg.badge }}
                <LucideIcon
                  :name="pkg.vip ? 'gem' : 'flame'"
                  class-name="w-3.5 h-3.5"
                />
              </span>
            </div>
            <div class="p-8 flex-1" :class="pkg.badge ? 'pt-10' : ''">
              <h3
                class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
              >
                {{ pkg.name }}
              </h3>
              <p
                class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
              >
                {{ pkg.tagline }}
              </p>
              <div class="mb-6">
                <span
                  class="font-display text-3xl font-bold dark:text-white text-light-text"
                  >{{ pkg.price }}</span
                >
                <span
                  class="text-sm dark:text-text-secondary text-light-muted ml-1"
                  >MXN</span
                >
              </div>
              <p
                v-if="pkg.summary"
                class="text-xs dark:text-text-secondary text-light-muted mb-4 font-semibold"
              >
                {{ pkg.summary }}
              </p>
              <ul class="space-y-3 mb-6">
                <li
                  v-for="f in pkg.features"
                  :key="f"
                  class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
                >
                  <LucideIcon
                    :name="pkg.vip ? 'sparkles' : 'check'"
                    :class-name="
                      'w-4 h-4 mt-0.5 ' +
                      (pkg.vip ? 'text-violet-400' : 'text-violet-500')
                    "
                  />
                  {{ f }}
                </li>
              </ul>
              <p
                v-if="pkg.excluded"
                class="text-xs text-red-500/80 mb-2 font-semibold"
              >
                <span class="inline-flex items-center gap-2">
                  <LucideIcon name="x" class-name="w-4 h-4" />
                  {{ pkg.excluded }}
                </span>
              </p>
              <p
                v-if="pkg.validity"
                class="text-xs dark:text-text-secondary/60 text-light-muted/60"
              >
                {{ pkg.validity }}
              </p>
            </div>
            <div class="px-8 pb-8 flex flex-col gap-3">
              <router-link
                :to="pkg.demo"
                class="block w-full text-center px-4 py-3 rounded-xl font-semibold text-sm transition"
                :class="
                  pkg.highlighted
                    ? 'text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                    : pkg.vip
                      ? 'bg-violet-500/10 border border-violet-500/30 text-violet-400 hover:bg-violet-500/20'
                      : 'bg-violet-500/10 border border-violet-500/30 text-violet-500 hover:bg-violet-500/20'
                "
                :style="
                  pkg.highlighted
                    ? 'background: linear-gradient(135deg, #7c3aed, #6366f1)'
                    : ''
                "
              >
                <span class="inline-flex items-center gap-2">
                  <LucideIcon name="search" class-name="w-4 h-4" />
                  Ver Demo
                </span>
              </router-link>
              <a
                :href="pkg.wa"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm transition"
                :class="
                  pkg.vip ? 'hover:text-violet-400' : 'hover:text-violet-500'
                "
              >
                <span class="inline-flex items-center gap-2">
                  Contratar paquete
                  <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison table -->
    <section class="px-6 pb-24">
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-12"
        >
          Comparación de paquetes
        </h2>
        <div
          class="overflow-x-auto rounded-2xl border"
          style="border-color: rgba(139, 92, 246, 0.12)"
        >
          <table class="w-full text-sm">
            <thead>
              <tr
                class="border-b"
                style="border-color: rgba(139, 92, 246, 0.1)"
              >
                <th
                  class="text-left py-4 px-6 dark:text-text-secondary text-light-muted font-medium"
                >
                  Característica
                </th>
                <th
                  class="text-center py-4 px-4 dark:text-white text-light-text font-semibold whitespace-nowrap"
                >
                  Esencial
                </th>
                <th
                  class="text-center py-4 px-4 text-violet-500 font-semibold whitespace-nowrap"
                >
                  Pro
                </th>
                <th
                  class="text-center py-4 px-4 text-violet-400 font-semibold whitespace-nowrap"
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.feature"
                class="border-b last:border-0 transition-colors"
                style="border-color: rgba(139, 92, 246, 0.06)"
              >
                <td
                  class="py-3 px-6 dark:text-text-secondary text-light-muted whitespace-nowrap"
                >
                  {{ row.feature }}
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.esencial"
                    name="check"
                    class-name="w-4 h-4 mx-auto dark:text-text-secondary text-light-muted"
                  />
                  <span
                    v-else
                    class="dark:text-text-secondary/30 text-light-muted/30"
                    >-</span
                  >
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.pro"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-violet-500"
                  />
                  <span
                    v-else
                    class="dark:text-text-secondary/30 text-light-muted/30"
                    >-</span
                  >
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.premium"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-violet-400"
                  />
                  <span
                    v-else
                    class="dark:text-text-secondary/30 text-light-muted/30"
                    >-</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 opacity-30 pointer-events-none"
        style="
          background: radial-gradient(
            ellipse at center,
            rgba(124, 58, 237, 0.15),
            transparent 70%
          );
        "
      ></div>
      <div class="relative max-w-3xl mx-auto">
        <h2 class="font-display text-4xl sm:text-5xl font-bold mb-6">
          <span class="dark:text-white text-light-text"
            >Sorprende a tus invitados con una
          </span>
          <span
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(135deg, #8b5cf6, #6366f1)"
          >
            invitación única
          </span>
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-10 text-lg">
          Solicita tu demo gratis por WhatsApp y haz que tu evento sea
          inolvidable.
        </p>
        <a
          :href="waDemo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
          style="
            background: linear-gradient(135deg, #7c3aed, #6366f1);
            box-shadow: 0 8px 32px rgba(124, 58, 237, 0.35);
          "
        >
          Solicita tu demo gratis
          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
        </a>
      </div>
    </section>
  </main>
</template>
