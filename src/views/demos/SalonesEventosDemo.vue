<template>
  <div class="salones-demo" style="background: #080510; min-height: 100vh; color: white; font-family: 'Georgia', serif;">

    <!-- Fixed top bar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style="background: rgba(8,5,16,0.95); border-bottom: 1px solid rgba(244,63,94,0.12)"
    >
      <div class="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
        <router-link
          to="/salones-eventos"
          class="flex items-center gap-2 text-sm transition-all hover:scale-105"
          style="color: #f9a8d4"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          <span class="hidden sm:inline text-xs tracking-widest uppercase">Volver</span>
        </router-link>

        <div class="flex items-center gap-2">
          <div
            class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
          >J</div>
          <span class="text-xs font-semibold tracking-wider" style="color: #f9a8d4">DEMO · Jardines El Cielo</span>
        </div>

        <a
          :href="waCta"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-bold px-4 py-2 rounded-xl transition-all hover:scale-105"
          style="background: linear-gradient(135deg, #f43f5e, #c026d3); color: white"
        >
          Quiero el mío
        </a>
      </div>
    </header>

    <div class="max-w-xl mx-auto">

      <!-- ── HERO ── -->
      <section
        class="relative min-h-screen flex flex-col justify-end pb-12 px-6 pt-20"
        style="background: linear-gradient(180deg, rgba(8,5,16,0) 0%, rgba(8,5,16,0.7) 60%, #080510 100%)"
      >
        <!-- Background gradient simulating a venue photo -->
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <div
            class="absolute inset-0"
            style="background: linear-gradient(135deg, #1a0510 0%, #0d0820 50%, #08050e 100%)"
          ></div>
          <!-- Decorative elements simulating venue ambiance -->
          <div
            class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-40"
            style="background: radial-gradient(ellipse, #f43f5e 0%, transparent 70%)"
          ></div>
          <div
            class="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] rounded-full blur-[60px] opacity-25"
            style="background: radial-gradient(ellipse, #c026d3 0%, transparent 70%)"
          ></div>

          <!-- Simulated string lights -->
          <div class="absolute top-20 left-0 right-0 flex justify-around opacity-20">
            <div v-for="i in 8" :key="i" class="w-1.5 h-1.5 rounded-full bg-amber-200" :style="`margin-top: ${(i % 3) * 15}px`"></div>
          </div>

          <!-- Venue silhouette lines -->
          <div class="absolute bottom-1/3 left-0 right-0 opacity-10" style="border-top: 1px solid rgba(244,63,94,0.5)"></div>
        </div>

        <!-- Logo + name -->
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center"
              style="background: rgba(244,63,94,0.15); border: 1px solid rgba(244,63,94,0.3)"
            >
              <svg class="w-6 h-6" style="color: #f43f5e" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c0 0-6 4-6 10a6 6 0 0012 0C18 6 12 2 12 2z"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h1 class="font-bold text-2xl text-white tracking-wide">Jardines El Cielo</h1>
              <p class="text-xs opacity-50" style="color: #fda4af">Salón de Eventos Premium · Querétaro</p>
            </div>
          </div>
          <p class="text-sm opacity-70 max-w-xs" style="color: #fce7f3">
            El lugar donde los sueños se hacen realidad. Bodas, XV años, jardines y salones disponibles.
          </p>
        </div>

        <!-- CTA buttons -->
        <div class="space-y-3">
          <a
            :href="waCta"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full py-4 rounded-2xl font-bold text-white text-center text-base transition-all hover:scale-[1.02]"
            style="background: linear-gradient(135deg, #f43f5e, #c026d3); box-shadow: 0 0 30px rgba(244,63,94,0.3)"
          >
            💬 Cotizar mi fecha por WhatsApp
          </a>
          <button
            @click="scrollTo('calendario')"
            class="block w-full py-3.5 rounded-2xl font-semibold text-sm text-center border transition-all hover:scale-[1.02]"
            style="border-color: rgba(244,63,94,0.3); color: #f9a8d4; background: rgba(244,63,94,0.05)"
          >
            📅 Ver fechas disponibles
          </button>
        </div>

        <!-- Stats strip -->
        <div class="flex gap-4 mt-6 pt-5" style="border-top: 1px solid rgba(255,255,255,0.08)">
          <div v-for="stat in venueStats" :key="stat.label" class="text-center flex-1">
            <p class="font-bold text-base text-white">{{ stat.value }}</p>
            <p class="text-[10px] opacity-40">{{ stat.label }}</p>
          </div>
        </div>
      </section>

      <!-- ── GALERÍA ── -->
      <section class="px-6 py-10">
        <h2 class="font-bold text-xl mb-6 text-white">Nuestros espacios</h2>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="space in spaces"
            :key="space.name"
            class="relative rounded-2xl overflow-hidden"
            :class="space.featured ? 'col-span-2' : ''"
          >
            <div
              class="flex items-end justify-start p-4"
              :style="`background: ${space.bg}; height: ${space.featured ? '180px' : '130px'}`"
            >
              <div>
                <p class="text-xs font-bold text-white">{{ space.name }}</p>
                <p class="text-[10px] opacity-60 text-white">{{ space.cap }}</p>
              </div>
            </div>
            <!-- Overlay glow -->
            <div class="absolute inset-0 pointer-events-none" :style="`background: linear-gradient(to top, rgba(8,5,16,0.7) 0%, transparent 60%)`"></div>
          </div>
        </div>
      </section>

      <!-- ── PACKAGES ── -->
      <section class="px-6 pb-10">
        <h2 class="font-bold text-xl mb-2 text-white">Paquetes</h2>
        <p class="text-sm opacity-50 mb-6 text-white">Todo incluido para que solo pienses en disfrutar.</p>

        <div class="space-y-4">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="rounded-2xl p-5 border transition-all"
            :style="pkg.featured ? 'background: linear-gradient(135deg, rgba(244,63,94,0.08), rgba(192,38,211,0.06)); border-color: rgba(244,63,94,0.35)' : 'background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.07)'"
          >
            <div class="flex items-start justify-between mb-3">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="font-bold text-base text-white">{{ pkg.name }}</h3>
                  <span
                    v-if="pkg.featured"
                    class="text-[10px] px-2 py-0.5 rounded-full font-bold"
                    style="background: rgba(244,63,94,0.2); color: #f9a8d4; border: 1px solid rgba(244,63,94,0.3)"
                  >Popular</span>
                </div>
                <p class="text-xs opacity-50 text-white">{{ pkg.desc }}</p>
              </div>
              <div class="text-right shrink-0 ml-4">
                <p class="font-black text-lg text-white">{{ pkg.price }}</p>
                <p class="text-[10px] opacity-40 text-white">desde</p>
              </div>
            </div>
            <ul class="space-y-1.5 mb-4">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-center gap-2 text-xs opacity-65 text-white"
              >
                <span style="color: #f43f5e">✓</span>
                {{ f }}
              </li>
            </ul>
            <a
              :href="buildWa(pkg.name)"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full py-3 rounded-xl font-bold text-sm text-center transition-all"
              :style="pkg.featured
                ? 'background: linear-gradient(135deg, #f43f5e, #c026d3); color: white'
                : 'border: 1px solid rgba(244,63,94,0.3); color: #f9a8d4; background: rgba(244,63,94,0.05)'"
            >
              Cotizar este paquete →
            </a>
          </div>
        </div>
      </section>

      <!-- ── CALENDARIO ── -->
      <section id="calendario" class="px-6 pb-10">
        <h2 class="font-bold text-xl mb-2 text-white">Disponibilidad</h2>
        <p class="text-sm opacity-50 mb-6 text-white">Fechas disponibles para el próximo mes.</p>

        <!-- Month label -->
        <div class="flex items-center justify-between mb-4">
          <button class="text-rose-400 font-bold text-sm">&larr;</button>
          <p class="font-bold text-white text-sm">{{ currentMonth }}</p>
          <button class="text-rose-400 font-bold text-sm">&rarr;</button>
        </div>

        <!-- Day names -->
        <div class="grid grid-cols-7 gap-1 mb-2">
          <div
            v-for="d in dayNames"
            :key="d"
            class="text-center text-[10px] font-semibold opacity-35"
          >{{ d }}</div>
        </div>

        <!-- Calendar grid -->
        <div class="grid grid-cols-7 gap-1">
          <div
            v-for="(day, i) in calendarDays"
            :key="i"
            class="aspect-square flex items-center justify-center rounded-xl text-xs font-semibold transition-all cursor-pointer"
            :style="getDayStyle(day)"
            @click="selectDay(day)"
          >
            {{ day.n || '' }}
          </div>
        </div>

        <!-- Legend -->
        <div class="flex gap-5 mt-4 text-[10px]">
          <span class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full" style="background: rgba(244,63,94,0.3); border: 1px solid rgba(244,63,94,0.5)"></span>
            Disponible
          </span>
          <span class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full" style="background: rgba(255,255,255,0.06)"></span>
            Reservado
          </span>
          <span class="flex items-center gap-1.5" v-if="selectedDay">
            <span class="w-3 h-3 rounded-full" style="background: linear-gradient(135deg, #f43f5e, #c026d3)"></span>
            Seleccionado
          </span>
        </div>

        <!-- CTA after selecting -->
        <Transition name="fade">
          <div v-if="selectedDay" class="mt-5">
            <div
              class="p-4 rounded-2xl mb-3"
              style="background: rgba(244,63,94,0.08); border: 1px solid rgba(244,63,94,0.2)"
            >
              <p class="text-sm text-white font-semibold mb-1">📅 {{ selectedDay }}</p>
              <p class="text-xs opacity-60 text-white">¡Esta fecha está disponible! Cotiza ahora antes de que alguien más la tome.</p>
            </div>
            <a
              :href="buildWaDate(selectedDay)"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full py-4 rounded-2xl font-bold text-white text-center text-sm transition-all hover:scale-[1.02]"
              style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
            >
              💬 Cotizar el {{ selectedDay }} por WhatsApp
            </a>
          </div>
        </Transition>
      </section>

      <!-- ── TESTIMONIOS ── -->
      <section class="px-6 pb-10">
        <h2 class="font-bold text-xl mb-6 text-white">Lo que dicen nuestros clientes</h2>
        <div class="space-y-4">
          <div
            v-for="t in demoTestimonials"
            :key="t.name"
            class="p-5 rounded-2xl"
            style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06)"
          >
            <div class="flex gap-0.5 mb-3">
              <span v-for="s in 5" :key="s" style="color: #f43f5e; font-size: 12px">★</span>
            </div>
            <p class="text-sm opacity-70 italic text-white mb-4">"{{ t.quote }}"</p>
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
              >{{ t.initial }}</div>
              <div>
                <p class="text-sm font-semibold text-white">{{ t.name }}</p>
                <p class="text-[10px] opacity-40 text-white">{{ t.event }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── MAPA ── -->
      <section class="px-6 pb-10">
        <h2 class="font-bold text-xl mb-2 text-white">Cómo llegar</h2>
        <p class="text-sm opacity-50 mb-4 text-white">Av. de los Jardines 142, Querétaro, Qro.</p>
        <div
          class="rounded-2xl overflow-hidden flex items-center justify-center"
          style="height: 180px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08)"
        >
          <div class="text-center">
            <div class="text-4xl mb-2">📍</div>
            <p class="text-sm text-white opacity-60">Jardines El Cielo</p>
            <p class="text-xs opacity-30 text-white">Querétaro, México</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              class="mt-3 inline-block text-xs font-bold px-4 py-1.5 rounded-lg"
              style="background: rgba(244,63,94,0.15); color: #f9a8d4; border: 1px solid rgba(244,63,94,0.3)"
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </section>

      <!-- ── CTA FLOTANTE FINAL ── -->
      <div class="sticky bottom-0 px-6 pb-8 pt-4" style="background: linear-gradient(to top, #080510, transparent)">
        <a
          :href="waCta"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full py-4 rounded-2xl font-black text-white text-center text-base transition-all hover:scale-[1.02]"
          style="background: linear-gradient(135deg, #f43f5e, #c026d3); box-shadow: 0 0 40px rgba(244,63,94,0.3)"
        >
          💬 Cotizar por WhatsApp
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const WA_NUMBER = "+525583414659";
const waCta = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("¡Hola! Vi la página de Jardines El Cielo (demo de Devifly) y me interesa algo así para mi salón. ¿Pueden darme información? 🌹")}`;

const buildWa = (pkg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`¡Hola! Me interesa el paquete "${pkg}" para mi evento. ¿Cuál es la disponibilidad y precio exacto? 🎉`)}`;

