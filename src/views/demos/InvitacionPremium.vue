<template>
  <div
    class="inv-pro"
    style="font-family: &quot;Cormorant Garamond&quot;, serif"
  >
    <!-- Floating top bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl py-3 px-4 sm:px-6 flex items-center justify-between"
      style="
        background: rgba(11, 11, 11, 0.88);
        border-bottom: 1px solid rgba(198, 167, 94, 0.12);
      "
    >
      <router-link
        to="/invitaciones"
        class="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
      >
        <LucideIcon name="chevron-left" class-name="w-4 h-4" />
        <span class="hidden sm:inline">Paquetes</span>
      </router-link>
      <div class="flex items-center gap-2">
        <span
          class="text-xs font-semibold px-3 py-1 rounded-full"
          style="
            color: #c6a75e;
            border: 1px solid rgba(198, 167, 94, 0.3);
            background: rgba(198, 167, 94, 0.08);
          "
          >Demo — Plan Premium</span
        >
        <button
          @click="lang = lang === 'es' ? 'en' : 'es'"
          class="text-xs px-3 py-1 rounded-full transition"
          style="border: 1px solid rgba(198, 167, 94, 0.2); color: #c6a75e"
        >
          {{ lang === "es" ? "EN" : "ES" }}
        </button>
      </div>
      <a
        href="/#contact"
        class="text-sm font-semibold transition-colors"
        style="color: #c6a75e"
        ><span class="inline-flex items-center gap-1">Contratar <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" /></span></a
      >
    </div>

    <!-- HERO — Cinematic -->
    <section
      class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
      style="background: #0b0b0b"
    >
      <!-- Ambient effects -->
      <div
        class="absolute inset-0"
        style="
          background:
            radial-gradient(
              ellipse at 30% 40%,
              rgba(198, 167, 94, 0.06) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse at 70% 60%,
              rgba(198, 167, 94, 0.04) 0%,
              transparent 50%
            );
        "
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border animate-pro-orbit"
        style="border-color: rgba(198, 167, 94, 0.06)"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border animate-pro-orbit-reverse"
        style="border-color: rgba(198, 167, 94, 0.04)"
      ></div>

      <div class="relative z-10 max-w-xl mx-auto">
        <!-- Domain badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style="
            border: 1px solid rgba(198, 167, 94, 0.2);
            background: rgba(198, 167, 94, 0.05);
          "
        >
          <span
            class="w-2 h-2 rounded-full animate-pulse"
            style="background: #c6a75e"
          ></span>
          <span class="text-xs font-mono" style="color: rgba(198, 167, 94, 0.7)"
            >mariana-y-diego.com</span
          >
        </div>

        <!-- Names -->
        <h1
          class="mb-2 animate-pro-reveal"
          style="
            font-size: clamp(3.5rem, 14vw, 7rem);
            line-height: 1;
            background: linear-gradient(135deg, #c6a75e, #e8d5a3, #c6a75e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 600;
          "
        >
          {{ t("bride") }}
        </h1>
        <div class="flex items-center justify-center gap-4 my-3">
          <div
            class="h-px flex-1 max-w-20"
            style="
              background: linear-gradient(
                to right,
                transparent,
                rgba(198, 167, 94, 0.4)
              );
            "
          ></div>
          <span
            class="text-sm tracking-[0.5em] uppercase"
            style="color: rgba(198, 167, 94, 0.6)"
            >{{ t("and") }}</span
          >
          <div
            class="h-px flex-1 max-w-20"
            style="
              background: linear-gradient(
                to left,
                transparent,
                rgba(198, 167, 94, 0.4)
              );
            "
          ></div>
        </div>
        <h1
          class="mb-8 animate-pro-reveal"
          style="
            font-size: clamp(3.5rem, 14vw, 7rem);
            line-height: 1;
            background: linear-gradient(135deg, #e8d5a3, #c6a75e, #e8d5a3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 600;
            animation-delay: 0.2s;
          "
        >
          {{ t("groom") }}
        </h1>

        <p class="text-white/40 text-sm tracking-[0.3em] uppercase mb-8">
          {{ t("date") }}
        </p>

        <!-- Countdown -->
        <div class="flex items-center justify-center gap-3 sm:gap-4 mb-10">
          <div v-for="unit in countdown" :key="unit.label" class="text-center">
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-bold"
              style="
                background: rgba(198, 167, 94, 0.06);
                border: 1px solid rgba(198, 167, 94, 0.15);
                color: #c6a75e;
                font-size: clamp(1.2rem, 3vw, 1.8rem);
              "
            >
              {{ unit.val }}
            </div>
            <p
              class="text-[9px] mt-2 tracking-widest"
              style="color: rgba(198, 167, 94, 0.4)"
            >
              {{ unit.label }}
            </p>
          </div>
        </div>

        <!-- Music toggle -->
        <button
          @click="toggleMusic"
          class="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105"
          style="
            background: rgba(198, 167, 94, 0.06);
            color: rgba(198, 167, 94, 0.6);
            border: 1px solid rgba(198, 167, 94, 0.15);
          "
        >
          <LucideIcon :name="musicOn ? 'music' : 'volume-x'" class-name="w-4 h-4" />
          {{ musicOn ? t("pauseMusic") : t("playMusic") }}
        </button>
        <audio ref="audioRef" loop preload="none">
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
            type="audio/mpeg"
          />
        </audio>

        <!-- Scroll -->
        <div class="mt-8 animate-bounce">
          <LucideIcon name="chevron-down" class-name="w-6 h-6 mx-auto text-[rgba(198,167,94,0.4)]" />
        </div>
      </div>
    </section>

    <!-- OUR STORY — Interactive Timeline -->
    <section class="py-16 sm:py-24 px-6" style="background: #0f0f0f">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          {{ t("storyTitle") }}
        </h2>
        <p class="text-sm text-center mb-14" style="color: #888">
          {{ t("storySubtitle") }}
        </p>

        <!-- Timeline -->
        <div class="relative">
          <!-- Line -->
          <div
            class="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style="
              background: linear-gradient(
                to bottom,
                transparent,
                rgba(198, 167, 94, 0.3),
                transparent
              );
            "
          ></div>

          <div
            v-for="(event, i) in timeline"
            :key="i"
            class="relative flex gap-5 sm:gap-8 mb-12 last:mb-0"
          >
            <!-- Dot -->
            <div
              class="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 text-2xl"
              style="
                background: rgba(198, 167, 94, 0.08);
                border: 1.5px solid rgba(198, 167, 94, 0.2);
              "
            >
              <LucideIcon :name="event.icon" class-name="w-6 h-6 text-[#c6a75e]" />
            </div>
            <!-- Content -->
            <div class="pt-1 sm:pt-3">
              <p
                class="text-xs font-medium tracking-wider uppercase mb-1"
                style="color: #c6a75e"
              >
                {{ event.year }}
              </p>
              <h3 class="text-lg font-bold text-white mb-1">
                {{ t(event.titleKey) }}
              </h3>
              <p class="text-sm" style="color: #888">{{ t(event.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GALLERY — Premium Carousel -->
    <section
      class="py-16 sm:py-24 px-6"
      style="
        background: #0b0b0b;
        border-top: 1px solid rgba(198, 167, 94, 0.08);
      "
    >
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          {{ t("galleryTitle") }}
        </h2>
        <p class="text-sm text-center mb-12" style="color: #888">
          {{ t("gallerySubtitle") }}
        </p>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <div
            v-for="(photo, i) in galleryPhotos"
            :key="i"
            class="relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1"
            :class="
              i === 0 ? 'col-span-2 row-span-2 rounded-3xl' : 'rounded-2xl'
            "
            :style="{ aspectRatio: i === 0 ? '1' : '1' }"
          >
            <div
              class="absolute inset-0 flex items-center justify-center"
              :style="{ background: photo.bg }"
            >
              <span
                class="transition-transform duration-500 group-hover:scale-125"
                :class="i === 0 ? 'text-6xl' : 'text-3xl'"
                ><LucideIcon :name="photo.icon" :class-name="i === 0 ? 'w-14 h-14 text-[#c6a75e]' : 'w-8 h-8 text-[#c6a75e]'" /></span
              >
            </div>
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVENT DETAILS + MAP -->
    <section
      class="py-16 sm:py-24 px-6"
      style="
        background: #0f0f0f;
        border-top: 1px solid rgba(198, 167, 94, 0.08);
      "
    >
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          {{ t("detailsTitle") }}
        </h2>
        <p class="text-sm text-center mb-14" style="color: #888">
          {{ t("detailsSubtitle") }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div
            v-for="detail in eventDetails"
            :key="detail.icon"
            class="p-6 sm:p-8 rounded-2xl text-center transition-all hover:-translate-y-1"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon :name="detail.icon" class-name="w-10 h-10 mb-4 mx-auto text-[#c6a75e]" />
            <h3 class="text-white font-bold text-lg mb-2">
              {{ t(detail.titleKey) }}
            </h3>
            <p class="text-sm" style="color: #888">{{ t(detail.descKey) }}</p>
          </div>
        </div>

        <!-- Google Maps -->
        <div
          class="rounded-2xl overflow-hidden"
          style="border: 1px solid rgba(198, 167, 94, 0.1)"
        >
          <iframe
            src="https://maps.google.com/maps?q=Santa+Fe+CDMX+salones+de+eventos&t=&z=14&ie=UTF8&iwloc=&output=embed"
            class="w-full h-56 sm:h-72"
            style="border: 0; filter: grayscale(0.3) contrast(1.1)"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Action buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <a
            href="https://maps.google.com/?q=Salon+Versalles+Santa+Fe+CDMX"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style="
              background: rgba(198, 167, 94, 0.06);
              color: #c6a75e;
              border: 1px solid rgba(198, 167, 94, 0.15);
            "
          >
            <LucideIcon name="external-link" class-name="w-4 h-4" /> {{ t("howToGet") }}
          </a>
          <a
            :href="googleCalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style="
              background: rgba(198, 167, 94, 0.06);
              color: #c6a75e;
              border: 1px solid rgba(198, 167, 94, 0.15);
            "
          >
            <LucideIcon name="calendar-days" class-name="w-4 h-4" /> Google Calendar
          </a>
          <a
            :href="appleCalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style="
              background: rgba(198, 167, 94, 0.06);
              color: #c6a75e;
              border: 1px solid rgba(198, 167, 94, 0.15);
            "
          >
            <LucideIcon name="calendar-days" class-name="w-4 h-4" /> Apple Calendar
          </a>
        </div>

        <!-- Extra Details Grid Premium -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          <!-- Código de Vestimenta -->
          <div
            class="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon name="shirt" class-name="w-10 h-10 mb-3 mx-auto text-[#c6a75e]" />
            <h3 class="text-white font-bold text-lg mb-1">
              {{ t("dressCodeTitle", "Código de Vestimenta") }}
            </h3>
            <p class="text-sm" style="color: #888">
              Etiqueta Rigurosa / Black Tie
            </p>
          </div>

          <!-- Hashtag -->
          <div
            class="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon name="square-pen" class-name="w-10 h-10 mb-3 mx-auto text-[#c6a75e]" />
            <h3 class="text-white font-bold text-lg mb-1">
              {{ t("hashtagTitle", "Hashtag") }}
            </h3>
            <p class="text-sm" style="color: #888">#MarianaYDiego2026</p>
            <p class="text-xs mt-1" style="color: #c6a75e">
              ¡Sube tus fotos y etiquétanos!
            </p>
          </div>

          <!-- Hospedaje -->
          <div
            class="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon name="hotel" class-name="w-10 h-10 mb-3 mx-auto text-[#c6a75e]" />
            <h3 class="text-white font-bold text-lg mb-1">
              {{ t("lodgingTitle", "Hospedaje") }}
            </h3>
            <p class="text-sm mb-3" style="color: #888">
              Tarifa especial en Hotel Camino Real Santa Fe.
            </p>
            <a
              href="#"
              class="inline-block px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
              style="border: 1px solid rgba(198, 167, 94, 0.3); color: #c6a75e"
              >Reservar</a
            >
          </div>

          <!-- Playlist / Spotify -->
          <div
            class="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon name="music" class-name="w-10 h-10 mb-3 mx-auto text-[#c6a75e]" />
            <h3 class="text-white font-bold text-lg mb-1">
              {{ t("playlistTitle", "Playlist") }}
            </h3>
            <p class="text-sm mb-3" style="color: #888">
              Ayúdanos a armar la playlist para la fiesta.
            </p>
            <a
              href="#"
              class="inline-block px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
              style="border: 1px solid rgba(198, 167, 94, 0.3); color: #c6a75e"
              >Abrir Spotify</a
            >
          </div>

          <!-- Álbum Colaborativo -->
          <div
            class="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon name="camera" class-name="w-10 h-10 mb-3 mx-auto text-[#c6a75e]" />
            <h3 class="text-white font-bold text-lg mb-1">
              {{ t("albumTitle", "Álbum Colaborativo") }}
            </h3>
            <p class="text-sm mb-3" style="color: #888">
              Comparte las fotos que tomes durante el evento.
            </p>
            <a
              href="#"
              class="inline-block px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
              style="border: 1px solid rgba(198, 167, 94, 0.3); color: #c6a75e"
              >Subir Fotos</a
            >
          </div>

          <!-- Trivia -->
          <div
            class="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon name="dices" class-name="w-10 h-10 mb-3 mx-auto text-[#c6a75e]" />
            <h3 class="text-white font-bold text-lg mb-1">
              {{ t("triviaTitle", "Trivia de Novios") }}
            </h3>
            <p class="text-sm mb-3" style="color: #888">
              ¿Qué tanto nos conoces? Resuelve esta pequeña trivia.
            </p>
            <a
              href="#"
              class="inline-block px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
              style="border: 1px solid rgba(198, 167, 94, 0.3); color: #c6a75e"
              >Jugar Trivia</a
            >
          </div>
        </div>

        <!-- Nombramientos / Cortejo -->
        <div
          class="mt-8 p-6 sm:p-8 rounded-2xl text-center shadow-lg"
          style="
            background: rgba(198, 167, 94, 0.02);
            border: 1px solid rgba(198, 167, 94, 0.15);
          "
        >
          <h3 class="text-2xl font-bold text-white mb-6">
            {{ t("cortejoTitle", "Nuestro Cortejo Nupcial") }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p
                class="text-xs uppercase tracking-widest mb-1 font-semibold"
                style="color: #c6a75e"
              >
                Dama de Honor
              </p>
              <p class="text-white">Sofia Martínez</p>
            </div>
            <div>
              <p
                class="text-xs uppercase tracking-widest mb-1 font-semibold"
                style="color: #c6a75e"
              >
                Best Man
              </p>
              <p class="text-white">Carlos Ruiz</p>
            </div>
            <div>
              <p
                class="text-xs uppercase tracking-widest mb-1 font-semibold"
                style="color: #c6a75e"
              >
                Velación
              </p>
              <p class="text-white">Fam. López</p>
            </div>
            <div>
              <p
                class="text-xs uppercase tracking-widest mb-1 font-semibold"
                style="color: #c6a75e"
              >
                Anillos
              </p>
              <p class="text-white">Fam. Sánchez</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GIFT REGISTRY -->
    <section
      class="py-16 sm:py-24 px-6"
      style="
        background: #0b0b0b;
        border-top: 1px solid rgba(198, 167, 94, 0.08);
      "
    >
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3">
          {{ t("giftsTitle") }}
        </h2>
        <p class="text-sm mb-10" style="color: #888">{{ t("giftsDesc") }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            v-for="store in giftStores"
            :key="store.name"
            href="#"
            class="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all hover:-translate-y-2 group"
            style="
              background: rgba(198, 167, 94, 0.04);
              border: 1px solid rgba(198, 167, 94, 0.1);
            "
          >
            <LucideIcon :name="store.icon" class-name="w-8 h-8 transition-transform group-hover:scale-110 text-[#c6a75e]" />
            <span class="font-semibold text-sm" style="color: #c6a75e">{{
              store.name
            }}</span>
            <span class="text-xs" style="color: #666">{{ store.desc }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- INTELLIGENT RSVP -->
    <section
      class="py-16 sm:py-24 px-6"
      style="
        background: #0f0f0f;
        border-top: 1px solid rgba(198, 167, 94, 0.08);
      "
    >
      <div class="max-w-md mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          {{ t("rsvpTitle") }}
        </h2>
        <p class="text-sm text-center mb-10" style="color: #888">
          {{ t("rsvpSubtitle") }}
        </p>

        <!-- Personalized greeting -->
        <div
          class="p-5 rounded-2xl mb-8 text-center"
          style="
            background: rgba(198, 167, 94, 0.04);
            border: 1px solid rgba(198, 167, 94, 0.1);
          "
        >
          <p class="text-sm" style="color: #c6a75e; font-style: italic">
            "{{ t("rsvpGreeting") }}"
          </p>
        </div>

        <form class="space-y-4" @submit.prevent="handleRSVP">
          <input
            v-model="rsvpForm.name"
            type="text"
            :placeholder="t('rsvpName')"
            required
            class="w-full px-4 py-3.5 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none transition-all"
            style="
              background: rgba(198, 167, 94, 0.05);
              border: 1px solid rgba(198, 167, 94, 0.15);
            "
          />
          <select
            v-model="rsvpForm.attending"
            class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all rsvp-select-dark"
            style="
              background: rgba(198, 167, 94, 0.05);
              border: 1px solid rgba(198, 167, 94, 0.15);
              color: rgba(255,255,255,0.75);
            "
          >
            <option value="" style="background:#1a1a1a;color:rgba(255,255,255,0.45)">
              {{ t('rsvpAttending') }}
            </option>
            <option value="yes" style="background:#1a1a1a;color:rgba(255,255,255,0.85)">
              {{ t('rsvpYes') }}
            </option>
            <option value="no" style="background:#1a1a1a;color:rgba(255,255,255,0.85)">
              {{ t('rsvpNo') }}
            </option>
          </select>
          <div v-if="rsvpForm.attending === 'yes'" class="space-y-4">
            <input
              v-model="rsvpForm.guests"
              type="number"
              min="1"
              max="10"
              :placeholder="t('rsvpGuests')"
              class="w-full px-4 py-3.5 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none"
              style="
                background: rgba(198, 167, 94, 0.05);
                border: 1px solid rgba(198, 167, 94, 0.15);
              "
            />
            <input
              v-model="rsvpForm.dietary"
              type="text"
              :placeholder="t('rsvpDietary')"
              class="w-full px-4 py-3.5 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none"
              style="
                background: rgba(198, 167, 94, 0.05);
                border: 1px solid rgba(198, 167, 94, 0.15);
              "
            />
          </div>
          <textarea
            v-model="rsvpForm.message"
            :placeholder="t('rsvpMessage')"
            rows="3"
            class="w-full px-4 py-3.5 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none resize-none"
            style="
              background: rgba(198, 167, 94, 0.05);
              border: 1px solid rgba(198, 167, 94, 0.15);
            "
          ></textarea>
          <button
            type="submit"
            class="w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(198,167,94,0.2)]"
            style="background: linear-gradient(135deg, #c6a75e, #a8893d)"
          >
            {{ rsvpSubmitted ? t("rsvpThanks") : t("rsvpSubmit") }}
          </button>
        </form>

        <!-- WhatsApp alternative -->
        <div class="text-center mt-6">
          <a
            href="https://wa.me/5215551234567?text=%C2%A1Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Mariana%20y%20Diego%20%F0%9F%92%8D"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style="
              background: rgba(37, 211, 102, 0.08);
              color: #25d366;
              border: 1px solid rgba(37, 211, 102, 0.2);
            "
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            {{ t("whatsappConfirm") }}
          </a>
        </div>
      </div>
    </section>

    <!-- QR MODAL TRIGGER + ADMIN PANEL PREVIEW -->
    <section
      class="py-16 sm:py-24 px-6"
      style="
        background: #0b0b0b;
        border-top: 1px solid rgba(198, 167, 94, 0.08);
      "
    >
      <div class="max-w-3xl mx-auto">
        <!-- QR Section -->
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3">
            {{ t("qrTitle") }}
          </h2>
          <p class="text-sm mb-8" style="color: #888">{{ t("qrDesc") }}</p>
          <button
            @click="qrOpen = true"
            class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            style="
              background: rgba(198, 167, 94, 0.08);
              color: #c6a75e;
              border: 1.5px solid rgba(198, 167, 94, 0.2);
            "
          >
            <LucideIcon name="qr-code" class-name="w-5 h-5" />
            {{ t("qrBtn") }}
          </button>
        </div>
      </div>
    </section>

    <!-- QR Modal -->
    <Teleport to="body">
      <div
        v-if="qrOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style="background: rgba(11, 11, 11, 0.95); backdrop-filter: blur(20px)"
        @click.self="qrOpen = false"
      >
        <div
          class="text-center rounded-2xl p-8 sm:p-10 max-w-sm w-full"
          style="border: 1px solid rgba(198, 167, 94, 0.2); background: #111"
        >
          <h3 class="text-2xl font-bold text-white mb-2">
            {{ t("qrModalTitle") }}
          </h3>
          <p class="text-sm mb-6" style="color: #888">{{ t("qrModalDesc") }}</p>
          <div class="w-48 h-48 mx-auto rounded-xl p-4 bg-white mb-6">
            <div class="grid grid-cols-7 gap-0.5 h-full">
              <div
                v-for="n in 49"
                :key="n"
                class="rounded-[1px]"
                :style="{
                  background: [
                    1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 21, 22, 23, 24, 25, 26, 27,
                    28, 35, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                  ].includes(n)
                    ? '#C6A75E'
                    : Math.random() > 0.5
                      ? '#C6A75E'
                      : 'white',
                }"
              ></div>
            </div>
          </div>
          <p class="font-mono text-sm" style="color: #c6a75e">BODA-PRO-0042</p>
          <p class="text-xs mt-2" style="color: #666">
            {{ t("qrAccess") }}:
            <span class="text-white/60">Mariana + Diego</span>
          </p>
          <button
            @click="qrOpen = false"
            class="mt-6 px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
            style="
              background: rgba(198, 167, 94, 0.1);
              color: #c6a75e;
              border: 1px solid rgba(198, 167, 94, 0.2);
            "
          >
            {{ t("close") }}
          </button>
        </div>
      </div>
    </Teleport>

    <!-- RSVP Modal (quick confirm via WhatsApp share link) -->

    <!-- FOOTER -->
    <footer
      class="py-10 text-center"
      style="
        background: #0b0b0b;
        border-top: 1px solid rgba(198, 167, 94, 0.08);
      "
    >
      <p class="mb-2" style="color: rgba(198, 167, 94, 0.5); font-size: 1.2rem">
        {{ t("footerMsg") }}
      </p>
      <p class="text-xs" style="color: #444">
        mariana-y-diego.com · Hecho con <LucideIcon name="heart" class-name="w-4 h-4 inline text-[#c6a75e]" /> por
        <a
          href="https://devifly.dev"
          class="font-semibold transition-colors hover:underline"
          style="color: rgba(198, 167, 94, 0.5)"
          >devifly.dev</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import LucideIcon from "../../components/LucideIcon.vue";

const lang = ref("es");
const musicOn = ref(false);
const audioRef = ref(null);
const rsvpOpen = ref(false);
const qrOpen = ref(false);
const rsvpSubmitted = ref(false);
let countdownInterval = null;

const rsvpForm = ref({
  name: "",
  attending: "",
  guests: 1,
  dietary: "",
  message: "",
});

const translations = {
  es: {
    bride: "Mariana",
    groom: "Diego",
    and: "y",
    date: "Sábado · 15 de Noviembre de 2025 · 7:00 PM",
    pauseMusic: "Pausar",
    playMusic: "Reproducir música",
    storyTitle: "Nuestra Historia",
    storySubtitle: "El camino que nos trajo hasta aquí",
    howWeMet: "Cómo nos conocimos",
    howWeMetDesc:
      "Una mirada cruzada en una cafetería del centro. Él derramó su café, ella no pudo dejar de reír.",
    firstDate: "Primera cita",
    firstDateDesc:
      "Cenamos bajo las estrellas en un pequeño restaurante italiano. Supimos que era especial.",
    proposal: "La propuesta",
    proposalDesc:
      "En una playa al atardecer, con el sonido del mar de fondo, él se arrodilló y ella dijo sí.",
    theWedding: "La boda",
    theWeddingDesc:
      "¡Y aquí estamos! Preparándonos para el día más importante de nuestras vidas.",
    galleryTitle: "Nuestra Galería",
    gallerySubtitle: "Momentos que atesoramos juntos",
    detailsTitle: "El Gran Día",
    detailsSubtitle: "Todo lo que necesitas saber",
    ceremonyTitle: "Ceremonia",
    ceremonyDesc: "Iglesia La Paz · 5:00 PM\nSanta Fe, CDMX",
    receptionTitle: "Recepción",
    receptionDesc: "Salón Versalles · 7:00 PM\nSanta Fe, CDMX",
    dressTitle: "Dresscode",
    dressDesc: "Formal / Etiqueta\nEvitar color rojo",
    howToGet: "Cómo llegar",
    giftsTitle: "Mesa de Regalos",
    giftsDesc: "Tu presencia es el mejor regalo. Si deseas obsequiarnos algo:",
    rsvpTitle: "Confirma tu Asistencia",
    rsvpSubtitle: "Por favor confirma antes del 15 de octubre de 2025",
    rsvpGreeting:
      "Querido invitado, Mariana y Diego están muy felices de invitarte a celebrar su amor.",
    rsvpName: "Tu nombre completo",
    rsvpAttending: "¿Asistirás?",
    rsvpYes: "Sí, con mucho gusto",
    rsvpNo: "No podré asistir",
    rsvpGuests: "¿Con cuántas personas? (incluyéndote)",
    rsvpDietary: "Restricciones alimenticias (opcional)",
    rsvpMessage: "Mensaje para los novios (opcional)",
    rsvpSubmit: "Confirmar asistencia",
    rsvpThanks: "¡Gracias por confirmar!",
    whatsappConfirm: "Confirmar por WhatsApp",
    qrTitle: "Tu QR de Ingreso",
    qrDesc: "Cada invitado recibe un código QR único para el acceso al evento",
    qrBtn: "Ver mi código QR",
    qrModalTitle: "Tu QR de Ingreso",
    qrModalDesc: "Muéstralo en la entrada del evento",
    qrAccess: "Ingreso",
    close: "Cerrar",
    adminTitle: "Panel de Gestión de Invitados",
    guestName: "Invitado",
    guestTable: "Mesa",
    guestTag: "Etiqueta",
    guestStatus: "Estado",
    exportCSV: "Exportar CSV",
    dressCodeTitle: "Código de Vestimenta",
    hashtagTitle: "Hashtag",
    lodgingTitle: "Hospedaje",
    playlistTitle: "Playlist",
    albumTitle: "Álbum Colaborativo",
    cortejoTitle: "Nuestro Cortejo Nupcial",
    footerMsg: "Con amor infinito, Mariana & Diego",
  },
  en: {
    bride: "Mariana",
    groom: "Diego",
    and: "&",
    date: "Saturday · November 15th, 2025 · 7:00 PM",
    pauseMusic: "Pause",
    playMusic: "Play music",
    storyTitle: "Our Story",
    storySubtitle: "The journey that brought us here",
    howWeMet: "How we met",
    howWeMetDesc:
      "A chance look at a downtown coffee shop. He spilled his coffee, she couldn't stop laughing.",
    firstDate: "First date",
    firstDateDesc:
      "Dinner under the stars at a small Italian restaurant. We knew it was special.",
    proposal: "The proposal",
    proposalDesc:
      "On a beach at sunset, with the sound of the ocean, he knelt down and she said yes.",
    theWedding: "The wedding",
    theWeddingDesc:
      "And here we are! Preparing for the most important day of our lives.",
    galleryTitle: "Our Gallery",
    gallerySubtitle: "Moments we treasure together",
    detailsTitle: "The Big Day",
    detailsSubtitle: "Everything you need to know",
    ceremonyTitle: "Ceremony",
    ceremonyDesc: "La Paz Church · 5:00 PM\nSanta Fe, CDMX",
    receptionTitle: "Reception",
    receptionDesc: "Versalles Hall · 7:00 PM\nSanta Fe, CDMX",
    dressTitle: "Dresscode",
    dressDesc: "Formal / Black tie\nAvoid red",
    howToGet: "How to get there",
    giftsTitle: "Gift Registry",
    giftsDesc: "Your presence is everything. If you wish to give a gift:",
    rsvpTitle: "Confirm Attendance",
    rsvpSubtitle: "Please confirm before October 15th, 2025",
    rsvpGreeting:
      "Dear guest, Mariana and Diego are very happy to invite you to celebrate their love.",
    rsvpName: "Your full name",
    rsvpAttending: "Will you attend?",
    rsvpYes: "Yes, gladly",
    rsvpNo: "I can't make it",
    rsvpGuests: "How many people? (including you)",
    rsvpDietary: "Dietary restrictions (optional)",
    rsvpMessage: "Message for the couple (optional)",
    rsvpSubmit: "Confirm attendance",
    rsvpThanks: "Thanks for confirming!",
    whatsappConfirm: "Confirm via WhatsApp",
    qrTitle: "Your Entry QR Code",
    qrDesc: "Each guest receives a unique QR code for event access",
    qrBtn: "View my QR code",
    qrModalTitle: "Your Entry QR",
    qrModalDesc: "Show this at the event entrance",
    qrAccess: "Access",
    close: "Close",
    adminTitle: "Guest Management Panel",
    guestName: "Guest",
    guestTable: "Table",
    guestTag: "Tag",
    guestStatus: "Status",
    exportCSV: "Export CSV",
    dressCodeTitle: "Dress Code",
    hashtagTitle: "Hashtag",
    lodgingTitle: "Lodging",
    playlistTitle: "Playlist",
    albumTitle: "Collaborative Album",
    cortejoTitle: "Our Wedding Party",
    footerMsg: "With infinite love, Mariana & Diego",
  },
};
const t = (key) => translations[lang.value][key] || key;

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

const timeline = [
  { icon: "sparkles", year: "2019", titleKey: "howWeMet", descKey: "howWeMetDesc" },
  {
    icon: "heart",
    year: "2020",
    titleKey: "firstDate",
    descKey: "firstDateDesc",
  },
  { icon: "gem", year: "2024", titleKey: "proposal", descKey: "proposalDesc" },
  {
    icon: "landmark",
    year: "2025",
    titleKey: "theWedding",
    descKey: "theWeddingDesc",
  },
];

const galleryPhotos = [
  {
    icon: "users",
    bg: "linear-gradient(135deg, rgba(198,167,94,0.12), rgba(198,167,94,0.06))",
  },
  {
    icon: "camera",
    bg: "linear-gradient(135deg, rgba(198,167,94,0.08), rgba(198,167,94,0.04))",
  },
  {
    icon: "sparkles",
    bg: "linear-gradient(135deg, rgba(198,167,94,0.10), rgba(198,167,94,0.05))",
  },
  {
    icon: "gift",
    bg: "linear-gradient(135deg, rgba(198,167,94,0.06), rgba(198,167,94,0.03))",
  },
  {
    icon: "sparkles",
    bg: "linear-gradient(135deg, rgba(198,167,94,0.08), rgba(198,167,94,0.04))",
  },
  {
    icon: "sparkles",
    bg: "linear-gradient(135deg, rgba(198,167,94,0.10), rgba(198,167,94,0.06))",
  },
  {
    icon: "mail",
    bg: "linear-gradient(135deg, rgba(198,167,94,0.06), rgba(198,167,94,0.03))",
  },
];

const eventDetails = [
  { icon: "landmark", titleKey: "ceremonyTitle", descKey: "ceremonyDesc" },
  { icon: "sparkles", titleKey: "receptionTitle", descKey: "receptionDesc" },
  { icon: "shirt", titleKey: "dressTitle", descKey: "dressDesc" },
];

const giftStores = [
  { name: "Liverpool", icon: "shopping-bag", desc: "Lista de regalos" },
  { name: "Amazon MX", icon: "package", desc: "Wishlist" },
  { name: "Transferencia", icon: "credit-card", desc: "CLABE / SPEI" },
  { name: "Efectivo", icon: "wallet", desc: "Sobre en el evento" },
];

const adminStats = [
  { val: "124", label: "Invitados" },
  { val: "87", label: "Confirmados" },
  { val: "12", label: "Pendientes" },
  { val: "25", label: "Mesas" },
];

const guests = [
  {
    name: "Andrea Martínez",
    table: "Mesa 3",
    tag: "Familia",
    status: "Confirmado",
  },
  { name: "Luis Herrera", table: "Mesa 7", tag: "Amigos", status: "Pendiente" },
  { name: "Carmen López", table: "Mesa 1", tag: "VIP", status: "Confirmado" },
  { name: "Jorge Ramírez", table: "Mesa 5", tag: "Trabajo", status: "Declinó" },
];

const googleCalUrl = computed(() => {
  const title = encodeURIComponent("Boda Mariana & Diego");
  const details = encodeURIComponent(
    "Ceremonia en Iglesia La Paz a las 5:00 PM. Recepción en Salón Versalles a las 7:00 PM. Dresscode: Formal / Etiqueta.",
  );
  const location = encodeURIComponent("Salón Versalles, Santa Fe, CDMX");
  const dates = "20251115T170000/20251116T020000";
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
});

const appleCalUrl = computed(() => {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    "DTSTART:20251115T170000",
    "DTEND:20251116T020000",
    "SUMMARY:Boda Mariana & Diego",
    "LOCATION:Salón Versalles, Santa Fe, CDMX",
    "DESCRIPTION:Ceremonia en Iglesia La Paz a las 5:00 PM. Recepción en Salón Versalles a las 7:00 PM.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
});

const countdown = ref([
  { label: "DÍAS", val: "000" },
  { label: "HRS", val: "00" },
  { label: "MIN", val: "00" },
  { label: "SEG", val: "00" },
]);

onMounted(() => {
  const target = new Date("2025-11-15T17:00:00");
  const update = () => {
    const diff = target - Date.now();
    if (diff <= 0) return;
    countdown.value = [
      {
        label: lang.value === "es" ? "DÍAS" : "DAYS",
        val: String(Math.floor(diff / 86400000)).padStart(3, "0"),
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
        label: lang.value === "es" ? "SEG" : "SEC",
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
@keyframes pro-orbit {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes pro-orbit-reverse {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
@keyframes pro-reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.rsvp-select-dark {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23c6a75e' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 42px;
}
.rsvp-select-dark:focus {
  border-color: rgba(198, 167, 94, 0.45) !important;
  box-shadow: 0 0 0 3px rgba(198, 167, 94, 0.08);
}
.animate-pro-orbit {
  animation: pro-orbit 30s linear infinite;
}
.animate-pro-orbit-reverse {
  animation: pro-orbit-reverse 25s linear infinite;
}
.animate-pro-reveal {
  animation: pro-reveal 1s ease-out both;
  opacity: 0;
}

.inv-pro {
  min-height: 100vh;
  background: #0b0b0b;
  color: #ffffff;
  -webkit-user-select: auto;
  user-select: auto;
}
.inv-pro * {
  cursor: auto !important;
}
.inv-pro a,
.inv-pro button,
.inv-pro select {
  cursor: pointer !important;
}
</style>
