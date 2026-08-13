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
        <span class="hidden sm:inline">{{ copy.back }}</span>
      </router-link>
      <span
        class="text-xs font-semibold px-3 py-1 rounded-full"
        style="
          background: rgba(167, 216, 255, 0.2);
          color: #5b9bd5;
          border: 1px solid rgba(167, 216, 255, 0.4);
        "
        >{{ copy.demo }} — {{ t("planLabel") }}</span
      >
      <div class="flex items-center gap-3">
        <button
          @click="locale = locale === 'es' ? 'en' : 'es'"
          class="text-xs px-3 py-1 rounded-full transition"
          style="border: 1px solid rgba(167, 216, 255, 0.5); color: #5b9bd5"
        >
          {{ locale === "es" ? "EN" : "ES" }}
        </button>
        <a
          :href="waContratar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-semibold transition-colors"
          style="color: #5b9bd5"
          ><span class="inline-flex items-center gap-1"
            >{{ copy.hire }}
            <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" /></span
        ></a>
      </div>
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
          class="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-40 animate-esencial-float-1"
          style="background: #fadadd; top: 8%; left: 5%"
        ></div>
        <div
          class="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-30 animate-esencial-float-2"
          style="background: #a7d8ff; top: 15%; right: 8%"
        ></div>
        <div
          class="absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full opacity-25 animate-esencial-float-3"
          style="background: #d6c1ff; bottom: 25%; left: 10%"
        ></div>
        <div
          class="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full opacity-30 animate-esencial-float-1"
          style="background: #fff3b0; bottom: 15%; right: 5%"
        ></div>
        <div
          class="absolute w-10 h-10 sm:w-16 sm:h-16 rounded-full opacity-20 animate-esencial-float-2"
          style="background: #fadadd; top: 50%; left: 50%"
        ></div>
      </div>

      <div class="relative z-10 max-w-md mx-auto">
        <!-- Dove icon -->
        <div class="mb-3 animate-esencial-bounce-in">
          <LucideIcon
            name="bird"
            class-name="w-16 h-16 mx-auto text-[#6aade4]"
          />
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
            >{{ t("eventType") }}</span
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
          Santiago
        </h1>

        <!-- Blessing message -->
        <p
          class="text-sm mb-5 max-w-xs mx-auto"
          style="color: #b0a7c0; line-height: 1.7"
        >
          {{ t("blessing1") }}<br />{{ t("blessing2") }}
        </p>

        <!-- Parents & godparents -->
        <p class="text-xs mb-1" style="color: #c0b0c8">{{ t("childOf") }}</p>
        <p class="font-semibold text-sm mb-4" style="color: #8b7aaf">
          Andrea & Carlos Mendoza
        </p>
        <p class="text-xs mb-1" style="color: #c0b0c8">{{ t("godparents") }}</p>
        <p class="font-semibold text-sm mb-8" style="color: #8b7aaf">
          Miguel & Patricia Ruiz · Luis Hernández
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
            >{{ t("dateChip") }}</span
          >
        </div>

        <!-- Countdown -->
        <div class="mb-8">
          <p
            class="text-[10px] tracking-[0.3em] uppercase mb-4 font-medium"
            style="color: #c0b0d0"
          >
            {{ t("countdownTitle") }}
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
          <LucideIcon
            name="chevron-down"
            class-name="w-6 h-6 mx-auto text-[#a7d8ff]"
          />
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
          {{ t("itineraryTitle") }}
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
                <h4 class="font-bold text-[#5b9bd5] text-base">{{ t("ceremony") }}</h4>
                <span
                  class="text-xs font-semibold text-[#6aade4] bg-[#edf6ff] px-2 py-0.5 rounded-full w-fit"
                  >12:00 PM</span
                >
              </div>
              <p class="text-sm text-[#b0a7c0]">{{ t("parish") }}</p>
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
                  {{ t("photoSession") }}
                </h4>
                <span
                  class="text-xs font-semibold text-[#d4849a] bg-[#fff5f6] px-2 py-0.5 rounded-full w-fit"
                  >1:30 PM</span
                >
              </div>
              <p class="text-sm text-[#c0b0c8]">{{ t("gardens") }}</p>
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
                <h4 class="font-bold text-[#8b7aaf] text-base">{{ t("reception") }}</h4>
                <span
                  class="text-xs font-semibold text-[#8b7aaf] bg-[#f8f0ff] px-2 py-0.5 rounded-full w-fit"
                  >2:00 PM</span
                >
              </div>
              <p class="text-sm text-[#b0a7c0]">{{ t("hall") }}</p>
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
          {{ t("whenWhere") }}
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
              {{ t("ceremony") }}
            </h3>
            <p class="text-sm" style="color: #a89cc0">{{ t("parish") }}</p>
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
              {{ t("celebration") }}
            </h3>
            <p class="text-sm" style="color: #c9a0ae">{{ t("hall") }}</p>
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
            class="w-full h-56 sm:h-72 lg:h-96"
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
            <LucideIcon name="map-pin" class-name="w-4 h-4" /> {{ t("directions") }}
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
            {{ t("dressCodeTitle") }}
          </h3>
          <p class="text-sm text-[#a89cc0]">{{ t("dressCodeValue") }}</p>
          <p class="text-xs mt-1 text-[#c0b0d0]">
            {{ t("dressCodeNote") }}
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
            {{ t("hashtagTitle") }}
          </h3>
          <p class="text-sm text-[#9bb0c8]">#BautizoSantiago2027</p>
          <p class="text-xs mt-1 text-[#b0bdcc]">{{ t("hashtagNote") }}</p>
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
            {{ t("giftsTitle") }}
          </h3>
          <p class="text-sm text-[#c9a0ae] mb-3">
            {{ t("giftsNote") }}
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
            {{ t("lodgingTitle") }}
          </h3>
          <p class="text-sm text-[#b5a08c] mb-3">
            {{ t("lodgingNote") }}
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
            ><LucideIcon name="camera" class-name="w-7 h-7" />{{
              t("galleryTitle")
            }}</span
          >
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <div
            class="aspect-square rounded-2xl overflow-hidden border-2 border-[#d6c1ff]/30 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src="/img/demos/photo-1519340333755-56e9c1d04579-400x400.jpg"
              :alt="t('galleryAlt1')"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="aspect-square rounded-2xl overflow-hidden border-2 border-[#fadadd]/30 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src="/img/demos/photo-1515488042361-ee00e0ddd4e4-400x400.jpg"
              :alt="t('galleryAlt2')"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="aspect-square rounded-2xl overflow-hidden border-2 border-[#a7d8ff]/30 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src="/img/demos/photo-1544367567-0f2fcb009e0b-400x400.jpg"
              :alt="t('galleryAlt3')"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="aspect-square rounded-2xl overflow-hidden border-2 border-[#fff3b0]/50 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src="/img/demos/photo-1504439904031-93ded9f93e4e-400x400.jpg"
              :alt="t('galleryAlt4')"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="aspect-square rounded-2xl overflow-hidden border-2 border-[#d6c1ff]/30 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src="/img/demos/photo-1492725764893-90b379c2b6e7-400x400.jpg"
              :alt="t('galleryAlt5')"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="aspect-square rounded-2xl overflow-hidden border-2 border-[#fadadd]/30 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src="/img/demos/photo-1513542789411-b6a5d4f31634-400x400.jpg"
              :alt="t('galleryAlt6')"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- RSVP -->
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
            ><LucideIcon name="users" class-name="w-7 h-7" />{{
              t("rsvpTitle")
            }}</span
          >
        </h2>
        <p class="text-sm mb-8" style="color: #b0a7c0">
          {{ t("rsvpDeadlinePre") }}
          <strong style="color: #8b7aaf">{{ t("rsvpDeadline") }}</strong>
        </p>

        <form
          class="space-y-4 max-w-sm lg:max-w-md mx-auto"
          @submit.prevent="handleRSVP"
        >
          <input
            v-model="rsvpForm.name"
            type="text"
            :placeholder="t('rsvpNamePlaceholder')"
            required
            class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
            style="
              background: #ffffff;
              border: 1.5px solid rgba(167, 216, 255, 0.4);
              color: #444;
            "
          />
          <select
            v-model="rsvpForm.attending"
            required
            class="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all rsvp-select-esencial"
            style="
              background: #ffffff;
              border: 1.5px solid rgba(167, 216, 255, 0.4);
              color: #444;
            "
          >
            <option value="" disabled>{{ t("rsvpAsk") }}</option>
            <option value="yes">{{ t("rsvpYes") }}</option>
            <option value="no">{{ t("rsvpNo") }}</option>
          </select>
          <button
            type="submit"
            class="w-full py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-md"
            style="background: linear-gradient(135deg, #a7d8ff, #7ac0ff)"
          >
            {{ rsvpSubmitted ? t("rsvpThanks") : t("rsvpSubmit") }}
          </button>
        </form>
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
        {{ t("footerLove") }}
      </p>
      <p class="text-xs mt-3" style="color: #d0c8d8">
        {{ t("footerMade") }}
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
import { ref, onMounted, onUnmounted, computed } from "vue";
import LucideIcon from "../../components/LucideIcon.vue";
import { useDemoChrome } from "../../composables/useDemoChrome.js";
import { useI18n } from "vue-i18n";

