<template>
  <div class="landing-demo min-h-screen bg-brand-dark text-white">
    <!-- Back link (floating) -->
    <router-link
      to="/landings"
      class="fixed top-5 left-5 z-[60] flex items-center gap-2 text-xs text-gray-500 hover:text-white tracking-wide uppercase transition"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span class="hidden sm:inline">Volver</span>
    </router-link>

    <!-- NavBar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      "
    >
      <div
        class="max-w-6xl mx-auto px-5 flex items-center justify-between h-14 sm:h-16"
      >
        <a
          href="#"
          class="font-heading text-xl sm:text-2xl tracking-[0.15em] text-white uppercase"
        >
          Barbería JAFZ
          <span class="text-gray-600 font-body text-xs hidden sm:inline"
            >× El Salón</span
          >
        </a>

        <nav class="hidden md:flex items-center gap-6">
          <a
            href="#barberia"
            class="text-xs text-gray-400 hover:text-brand-red tracking-wide uppercase transition"
            >Barbería</a
          >
          <a
            href="#salon"
            class="text-xs text-gray-400 hover:text-brand-gold tracking-wide uppercase transition"
            >Salón</a
          >
          <a
            href="#precios"
            class="text-xs text-gray-400 hover:text-white tracking-wide uppercase transition"
            >Precios</a
          >
          <a
            href="#galeria"
            class="text-xs text-gray-400 hover:text-white tracking-wide uppercase transition"
            >Galería</a
          >
        </nav>

        <a
          href="#precios"
          class="text-xs sm:text-sm font-semibold text-white bg-brand-red hover:bg-brand-red-dark px-4 py-2 rounded transition tracking-wide uppercase"
        >
          Reservar
        </a>
      </div>
    </header>

    <!-- Hero -->
    <section
      class="relative bg-black min-h-screen flex flex-col overflow-hidden"
    >
      <!-- Background: split image -->
      <div class="absolute inset-0 hidden md:flex">
        <div class="w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1200&q=80"
            alt=""
            class="w-full h-full object-cover scale-105"
          />
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        <div class="w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
            alt=""
            class="w-full h-full object-cover scale-105"
          />
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black pointer-events-none"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none"
        ></div>
      </div>

      <!-- Mobile background -->
      <div class="absolute inset-0 md:hidden">
        <img
          src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=900&q=80"
          alt=""
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/70"></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex-1 flex items-center">
        <div class="max-w-6xl mx-auto px-5 w-full py-28 sm:py-32">
          <!-- Social proof -->
          <div class="flex items-center gap-2 mb-8">
            <div class="flex -space-x-2">
              <div
                v-for="(letter, n) in ['A', 'B', 'C', 'M']"
                :key="n"
                class="w-7 h-7 rounded-full bg-brand-gray border-2 border-black flex items-center justify-center text-[10px] text-gray-500 font-medium"
              >
                {{ letter }}
              </div>
            </div>
            <p class="text-gray-500 text-xs">
              +300 clientes confían en nosotros
            </p>
          </div>

          <h1
            class="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.85] text-white tracking-wide"
          >
            Barbería<br />
            <span class="text-brand-gold">&amp;</span> Salón
          </h1>

          <p
            class="text-gray-400 text-sm sm:text-base mt-6 leading-relaxed max-w-md"
          >
            Dos expertos bajo un mismo techo. Cortes, barba, uñas, tintes,
            maquillaje — todo lo que necesitas para verte increíble.
          </p>

          <!-- Dual CTA -->
          <div
            class="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a
              :href="waLinkAlonso"
              target="_blank"
              rel="noopener"
              class="bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm px-6 py-3 rounded transition inline-flex items-center gap-2"
            >
              ✂️ Barbería — Alonso
            </a>
            <a
              :href="waLinkBlanca"
              target="_blank"
              rel="noopener"
              class="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm px-6 py-3 rounded transition inline-flex items-center gap-2"
            >
              ✨ Salón — Blanca
            </a>
          </div>

          <!-- Quick info -->
          <div class="mt-12 flex gap-8 text-xs text-gray-600">
            <div>
              <p class="text-white font-medium text-sm tabular-nums">
                12 – 22h
              </p>
              <p>Mar a Dom</p>
            </div>
            <div class="w-px bg-white/[0.06]"></div>
            <div>
              <p class="text-white font-medium text-sm">Hombres y Mujeres</p>
              <p>Servicios completos</p>
            </div>
            <div class="w-px bg-white/[0.06] hidden sm:block"></div>
            <div class="hidden sm:block">
              <p class="text-white font-medium text-sm">2 especialistas</p>
              <p>Atención personalizada</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom promo -->
      <div
        class="relative z-10 border-t border-white/[0.04] bg-black/80 backdrop-blur-sm"
      >
        <div
          class="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p class="text-gray-400 text-sm">
            <span class="text-brand-red font-semibold">Promo</span> — Corte +
            barba por $150 esta semana
          </p>
          <a
            :href="waLinkAlonso"
            target="_blank"
            rel="noopener"
            class="text-xs text-white hover:text-brand-red transition inline-flex items-center gap-1 shrink-0"
          >
            Aprovechar →
          </a>
        </div>
      </div>
    </section>

    <!-- Marquee Banner -->
    <div class="bg-brand-red py-2.5 overflow-hidden select-none">
      <div class="animate-marquee flex whitespace-nowrap">
        <span
          v-for="n in 2"
          :key="n"
          class="flex items-center gap-8 text-white text-xs font-bold tracking-[0.2em] uppercase mx-4"
        >
          <span>Barbería: Corte + barba $150</span>
          <span class="text-white/40">✦</span>
          <span>Salón: Tinte desde $300</span>
          <span class="text-white/40">✦</span>
          <span>Citas limitadas por día</span>
          <span class="text-white/40">✦</span>
          <span>Martes a Domingo</span>
          <span class="text-white/40">✦</span>
          <span>Uñas gelish $150</span>
          <span class="text-white/40">✦</span>
          <span>WhatsApp: respuesta en 15 min</span>
          <span class="text-white/40 mr-8">✦</span>
        </span>
      </div>
    </div>

    <!-- Team Section -->
    <section class="bg-brand-dark py-20 sm:py-28 overflow-hidden">
      <div class="max-w-6xl mx-auto px-5">
        <p
          class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3"
        >
          El equipo
        </p>
        <h2
          class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95] mb-14 max-w-md"
        >
          Dos especialistas,<br />un solo estándar.
        </h2>

        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <!-- Alonso -->
          <div class="group relative">
            <div class="aspect-[3/4] overflow-hidden rounded-lg bg-brand-gray">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                alt="Alonso Flores - Barbero"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              ></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <p
                class="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-1"
              >
                Barbería
              </p>
              <h3 class="font-heading text-3xl text-white tracking-wide">
                Alonso Flores
              </h3>
              <p class="text-gray-400 text-sm mt-2 max-w-xs">
                Cortes, barba, cejas, mascarillas y grecas. Estilo masculino con
                precisión.
              </p>
              <a
                :href="waLinkAlonso"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-red hover:bg-brand-red-dark px-5 py-2.5 rounded transition"
              >
                💬 Agendar con Alonso
              </a>
            </div>
          </div>

          <!-- Blanca -->
          <div class="group relative">
            <div class="aspect-[3/4] overflow-hidden rounded-lg bg-brand-gray">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Blanca Trejo - Estilista"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              ></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <p
                class="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-1"
              >
                Salón
              </p>
              <h3 class="font-heading text-3xl text-white tracking-wide">
                Blanca Trejo
              </h3>
              <p class="text-gray-400 text-sm mt-2 max-w-xs">
                Corte, tintes, luces, depilación, uñas y maquillaje. Belleza
                integral.
              </p>
              <a
                :href="waLinkBlanca"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-gold hover:bg-brand-gold-dark px-5 py-2.5 rounded transition"
              >
                💬 Agendar con Blanca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Barbería Section -->
    <section id="barberia" class="bg-black py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <div class="grid md:grid-cols-5 gap-10 md:gap-14">
          <div class="md:col-span-3">
            <div class="mb-10">
              <p
                class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3"
              >
                Barbería
              </p>
              <h2
                class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95]"
              >
                Estilo masculino,<br />precisión total.
              </h2>
              <p class="text-gray-500 text-sm mt-3">
                Atendido por
                <span class="text-white font-medium">Alonso Flores</span>
              </p>
            </div>

            <div class="divide-y divide-white/[0.06]">
              <div
                v-for="service in barberiaServices"
                :key="service.name"
                class="group py-5 flex items-center justify-between gap-4"
              >
                <div class="min-w-0">
                  <h3
                    class="text-white text-lg font-medium group-hover:text-brand-red transition"
                  >
                    {{ service.name }}
                  </h3>
                  <p class="text-gray-500 text-sm mt-0.5">{{ service.desc }}</p>
                </div>
                <span
                  class="shrink-0 text-gray-700 group-hover:text-brand-red transition"
                  >→</span
                >
              </div>
            </div>
          </div>

          <div class="md:col-span-2 hidden md:block">
            <div class="sticky top-24">
              <div
                class="aspect-[3/4] rounded-lg overflow-hidden bg-brand-gray"
              >
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
                  alt="Barbería"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <a
                :href="waLinkAlonso"
                target="_blank"
                rel="noopener"
                class="mt-5 w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm py-3 rounded transition flex items-center justify-center gap-2"
              >
                💬 Agendar con Alonso
              </a>
            </div>
          </div>
        </div>

        <!-- Mobile CTA -->
        <div class="md:hidden mt-8">
          <a
            :href="waLinkAlonso"
            target="_blank"
            rel="noopener"
            class="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm py-3.5 rounded transition flex items-center justify-center gap-2"
          >
            💬 Agendar con Alonso
          </a>
        </div>
      </div>
    </section>

    <!-- Salón Section -->
    <section id="salon" class="bg-brand-dark py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <div class="grid md:grid-cols-5 gap-10 md:gap-14">
          <div class="md:col-span-2 hidden md:block md:order-1">
            <div class="sticky top-24">
              <div
                class="aspect-[3/4] rounded-lg overflow-hidden bg-brand-gray"
              >
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Salón de belleza"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <a
                :href="waLinkBlanca"
                target="_blank"
                rel="noopener"
                class="mt-5 w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm py-3 rounded transition flex items-center justify-center gap-2"
              >
                💬 Agendar con Blanca
              </a>
            </div>
          </div>

          <div class="md:col-span-3 md:order-2">
            <div class="mb-10">
              <p
                class="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-3"
              >
                Salón de belleza
              </p>
              <h2
                class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95]"
              >
                Belleza integral,<br />resultados reales.
              </h2>
              <p class="text-gray-500 text-sm mt-3">
                Atendido por
                <span class="text-white font-medium">Blanca Trejo</span>
              </p>
            </div>

            <div class="divide-y divide-white/[0.06]">
              <div
                v-for="service in salonServices"
                :key="service.name"
                class="group py-5 flex items-center justify-between gap-4"
              >
                <div class="min-w-0">
                  <h3
                    class="text-white text-lg font-medium group-hover:text-brand-gold transition"
                  >
                    {{ service.name }}
                  </h3>
                  <p class="text-gray-500 text-sm mt-0.5">{{ service.desc }}</p>
                </div>
                <span
                  class="shrink-0 text-gray-700 group-hover:text-brand-gold transition"
                  >→</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile CTA -->
        <div class="md:hidden mt-8">
          <a
            :href="waLinkBlanca"
            target="_blank"
            rel="noopener"
            class="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm py-3.5 rounded transition flex items-center justify-center gap-2"
          >
            💬 Agendar con Blanca
          </a>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="galeria" class="bg-black py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <div
          class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <p
              class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3"
            >
              Resultados
            </p>
            <h2
              class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95]"
            >
              Así se ve nuestro trabajo.
            </h2>
          </div>
        </div>

        <!-- Barbería gallery -->
        <div class="mb-6">
          <p
            class="text-brand-red text-[11px] font-bold tracking-[0.25em] uppercase mb-3"
          >
            Barbería
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div
              v-for="img in barberiaImages"
              :key="img.alt"
              class="aspect-square rounded-lg overflow-hidden bg-brand-gray"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Salón gallery -->
        <div>
          <p
            class="text-brand-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-3"
          >
            Salón
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div
              v-for="img in salonImages"
              :key="img.alt"
              class="aspect-square rounded-lg overflow-hidden bg-brand-gray"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <a
            :href="waLinkAlonso"
            target="_blank"
            rel="noopener"
            class="text-sm text-brand-red hover:text-white transition inline-flex items-center gap-1"
          >
            Quiero ese corte →
          </a>
          <span class="text-gray-700 hidden sm:block">·</span>
          <a
            :href="waLinkBlanca"
            target="_blank"
            rel="noopener"
            class="text-sm text-brand-gold hover:text-white transition inline-flex items-center gap-1"
          >
            Quiero ese look →
          </a>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="precios" class="bg-black py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <div class="mb-12">
          <p
            class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3"
          >
            Precios
          </p>
          <h2
            class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95]"
          >
            Sin sorpresas.
          </h2>
        </div>

        <!-- Toggle -->
        <div class="flex items-center gap-4 mb-10">
          <button
            @click="activeTab = 'barberia'"
            class="relative pb-2 text-sm font-semibold tracking-wide uppercase transition cursor-pointer"
            :class="
              activeTab === 'barberia'
                ? 'text-brand-red'
                : 'text-gray-600 hover:text-gray-400'
            "
          >
            Barbería
            <span
              class="absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-300"
              :class="activeTab === 'barberia' ? 'w-full' : 'w-0'"
            ></span>
          </button>
          <span class="text-gray-700">/</span>
          <button
            @click="activeTab = 'salon'"
            class="relative pb-2 text-sm font-semibold tracking-wide uppercase transition cursor-pointer"
            :class="
              activeTab === 'salon'
                ? 'text-brand-gold'
                : 'text-gray-600 hover:text-gray-400'
            "
          >
            Salón
            <span
              class="absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300"
              :class="activeTab === 'salon' ? 'w-full' : 'w-0'"
            ></span>
          </button>
        </div>

        <!-- Service cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a
            v-for="item in activePricing"
            :key="item.name"
            :href="whatsappLink(item.name)"
            target="_blank"
            rel="noopener"
            class="group relative bg-brand-gray/40 border border-white/[0.04] rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-transparent block"
            :class="
              activeTab === 'barberia'
                ? 'hover:bg-brand-red/[0.07]'
                : 'hover:bg-brand-gold/[0.07]'
            "
          >
            <span
              v-if="item.tag"
              class="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm"
              :class="
                activeTab === 'barberia'
                  ? 'text-brand-red bg-brand-red/10'
                  : 'text-brand-gold bg-brand-gold/10'
              "
              >{{ item.tag }}</span
            >

            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
              :class="
                activeTab === 'barberia'
                  ? 'bg-brand-red/10 text-brand-red group-hover:bg-brand-red/20'
                  : 'bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold/20'
              "
            >
              <span class="text-lg">{{ item.icon }}</span>
            </div>

            <h3
              class="text-white font-medium text-base mb-1 group-hover:translate-x-0.5 transition-transform duration-300"
            >
              {{ item.name }}
            </h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-4">
              {{ item.desc }}
            </p>

            <div class="flex items-center justify-between">
              <span class="font-heading text-2xl tracking-wide text-white">{{
                item.price
              }}</span>
              <span
                class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                :class="
                  activeTab === 'barberia'
                    ? 'bg-brand-red text-white'
                    : 'bg-brand-gold text-white'
                "
                >→</span
              >
            </div>
          </a>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-12 pt-8 border-t border-white/[0.06]">
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
            <div>
              <p class="text-white font-medium">
                {{
                  activeTab === "barberia"
                    ? "¿Listo para tu corte?"
                    : "¿Lista para tu cita?"
                }}
              </p>
              <p class="text-gray-500 text-sm mt-0.5">
                Respuesta en menos de 5 min por WhatsApp.
              </p>
            </div>
            <a
              :href="activeTab === 'barberia' ? waLinkAlonso : waLinkBlanca"
              target="_blank"
              rel="noopener"
              class="font-semibold text-sm px-7 py-3.5 rounded transition inline-flex items-center gap-2 tracking-wide uppercase shrink-0 text-white"
              :class="
                activeTab === 'barberia'
                  ? 'bg-brand-red hover:bg-brand-red-dark'
                  : 'bg-brand-gold hover:bg-brand-gold-dark'
              "
            >
              💬
              {{
                activeTab === "barberia"
                  ? "Agendar con Alonso"
                  : "Agendar con Blanca"
              }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-brand-dark py-20 sm:py-28 overflow-hidden">
      <div class="max-w-6xl mx-auto px-5">
        <p
          class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3"
        >
          Clientes reales
        </p>
        <h2
          class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95] mb-12"
        >
          No lo decimos nosotros.
        </h2>
      </div>

      <div class="max-w-6xl mx-auto px-5">
        <div
          class="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0"
        >
          <blockquote
            v-for="t in testimonials"
            :key="t.name"
            class="bg-brand-gray/50 border border-white/[0.04] rounded-lg p-6 shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-start"
          >
            <p class="text-gray-300 text-sm leading-relaxed mb-5">
              "{{ t.text }}"
            </p>
            <footer class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                :class="
                  t.type === 'barberia'
                    ? 'bg-brand-red/20 text-brand-red'
                    : 'bg-brand-gold/20 text-brand-gold'
                "
              >
                {{ t.name.charAt(0) }}
              </div>
              <div>
                <p class="text-white text-sm font-medium">{{ t.name }}</p>
                <p
                  class="text-[10px] uppercase tracking-wider"
                  :class="
                    t.type === 'barberia' ? 'text-brand-red' : 'text-brand-gold'
                  "
                >
                  {{ t.type === "barberia" ? "Barbería" : "Salón" }}
                </p>
              </div>
              <div class="flex gap-0.5 ml-auto">
                <span v-for="n in 5" :key="n" class="text-xs text-brand-red"
                  >★</span
                >
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Location & CTA -->
    <section id="ubicacion" class="bg-black py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <!-- Big CTA -->
        <div class="text-center mb-16">
          <h2
            class="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-[0.85]"
          >
            ¿Listo para<br />tu cita?
          </h2>
          <p class="text-gray-500 text-sm sm:text-base mt-4 max-w-md mx-auto">
            Elige tu especialista y agenda en segundos por WhatsApp.
          </p>
          <div
            class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              :href="waLinkAlonso"
              target="_blank"
              rel="noopener"
              class="bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm px-8 py-3.5 rounded transition inline-flex items-center gap-2"
            >
              ✂️ Barbería — Alonso
            </a>
            <a
              :href="waLinkBlanca"
              target="_blank"
              rel="noopener"
              class="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm px-8 py-3.5 rounded transition inline-flex items-center gap-2"
            >
              ✨ Salón — Blanca
            </a>
          </div>
        </div>

        <div
          class="grid md:grid-cols-5 gap-10 md:gap-14 pt-10 border-t border-white/[0.06]"
        >
          <!-- Info -->
          <div class="md:col-span-2">
            <p
              class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3"
            >
              Encuéntranos
            </p>
            <h3 class="font-heading text-3xl text-white tracking-wide mb-8">
              Te esperamos.
            </h3>

            <div class="space-y-5">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Dirección
                </p>
                <p class="text-gray-300 text-sm">
                  Libertad 135, Valle Dorado, 53690 Naucalpan de Juárez, Méx.
                </p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Horario
                </p>
                <p class="text-gray-300 text-sm">
                  Mar – Dom · 12:00 PM – 10:00 PM
                </p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Barbería — Alonso
                </p>
                <a
                  href="tel:5521483348"
                  class="text-gray-300 text-sm hover:text-brand-red transition"
                  >55 2148 3348</a
                >
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Salón — Blanca
                </p>
                <a
                  href="tel:5521535048"
                  class="text-gray-300 text-sm hover:text-brand-gold transition"
                  >55 2153 5048</a
                >
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="md:col-span-3">
            <div
              class="rounded-lg overflow-hidden aspect-[4/3] bg-brand-gray border border-white/[0.04]"
            >
              <iframe
                class="w-full h-full block"
                frameborder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.5!2d-99.2397!3d19.4918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI5JzMwLjUiTiA5OcKwMTQnMjMuMCJX!5e0!3m2!1ses!2smx"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style="
                  filter: invert(0.9) hue-rotate(180deg) saturate(0.15)
                    brightness(0.7);
                "
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-dark border-t border-white/[0.04] py-8">
      <div class="max-w-6xl mx-auto px-5">
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div class="flex items-center gap-3">
            <p
              class="font-heading text-lg tracking-[0.15em] text-white uppercase"
            >
              JAFZ
            </p>
            <span class="text-gray-700 text-xs">Barbería & Salón</span>
          </div>
          <p class="text-gray-700 text-xs">
            © {{ new Date().getFullYear() }} JAFZ · Sitio por
            <a href="/" class="text-gray-500 hover:text-white transition"
              >devifly.dev</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const waLinkAlonso =
  "https://wa.me/525521483348?text=Hola%20Alonso%2C%20quiero%20agendar%20una%20cita";
