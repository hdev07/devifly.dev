<template>
  <div
    class="inv-esencial"
    style="font-family: &quot;Poppins&quot;, sans-serif"
  >
    <!-- Floating top bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl py-3 px-4 sm:px-6 flex items-center justify-between"
      style="
        background: rgba(255, 255, 255, 0.92);
        border-bottom: 1px solid rgba(167, 216, 255, 0.3);
      "
    >
      <router-link
        to="/invitaciones"
        class="flex items-center gap-2 text-sm transition-colors"
        style="color: #9bb0c8"
      >
        <LucideIcon name="chevron-left" class-name="w-4 h-4" />
        <span class="hidden sm:inline">Volver</span>
      </router-link>
      <span
        class="text-xs font-semibold px-3 py-1 rounded-full"
        style="
          background: rgba(167, 216, 255, 0.2);
          color: #5b9bd5;
          border: 1px solid rgba(167, 216, 255, 0.4);
        "
        >Demo — Plan Basic</span
      >
      <a
        href="/#contact"
        class="text-sm font-semibold transition-colors"
        style="color: #5b9bd5"
        ><span class="inline-flex items-center gap-1"
          >Contratar
          <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" /></span
      ></a>
    </div>

    <!-- HERO -->
    <section
      class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
      style="
        background: linear-gradient(
          180deg,
          #edf6ff 0%,
          #fff5f6 40%,
          #f8f0ff 70%,
          #fff9e6 100%
        );
      "
    >
      <!-- Floating pastel circles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute w-32 h-32 rounded-full opacity-40 animate-esencial-float-1"
          style="background: #fadadd; top: 8%; left: 5%"
        ></div>
        <div
          class="absolute w-24 h-24 rounded-full opacity-30 animate-esencial-float-2"
          style="background: #a7d8ff; top: 15%; right: 8%"
        ></div>
        <div
          class="absolute w-20 h-20 rounded-full opacity-25 animate-esencial-float-3"
          style="background: #d6c1ff; bottom: 25%; left: 10%"
        ></div>
        <div
          class="absolute w-28 h-28 rounded-full opacity-30 animate-esencial-float-1"
          style="background: #fff3b0; bottom: 15%; right: 5%"
        ></div>
        <div
          class="absolute w-16 h-16 rounded-full opacity-20 animate-esencial-float-2"
          style="background: #fadadd; top: 50%; left: 50%"
        ></div>
      </div>

      <div class="relative z-10 max-w-md mx-auto">
        <!-- Dove icon -->
        <div class="mb-3 animate-esencial-bounce-in">
          <LucideIcon name="bird" class-name="w-16 h-16 mx-auto text-[#6aade4]" />
        </div>

        <!-- Event type -->
        <div class="flex items-center justify-center gap-3 mb-3">
          <div
            class="h-px w-10"
            style="background: linear-gradient(to right, transparent, #a7d8ff)"
          ></div>
          <span
            class="text-xs tracking-[0.35em] uppercase font-medium"
            style="color: #5b9bd5"
            >Bautizo de</span
          >
          <div
            class="h-px w-10"
            style="background: linear-gradient(to left, transparent, #a7d8ff)"
          ></div>
        </div>

        <!-- Name -->
        <h1
          class="mb-4 animate-esencial-fade-up"
          style="
            font-family: &quot;Baloo 2&quot;, cursive;
            font-size: clamp(3.5rem, 14vw, 6.5rem);
            line-height: 1;
            color: #6aade4;
          "
        >
          Mateo
        </h1>

        <!-- Blessing message -->
        <p
          class="text-sm mb-5 max-w-xs mx-auto"
          style="color: #b0a7c0; line-height: 1.7"
        >
          Con la bendición de Dios,<br />celebramos su llegada a la fe
        </p>

        <!-- Parents -->
        <p class="text-xs mb-1" style="color: #c0b0c8">Hijos de</p>
        <p class="font-semibold text-sm mb-8" style="color: #8b7aaf">
          Andrea & Carlos Mendoza
        </p>

        <!-- Date chip -->
        <div
          class="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-8 animate-esencial-fade-up"
          style="
            background: rgba(167, 216, 255, 0.15);
            border: 1.5px solid rgba(167, 216, 255, 0.35);
          "
        >
          <LucideIcon
            name="calendar-days"
            class-name="w-4 h-4 text-[#5b9bd5]"
          />
          <span class="font-medium text-sm" style="color: #5b9bd5"
            >Sábado, 14 de Junio · 12:00 PM</span
          >
        </div>

        <!-- Countdown -->
        <div class="mb-8">
          <p
            class="text-[10px] tracking-[0.3em] uppercase mb-4 font-medium"
            style="color: #c0b0d0"
          >
            Faltan
          </p>
          <div class="flex items-center justify-center gap-2.5">
            <div
              v-for="unit in countdown"
              :key="unit.label"
              class="text-center"
            >
              <div
                class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold"
                style="
                  background: rgba(214, 193, 255, 0.15);
                  border: 1.5px solid rgba(214, 193, 255, 0.3);
                  color: #8b7aaf;
                  font-family: &quot;Baloo 2&quot;, cursive;
                "
              >
                {{ unit.val }}
              </div>
              <p
                class="text-[9px] mt-1.5 tracking-widest font-medium"
                style="color: #c0b0d0"
              >
                {{ unit.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- Music toggle removed for Basic -->
        <!-- Scroll cue -->
        <div class="mt-8 animate-bounce">
          <LucideIcon name="chevron-down" class-name="w-6 h-6 mx-auto text-[#a7d8ff]" />
        </div>
      </div>
    </section>

    <!-- ITINERARIO -->
    <section
      class="py-16 px-6"
      style="background: linear-gradient(180deg, #fff9e6, #ffffff)"
    >
      <div class="max-w-md mx-auto">
        <h2
          class="text-center mb-10"
          style="
            font-family: &quot;Baloo 2&quot;, cursive;
            font-size: 2rem;
            color: #6aade4;
          "
        >
          Nuestro Itinerario
        </h2>
        <div
          class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#a7d8ff] before:via-[#d6c1ff] before:to-[#fadadd]"
        >
          <div
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#a7d8ff] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow opacity-90"
            >
              <LucideIcon name="landmark" class-name="w-5 h-5" />
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border-2 border-[#a7d8ff]/30 bg-white shadow-sm"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1"
              >
                <h4 class="font-bold text-[#5b9bd5] text-base">Ceremonia</h4>
                <span
                  class="text-xs font-semibold text-[#6aade4] bg-[#edf6ff] px-2 py-0.5 rounded-full w-fit"
                  >12:00 PM</span
                >
              </div>
              <p class="text-sm text-[#b0a7c0]">Parroquia San José</p>
            </div>
          </div>
          <div
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#fadadd] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow opacity-90"
            >
              <LucideIcon name="camera" class-name="w-5 h-5" />
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border-2 border-[#fadadd]/30 bg-white shadow-sm"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1"
              >
                <h4 class="font-bold text-[#d4849a] text-base">
                  Sesión de Fotos
                </h4>
                <span
                  class="text-xs font-semibold text-[#d4849a] bg-[#fff5f6] px-2 py-0.5 rounded-full w-fit"
                  >1:30 PM</span
                >
              </div>
              <p class="text-sm text-[#c0b0c8]">Jardines del Salón</p>
            </div>
          </div>
          <div
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#d6c1ff] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow opacity-90"
            >
              <LucideIcon name="utensils" class-name="w-5 h-5" />
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border-2 border-[#d6c1ff]/30 bg-white shadow-sm"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1"
              >
                <h4 class="font-bold text-[#8b7aaf] text-base">Recepción</h4>
                <span
                  class="text-xs font-semibold text-[#8b7aaf] bg-[#f8f0ff] px-2 py-0.5 rounded-full w-fit"
                  >2:00 PM</span
                >
              </div>
              <p class="text-sm text-[#b0a7c0]">Salón Los Arcos</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVENT DETAILS + MAP -->
    <section class="py-16 px-6" style="background: #ffffff">
      <div class="max-w-2xl mx-auto">
        <h2
          class="text-center mb-10"
          style="
            font-family: &quot;Baloo 2&quot;, cursive;
            font-size: 2rem;
            color: #6aade4;
          "
        >
          ¿Cuándo y Dónde?
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div
            class="p-6 rounded-3xl text-center transition-transform hover:-translate-y-1"
            style="
              background: linear-gradient(135deg, #f8f0ff, #faf5ff);
              border: 1.5px solid rgba(214, 193, 255, 0.3);
            "
          >
            <LucideIcon
              name="landmark"
              class-name="w-10 h-10 mb-3 mx-auto text-[#8b7aaf]"
            />
            <h3
              class="font-bold text-lg mb-1"
              style="color: #8b7aaf; font-family: &quot;Baloo 2&quot;, cursive"
            >
              Ceremonia
            </h3>
            <p class="text-sm" style="color: #a89cc0">Parroquia San José</p>
            <p class="text-xs mt-1" style="color: #c0b0d0">
              12:00 PM · Guadalajara, Jal.
            </p>
          </div>
          <div
            class="p-6 rounded-3xl text-center transition-transform hover:-translate-y-1"
            style="
              background: linear-gradient(135deg, #fff5f6, #fff0f5);
              border: 1.5px solid rgba(250, 218, 221, 0.4);
            "
          >
            <LucideIcon
              name="sparkles"
              class-name="w-10 h-10 mb-3 mx-auto text-[#d4849a]"
            />
            <h3
              class="font-bold text-lg mb-1"
              style="color: #d4849a; font-family: &quot;Baloo 2&quot;, cursive"
            >
              Celebración
            </h3>
            <p class="text-sm" style="color: #c9a0ae">Salón Los Arcos</p>
            <p class="text-xs mt-1" style="color: #d4b8c0">
              2:00 PM · Guadalajara, Jal.
            </p>
          </div>
        </div>

        <!-- Google Maps Embed -->
        <div
          class="rounded-3xl overflow-hidden shadow-lg"
          style="border: 1.5px solid rgba(167, 216, 255, 0.3)"
        >
          <iframe
            src="https://maps.google.com/maps?q=Parroquia+San+Jose+Guadalajara+Jalisco&t=&z=15&ie=UTF8&iwloc=&output=embed"
            class="w-full h-56 sm:h-72"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Map action buttons -->
        <div class="flex flex-col sm:flex-row gap-3 mt-5">
          <a
            href="https://maps.google.com/?q=Parroquia+San+Jose+Guadalajara+Jalisco"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all hover:scale-105"
            style="
              background: rgba(167, 216, 255, 0.15);
              color: #5b9bd5;
              border: 1.5px solid rgba(167, 216, 255, 0.3);
            "
          >
            <LucideIcon name="map-pin" class-name="w-4 h-4" /> Cómo llegar
          </a>
        </div>
      </div>
    </section>

    <!-- DETALLES EXTRAS -->
    <section
      class="py-16 px-6"
      style="background: linear-gradient(180deg, #ffffff, #f8f0ff)"
    >
      <div class="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        <!-- Código de Vestimenta -->
        <div
          class="p-6 rounded-3xl text-center bg-white"
          style="border: 1.5px solid rgba(214, 193, 255, 0.3)"
        >
          <LucideIcon
            name="shirt"
            class-name="w-10 h-10 mb-3 mx-auto text-[#8b7aaf]"
          />
          <h3
            class="font-bold text-lg mb-1"
            style="color: #8b7aaf; font-family: &quot;Baloo 2&quot;, cursive"
          >
            Código de Vestimenta
          </h3>
          <p class="text-sm text-[#a89cc0]">Formal de día</p>
          <p class="text-xs mt-1 text-[#c0b0d0]">
            Evitar colores blancos y pasteles
          </p>
        </div>

        <!-- Hashtag -->
        <div
          class="p-6 rounded-3xl text-center bg-white"
          style="border: 1.5px solid rgba(167, 216, 255, 0.3)"
        >
          <LucideIcon
            name="square-pen"
            class-name="w-10 h-10 mb-3 mx-auto text-[#5b9bd5]"
          />
          <h3
            class="font-bold text-lg mb-1"
            style="color: #5b9bd5; font-family: &quot;Baloo 2&quot;, cursive"
          >
            Hashtag del Evento
          </h3>
          <p class="text-sm text-[#9bb0c8]">#BautizoMateo2025</p>
          <p class="text-xs mt-1 text-[#b0bdcc]">¡Etiquétanos en tus fotos!</p>
        </div>

        <!-- Mesa de Regalos -->
        <div
          class="col-span-1 sm:col-span-2 p-6 rounded-3xl text-center bg-white"
          style="border: 1.5px solid rgba(250, 218, 221, 0.4)"
        >
          <LucideIcon
            name="gift"
            class-name="w-10 h-10 mb-3 mx-auto text-[#d4849a]"
          />
          <h3
            class="font-bold text-lg mb-1"
            style="color: #d4849a; font-family: &quot;Baloo 2&quot;, cursive"
          >
            Mesa de Regalos
          </h3>
          <p class="text-sm text-[#c9a0ae] mb-3">
            Tu presence es nuestro mejor regalo, pero si deseas tener un
            detalle:
          </p>
          <div class="flex justify-center gap-3">
            <a
              href="#"
              class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 bg-[#fff5f6] text-[#d4849a]"
              style="border: 1px solid rgba(250, 218, 221, 0.6)"
              >Liverpool</a
            >
            <a
              href="#"
              class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 bg-[#edf6ff] text-[#5b9bd5]"
              style="border: 1px solid rgba(167, 216, 255, 0.6)"
              >Amazon</a
            >
          </div>
        </div>

        <!-- Hospedaje -->
        <div
          class="col-span-1 sm:col-span-2 p-6 rounded-3xl text-center bg-white"
          style="border: 1.5px solid rgba(255, 243, 176, 0.6)"
        >
          <LucideIcon
            name="hotel"
            class-name="w-10 h-10 mb-3 mx-auto text-[#d4af37]"
          />
          <h3
            class="font-bold text-lg mb-1"
            style="color: #d4af37; font-family: &quot;Baloo 2&quot;, cursive"
          >
            Sugerencia de Hospedaje
          </h3>
          <p class="text-sm text-[#b5a08c] mb-3">
            Para nuestros invitados foráneos, recomendamos estos hoteles
            cercanos:
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#"
              class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 bg-[#fff9e6] text-[#c6a75e]"
              style="border: 1px solid rgba(255, 243, 176, 0.6)"
              >Hotel Fiesta Americana</a
            >
            <a
              href="#"
              class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 bg-[#fff9e6] text-[#c6a75e]"
              style="border: 1px solid rgba(255, 243, 176, 0.6)"
              >Hyatt Regency</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- GALERÍA DE FOTOS -->
    <section class="py-16 px-6" style="background: #f8f0ff">
      <div class="max-w-3xl mx-auto">
        <h2
          class="text-center mb-10"
          style="
            font-family: &quot;Baloo 2&quot;, cursive;
            font-size: 2rem;
            color: #8b7aaf;
          "
        >
          <span class="inline-flex items-center gap-2"
            ><LucideIcon name="camera" class-name="w-7 h-7" />Nuestra
            Galería</span
          >
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div
            class="aspect-square rounded-2xl bg-white border-2 border-[#d6c1ff]/30 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <LucideIcon name="baby" class-name="w-10 h-10 text-[#6aade4]" />
          </div>
          <div
            class="aspect-square rounded-2xl bg-[#fff5f6] border-2 border-[#fadadd]/30 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <LucideIcon name="heart" class-name="w-10 h-10 text-[#fadadd]" />
          </div>
          <div
            class="aspect-square rounded-2xl bg-[#edf6ff] border-2 border-[#a7d8ff]/30 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <LucideIcon name="package" class-name="w-10 h-10 text-[#b0a7c0]" />
          </div>
          <div
            class="aspect-square rounded-2xl bg-[#fff9e6] border-2 border-[#fff3b0]/50 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <LucideIcon name="sparkles" class-name="w-10 h-10 text-[#c6a75e]" />
          </div>
          <div
            class="aspect-square rounded-2xl bg-white border-2 border-[#d6c1ff]/30 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <LucideIcon name="smile" class-name="w-10 h-10 text-[#d4849a]" />
          </div>
          <div
            class="aspect-square rounded-2xl bg-[#fff5f6] border-2 border-[#fadadd]/30 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <LucideIcon name="bird" class-name="w-10 h-10 text-[#5b9bd5]" />
          </div>
        </div>
      </div>
    </section>

    <!-- RSVP VIA WHATSAPP -->
    <section
      class="py-16 px-6"
      style="background: linear-gradient(180deg, #fff9e6, #fff5f6)"
    >
      <div class="max-w-md mx-auto text-center">
        <h2
          class="mb-3"
          style="
            font-family: &quot;Baloo 2&quot;, cursive;
            font-size: 2rem;
            color: #6aade4;
          "
        >
          <span class="inline-flex items-center gap-2"
            ><LucideIcon name="mail" class-name="w-7 h-7" />¿Nos
            acompañas?</span
          >
        </h2>
        <p class="text-sm mb-8" style="color: #b0a7c0">
          Confirma tu asistencia antes del
          <strong style="color: #8b7aaf">1 de mayo de 2025</strong>
        </p>

        <!-- RSVP Form -->
        <form class="space-y-4 max-w-sm mx-auto" @submit.prevent="handleRSVP">
          <input
            v-model="rsvpForm.name"
            type="text"
            placeholder="Tu nombre completo"
            required
            class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
            style="
              background: #ffffff;
              border: 1.5px solid rgba(167, 216, 255, 0.4);
              color: #444;
            "
          />
          <button
            type="submit"
            class="w-full py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-md"
            style="background: linear-gradient(135deg, #a7d8ff, #7ac0ff)"
          >
            {{
              rsvpSubmitted ? "¡Gracias por confirmar!" : "Confirmar asistencia"
            }}
          </button>
        </form>

        <p class="text-xs mt-6" style="color: #c0b0c8">
          También puedes escribirnos directamente al
          <strong style="color: #8b7aaf">55 5123 4567</strong>
        </p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      class="py-10 text-center"
      style="background: linear-gradient(180deg, #edf6ff, #f8f0ff)"
    >
      <div class="mb-3">
        <LucideIcon
          name="sparkles"
          class-name="w-8 h-8 mx-auto text-[#8b7aaf]"
        />
      </div>
      <p class="text-sm font-medium" style="color: #b0a7c0">
        Con amor y fe, la familia Mendoza
      </p>
      <p class="text-xs mt-3" style="color: #d0c8d8">
        Hecho con dedicación por
        <a
          href="https://devifly.dev"
          class="font-semibold transition-colors hover:underline"
          style="color: #5b9bd5"
          >devifly.dev</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LucideIcon from "../../components/LucideIcon.vue";

let countdownInterval = null;
const rsvpSubmitted = ref(false);
const rsvpForm = ref({ name: "", attending: "" });

const handleRSVP = () => {
  rsvpSubmitted.value = true;
  setTimeout(() => {
    rsvpSubmitted.value = false;
    rsvpForm.value.name = "";
  }, 3000);
};

const countdown = ref([
  { label: "DÍAS", val: "00" },
  { label: "HRS", val: "00" },
  { label: "MIN", val: "00" },
  { label: "SEG", val: "00" },
]);

onMounted(() => {
  const target = new Date("2025-06-14T12:00:00");
  const update = () => {
    const diff = target - Date.now();
    if (diff <= 0) return;
    countdown.value = [
      {
        label: "DÍAS",
        val: String(Math.floor(diff / 86400000)).padStart(2, "0"),
      },
      {
        label: "HRS",
        val: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
      },
      {
        label: "MIN",
        val: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
      },
      {
        label: "SEG",
        val: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      },
    ];
  };
  update();
  countdownInterval = setInterval(update, 1000);
});

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval);
});
</script>

<style scoped>
@keyframes esencial-float-1 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}
@keyframes esencial-float-2 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-3deg);
  }
}
@keyframes esencial-float-3 {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-25px);
  }
}
@keyframes esencial-bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes esencial-fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-esencial-float-1 {
  animation: esencial-float-1 6s ease-in-out infinite;
}
.animate-esencial-float-2 {
  animation: esencial-float-2 8s ease-in-out infinite;
}
.animate-esencial-float-3 {
  animation: esencial-float-3 7s ease-in-out infinite;
}
.animate-esencial-bounce-in {
  animation: esencial-bounce-in 0.8s ease-out both;
}
.animate-esencial-fade-up {
  animation: esencial-fade-up 0.7s ease-out both 0.3s;
  opacity: 0;
}

.inv-esencial {
  min-height: 100vh;
  background: #ffffff;
  -webkit-user-select: auto;
  user-select: auto;
}
.inv-esencial * {
  cursor: auto !important;
}
.inv-esencial a,
.inv-esencial button {
  cursor: pointer !important;
}
</style>
