<template>
  <div
    class="catalogo-demo"
    style="font-family: &quot;Poppins&quot;, sans-serif"
  >
    <!-- Top bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl py-3 px-4 sm:px-6 flex items-center justify-between"
      style="
        background: rgba(255, 255, 255, 0.95);
        border-bottom: 1px solid rgba(236, 72, 153, 0.15);
      "
    >
      <router-link
        to="/catalogos-nenis"
        class="flex items-center gap-2 text-sm transition-colors"
        style="color: #ec4899"
      >
        <LucideIcon name="chevron-left" class-name="w-4 h-4" />
        <span class="hidden sm:inline">Volver</span>
      </router-link>
      <span
        class="text-xs font-semibold px-3 py-1 rounded-full"
        style="
          background: rgba(236, 72, 153, 0.1);
          color: #ec4899;
          border: 1px solid rgba(236, 72, 153, 0.3);
        "
        >Demo — Catálogo Nenis</span
      >
      <a
        href="https://wa.me/528123192660?text=Hola%20quiero%20mi%20cat%C3%A1logo%20digital%20para%20nenis"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-semibold transition-colors"
        style="color: #ec4899"
      >
        <span class="inline-flex items-center gap-1"
          >Contratar
          <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />
        </span>
      </a>
    </div>

    <!-- Store Header -->
    <section
      class="pt-20 pb-6 px-4"
      style="
        background: linear-gradient(
          135deg,
          #fdf2f8 0%,
          #fce7f3 50%,
          #f5f3ff 100%
        );
      "
    >
      <div class="max-w-lg lg:max-w-4xl mx-auto text-center">
        <div
          class="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
          style="background: linear-gradient(135deg, #ec4899, #a855f7)"
        >
          <LucideIcon name="sparkles" class-name="w-10 h-10 text-white" />
        </div>
        <h1 class="text-2xl font-bold mb-1" style="color: #1f2937">
          Boutique Lupita ✨
        </h1>
        <p class="text-sm mb-3" style="color: #6b7280">
          Ropa, accesorios y cosméticos 💄👗
        </p>
        <div
          class="flex items-center justify-center gap-4 text-xs"
          style="color: #9ca3af"
        >
          <span class="inline-flex items-center gap-1">
            <LucideIcon name="map-pin" class-name="w-3 h-3" /> Monterrey, NL
          </span>
          <span class="inline-flex items-center gap-1">
            <LucideIcon name="truck" class-name="w-3 h-3" /> Envíos a todo
            México
          </span>
        </div>
      </div>
    </section>

    <!-- Search & Categories -->
    <section
      class="sticky top-[52px] z-40 bg-white border-b border-gray-100 py-3 px-4"
    >
      <div class="max-w-lg lg:max-w-4xl mx-auto">
        <!-- Search -->
        <div class="relative mb-3">
          <LucideIcon
            name="search"
            class-name="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            v-model="search"
            type="text"
            placeholder="Buscar producto..."
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition"
            style="background: #fafafa"
          />
        </div>
        <!-- Category pills -->
        <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            v-for="cat in categories"
            :key="cat.key"
            @click="activeCategory = cat.key"
            class="px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
            :style="
              activeCategory === cat.key
                ? 'background: #ec4899; color: white;'
                : 'background: #f3f4f6; color: #6b7280;'
            "
          >
            {{ cat.icon }} {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-6 px-4" style="background: #fafafa; min-height: 60vh">
      <div class="max-w-lg lg:max-w-4xl mx-auto">
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            @click="openProduct(product)"
          >
            <!-- Product image -->
            <div class="aspect-square relative overflow-hidden">
              <img
                :src="product.img"
                :alt="product.name"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <!-- Badge -->
              <div
                v-if="product.badge"
                class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                :style="{ background: product.badgeColor }"
              >
                {{ product.badge }}
              </div>
              <!-- Stock indicator -->
              <div
                v-if="product.stock <= 3 && product.stock > 0"
                class="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500 text-white"
              >
                Quedan {{ product.stock }}
              </div>
              <div
                v-else-if="product.stock === 0"
                class="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">Agotado</span>
              </div>
            </div>
            <!-- Info -->
            <div class="p-3">
              <p class="text-[11px] font-medium mb-0.5" style="color: #ec4899">
                {{ product.category }}
              </p>
              <h3
                class="text-sm font-semibold mb-1 line-clamp-2"
                style="color: #1f2937"
              >
                {{ product.name }}
              </h3>
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm" style="color: #1f2937"
                  >${{ product.price }}</span
                >
                <span
                  v-if="product.oldPrice"
                  class="text-xs line-through"
                  style="color: #9ca3af"
                  >${{ product.oldPrice }}</span
                >
              </div>
              <div
                v-if="product.sizes && product.sizes.length"
                class="flex gap-1 mt-2 flex-wrap"
              >
                <span
                  v-for="s in product.sizes"
                  :key="s"
                  class="text-[10px] px-1.5 py-0.5 rounded border border-gray-200"
                  style="color: #6b7280"
                  >{{ s }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <LucideIcon
            name="search-x"
            class-name="w-12 h-12 mx-auto text-gray-300 mb-3"
          />
          <p class="text-sm" style="color: #9ca3af">
            No se encontraron productos
          </p>
        </div>
      </div>
    </section>

    <!-- WhatsApp FAB -->
    <a
      href="https://wa.me/528123456789?text=Hola%20vi%20tu%20cat%C3%A1logo%20y%20me%20interesa"
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
          <div
            class="absolute inset-0 bg-black/40 backdrop-blur-sm"
            @click="selectedProduct = null"
          ></div>
          <div
            class="relative w-full max-w-md lg:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto"
            style="z-index: 1"
          >
            <!-- Product header in modal -->
            <div
              class="aspect-video relative overflow-hidden rounded-t-3xl sm:rounded-t-3xl"
            >
              <img
                :src="selectedProduct.img"
                :alt="selectedProduct.name"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <button
                @click="selectedProduct = null"
                class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"
              >
                <LucideIcon name="x" class-name="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div class="p-6">
              <p class="text-xs font-semibold mb-1" style="color: #ec4899">
                {{ selectedProduct.category }}
              </p>
              <h2 class="text-xl font-bold mb-2" style="color: #1f2937">
                {{ selectedProduct.name }}
              </h2>
              <p class="text-sm mb-4" style="color: #6b7280">
                {{ selectedProduct.description }}
              </p>

              <!-- Price -->
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl font-bold" style="color: #1f2937"
                  >${{ selectedProduct.price }}</span
                >
                <span
                  v-if="selectedProduct.oldPrice"
                  class="text-lg line-through"
                  style="color: #9ca3af"
                  >${{ selectedProduct.oldPrice }}</span
                >
                <span
                  v-if="selectedProduct.oldPrice"
                  class="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-500"
                >
                  -{{
                    Math.round(
                      (1 - selectedProduct.price / selectedProduct.oldPrice) *
                        100,
                    )
                  }}%
                </span>
              </div>

              <!-- Sizes -->
              <div v-if="selectedProduct.sizes" class="mb-4">
                <p class="text-xs font-semibold mb-2" style="color: #374151">
                  Talla
                </p>
                <div class="flex gap-2 flex-wrap">
                  <button
                    v-for="s in selectedProduct.sizes"
                    :key="s"
                    class="px-4 py-2 rounded-xl text-sm font-medium border transition"
                    :style="
                      selectedSize === s
                        ? 'border-color: #ec4899; color: #ec4899; background: rgba(236,72,153,0.05)'
                        : 'border-color: #e5e7eb; color: #6b7280'
                    "
                    @click="selectedSize = s"
                  >
                    {{ s }}
                  </button>
                </div>
              </div>

              <!-- Colors -->
              <div v-if="selectedProduct.colors" class="mb-4">
                <p class="text-xs font-semibold mb-2" style="color: #374151">
                  Color
                </p>
                <div class="flex gap-2">
                  <button
                    v-for="c in selectedProduct.colors"
                    :key="c.name"
                    class="w-8 h-8 rounded-full border-2 transition"
                    :style="{
                      background: c.hex,
                      borderColor:
                        selectedColor === c.name ? '#ec4899' : '#e5e7eb',
                    }"
                    :title="c.name"
                    @click="selectedColor = c.name"
                  ></button>
                </div>
              </div>

              <!-- Stock -->
              <div class="mb-6">
                <p
                  class="text-xs inline-flex items-center gap-1"
                  :style="{
                    color:
                      selectedProduct.stock > 5
                        ? '#10b981'
                        : selectedProduct.stock > 0
                          ? '#f59e0b'
                          : '#ef4444',
                  }"
                >
                  <LucideIcon name="package" class-name="w-3 h-3" />
                  {{
                    selectedProduct.stock > 5
                      ? "En stock"
                      : selectedProduct.stock > 0
                        ? `¡Solo quedan ${selectedProduct.stock}!`
                        : "Agotado"
                  }}
                </p>
              </div>

              <!-- CTA -->
              <a
                href="https://wa.me/528123456789"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center py-3.5 rounded-2xl text-white font-bold text-sm transition hover:opacity-90"
                style="background: #25d366"
              >
                <span class="inline-flex items-center gap-2">
                  <LucideIcon name="message-circle" class-name="w-4 h-4" />
                  Pedir por WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Footer -->
    <section class="py-8 px-4 text-center" style="background: #fff">
      <p class="text-xs" style="color: #d1d5db">
        Catálogo creado con
        <a href="/" class="font-semibold" style="color: #ec4899">Devifly</a>
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import LucideIcon from "../../components/LucideIcon.vue";

