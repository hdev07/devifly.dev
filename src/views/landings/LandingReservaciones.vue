<script setup>
/**
 * Landing: Web para Salones de Eventos
 * Estilo visual: Spotify dark — acento rojo navbar (#ef4444)
 * Secciones: Hero · Stats · Pain · Demo Preview · Features · How it Works · Testimonials · Pricing · FAQ · Demo 21d · CTA Final
 */
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import LucideIcon from "../../components/LucideIcon.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import { useLocaleContent } from "../../composables/useLocaleContent.js";
import { landingReservacionesContent } from "../../data/landings/landingReservaciones.js";

const WA = "+525635926679";
const { content, isEn } = useLocaleContent(landingReservacionesContent);

const waUrl = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const waDemo = computed(() => waUrl(content.value.wa.demo));
const waContratar = computed(() => waUrl(content.value.wa.hire));
const waDemo21 = computed(() => waUrl(content.value.wa.demo21));

const pkgWaUrl = (waKey) => waUrl(content.value.wa[waKey]);

const openFaq = ref(null);
const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};
</script>

<template>
  <main class="landing-shell" style="background: #0a0a0a">
    <!-- ─── HERO ─────────────────────────────────────────────────────── -->
    <section
      class="relative overflow-hidden px-6 pt-28 pb-20 sm:pt-36 sm:pb-28"
      style="background: #0a0a0a"
    >
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20"
          style="
            background: radial-gradient(ellipse, #ef4444 0%, transparent 70%);
          "
        ></div>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: copy -->
          <div>
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-6"
            >
              <span
                class="w-2 h-2 rounded-full bg-red-500 animate-pulse"
              ></span>
              {{ content.ui.heroBadge }}
            </div>

            <h1
              class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              {{ content.ui.heroTitleBefore }}
              <span class="text-red-400"> {{ content.ui.heroTitleHighlight }}</span>
            </h1>

            <p class="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl">
              {{ content.ui.heroSubtitle }}
            </p>

            <div class="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <BaseButton to="/salones-eventos/premium" accent="red" size="lg">
                <LucideIcon name="play-circle" class-name="w-4 h-4" />
                {{ content.ui.heroCtaDemo }}
              </BaseButton>
              <BaseButton
                :href="waContratar"
                variant="secondary"
                accent="red"
                size="lg"
                arrow
              >
                {{ content.ui.heroCtaQuote }}
              </BaseButton>
            </div>

            <div class="flex items-center gap-3 text-xs text-neutral-500">
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-red-400"
                />
                {{ content.ui.heroTrustQuote }}
              </span>
              <span class="w-px h-3 bg-neutral-700"></span>
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-red-400"
                />
                {{ content.ui.heroTrustDelivery }}
              </span>
              <span class="w-px h-3 bg-neutral-700"></span>
              <span class="flex items-center gap-1">
                <LucideIcon
                  name="check-circle"
                  class-name="w-3.5 h-3.5 text-red-400"
                />
                {{ content.ui.heroTrustGuarantee }}
              </span>
            </div>
          </div>

          <!-- Right: phone mockup -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-30"
                style="background: linear-gradient(135deg, #ef4444, #a855f7)"
              ></div>

              <div
                class="relative w-64 sm:w-72 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
                style="
                  background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
                "
              >
                <!-- Status bar -->
                <div class="flex items-center justify-between px-6 pt-4 pb-2">
                  <span class="text-white/60 text-[10px]">9:41</span>
                  <div
                    class="w-16 h-5 rounded-full bg-black mx-auto absolute left-1/2 -translate-x-1/2 top-2"
                  ></div>
                  <div class="flex gap-1">
                    <div class="w-3 h-1.5 rounded-sm bg-white/60"></div>
                    <div class="w-1 h-1.5 rounded-sm bg-white/60"></div>
                  </div>
                </div>

                <!-- App header (navbar rojo) -->
                <div
                  class="px-4 py-3 border-b border-white/5"
                  style="background: #141414"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <div
                        class="text-red-400 text-xs font-bold tracking-widest uppercase"
                      >
                        {{ content.ui.mockVenueLabel }}
                      </div>
                      <div class="text-white text-sm font-semibold">
                        {{ content.ui.mockVenueName }}
                      </div>
                    </div>
                    <div
                      class="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center"
                    >
                      <LucideIcon
                        name="calendar"
                        class-name="w-3.5 h-3.5 text-red-400"
                      />
                    </div>
                  </div>
                </div>

                <!-- Category tabs -->
                <div
                  class="flex gap-2 px-4 py-2 overflow-hidden"
                  style="background: #111"
                >
                  <span
                    v-for="(cat, i) in content.ui.mockCategories"
                    :key="cat"
                    :class="[
                      'px-3 py-1 rounded-full text-[10px] whitespace-nowrap',
                      i === 0
                        ? 'bg-red-500 text-black font-bold'
                        : 'bg-white/10 text-white/60',
                    ]"
                    >{{ cat }}</span
                  >
                </div>

                <!-- Paquetes -->
                <div class="px-4 py-3 space-y-3" style="background: #0f0f0f">
                  <div
                    v-for="item in content.mockItems"
                    :key="item.name"
                    class="flex items-center gap-3 p-2.5 rounded-xl border border-white/5"
                    style="background: #1a1a1a"
                  >
                    <div
                      class="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style="background: #222"
                    >
                      {{ item.img }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-1.5">
                        <p class="text-white text-xs font-semibold truncate">
                          {{ item.name }}
                        </p>
                        <span
                          v-if="item.badge"
                          class="px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[9px] font-bold"
                          >{{ content.ui.mockPopularBadge }}</span
                        >
                      </div>
                      <p class="text-red-400 text-xs font-bold">
                        {{ item.price }}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-center justify-center gap-2 pt-1">
                    <LucideIcon
                      name="calendar-check"
                      class-name="w-3.5 h-3.5 text-neutral-600"
                    />
                    <span class="text-neutral-600 text-[10px]">{{
                      content.ui.mockDomain
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── STATS BAR ─────────────────────────────────────────────────── -->
    <section
      class="px-6 py-10 border-y border-neutral-800"
      style="background: #111"
    >
      <div
        class="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
      >
        <div v-for="stat in content.stats" :key="stat.label">
          <div class="font-display text-3xl font-extrabold text-red-400 mb-1">
            {{ stat.value }}
          </div>
          <div class="text-neutral-500 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- ─── PAIN POINTS ──────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #0a0a0a">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="alert-triangle" class-name="w-3.5 h-3.5" />
            {{ content.ui.painBadge }}
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {{ content.ui.painTitle }}
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            {{ content.ui.painSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="point in content.painPoints"
            :key="point.title"
            class="flex gap-4 p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition"
            style="background: #111"
          >
            <div
              class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0"
            >
              <LucideIcon
                :name="point.icon"
                class-name="w-5 h-5 text-red-400"
              />
            </div>
            <div>
              <h3 class="text-white font-semibold text-sm mb-1">
                {{ point.title }}
              </h3>
              <p class="text-neutral-500 text-sm leading-relaxed">
                {{ point.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── DEMO PREVIEW CTA ─────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-5xl mx-auto">
        <div
          class="relative rounded-3xl overflow-hidden border border-red-500/20 p-8 sm:p-12"
          style="
            background: linear-gradient(
              135deg,
              #1a0808 0%,
              #0a0a0a 60%,
              #0d0a14 100%
            );
          "
        >
          <div
            class="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style="
              background: radial-gradient(ellipse, #ef4444, transparent 70%);
            "
          ></div>

          <div
            class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-6"
              >
                <LucideIcon name="eye" class-name="w-3.5 h-3.5" />
                {{ content.ui.demoBadge }}
              </div>
              <h2
                class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight"
              >
                {{ content.ui.demoTitleLine1 }}<br />
                <span class="text-red-400">{{ content.ui.demoTitleHighlight }}</span>
              </h2>
              <p class="text-neutral-400 mb-8 leading-relaxed">
                {{ content.ui.demoSubtitle }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <BaseButton to="/salones-eventos/premium" accent="red" size="lg" block>
                  <LucideIcon name="smartphone" class-name="w-4 h-4" />
                  {{ content.ui.demoCtaOpen }}
                </BaseButton>
                <BaseButton
                  :href="waDemo"
                  variant="secondary"
                  accent="red"
                  size="lg"
                  block
                  arrow
                >
                  {{ content.ui.demoCtaWant }}
                </BaseButton>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="chip in content.demoChips"
                :key="chip.text"
                class="flex items-center gap-3 p-4 rounded-xl border border-red-500/10"
                style="background: rgba(239, 68, 68, 0.04)"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0"
                >
                  <LucideIcon
                    :name="chip.icon"
                    class-name="w-4 h-4 text-red-400"
                  />
                </div>
                <span class="text-white text-xs font-semibold">{{
                  chip.text
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FEATURES ─────────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #0a0a0a">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="star" class-name="w-3.5 h-3.5" />
            {{ content.ui.featuresBadge }}
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {{ content.ui.featuresTitle }}
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            {{ content.ui.featuresSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="feature in content.features"
            :key="feature.title"
            class="p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all hover:-translate-y-0.5"
            style="background: #111"
          >
            <div
              :class="[
                'w-11 h-11 rounded-xl flex items-center justify-center mb-4',
                feature.bg,
              ]"
            >
              <LucideIcon
                :name="feature.icon"
                :class-name="`w-5 h-5 ${feature.color}`"
              />
            </div>
            <h3 class="text-white font-semibold text-sm mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-neutral-500 text-sm leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── HOW IT WORKS ─────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="map" class-name="w-3.5 h-3.5" />
            {{ content.ui.processBadge }}
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {{ content.ui.processTitle }}
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">
            {{ content.ui.processSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            class="hidden md:block absolute top-10 left-1/3 right-1/3 h-px border-t border-dashed border-neutral-700"
          ></div>

          <div
            v-for="step in content.steps"
            :key="step.number"
            class="text-center relative"
          >
            <div
              :class="[
                'inline-flex items-center justify-center w-20 h-20 rounded-2xl border mb-5 mx-auto',
                step.border,
                step.bg,
              ]"
            >
              <LucideIcon
                :name="step.icon"
                :class-name="`w-8 h-8 ${step.color}`"
              />
            </div>
            <div :class="['font-display text-xs font-bold mb-2', step.color]">
              {{ content.ui.stepLabel }} {{ step.number }}
            </div>
            <h3 class="text-white font-bold text-base mb-2">
              {{ step.title }}
            </h3>
            <p class="text-neutral-500 text-sm leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <BaseButton :href="waDemo" accent="red" size="lg" arrow>
            {{ content.ui.processCta }}
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- ─── TESTIMONIALS ─────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #0a0a0a">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="message-square" class-name="w-3.5 h-3.5" />
            {{ content.ui.testimonialsBadge }}
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {{ content.ui.testimonialsTitle }}
          </h2>
          <p class="text-neutral-400 max-w-lg mx-auto">
            {{ content.ui.testimonialsSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in content.testimonials"
            :key="t.name"
            class="p-7 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition flex flex-col"
            style="background: #111"
          >
            <div class="flex gap-1 mb-5">
              <LucideIcon
                v-for="s in t.stars"
                :key="s"
                name="star"
                class-name="w-4 h-4 text-red-400 fill-current"
              />
            </div>
            <p class="text-neutral-300 text-sm leading-relaxed mb-6 flex-1">
              "{{ t.text }}"
            </p>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-800"
            >
              <div
                :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0',
                  t.avatarBg,
                  t.avatarColor,
                ]"
              >
                {{ t.avatar }}
              </div>
              <div>
                <div class="text-white font-semibold text-sm">{{ t.name }}</div>
                <div class="text-neutral-500 text-xs">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PRICING ──────────────────────────────────────────────────── -->
    <section id="precios" class="px-6 py-20" style="background: #111">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="tag" class-name="w-3.5 h-3.5" />
            {{ content.ui.pricingBadge }}
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {{ content.ui.pricingTitle }}
          </h2>
          <p class="text-neutral-400 max-w-xl mx-auto">
            {{ content.ui.pricingSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in content.packages"
            :key="pkg.name"
            :class="[
              'relative flex flex-col rounded-2xl border p-7 transition-all',
              pkg.highlighted
                ? 'border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.12)]'
                : pkg.vip
                  ? 'border-violet-500/30'
                  : 'border-neutral-800',
            ]"
            style="background: #1a1a1a"
          >
            <div
              v-if="pkg.badge"
              :class="[
                'absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap',
                pkg.highlighted
                  ? 'bg-red-500 text-neutral-950'
                  : 'bg-violet-500 text-white',
              ]"
            >
              {{ pkg.badge }}
            </div>

            <div class="flex items-center gap-3 mb-5">
              <div
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  pkg.highlighted
                    ? 'bg-red-500/15'
                    : pkg.vip
                      ? 'bg-violet-500/15'
                      : 'bg-neutral-800',
                ]"
              >
                <LucideIcon
                  :name="pkg.icon"
                  :class-name="`w-5 h-5 ${pkg.highlighted ? 'text-red-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-400'}`"
                />
              </div>
              <div>
                <div class="text-white font-bold">{{ pkg.name }}</div>
                <div class="text-neutral-500 text-xs">{{ pkg.tagline }}</div>
              </div>
            </div>

            <div class="mb-6">
              <span
                :class="[
                  'font-display text-4xl font-extrabold',
                  pkg.highlighted
                    ? 'text-red-400'
                    : pkg.vip
                      ? 'text-violet-400'
                      : 'text-white',
                ]"
              >
                {{ pkg.price }}
              </span>
              <span class="text-neutral-500 text-sm ml-2"
                >{{ isEn ? "USD" : "MXN" }} · {{ pkg.period }}</span
              >
            </div>

            <ul class="space-y-2.5 mb-7 flex-1">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex items-start gap-2.5 text-sm"
              >
                <LucideIcon
                  name="check"
                  :class-name="`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-red-400' : pkg.vip ? 'text-violet-400' : 'text-neutral-500'}`"
                />
                <span class="text-neutral-300">{{ f }}</span>
              </li>
              <li
                v-for="f in pkg.excluded"
                :key="f"
                class="flex items-start gap-2.5 text-sm"
              >
                <LucideIcon
                  name="minus"
                  class-name="w-4 h-4 flex-shrink-0 mt-0.5 text-neutral-700"
                />
                <span class="text-neutral-700">{{ f }}</span>
              </li>
            </ul>

            <div class="space-y-2.5">
              <BaseButton
                :href="pkgWaUrl(pkg.waKey)"
                :variant="pkg.highlighted || pkg.vip ? 'primary' : 'secondary'"
                :accent="pkg.vip ? 'violet' : 'red'"
                class="w-full justify-center"
                arrow
              >
                {{ content.ui.hirePlan }} {{ pkg.name }}
              </BaseButton>
              <BaseButton
                :to="pkg.demo"
                variant="ghost"
                accent="red"
                class="w-full justify-center"
              >
                <LucideIcon name="play" class-name="w-3.5 h-3.5" />
                {{ content.ui.viewDemo }}
              </BaseButton>
            </div>
          </div>
        </div>

        <p class="text-center mt-8 text-xs text-neutral-500 max-w-2xl mx-auto">
          {{ content.ui.pricingNote }}
        </p>
      </div>
    </section>

    <!-- ─── COMPARISON TABLE ─────────────────────────────────────────── -->
    <section class="px-6 py-16" style="background: #0a0a0a">
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold text-white text-center mb-10"
        >
          {{ content.ui.comparisonTitle }}
        </h2>
        <div class="overflow-x-auto rounded-2xl border border-neutral-800">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-neutral-800" style="background: #111">
                <th class="text-left py-4 px-6 text-neutral-400 font-medium">
                  {{ content.ui.comparisonFeatureHeader }}
                </th>
                <th
                  class="text-center py-4 px-4 text-white font-semibold whitespace-nowrap"
                >
                  {{ content.ui.comparisonEssential }}
                </th>
                <th
                  class="text-center py-4 px-4 text-red-400 font-semibold whitespace-nowrap"
                >
                  {{ content.ui.comparisonPro }}
                </th>
                <th
                  class="text-center py-4 px-4 text-violet-400 font-semibold whitespace-nowrap"
                >
                  {{ content.ui.comparisonPremium }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in content.comparisonRows"
                :key="row.feature"
                class="border-b border-neutral-800/50 last:border-0 hover:bg-red-500/5 transition-colors"
                style="background: #0f0f0f"
              >
                <td class="py-3 px-6 text-neutral-400 whitespace-nowrap">
                  {{ row.feature }}
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.small"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-neutral-500"
                  />
                  <span v-else class="text-neutral-700">—</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.medium"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-red-400"
                  />
                  <span v-else class="text-neutral-700">—</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.large"
                    name="check"
                    class-name="w-4 h-4 mx-auto text-violet-400"
                  />
                  <span v-else class="text-neutral-700">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ─── FAQ ──────────────────────────────────────────────────────── -->
    <section class="px-6 py-20" style="background: #111">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5"
          >
            <LucideIcon name="help-circle" class-name="w-3.5 h-3.5" />
            {{ content.ui.faqBadge }}
          </div>
          <h2
            class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {{ content.ui.faqTitle }}
          </h2>
          <p class="text-neutral-400">
            {{ content.ui.faqSubtitle }}
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in content.faqs"
            :key="i"
            class="rounded-2xl border border-neutral-800 overflow-hidden transition-all"
            :class="openFaq === i ? 'border-red-500/30' : ''"
            style="background: #1a1a1a"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="text-white font-semibold text-sm">{{ faq.q }}</span>
              <LucideIcon
                :name="openFaq === i ? 'chevron-up' : 'chevron-down'"
                :class-name="`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'text-red-400' : 'text-neutral-500'}`"
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-neutral-400 text-sm leading-relaxed">
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-red-400 text-sm font-semibold hover:text-red-300 transition"
          >
            {{ content.ui.faqMoreQuestions }}
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── DEMO 21 DÍAS ──────────────────────────────────────────────── -->
    <section class="px-6 py-24" style="background: #0a0a0a">
      <div class="max-w-4xl mx-auto">
        <div
          class="relative rounded-3xl overflow-hidden border border-red-500/20 p-8 sm:p-14 text-center"
          style="
            background: linear-gradient(
              135deg,
              #1a0808 0%,
              #0a0a0a 50%,
              #0a0a14 100%
            );
          "
        >
          <div
            class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-20 -translate-y-1/2"
            style="
              background: radial-gradient(ellipse, #ef4444, transparent 70%);
            "
          ></div>

          <div class="relative">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-7"
            >
              <LucideIcon name="calendar-clock" class-name="w-3.5 h-3.5" />
              {{ content.ui.demo21Badge }}
            </div>

            <h2
              class="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4"
            >
              {{ content.ui.demo21Title }}
            </h2>
            <p
              class="text-neutral-400 max-w-2xl mx-auto mb-10 text-base leading-relaxed"
            >
              {{ content.ui.demo21DescBefore }}
              <span class="text-red-400 font-bold"> {{ content.demo21Price }} </span>
              {{ content.ui.demo21DescAfter }}
              <strong class="text-white"> {{ content.ui.demo21Days }}</strong>.
              {{ content.ui.demo21DescEnd }}
            </p>

            <div
              class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
            >
              <div
                class="p-5 rounded-2xl border border-red-500/15"
                style="background: rgba(239, 68, 68, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="building-2"
                    class-name="w-5 h-5 text-red-400"
                  />
                </div>
                <p class="text-white font-semibold text-sm mb-1">
                  {{ content.ui.demo21Card1Title }}
                </p>
                <p class="text-neutral-500 text-xs">
                  {{ content.ui.demo21Card1Desc }}
                </p>
              </div>
              <div
                class="p-5 rounded-2xl border border-red-500/15"
                style="background: rgba(239, 68, 68, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="share-2"
                    class-name="w-5 h-5 text-red-400"
                  />
                </div>
                <p class="text-white font-semibold text-sm mb-1">
                  {{ content.ui.demo21Card2Title }}
                </p>
                <p class="text-neutral-500 text-xs">
                  {{ content.ui.demo21Card2Desc }}
                </p>
              </div>
              <div
                class="p-5 rounded-2xl border border-red-500/15"
                style="background: rgba(239, 68, 68, 0.05)"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3"
                >
                  <LucideIcon
                    name="receipt"
                    class-name="w-5 h-5 text-red-400"
                  />
                </div>
                <p class="text-white font-semibold text-sm mb-1">
                  {{ content.ui.demo21Card3Title }}
                </p>
                <p class="text-neutral-500 text-xs">
                  {{ content.ui.demo21Card3Desc }}
                </p>
              </div>
            </div>

            <BaseButton :href="waDemo21" accent="red" size="lg" arrow>
              {{ content.ui.demo21Cta }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA FINAL ─────────────────────────────────────────────────── -->
    <section class="px-6 py-32 text-center" style="background: #111">
      <div class="max-w-3xl mx-auto">
        <div
          class="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-8"
        >
          <LucideIcon name="landmark" class-name="w-8 h-8 text-red-400" />
        </div>

        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          {{ content.ui.finalTitleLine1 }}<br />
          <span class="text-red-400">{{ content.ui.finalTitleHighlight }}</span>
        </h2>
        <p
          class="text-neutral-400 mb-10 text-lg max-w-xl mx-auto leading-relaxed"
        >
          {{ content.ui.finalSubtitle }}
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <BaseButton :href="waContratar" accent="red" size="lg">
            {{ content.ui.finalCtaQuote }}
          </BaseButton>
          <BaseButton
            to="/salones-eventos/premium"
            variant="secondary"
            accent="red"
            size="lg"
          >
            {{ content.ui.finalCtaDemo }}
          </BaseButton>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-neutral-600"
        >
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="shield-check"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            {{ content.ui.finalTrustGuarantee }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="clock"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            {{ content.ui.finalTrustDelivery }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="headphones"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            {{ content.ui.finalTrustSupport }}
          </span>
          <span class="flex items-center gap-1.5">
            <LucideIcon
              name="calendar-check"
              class-name="w-3.5 h-3.5 text-red-500/60"
            />
            {{ content.ui.finalTrustQuoteAgenda }}
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
