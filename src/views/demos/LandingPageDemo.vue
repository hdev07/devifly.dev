<template>
  <div class="landing-demo min-h-screen bg-brand-dark text-white">
    <!-- Back link (floating) -->
    <router-link
      to="/landing-pages"
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
      <span class="hidden sm:inline">{{ copy.back }}</span>
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
        <div class="flex items-center gap-3">
          <a
            href="#"
            class="font-heading text-xl sm:text-2xl tracking-[0.15em] text-white uppercase"
          >
            Barbería JAFZ
            <span class="text-gray-600 font-body text-xs hidden sm:inline"
              >× El Salón</span
            >
          </a>
          <span
            class="text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase bg-brand-red/10 text-brand-red border border-brand-red/20 hidden sm:inline"
          >
            Plan {{ tierLabels[tier] }}
          </span>
        </div>

        <nav class="hidden md:flex items-center gap-6">
          <a
            v-if="isPro"
            href="#barberia"
            class="text-xs text-gray-400 hover:text-brand-red tracking-wide uppercase transition"
            >Barbería</a
          >
          <a
            v-if="isPro"
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
            v-if="isPro"
            href="#galeria"
            class="text-xs text-gray-400 hover:text-white tracking-wide uppercase transition"
            >Galería</a
          >
          <a
            href="#contacto"
            class="text-xs text-gray-400 hover:text-white tracking-wide uppercase transition"
            >Contacto</a
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
            src="/img/demos/photo-1622287162716-f311baa1a2b8-1200xx.jpg"
            alt=""
            class="w-full h-full object-cover scale-105"
          />
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        <div class="w-1/2 relative overflow-hidden">
          <img
            src="/img/demos/photo-1560066984-138dadb4c035-1200xx.jpg"
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
          src="/img/demos/photo-1622287162716-f311baa1a2b8-900xx.jpg"
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

      <!-- Bottom promo (Pro+) -->
      <div
        v-if="isPro"
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

    <!-- Marquee Banner (Pro+) -->
    <div v-if="isPro" class="bg-brand-red py-2.5 overflow-hidden select-none">
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

    <!-- Team Section (Pro+) -->
    <section v-if="isPro" class="bg-brand-dark py-20 sm:py-28 overflow-hidden">
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
                src="/img/demos/photo-1621605815971-fbc98d665033-800xx.jpg"
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
                src="/img/demos/photo-1560066984-138dadb4c035-800xx.jpg"
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

    <!-- Barbería Section (Pro+) -->
    <section v-if="isPro" id="barberia" class="bg-black py-20 sm:py-28">
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
                  src="/img/demos/photo-1599351431202-1e0f0137899a-800xx.jpg"
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

    <!-- Salón Section (Pro+) -->
    <section v-if="isPro" id="salon" class="bg-brand-dark py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <div class="grid md:grid-cols-5 gap-10 md:gap-14">
          <div class="md:col-span-2 hidden md:block md:order-1">
            <div class="sticky top-24">
              <div
                class="aspect-[3/4] rounded-lg overflow-hidden bg-brand-gray"
              >
                <img
                  src="/img/demos/photo-1560066984-138dadb4c035-800xx.jpg"
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

    <!-- Gallery (Pro+) -->
    <section v-if="isPro" id="galeria" class="bg-black py-20 sm:py-28">
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

        <!-- Analytics badge (Pro+) -->
        <div v-if="isPro" class="flex items-center gap-3 mb-8 p-3 rounded-lg bg-brand-gray/30 border border-white/[0.04] w-fit">
          <div class="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
            <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
          </div>
          <div>
            <p class="text-xs font-semibold text-green-400">UTM Ready</p>
            <p class="text-[10px] text-gray-600">Medición para campañas activa</p>
          </div>
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

    <!-- Testimonials (Pro+) -->
    <section v-if="isPro" class="bg-brand-dark py-20 sm:py-28 overflow-hidden">
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

    <!-- Contact Form -->
    <section id="contacto" class="bg-brand-dark py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <div class="grid md:grid-cols-2 gap-10 md:gap-14">
          <!-- Form -->
          <div>
            <p
              class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3"
            >
              Contacto
            </p>
            <h2
              class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95] mb-3"
            >
              Agenda tu cita.
            </h2>
            <p class="text-gray-500 text-sm mb-8">
              Déjanos tus datos y te respondemos en menos de 15 minutos.
            </p>

            <form
              class="space-y-4"
              @submit.prevent
            >
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs text-gray-600 mb-1.5 tracking-wider uppercase">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    class="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-colors duration-200 bg-brand-gray/40 border border-white/[0.06] focus:border-brand-red/40 placeholder-gray-600"
                  />
                </div>
                <div>
                  <label class="block text-xs text-gray-600 mb-1.5 tracking-wider uppercase">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="55 1234 5678"
                    class="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-colors duration-200 bg-brand-gray/40 border border-white/[0.06] focus:border-brand-red/40 placeholder-gray-600"
                  />
                </div>
              </div>
              <div>
                <label class="block text-xs text-gray-600 mb-1.5 tracking-wider uppercase">Servicio de interés</label>
                <select
                  class="w-full px-4 py-3 rounded-lg text-sm outline-none appearance-none bg-brand-gray/40 border border-white/[0.06] text-gray-500"
                >
                  <option value="">Seleccionar</option>
                  <option value="corte">Corte</option>
                  <option value="corte-barba">Corte + Barba</option>
                  <option value="tinte">Tinte</option>
                  <option value="unas">Uñas</option>
                  <option value="maquillaje">Maquillaje</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label class="block text-xs text-gray-600 mb-1.5 tracking-wider uppercase">Mensaje</label>
                <textarea
                  rows="3"
                  placeholder="Cuéntanos qué necesitas..."
                  class="w-full px-4 py-3 rounded-lg text-sm text-white outline-none resize-none bg-brand-gray/40 border border-white/[0.06] focus:border-brand-red/40 placeholder-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm py-3.5 rounded transition tracking-wide uppercase"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <!-- Quick contact + WhatsApp -->
          <div class="space-y-6">
            <div class="flex flex-col gap-3">
              <a
                :href="waLinkAlonso"
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-4 p-5 rounded-lg transition-all duration-300 bg-brand-gray/40 border border-white/[0.04] hover:border-brand-red/20"
              >
                <div class="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <span class="text-lg">✂️</span>
                </div>
                <div class="min-w-0">
                  <p class="text-white text-sm font-semibold">Barbería — Alonso</p>
                  <p class="text-gray-500 text-xs mt-0.5">WhatsApp directo · 55 2148 3348</p>
                </div>
                <span class="ml-auto text-gray-700 group-hover:text-brand-red transition shrink-0">→</span>
              </a>
              <a
                :href="waLinkBlanca"
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-4 p-5 rounded-lg transition-all duration-300 bg-brand-gray/40 border border-white/[0.04] hover:border-brand-gold/20"
              >
                <div class="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <span class="text-lg">✨</span>
                </div>
                <div class="min-w-0">
                  <p class="text-white text-sm font-semibold">Salón — Blanca</p>
                  <p class="text-gray-500 text-xs mt-0.5">WhatsApp directo · 55 2153 5048</p>
                </div>
                <span class="ml-auto text-gray-700 group-hover:text-brand-gold transition shrink-0">→</span>
              </a>
            </div>

            <div class="space-y-4 pt-4 border-t border-white/[0.06]">
              <div>
                <p class="text-gray-600 text-xs uppercase tracking-wider mb-1">Dirección</p>
                <p class="text-gray-300 text-sm">Libertad 135, Valle Dorado, 53690 Naucalpan de Juárez, Méx.</p>
              </div>
              <div>
                <p class="text-gray-600 text-xs uppercase tracking-wider mb-1">Horario</p>
                <p class="text-gray-300 text-sm">Mar – Dom · 12:00 PM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Map -->
    <section id="ubicacion" class="bg-black py-16 sm:py-20">
      <div class="max-w-6xl mx-auto px-5">
        <div class="rounded-lg overflow-hidden aspect-[21/9] bg-brand-gray border border-white/[0.04]">
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
    </section>

    <!-- Premium Admin Panel Mockups -->
    <section v-if="isPremium" class="bg-brand-dark py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-5">
        <div class="text-center mb-14">
          <p class="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Exclusivo Premium
          </p>
          <h2 class="font-heading text-4xl sm:text-5xl text-white tracking-wide leading-[0.95] mb-3">
            Administra tu sitio.
          </h2>
          <p class="text-gray-500 text-sm max-w-lg mx-auto">
            Tu cliente edita contenido, precios e imágenes desde un panel intuitivo. Sin depender de un desarrollador.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="panel in premiumPanels"
            :key="panel.title"
            class="p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 bg-brand-gray/40 border border-white/[0.04]"
          >
            <div class="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center mb-4">
              <svg
                class="w-5 h-5 text-brand-red"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path :d="panel.icon" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="text-sm font-semibold text-white mb-2">{{ panel.title }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed">{{ panel.desc }}</p>
            <div class="mt-4 h-16 rounded-lg overflow-hidden bg-black/40 border border-white/[0.04]">
              <div
                class="h-2 rounded-full mx-3 mt-3"
                :style="{ width: panel.bar + '%', background: 'linear-gradient(90deg, rgba(220,38,38,0.3), rgba(220,38,38,0.15))' }"
              ></div>
              <div class="flex gap-2 mx-3 mt-2">
                <div class="h-1.5 rounded-full flex-1" style="background: rgba(220,38,38,0.06)"></div>
                <div class="h-1.5 rounded-full flex-1" style="background: rgba(220,38,38,0.04)"></div>
                <div class="h-1.5 rounded-full w-8" style="background: rgba(220,38,38,0.08)"></div>
              </div>
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
import { useRoute } from "vue-router";
import { useDemoChrome } from "../../composables/useDemoChrome.js";
import { useDemoPlan } from "../../composables/useDemoPlan.js";

const { copy } = useDemoChrome();
const route = useRoute();

const tier = computed(() => useDemoPlan(route));
const isPro = computed(() => tier.value === "pro" || tier.value === "premium");
const isPremium = computed(() => tier.value === "premium");
const tierLabels = { esencial: "Esencial", pro: "Pro", premium: "Premium" };

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
    src: "/img/demos/photo-1599351431202-1e0f0137899a-600xx.jpg",
    alt: "Corte fade",
  },
  {
    src: "/img/demos/photo-1503951914875-452162b0f3f1-600xx.jpg",
    alt: "Barbería",
  },
  {
    src: "/img/demos/photo-1622286342621-4bd786c2447c-600xx.jpg",
    alt: "Perfilado",
  },
  {
    src: "/img/demos/photo-1621605815971-fbc98d665033-600xx.jpg",
    alt: "Estilo",
  },
];

