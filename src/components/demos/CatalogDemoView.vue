<template>
  <div
    class="catalogo-demo min-h-screen"
    :style="{ fontFamily: `'Poppins', sans-serif`, background: theme.colors.pageBg }"
  >
    <!-- Top bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl py-3 px-4 sm:px-6 flex items-center justify-between"
      :style="{
        background: theme.colors.barBg,
        borderBottom: `1px solid ${theme.colors.border}`,
      }"
    >
      <router-link
        to="/catalogos"
        class="flex items-center gap-2 text-sm transition-colors"
        :style="{ color: theme.colors.primary }"
      >
        <LucideIcon name="chevron-left" class-name="w-4 h-4" />
        <span class="hidden sm:inline">{{ copy.back }}</span>
      </router-link>
      <span
        class="text-xs font-semibold px-3 py-1 rounded-full"
        :style="{
          background: theme.colors.badge,
          color: theme.colors.badgeText,
          border: `1px solid ${theme.colors.border}`,
        }"
      >
        {{ copy.demo }} {{ theme.plan }}
      </span>
      <a
        :href="waHire"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-semibold transition-colors"
        :style="{ color: theme.colors.primary }"
      >
        <span class="inline-flex items-center gap-1">
          {{ copy.hire }}
          <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />
        </span>
      </a>
    </div>

    <!-- Store Header -->
    <section class="pt-20 pb-6 px-4" :style="{ background: theme.colors.headerBg }">
      <div class="max-w-lg lg:max-w-4xl mx-auto text-center">
        <div
          v-if="tier === 'premium'"
          class="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
          :style="{ background: 'rgba(198, 167, 94, 0.12)', border: '1px solid rgba(198, 167, 94, 0.25)' }"
        >
          <LucideIcon name="gem" class-name="w-10 h-10" :style="{ color: theme.colors.primary }" />
        </div>
        <div
          v-else
          class="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold"
          :style="{ background: theme.colors.cta }"
        >
          {{ theme.storeName.charAt(0) }}
        </div>
        <h1 class="text-2xl font-bold mb-1" :style="{ color: theme.colors.text }">
          {{ theme.storeName }} {{ theme.storeEmoji }}
        </h1>
        <p class="text-sm mb-3" :style="{ color: theme.colors.textMuted }">
          {{ theme.storeTagline }}
        </p>
        <div
          class="flex items-center justify-center gap-4 text-xs"
          :style="{ color: theme.colors.textMuted }"
        >
          <span class="inline-flex items-center gap-1">
            <LucideIcon name="map-pin" class-name="w-3 h-3" /> {{ theme.location }}
          </span>
          <span class="inline-flex items-center gap-1">
            <LucideIcon name="truck" class-name="w-3 h-3" /> {{ theme.shipping }}
          </span>
        </div>
      </div>
    </section>

    <!-- Coupon banner (Premium) -->
    <section
      v-if="theme.showCoupon && theme.coupon"
      class="px-4 py-3"
      :style="{ background: 'rgba(198, 167, 94, 0.08)', borderBottom: `1px solid ${theme.colors.border}` }"
    >
      <div class="max-w-lg lg:max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <LucideIcon name="ticket" class-name="w-4 h-4" :style="{ color: theme.colors.primary }" />
          <span class="text-xs font-medium" :style="{ color: theme.colors.text }">
            {{ theme.coupon.discount }}
          </span>
        </div>
        <span
          class="text-[10px] font-bold px-2.5 py-1 rounded-lg tracking-wider"
          :style="{ background: theme.colors.cta, color: theme.colors.ctaText || '#0b0b0b' }"
        >
          {{ theme.coupon.code }}
        </span>
      </div>
    </section>

    <!-- Seller picker (Premium) -->
    <section
      v-if="theme.showSellerPicker && theme.sellers"
      class="px-4 py-3 border-b"
      :style="{ borderColor: theme.colors.border, background: theme.colors.cardBg }"
    >
      <div class="max-w-lg lg:max-w-4xl mx-auto">
        <p class="text-[10px] uppercase tracking-widest mb-2" :style="{ color: theme.colors.textMuted }">
          {{ copy.sellerPicker }}
        </p>
        <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0"
            :style="
              activeSeller === 'all'
                ? { background: theme.colors.cta, color: theme.colors.ctaText || '#0b0b0b' }
                : { background: theme.colors.pillInactive, color: theme.colors.pillInactiveText }
            "
            @click="activeSeller = 'all'"
          >
            {{ copy.allSellers }}
          </button>
          <button
            v-for="seller in theme.sellers"
            :key="seller.id"
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0"
            :style="
              activeSeller === seller.id
                ? { background: theme.colors.cta, color: theme.colors.ctaText || '#0b0b0b' }
                : { background: theme.colors.pillInactive, color: theme.colors.pillInactiveText }
            "
            @click="activeSeller = seller.id"
          >
            <span
              class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
              :style="
                activeSeller === seller.id
                  ? { background: 'rgba(0,0,0,0.15)' }
                  : { background: 'rgba(198, 167, 94, 0.15)', color: theme.colors.primary }
              "
            >
              {{ seller.avatar }}
            </span>
            {{ seller.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Search & Categories -->
    <section
      class="sticky top-[52px] z-40 py-3 px-4 border-b"
      :style="{ background: theme.colors.cardBg, borderColor: theme.colors.border }"
    >
      <div class="max-w-lg lg:max-w-4xl mx-auto">
        <div v-if="theme.showSearch" class="relative mb-3">
          <LucideIcon
            name="search"
            class-name="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2"
            :style="{ color: theme.colors.textMuted }"
          />
          <input
            v-model="search"
            type="text"
            :placeholder="copy.searchPlaceholder"
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition"
            :style="{
              background: tier === 'premium' ? '#1a1a1a' : '#fafafa',
              borderColor: theme.colors.border,
              color: tier === 'premium' ? theme.colors.text : '#1f2937',
            }"
          />
        </div>
        <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            v-for="cat in displayCategories"
            :key="cat.key"
            class="px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
            :style="
              activeCategory === cat.key
                ? { background: theme.colors.pillActive, color: tier === 'premium' ? '#0b0b0b' : '#ffffff' }
                : { background: theme.colors.pillInactive, color: theme.colors.pillInactiveText }
            "
            @click="activeCategory = cat.key"
          >
            {{ cat.icon }} {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-6 px-4" :style="{ background: theme.colors.pageBg, minHeight: '60vh' }">
      <div class="max-w-lg lg:max-w-4xl mx-auto">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border"
            :style="{ background: theme.colors.cardBg, borderColor: theme.colors.border }"
            @click="openProduct(product)"
          >
            <div class="aspect-square relative overflow-hidden">
              <img
                :src="product.img"
                :alt="product.name"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                v-if="product.badge"
                class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold"
                :style="{
                  background: product.badgeColor,
                  color: tier === 'premium' ? '#0b0b0b' : '#ffffff',
                }"
              >
                {{ product.badge }}
              </div>
              <div
                v-if="theme.showPaymentBadge && product.onlinePay"
                class="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8px] font-bold flex items-center gap-0.5"
                :style="{ background: theme.colors.cta, color: theme.colors.ctaText || '#0b0b0b' }"
              >
                <LucideIcon name="credit-card" class-name="w-2.5 h-2.5" />
                {{ copy.onlinePay }}
              </div>
              <template v-if="showStock">
                <div
                  v-if="product.stock <= 3 && product.stock > 0"
                  class="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white bg-orange-500"
                >
                  {{ copy.stockLeft(product.stock) }}
                </div>
                <div
                  v-else-if="product.stock === 0"
                  class="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <span class="text-white font-bold text-sm">{{ copy.soldOut }}</span>
                </div>
              </template>
            </div>
            <div class="p-3">
              <p class="text-[11px] font-medium mb-0.5 capitalize" :style="{ color: theme.colors.categoryLabel }">
                {{ product.category }}
              </p>
              <h3 class="text-sm font-semibold mb-1 line-clamp-2" :style="{ color: theme.colors.text }">
                {{ product.name }}
              </h3>
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm" :style="{ color: theme.colors.text }">
                  ${{ product.price.toLocaleString() }}
                </span>
                <span
                  v-if="product.oldPrice"
                  class="text-xs line-through"
                  :style="{ color: theme.colors.textMuted }"
                >
                  ${{ product.oldPrice.toLocaleString() }}
                </span>
              </div>
              <div v-if="showSizes && product.sizes?.length" class="flex gap-1 mt-2 flex-wrap">
                <span
                  v-for="s in product.sizes"
                  :key="s"
                  class="text-[10px] px-1.5 py-0.5 rounded border"
                  :style="{ borderColor: theme.colors.border, color: theme.colors.textMuted }"
                >
                  {{ s }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <LucideIcon name="search-x" class-name="w-12 h-12 mx-auto mb-3" :style="{ color: theme.colors.textMuted }" />
          <p class="text-sm" :style="{ color: theme.colors.textMuted }">{{ copy.noProducts }}</p>
        </div>
      </div>
    </section>

    <!-- WhatsApp FAB -->
    <a
      :href="waOrder"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style="background: #25d366"
    >
      <LucideIcon name="message-circle" class-name="w-7 h-7 text-white" />
    </a>

    <!-- Product Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedProduct"
          class="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
          @click.self="selectedProduct = null"
        >
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="selectedProduct = null"></div>
          <div
            class="relative w-full max-w-md lg:max-w-2xl rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto"
            :style="{ background: theme.colors.cardBg, zIndex: 1 }"
          >
            <div class="aspect-video relative overflow-hidden rounded-t-3xl">
              <img
                :src="galleryPhotos[activePhoto] || selectedProduct.img"
                :alt="selectedProduct.name"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <button
                class="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                :style="{ background: 'rgba(255,255,255,0.85)' }"
                @click="selectedProduct = null"
              >
                <LucideIcon name="x" class-name="w-4 h-4 text-gray-600" />
              </button>
              <div
                v-if="galleryPhotos.length > 1"
                class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5"
              >
                <button
                  v-for="(_, i) in galleryPhotos"
                  :key="i"
                  class="w-2 h-2 rounded-full transition"
                  :style="{ background: activePhoto === i ? theme.colors.primary : 'rgba(255,255,255,0.5)' }"
                  @click.stop="activePhoto = i"
                />
              </div>
            </div>
            <div class="p-6">
              <p class="text-xs font-semibold mb-1 capitalize" :style="{ color: theme.colors.categoryLabel }">
                {{ selectedProduct.category }}
              </p>
              <h2 class="text-xl font-bold mb-2" :style="{ color: theme.colors.text }">
                {{ selectedProduct.name }}
              </h2>
              <p class="text-sm mb-4" :style="{ color: theme.colors.textMuted }">
                {{ selectedProduct.description }}
              </p>

              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl font-bold" :style="{ color: theme.colors.text }">
                  ${{ selectedProduct.price.toLocaleString() }}
                </span>
                <span
                  v-if="selectedProduct.oldPrice"
                  class="text-lg line-through"
                  :style="{ color: theme.colors.textMuted }"
                >
                  ${{ selectedProduct.oldPrice.toLocaleString() }}
                </span>
                <span
                  v-if="selectedProduct.oldPrice"
                  class="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-500"
                >
                  -{{ Math.round((1 - selectedProduct.price / selectedProduct.oldPrice) * 100) }}%
                </span>
              </div>

              <div v-if="showSizes && selectedProduct.sizes" class="mb-4">
                <p class="text-xs font-semibold mb-2" :style="{ color: theme.colors.text }">{{ copy.size }}</p>
                <div class="flex gap-2 flex-wrap">
                  <button
                    v-for="s in selectedProduct.sizes"
                    :key="s"
                    class="px-4 py-2 rounded-xl text-sm font-medium border transition"
                    :style="
                      selectedSize === s
                        ? { borderColor: theme.colors.primary, color: theme.colors.primary, background: `${theme.colors.primary}10` }
                        : { borderColor: theme.colors.border, color: theme.colors.textMuted }
                    "
                    @click="selectedSize = s"
                  >
                    {{ s }}
                  </button>
                </div>
              </div>

              <div v-if="selectedProduct.colors" class="mb-4">
                <p class="text-xs font-semibold mb-2" :style="{ color: theme.colors.text }">{{ copy.color }}</p>
                <div class="flex gap-2">
                  <button
                    v-for="c in selectedProduct.colors"
                    :key="c.name"
                    class="w-8 h-8 rounded-full border-2 transition"
                    :style="{
                      background: c.hex,
                      borderColor: selectedColor === c.name ? theme.colors.primary : theme.colors.border,
                    }"
                    :title="c.name"
                    @click="selectedColor = c.name"
                  />
                </div>
              </div>

              <div v-if="showStock" class="mb-6">
                <p
                  class="text-xs inline-flex items-center gap-1"
                  :style="{
                    color:
                      selectedProduct.stock > 5 ? '#10b981' : selectedProduct.stock > 0 ? '#f59e0b' : '#ef4444',
                  }"
                >
                  <LucideIcon name="package" class-name="w-3 h-3" />
                  {{
                    selectedProduct.stock > 5
                      ? copy.inStock
                      : selectedProduct.stock > 0
                        ? copy.stockLow(selectedProduct.stock)
                        : copy.soldOut
                  }}
                </p>
              </div>

              <a
                :href="waOrder"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center py-3.5 rounded-2xl font-bold text-sm transition hover:opacity-90"
                :style="{
                  background: tier === 'premium' ? theme.colors.cta : '#25d366',
                  color: tier === 'premium' ? theme.colors.ctaText || '#0b0b0b' : '#ffffff',
                }"
              >
                <span class="inline-flex items-center gap-2 justify-center">
                  <LucideIcon name="message-circle" class-name="w-4 h-4" />
                  {{ copy.orderWhatsApp }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <section class="py-8 px-4 text-center" :style="{ background: theme.colors.cardBg }">
      <p class="text-xs" :style="{ color: theme.colors.textMuted }">
        {{ copy.footerCredit }}
        <a href="/" class="font-semibold" :style="{ color: theme.colors.primary }">Devifly</a>
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import LucideIcon from "../LucideIcon.vue";
import {
  catalogThemes,
  catalogProducts,
  catalogCategories,
  waLink,
} from "../../data/catalogDemo.js";

const { locale } = useI18n();

const ui = {
  es: {
    back: "Volver",
    hire: "Contratar",
    demo: "Demo — Plan",
    sellerPicker: "Vendedora / catálogo",
    allSellers: "Todas",
    searchPlaceholder: "Buscar producto...",
    onlinePay: "Pago en línea",
    stockLeft: (n) => `Quedan ${n}`,
    soldOut: "Agotado",
    noProducts: "No se encontraron productos",
    size: "Talla",
    color: "Color",
    inStock: "En stock",
    stockLow: (n) => `¡Solo quedan ${n}!`,
    orderWhatsApp: "Pedir por WhatsApp",
    footerCredit: "Catálogo creado con",
    categoryLabels: {
      Todo: "Todo",
      Moda: "Moda",
      Skincare: "Skincare",
      Maquillaje: "Maquillaje",
      Anillos: "Anillos",
      Collares: "Collares",
      Aretes: "Aretes",
      Pulseras: "Pulseras",
      Dijes: "Dijes",
    },
  },
  en: {
    back: "Back",
    hire: "Get started",
    demo: "Demo — Plan",
    sellerPicker: "Seller / catalog",
    allSellers: "All",
    searchPlaceholder: "Search products...",
    onlinePay: "Pay online",
    stockLeft: (n) => `${n} left`,
    soldOut: "Sold out",
    noProducts: "No products found",
    size: "Size",
    color: "Color",
    inStock: "In stock",
    stockLow: (n) => `Only ${n} left!`,
    orderWhatsApp: "Order on WhatsApp",
    footerCredit: "Catalog built with",
    categoryLabels: {
      Todo: "All",
      Moda: "Fashion",
      Skincare: "Skincare",
      Maquillaje: "Makeup",
      Anillos: "Rings",
      Collares: "Necklaces",
      Aretes: "Earrings",
      Pulseras: "Bracelets",
      Dijes: "Charms",
    },
  },
};

const copy = computed(() => ui[locale.value] ?? ui.es);

const props = defineProps({
  tier: {
    type: String,
    required: true,
    validator: (v) => ["basico", "pro", "premium"].includes(v),
  },
});

const theme = catalogThemes[props.tier];
const products = catalogProducts[props.tier];
const categories = catalogCategories[props.tier];
const showStock = props.tier !== "basico";
const showSizes = props.tier !== "basico";

const displayCategories = computed(() =>
  categories.map((cat) => ({
    ...cat,
    label: copy.value.categoryLabels[cat.label] ?? cat.label,
  })),
);

const search = ref("");
const activeCategory = ref("all");
const activeSeller = ref("all");
const selectedProduct = ref(null);
const selectedSize = ref(null);
const selectedColor = ref(null);
const activePhoto = ref(0);

const waHire = waLink(theme.waHire);
const waOrder = waLink(theme.waOrder);

const filteredProducts = computed(() => {
  return products.filter((p) => {
    const matchCategory =
      activeCategory.value === "all" || p.category === activeCategory.value;
    const matchSearch =
      !search.value || p.name.toLowerCase().includes(search.value.toLowerCase());
    const matchSeller =
      activeSeller.value === "all" ||
      !p.seller ||
      p.seller === activeSeller.value;
    return matchCategory && matchSearch && matchSeller;
  });
});

const galleryPhotos = computed(() => {
  if (!selectedProduct.value) return [];
  const imgs = selectedProduct.value.imgs || [selectedProduct.value.img];
  return imgs.slice(0, theme.maxGalleryPhotos);
});

function openProduct(product) {
  selectedProduct.value = product;
  selectedSize.value = product.sizes ? product.sizes[0] : null;
  selectedColor.value = product.colors ? product.colors[0].name : null;
  activePhoto.value = 0;
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: translateY(100%);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
