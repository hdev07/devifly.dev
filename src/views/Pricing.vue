<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-3xl mx-auto px-6 text-center mb-10 sm:mb-14">
      <p
        class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500 mb-4"
      >
        {{ t("pricingPage.badge") }}
      </p>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-4 tracking-tight"
      >
        {{ t("pricingPage.title") }}
      </h1>
      <p class="text-base sm:text-lg dark:text-text-secondary text-light-muted">
        {{ t("pricingPage.subtitle") }}
      </p>
    </div>

    <!-- Category tabs -->
    <div
      class="sticky top-[4.5rem] z-30 mb-8 sm:mb-10 border-b dark:border-base-700/50 border-light-border dark:bg-base-950/90 bg-light-bg/90 backdrop-blur-md"
    >
      <div
        class="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto scrollbar-none"
        role="tablist"
      >
        <button
          v-for="product in pricingCatalog"
          :key="product.key"
          role="tab"
          :aria-selected="activeKey === product.key"
          @click="activeKey = product.key"
          class="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
          :class="
            activeKey === product.key
              ? 'bg-brand-500 text-white border-brand-500 shadow-[0_4px_20px_rgba(59,130,246,0.35)]'
              : 'dark:bg-base-800/50 bg-white dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted hover:dark:text-white hover:text-light-text'
          "
        >
          <LucideIcon :name="product.icon" class-name="w-3.5 h-3.5" />
          {{ locale === "es" ? product.titleEs : product.titleEn }}
        </button>
      </div>
    </div>

    <!-- Active product -->
    <div class="max-w-5xl mx-auto px-6 mb-20">
      <template v-for="product in pricingCatalog" :key="product.key">
        <transition name="fade" mode="out-in">
          <div v-if="activeKey === product.key">
            <!-- Product intro -->
            <div class="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
              <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                {{ locale === "es" ? product.descEs : product.descEn }}
              </p>
              <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
                <span
                  class="font-display text-2xl sm:text-3xl font-bold dark:text-white text-light-text tabular-nums"
                >
                  {{ locale === "es" ? product.priceEs : product.priceEn }}
                </span>
                <router-link
                  v-if="product.link"
                  :to="product.link"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:text-brand-400 transition"
                >
                  {{ t("pricingPage.learnMore") }}
                  <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />
                </router-link>
              </div>
            </div>

            <!-- Demo 21 chip -->
            <div
              v-if="product.demo21?.enabled"
              class="mb-8 flex justify-center"
            >
              <div
                class="inline-flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-3.5 rounded-2xl border border-amber-500/25 dark:bg-amber-500/5 bg-amber-50/50 max-w-xl w-full sm:w-auto"
              >
                <div class="flex items-center gap-2.5 flex-1 min-w-0">
                  <LucideIcon
                    name="calendar-clock"
                    class-name="w-4 h-4 text-amber-500 shrink-0"
                  />
                  <p class="text-sm dark:text-text-secondary text-light-muted text-left">
                    <span class="font-semibold dark:text-white text-light-text">
                      {{ t("pricingPage.demo21") }}
                    </span>
                    —
                    {{
                      locale === "es"
                        ? product.demo21.descEs
                        : product.demo21.descEn
                    }}
                  </p>
                </div>
                <span
                  class="shrink-0 self-start sm:self-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20 tabular-nums"
                >
                  {{
                    locale === "es"
                      ? product.demo21.priceEs
                      : product.demo21.priceEn
                  }}
                </span>
              </div>
            </div>

            <!-- Plan cards -->
            <div
              class="grid gap-4 sm:gap-5"
              :class="planGridClass(product.plans.length)"
            >
              <article
                v-for="plan in product.plans"
                :key="plan.key"
                class="relative flex flex-col rounded-2xl border p-6 sm:p-7 transition-shadow duration-200"
                :class="
                  plan.popular
                    ? 'border-brand-500/60 dark:bg-brand-500/[0.06] bg-brand-500/[0.04] shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_20px_50px_-20px_rgba(59,130,246,0.25)]'
                    : 'dark:bg-base-800/30 bg-white dark:border-base-700/50 border-light-border hover:dark:border-base-600/60 hover:border-light-border'
                "
              >
                <div
                  v-if="plan.popular"
                  class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-500 text-white text-[11px] font-bold uppercase tracking-wide"
                >
                  {{ t("pricingPage.popular") }}
                </div>

                <div class="mb-5">
                  <h3
                    class="font-display text-lg font-bold dark:text-white text-light-text"
                  >
                    {{ locale === "es" ? plan.nameEs : plan.nameEn }}
                  </h3>
                  <p
                    class="text-sm dark:text-text-secondary text-light-muted mt-1 leading-relaxed line-clamp-2"
                  >
                    {{
                      locale === "es"
                        ? plan.descriptionEs
                        : plan.descriptionEn
                    }}
                  </p>
                </div>

                <div class="mb-6">
                  <span
                    class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text tabular-nums tracking-tight"
                  >
                    {{ locale === "es" ? plan.priceEs : plan.priceEn }}
                  </span>
                  <p class="text-xs dark:text-text-secondary text-light-muted mt-1.5">
                    {{ t("pricingPage.oneTime") }}
                  </p>
                </div>

                <ul class="space-y-2.5 mb-7 flex-1">
                  <li
                    v-for="feature in visibleFeatures(plan)"
                    :key="feature"
                    class="flex items-start gap-2.5 text-sm dark:text-text-secondary text-light-muted"
                  >
                    <LucideIcon
                      name="check"
                      class-name="w-4 h-4 mt-0.5 text-brand-500 shrink-0"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>

                <div class="flex flex-col gap-2 mt-auto">
                  <router-link
                    v-if="plan.demoLink"
                    :to="plan.demoLink"
                    class="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold dark:bg-base-700/40 bg-light-card border dark:border-base-600/40 border-light-border dark:text-text-secondary text-light-muted hover:border-brand-500/40 hover:text-brand-500 transition"
                  >
                    {{ t("pricingPage.viewDemo") }}
                  </router-link>
                  <router-link
                    to="/contact"
                    class="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition"
                    :class="
                      plan.popular
                        ? 'bg-brand-500 text-white hover:bg-brand-600'
                        : 'bg-brand-500/10 border border-brand-500/25 text-brand-500 hover:bg-brand-500/15'
                    "
                  >
                    {{ t("pricingPage.cta") }}
                  </router-link>
                </div>
              </article>
            </div>

            <p
              class="text-xs text-center dark:text-text-secondary/70 text-light-muted mt-6"
            >
              {{ t("pricingPage.note") }}
            </p>
          </div>
        </transition>
      </template>
    </div>

    <!-- Post-delivery -->
    <section
      class="border-t dark:border-base-700/50 border-light-border dark:bg-base-900/20 bg-light-card/40 py-16 sm:py-20"
    >
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-10 max-w-xl mx-auto">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500 mb-3"
          >
            {{ t("pricingPage.afterSalesEyebrow") }}
          </p>
          <h2
            class="font-display text-2xl sm:text-3xl font-bold dark:text-white text-light-text mb-3"
          >
            {{ t("pricingPage.afterSalesTitle") }}
          </h2>
          <p class="text-sm dark:text-text-secondary text-light-muted">
            {{ t("pricingPage.afterSalesSubtitle") }}
          </p>
        </div>

        <!-- Hosting bar -->
        <div
          class="flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 rounded-2xl border dark:border-base-700/50 border-light-border dark:bg-base-800/30 bg-white mb-6"
        >
          <div
            class="w-10 h-10 rounded-xl dark:bg-base-700/60 bg-light-card border dark:border-base-600/40 border-light-border flex items-center justify-center shrink-0"
          >
            <LucideIcon name="server" class-name="w-4 h-4 text-brand-500" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-semibold dark:text-white text-light-text">
                {{ t("pricingPage.hostingTitle") }}
              </span>
              <span
                class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-500/10 text-amber-500 border border-amber-500/20"
              >
                {{ t("pricingPage.hostingRequired") }}
              </span>
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mt-0.5">
              {{ t("pricingPage.hostingDesc") }}
            </p>
          </div>
          <div class="shrink-0 sm:text-right">
            <div
              class="font-display text-xl font-bold dark:text-white text-light-text tabular-nums"
            >
              {{ locale === "es" ? "$199 MXN/mes" : "$14 USD/mo" }}
            </div>
            <div class="text-xs dark:text-text-secondary text-light-muted">
              {{
                locale === "es"
                  ? "o $1,999/año · 2 meses gratis"
                  : "or $120/yr · 2 months free"
              }}
            </div>
          </div>
        </div>

        <!-- Maintenance cards -->
        <p
          class="text-xs font-semibold uppercase tracking-[0.16em] text-center dark:text-text-secondary text-light-muted mb-5"
        >
          {{ t("pricingPage.maintenanceLabel") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <article
            v-for="plan in maintenancePlans"
            :key="plan.key"
            class="relative flex flex-col p-5 rounded-2xl border transition-all"
            :class="
              plan.popular
                ? 'border-brand-500/50 dark:bg-brand-500/[0.06] bg-brand-500/[0.04]'
                : 'dark:bg-base-800/30 bg-white dark:border-base-700/50 border-light-border'
            "
          >
            <div
              v-if="plan.popular"
              class="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold"
            >
              {{ t("pricingPage.recommended") }}
            </div>
            <div class="flex items-center gap-2.5 mb-3">
              <LucideIcon :name="plan.icon" class-name="w-4 h-4 text-brand-500" />
              <h4 class="font-semibold dark:text-white text-light-text text-sm">
                {{ locale === "es" ? plan.nameEs : plan.nameEn }}
              </h4>
            </div>
            <p
              class="font-display text-2xl font-bold dark:text-white text-light-text tabular-nums mb-3"
            >
              {{
                locale === "es" ? plan.priceMonthlyEs : plan.priceMonthlyEn
              }}
            </p>
            <ul class="space-y-2 flex-1">
              <li
                v-for="feature in (locale === 'es'
                  ? plan.featuresEs
                  : plan.featuresEn
                ).slice(0, 4)"
                :key="feature"
                class="flex items-start gap-2 text-xs dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-3.5 h-3.5 mt-0.5 text-brand-500 shrink-0"
                />
                {{ feature }}
              </li>
            </ul>
          </article>
        </div>

        <p
          class="text-xs text-center dark:text-text-secondary/70 text-light-muted mt-6 max-w-lg mx-auto"
        >
          {{ t("pricingPage.afterSalesNote") }}
        </p>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-16 sm:py-20 px-6 text-center">
      <h2
        class="font-display text-2xl sm:text-3xl font-bold dark:text-white text-light-text mb-3"
      >
        {{ t("pricingPage.ctaTitle") }}
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-7 max-w-md mx-auto text-sm">
        {{ t("pricingPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition"
      >
        {{ t("pricingPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";
import { pricingCatalog, afterSalesPlans } from "../data/salesCatalog.js";

const { t, locale } = useI18n();

const activeKey = ref(pricingCatalog[0]?.key ?? "");

const maintenancePlans = computed(() =>
  afterSalesPlans.filter((p) => p.key !== "hosting"),
);

const MAX_FEATURES = 6;

function visibleFeatures(plan) {
  const list = locale.value === "es" ? plan.featuresEs : plan.featuresEn;
  return list?.slice(0, MAX_FEATURES) ?? [];
}

function planGridClass(count) {
  if (count === 1) return "grid-cols-1 max-w-sm mx-auto";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