const waLinkBlanca =
  "https://wa.me/525521535048?text=Hola%20Blanca%2C%20quiero%20agendar%20una%20cita";

const scrolled = ref(false);
const activeTab = ref("barberia");

const onScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

const barberiaServices = [
  {
    name: "Corte",
    desc: "Fade, taper, clásico, texturizado — lo que necesites.",
  },
  { name: "Barba", desc: "Perfilado, rasurado y diseño con navaja." },
  { name: "Corte + Barba", desc: "El combo completo más pedido." },
  { name: "Cejas", desc: "Perfilado y definición limpia." },
  { name: "Mascarilla facial", desc: "Limpieza profunda y cuidado de piel." },
  { name: "Grecas", desc: "Diseños con máquina, el toque final a tu estilo." },
];

const salonServices = [
  {
    name: "Corte de cabello",
    desc: "Corte a la medida, para cualquier tipo de cabello.",
  },
  { name: "Tintes", desc: "Color profesional, cobertura completa o mechones." },
  { name: "Luces y reflejos", desc: "Iluminaciones naturales y balayage." },
  { name: "Depilación", desc: "Con cera, facial y corporal." },
  { name: "Uñas", desc: "Gelish, acrílico, manicure y pedicure." },
  { name: "Maquillaje", desc: "Social, de noche o para evento especial." },
];

