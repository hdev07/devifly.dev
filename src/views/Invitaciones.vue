<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="mail" class-name="w-4 h-4" />
        {{ t("invitacionesPage.badge") }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{ t("invitacionesPage.title") }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{ t("invitacionesPage.subtitle") }}
      </p>
    </div>

    <!-- Pricing grid -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Basic -->
        <div
          class="flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div class="p-8 flex-1">
            <h2
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
            >
              Basic
            </h2>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{ t("invitacionesPage.packages.basic.tagline") }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$499</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <p
              class="text-xs dark:text-text-secondary text-light-muted mb-4 font-semibold"
            >
              {{ t("invitacionesPage.packages.basic.summary") }}
            </p>
            <ul class="space-y-3 mb-8">
              <li
                v-for="f in basicFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
            <p class="text-xs text-red-500/80 mb-2 font-semibold">
              <span class="inline-flex items-center gap-2">
                <LucideIcon name="x" class-name="w-4 h-4" />
                {{ t("invitacionesPage.packages.basic.excluded") }}
              </span>
            </p>
            <p
              class="text-xs dark:text-text-secondary/60 text-light-muted/60 mb-2"
            >
              {{ t("invitacionesPage.packages.basic.validity") }}
            </p>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/invitaciones/basic"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="search" class-name="w-4 h-4" />{{
                  t("invitacionesPage.actions.viewDemo")
                }}</span
              >
            </router-link>
            <a
              :href="waBasic"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-brand-500 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("invitacionesPage.actions.hirePackage")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>

        <!-- Pro — highlighted -->
        <div
          class="flex flex-col rounded-2xl border-2 border-brand-500 overflow-hidden relative"
          style="
            background: linear-gradient(
              145deg,
              rgba(59, 130, 246, 0.06),
              rgba(34, 211, 238, 0.04)
            );
          "
        >
          <div
            class="absolute top-0 right-0 py-1.5 px-4 bg-brand-500 text-white text-xs font-bold rounded-bl-xl"
          >
            <span class="inline-flex items-center gap-1"
              >{{ t("invitacionesPage.packages.pro.badge") }}
              <LucideIcon name="flame" class-name="w-3.5 h-3.5"
            /></span>
          </div>
          <div class="p-8 flex-1 pt-10">
            <h2
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-1"
            >
              Pro
            </h2>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{ t("invitacionesPage.packages.pro.tagline") }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$899</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <p
              class="text-xs dark:text-text-secondary text-light-muted mb-4 font-semibold"
            >
              {{ t("invitacionesPage.packages.pro.summary") }}
            </p>
            <ul class="space-y-3 mb-8">
              <li
                v-for="f in proFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/invitaciones/pro"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500 text-white font-bold hover:bg-brand-600 transition text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="search" class-name="w-4 h-4" />{{
                  t("invitacionesPage.actions.viewDemo")
                }}</span
              >
            </router-link>
            <a
              :href="waPro"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("invitacionesPage.actions.hirePackage")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>

        <!-- Premium VIP -->
        <div
          class="relative flex flex-col rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 py-1.5 px-4 bg-violet-500 text-white text-xs font-bold rounded-bl-xl z-10"
          >
            <span class="inline-flex items-center gap-1"
              >{{ t("invitacionesPage.packages.premium.badge") }}
              <LucideIcon name="gem" class-name="w-3.5 h-3.5"
            /></span>
          </div>
          <div class="p-8 flex-1 pt-10">
            <div class="flex items-center gap-2 mb-1">
              <h2
                class="font-display text-2xl font-bold dark:text-white text-light-text"
              >
                Premium
              </h2>
            </div>
            <p
              class="text-sm dark:text-text-secondary text-light-muted mb-2 font-medium"
            >
              {{ t("invitacionesPage.packages.premium.tagline") }}
            </p>
            <div class="mb-6">
              <span
                class="font-display text-3xl font-bold dark:text-white text-light-text"
                >$1,599</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <p
              class="text-xs dark:text-text-secondary text-light-muted mb-4 font-semibold"
            >
              {{ t("invitacionesPage.packages.premium.summary") }}
            </p>
            <ul class="space-y-3 mb-8">
              <li
                v-for="f in premiumFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
          </div>
          <div class="px-8 pb-8 flex flex-col gap-3">
            <router-link
              to="/invitaciones/premium"
              class="block w-full text-center px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                ><LucideIcon name="search" class-name="w-4 h-4" />{{
                  t("invitacionesPage.actions.viewDemo")
                }}</span
              >
            </router-link>
            <a
              :href="waPremium"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-4 py-3 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("invitacionesPage.actions.hirePackage")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ / comparison -->
    <div
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6"
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-2xl font-bold dark:text-white text-light-text text-center mb-12"
        >
          {{ t("invitacionesPage.comparison.title") }}
        </h2>
        <div
          class="overflow-x-auto rounded-2xl border dark:border-base-700/50 border-light-border"
        >
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b dark:border-base-700/50 border-light-border">
                <th
                  class="text-left py-4 px-6 dark:text-text-secondary text-light-muted font-medium"
                >
                  {{ t("invitacionesPage.comparison.featureLabel") }}
                </th>
                <th
                  class="text-center py-4 px-4 dark:text-white text-light-text font-semibold whitespace-nowrap"
                >
                  Basic
                </th>
                <th
                  class="text-center py-4 px-4 text-brand-500 font-semibold whitespace-nowrap"
                >
                  Pro
                </th>
                <th
                  class="text-center py-4 px-4 text-violet-400 font-semibold whitespace-nowrap"
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.feature"
                class="border-b dark:border-base-700/30 border-light-border last:border-0 hover:bg-brand-500/5 transition-colors"
              >
                <td
                  class="py-3 px-6 dark:text-text-secondary text-light-muted whitespace-nowrap"
                >
                  {{ row.feature }}
                </td>
                <td class="py-3 px-4 text-center">
                  <LucideIcon
                    v-if="row.basic === 'check'"
                    :name="row.basic"
                    class-name="w-4 h-4 mx-auto text-light-muted dark:text-text-secondary"
                  />
                  <span v-else class="text-light-muted dark:text-text-secondary"
                    >-</span
                  >
                </td>
                <td class="py-3 px-4 text-center text-brand-500/90 font-medium">
                  <LucideIcon
                    v-if="row.pro === 'check'"
                    :name="row.pro"
                    class-name="w-4 h-4 mx-auto text-brand-500"
                  />
                  <span v-else>-</span>
                </td>
                <td
                  class="py-3 px-4 text-center text-violet-400/90 font-medium"
                >
                  <LucideIcon
                    v-if="row.premium === 'check'"
                    :name="row.premium"
                    class-name="w-4 h-4 mx-auto text-violet-400"
                  />
                  <span v-else>-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4"
      >
        {{ t("invitacionesPage.cta.title") }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{ t("invitacionesPage.cta.subtitle") }}
      </p>
      <a
        :href="waCta"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{ t("invitacionesPage.cta.button") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </a>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";

const { t, tm, locale } = useI18n();

const waBasic = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Me interesa contratar el Plan Basic de invitaciones digitales ($499 MXN) 💌")}`;
const waPro = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Me interesa contratar el Plan Pro de invitaciones digitales ($899 MXN) ✨")}`;
const waPremium = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Me interesa contratar el Plan Premium de invitaciones digitales ($1,599 MXN) 💎")}`;
const waCta = `https://wa.me/+525583414659?text=${encodeURIComponent("¡Hola! Quiero más información sobre las invitaciones digitales de Devifly 💌")}`;

const basicFeats = computed(() => {
  locale.value;
  return tm("invitacionesPage.packages.basic.features");
});

const proFeats = computed(() => {
  locale.value;
  return tm("invitacionesPage.packages.pro.features");
});

const premiumFeats = computed(() => {
  locale.value;
  return tm("invitacionesPage.packages.premium.features");
});

const comparisonRows = computed(() => {
  locale.value;
  return tm("invitacionesPage.comparison.rows");
});
</script>
