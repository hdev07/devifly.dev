<template>
  <main class="relative min-h-screen pt-28 pb-24 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm" :aria-label="t('legal.breadcrumb')">
        <router-link
          to="/"
          class="inline-flex items-center gap-1.5 dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
        >
          <LucideIcon name="arrow-left" class-name="w-4 h-4" />
          {{ t("legal.backHome") }}
        </router-link>
      </nav>

      <!-- Header -->
      <header class="max-w-3xl">
        <div class="flex items-center gap-3 mb-5">
          <span class="block w-8 h-px bg-brand-500"></span>
          <span class="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">
            {{ t("legal.eyebrow") }}
          </span>
        </div>
        <h1
          class="font-display font-bold dark:text-white text-light-text leading-tight"
          style="font-size: clamp(1.75rem, 4.5vw, 2.75rem)"
        >
          {{ pick(doc, "title") }}
        </h1>
        <p class="mt-4 text-base dark:text-text-secondary text-light-muted leading-relaxed">
          {{ pick(doc, "summary") }}
        </p>
        <p class="mt-5 text-xs dark:text-base-600 text-light-muted/70">
          {{ pick(doc, "updated") }} · {{ legalEntity.legalName }} · RFC {{ legalEntity.rfc }}
        </p>
      </header>

      <div class="mt-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
        <!-- Índice lateral de documentos -->
        <aside class="lg:sticky lg:top-28 lg:self-start">
          <p
            class="text-[11px] font-semibold uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted mb-3"
          >
            {{ t("legal.otherDocs") }}
          </p>
          <ul class="space-y-1">
            <li v-for="item in legalDocs" :key="item.slug">
              <router-link
                :to="`/legal/${item.slug}`"
                class="flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors"
                :class="item.slug === doc.slug
                  ? 'bg-brand-500/10 dark:text-brand-400 text-brand-600 font-semibold'
                  : 'dark:text-text-secondary text-light-muted hover:bg-brand-500/5 hover:text-brand-500'"
              >
                <LucideIcon :name="item.icon" class-name="w-4 h-4 shrink-0 mt-0.5" />
                <span class="leading-snug">{{ pick(item, "title") }}</span>
              </router-link>
            </li>
          </ul>

          <div
            class="mt-6 rounded-xl border dark:border-base-700/50 border-light-border dark:bg-base-900/40 bg-white/60 p-4"
          >
            <p class="text-xs dark:text-text-secondary text-light-muted leading-relaxed">
              {{ t("legal.questionsText") }}
            </p>
            <a
              :href="siteLinks.email"
              class="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-brand-400"
            >
              {{ legalEntity.email }}
              <LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />
            </a>
          </div>
        </aside>

        <!-- Cuerpo del documento -->
        <article class="max-w-3xl">
          <section
            v-for="(section, i) in doc.sections"
            :key="i"
            class="scroll-mt-28 pb-8 mb-8 border-b dark:border-base-700/40 border-light-border last:border-0 last:mb-0 last:pb-0"
          >
            <h2
              class="font-display text-lg sm:text-xl font-bold dark:text-white text-light-text mb-4"
            >
              {{ pick(section, "title") }}
            </h2>

            <p
              v-for="(paragraph, p) in pick(section, 'body') || []"
              :key="`p-${p}`"
              class="text-sm sm:text-[15px] dark:text-text-secondary text-light-muted leading-relaxed mb-3 last:mb-0"
            >
              {{ paragraph }}
            </p>

            <ul v-if="pick(section, 'list')" class="mt-4 space-y-2.5">
              <li
                v-for="(item, l) in pick(section, 'list')"
                :key="`l-${l}`"
                class="flex items-start gap-2.5 text-sm sm:text-[15px] dark:text-text-secondary text-light-muted leading-relaxed"
              >
                <LucideIcon name="check" class-name="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                <span>{{ item }}</span>
              </li>
            </ul>

            <p
              v-for="(paragraph, p2) in pick(section, 'body2') || []"
              :key="`p2-${p2}`"
              class="text-sm sm:text-[15px] dark:text-text-secondary text-light-muted leading-relaxed mt-4 mb-3 last:mb-0"
            >
              {{ paragraph }}
            </p>
          </section>

          <!-- Cierre -->
          <div
            class="mt-12 rounded-2xl border dark:border-base-700/50 border-light-border dark:bg-base-900/40 bg-white/60 p-6"
          >
            <h2 class="font-display text-base font-bold dark:text-white text-light-text">
              {{ t("legal.contactTitle") }}
            </h2>
            <p class="mt-2 text-sm dark:text-text-secondary text-light-muted leading-relaxed">
              {{ t("legal.contactText") }}
            </p>
            <dl class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <dt class="text-xs uppercase tracking-wide dark:text-base-600 text-light-muted/70">
                  {{ t("legal.entityLabel") }}
                </dt>
                <dd class="dark:text-white text-light-text mt-0.5">{{ legalEntity.legalName }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide dark:text-base-600 text-light-muted/70">
                  RFC
                </dt>
                <dd class="dark:text-white text-light-text mt-0.5">{{ legalEntity.rfc }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide dark:text-base-600 text-light-muted/70">
                  {{ t("legal.regimeLabel") }}
                </dt>
                <dd class="dark:text-white text-light-text mt-0.5">
                  {{ locale === "es" ? legalEntity.regime : legalEntity.regimeEn }}
                </dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide dark:text-base-600 text-light-muted/70">
                  {{ t("legal.emailLabel") }}
                </dt>
                <dd class="mt-0.5">
                  <a :href="siteLinks.email" class="text-brand-500 hover:text-brand-400">
                    {{ legalEntity.email }}
                  </a>
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-xs uppercase tracking-wide dark:text-base-600 text-light-muted/70">
                  {{ t("legal.addressLabel") }}
                </dt>
                <dd class="dark:text-white text-light-text mt-0.5">
                  {{ locale === "es" ? legalEntity.address : legalEntity.addressEn }}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";
import AmbientGlow from "../components/ui/AmbientGlow.vue";
import { legalDocs, legalDocBySlug, legalEntity } from "../data/legal.js";
import { siteLinks } from "../data/site.js";

const route = useRoute();
const { t, locale } = useI18n();

// El slug llega por meta de la ruta (rutas explícitas, no dinámicas, para SEO).
const doc = computed(() => legalDocBySlug[route.meta.legalSlug] ?? legalDocs[0]);

// Los documentos legales usan sufijos Es/En igual que salesCatalog.js.
const pick = (obj, field) => {
  const suffix = locale.value === "es" ? "Es" : "En";
  return obj?.[`${field}${suffix}`];
};
</script>
