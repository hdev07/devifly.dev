<template>
  <div class="salon-demo min-h-screen" style="background: #0c0a09">
    <!-- Gold accent bar -->
    <div class="h-px w-full" style="background: linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.4) 50%, transparent 100%)"></div>

    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-500"
      :class="scrolled ? 'py-2' : 'py-4'"
      style="background: linear-gradient(180deg, rgba(12,10,9,0.98) 0%, rgba(12,10,9,0.92) 100%); border-bottom: 1px solid rgba(201,169,110,0.08);"
    >
      <div class="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <router-link
          to="/salones-eventos"
          class="flex items-center gap-2 text-sm transition-all duration-300 hover:opacity-70"
          style="color: #c9a96e"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="hidden sm:inline text-xs tracking-[0.2em] uppercase">Volver</span>
        </router-link>

        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center"
            style="background: linear-gradient(135deg, #c9a96e, #a08040); box-shadow: 0 0 20px rgba(201,169,110,0.15);"
          >
            <span class="text-white text-sm font-bold" style="font-family: 'Playfair Display', serif">V</span>
          </div>
          <div class="hidden sm:block">
            <p class="text-sm font-semibold" style="color: #f5efe6; font-family: 'Playfair Display', serif">Jardín Victoria</p>
            <p class="text-[10px] tracking-[0.15em] uppercase" style="color: #c9a96e">Salón de Eventos</p>
          </div>
        </div>

        <a
          href="#cotizador"
          class="px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 tracking-[0.15em] uppercase"
          style="background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.25); color: #c9a96e;"
        >
          Cotizar
        </a>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0" :style="heroBgStyle"></div>

      <!-- Ambient glow -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          class="absolute top-1/3 left-1/4 w-64 h-64 sm:w-[500px] sm:h-[500px] rounded-full blur-[150px]"
          style="background: rgba(201,169,110,0.05)"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/3 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-[120px]"
          style="background: rgba(201,169,110,0.03)"
        ></div>
      </div>

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10"
          style="background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.12);"
        >
          <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background: #c9a96e"></span>
          <span class="text-[10px] font-medium tracking-[0.3em] uppercase" style="color: #c9a96e">
            Reservaciones Abiertas · 2026
          </span>
        </div>

        <!-- Ornamental line -->
        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="h-px w-16" style="background: linear-gradient(to right, transparent, rgba(201,169,110,0.3))"></div>
          <div class="w-1.5 h-1.5 rotate-45" style="border: 1px solid rgba(201,169,110,0.4)"></div>
          <div class="h-px w-16" style="background: linear-gradient(to left, transparent, rgba(201,169,110,0.3))"></div>
        </div>

        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[1.05]"
          style="font-family: 'Playfair Display', serif; background: linear-gradient(135deg, #f5efe6 0%, #c9a96e 50%, #f5efe6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
        >
          Jardín Victoria
        </h1>

        <p
          class="text-xs sm:text-sm tracking-[0.35em] uppercase mb-10"
          style="color: #c9a96e; font-family: 'Playfair Display', serif;"
        >
          Salón de Eventos · Guadalajara
        </p>

        <p class="text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style="color: #9c8e80">
          Donde cada celebración se convierte en un recuerdo eterno. Un espacio único para bodas, XV años, bautizos y eventos exclusivos.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#espacios"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 tracking-wider text-sm"
            style="background: linear-gradient(135deg, #c9a96e, #a08040); color: #0c0a09; box-shadow: 0 4px 30px rgba(201,169,110,0.2);"
          >
            Explorar Espacios
          </a>
          <a
            href="#cotizador"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 tracking-wider text-sm"
            style="background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.2); color: #c9a96e;"
          >
            Cotizar Evento
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto">
          <div class="text-center">
            <p class="text-2xl sm:text-3xl font-bold" style="color: #f5efe6; font-family: 'Playfair Display', serif">500+</p>
            <p class="text-[10px] uppercase tracking-[0.2em] mt-1" style="color: #6b5e52">Eventos</p>
          </div>
          <div class="text-center" style="border-left: 1px solid rgba(201,169,110,0.1); border-right: 1px solid rgba(201,169,110,0.1)">
            <p class="text-2xl sm:text-3xl font-bold" style="color: #c9a96e; font-family: 'Playfair Display', serif">400</p>
            <p class="text-[10px] uppercase tracking-[0.2em] mt-1" style="color: #6b5e52">Capacidad</p>
          </div>
          <div class="text-center">
            <p class="text-2xl sm:text-3xl font-bold" style="color: #f5efe6; font-family: 'Playfair Display', serif">15+</p>
            <p class="text-[10px] uppercase tracking-[0.2em] mt-1" style="color: #6b5e52">Años</p>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-5 h-5" style="color: #c9a96e" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex items-center justify-center gap-4 py-6">
      <div class="h-px flex-1 max-w-32" style="background: linear-gradient(to right, transparent, rgba(201,169,110,0.15))"></div>
      <div class="w-2 h-2 rotate-45" style="border: 1px solid rgba(201,169,110,0.2)"></div>
      <div class="h-px flex-1 max-w-32" style="background: linear-gradient(to left, transparent, rgba(201,169,110,0.15))"></div>
    </div>

    <!-- Spaces -->
    <section id="espacios" class="py-20 sm:py-28 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[10px] tracking-[0.35em] uppercase mb-4" style="color: #c9a96e">Descubre nuestro recinto</p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style="color: #f5efe6; font-family: 'Playfair Display', serif">Nuestros Espacios</h2>
          <p class="max-w-xl mx-auto leading-relaxed text-sm sm:text-base" style="color: #9c8e80">
            Cuatro ambientes diseñados para adaptarse a la personalidad de tu evento.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="space in spaces"
            :key="space.name"
            class="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style="background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.06);"
          >
            <div
              class="aspect-[4/3] relative overflow-hidden"
              :style="`background: linear-gradient(135deg, ${space.gradient})`"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <svg
                  class="w-10 h-10 opacity-20 group-hover:scale-110 transition-transform duration-500"
                  style="color: #c9a96e"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" :d="space.icon" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-semibold mb-2 text-base" style="color: #f5efe6; font-family: 'Playfair Display', serif">{{ space.name }}</h3>
              <p class="text-sm leading-relaxed mb-4" style="color: #9c8e80">{{ space.desc }}</p>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" style="color: #c9a96e" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-xs" style="color: #c9a96e">Hasta {{ space.capacity }} personas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-20 sm:py-28 px-6" style="background: rgba(201,169,110,0.01)">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[10px] tracking-[0.35em] uppercase mb-4" style="color: #c9a96e">Momentos capturados</p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold" style="color: #f5efe6; font-family: 'Playfair Display', serif">Galería</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <div
            v-for="(img, i) in galleryImages"
            :key="i"
            class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            :class="{ 'md:col-span-2 md:row-span-2': i === 0 }"
            :style="`background: linear-gradient(135deg, ${img.gradient})`"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <svg
                class="w-10 h-10 opacity-15 group-hover:scale-110 transition-transform duration-500"
                style="color: #c9a96e"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-sm font-semibold" style="color: #f5efe6">{{ img.title }}</p>
              <p class="text-xs" style="color: #c9a96e">{{ img.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 sm:py-28 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[10px] tracking-[0.35em] uppercase mb-4" style="color: #c9a96e">Todo incluido</p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style="color: #f5efe6; font-family: 'Playfair Display', serif">Servicios</h2>
          <p class="max-w-xl mx-auto leading-relaxed text-sm sm:text-base" style="color: #9c8e80">
            Cada detalle está cuidado para que solo te preocupes por disfrutar tu evento.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            v-for="service in services"
            :key="service.name"
            class="p-5 lg:p-7 rounded-xl text-center transition-all duration-300 hover:-translate-y-1"
            style="background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.06);"
          >
            <div
              class="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
              style="background: rgba(201,169,110,0.06)"
            >
              <svg class="w-6 h-6" style="color: #c9a96e" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path :d="service.path" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p class="text-sm font-medium" style="color: #f5efe6">{{ service.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex items-center justify-center gap-4 py-2">
      <div class="h-px flex-1 max-w-40" style="background: linear-gradient(to right, transparent, rgba(201,169,110,0.12))"></div>
      <div class="w-1.5 h-1.5 rotate-45" style="border: 1px solid rgba(201,169,110,0.2)"></div>
      <div class="h-px flex-1 max-w-40" style="background: linear-gradient(to left, transparent, rgba(201,169,110,0.12))"></div>
    </div>

    <!-- COTIZADOR -->
    <section id="cotizador" class="py-20 sm:py-28 px-6" style="background: rgba(201,169,110,0.01)">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[10px] tracking-[0.35em] uppercase mb-4" style="color: #c9a96e">Personaliza tu experiencia</p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style="color: #f5efe6; font-family: 'Playfair Display', serif">Cotizador de Eventos</h2>
          <p class="max-w-xl mx-auto leading-relaxed text-sm sm:text-base" style="color: #9c8e80">
            Arma tu evento ideal y obtén una cotización estimada al instante.
          </p>
        </div>

        <div
          class="rounded-3xl overflow-hidden"
          style="background: rgba(22,18,16,0.7); border: 1px solid rgba(201,169,110,0.08); box-shadow: 0 0 80px rgba(201,169,110,0.02);"
        >
          <div class="p-5 sm:p-8 lg:p-10 space-y-10">

            <!-- 1. Event Type -->
            <div>
              <h3 class="text-lg font-semibold mb-1" style="color: #f5efe6; font-family: 'Playfair Display', serif">Tipo de Evento</h3>
              <p class="text-xs mb-5" style="color: #6b5e52">¿Qué celebramos?</p>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <button
                  v-for="event in eventTypes"
                  :key="event.value"
                  @click="selectedEvent = event.value"
                  class="p-4 rounded-xl text-left transition-all duration-300 hover:-translate-y-0.5"
                  :style="selectedEvent === event.value
                    ? 'background: rgba(201,169,110,0.1); border: 1px solid rgba(201,169,110,0.35); box-shadow: 0 0 20px rgba(201,169,110,0.06)'
                    : 'background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.05)'"
                >
                  <span class="text-lg block mb-1">{{ event.emoji }}</span>
                  <span
                    class="text-sm font-medium block"
                    :style="selectedEvent === event.value ? 'color: #c9a96e' : 'color: #9c8e80'"
                  >{{ event.label }}</span>
                </button>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px" style="background: rgba(201,169,110,0.06)"></div>

            <!-- 2. Event Details -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Guests -->
              <div>
                <h3 class="text-lg font-semibold mb-1" style="color: #f5efe6; font-family: 'Playfair Display', serif">Invitados</h3>
                <p class="text-xs mb-4" style="color: #6b5e52">Cantidad estimada</p>
                <div class="space-y-2">
                  <button
                    v-for="count in guestRanges"
                    :key="count.value"
                    @click="selectedGuests = count.value"
                    class="w-full p-3 rounded-lg text-sm font-medium transition-all duration-300 text-center"
                    :style="selectedGuests === count.value
                      ? 'background: rgba(201,169,110,0.12); border: 1px solid rgba(201,169,110,0.35); color: #c9a96e'
                      : 'background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.05); color: #9c8e80'"
                  >
                    {{ count.label }} personas
                  </button>
                </div>
              </div>

              <!-- Turno -->
              <div>
                <h3 class="text-lg font-semibold mb-1" style="color: #f5efe6; font-family: 'Playfair Display', serif">Horario</h3>
                <p class="text-xs mb-4" style="color: #6b5e52">Selecciona el turno</p>
                <div class="space-y-2">
                  <button
                    v-for="turno in turnos"
                    :key="turno.value"
                    @click="selectedTurno = turno.value"
                    class="w-full p-3 rounded-lg text-left transition-all duration-300"
                    :style="selectedTurno === turno.value
                      ? 'background: rgba(201,169,110,0.12); border: 1px solid rgba(201,169,110,0.35)'
                      : 'background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.05)'"
                  >
                    <span
                      class="text-sm font-medium block"
                      :style="selectedTurno === turno.value ? 'color: #c9a96e' : 'color: #9c8e80'"
                    >{{ turno.label }}</span>
                    <span class="text-xs block mt-0.5" style="color: #6b5e52">{{ turno.time }}</span>
                  </button>
                </div>
              </div>

              <!-- Date -->
              <div>
                <h3 class="text-lg font-semibold mb-1" style="color: #f5efe6; font-family: 'Playfair Display', serif">Fecha</h3>
                <p class="text-xs mb-4" style="color: #6b5e52">Fecha tentativa</p>
                <input
                  type="date"
                  v-model="selectedDate"
                  class="w-full p-3 rounded-lg text-sm focus:outline-none transition-all duration-300"
                  style="background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.05); color: #9c8e80;"
                />
                <p class="text-xs mt-3 leading-relaxed" style="color: #6b5e52">
                  Sujeto a disponibilidad. Te confirmaremos al contactarte.
                </p>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px" style="background: rgba(201,169,110,0.06)"></div>

            <!-- 3. Package Selection -->
            <div>
              <h3 class="text-lg font-semibold mb-1" style="color: #f5efe6; font-family: 'Playfair Display', serif">Paquete</h3>
              <p class="text-xs mb-5" style="color: #6b5e52">Elige el nivel de servicio para tu evento</p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  v-for="pkg in packages"
                  :key="pkg.value"
                  @click="selectedPackage = pkg.value"
                  class="relative p-5 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                  :style="selectedPackage === pkg.value
                    ? 'background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.35); box-shadow: 0 0 30px rgba(201,169,110,0.05)'
                    : 'background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.05)'"
                >
                  <span
                    v-if="pkg.popular"
                    class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase"
                    style="background: linear-gradient(135deg, #c9a96e, #a08040); color: #0c0a09;"
                  >Popular</span>
                  <h4
                    class="font-semibold mb-1"
                    :style="selectedPackage === pkg.value ? 'color: #c9a96e' : 'color: #f5efe6'"
                    style="font-family: 'Playfair Display', serif"
                  >{{ pkg.label }}</h4>
                  <p class="text-base font-bold mb-4" style="color: #c9a96e">
                    {{ pkg.price === 0 ? 'Incluido' : '+$' + pkg.price.toLocaleString() }}
                  </p>
                  <ul class="space-y-1.5">
                    <li
                      v-for="item in pkg.includes"
                      :key="item"
                      class="flex items-start gap-2 text-xs"
                      style="color: #9c8e80"
                    >
                      <svg class="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style="color: #c9a96e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px" style="background: rgba(201,169,110,0.06)"></div>

            <!-- 4. Extras -->
            <div>
              <h3 class="text-lg font-semibold mb-1" style="color: #f5efe6; font-family: 'Playfair Display', serif">Servicios Adicionales</h3>
              <p class="text-xs mb-5" style="color: #6b5e52">Personaliza tu evento con extras</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  v-for="extra in extras"
                  :key="extra.id"
                  @click="toggleExtra(extra.id)"
                  class="flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300"
                  :style="selectedExtras.includes(extra.id)
                    ? 'background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.25)'
                    : 'background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.05)'"
                >
                  <!-- Checkbox -->
                  <div
                    class="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center transition-all duration-300"
                    :style="selectedExtras.includes(extra.id)
                      ? 'background: #c9a96e'
                      : 'border: 1.5px solid rgba(201,169,110,0.25)'"
                  >
                    <svg
                      v-if="selectedExtras.includes(extra.id)"
                      class="w-3 h-3"
                      style="color: #0c0a09"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <span
                      class="text-sm font-medium block"
                      :style="selectedExtras.includes(extra.id) ? 'color: #c9a96e' : 'color: #9c8e80'"
                    >{{ extra.label }}</span>
                    <span class="text-xs block" style="color: #6b5e52">{{ extra.desc }}</span>
                  </div>
                  <span class="text-sm font-semibold flex-shrink-0" style="color: #c9a96e">
                    ${{ extra.price.toLocaleString() }}{{ extra.perPerson ? '/p' : '' }}
                  </span>
                </button>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px" style="background: rgba(201,169,110,0.06)"></div>

            <!-- 5. Quote Summary -->
            <div
              v-if="hasQuote"
              class="rounded-2xl p-6 sm:p-8"
              style="background: rgba(201,169,110,0.04); border: 1px solid rgba(201,169,110,0.1);"
            >
              <h3 class="text-lg font-semibold mb-6" style="color: #f5efe6; font-family: 'Playfair Display', serif">
                Resumen de Cotización
              </h3>

              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm" style="color: #9c8e80">Renta del espacio</span>
                  <span class="text-sm font-medium" style="color: #f5efe6">${{ venuePrice.toLocaleString() }}</span>
                </div>

                <div v-if="packagePrice > 0" class="flex justify-between items-center">
                  <span class="text-sm" style="color: #9c8e80">Paquete {{ packageLabel }}</span>
                  <span class="text-sm font-medium" style="color: #f5efe6">${{ packagePrice.toLocaleString() }}</span>
                </div>

                <div
                  v-for="item in extrasBreakdown"
                  :key="item.label"
                  class="flex justify-between items-center"
                >
                  <span class="text-sm" style="color: #9c8e80">{{ item.label }}</span>
                  <span class="text-sm font-medium" style="color: #f5efe6">${{ item.price.toLocaleString() }}</span>
                </div>

                <div class="h-px my-2" style="background: rgba(201,169,110,0.12)"></div>

                <div class="flex justify-between items-center pt-2">
                  <span class="font-semibold" style="color: #f5efe6">Total estimado</span>
                  <span
                    class="text-3xl font-bold"
                    style="color: #c9a96e; font-family: 'Playfair Display', serif"
                  >${{ totalPrice.toLocaleString() }}</span>
                </div>

                <p class="text-[10px] mt-2 leading-relaxed" style="color: #6b5e52">
                  *Precio estimado en MXN. El precio final puede variar según personalización, temporada y disponibilidad de fecha.
                </p>
              </div>
            </div>

            <!-- Submit -->
            <button
              class="w-full py-4 rounded-full font-semibold tracking-wider transition-all duration-300 hover:scale-[1.02] text-sm"
              style="background: linear-gradient(135deg, #c9a96e, #a08040); color: #0c0a09; box-shadow: 0 4px 30px rgba(201,169,110,0.15); font-family: 'Playfair Display', serif;"
            >
              Solicitar Cotización Formal
            </button>

          </div>
        </div>
      </div>
    </section>

    <!-- Calendar -->
    <section class="py-20 sm:py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[10px] tracking-[0.35em] uppercase mb-4" style="color: #c9a96e">Planifica con anticipación</p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style="color: #f5efe6; font-family: 'Playfair Display', serif">Disponibilidad</h2>
          <p class="text-sm sm:text-base" style="color: #9c8e80">Consulta las fechas disponibles para tu evento.</p>
        </div>

        <div
          class="p-5 sm:p-8 rounded-3xl"
          style="background: rgba(22,18,16,0.5); border: 1px solid rgba(201,169,110,0.06);"
        >
          <!-- Month nav -->
          <div class="flex items-center justify-between mb-6">
            <button @click="prevMonth" class="p-2 rounded-lg transition-colors hover:opacity-70" style="color: #c9a96e">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 class="text-xl font-semibold" style="color: #f5efe6; font-family: 'Playfair Display', serif">
              {{ monthNames[currentMonth] }} {{ currentYear }}
            </h3>
            <button @click="nextMonth" class="p-2 rounded-lg transition-colors hover:opacity-70" style="color: #c9a96e">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Weekdays -->
          <div class="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3 mb-4">
            <div
              v-for="day in weekDays"
              :key="day"
              class="text-center text-xs font-medium py-2"
              style="color: #6b5e52"
            >
              {{ day }}
            </div>
          </div>

          <!-- Days -->
          <div class="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3">
            <div
              v-for="(day, i) in calendarDays"
              :key="i"
              class="aspect-square rounded-lg flex items-center justify-center text-sm transition-all duration-200"
              :class="{
                'cursor-pointer hover:scale-105': day.available,
                'opacity-30': !day.available && day.day,
              }"
              :style="
                day.available
                  ? 'background: rgba(201,169,110,0.08); color: #c9a96e; border: 1px solid rgba(201,169,110,0.15)'
                  : day.day
                    ? 'background: rgba(239,68,68,0.08); color: #ef4444; border: 1px solid rgba(239,68,68,0.08)'
                    : ''
              "
            >
              {{ day.day }}
            </div>
          </div>

          <!-- Legend -->
          <div class="flex items-center justify-center gap-6 mt-6">
            <div class="flex items-center gap-2">
              <div class="w-3.5 h-3.5 rounded" style="background: rgba(201,169,110,0.15); border: 1px solid rgba(201,169,110,0.2)"></div>
              <span class="text-xs" style="color: #6b5e52">Disponible</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3.5 h-3.5 rounded" style="background: rgba(239,68,68,0.15)"></div>
              <span class="text-xs" style="color: #6b5e52">Reservado</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 sm:py-28 px-6" style="background: rgba(201,169,110,0.01)">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[10px] tracking-[0.35em] uppercase mb-4" style="color: #c9a96e">Historias reales</p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold" style="color: #f5efe6; font-family: 'Playfair Display', serif">Lo Que Dicen Nuestros Clientes</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="p-6 rounded-2xl"
            style="background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.06);"
          >
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              <svg v-for="n in 5" :key="n" class="w-4 h-4" style="color: #c9a96e" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-sm leading-relaxed mb-5" style="color: #9c8e80; font-style: italic;">
              "{{ testimonial.text }}"
            </p>
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                style="background: rgba(201,169,110,0.1); color: #c9a96e"
              >{{ testimonial.initials }}</div>
              <div>
                <p class="text-sm font-medium" style="color: #f5efe6">{{ testimonial.name }}</p>
                <p class="text-xs" style="color: #6b5e52">{{ testimonial.event }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contacto" class="py-20 sm:py-28 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Ornamental -->
        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="h-px w-12" style="background: linear-gradient(to right, transparent, rgba(201,169,110,0.3))"></div>
          <div class="w-1.5 h-1.5 rotate-45" style="border: 1px solid rgba(201,169,110,0.4)"></div>
          <div class="h-px w-12" style="background: linear-gradient(to left, transparent, rgba(201,169,110,0.3))"></div>
        </div>

        <h2
          class="text-3xl sm:text-4xl font-bold mb-4"
          style="color: #f5efe6; font-family: 'Playfair Display', serif"
        >¿Listo para tu evento?</h2>
        <p class="mb-10 max-w-xl mx-auto text-sm sm:text-base" style="color: #9c8e80">
          Agenda una visita al jardín y conoce personalmente nuestras instalaciones.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/528000000000"
            target="_blank"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm tracking-wider"
            style="background: linear-gradient(135deg, #25d366, #128c7e); color: white; box-shadow: 0 4px 20px rgba(37,211,102,0.2);"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:+528000000000"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm tracking-wider"
            style="background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.2); color: #c9a96e;"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar
          </a>
        </div>

        <!-- Location -->
        <div
          class="mt-12 p-6 rounded-2xl inline-block"
          style="background: rgba(201,169,110,0.02); border: 1px solid rgba(201,169,110,0.06);"
        >
          <div class="flex items-center justify-center gap-3 mb-3">
            <svg class="w-5 h-5" style="color: #c9a96e" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="font-semibold text-sm" style="color: #f5efe6; font-family: 'Playfair Display', serif">Ubicación</span>
          </div>
          <p class="text-sm" style="color: #9c8e80">
            Av. Jardines #123, Col. Valle Verde<br />
            Guadalajara, Jalisco, México
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            class="inline-flex items-center gap-2 mt-3 text-xs font-medium tracking-wider"
            style="color: #c9a96e"
          >
            Ver en Google Maps
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 text-center" style="border-top: 1px solid rgba(201,169,110,0.06)">
      <p class="text-xs" style="color: #6b5e52">
        © 2026 Jardín Victoria. Todos los derechos reservados.
      </p>
      <p class="text-[10px] mt-2" style="color: #4a3f35">
        Sitio web creado por
        <a href="/" class="hover:underline" style="color: #c9a96e">Devifly</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// --- Hero background ---
const svgBg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%230c0a09" width="100" height="100"/><circle cx="20" cy="30" r="1.5" fill="%23c9a96e" opacity="0.06"/><circle cx="80" cy="70" r="2" fill="%23c9a96e" opacity="0.05"/><circle cx="50" cy="15" r="1" fill="%23c9a96e" opacity="0.07"/><circle cx="10" cy="85" r="1.8" fill="%23c9a96e" opacity="0.04"/><circle cx="70" cy="20" r="1.2" fill="%23c9a96e" opacity="0.06"/></svg>`;
const heroBgStyle = {
  background: `linear-gradient(180deg, rgba(12,10,9,0.6) 0%, rgba(12,10,9,0.3) 40%, rgba(12,10,9,0.8) 100%), url('data:image/svg+xml,${encodeURIComponent(svgBg)}')`,
  backgroundSize: "cover",
};

// --- Scroll state ---
const scrolled = ref(false);
const handleScroll = () => { scrolled.value = window.scrollY > 50; };
onMounted(() => { window.addEventListener("scroll", handleScroll); });
onUnmounted(() => { window.removeEventListener("scroll", handleScroll); });

// --- Cotizador state ---
const selectedEvent = ref("");
const selectedGuests = ref("");
const selectedTurno = ref("");
const selectedPackage = ref("esencial");
const selectedExtras = ref([]);
const selectedDate = ref("");

// --- Calendar state ---
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

// --- Static data ---
const eventTypes = [
  { value: "boda", label: "Boda", emoji: "💍" },
  { value: "xv", label: "XV Años", emoji: "👑" },
  { value: "bautizo", label: "Bautizo", emoji: "✨" },
  { value: "baby", label: "Baby Shower", emoji: "🎀" },
  { value: "graduacion", label: "Graduación", emoji: "🎓" },
  { value: "corp", label: "Corporativo", emoji: "🏛️" },
];

const guestRanges = [
  { value: "50-100", label: "50 – 100" },
  { value: "100-200", label: "100 – 200" },
  { value: "200-300", label: "200 – 300" },
  { value: "300-400", label: "300 – 400" },
];

const turnos = [
  { value: "matutino", label: "Matutino", time: "9:00 AM – 3:00 PM" },
  { value: "vespertino", label: "Vespertino", time: "3:00 PM – 9:00 PM" },
  { value: "nocturno", label: "Nocturno", time: "8:00 PM – 2:00 AM" },
];

const packages = [
  {
    value: "esencial",
    label: "Esencial",
    price: 0,
    popular: false,
    includes: [
      "Uso del espacio (6 hrs)",
      "Mobiliario para 100 personas",
      "Estacionamiento (50 autos)",
      "Seguridad y limpieza",
    ],
  },
  {
    value: "clasico",
    label: "Clásico",
    price: 15000,
    popular: true,
    includes: [
      "Todo lo del Esencial",
      "Iluminación decorativa",
      "Mantelería y cristalería premium",
      "Coordinador de evento",
      "Área lounge (20 pers.)",
      "Música ambiental",
    ],
  },
  {
    value: "imperial",
    label: "Imperial",
    price: 35000,
    popular: false,
    includes: [
      "Todo lo del Clásico",
      "Jardín + Salón + Terraza",
      "Decoración floral completa",
      "Suite de preparación",
      "Servicio de valet parking",
      "Arco ceremonial",
      "Brindis de bienvenida",
    ],
  },
];

const extras = [
  { id: "banquete", label: "Banquete", desc: "Cena formal por persona", price: 350, perPerson: true },
  { id: "barra", label: "Barra de Bebidas", desc: "Barra libre premium 5 hrs", price: 18000, perPerson: false },
  { id: "dj", label: "DJ + Audio", desc: "DJ profesional y equipo de sonido", price: 8000, perPerson: false },
  { id: "foto", label: "Foto + Video", desc: "Fotógrafo y videógrafo profesional", price: 15000, perPerson: false },
  { id: "decoracion", label: "Decoración Temática", desc: "Diseño floral y decorativo completo", price: 12000, perPerson: false },
  { id: "pastel", label: "Pastel", desc: "Pastel personalizado de fondant", price: 5000, perPerson: false },
  { id: "valet", label: "Valet Parking", desc: "Servicio de acomodadores", price: 6000, perPerson: false },
  { id: "pirotecnia", label: "Pirotecnia", desc: "Show de fuegos artificiales", price: 8000, perPerson: false },
];

const spaces = [
  {
    name: "Jardín Principal",
    desc: "Amplios jardines con fuentes ornamentales y arcos naturales para ceremonias al aire libre.",
    capacity: 300,
    gradient: "rgba(201,169,110,0.08), rgba(160,128,64,0.03)",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    name: "Salón Imperial",
    desc: "Salón techado con candelabros de cristal y clima. Perfecto para recepciones.",
    capacity: 400,
    gradient: "rgba(201,169,110,0.06), rgba(120,100,60,0.04)",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "Terraza Mirador",
    desc: "Vista panorámica con iluminación ambiental. Ideal para cocteles y garden parties.",
    capacity: 120,
    gradient: "rgba(201,169,110,0.07), rgba(180,140,70,0.03)",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Capilla",
    desc: "Capilla privada con vitrales artesanales para ceremonias religiosas íntimas.",
    capacity: 80,
    gradient: "rgba(201,169,110,0.05), rgba(140,110,50,0.04)",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const services = [
  { name: "Jardín Principal", path: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" },
  { name: "Salón Techado", path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "Pista de Baile", path: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" },
  { name: "Estacionamiento", path: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
  { name: "Cocina Equipada", path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { name: "Mobiliario", path: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { name: "Iluminación", path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { name: "Seguridad", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const galleryImages = [
  { title: "Jardín al Atardecer", desc: "Ceremonia al aire libre", gradient: "rgba(201,169,110,0.1), rgba(160,128,64,0.04)" },
  { title: "Salón Imperial", desc: "Recepción para 400 personas", gradient: "rgba(201,169,110,0.07), rgba(100,80,40,0.04)" },
  { title: "Arco Floral", desc: "Escenarios para fotografía", gradient: "rgba(180,150,90,0.08), rgba(201,169,110,0.04)" },
  { title: "Pista de Baile", desc: "Iluminación LED profesional", gradient: "rgba(201,169,110,0.09), rgba(140,110,50,0.04)" },
  { title: "Zona Lounge", desc: "Área VIP de descanso", gradient: "rgba(201,169,110,0.06), rgba(180,150,90,0.05)" },
  { title: "Terraza Mirador", desc: "Vista panorámica nocturna", gradient: "rgba(160,128,64,0.08), rgba(201,169,110,0.03)" },
];

const testimonials = [
  {
    name: "Ana y Carlos",
    initials: "AC",
    event: "Boda · Marzo 2026",
    text: "Desde el primer momento nos sentimos en casa. El jardín al atardecer fue mágico y el coordinador hizo que todo fluyera perfecto. Nuestros invitados no dejan de hablar del evento.",
  },
  {
    name: "Familia Rodríguez",
    initials: "FR",
    event: "XV Años · Enero 2026",
    text: "La fiesta de Valentina superó todas nuestras expectativas. El salón decorado, la iluminación, la comida... todo impecable. Gracias por hacer realidad su sueño.",
  },
  {
    name: "Roberto Méndez",
    initials: "RM",
    event: "Corporativo · Febrero 2026",
    text: "Organizamos nuestra gala anual aquí y fue un éxito total. El equipo es muy profesional y flexible con nuestros requerimientos. La terraza fue el hit de la noche.",
  },
];

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

// --- Cotizador computed ---
const guestMidpoint = computed(() => {
  const map = { "50-100": 75, "100-200": 150, "200-300": 250, "300-400": 350 };
  return map[selectedGuests.value] || 0;
});

const baseEventPrice = computed(() => {
  const prices = { boda: 45000, xv: 35000, bautizo: 25000, baby: 20000, graduacion: 30000, corp: 40000 };
  return prices[selectedEvent.value] || 0;
});

const guestMultiplier = computed(() => {
  const m = { "50-100": 1, "100-200": 1.4, "200-300": 1.8, "300-400": 2.2 };
  return m[selectedGuests.value] || 1;
});

const turnoMultiplier = computed(() => {
  const m = { matutino: 0.85, vespertino: 1, nocturno: 1.2 };
  return m[selectedTurno.value] || 1;
});

const venuePrice = computed(() =>
  Math.round(baseEventPrice.value * guestMultiplier.value * turnoMultiplier.value),
);

const packagePrice = computed(() => {
  const pkg = packages.find((p) => p.value === selectedPackage.value);
  return pkg ? pkg.price : 0;
});

const packageLabel = computed(() => {
  const pkg = packages.find((p) => p.value === selectedPackage.value);
  return pkg ? pkg.label : "";
});

const extrasBreakdown = computed(() => {
  return selectedExtras.value
    .map((id) => {
      const extra = extras.find((e) => e.id === id);
      if (!extra) return null;
      const price = extra.perPerson ? extra.price * guestMidpoint.value : extra.price;
      const label = extra.perPerson
        ? `${extra.label} (${guestMidpoint.value} pers.)`
        : extra.label;
      return { label, price };
    })
    .filter(Boolean);
});

const extrasTotal = computed(() =>
  extrasBreakdown.value.reduce((sum, item) => sum + item.price, 0),
);

const totalPrice = computed(() => venuePrice.value + packagePrice.value + extrasTotal.value);

const hasQuote = computed(() =>
  selectedEvent.value && selectedGuests.value && selectedTurno.value,
);

// --- Cotizador methods ---
const toggleExtra = (id) => {
  const idx = selectedExtras.value.indexOf(id);
  if (idx === -1) selectedExtras.value.push(id);
  else selectedExtras.value.splice(idx, 1);
};

// --- Calendar computed ---
const calendarDays = computed(() => {
  const days = [];
  const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay();
  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days.push({ day: "", available: false });
  }

  const reservedDays = [5, 12, 19, 20, 26];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, available: !reservedDays.includes(i) });
  }

  return days;
});

const prevMonth = () => {
  if (currentMonth.value === 0) { currentMonth.value = 11; currentYear.value--; }
  else { currentMonth.value--; }
};

const nextMonth = () => {
  if (currentMonth.value === 11) { currentMonth.value = 0; currentYear.value++; }
  else { currentMonth.value++; }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap");

.salon-demo {
  font-family: "Inter", system-ui, sans-serif;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.7) sepia(1) saturate(0.4) hue-rotate(10deg);
}

input[type="date"] {
  color-scheme: dark;
}
</style>