const { copy } = useDemoChrome();
const { locale } = useI18n();

// Paridad es/en: cualquier clave nueva va en los dos bloques.
const translations = {
  es: {
    planLabel: "Plan Esencial",
    eventType: "Bautizo de",
    blessing1: "Con la bendición de Dios,",
    blessing2: "celebramos su llegada a la fe",
    childOf: "Hijo de",
    godparents: "Padrinos",
    dateChip: "Sábado, 12 de Junio · 12:00 PM",
    countdownTitle: "Faltan",
    itineraryTitle: "Nuestro Itinerario",
    ceremony: "Ceremonia",
    parish: "Parroquia San José",
    photoSession: "Sesión de Fotos",
    gardens: "Jardines del Salón",
    reception: "Recepción",
    hall: "Salón Los Arcos",
    whenWhere: "¿Cuándo y Dónde?",
    celebration: "Celebración",
    directions: "Cómo llegar",
    dressCodeTitle: "Código de Vestimenta",
    dressCodeValue: "Formal de día",
    dressCodeNote: "Evitar colores blancos y pasteles",
    hashtagTitle: "Hashtag del Evento",
    hashtagNote: "¡Etiquétanos en tus fotos!",
    giftsTitle: "Mesa de Regalos",
    giftsNote:
      "Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle:",
    lodgingTitle: "Sugerencia de Hospedaje",
    lodgingNote:
      "Para nuestros invitados foráneos, recomendamos estos hoteles cercanos:",
    galleryTitle: "Nuestra Galería",
    galleryAlt1: "Bebé durmiendo",
    galleryAlt2: "Ropita de bebé",
    galleryAlt3: "Vela de bautizo",
    galleryAlt4: "Cruz decorativa",
    galleryAlt5: "Familia celebrando",
    galleryAlt6: "Detalles de bautizo",
    rsvpTitle: "Confirmación de asistencia",
    rsvpDeadlinePre: "Confirma tu asistencia antes del",
    rsvpDeadline: "12 de mayo de 2027",
    rsvpNamePlaceholder: "Tu nombre completo",
    rsvpAsk: "¿Asistirás?",
    rsvpYes: "Sí, con mucho gusto",
    rsvpNo: "No podré asistir",
    rsvpSubmit: "Confirmar asistencia",
    rsvpThanks: "¡Gracias por confirmar!",
    footerLove: "Con amor y fe, la familia Mendoza",
    footerMade: "Hecho con dedicación por",
    waHire:
      "¡Hola! Vi la demo del Plan Esencial de invitaciones digitales y me interesa contratarlo 💌",
  },
  en: {
    planLabel: "Essential Plan",
    eventType: "Baptism of",
    blessing1: "With God's blessing,",
    blessing2: "we celebrate his welcome into the faith",
    childOf: "Son of",
    godparents: "Godparents",
    dateChip: "Saturday, June 12 · 12:00 PM",
    countdownTitle: "Countdown",
    itineraryTitle: "Our Itinerary",
    ceremony: "Ceremony",
    parish: "San José Parish",
    photoSession: "Photo Session",
    gardens: "Venue Gardens",
    reception: "Reception",
    hall: "Los Arcos Hall",
    whenWhere: "When & Where?",
    celebration: "Celebration",
    directions: "Get directions",
    dressCodeTitle: "Dress Code",
    dressCodeValue: "Daytime formal",
    dressCodeNote: "Please avoid white and pastel colors",
    hashtagTitle: "Event Hashtag",
    hashtagNote: "Tag us in your photos!",
    giftsTitle: "Gift Registry",
    giftsNote:
      "Your presence is the best gift, but if you'd like to bring something:",
    lodgingTitle: "Where to Stay",
    lodgingNote:
      "For guests traveling in, we recommend these nearby hotels:",
    galleryTitle: "Our Gallery",
    galleryAlt1: "Sleeping baby",
    galleryAlt2: "Baby clothes",
    galleryAlt3: "Baptism candle",
    galleryAlt4: "Decorative cross",
    galleryAlt5: "Family celebrating",
    galleryAlt6: "Baptism details",
    rsvpTitle: "RSVP",
    rsvpDeadlinePre: "Please confirm your attendance before",
    rsvpDeadline: "May 12, 2027",
    rsvpNamePlaceholder: "Your full name",
    rsvpAsk: "Will you attend?",
    rsvpYes: "Yes, I'll be there",
    rsvpNo: "Sorry, I can't make it",
    rsvpSubmit: "Confirm attendance",
    rsvpThanks: "Thanks for confirming!",
    footerLove: "With love and faith, the Mendoza family",
    footerMade: "Crafted with care by",
    waHire:
      "Hi! I saw the Essential plan demo for digital invitations and I'd like to hire it 💌",
  },
};

