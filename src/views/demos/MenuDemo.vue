<template>
  <div class="menu-demo" :class="{ 'search-open': showSearch }">
    <!-- Floating top bar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-500"
      :class="scrolled ? 'py-2 shadow-2xl' : 'py-3'"
      style="
        background: linear-gradient(
          135deg,
          rgba(15, 15, 15, 0.97) 0%,
          rgba(25, 20, 15, 0.97) 100%
        );
        border-bottom: 1px solid rgba(212, 175, 55, 0.15);
      "
    >
      <div class="max-w-lg mx-auto px-4 flex items-center justify-between">
        <router-link
          to="/menus-digitales"
          class="flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105"
          style="color: #d4af37"
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
          <span class="hidden sm:inline text-xs tracking-widest uppercase"
            >Volver</span
          >
        </router-link>

        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-800/20 border border-amber-500/30 flex items-center justify-center"
          >
            <span class="text-amber-400 text-xs font-bold">R</span>
          </div>
          <span
            class="text-xs font-semibold tracking-widest uppercase"
            style="color: #d4af37"
            >Demo</span
          >
        </div>

        <button
          @click="showSearch = !showSearch"
          class="p-2 rounded-xl transition-all duration-300 hover:scale-110"
          style="color: #d4af37"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Search overlay -->
    <Transition name="search-slide">
      <div
        v-if="showSearch"
        class="fixed top-0 left-0 right-0 bottom-0 z-[60] flex flex-col"
        style="background: rgba(10, 10, 10, 0.98)"
      >
        <div class="max-w-lg mx-auto w-full px-4 pt-6 flex flex-col h-full">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex-1 relative">
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Buscar en el menú..."
                class="w-full px-5 py-3.5 rounded-2xl text-sm text-white placeholder-neutral-500 focus:outline-none transition-all duration-300"
                style="
                  background: rgba(255, 255, 255, 0.06);
                  border: 1px solid rgba(212, 175, 55, 0.2);
                "
                @focus="
                  $event.target.style.borderColor = 'rgba(212, 175, 55, 0.5)'
                "
                @blur="
                  $event.target.style.borderColor = 'rgba(212, 175, 55, 0.2)'
                "
              />
              <svg
                class="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <button
              @click="
                showSearch = false;
                searchQuery = '';
              "
              class="text-xs tracking-widest uppercase py-3 px-4 rounded-2xl transition-all duration-300"
              style="color: #d4af37; background: rgba(212, 175, 55, 0.08)"
            >
              Cerrar
            </button>
          </div>
          <div class="flex-1 overflow-y-auto pb-8 custom-scroll">
            <p
              v-if="!searchQuery"
              class="text-neutral-600 text-sm text-center mt-12"
            >
              Escribe para buscar platillos, bebidas o categorías...
            </p>
            <p
              v-else-if="searchResults.length === 0"
              class="text-neutral-500 text-sm text-center mt-12"
            >
              No se encontraron resultados para "{{ searchQuery }}"
            </p>
            <div v-else class="space-y-3">
              <div
                v-for="item in searchResults"
                :key="item.name"
                class="flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                style="
                  background: rgba(255, 255, 255, 0.03);
                  border: 1px solid rgba(255, 255, 255, 0.04);
                "
              >
                <div
                  class="w-16 h-16 rounded-xl bg-neutral-800 flex-shrink-0 overflow-hidden"
                >
                  <div
                    class="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center"
                  >
                    <span
                      class="text-neutral-600 text-[10px] tracking-wider uppercase"
                      >Foto</span
                    >
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-white text-sm font-semibold truncate">
                    {{ item.name }}
                  </h4>
                  <p class="text-neutral-500 text-xs truncate">
                    {{ item.desc }}
                  </p>
                </div>
                <span class="text-amber-400 font-bold text-sm whitespace-nowrap"
                  >${{ item.price }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- HERO -->
    <section
      class="relative min-h-[85vh] flex flex-col items-center justify-end text-center overflow-hidden"
      style="
        background: linear-gradient(
          180deg,
          #0a0a0a 0%,
          #1a1510 40%,
          #0f0d0a 100%
        );
      "
    >
      <!-- Animated particles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="n in 6"
          :key="'p' + n"
          class="particle"
          :style="{
            left: n * 16 + '%',
            animationDelay: n * 0.8 + 's',
            animationDuration: 4 + n * 0.5 + 's',
          }"
        />
      </div>

      <!-- Gold decorative line -->
      <div
        class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
      />

      <!-- Restaurant logo placeholder -->
      <div class="relative z-10 mt-24 mb-6 animate-fade-in-down">
        <div
          class="w-28 h-28 mx-auto rounded-full flex items-center justify-center shadow-2xl"
          style="
            background: linear-gradient(135deg, #1a1510 0%, #2a2015 100%);
            border: 2px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 0 60px rgba(212, 175, 55, 0.15);
          "
        >
          <span
            class="text-amber-400/60 text-[10px] tracking-wider uppercase text-center leading-tight"
            >Logo<br />Restaurante</span
          >
        </div>
      </div>

      <h1
        class="relative z-10 font-bold text-3xl sm:text-4xl tracking-tight mb-2 animate-fade-in-up"
        style="
          background: linear-gradient(135deg, #d4af37, #f5e6b8, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: &quot;Playfair Display&quot;, serif;
        "
      >
        La Trattoria
      </h1>

      <p
        class="relative z-10 text-xs tracking-[0.35em] uppercase mb-2 animate-fade-in-up animation-delay-200"
        style="color: rgba(212, 175, 55, 0.5)"
      >
        Ristorante & Bar
      </p>

      <p
        class="relative z-10 text-neutral-500 text-sm max-w-xs mx-auto mb-8 px-6 animate-fade-in-up animation-delay-400"
      >
        Una experiencia gastronómica única con los mejores ingredientes de
        temporada
      </p>

      <!-- Hero image placeholder -->
      <div
        class="relative z-10 w-full max-w-lg mx-auto h-56 sm:h-72 mb-0 overflow-hidden animate-fade-in-up animation-delay-600"
        style="
          background: linear-gradient(
            180deg,
            rgba(30, 25, 18, 0.9),
            rgba(15, 13, 10, 1)
          );
        "
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto rounded-2xl bg-neutral-800/50 border border-neutral-700/30 flex items-center justify-center mb-3"
            >
              <svg
                class="w-8 h-8 text-neutral-600"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <span class="text-neutral-600 text-xs tracking-wider uppercase"
              >Imagen Principal</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Info bar -->
    <section
      class="relative z-20 -mt-1 py-5"
      style="
        background: linear-gradient(135deg, #0f0d0a 0%, #1a1510 100%);
        border-top: 1px solid rgba(212, 175, 55, 0.1);
        border-bottom: 1px solid rgba(212, 175, 55, 0.1);
      "
    >
      <div class="max-w-lg mx-auto px-4">
        <div class="flex justify-around text-center">
          <div
            class="animate-fade-in-up"
            v-for="(info, i) in infoItems"
            :key="info.label"
            :style="{ animationDelay: i * 150 + 'ms' }"
          >
            <div
              class="flex items-center justify-center gap-1.5 mb-1"
              style="color: #d4af37"
            >
              <component :is="info.icon" class="w-3.5 h-3.5" />
              <span
                class="text-[11px] font-semibold tracking-wider uppercase"
                >{{ info.label }}</span
              >
            </div>
            <p class="text-neutral-500 text-[10px]">{{ info.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotions marquee -->
    <section class="py-6 overflow-hidden" style="background: #0a0a0a">
      <div class="max-w-lg mx-auto px-4 mb-4">
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <h3
            class="text-xs font-bold tracking-[0.3em] uppercase"
            style="color: #d4af37"
          >
            Promociones
          </h3>
        </div>
      </div>
      <div class="promotion-scroll flex gap-4 px-4">
        <div
          v-for="(promo, i) in promotions"
          :key="i"
          class="flex-shrink-0 w-72 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
          style="
            background: linear-gradient(
              135deg,
              rgba(212, 175, 55, 0.06),
              rgba(212, 175, 55, 0.02)
            );
            border: 1px solid rgba(212, 175, 55, 0.12);
          "
        >
          <div class="h-36 relative overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center"
            >
              <div class="text-center">
                <svg
                  class="w-8 h-8 mx-auto text-neutral-700 mb-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="1.5" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span
                  class="text-neutral-700 text-[9px] tracking-wider uppercase"
                  >Imagen Promo</span
                >
              </div>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 h-16"
              style="
                background: linear-gradient(
                  transparent,
                  rgba(10, 10, 10, 0.95)
                );
              "
            />
            <div class="absolute bottom-3 left-3 right-3">
              <h4 class="text-white text-sm font-bold leading-tight">
                {{ promo.title }}
              </h4>
            </div>
            <div
              class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style="
                background: rgba(212, 175, 55, 0.15);
                color: #d4af37;
                border: 1px solid rgba(212, 175, 55, 0.25);
                backdrop-filter: blur(10px);
              "
            >
              {{ promo.badge }}
            </div>
          </div>
          <div class="p-3.5">
            <p class="text-neutral-500 text-xs leading-relaxed">
              {{ promo.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Category navigation -->
    <nav
      class="sticky top-[52px] z-40 py-3 transition-all duration-300"
      ref="categoryNav"
      style="
        background: linear-gradient(
          135deg,
          rgba(15, 13, 10, 0.98),
          rgba(25, 20, 15, 0.98)
        );
        border-bottom: 1px solid rgba(212, 175, 55, 0.08);
        backdrop-filter: blur(20px);
      "
    >
      <div class="max-w-lg mx-auto overflow-x-auto hide-scrollbar">
        <div class="flex gap-2 px-4 min-w-max">
          <button
            v-for="cat in menuCategories"
            :key="cat.id"
            @click="scrollToCategory(cat.id)"
            class="px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300"
            :class="
              activeCategory === cat.id
                ? 'text-black scale-105'
                : 'text-neutral-500 hover:text-neutral-300'
            "
            :style="
              activeCategory === cat.id
                ? 'background: linear-gradient(135deg, #d4af37, #f5e6b8); box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3)'
                : 'background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06)'
            "
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Menu sections -->
    <main class="pb-24" style="background: #0a0a0a">
      <div
        v-for="cat in menuCategories"
        :key="cat.id"
        :id="'cat-' + cat.id"
        class="menu-category-section"
      >
        <!-- Category header -->
        <div class="pt-10 pb-4 px-4 max-w-lg mx-auto">
          <div class="flex items-center gap-3 mb-2">
            <div
              class="w-8 h-8 rounded-lg flex items-center justify-center"
              style="
                background: rgba(212, 175, 55, 0.1);
                border: 1px solid rgba(212, 175, 55, 0.15);
              "
            >
              <span style="color: #d4af37" class="text-sm">{{ cat.icon }}</span>
            </div>
            <h2
              class="text-xl font-bold tracking-tight"
              style="
                font-family: &quot;Playfair Display&quot;, serif;
                background: linear-gradient(135deg, #d4af37, #f5e6b8);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
            >
              {{ cat.name }}
            </h2>
          </div>
          <p v-if="cat.description" class="text-neutral-600 text-xs pl-11">
            {{ cat.description }}
          </p>
        </div>

        <!-- Subcategories -->
        <div v-for="sub in cat.subcategories" :key="sub.name" class="mb-6">
          <div class="max-w-lg mx-auto px-4 mb-3">
            <div class="flex items-center gap-2">
              <div
                class="h-px flex-1"
                style="
                  background: linear-gradient(
                    90deg,
                    rgba(212, 175, 55, 0.2),
                    transparent
                  );
                "
              />
              <h3
                class="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400"
              >
                {{ sub.name }}
              </h3>
              <div
                class="h-px flex-1"
                style="
                  background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(212, 175, 55, 0.2)
                  );
                "
              />
            </div>
            <p
              v-if="sub.description"
              class="text-neutral-600 text-[11px] text-center mt-1"
            >
              {{ sub.description }}
            </p>
          </div>

          <!-- Items grid -->
          <div class="max-w-lg mx-auto px-4 space-y-3">
            <div
              v-for="(item, idx) in sub.items"
              :key="item.name"
              class="menu-item group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              :style="{ animationDelay: idx * 80 + 'ms' }"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.03),
                  rgba(255, 255, 255, 0.01)
                );
                border: 1px solid rgba(255, 255, 255, 0.05);
              "
              @click="openDetail(item)"
            >
              <div class="flex gap-4 p-3.5">
                <!-- Item image placeholder -->
                <div
                  class="w-24 h-24 rounded-xl flex-shrink-0 overflow-hidden relative"
                >
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center"
                  >
                    <span
                      class="text-neutral-700 text-[9px] tracking-wider uppercase text-center"
                      >Foto<br />platillo</span
                    >
                  </div>
                  <div v-if="item.tag" class="absolute top-1.5 left-1.5">
                    <span
                      class="px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider uppercase"
                      :style="tagStyle(item.tag)"
                      >{{ item.tag }}</span
                    >
                  </div>
                </div>

                <!-- Item info -->
                <div
                  class="flex-1 min-w-0 flex flex-col justify-between py-0.5"
                >
                  <div>
                    <h4
                      class="text-white text-sm font-bold leading-tight mb-1 group-hover:text-amber-300 transition-colors duration-300"
                    >
                      {{ item.name }}
                    </h4>
                    <p
                      class="text-neutral-500 text-xs leading-relaxed line-clamp-2"
                    >
                      {{ item.desc }}
                    </p>
                  </div>
                  <div class="flex items-center justify-between mt-2">
                    <span class="text-base font-bold" style="color: #d4af37"
                      >${{ item.price }}</span
                    >
                    <span
                      class="text-[10px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105"
                      style="
                        color: #d4af37;
                        background: rgba(212, 175, 55, 0.08);
                        border: 1px solid rgba(212, 175, 55, 0.15);
                      "
                      >Ver más</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Item detail modal -->
    <Transition name="modal">
      <div
        v-if="selectedItem"
        class="fixed inset-0 z-[70] flex items-end justify-center"
        @click.self="selectedItem = null"
      >
        <div
          class="absolute inset-0 bg-black/80 backdrop-blur-sm"
          @click="selectedItem = null"
        />
        <div
          class="relative w-full max-w-lg rounded-t-3xl overflow-hidden animate-slide-up"
          style="
            background: linear-gradient(180deg, #1a1510 0%, #0f0d0a 100%);
            border-top: 1px solid rgba(212, 175, 55, 0.15);
            max-height: 85vh;
          "
        >
          <!-- Drag handle -->
          <div class="flex justify-center pt-3 pb-2">
            <div
              class="w-10 h-1 rounded-full"
              style="background: rgba(212, 175, 55, 0.2)"
            />
          </div>

          <!-- Close button -->
          <button
            @click="selectedItem = null"
            class="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110"
            style="background: rgba(255, 255, 255, 0.05); color: #d4af37"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Detail image placeholder -->
          <div class="w-full h-56 relative overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center"
            >
              <div class="text-center">
                <svg
                  class="w-12 h-12 mx-auto text-neutral-700 mb-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="1.5" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span class="text-neutral-600 text-xs tracking-wider uppercase"
                  >Imagen del platillo</span
                >
              </div>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 h-24"
              style="background: linear-gradient(transparent, #1a1510)"
            />
            <div v-if="selectedItem.tag" class="absolute top-4 left-4">
              <span
                class="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                :style="tagStyle(selectedItem.tag)"
                >{{ selectedItem.tag }}</span
              >
            </div>
          </div>

          <!-- Detail content -->
          <div class="px-6 pb-8 -mt-6 relative">
            <h3
              class="text-2xl font-bold mb-1"
              style="
                font-family: &quot;Playfair Display&quot;, serif;
                background: linear-gradient(135deg, #d4af37, #f5e6b8);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
            >
              {{ selectedItem.name }}
            </h3>
            <p class="text-neutral-400 text-sm leading-relaxed mb-5">
              {{ selectedItem.fullDesc || selectedItem.desc }}
            </p>

            <div
              class="flex items-center justify-between p-4 rounded-2xl mb-4"
              style="
                background: rgba(212, 175, 55, 0.05);
                border: 1px solid rgba(212, 175, 55, 0.1);
              "
            >
              <div>
                <span
                  class="text-neutral-500 text-[10px] tracking-wider uppercase block mb-0.5"
                  >Precio</span
                >
                <span class="text-2xl font-bold" style="color: #d4af37"
                  >${{ selectedItem.price }}</span
                >
              </div>
              <div v-if="selectedItem.portion" class="text-right">
                <span
                  class="text-neutral-500 text-[10px] tracking-wider uppercase block mb-0.5"
                  >Porción</span
                >
                <span class="text-neutral-300 text-sm font-medium">{{
                  selectedItem.portion
                }}</span>
              </div>
            </div>

            <div v-if="selectedItem.allergens" class="mb-4">
              <span
                class="text-neutral-500 text-[10px] tracking-wider uppercase block mb-2"
                >Alérgenos</span
              >
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="allergen in selectedItem.allergens"
                  :key="allergen"
                  class="px-2.5 py-1 rounded-full text-[10px] font-medium text-neutral-400"
                  style="
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                  "
                  >{{ allergen }}</span
                >
              </div>
            </div>

            <a
              :href="waOrder"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center py-3.5 rounded-2xl text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style="
                background: linear-gradient(135deg, #d4af37, #c4a030);
                color: #0a0a0a;
                box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
              "
              >Preguntar disponibilidad</a
            >
          </div>
        </div>
      </div>
    </Transition>

    <!-- Footer -->
    <footer
      class="py-10 text-center"
      style="
        background: linear-gradient(180deg, #0a0a0a 0%, #0f0d0a 100%);
        border-top: 1px solid rgba(212, 175, 55, 0.08);
      "
    >
      <div class="max-w-lg mx-auto px-4">
        <div
          class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
          style="
            background: rgba(212, 175, 55, 0.05);
            border: 1px solid rgba(212, 175, 55, 0.1);
          "
        >
          <span
            class="text-amber-500/40 text-[8px] tracking-wider uppercase text-center leading-tight"
            >Logo</span
          >
        </div>
        <h4
          class="text-lg font-bold mb-1"
          style="
            font-family: &quot;Playfair Display&quot;, serif;
            color: #d4af37;
          "
        >
          La Trattoria
        </h4>
        <p class="text-neutral-600 text-xs mb-4">Ristorante & Bar</p>

        <div class="flex justify-center gap-6 mb-6 text-neutral-500">
          <a
            href="#"
            class="flex items-center gap-1.5 text-xs hover:text-amber-400 transition-colors duration-300"
          >
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            Llamar
          </a>
          <a
            href="#"
            class="flex items-center gap-1.5 text-xs hover:text-amber-400 transition-colors duration-300"
          >
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Ubicación
          </a>
          <a
            href="#"
            class="flex items-center gap-1.5 text-xs hover:text-amber-400 transition-colors duration-300"
          >
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>

        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] tracking-wider"
          style="
            background: rgba(212, 175, 55, 0.04);
            border: 1px solid rgba(212, 175, 55, 0.08);
            color: rgba(212, 175, 55, 0.4);
          "
        >
          <span>Horario: Lun–Dom 1:00 pm – 12:00 am</span>
        </div>

        <p class="text-neutral-700 text-[10px] mt-6 tracking-wider">
          Menú digital creado por
          <a
            href="/"
            class="text-amber-600/60 hover:text-amber-400 transition-colors duration-300"
            >Devifly</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";

const scrolled = ref(false);
const showSearch = ref(false);
const searchQuery = ref("");
const activeCategory = ref("entradas");
const selectedItem = ref(null);
const searchInput = ref(null);
const categoryNav = ref(null);

const waOrder =
  "https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20preguntar%20sobre%20el%20men%C3%BA";

const infoItems = [
  { icon: "span", label: "Horario", value: "1:00 pm – 12:00 am" },
  { icon: "span", label: "Servicio", value: "En sitio & Terraza" },
  { icon: "span", label: "Reservas", value: "WhatsApp" },
];

const promotions = [
  {
    title: "2x1 en Margaritas",
    desc: "Todos los martes de 5pm a 8pm disfruta de nuestras margaritas al 2x1.",
    badge: "Martes",
  },
  {
    title: "Botana Gratis",
    desc: "En la compra de cualquier botella, llévate una botana de cortesía.",
    badge: "Especial",
  },
  {
    title: "Happy Hour Cocktails",
    desc: "Cócteles de la casa con 30% de descuento de lunes a jueves de 4pm a 7pm.",
    badge: "L-J",
  },
];

const menuCategories = [
  {
    id: "entradas",
    name: "Entradas",
    icon: "🍽",
    description: "Perfectas para compartir y abrir el apetito",
    subcategories: [
      {
        name: "Botanas",
        description: "Opciones ligeras para comenzar",
        items: [
          {
            name: "Guacamole con Totopos",
            desc: "Guacamole fresco preparado al momento con aguacate, jitomate, cebolla, cilantro y un toque de limón",
            fullDesc:
              "Guacamole fresco preparado al momento con aguacate hass de temporada, jitomate, cebolla morada, cilantro fresco y un toque de limón. Servido con totopos artesanales crujientes.",
            price: 165,
            portion: "200 gr",
            tag: "Popular",
            allergens: ["Aguacate"],
          },
          {
            name: "Nachos Supremos",
            desc: "Totopos crujientes bañados en queso cheddar fundido con jalapeños, frijoles y crema ácida",
            fullDesc:
              "Totopos artesanales crujientes bañados en queso cheddar fundido premium, con jalapeños frescos, frijoles refritos, crema ácida, pico de gallo y guacamole. Una explosión de sabores.",
            price: 215,
            portion: "350 gr",
            allergens: ["Lácteos", "Gluten"],
          },
          {
            name: "Esquites Premium",
            desc: "Granos de elote suaves y aromáticos preparados con mantequilla, epazote y chile piquín",
            fullDesc:
              "Granos de elote tierno y aromáticos, cocidos a fuego lento con mantequilla de hierbas, epazote fresco y un toque de chile piquín. Servidos con mayonesa artesanal, queso cotija y limón.",
            price: 135,
            tag: "Nuevo",
          },
          {
            name: "Tabla de Quesos Artesanales",
            desc: "Selección de quesos mexicanos con membrillo, nueces y panes artesanales",
            fullDesc:
              "Cuidadosa selección de 4 quesos artesanales mexicanos acompañados de membrillo casero, nueces caramelizadas, uvas frescas y panes artesanales tostados.",
            price: 295,
            portion: "400 gr",
            allergens: ["Lácteos", "Gluten", "Frutos secos"],
          },
        ],
      },
      {
        name: "Tostadas",
        description: "Frescura en cada bocado",
        items: [
          {
            name: "Tostada de Atún Fresco",
            desc: "Atún fresco en cubos marinado en salsas negras con aguacate, mango y ajonjolí tostado",
            fullDesc:
              "Atún aleta amarilla fresco cortado en cubos (125 g), marinado en nuestra mezcla secreta de salsas negras, montado sobre tostada crujiente con aguacate, mango de temporada y ajonjolí tostado.",
            price: 185,
            portion: "125 gr",
            tag: "Recomendado",
            allergens: ["Pescado", "Ajonjolí"],
          },
          {
            name: "Tostada de Aguachile",
            desc: "Camarón fresco curtido en limón bañado en salsa de chile serrano con pepino y cebolla morada",
            fullDesc:
              "Camarón fresco de primera calidad (120 g) curtido en jugo de limón natural, bañado en nuestra salsa especial de chile serrano con pepino crujiente, cebolla morada y cilantro fresco.",
            price: 155,
            portion: "120 gr",
            allergens: ["Mariscos"],
          },
          {
            name: "Tostada de Pulpo",
            desc: "Pulpo cocido a baja temperatura con vinagreta de cítricos, alcaparras y pimiento",
            fullDesc:
              "Pulpo del Pacífico cocido lentamente a baja temperatura, servido sobre tostada artesanal con vinagreta de cítricos, alcaparras, pimiento asado y microgreens frescos.",
            price: 195,
            portion: "130 gr",
            allergens: ["Mariscos"],
          },
        ],
      },
    ],
  },
  {
    id: "platos-fuertes",
    name: "Platos Fuertes",
    icon: "🥩",
    description: "El corazón de nuestra cocina",
    subcategories: [
      {
        name: "Del Mar",
        description: "Pescados y mariscos frescos del día",
        items: [
          {
            name: "Salmón al Mango",
            desc: "Filete de salmón a la parrilla con salsa de mango, acompañado de arroz jazmín y vegetales salteados",
            fullDesc:
              "Filete de salmón fresco del Atlántico marcado a la parrilla para lograr una piel crujiente. Bañado en nuestra salsa de mango con habanero, acompañado de arroz jazmín al azafrán y vegetales de temporada salteados al wok.",
            price: 385,
            portion: "250 gr",
            tag: "Chef",
            allergens: ["Pescado"],
          },
          {
            name: "Pulpo Zarandeado",
            desc: "Tiernos trozos de pulpo marinados y asados al estilo zarandeado con toque ahumado",
            fullDesc:
              "Pulpo del Pacífico (200 g) cocinado a baja temperatura y luego asado al estilo zarandeado de Nayarit, con un toque ahumado especiado que resalta su sabor natural. Acompañado de papas rústicas.",
            price: 525,
            portion: "200 gr",
            allergens: ["Mariscos"],
          },
          {
            name: "Camarones a la Diabla",
            desc: "Camarones jumbo en salsa de chiles rojos acompañados de arroz rojo y ensalada fresca",
            fullDesc:
              "Camarones jumbo (6 piezas) salteados en nuestra salsa de chiles guajillo, morita y árbol. Con un nivel de picor intenso pero equilibrado. Servidos sobre arroz rojo y ensalada mixta.",
            price: 345,
            portion: "6 pzas",
            allergens: ["Mariscos"],
          },
        ],
      },
      {
        name: "De la Tierra",
        description: "Cortes y platillos de primera",
        items: [
          {
            name: "Rib Eye Premium",
            desc: "Corte de rib eye Angus 400 gr, jugoso y bien marmoleado, sellado al fuego alto",
            fullDesc:
              "Corte de Rib Eye Angus Beef seleccionado (400 gr). Jugoso y generosamente marmoleado, sellado al fuego alto para crear una costra perfecta manteniendo el interior suave. Con guarnición a elegir.",
            price: 755,
            portion: "400 gr",
            tag: "Premium",
            allergens: [],
          },
          {
            name: "Arrachera Marinada",
            desc: "Arrachera 350 gr marinada con la receta especial de la casa, acompañada de guacamole y frijoles",
            fullDesc:
              "Arrachera de res premium (350 gr) marinada por 24 horas con nuestra receta especial de chiles secos, ajo rostizado y especias. Acompañada de guacamole fresco, frijoles charros y tortillas hechas a mano.",
            price: 565,
            portion: "350 gr",
          },
          {
            name: "Molcajete Mar y Tierra",
            desc: "Camarones y arrachera servidos en molcajete de piedra con queso fundido, nopales y salsa",
            fullDesc:
              "Camarones al mojo de ajo y arrachera al carbón, servidos en molcajete de piedra volcánica artesanal con queso Oaxaca fundido, nopales asados, cebollitas cambray y salsa de molcajete.",
            price: 435,
            tag: "Favorito",
          },
          {
            name: "Hamburguesa Gourmet",
            desc: "Con carne Angus 200 gr, queso gouda, cebolla caramelizada, tocino y BBQ artesanal",
            fullDesc:
              "Hamburguesa de carne Angus premium (200 gr), queso gouda ahumado, cebolla caramelizada, tocino crocante, lechuga, jitomate y nuestra salsa BBQ artesanal. Servida en pan brioche con papas gourmet.",
            price: 245,
            portion: "200 gr",
            allergens: ["Gluten", "Lácteos"],
          },
        ],
      },
    ],
  },
  {
    id: "tacos",
    name: "Tacos",
    icon: "🌮",
    description: "Tradición en cada tortilla",
    subcategories: [
      {
        name: "Tacos de Corte",
        description: "Con los mejores cortes de la parrilla",
        items: [
          {
            name: "Tacos de Rib Eye",
            desc: "Rib eye jugoso recién asado, fileteado en tiras sobre tortillas de maíz con guacamole",
            fullDesc:
              "Dos tacos preparados con rib eye Angus jugoso y recién asado, fileteado en tiras gruesas sobre tortillas de maíz nixtamalizado, acompañados de guacamole fresco, cebollitas y salsa de la casa.",
            price: 255,
            portion: "2 pzas",
            tag: "Popular",
          },
          {
            name: "Tacos de Arrachera",
            desc: "Arrachera marinada cortada en finas tiras con cebolla asada y cilantro fresco",
            fullDesc:
              "Dos tacos de arrachera premium marinada y cortada en finas tiras, servidos con cebolla asada, cilantro fresco, rábano y salsa verde de tomatillo.",
            price: 185,
            portion: "2 pzas",
          },
          {
            name: "Tacos de Picanha",
            desc: "Delicioso corte de picanha en tiras jugosas, servido con chimichurri",
            fullDesc:
              "Dos tacos del corte de picanha Angus, dorado a la parrilla y cortado en tiras jugosas. Con chimichurri fresco, cebolla curtida y aguacate rebanado.",
            price: 185,
            portion: "2 pzas",
          },
        ],
      },
      {
        name: "Tacos del Mar",
        description: "Sabores costeros",
        items: [
          {
            name: "Taco de Pulpo Zarandeado",
            desc: "Pulpo zarandeado con toque ahumado y salsa de habanero con mango",
            fullDesc:
              "Taco de pulpo (40 g) cocido lentamente y zarandeado a las brasas con toque ahumado, montado en tortilla de maíz azul con salsa de habanero y mango tropical.",
            price: 185,
            portion: "2 pzas",
            allergens: ["Mariscos"],
          },
          {
            name: "Taco de Camarón Tempura",
            desc: "Camarón tempura crujiente con chipotle cremoso, col morada y limón",
            fullDesc:
              "Camarones en tempura ligera y crujiente, servidos en tortilla de harina con aderezo chipotle cremoso, col morada rallada, cilantro y un toque de limón.",
            price: 165,
            portion: "2 pzas",
            tag: "Nuevo",
            allergens: ["Mariscos", "Gluten"],
          },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🍹",
    description: "Nuestra mixología artesanal",
    subcategories: [
      {
        name: "Coctelería de la Casa",
        description: "Creaciones originales de nuestro bartender",
        items: [
          {
            name: "Margarita Clásica",
            desc: "Tequila reposado, jugo de limón natural, triple sec y sal de gusano",
            fullDesc:
              "Nuestra margarita clásica preparada con tequila reposado 100% agave, jugo de limón natural recién exprimido, triple sec premium y sal de gusano artesanal en el borde. 355 ml.",
            price: 165,
            portion: "355 ml",
            tag: "Clásico",
          },
          {
            name: "Mojito de Maracuyá",
            desc: "Ron blanco, maracuyá fresca, hojas de hierbabuena, limón y soda",
            fullDesc:
              "Refrescante mojito tropical con ron Bacardí blanco, pulpa de maracuyá fresca, hojas de hierbabuena recién cortadas, jugo de limón y soda fría. 355 ml.",
            price: 175,
            portion: "355 ml",
          },
          {
            name: "Mezcalita Toronja",
            desc: "Mezcal artesanal, toronja fresca, té de limón, vino blanco y agua tónica",
            fullDesc:
              "Mezcal cenizo artesanal de Oaxaca con jugo de toronja fresca, té de limón casero, un splash de vino blanco y agua tónica premium. 355 ml. Contiene 45ml de Mezcal.",
            price: 185,
            portion: "355 ml",
            tag: "Recomendado",
          },
          {
            name: "Negroni Ahumado",
            desc: "Gin premium, campari, vermut rojo infusionado con madera de mezquite",
            fullDesc:
              "Nuestro Negroni signature con ginebra premium, Campari italiano, vermut rojo artesanal infusionado con astillas de madera de mezquite para un aroma ahumado inolvidable. 200 ml.",
            price: 225,
            portion: "200 ml",
            allergens: [],
          },
        ],
      },
      {
        name: "Cervezas",
        items: [
          {
            name: "Cerveza Nacional",
            desc: "Tecate Light, Indio, XX Lager, XX Ámbar, Victoria, Corona",
            price: 75,
            portion: "325 ml",
          },
          {
            name: "Cerveza Premium",
            desc: "Heineken, Miller, Bohemia Clara, Bohemia Oscura, Amstel Ultra",
            price: 95,
            portion: "355 ml",
          },
          {
            name: "Cerveza Artesanal",
            desc: "Selección rotativa de cervecerías locales, pregunta por la carta del día",
            price: 125,
            portion: "355 ml",
            tag: "Nuevo",
          },
        ],
      },
      {
        name: "Sin Alcohol",
        description: "Opciones refrescantes para todos",
        items: [
          {
            name: "Limonada de Frutos Rojos",
            desc: "Limonada natural con fresas, frambuesas y mora azul",
            price: 85,
            portion: "355 ml",
          },
          {
            name: "Naranjada con Hierbabuena",
            desc: "Naranja fresca con hierbabuena y un toque de jengibre",
            price: 75,
            portion: "355 ml",
          },
          {
            name: "Agua de Horchata",
            desc: "Receta artesanal con canela, arroz y un toque de vainilla",
            price: 65,
            portion: "500 ml",
            tag: "Favorito",
          },
        ],
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    icon: "🍰",
    description: "El cierre perfecto",
    subcategories: [
      {
        name: "Especialidades",
        items: [
          {
            name: "Churros con Chocolate",
            desc: "Churros recién hechos espolvoreados de azúcar con canela, bañados en chocolate belga",
            fullDesc:
              "Seis churros artesanales recién hechos, espolvoreados con azúcar con canela de Ceilán, acompañados de un tazón de chocolate belga oscuro (70% cacao) fundido con un toque de chile ancho.",
            price: 145,
            portion: "6 pzas",
            tag: "Favorito",
            allergens: ["Gluten", "Lácteos"],
          },
          {
            name: "Pastel de Tres Leches",
            desc: "Bizcocho esponjoso bañado en tres leches con fresas frescas y merengue tostado",
            fullDesc:
              "Nuestro clásico pastel de bizcocho ultra esponjoso, remojado en la mezcla tradicional de tres leches (evaporada, condensada y media crema), coronado con merengue italiano tostado y fresas de temporada.",
            price: 155,
            allergens: ["Gluten", "Lácteos", "Huevo"],
          },
          {
            name: "Flan Napolitano",
            desc: "Flan casero con caramelo oscuro, textura cremosa y un toque de vainilla natural",
            fullDesc:
              "Flan casero preparado con la receta de la abuela: huevos de rancho, leche fresca, queso crema y vainilla natural de Papantla. Con caramelo oscuro ligeramente amargo, para un balance perfecto.",
            price: 125,
            allergens: ["Lácteos", "Huevo"],
          },
          {
            name: "Helado Artesanal",
            desc: "Dos bolas de helado artesanal del día, pregunta por los sabores disponibles",
            price: 95,
            portion: "2 bolas",
          },
        ],
      },
    ],
  },
  {
    id: "digestivos",
    name: "Digestivos",
    icon: "☕",
    description: "Para cerrar con broche de oro",
    subcategories: [
      {
        name: "Cafés & Licores",
        items: [
          {
            name: "Café Americano",
            desc: "Café de altura de Oaxaca, tostado medio con notas de chocolate y nuez",
            price: 65,
          },
          {
            name: "Carajillo Licor 43",
            desc: "Espresso doble con Licor 43. Servido en copa con hielo",
            price: 165,
            tag: "Clásico",
          },
          {
            name: "Carajillo de Baileys",
            desc: "Espresso doble con Baileys Irish Cream. Dulce y cremoso",
            price: 155,
            allergens: ["Lácteos"],
          },
          {
            name: "Mezcal Cenizo (1 oz)",
            desc: "Copa de mezcal cenizo artesanal de la casa",
            price: 95,
            portion: "30 ml",
          },
        ],
      },
    ],
  },
];

// Flatten all items for search
const allItems = computed(() => {
  const items = [];
  menuCategories.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      sub.items.forEach((item) => {
        items.push(item);
      });
    });
  });
  return items;
});

const searchResults = computed(() => {
  if (!searchQuery.value) return [];
  const q = searchQuery.value.toLowerCase();
  return allItems.value.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q),
  );
});

function tagStyle(tag) {
  const styles = {
    Popular:
      "background: rgba(212, 175, 55, 0.2); color: #d4af37; border: 1px solid rgba(212, 175, 55, 0.3)",
    Nuevo:
      "background: rgba(52, 211, 153, 0.15); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25)",
    Recomendado:
      "background: rgba(96, 165, 250, 0.15); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.25)",
    Premium:
      "background: rgba(192, 132, 252, 0.15); color: #c084fc; border: 1px solid rgba(192, 132, 252, 0.25)",
    Chef: "background: rgba(251, 146, 60, 0.15); color: #fb923c; border: 1px solid rgba(251, 146, 60, 0.25)",
    Favorito:
      "background: rgba(244, 114, 182, 0.15); color: #f472b6; border: 1px solid rgba(244, 114, 182, 0.25)",
    Clásico:
      "background: rgba(212, 175, 55, 0.12); color: #d4af37; border: 1px solid rgba(212, 175, 55, 0.2)",
  };
  return styles[tag] || styles.Popular;
}

function openDetail(item) {
  selectedItem.value = item;
}

function scrollToCategory(id) {
  activeCategory.value = id;
  const el = document.getElementById("cat-" + id);
  if (el) {
    const offset = 110;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// Intersection observer for active category
let observer = null;

function setupObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("cat-", "");
          activeCategory.value = id;
        }
      });
    },
    { rootMargin: "-120px 0px -60% 0px", threshold: 0 },
  );
  menuCategories.forEach((cat) => {
    const el = document.getElementById("cat-" + cat.id);
    if (el) observer.observe(el);
  });
}

function handleScroll() {
  scrolled.value = window.scrollY > 50;
}

watch(showSearch, (val) => {
  if (val) {
    nextTick(() => searchInput.value?.focus());
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  setupObserver();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (observer) observer.disconnect();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");

.menu-demo {
  font-family:
    "Inter",
    -apple-system,
    system-ui,
    sans-serif;
  background: #0a0a0a;
  color: #fff;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* Custom scrollbar */
.custom-scroll::-webkit-scrollbar {
  width: 3px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: rgba(212, 175, 55, 0.2);
  border-radius: 10px;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Particles */
.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.6), transparent);
  border-radius: 50%;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) scale(1.5);
    opacity: 0;
  }
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out both;
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}
.animation-delay-200 {
  animation-delay: 200ms;
}
.animation-delay-400 {
  animation-delay: 400ms;
}
.animation-delay-600 {
  animation-delay: 600ms;
}
.animate-slide-up {
  animation: slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Menu items entrance */
.menu-item {
  animation: fadeInUp 0.5s ease-out both;
}

/* Search overlay transition */
.search-slide-enter-active {
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.search-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
}
.search-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.search-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Modal transition */
.modal-enter-active {
  transition: opacity 0.3s ease;
}
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Promotion scroll */
.promotion-scroll {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.promotion-scroll::-webkit-scrollbar {
  display: none;
}
.promotion-scroll > * {
  scroll-snap-align: start;
}

/* Line clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