const pricing = {
  barberia: [
    {
      name: "Corte",
      desc: "Fade, taper, clásico o texturizado.",
      price: "$120",
      icon: "✂️",
    },
    {
      name: "Corte + Barba",
      desc: "El combo completo más pedido.",
      price: "$150",
      icon: "💈",
      tag: "Popular",
    },
    {
      name: "Perfilado de barba",
      desc: "Diseño y rasurado con navaja.",
      price: "$80",
      icon: "🪒",
    },
    {
      name: "Diseño de cejas",
      desc: "Perfilado limpio y definido.",
      price: "$50",
      icon: "👁️",
    },
    {
      name: "Mascarilla facial",
      desc: "Limpieza profunda y cuidado.",
      price: "$100",
      icon: "💧",
    },
    {
      name: "Grecas / Diseño",
      desc: "El toque final a tu estilo.",
      price: "$80",
      icon: "✏️",
    },
  ],
  salon: [
    {
      name: "Corte de cabello",
      desc: "A la medida, para cualquier tipo.",
      price: "$150",
      icon: "✂️",
    },
    {
      name: "Tinte completo",
      desc: "Color profesional, cobertura total.",
      price: "Desde $300",
      icon: "🎨",
      tag: "Popular",
    },
    {
      name: "Luces / Reflejos",
      desc: "Iluminaciones y balayage.",
      price: "Desde $400",
      icon: "☀️",
    },
    {
      name: "Depilación facial",
      desc: "Con cera, limpia y precisa.",
      price: "$80",
      icon: "✨",
    },
    {
      name: "Uñas gelish",
      desc: "Color duradero con brillo.",
      price: "$150",
      icon: "💅",
    },
    {
      name: "Uñas acrílico",
      desc: "Extensiones y diseño libre.",
      price: "$300",
      icon: "👑",
    },
    {
      name: "Manicure",
      desc: "Cuidado básico de manos.",
      price: "$100",
      icon: "🤚",
    },
    {
      name: "Maquillaje social",
      desc: "Para tu día a día o evento.",
      price: "$300",
      icon: "🖌️",
    },
    {
      name: "Maquillaje de noche",
      desc: "Glamour para ocasiones especiales.",
      price: "$500",
      icon: "✨",
    },
  ],
};