const t = (key, fallback) => translations[locale.value]?.[key] ?? fallback ?? key;

const waContratar = computed(
  () =>
    `https://wa.me/+525635926679?text=${encodeURIComponent(t("waHire"))}`,
);

let countdownInterval = null;
const rsvpSubmitted = ref(false);
const rsvpForm = ref({ name: "", attending: "" });

const handleRSVP = () => {
  rsvpSubmitted.value = true;
  setTimeout(() => {
    rsvpSubmitted.value = false;
    rsvpForm.value = { name: "", attending: "" };
  }, 3000);
};

const countdownLabels = computed(() =>
  locale.value === "en"
    ? { days: "DAYS", hrs: "HRS", min: "MIN", sec: "SEC" }
    : { days: "DÍAS", hrs: "HRS", min: "MIN", sec: "SEG" },
);

const countdown = ref([
  { label: countdownLabels.value.days, val: "00" },
  { label: countdownLabels.value.hrs, val: "00" },
  { label: countdownLabels.value.min, val: "00" },
  { label: countdownLabels.value.sec, val: "00" },
]);

onMounted(() => {
  const target = new Date("2027-06-12T12:00:00");
  const update = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      countdown.value = [
        { label: countdownLabels.value.days, val: "00" },
        { label: countdownLabels.value.hrs, val: "00" },
        { label: countdownLabels.value.min, val: "00" },
        { label: countdownLabels.value.sec, val: "00" },
      ];
      return;
    }
    countdown.value = [
      {
        label: countdownLabels.value.days,
        val: String(Math.floor(diff / 86400000)).padStart(2, "0"),
      },
      {
        label: countdownLabels.value.hrs,
        val: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
      },
      {
        label: countdownLabels.value.min,
        val: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
      },
      {
        label: countdownLabels.value.sec,
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

.rsvp-select-esencial {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235b9bd5' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 42px;
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