const buildWaDate = (date) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`¡Hola! Quiero cotizar para el ${date} en Jardines El Cielo. ¿Está disponible? 📅`)}`;

const venueStats = [
  { value: "500+", label: "eventos realizados" },
  { value: "12", label: "años de experiencia" },
  { value: "4.9★", label: "calificación Google" },
];

const spaces = [
  {
    name: "Jardín Principal",
    cap: "Hasta 300 personas",
    featured: true,
    bg: "linear-gradient(135deg, #1a0a1e 0%, #2d0e2a 50%, #1a0510 100%)",
  },
  {
    name: "Salón Dorado",
    cap: "Hasta 150 personas",
    featured: false,
    bg: "linear-gradient(135deg, #1a1208 0%, #2d2010 100%)",
  },
  {
    name: "Terraza Cielo",
    cap: "Hasta 80 personas",
    featured: false,
    bg: "linear-gradient(135deg, #081020 0%, #0d1a30 100%)",
  },
];

const packages = [
  {
    name: "Esencial",
    desc: "Para fiestas íntimas y reuniones especiales",
    price: "$12,000",
    features: [
      "Salón por 6 horas",
      "Mesas y sillas incluidas",
      "Estacionamiento",
      "Limpieza incluida",
    ],
    featured: false,
  },
  {
    name: "Estrella",
    desc: "El más elegido para XV años y bodas",
    price: "$22,000",
    features: [
      "Jardín o salón por 8 horas",
      "Mesas y sillas con mantelería",
      "Iluminación de ambiente",
      "Barra de bebidas básica",
      "Estacionamiento + Seguridad",
    ],
    featured: true,
  },
  {
    name: "Premium",
    desc: "La experiencia completa sin preocupaciones",
    price: "$38,000",
    features: [
      "Todo el Paquete Estrella",
      "Decoración incluida",
      "Catering completo",
      "DJ profesional",
      "Coordinador de evento",
    ],
    featured: false,
  },
];

const dayNames = ["D", "L", "M", "X", "J", "V", "S"];

// Build a simple calendar for demo
const now = new Date();
const monthNames = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];
const currentMonth = computed(() => `${monthNames[now.getMonth()]} ${now.getFullYear()}`);

const unavailableDays = new Set([3, 8, 10, 15, 17, 22, 24, 29]);

const calendarDays = computed(() => {
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push({ n: null, empty: true });
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === now.getDate();
    const isPast = d < now.getDate();
    days.push({
      n: d,
      available: !unavailableDays.has(d) && !isPast,
      unavailable: unavailableDays.has(d),
      past: isPast,
      today: isToday,
    });
  }
  return days;
});

const selectedDay = ref(null);

const getDayStyle = (day) => {
  if (!day.n) return "visibility: hidden";
  if (day.past) return "opacity: 0.2; color: rgba(255,255,255,0.3); cursor: default";
  if (selectedDay.value === `${day.n} de ${monthNames[now.getMonth()]}`) {
    return "background: linear-gradient(135deg, #f43f5e, #c026d3); color: white; cursor: pointer";
  }
  if (day.unavailable) return "background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.2); cursor: default; text-decoration: line-through";
  if (day.today) return "background: rgba(244,63,94,0.2); border: 1px solid rgba(244,63,94,0.5); color: #f9a8d4; cursor: pointer";
  return "background: rgba(244,63,94,0.08); border: 1px solid rgba(244,63,94,0.2); color: #fda4af; cursor: pointer";
};

const selectDay = (day) => {
  if (!day.n || day.past || day.unavailable) return;
  selectedDay.value = `${day.n} de ${monthNames[now.getMonth()]}`;
};

const demoTestimonials = [
  {
    quote: "El jardín quedó perfecto para la boda de mi hija. El equipo fue muy profesional y la decoración superó nuestras expectativas. ¡100% recomendados!",
    name: "Sandra López",
    event: "Boda · 180 invitados",
    initial: "S",
  },
  {
    quote: "Mis XV años fueron un sueño. El salón dorado se vio increíble y la coordinadora estuvo pendiente de todo. ¡Gracias Jardines El Cielo!",
    name: "Valentina Ruiz",
    event: "XV Años · 120 invitados",
    initial: "V",
  },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