const search = ref("");
const activeCategory = ref("all");
const selectedProduct = ref(null);
const selectedSize = ref(null);
const selectedColor = ref(null);

const categories = [
  { key: "all", label: "Todo", icon: "✨" },
  { key: "ropa", label: "Ropa", icon: "👗" },
  { key: "cosmeticos", label: "Cosméticos", icon: "💄" },
  { key: "accesorios", label: "Accesorios", icon: "💎" },
  { key: "hogar", label: "Hogar", icon: "🏠" },
];

const products = [
  {
    id: 1,
    name: "Blusa Floral Primavera",
    category: "ropa",
    price: 349,
    oldPrice: 499,
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Rosa", hex: "#f9a8d4" },
      { name: "Blanco", hex: "#f3f4f6" },
      { name: "Azul", hex: "#93c5fd" },
    ],
    description:
      "Blusa de manga corta con estampado floral. Tela ligera y fresca, perfecta para la temporada.",
    img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop",
    badge: "-30%",
    badgeColor: "#ef4444",
  },
  {
    id: 2,
    name: "Vestido Casual Boho",
    category: "ropa",
    price: 599,
    stock: 5,
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Terracota", hex: "#c2410c" },
      { name: "Verde", hex: "#86efac" },
    ],
    description:
      "Vestido largo estilo boho con bordados. Ideal para salidas casuales y eventos al aire libre.",
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Set de Labiales Mate 6 pzas",
    category: "cosmeticos",
    price: 199,
    oldPrice: 299,
    stock: 25,
    colors: [
      { name: "Nude", hex: "#d4a276" },
      { name: "Rojo", hex: "#ef4444" },
      { name: "Berry", hex: "#a855f7" },
    ],
    description:
      "Set de 6 labiales mate de larga duración. Colores vibrantes que no se transfieren.",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    badge: "Más vendido",
    badgeColor: "#ec4899",
  },
  {
    id: 4,
    name: "Crema Hidratante Facial",
    category: "cosmeticos",
    price: 279,
    stock: 18,
    description:
      "Crema hidratante con ácido hialurónico y vitamina E. Para todo tipo de piel.",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Bolsa Crossbody Elegante",
    category: "accesorios",
    price: 449,
    stock: 8,
    colors: [
      { name: "Negro", hex: "#1f2937" },
      { name: "Café", hex: "#92400e" },
      { name: "Rosa", hex: "#f9a8d4" },
    ],
    description:
      "Bolsa crossbody de piel sintética con acabados metálicos. Compartimentos organizadores.",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Aretes Corazón Cristal",
    category: "accesorios",
    price: 149,
    stock: 3,
    colors: [
      { name: "Dorado", hex: "#fbbf24" },
      { name: "Plateado", hex: "#d1d5db" },
    ],
    description:
      "Aretes colgantes en forma de corazón con cristal. Hipoalergénicos.",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    badge: "Nuevo",
    badgeColor: "#8b5cf6",
  },
  {
    id: 7,
    name: "Vela Aromática Lavanda",
    category: "hogar",
    price: 189,
    stock: 15,
    description:
      "Vela de cera de soya con aroma a lavanda. 40 horas de duración. Presentación en frasco de vidrio.",
    img: "https://images.unsplash.com/photo-1602607688066-3bcc4894e6e6?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Jeans Skinny High-Rise",
    category: "ropa",
    price: 499,
    stock: 0,
    sizes: ["26", "28", "30", "32"],
    colors: [
      { name: "Azul oscuro", hex: "#1e3a5f" },
      { name: "Negro", hex: "#1f2937" },
    ],
    description:
      "Jeans skinny de tiro alto con stretch. Ajuste perfecto y muy cómodos.",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Cojín Decorativo Boho",
    category: "hogar",
    price: 259,
    oldPrice: 329,
    stock: 7,
    description:
      "Cojín decorativo con flecos estilo boho. 45x45cm. Funda lavable con zipper.",
    img: "https://images.unsplash.com/photo-1629949009765-40fc74c9ec21?w=400&h=400&fit=crop",
    badge: "-21%",
    badgeColor: "#ef4444",
  },
  {
    id: 10,
    name: "Kit de Brochas Maquillaje 12 pzas",
    category: "cosmeticos",
    price: 349,
    stock: 20,
    description:
      "Set profesional de 12 brochas con estuche. Pelo sintético suave y mango ergonómico.",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
  },
];

const filteredProducts = computed(() => {
  return products.filter((p) => {
    const matchCategory =
      activeCategory.value === "all" || p.category === activeCategory.value;
    const matchSearch =
      !search.value ||
      p.name.toLowerCase().includes(search.value.toLowerCase());
    return matchCategory && matchSearch;
  });
});

function openProduct(product) {
  selectedProduct.value = product;
  selectedSize.value = product.sizes ? product.sizes[0] : null;
  selectedColor.value = product.colors ? product.colors[0].name : null;
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
