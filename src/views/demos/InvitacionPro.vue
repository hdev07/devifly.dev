<template>
  <div
    class="inv-basica"
    style="font-family: &quot;Playfair Display&quot;, serif"
  >
    <!-- Floating top bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl py-3 px-4 sm:px-6 flex items-center justify-between"
      style="
        background: rgba(248, 244, 240, 0.92);
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
      "
    >
      <router-link
        to="/invitaciones"
        class="flex items-center gap-2 text-sm transition-colors"
        style="color: #999"
      >
        <LucideIcon name="chevron-left" class-name="w-4 h-4" />
        <span class="hidden sm:inline">Volver</span>
      </router-link>
      <span
        class="text-xs font-semibold px-3 py-1 rounded-full"
        style="
          background: rgba(212, 175, 55, 0.1);
          color: #d4af37;
          border: 1px solid rgba(212, 175, 55, 0.3);
        "
      >
        Demo — Plan Pro
      </span>
      <a
        :href="waContratar"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-semibold transition-colors"
        style="color: #7a1e3a"
        ><span class="inline-flex items-center gap-1"
          >Contratar
          <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" /></span
      ></a>
    </div>

    <!-- PORTADA / HERO -->
    <section
      class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
      style="
        background: linear-gradient(
          180deg,
          #f8f4f0 0%,
          #f5ede6 40%,
          #f8f0ea 100%
        );
      "
    >
      <!-- Decorative gold ornaments -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          class="absolute top-16 left-1/2 -translate-x-1/2 w-48 sm:w-64 opacity-30"
          viewBox="0 0 200 40"
          fill="none"
        >
          <path
            d="M0 20 Q50 0 100 20 Q150 40 200 20"
            stroke="#D4AF37"
            stroke-width="0.8"
            fill="none"
          />
          <circle cx="100" cy="20" r="3" fill="#D4AF37" opacity="0.5" />
          <circle cx="60" cy="14" r="1.5" fill="#D4AF37" opacity="0.3" />
          <circle cx="140" cy="26" r="1.5" fill="#D4AF37" opacity="0.3" />
        </svg>
        <div
          class="absolute top-20 left-4 w-20 h-20 opacity-10"
          style="
            border-left: 2px solid #d4af37;
            border-top: 2px solid #d4af37;
            border-radius: 0;
          "
        ></div>
        <div
          class="absolute top-20 right-4 w-20 h-20 opacity-10"
          style="border-right: 2px solid #d4af37; border-top: 2px solid #d4af37"
        ></div>
        <div
          class="absolute bottom-8 left-4 w-20 h-20 opacity-10"
          style="
            border-left: 2px solid #d4af37;
            border-bottom: 2px solid #d4af37;
          "
        ></div>
        <div
          class="absolute bottom-8 right-4 w-20 h-20 opacity-10"
          style="
            border-right: 2px solid #d4af37;
            border-bottom: 2px solid #d4af37;
          "
        ></div>
      </div>

      <div class="relative z-10 max-w-lg mx-auto">
        <div class="mb-3">
          <LucideIcon
            name="gem"
            class-name="w-14 h-14 mx-auto text-[#d4af37]"
          />
        </div>

        <div class="flex items-center justify-center gap-3 mb-4">
          <div
            class="h-px w-12 sm:w-16"
            style="background: linear-gradient(to right, transparent, #d4af37)"
          ></div>
          <span
            class="text-xs tracking-[0.4em] uppercase"
            style="
              color: #d4af37;
              font-family: &quot;Playfair Display&quot;, serif;
            "
            >Mis XV Años</span
          >
          <div
            class="h-px w-12 sm:w-16"
            style="background: linear-gradient(to left, transparent, #d4af37)"
          ></div>
        </div>

        <h1
          class="mb-4"
          style="
            font-family: &quot;Great Vibes&quot;, cursive;
            font-size: clamp(4rem, 16vw, 7rem);
            line-height: 1;
            color: #7a1e3a;
          "
        >
          Valentina
        </h1>

        <p
          class="text-sm mb-6 max-w-sm mx-auto"
          style="
            color: #999;
            font-family: &quot;Playfair Display&quot;, serif;
            line-height: 1.8;
            font-style: italic;
          "
        >
          "Hoy dejo atrás la niñez para comenzar<br />un nuevo capítulo de mi
          vida"
        </p>

        <p class="text-xs mb-1" style="color: #b5a08c">
          Con la bendición de mis padres
        </p>
        <p class="font-medium text-sm mb-8" style="color: #7a1e3a">
          Roberto & María Elena Guzmán
        </p>

        <div
          class="inline-block rounded-2xl px-8 py-5 mb-8"
          style="
            background: rgba(212, 175, 55, 0.06);
            border: 1.5px solid rgba(212, 175, 55, 0.25);
          "
        >
          <p class="font-semibold text-lg mb-1" style="color: #7a1e3a">
            Sábado, 20 de Septiembre
          </p>
          <p class="text-sm" style="color: #d4af37">2025 · 4:00 PM</p>
        </div>

        <!-- Countdown -->
        <div class="mb-8">
          <p
            class="text-[10px] tracking-[0.35em] uppercase mb-4 font-medium"
            style="color: #c4a882"
          >
            Faltan
          </p>
          <div class="flex items-center justify-center gap-3">
            <div
              v-for="unit in countdown"
              :key="unit.label"
              class="text-center"
            >
              <div
                class="w-16 h-16 sm:w-18 sm:h-18 rounded-xl flex items-center justify-center text-2xl font-bold"
                style="
                  background: rgba(122, 30, 58, 0.06);
                  border: 1.5px solid rgba(122, 30, 58, 0.15);
                  color: #7a1e3a;
                  font-family: &quot;Playfair Display&quot;, serif;
                "
              >
                {{ unit.val }}
              </div>
              <p
                class="text-[9px] mt-1.5 tracking-widest"
                style="color: #c4a882"
              >
                {{ unit.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- Music toggle -->
        <button
          @click="toggleMusic"
          class="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105"
          style="
            background: rgba(212, 175, 55, 0.08);
            color: #d4af37;
            border: 1px solid rgba(212, 175, 55, 0.25);
          "
        >
          <LucideIcon
            :name="musicOn ? 'music' : 'volume-x'"
            class-name="w-4 h-4"
          />
          {{ musicOn ? "Pausar" : "Reproducir música" }}
        </button>
        <audio ref="audioRef" loop preload="none">
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
            type="audio/mpeg"
          />
        </audio>

        <div class="mt-8 animate-bounce">
          <LucideIcon
            name="chevron-down"
            class-name="w-6 h-6 mx-auto text-[#d4af37]"
          />
        </div>
      </div>
    </section>

    <!-- MESSAGE / STORY -->
    <section class="py-16 sm:py-20 px-6" style="background: #ffffff">
      <div class="max-w-2xl mx-auto text-center">
        <div class="mb-6">
          <LucideIcon
            name="heart"
            class-name="w-8 h-8 mx-auto text-[#d4af37]"
          />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold mb-6" style="color: #7a1e3a">
          Un Mensaje Especial
        </h2>
        <p
          class="text-sm leading-relaxed mb-6"
          style="color: #666; font-style: italic; line-height: 2"
        >
          Queridos familia y amigos,<br /><br />
          Hoy es un día muy especial para mí. Después de 15 años rodeada de su
          amor y cariño, quiero celebrar este momento tan importante con cada
          uno de ustedes. Gracias por ser parte de mi vida y por acompañarme en
          este nuevo capítulo.
        </p>
        <p
          class="text-sm font-medium"
          style="
            color: #d4af37;
            font-family: &quot;Great Vibes&quot;, cursive;
            font-size: 1.5rem;
          "
        >
          Con todo mi amor, Valentina
        </p>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="py-16 sm:py-20 px-6" style="background: #f8f4f0">
      <div class="max-w-3xl mx-auto">
        <h2
          class="text-2xl sm:text-3xl font-bold text-center mb-3"
          style="color: #7a1e3a"
        >
          Mis Momentos
        </h2>
        <p class="text-sm text-center mb-10" style="color: #999">
          Una mirada a los momentos más especiales
        </p>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <div
            v-for="(photo, i) in gallery"
            :key="i"
            class="relative rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1"
            :class="
              i === 0
                ? 'col-span-2 sm:col-span-1 aspect-[4/3] sm:aspect-square'
                : 'aspect-square'
            "
          >
            <img
              :src="photo.img"
              alt="Galería XV años"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div
              v-if="photo.type === 'video'"
              class="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-sm border border-white/50 shadow-lg"
              >
                <span class="text-xl translate-x-0.5 text-[#7a1e3a]"
                  ><LucideIcon name="play" class-name="w-5 h-5"
                /></span>
              </div>
            </div>
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ITINERARIO -->
    <section
      class="py-16 sm:py-20 px-6"
      style="background: linear-gradient(180deg, #f8f4f0, #ffffff)"
    >
      <div class="max-w-md mx-auto">
        <h2
          class="text-2xl sm:text-3xl font-bold text-center mb-10"
          style="color: #7a1e3a"
        >
          Nuestro Itinerario
        </h2>
        <div
          class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#d4af37] before:via-[#7a1e3a] before:to-[#d4af37]"
        >
          <div
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#f8f4f0] bg-[#d4af37] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"
            >
              <LucideIcon name="landmark" class-name="w-5 h-5" />
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white shadow-sm"
              style="border: 1px solid rgba(212, 175, 55, 0.2)"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1"
              >
                <h4 class="font-bold text-base" style="color: #7a1e3a">
                  Misa de Acción de Gracias
                </h4>
                <span
                  class="text-xs font-semibold px-2 py-0.5 rounded-full w-fit"
                  style="color: #d4af37; background: rgba(212, 175, 55, 0.1)"
                  >4:00 PM</span
                >
              </div>
              <p class="text-sm" style="color: #999">Parroquia de Guadalupe</p>
            </div>
          </div>
          <div
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#f8f4f0] bg-[#7a1e3a] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"
            >
              <LucideIcon name="camera" class-name="w-5 h-5" />
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white shadow-sm"
              style="border: 1px solid rgba(122, 30, 58, 0.15)"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1"
              >
                <h4 class="font-bold text-base" style="color: #7a1e3a">
                  Sesión Fotográfica
                </h4>
                <span
                  class="text-xs font-semibold px-2 py-0.5 rounded-full w-fit"
                  style="color: #7a1e3a; background: rgba(122, 30, 58, 0.08)"
                  >5:30 PM</span
                >
              </div>
              <p class="text-sm" style="color: #999">Jardines del Salón</p>
            </div>
          </div>
          <div
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#f8f4f0] bg-[#d4af37] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"
            >
              <LucideIcon name="music" class-name="w-5 h-5" />
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white shadow-sm"
              style="border: 1px solid rgba(212, 175, 55, 0.2)"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1"
              >
                <h4 class="font-bold text-base" style="color: #7a1e3a">
                  Recepción
                </h4>
                <span
                  class="text-xs font-semibold px-2 py-0.5 rounded-full w-fit"
                  style="color: #d4af37; background: rgba(212, 175, 55, 0.1)"
                  >7:00 PM</span
                >
              </div>
              <p class="text-sm" style="color: #999">Salón Rosa de Cristal</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVENT DETAILS + MAP -->
    <section class="py-16 sm:py-20 px-6" style="background: #ffffff">
      <div class="max-w-2xl mx-auto">
        <h2
          class="text-2xl sm:text-3xl font-bold text-center mb-3"
          style="color: #7a1e3a"
        >
          Detalles del Evento
        </h2>
        <p class="text-sm text-center mb-10" style="color: #999">
          Todo lo que necesitas saber para acompañarme
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div
            class="p-6 rounded-2xl text-center transition-transform hover:-translate-y-1"
            style="
              background: linear-gradient(135deg, #fdf5f8, #fcf0f4);
              border: 1.5px solid rgba(122, 30, 58, 0.1);
            "
          >
            <LucideIcon
              name="landmark"
              class-name="w-10 h-10 mb-3 mx-auto text-[#7a1e3a]"
            />
            <h3 class="font-bold text-lg mb-1" style="color: #7a1e3a">
              Misa de Acción de Gracias
            </h3>
            <p class="text-sm" style="color: #b5708a">Parroquia de Guadalupe</p>
            <p class="text-xs mt-2 font-medium" style="color: #d4af37">
              4:00 PM · Zapopan, Jalisco
            </p>
          </div>
          <div
            class="p-6 rounded-2xl text-center transition-transform hover:-translate-y-1"
            style="
              background: linear-gradient(135deg, #fdf8f0, #fbf5e8);
              border: 1.5px solid rgba(212, 175, 55, 0.15);
            "
          >
            <LucideIcon
              name="music"
              class-name="w-10 h-10 mb-3 mx-auto text-[#7a1e3a]"
            />
            <h3 class="font-bold text-lg mb-1" style="color: #7a1e3a">
              Fiesta
            </h3>
            <p class="text-sm" style="color: #b5708a">Salón Rosa de Cristal</p>
            <p class="text-xs mt-2 font-medium" style="color: #d4af37">
              7:00 PM · Zapopan, Jalisco
            </p>
          </div>
        </div>

        <!-- Dress code -->
        <div
          class="p-5 rounded-2xl text-center mb-10"
          style="
            background: rgba(212, 175, 55, 0.05);
            border: 1.5px solid rgba(212, 175, 55, 0.15);
          "
        >
          <span class="text-2xl block mb-2"
            ><LucideIcon
              name="shirt"
              class-name="w-8 h-8 mx-auto text-[#7a1e3a]"
          /></span>
          <h3 class="font-bold text-sm mb-1" style="color: #7a1e3a">
            Código de Vestimenta
          </h3>
          <p class="text-sm" style="color: #999">
            Formal / Elegante · Colores: Rosa, dorado, vino
          </p>
        </div>

        <!-- Google Maps -->
        <div
          class="rounded-2xl overflow-hidden shadow-md"
          style="border: 1.5px solid rgba(212, 175, 55, 0.15)"
        >
          <iframe
            src="https://maps.google.com/maps?q=Salon+de+eventos+Zapopan+Jalisco&t=&z=14&ie=UTF8&iwloc=&output=embed"
            class="w-full h-56 sm:h-72 lg:h-96"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Action buttons -->
        <div class="flex flex-col sm:flex-row gap-3 mt-5">
          <a
            href="https://maps.google.com/?q=Salon+Rosa+de+Cristal+Zapopan+Jalisco"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style="
              background: rgba(122, 30, 58, 0.06);
              color: #7a1e3a;
              border: 1.5px solid rgba(122, 30, 58, 0.15);
            "
          >
            <LucideIcon name="map-pin" class-name="w-4 h-4" /> Cómo llegar
          </a>
          <a
            :href="calendarUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style="
              background: rgba(212, 175, 55, 0.06);
              color: #d4af37;
              border: 1.5px solid rgba(212, 175, 55, 0.2);
            "
          >
            <LucideIcon name="calendar-days" class-name="w-4 h-4" /> Agregar a
            calendario
          </a>
        </div>

        <!-- Extra Details Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <!-- Hashtag -->
          <div
            class="p-6 rounded-2xl text-center bg-white shadow-sm hover:-translate-y-1 transition-transform"
            style="border: 1.5px solid rgba(122, 30, 58, 0.15)"
          >
            <LucideIcon
              name="square-pen"
              class-name="w-10 h-10 mb-3 mx-auto text-[#7a1e3a]"
            />
            <h3 class="font-bold text-lg mb-1" style="color: #7a1e3a">
              Hashtag del Evento
            </h3>
            <p class="text-sm" style="color: #999">#XVDeValentina</p>
            <p class="text-xs mt-1 font-medium" style="color: #d4af37">
              ¡Etiquétame en tus fotos!
            </p>
          </div>

          <!-- Playlist Colaborativa -->
          <div
            class="p-6 rounded-2xl text-center bg-white shadow-sm hover:-translate-y-1 transition-transform"
            style="border: 1.5px solid rgba(212, 175, 55, 0.15)"
          >
            <LucideIcon
              name="music"
              class-name="w-10 h-10 mb-3 mx-auto text-[#7a1e3a]"
            />
            <h3 class="font-bold text-lg mb-1" style="color: #7a1e3a">
              Playlist Colaborativa
            </h3>
            <p class="text-sm mb-3" style="color: #999">
              Agrega las canciones que no pueden faltar aquí.
            </p>
            <a
              href="#"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
              style="
                background: rgba(212, 175, 55, 0.1);
                color: #d4af37;
                border: 1px solid rgba(212, 175, 55, 0.3);
              "
              ><LucideIcon name="music" class-name="w-3.5 h-3.5" />Abrir en
              Spotify</a
            >
          </div>

          <!-- Mesa de Regalos -->
          <div
            class="col-span-1 sm:col-span-2 lg:col-span-3 p-6 rounded-2xl text-center shadow-sm"
            style="
              background: linear-gradient(135deg, #fdf8f0, #ffffff);
              border: 1.5px solid rgba(212, 175, 55, 0.2);
            "
          >
            <LucideIcon
              name="gift"
              class-name="w-10 h-10 mb-3 mx-auto text-[#7a1e3a]"
            />
            <h3 class="font-bold text-lg mb-1" style="color: #7a1e3a">
              Mesa de Regalos
            </h3>
            <p class="text-sm mb-4 max-w-md mx-auto" style="color: #999">
              El mejor regalo es tu presencia, pero si deseas tener un detalle
              conmigo:
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-1"
                style="
                  background: rgba(122, 30, 58, 0.03);
                  color: #7a1e3a;
                  border: 1px solid rgba(122, 30, 58, 0.2);
                "
                >Palacio de Hierro</a
              >
              <a
                href="#"
                class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-1"
                style="
                  background: rgba(212, 175, 55, 0.03);
                  color: #d4af37;
                  border: 1px solid rgba(212, 175, 55, 0.3);
                "
                >Liverpool</a
              >
              <div
                class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white"
                style="color: #999; border: 1px solid rgba(0, 0, 0, 0.1)"
              >
                Sobre (Día del evento)
              </div>
            </div>
          </div>

          <!-- Hospedaje -->
          <div
            class="col-span-1 sm:col-span-2 lg:col-span-3 p-6 rounded-2xl text-center shadow-sm"
            style="
              background: linear-gradient(135deg, #fdf5f8, #ffffff);
              border: 1.5px solid rgba(122, 30, 58, 0.15);
            "
          >
            <LucideIcon
              name="hotel"
              class-name="w-10 h-10 mb-3 mx-auto text-[#7a1e3a]"
            />
            <h3 class="font-bold text-lg mb-1" style="color: #7a1e3a">
              Sugerencia de Hospedaje
            </h3>
            <p class="text-sm mb-4 max-w-md mx-auto" style="color: #999">
              Para invitados foráneos, recomendamos este hotel cercano al salón:
            </p>
            <div class="flex justify-center flex-wrap gap-3">
              <a
                href="#"
                class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-1"
                style="
                  background: rgba(122, 30, 58, 0.03);
                  color: #7a1e3a;
                  border: 1px solid rgba(122, 30, 58, 0.2);
                "
              >
                Hotel Fiesta Inn Zapopan
              </a>
              <a
                href="#"
                class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-1"
                style="
                  background: rgba(212, 175, 55, 0.03);
                  color: #d4af37;
                  border: 1px solid rgba(212, 175, 55, 0.2);
                "
              >
                Airbnb Zona Cumbres
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RSVP FORM -->
    <section
      class="py-16 sm:py-20 px-6"
      style="background: linear-gradient(180deg, #f8f4f0, #f5ede6)"
    >
      <div class="max-w-md mx-auto">
        <h2
          class="text-2xl sm:text-3xl font-bold text-center mb-3"
          style="color: #7a1e3a"
        >
          Confirma tu Asistencia
        </h2>
        <p class="text-sm text-center mb-8" style="color: #999">
          Por favor confirma antes del
          <strong style="color: #7a1e3a">1 de agosto de 2025</strong>
        </p>

        <form class="space-y-4" @submit.prevent="handleRSVP">
          <input
            v-model="rsvpForm.name"
            type="text"
            placeholder="Tu nombre completo"
            required
            class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
            style="
              background: #ffffff;
              border: 1.5px solid rgba(212, 175, 55, 0.2);
              color: #444;
            "
          />
          <select
            v-model="rsvpForm.attending"
            class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all rsvp-select-light"
            style="
              background: #ffffff;
              border: 1.5px solid rgba(212, 175, 55, 0.2);
              color: #444;
            "
          >
            <option value="" style="background: #fff; color: #aaa">
              ¿Asistirás?
            </option>
            <option value="yes" style="background: #fff; color: #444">
              Sí, con mucho gusto
            </option>
            <option value="no" style="background: #fff; color: #444">
              No podré asistir
            </option>
          </select>
          <div
            v-if="rsvpForm.attending === 'yes'"
            class="p-4 rounded-xl text-center"
            style="
              background: rgba(212, 175, 55, 0.05);
              border: 1px solid rgba(212, 175, 55, 0.2);
            "
          >
            <span class="text-3xl block mb-2"
              ><LucideIcon
                name="ticket"
                class-name="w-8 h-8 mx-auto text-[#d4af37]"
            /></span>
            <p class="text-sm font-bold" style="color: #7a1e3a">
              Pases Asignados: 3
            </p>
            <p class="text-xs mt-1" style="color: #999">
              Esta invitación es válida para un máximo de 3 personas.
            </p>
          </div>
          <div v-if="rsvpForm.attending === 'yes'">
            <input
              v-model="rsvpForm.guests"
              type="number"
              min="1"
              max="3"
              placeholder="¿Cuántos asistirán? (incluyéndote)"
              class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
              style="
                background: #ffffff;
                border: 1.5px solid rgba(212, 175, 55, 0.2);
                color: #444;
              "
            />
          </div>
          <textarea
            v-model="rsvpForm.message"
            placeholder="Mensaje para Valentina (opcional)"
            rows="3"
            class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all resize-none"
            style="
              background: #ffffff;
              border: 1.5px solid rgba(212, 175, 55, 0.2);
              color: #444;
            "
          ></textarea>
          <button
            type="submit"
            class="w-full py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
            style="background: linear-gradient(135deg, #7a1e3a, #9b2950)"
          >
            {{
              rsvpSubmitted ? "¡Gracias por confirmar!" : "Confirmar asistencia"
            }}
          </button>
        </form>

        <div class="text-center mt-6">
          <p class="text-xs mb-3" style="color: #b5a08c">
            ¿Prefieres confirmar por WhatsApp?
          </p>
          <a
            href="https://wa.me/5215551234567?text=%C2%A1Hola!%20Confirmo%20mi%20asistencia%20a%20los%20XV%20de%20Valentina%20%F0%9F%91%91"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style="
              background: rgba(37, 211, 102, 0.1);
              color: #25d366;
              border: 1px solid rgba(37, 211, 102, 0.3);
            "
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Confirmar por WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      class="py-10 text-center"
      style="background: linear-gradient(180deg, #f5ede6, #f8f4f0)"
    >
      <div class="mb-3">
        <LucideIcon name="gem" class-name="w-8 h-8 mx-auto text-[#d4af37]" />
      </div>
      <p
        class="font-medium"
        style="
          color: #7a1e3a;
          font-family: &quot;Great Vibes&quot;, cursive;
          font-size: 1.5rem;
        "
      >
        Con amor, Valentina
      </p>
      <p class="text-xs mt-4" style="color: #c0b0a0">
        Hecho con
        <LucideIcon name="heart" class-name="w-4 h-4 inline text-[#d4af37]" />
        por
        <a
          href="https://devifly.dev"
          class="font-semibold transition-colors hover:underline"
          style="color: #d4af37"
          >devifly.dev</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import LucideIcon from "../../components/LucideIcon.vue";

const waContratar = `https://wa.me/+525635926679?text=${encodeURIComponent("¡Hola! Vi la demo del Plan Pro de invitaciones digitales y me interesa contratarlo ✨")}`;

const musicOn = ref(false);
const audioRef = ref(null);
const rsvpSubmitted = ref(false);
let countdownInterval = null;

const rsvpForm = ref({
  name: "",
  attending: "",
  guests: 1,
  message: "",
});

const toggleMusic = () => {
  musicOn.value = !musicOn.value;
  if (musicOn.value) {
    audioRef.value?.play();
  } else {
    audioRef.value?.pause();
  }
};

const handleRSVP = () => {
  rsvpSubmitted.value = true;
  setTimeout(() => {
    rsvpSubmitted.value = false;
  }, 3000);
};

const gallery = [
  {
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
    type: "video",
  },
  {
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=400&h=400&fit=crop",
  },
];

const calendarUrl = computed(() => {
  const title = encodeURIComponent("XV Años de Valentina");
  const details = encodeURIComponent(
    "Misa de Acción de Gracias a las 4:00 PM en Parroquia de Guadalupe. Fiesta a las 7:00 PM en Salón Rosa de Cristal, Zapopan.",
  );
  const location = encodeURIComponent(
    "Salón Rosa de Cristal, Zapopan, Jalisco",
  );
  const dates = "20250920T160000/20250920T235900";
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
});

const countdown = ref([
  { label: "DÍAS", val: "00" },
  { label: "HRS", val: "00" },
  { label: "MIN", val: "00" },
  { label: "SEG", val: "00" },
]);

onMounted(() => {
  const target = new Date("2027-09-20T16:00:00");
  const update = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      countdown.value = [
        { label: "DÍAS", val: "00" },
        { label: "HRS", val: "00" },
        { label: "MIN", val: "00" },
        { label: "SEG", val: "00" },
      ];
      return;
    }
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
  audioRef.value?.pause();
});
</script>

<style scoped>
.inv-basica {
  min-height: 100vh;
  background: #f8f4f0;
  -webkit-user-select: auto;
  user-select: auto;
}
.inv-basica * {
  cursor: auto !important;
}
.inv-basica a,
.inv-basica button,
.inv-basica select {
  cursor: pointer !important;
}

.rsvp-select-light {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237a1e3a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 42px;
}
.rsvp-select-light:focus {
  border-color: rgba(212, 175, 55, 0.5) !important;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  outline: none;
}
</style>
