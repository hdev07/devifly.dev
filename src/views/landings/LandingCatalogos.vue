<script setup>
/**
 * Landing: Catálogos Digitales
 * Palette: emerald/green (matches navbar #10b981)
 * Style: Stripe — refined gradients, glass, depth, asymmetric layout
 * Section order: Hero · Demo · Benefits · Templates · How · What's included · Pricing · FAQ · Testimonials · CTA
 */
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import { useLocaleContent } from "../../composables/useLocaleContent.js";
import { landingCatalogosContent } from "../../data/landings/landingCatalogos.js";

const WA = "+525635926679";
const { content, isEn } = useLocaleContent(landingCatalogosContent);

const waUrl = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const waDemo = computed(() => waUrl(content.value.wa.demo));
const waContratar = computed(() => waUrl(content.value.wa.hire));
const pkgWaUrl = (waKey) => waUrl(content.value.wa[waKey]);

const openFaq = ref(null);
const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-hidden">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="relative px-6 pt-20 pb-24">
      <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-30"
        style="
          background: radial-gradient(ellipse, #10b981 0%, transparent 65%);
        "
      ></div>
      <div
        class="pointer-events-none absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style="background: radial-gradient(circle, #059669, transparent 70%)"
      ></div>

      <div class="relative max-w-5xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-medium"
          style="
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.25);
            color: #6ee7b7;
          "
        >
          <span
            class="w-1.5 h-1.5 rounded-full"
            style="background: #10b981"
          ></span>
          <LucideIcon name="shopping-bag" class-name="w-3.5 h-3.5" />
          {{ content.ui.heroBadge }}
        </div>

        <h1
          class="font-display text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.04] tracking-tight mb-7"
        >
          <span class="dark:text-white text-light-text">{{ content.ui.heroTitleBefore }} </span>
          <span
            class="bg-clip-text text-transparent"
            style="
              background-image: linear-gradient(
                135deg,
                #10b981 0%,
                #059669 50%,
                #6ee7b7 100%
              );
            "
            >{{ content.ui.heroTitleHighlight }}</span
          >
          <span v-if="content.ui.heroTitleAfter" class="dark:text-white text-light-text"> {{ content.ui.heroTitleAfter }}</span>
        </h1>

        <p
          class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {{ content.ui.heroSubtitle }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          <BaseButton :href="waDemo" accent="emerald">
            <LucideIcon name="sparkles" class-name="w-4 h-4" />
            {{ content.ui.heroCtaDemo }}
          </BaseButton>
          <BaseButton :href="waContratar" variant="secondary" accent="emerald" arrow>
            {{ content.ui.heroCtaQuote }}
          </BaseButton>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/70 text-light-muted/70"
        >
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            {{ content.ui.heroTrustNoFees }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            {{ content.ui.heroTrustDelivery }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            {{ content.ui.heroTrustWhatsapp }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="check-circle-2"
              class-name="w-3.5 h-3.5"
              style="color: #10b981"
            />
            {{ content.ui.heroTrustGuarantee }}
          </span>
        </div>
      </div>
    </section>

    <!-- ─── 2 · DEMO INTERACTIVA ─────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            {{ content.ui.sectionDemo }}
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            {{ content.ui.demoTitle }}
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            {{ content.ui.demoSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <!-- Demo Básico -->
          <div class="flex flex-col items-center gap-3 group">
            <RouterLink
              to="/catalogos/demo"
              class="block transition-transform group-hover:-translate-y-1"
            >
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
                style="
                  border-color: rgba(16, 185, 129, 0.25);
                  background: linear-gradient(180deg, #f0fdf4, #ecfdf5, #ffffff);
                "
              >
                <div
                  class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                  style="color: #6b7280"
                >
                  <span>9:41</span>
                  <div
                    class="w-16 h-4 rounded-full"
                    style="background: rgba(16, 185, 129, 0.1)"
                  ></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden p-4 text-center bg-white">
                  <div
                    class="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center"
                    style="background: linear-gradient(135deg, #10b981, #34d399)"
                  >
                    <span class="text-white text-sm font-bold">B</span>
                  </div>
                  <p class="text-[9px] uppercase tracking-widest mb-1" style="color: #9ca3af">
                    {{ content.demoCards[0].mockCategory }}
                  </p>
                  <p class="text-sm font-bold mb-2" style="color: #065f46">
                    {{ content.demoCards[0].mockName }}
                  </p>
                  <div class="grid grid-cols-2 gap-1.5 mb-2">
                    <div class="h-10 rounded-lg" style="background: #ecfdf5"></div>
                    <div class="h-10 rounded-lg" style="background: #d1fae5"></div>
                  </div>
                  <div
                    class="py-1.5 rounded-full text-[8px] font-semibold text-white"
                    style="background: linear-gradient(135deg, #059669, #10b981)"
                  >
                    {{ content.ui.orderWhatsapp }}
                  </div>
                </div>
              </div>
            </RouterLink>
            <p class="text-xs font-bold text-center" style="color: #10b981">
              {{ content.demoCards[0].planLabel }}
            </p>
          </div>

          <!-- Demo Pro (highlighted) -->
          <div class="flex flex-col items-center gap-3 group sm:-translate-y-4 relative">
            <div
              class="absolute hidden sm:block translate-x-16 -translate-y-2 px-2.5 py-1 rounded-full text-[10px] font-bold text-white z-10"
              style="background: linear-gradient(135deg, #059669, #10b981)"
            >
              {{ content.ui.mostPopular }}
            </div>
            <RouterLink
              to="/catalogos/demo"
              class="block transition-transform group-hover:-translate-y-1"
            >
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-2xl overflow-hidden"
                style="
                  border-color: rgba(16, 185, 129, 0.4);
                  background: linear-gradient(180deg, #ecfdf5, #f0fdf4);
                  box-shadow: 0 25px 60px rgba(5, 150, 105, 0.25);
                "
              >
                <div
                  class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                  style="color: #059669"
                >
                  <span>9:41</span>
                  <div
                    class="w-16 h-4 rounded-full"
                    style="background: rgba(16, 185, 129, 0.1)"
                  ></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden bg-white">
                  <div class="p-3 text-center" style="background: linear-gradient(180deg, #ecfdf5, white)">
                    <p class="text-xs font-bold" style="color: #065f46">{{ content.demoCards[1].mockName }}</p>
                    <p class="text-[8px]" style="color: #9ca3af">{{ content.demoCards[1].mockSubtitle }}</p>
                  </div>
                  <div class="px-3 pb-1">
                    <div
                      class="flex items-center gap-1.5 px-2 py-1.5 rounded-lg mb-2"
                      style="background: #f9fafb; border: 1px solid #f3f4f6"
                    >
                      <LucideIcon name="search" class-name="w-2.5 h-2.5" style="color: #d1d5db" />
                      <span class="text-[8px]" style="color: #d1d5db">{{ content.demoCards[1].mockSearch }}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-1.5">
                      <div
                        v-for="product in content.demoCards[1].mockProducts"
                        :key="product.name"
                        class="rounded-lg p-1.5"
                        style="background: #f0fdf4"
                      >
                        <div class="h-8 rounded mb-1" style="background: #d1fae5"></div>
                        <p class="text-[8px] font-semibold" style="color: #065f46">{{ product.name }}</p>
                        <p class="text-[8px] font-bold" style="color: #10b981">{{ product.price }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="px-3 pb-3">
                    <div
                      class="py-1.5 rounded-full text-[8px] font-semibold text-white text-center"
                      style="background: linear-gradient(135deg, #059669, #10b981)"
                    >
                      {{ content.ui.orderWhatsapp }}
                    </div>
                  </div>
                </div>
              </div>
            </RouterLink>
            <p class="text-xs font-bold text-center" style="color: #059669">
              {{ content.demoCards[1].planLabel }}
            </p>
          </div>

          <!-- Demo Premium VIP -->
          <div class="flex flex-col items-center gap-3 group">
            <RouterLink
              to="/catalogos/demo"
              class="block transition-transform group-hover:-translate-y-1"
            >
              <div
                class="w-60 rounded-[2rem] border p-3 shadow-xl overflow-hidden"
                style="
                  border-color: rgba(198, 167, 94, 0.25);
                  background: #0b0b0b;
                "
              >
                <div
                  class="flex items-center justify-between px-4 py-1.5 text-[9px]"
                  style="color: rgba(198, 167, 94, 0.4)"
                >
                  <span>9:41</span>
                  <div
                    class="w-16 h-4 rounded-full"
                    style="background: rgba(198, 167, 94, 0.06)"
                  ></div>
                  <span>100%</span>
                </div>
                <div class="rounded-2xl overflow-hidden p-4 text-center">
                  <LucideIcon
                    name="gem"
                    class-name="w-5 h-5 mx-auto mb-2"
                    style="color: #c6a75e"
                  />
                  <p
                    class="text-[9px] uppercase tracking-widest mb-1"
                    style="color: rgba(198, 167, 94, 0.5)"
                  >
                    {{ content.demoCards[2].mockCategory }}
                  </p>
                  <p
                    class="text-sm font-bold mb-2"
                    style="
                      background: linear-gradient(135deg, #c6a75e, #e8d5a3);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                    "
                  >
                    {{ content.demoCards[2].mockName }}
                  </p>
                  <div class="grid grid-cols-2 gap-1.5 mb-2">
                    <div class="h-9 rounded-lg" style="background: rgba(198, 167, 94, 0.08)"></div>
                    <div class="h-9 rounded-lg" style="background: rgba(198, 167, 94, 0.08)"></div>
                  </div>
                  <div
                    class="py-1.5 rounded-full text-[8px] font-bold"
                    style="
                      background: linear-gradient(135deg, #c6a75e, #e8d5a3);
                      color: #0b0b0b;
                    "
                  >
                    {{ content.ui.orderWhatsapp }}
                  </div>
                </div>
              </div>
            </RouterLink>
            <p class="text-xs font-bold text-center" style="color: #c6a75e">
              {{ content.demoCards[2].planLabel }}
            </p>
          </div>
        </div>

        <!-- CTA único: una demo, comparador de planes abajo -->
        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BaseButton to="/catalogos/demo" accent="emerald" size="lg">
            <LucideIcon name="play-circle" class-name="w-4 h-4" />
            {{ content.ui.demoCtaOpen }}
          </BaseButton>
          <BaseButton href="#precios" variant="secondary" accent="emerald" arrow>
            {{ content.ui.demoCtaPlans }}
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- ─── 3 · BENEFICIOS ───────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="
        background: linear-gradient(
          180deg,
          rgba(16, 185, 129, 0.04),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            {{ content.ui.sectionBenefits }}
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text max-w-2xl mb-4"
          >
            {{ content.ui.benefitsTitle }}
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl">
            {{ content.ui.benefitsSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="b in content.benefits"
            :key="b.title"
            class="p-6 rounded-2xl border transition hover:-translate-y-1"
            style="
              background: rgba(16, 185, 129, 0.04);
              border-color: rgba(16, 185, 129, 0.18);
            "
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(5, 150, 105, 0.18),
                  rgba(16, 185, 129, 0.1)
                );
              "
            >
              <LucideIcon
                :name="b.icon"
                class-name="w-5 h-5"
                style="color: #6ee7b7"
              />
            </div>
            <h3
              class="font-semibold dark:text-white text-light-text text-sm mb-2"
            >
              {{ b.title }}
            </h3>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
            >
              {{ b.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 · ESTILOS ──────────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            {{ content.ui.sectionTemplates }}
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            {{ content.ui.templatesTitle }}
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            {{ content.ui.templatesSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="theme in content.themes"
            :key="theme.id"
            class="group relative p-6 rounded-2xl border overflow-hidden transition hover:-translate-y-1"
            style="
              background: rgba(16, 185, 129, 0.03);
              border-color: rgba(16, 185, 129, 0.15);
            "
          >
            <div class="flex gap-1.5 mb-5">
              <div
                v-for="color in theme.palette"
                :key="color"
                class="w-8 h-8 rounded-lg border"
                :style="`background: ${color}; border-color: rgba(255, 255, 255, 0.08)`"
              ></div>
            </div>

            <div class="flex items-start gap-3 mb-2">
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style="background: rgba(16, 185, 129, 0.12)"
              >
                <LucideIcon
                  :name="theme.icon"
                  class-name="w-4 h-4"
                  style="color: #6ee7b7"
                />
              </div>
              <h3
                class="font-semibold dark:text-white text-light-text text-base pt-1.5"
              >
                {{ theme.name }}
              </h3>
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
            >
              {{ theme.desc }}
            </p>

            <div
              class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(16, 185, 129, 0.15),
                  transparent 60%
                );
              "
            ></div>
          </div>
        </div>

        <p
          class="text-center text-xs dark:text-text-secondary/60 text-light-muted/60 mt-10"
        >
          {{ content.ui.templatesFooter }}
        </p>
      </div>
    </section>

    <!-- ─── 5 · CÓMO FUNCIONA ────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="
        background: linear-gradient(
          180deg,
          rgba(5, 150, 105, 0.04),
          transparent
        );
      "
    >
      <div class="max-w-5xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            {{ content.ui.sectionProcess }}
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            {{ content.ui.processTitle }}
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            {{ content.ui.processSubtitle }}
          </p>
        </div>

        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px border-t border-dashed"
            style="border-color: rgba(16, 185, 129, 0.25)"
          ></div>

          <div
            v-for="step in content.steps"
            :key="step.num"
            class="relative text-center"
          >
            <div
              class="inline-flex items-center justify-center w-20 h-20 rounded-2xl border mb-5 mx-auto relative z-10"
              style="
                background: rgba(6, 20, 14, 0.6);
                border-color: rgba(16, 185, 129, 0.3);
                box-shadow: 0 10px 30px -10px rgba(5, 150, 105, 0.4);
              "
            >
              <LucideIcon
                :name="step.icon"
                class-name="w-7 h-7"
                style="color: #6ee7b7"
              />
            </div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: rgba(16, 185, 129, 0.7)"
            >
              {{ content.ui.stepLabel }} {{ step.num }}
            </p>
            <h3
              class="font-display font-bold dark:text-white text-light-text text-lg mb-2"
            >
              {{ step.title }}
            </h3>
            <p
              class="text-sm dark:text-text-secondary text-light-muted leading-relaxed max-w-xs mx-auto"
            >
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6 · QUÉ INCLUYE ──────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
              style="color: rgba(16, 185, 129, 0.7)"
            >
              {{ content.ui.sectionIncludes }}
            </p>
            <h2
              class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
            >
              {{ content.ui.includesTitle }}
            </h2>
            <p
              class="dark:text-text-secondary text-light-muted max-w-xl mb-8 leading-relaxed"
            >
              {{ content.ui.includesSubtitle }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="bonus in content.bonusChips"
                :key="bonus"
                class="px-3 py-1.5 rounded-full text-xs font-medium"
                style="
                  background: rgba(16, 185, 129, 0.08);
                  border: 1px solid rgba(16, 185, 129, 0.2);
                  color: #6ee7b7;
                "
              >
                <LucideIcon name="gift" class-name="w-3 h-3 inline mr-1" />{{
                  bonus
                }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="item in content.includes"
              :key="item.text"
              class="flex items-start gap-3 p-4 rounded-xl border"
              style="
                background: rgba(16, 185, 129, 0.03);
                border-color: rgba(16, 185, 129, 0.15);
              "
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style="background: rgba(16, 185, 129, 0.12)"
              >
                <LucideIcon
                  :name="item.icon"
                  class-name="w-4 h-4"
                  style="color: #6ee7b7"
                />
              </div>
              <p
                class="text-xs dark:text-text-primary text-light-text font-medium leading-snug pt-1"
              >
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 7 · PRECIOS ──────────────────────────────────── -->
    <section
      class="px-6 py-24"
      id="precios"
      style="
        background: linear-gradient(
          180deg,
          rgba(16, 185, 129, 0.06),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            {{ content.ui.sectionPricing }}
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            {{ content.ui.pricingTitle }}
          </h2>
          <p class="dark:text-text-secondary text-light-muted max-w-xl mx-auto">
            {{ content.ui.pricingSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            v-for="pkg in content.packages"
            :key="pkg.name"
            class="relative flex flex-col rounded-2xl overflow-hidden transition"
            :class="pkg.highlighted ? 'border-2' : 'border'"
            :style="
              pkg.highlighted
                ? 'border-color: #10b981; background: linear-gradient(145deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04)); box-shadow: 0 30px 80px -20px rgba(5, 150, 105, 0.4)'
                : pkg.vip
                  ? 'border-color: rgba(198, 167, 94, 0.3); background: rgba(198, 167, 94, 0.03)'
                  : 'border-color: rgba(16, 185, 129, 0.15); background: rgba(16, 185, 129, 0.02)'
            "
          >
            <div
              v-if="pkg.badge"
              class="absolute top-0 right-0 py-1.5 px-4 text-white text-xs font-bold rounded-bl-xl"
              :style="
                pkg.vip
                  ? 'background: linear-gradient(135deg, #c6a75e, #e8d5a3); color: #0b0b0b'
                  : 'background: linear-gradient(135deg, #059669, #10b981)'
              "
            >
              <span class="inline-flex items-center gap-1">
                {{ pkg.badge }}
                <LucideIcon
                  :name="pkg.vip ? 'gem' : 'flame'"
                  class-name="w-3.5 h-3.5"
                />
              </span>
            </div>

            <div class="p-8 flex-1" :class="pkg.badge ? 'pt-12' : ''">
              <h3
                class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
              >
                {{ pkg.name }}
              </h3>
              <p class="text-sm dark:text-text-secondary text-light-muted mb-6">
                {{ pkg.tagline }}
              </p>

              <div class="mb-7">
                <span
                  class="font-display text-4xl font-bold dark:text-white text-light-text"
                  >{{ pkg.price }}</span
                >
                <span
                  class="text-sm dark:text-text-secondary text-light-muted ml-1"
                  >{{ isEn ? "USD" : "MXN" }}</span
                >
                <p
                  class="text-xs font-mono mt-1"
                  style="color: rgba(16, 185, 129, 0.55)"
                >
                  {{ pkg.validity }}
                </p>
              </div>

              <ul class="space-y-2.5 mb-5">
                <li
                  v-for="f in pkg.features"
                  :key="f"
                  class="flex items-start gap-2.5 text-sm dark:text-text-primary text-light-text"
                >
                  <LucideIcon
                    :name="pkg.vip ? 'sparkles' : 'check'"
                    class-name="w-4 h-4 mt-0.5 shrink-0"
                    :style="pkg.vip ? 'color: #c6a75e' : 'color: #10b981'"
                  />
                  {{ f }}
                </li>
              </ul>

              <ul
                v-if="pkg.excluded?.length"
                class="space-y-2 border-t pt-4"
                style="border-color: rgba(16, 185, 129, 0.15)"
              >
                <li
                  v-for="ex in pkg.excluded"
                  :key="ex"
                  class="flex items-start gap-2.5 text-xs dark:text-text-secondary/45 text-light-muted/55 line-through"
                >
                  <LucideIcon
                    name="minus"
                    class-name="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-60"
                  />
                  {{ ex }}
                </li>
              </ul>
            </div>

            <div class="px-8 pb-8 flex flex-col gap-2.5">
              <BaseButton
                :href="pkgWaUrl(pkg.waKey)"
                :variant="pkg.highlighted || pkg.vip ? 'primary' : 'secondary'"
                :accent="pkg.vip ? 'gold' : 'emerald'"
                class="w-full justify-center"
                arrow
              >
                {{ content.ui.hirePlan }} {{ pkg.name }}
              </BaseButton>
              <BaseButton
                :to="pkg.demo"
                variant="ghost"
                accent="emerald"
                class="w-full justify-center"
              >
                <LucideIcon name="eye" class-name="w-4 h-4" />
                {{ content.ui.viewDemo }}
              </BaseButton>
            </div>
          </div>
        </div>

        <p
          class="text-center mt-10 text-xs dark:text-text-secondary/60 text-light-muted/60 max-w-2xl mx-auto"
        >
          {{ content.ui.pricingNote }}
        </p>

        <p
          class="text-center mt-4 text-xs dark:text-text-secondary/60 text-light-muted/60"
        >
          <LucideIcon
            name="shield-check"
            class-name="w-3.5 h-3.5 inline mr-1"
            style="color: #10b981"
          />
          {{ content.ui.pricingGuarantee }}
        </p>
      </div>
    </section>

    <!-- ─── 8 · FAQ ──────────────────────────────────────── -->
    <section class="px-6 py-24">
      <div class="max-w-3xl mx-auto">
        <div class="mb-12 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            {{ content.ui.sectionFaq }}
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            {{ content.ui.faqTitle }}
          </h2>
          <p class="dark:text-text-secondary text-light-muted">
            {{ content.ui.faqSubtitle }}
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in content.faqs"
            :key="i"
            class="rounded-2xl border overflow-hidden transition-all"
            :style="
              openFaq === i
                ? 'border-color: rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.04)'
                : 'border-color: rgba(16, 185, 129, 0.12); background: rgba(16, 185, 129, 0.02)'
            "
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span
                class="dark:text-white text-light-text font-semibold text-sm"
                >{{ faq.q }}</span
              >
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                class-name="w-4 h-4 shrink-0 transition"
                :style="
                  openFaq === i
                    ? 'color: #10b981'
                    : 'color: rgba(16, 185, 129, 0.5)'
                "
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p
                class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
              >
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold transition"
            style="color: #10b981"
          >
            {{ content.ui.faqMoreQuestions }}
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 9 · TESTIMONIOS ──────────────────────────────── -->
    <section
      class="px-6 py-24"
      style="
        background: linear-gradient(
          180deg,
          rgba(16, 185, 129, 0.05),
          transparent
        );
      "
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 text-center">
          <p
            class="text-[11px] tracking-[0.2em] uppercase font-mono mb-3"
            style="color: rgba(16, 185, 129, 0.7)"
          >
            {{ content.ui.sectionTestimonials }}
          </p>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
          >
            {{ content.ui.testimonialsTitle }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in content.testimonials"
            :key="t.name"
            class="relative p-7 rounded-2xl border flex flex-col"
            style="
              background: rgba(16, 185, 129, 0.04);
              border-color: rgba(16, 185, 129, 0.15);
            "
          >
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="s in t.stars"
                :key="s"
                name="star"
                class-name="w-4 h-4"
                style="color: #c6a75e; fill: #c6a75e"
              />
            </div>
            <p
              class="dark:text-text-primary text-light-text leading-relaxed text-sm mb-6 flex-1 italic"
            >
              "{{ t.quote }}"
            </p>
            <div
              class="flex items-center gap-3 pt-5 border-t"
              style="border-color: rgba(16, 185, 129, 0.15)"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                style="background: linear-gradient(135deg, #059669, #10b981)"
              >
                {{ t.avatar }}
              </div>
              <div>
                <p
                  class="dark:text-white text-light-text font-semibold text-sm"
                >
                  {{ t.name }}
                </p>
                <p
                  class="text-xs dark:text-text-secondary/60 text-light-muted/60"
                >
                  {{ t.event }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 10 · CTA FINAL ───────────────────────────────── -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none"
        style="
          background: radial-gradient(
            ellipse at center,
            rgba(5, 150, 105, 0.18),
            transparent 65%
          );
        "
      ></div>

      <div class="relative max-w-3xl mx-auto">
        <div
          class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8 border"
          style="
            background: rgba(16, 185, 129, 0.1);
            border-color: rgba(16, 185, 129, 0.25);
          "
        >
          <LucideIcon
            name="shopping-bag"
            class-name="w-8 h-8"
            style="color: #10b981"
          />
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight"
        >
          <span class="dark:text-white text-light-text"
            >{{ content.ui.finalTitleBefore }}
          </span>
          <span
            class="bg-clip-text text-transparent"
            style="
              background-image: linear-gradient(
                135deg,
                #10b981,
                #059669,
                #6ee7b7
              );
            "
            >{{ content.ui.finalTitleHighlight }}</span
          >
        </h2>
        <p
          class="dark:text-text-secondary text-light-muted mb-10 text-lg max-w-xl mx-auto"
        >
          {{ content.ui.finalSubtitle }}
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <BaseButton :href="waDemo" accent="emerald" size="lg">
            <LucideIcon name="sparkles" class-name="w-4 h-4" />
            {{ content.ui.heroCtaDemo }}
          </BaseButton>
          <BaseButton
            :href="waContratar"
            variant="secondary"
            accent="emerald"
            size="lg"
            arrow
          >
            {{ content.ui.heroCtaQuote }}
          </BaseButton>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs dark:text-text-secondary/60 text-light-muted/60"
        >
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="shield-check"
              class-name="w-3.5 h-3.5"
              style="color: rgba(16, 185, 129, 0.7)"
            />
            {{ content.ui.finalTrustGuarantee }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="clock-4"
              class-name="w-3.5 h-3.5"
              style="color: rgba(16, 185, 129, 0.7)"
            />
            {{ content.ui.finalTrustDelivery }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="message-circle"
              class-name="w-3.5 h-3.5"
              style="color: rgba(16, 185, 129, 0.7)"
            />
            {{ content.ui.finalTrustSupport }}
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