const salonImages = [
  {
    src: "/img/demos/photo-1560066984-138dadb4c035-600xx.jpg",
    alt: "Salón",
  },
  {
    src: "/img/demos/photo-1487412947147-5cebf100ffc2-600xx.jpg",
    alt: "Tinte",
  },
  {
    src: "/img/demos/photo-1604654894610-df63bc536371-600xx.jpg",
    alt: "Uñas",
  },
  {
    src: "/img/demos/photo-1522337360788-8b13dee7a37e-600xx.jpg",
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

const premiumPanels = [
  {
    title: "Panel Admin",
    desc: "Edita textos, imágenes y secciones desde un solo lugar, sin tocar código.",
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
    bar: 75,
  },
  {
    title: "SEO Técnico",
    desc: "Schema markup, sitemap XML, meta tags dinámicos y Core Web Vitals optimizados.",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    bar: 90,
  },
  {
    title: "Arquitectura Extendida",
    desc: "Múltiples páginas, blog integrado y estructura preparada para crecer.",
    icon: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-5.25ZM3.25 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z",
    bar: 60,
  },
  {
    title: "CMS Autoadministrable",
    desc: "Tus clientes actualizan contenido, precios y horarios sin depender de un desarrollador.",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
    bar: 85,
  },
  {
    title: "Analytics Avanzado",
    desc: "Google Analytics 4, eventos de conversión, embudos y reportes de rendimiento.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
    bar: 70,
  },
  {
    title: "Multi-idioma",
    desc: "Sitio listo para servir contenido en español, inglés u otros idiomas.",
    icon: "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802",
    bar: 55,
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
