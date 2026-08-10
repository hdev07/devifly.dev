<template>
  <section class="relative py-28 sm:py-36 overflow-hidden">
    <AmbientGlow variant="intense" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="relative rounded-3xl border dark:border-brand-500/25 border-brand-500/30 dark:bg-base-900/70 bg-light-surface/95 backdrop-blur-xl overflow-hidden">
        <!-- Decorative gradient + ring -->
        <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-cyan-glow/10 pointer-events-none"></div>
        <div aria-hidden="true" class="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[100px] animate-glow-pulse pointer-events-none"></div>
        <div aria-hidden="true" class="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-violet-soft/15 blur-[100px] animate-glow-pulse pointer-events-none" style="animation-delay: 1s;"></div>

        <div class="relative p-8 sm:p-12 lg:p-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-7" data-animate>
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-brand-500/15 bg-brand-500/10 border dark:border-brand-500/30 border-brand-500/40 mb-6">
                <span class="block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-400">
                  {{ t("ctaFinal.badge") }}
                </span>
              </div>

              <!-- Headline -->
              <h2 class="font-display font-bold dark:text-white text-light-text leading-[1.05] tracking-tight" style="font-size: clamp(2.2rem, 5.5vw, 4rem)">
                {{ t("ctaFinal.title1") }}
                <span class="text-gradient"> {{ t("ctaFinal.titleGradient") }} </span>
                {{ t("ctaFinal.title2") }}
              </h2>

              <p class="mt-6 text-base sm:text-lg dark:text-text-secondary text-light-muted leading-relaxed max-w-xl">
                {{ t("ctaFinal.subtitle") }}
              </p>

              <!-- Inclusions -->
              <ul class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li v-for="incl in inclusions" :key="incl.icon" class="flex items-center gap-3 text-sm dark:text-white text-light-text">
                  <div class="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
                    <LucideIcon :name="incl.icon" class-name="w-4 h-4 text-emerald-400" />
                  </div>
                  <span>{{ t(`ctaFinal.inclusions.${incl.key}`) }}</span>
                </li>
              </ul>

              <!-- CTA row -->
              <div class="mt-10 flex flex-wrap items-center gap-4">
                <BaseButton :href="callLink" size="lg" arrow>
                  <LucideIcon name="message-circle" class-name="w-5 h-5" />
                  {{ t("ctaFinal.ctaBook") }}
                </BaseButton>
                <span class="text-sm dark:text-text-secondary text-light-muted">
                  {{ t("ctaFinal.reply24") }}
                </span>
              </div>
            </div>

            <!-- RIGHT: testimonial / spotlight -->
            <div class="lg:col-span-5" data-animate>
              <div class="relative rounded-2xl border dark:border-white/10 border-light-border dark:bg-base-900/60 bg-light-surface backdrop-blur-xl p-7 shadow-glass-hover">
                <LucideIcon name="quote" class-name="w-8 h-8 text-brand-400/40 mb-4" />
                <p class="font-display text-lg sm:text-xl dark:text-white text-light-text leading-relaxed mb-6">
                  {{ t("ctaFinal.quote") }}
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-cyan-glow flex items-center justify-center font-display font-bold text-white">
                    MB
                  </div>
                  <div>
                    <div class="font-semibold text-sm dark:text-white text-light-text">
                      MoviBase
                    </div>
                    <div class="text-xs dark:text-text-secondary text-light-muted">
                      SaaS en producción · movibase.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useWhatsApp } from "../composables/useWhatsApp.js";
import LucideIcon from "./LucideIcon.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";
import BaseButton from "./ui/BaseButton.vue";

const { t, locale } = useI18n();
const { linkFor } = useWhatsApp();

const callLink = computed(() => linkFor("call", locale.value));

// Textos en src/i18n/{es,en}.js bajo `ctaFinal.inclusions.<key>`
const inclusions = [
  { key: "diagnosis", icon: "compass" },
  { key: "recommendation", icon: "lightbulb" },
  { key: "estimate", icon: "calculator" },
  { key: "roadmap", icon: "calendar-check" },
];
</script>
