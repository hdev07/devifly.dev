<template>
  <section id="services" class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        :eyebrow="t('services.eyebrow')"
        :title="t('services.title')"
        :subtitle="t('services.subtitle')"
      />

      <!-- Service cards: P -> S -> R -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="(svc, i) in services"
          :key="svc.key"
          data-animate
          :class="`delay-${(i + 1) * 100}`"
          class="group relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
        >
          <!-- Top accent bar -->
          <div class="h-1 w-full" :class="svc.accent"></div>

          <div class="p-6 sm:p-7 flex flex-col gap-5 h-full">
            <!-- Icon + title -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                :class="svc.iconBg"
              >
                <LucideIcon :name="svc.icon" :class-name="`w-5 h-5 ${svc.iconColor}`" />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-display text-lg font-bold dark:text-white text-light-text leading-snug">
                  {{ t(`services.items.${svc.key}.title`) }}
                </h3>
                <p class="text-xs uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mt-1">
                  {{ t(`services.items.${svc.key}.tag`) }}
                </p>
              </div>
            </div>

            <!-- Problem -->
            <div class="flex items-start gap-3 p-4 rounded-xl dark:bg-red-500/5 bg-red-500/5 border dark:border-red-400/15 border-red-400/20">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-red-500/15 bg-red-500/10">
                <LucideIcon name="x" class-name="w-3.5 h-3.5 dark:text-red-400 text-red-500" />
              </div>
              <div class="flex-1">
                <span class="text-[10px] font-bold uppercase tracking-[0.18em] dark:text-red-400 text-red-500 block mb-1">
                  {{ t("common.problem") }}
                </span>
                <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                  {{ t(`services.items.${svc.key}.problem`) }}
                </p>
              </div>
            </div>

            <!-- Solution -->
            <div class="flex items-start gap-3 p-4 rounded-xl dark:bg-brand-500/5 bg-brand-500/5 border dark:border-brand-500/20 border-brand-500/25">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-brand-500/15 bg-brand-500/10">
                <LucideIcon name="zap" class-name="w-3.5 h-3.5 text-brand-400" />
              </div>
              <div class="flex-1">
                <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 block mb-1">
                  {{ t("common.solution") }}
                </span>
                <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed">
                  {{ t(`services.items.${svc.key}.solution`) }}
                </p>
              </div>
            </div>

            <!-- Result -->
            <div class="mt-auto flex items-start gap-3 p-4 rounded-xl dark:bg-emerald-500/5 bg-emerald-500/5 border dark:border-emerald-400/20 border-emerald-400/25">
              <div class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center dark:bg-emerald-500/15 bg-emerald-500/10">
                <LucideIcon name="trending-up" class-name="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div class="flex-1">
                <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 block mb-1">
                  {{ t("common.result") }}
                </span>
                <p class="text-sm font-semibold dark:text-white text-light-text leading-relaxed">
                  {{ t(`services.items.${svc.key}.result`) }}
                </p>
              </div>
            </div>

            <!-- CTA -->
            <router-link
              :to="svc.link"
              class="inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-light-card border dark:border-white/8 border-light-border dark:text-white text-light-text text-xs font-semibold transition-all hover:dark:border-brand-500/40 hover:border-brand-500/50 group/cta"
            >
              <span>{{ t(`services.items.${svc.key}.cta`) }}</span>
              <LucideIcon name="arrow-right" class-name="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { t } = useI18n();

// Textos en src/i18n/{es,en}.js bajo `services.items.<key>`
const services = [
  {
    key: "landing",
    icon: "rocket",
    iconBg: "dark:bg-brand-500/15 bg-brand-500/10",
    iconColor: "text-brand-400",
    accent: "bg-gradient-to-r from-brand-500 to-cyan-glow",
    link: "/landing-pages",
  },
  {
    key: "invitaciones",
    icon: "party-popper",
    iconBg: "dark:bg-pink-500/15 bg-pink-500/10",
    iconColor: "dark:text-pink-400 text-pink-500",
    accent: "bg-gradient-to-r from-pink-500 to-violet-soft",
    link: "/invitaciones",
  },
  {
    key: "menus",
    icon: "utensils-crossed",
    iconBg: "dark:bg-amber-500/15 bg-amber-500/10",
    iconColor: "dark:text-amber-400 text-amber-500",
    accent: "bg-gradient-to-r from-amber-500 to-orange-400",
    link: "/menus-digitales",
  },
  {
    key: "salones",
    icon: "tent",
    iconBg: "dark:bg-emerald-500/15 bg-emerald-500/10",
    iconColor: "dark:text-emerald-400 text-emerald-500",
    accent: "bg-gradient-to-r from-emerald-500 to-teal-400",
    link: "/salones-eventos",
  },
  {
    key: "catalogos",
    icon: "shopping-bag",
    iconBg: "dark:bg-violet-500/15 bg-violet-500/10",
    iconColor: "dark:text-violet-300 text-violet-500",
    accent: "bg-gradient-to-r from-violet-soft to-fuchsia-400",
    link: "/catalogos",
  },
  {
    key: "saas",
    icon: "cpu",
    iconBg: "dark:bg-cyan-glow/15 bg-cyan-500/10",
    iconColor: "dark:text-cyan-glow text-cyan-600",
    accent: "bg-gradient-to-r from-cyan-glow to-brand-500",
    link: "/contacto",
  },
];
</script>
