<template>
  <section id="process" class="py-24 sm:py-32 relative">
    <!-- Subtle bg -->
    <div class="absolute inset-0 dark:bg-base-900/50 bg-light-card/50"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div data-animate class="text-center mb-16">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text"
        >
          {{ t("process.title") }}
        </h2>
        <p
          class="mt-4 dark:text-text-secondary text-light-muted max-w-xl mx-auto"
        >
          {{ t("process.subtitle") }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="index"
          data-animate
          class="relative"
          :class="`delay-${(index + 1) * 100}`"
        >
          <!-- Connector line (desktop) -->
          <div
            v-if="index < steps.length - 1"
            class="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px dark:bg-base-700 bg-light-border"
          ></div>

          <div class="text-center lg:text-left">
            <!-- Step number -->
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 hover:scale-110"
              :class="stepStyles[index]"
            >
              <span class="font-display text-2xl font-bold">{{
                String(index + 1).padStart(2, "0")
              }}</span>
            </div>

            <h3
              class="font-display text-lg font-semibold dark:text-white text-light-text mb-2"
            >
              {{ t(`process.steps[${index}].title`) }}
            </h3>
            <p
              class="dark:text-text-secondary text-light-muted text-sm leading-relaxed"
            >
              {{ t(`process.steps[${index}].desc`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const steps = [0, 1, 2, 3];

const stepStyles = [
  "bg-brand-500/10 text-brand-600 dark:text-brand-500 border border-brand-500/30 dark:border-brand-500/20",
  "dark:bg-cyan-glow/10 bg-cyan-500/10 text-cyan-700 dark:text-cyan-glow border border-cyan-500/30 dark:border-cyan-glow/20",
  "dark:bg-violet-soft/10 bg-violet-500/10 text-violet-600 dark:text-violet-soft border border-violet-500/30 dark:border-violet-soft/20",
  "dark:bg-neon/10 bg-emerald-500/10 text-emerald-700 dark:text-neon border border-emerald-500/30 dark:border-neon/20",
];
</script>
