<template>
  <main class="pt-24 pb-0">
    <!-- Hero header -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-14">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="circle-dollar-sign" class-name="w-4 h-4" />
        {{ t("pricingPage.badge") }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-4 max-w-3xl mx-auto"
      >
        {{ t("pricingPage.title") }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{ t("pricingPage.subtitle") }}
      </p>
    </div>

    <!-- Sidebar + Panel layout -->
    <div class="max-w-7xl mx-auto px-6 mb-20">
      <div class="flex flex-col lg:flex-row gap-6 items-start">
        <!-- Sidebar -->
        <aside class="lg:w-72 shrink-0 lg:sticky lg:top-28">
          <div
            class="rounded-2xl border dark:border-base-700/50 border-light-border dark:bg-base-900/40 bg-light-card/60 overflow-hidden"
          >
            <div
              class="px-4 py-3 border-b dark:border-base-700/40 border-light-border"
            >
              <span
                class="text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted"
              >
                {{ locale === "es" ? "Productos" : "Products" }}
              </span>
            </div>
            <nav class="p-2 space-y-0.5">
              <button
                v-for="product in pricingCatalog"
                :key="product.key"
                @click="activeKey = product.key"
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group"
                :class="
                  activeKey === product.key
                    ? 'bg-brand-500/10 border border-brand-500/30 text-brand-500'
                    : 'dark:hover:bg-base-800/60 hover:bg-light-surface border border-transparent dark:text-text-secondary text-light-muted hover:dark:text-white hover:text-light-text'
                "
              >
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all"
                  :class="
                    activeKey === product.key
                      ? 'bg-brand-500/15 border-brand-500/30'
                      : 'dark:bg-base-800/70 bg-white dark:border-base-700/50 border-light-border'
                  "
                >
                  <LucideIcon :name="product.icon" class-name="w-4 h-4" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold truncate">
                    {{ locale === "es" ? product.titleEs : product.titleEn }}
                  </div>
                  <div class="text-xs opacity-70 truncate">
                    {{ locale === "es" ? product.priceEs : product.priceEn }}
                  </div>
                </div>
                <LucideIcon
                  v-if="activeKey === product.key"
                  name="chevron-right"
                  class-name="w-3.5 h-3.5 text-brand-500 shrink-0"
                />
              </button>
            </nav>

            <!-- After-sales shortcut -->
            <div
              class="p-2 border-t dark:border-base-700/40 border-light-border mt-1"
            >
              <button
                @click="activeKey = '__aftersales__'"
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 border"
                :class="
                  activeKey === '__aftersales__'
                    ? 'bg-brand-500/10 border-brand-500/30 text-brand-500'
                    : 'dark:hover:bg-base-800/60 hover:bg-light-surface border-transparent dark:text-text-secondary text-light-muted'
                "
              >
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all"
                  :class="
                    activeKey === '__aftersales__'
                      ? 'bg-brand-500/15 border-brand-500/30'
                      : 'dark:bg-base-800/70 bg-white dark:border-base-700/50 border-light-border'
                  "
                >
                  <LucideIcon name="shield-check" class-name="w-4 h-4" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold truncate">
                    {{ locale === "es" ? "Post entrega" : "After delivery" }}
                  </div>
                  <div class="text-xs opacity-70 truncate">
                    {{
                      locale === "es"
                        ? "Hosting + Mantenimiento"
                        : "Hosting + Maintenance"
                    }}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </aside>

        <!-- Main panel -->
        <div class="flex-1 min-w-0">
          <!-- Product panel -->
          <template v-for="product in pricingCatalog" :key="product.key">
            <transition name="fade-slide" mode="out-in">
              <div v-if="activeKey === product.key">
                <!-- Product header -->
                <div
                  class="rounded-2xl border dark:border-base-700/50 border-light-border dark:bg-base-900/30 bg-light-card/60 p-6 md:p-8 mb-6"
                >
                  <div
                    class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
                  >
                    <div class="flex items-center gap-3">
                      <div
                        class="w-12 h-12 rounded-2xl dark:bg-base-800/70 bg-white border dark:border-base-700/50 border-light-border flex items-center justify-center shrink-0"
                      >
                        <LucideIcon
                          :name="product.icon"
                          class-name="w-5 h-5 text-brand-500"
                        />
                      </div>
                      <div>
                        <span
                          class="block text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-0.5"
                        >
                          {{
                            locale === "es"
                              ? product.categoryEs
                              : product.categoryEn
                          }}
                        </span>
                        <h2
                          class="font-display text-2xl font-bold dark:text-white text-light-text"
                        >
                          {{
                            locale === "es" ? product.titleEs : product.titleEn
                          }}
                        </h2>
                      </div>
                    </div>
                    <router-link
                      to="/contact"
                      class="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition"
                    >
                      {{ t("pricingPage.cta") }}
                      <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                    </router-link>
                  </div>

                  <p
                    class="text-sm dark:text-text-secondary text-light-muted mt-4 leading-relaxed"
                  >
                    {{ locale === "es" ? product.descEs : product.descEn }}
                  </p>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                    <div
                      class="p-3.5 rounded-xl dark:bg-base-800/50 bg-light-surface border dark:border-base-700/40 border-light-border"
                    >
                      <span
                        class="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-500 mb-1"
                      >
                        {{ locale === "es" ? "Ideal para" : "Ideal for" }}
                      </span>
                      <p
                        class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
                      >
                        {{
                          locale === "es"
                            ? product.idealForEs
                            : product.idealForEn
                        }}
                      </p>
                    </div>
                    <div
                      class="p-3.5 rounded-xl dark:bg-base-800/50 bg-light-surface border dark:border-base-700/40 border-light-border"
                    >
                      <span
                        class="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-500 mb-1"
                      >
                        {{
                          locale === "es"
                            ? "Por qué contratarlo"
                            : "Why choose it"
                        }}
                      </span>
                      <p
                        class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
                      >
                        {{ locale === "es" ? product.whyEs : product.whyEn }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Plans grid -->
                <div
                  class="grid gap-5"
                  :class="
                    product.plans.length === 1
                      ? 'grid-cols-1 max-w-md'
                      : product.plans.length === 2
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                  "
                >
                  <article
                    v-for="plan in product.plans"
                    :key="plan.key"
                    class="relative flex flex-col p-6 rounded-2xl border transition-all duration-200"
                    :class="
                      plan.popular
                        ? 'border-brand-500 dark:bg-brand-500/8 bg-brand-500/5 shadow-[0_0_0_1px_rgba(59,130,246,0.2)]'
                        : 'dark:bg-base-800/40 bg-light-surface dark:border-base-700/50 border-light-border'
                    "
                  >
                    <div
                      v-if="plan.popular"
                      class="absolute -top-3 right-4 py-1 px-3 bg-brand-500 text-white text-xs font-bold rounded-full shadow-lg"
                    >
                      {{ t("pricingPage.popular") }}
                    </div>

                    <h4
                      class="font-display text-xl font-bold dark:text-white text-light-text mb-1"
                    >
                      {{ locale === "es" ? plan.nameEs : plan.nameEn }}
                    </h4>
                    <p
                      class="text-sm dark:text-text-secondary text-light-muted mb-5 leading-relaxed"
                    >
                      {{
                        locale === "es"
                          ? plan.descriptionEs
                          : plan.descriptionEn
                      }}
                    </p>

                    <div class="mb-5">
                      <span
                        class="font-display text-3xl font-bold dark:text-white text-light-text"
                      >
                        {{ locale === "es" ? plan.priceEs : plan.priceEn }}
                      </span>
                      <div
                        class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        <LucideIcon name="circle-check" class-name="w-3 h-3" />
                        {{
                          locale === "es" ? "Pago único" : "One-time payment"
                        }}
                      </div>
                    </div>

                    <ul class="space-y-2 mb-6 flex-1">
                      <li
                        v-for="feature in locale === 'es'
                          ? plan.featuresEs
                          : plan.featuresEn"
                        :key="feature"
                        class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
                      >
                        <LucideIcon
                          name="check"
                          class-name="w-4 h-4 mt-0.5 text-brand-500 shrink-0"
                        />
                        {{ feature }}
                      </li>
                    </ul>

                    <div class="flex flex-col gap-2 mt-auto">
                      <router-link
                        v-if="plan.demoLink"
                        :to="plan.demoLink"
                        class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:border-brand-500/50 hover:text-brand-500 transition text-sm"
                      >
                        <span class="inline-flex items-center gap-2">
                          <LucideIcon name="play" class-name="w-4 h-4" />
                          {{ locale === "es" ? "Ver demo" : "View demo" }}
                        </span>
                      </router-link>
                      <router-link
                        to="/contact"
                        class="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition"
                        :class="
                          plan.popular
                            ? 'bg-brand-500 text-white hover:bg-brand-600'
                            : 'bg-brand-500/10 border border-brand-500/30 text-brand-500 hover:bg-brand-500/20'
                        "
                      >
                        <span class="inline-flex items-center gap-2">
                          {{ t("pricingPage.cta") }}
                          <LucideIcon name="arrow-right" class-name="w-4 h-4" />
                        </span>
                      </router-link>
                    </div>
                  </article>
                </div>

                <p
                  class="text-xs dark:text-text-secondary/60 text-light-muted mt-5"
                >
                  {{ t("pricingPage.note") }}
                </p>
              </div>
            </transition>
          </template>

          <!-- After-sales panel -->
          <transition name="fade-slide" mode="out-in">
            <div v-if="activeKey === '__aftersales__'">
              <div
                class="rounded-2xl border dark:border-base-700/50 border-light-border dark:bg-base-900/30 bg-light-card/60 p-6 md:p-8 mb-6"
              >
                <div class="flex items-center gap-3 mb-3">
                  <div
                    class="w-12 h-12 rounded-2xl dark:bg-base-800/70 bg-white border dark:border-base-700/50 border-light-border flex items-center justify-center shrink-0"
                  >
                    <LucideIcon
                      name="shield-check"
                      class-name="w-5 h-5 text-brand-500"
                    />
                  </div>
                  <div>
                    <span
                      class="block text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-0.5"
                    >
                      {{ locale === "es" ? "Post entrega" : "After delivery" }}
                    </span>
                    <h2
                      class="font-display text-2xl font-bold dark:text-white text-light-text"
                    >
                      {{ t("pricingPage.afterSalesTitle") }}
                    </h2>
                  </div>
                </div>
                <p
                  class="text-sm dark:text-text-secondary text-light-muted leading-relaxed"
                >
                  {{ t("pricingPage.afterSalesSubtitle") }}
                </p>
              </div>

              <!-- Hosting banner -->
              <div
                class="relative mb-6 p-6 rounded-2xl border dark:border-base-700/40 border-light-border dark:bg-base-900/40 bg-light-card/60 overflow-hidden"
              >
                <div
                  class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-500/5 blur-2xl pointer-events-none"
                ></div>
                <div
                  class="relative flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div
                    class="w-11 h-11 rounded-xl dark:bg-base-800/70 bg-white border dark:border-base-700/50 border-light-border flex items-center justify-center shrink-0"
                  >
                    <LucideIcon
                      name="server"
                      class-name="w-5 h-5 text-brand-500"
                    />
                  </div>
                  <div class="flex-1">
                    <div class="flex flex-wrap items-center gap-2 mb-0.5">
                      <span
                        class="font-display text-lg font-bold dark:text-white text-light-text"
                      >
                        {{
                          locale === "es"
                            ? "Hosting + Dominio"
                            : "Hosting + Domain"
                        }}
                      </span>
                      <span
                        class="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        {{ locale === "es" ? "Obligatorio" : "Required" }}
                      </span>
                    </div>
                    <p
                      class="text-sm dark:text-text-secondary text-light-muted"
                    >
                      {{
                        locale === "es"
                          ? "El único costo recurrente para mantener tu sitio activo y seguro."
                          : "The only recurring cost to keep your site live and secure."
                      }}
                    </p>
                  </div>
                  <div class="shrink-0 sm:text-right">
                    <div
                      class="font-display text-2xl font-bold dark:text-white text-light-text"
                    >
                      {{ locale === "es" ? "$199 MXN/mes" : "$12 USD/mo" }}
                    </div>
                    <div
                      class="text-xs dark:text-text-secondary text-light-muted mt-0.5"
                    >
                      {{
                        locale === "es"
                          ? "o $1,999/año · 2 meses gratis"
                          : "or $120/yr · 2 months free"
                      }}
                    </div>
                  </div>
                </div>
                <div
                  class="relative mt-4 pt-4 border-t dark:border-base-700/40 border-light-border grid grid-cols-2 sm:grid-cols-4 gap-2.5"
                >
                  <div
                    v-for="f in locale === 'es'
                      ? [
                          'Servidor optimizado',
                          'Dominio (.com, .mx)',
                          'SSL https incluido',
                          'Renovación automática',
                        ]
                      : [
                          'Optimized server',
                          'Domain (.com, .mx)',
                          'SSL https included',
                          'Automatic renewal',
                        ]"
                    :key="f"
                    class="flex items-center gap-2 text-xs dark:text-text-secondary text-light-muted"
                  >
                    <LucideIcon
                      name="circle-check"
                      class-name="w-3.5 h-3.5 text-brand-500 shrink-0"
                    />
                    {{ f }}
                  </div>
                </div>
              </div>

              <!-- Mantenimiento label -->
              <div class="flex items-center gap-3 mb-5">
                <div
                  class="h-px flex-1 dark:bg-base-700/50 bg-light-border"
                ></div>
                <span
                  class="text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted px-2"
                >
                  {{
                    locale === "es"
                      ? "Mantenimiento y soporte — opcional"
                      : "Maintenance & support — optional"
                  }}
                </span>
                <div
                  class="h-px flex-1 dark:bg-base-700/50 bg-light-border"
                ></div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <article
                  v-for="plan in afterSalesPlans.filter(
                    (p) => p.key !== 'hosting',
                  )"
                  :key="plan.key"
                  class="relative flex flex-col p-6 rounded-2xl border transition-all duration-200"
                  :class="
                    plan.popular
                      ? 'border-brand-500 dark:bg-brand-500/8 bg-brand-500/5 shadow-[0_0_0_1px_rgba(59,130,246,0.2)]'
                      : 'dark:bg-base-800/40 bg-light-surface dark:border-base-700/50 border-light-border'
                  "
                >
                  <div
                    v-if="plan.popular"
                    class="absolute -top-3 right-4 py-1 px-3 bg-brand-500 text-white text-xs font-bold rounded-full shadow-lg"
                  >
                    {{ locale === "es" ? "Recomendado" : "Recommended" }}
                  </div>

                  <div class="flex items-center gap-3 mb-4">
                    <div
                      class="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                      :class="
                        plan.popular
                          ? 'dark:bg-brand-500/15 bg-brand-500/10 border-brand-500/30'
                          : 'dark:bg-base-700/60 bg-light-card dark:border-base-600/50 border-light-border'
                      "
                    >
                      <LucideIcon
                        :name="plan.icon"
                        class-name="w-4 h-4 text-brand-500"
                      />
                    </div>
                    <h4
                      class="font-display text-lg font-bold dark:text-white text-light-text"
                    >
                      {{ locale === "es" ? plan.nameEs : plan.nameEn }}
                    </h4>
                  </div>

                  <p
                    class="text-sm dark:text-text-secondary text-light-muted mb-5 leading-relaxed"
                  >
                    {{ locale === "es" ? plan.descEs : plan.descEn }}
                  </p>

                  <div class="mb-5">
                    <span
                      class="font-display text-3xl font-bold dark:text-white text-light-text"
                    >
                      {{
                        locale === "es"
                          ? plan.priceMonthlyEs
                          : plan.priceMonthlyEn
                      }}
                    </span>
                    <span
                      class="text-xs dark:text-text-secondary text-light-muted ml-1"
                    >
                      {{
                        locale === "es"
                          ? "· Hosting incluido"
                          : "· Hosting included"
                      }}
                    </span>
                  </div>

                  <ul class="space-y-2.5 flex-1">
                    <li
                      v-for="feature in locale === 'es'
                        ? plan.featuresEs
                        : plan.featuresEn"
                      :key="feature"
                      class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
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
                class="text-xs dark:text-text-secondary text-light-muted mt-6 max-w-2xl"
              >
                {{ t("pricingPage.afterSalesNote") }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- CTA final -->
    <div
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6 text-center"
    >
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4"
      >
        {{ t("pricingPage.ctaTitle") }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{ t("pricingPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{ t("pricingPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";
import { pricingCatalog, afterSalesPlans } from "../data/salesCatalog.js";

const { t, locale } = useI18n();

const activeKey = ref(pricingCatalog[0]?.key ?? "");
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