const activePricing = computed(() => pricing[activeTab.value]);

function whatsappLink(serviceName) {
  const phone =
    activeTab.value === "barberia" ? "525521483348" : "525521535048";
  const name = activeTab.value === "barberia" ? "Alonso" : "Blanca";
  return `https://wa.me/${phone}?text=Hola%20${name}%2C%20quiero%20agendar%20${encodeURIComponent(serviceName)}`;
}

const barberiaImages = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Corte fade",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Barbería",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Perfilado",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Estilo",
  },
];

const salonImages = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Salón",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    alt: "Tinte",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "Uñas",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Maquillaje",
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    text: "Alonso es un crack. El corte quedó justo como lo quería. Ya llevo 6 meses viniendo cada dos semanas.",
    type: "barberia",
  },
  {
    name: "Ana R.",
    text: "Blanca me hizo un tinte increíble y las uñas quedaron perfectas. 100% recomendada.",
    type: "salon",
  },
  {
    name: "Daniel P.",
    text: "El mejor servicio en Naucalpan. El ambiente es increíble y los precios son justos.",
    type: "barberia",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap");

.font-heading {
  font-family: "Bebas Neue", sans-serif;
}

.font-body {
  font-family: "Inter", sans-serif;
}

.bg-brand-dark {
  background-color: #0a0a0a;
}
.bg-brand-gray {
  background-color: #1a1a1a;
}
.bg-brand-gray\/40 {
  background-color: rgba(26, 26, 26, 0.4);
}
.bg-brand-gray\/50 {
  background-color: rgba(26, 26, 26, 0.5);
}
.bg-brand-red {
  background-color: #dc2626;
}
.bg-brand-red-dark {
  background-color: #b91c1c;
}
.bg-brand-red\/10 {
  background-color: rgba(220, 38, 38, 0.1);
}
.bg-brand-red\/20 {
  background-color: rgba(220, 38, 38, 0.2);
}
.bg-brand-gold {
  background-color: #c9a96e;
}
.bg-brand-gold-dark {
  background-color: #a88a4e;
}
.bg-brand-gold\/10 {
  background-color: rgba(201, 169, 110, 0.1);
}
.bg-brand-gold\/20 {
  background-color: rgba(201, 169, 110, 0.2);
}

.text-brand-red {
  color: #dc2626;
}
.text-brand-red-dark {
  color: #b91c1c;
}
.text-brand-gold {
  color: #c9a96e;
}
.text-brand-gold-dark {
  color: #a88a4e;
}

.hover\:bg-brand-red:hover {
  background-color: #dc2626;
}
.hover\:bg-brand-red-dark:hover {
  background-color: #b91c1c;
}
.hover\:bg-brand-gold:hover {
  background-color: #c9a96e;
}
.hover\:bg-brand-gold-dark:hover {
  background-color: #a88a4e;
}
.hover\:bg-brand-red\/\[0\.07\]:hover {
  background-color: rgba(220, 38, 38, 0.07);
}
.hover\:bg-brand-gold\/\[0\.07\]:hover {
  background-color: rgba(201, 169, 110, 0.07);
}

.hover\:text-brand-red:hover {
  color: #dc2626;
}
.hover\:text-brand-gold:hover {
  color: #c9a96e;
}

.group-hover\:text-brand-red {
  color: inherit;
}
.group:hover .group-hover\:text-brand-red {
  color: #dc2626;
}
.group-hover\:text-brand-gold {
  color: inherit;
}
.group:hover .group-hover\:text-brand-gold {
  color: #c9a96e;
}
.group-hover\:bg-brand-red\/20 {
  background-color: inherit;
}
.group:hover .group-hover\:bg-brand-red\/20 {
  background-color: rgba(220, 38, 38, 0.2);
}
.group-hover\:bg-brand-gold\/20 {
  background-color: inherit;
}
.group:hover .group-hover\:bg-brand-gold\/20 {
  background-color: rgba(201, 169, 110, 0.2);
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}
</style>
