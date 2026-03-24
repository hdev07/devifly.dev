<template>
  <section id="contact" class="py-24 sm:py-32 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div data-animate class="text-center mb-16">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text"
        >
          {{ t("workWithMe.title") }}
        </h2>
        <p
          class="mt-4 dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
        >
          {{ t("workWithMe.subtitle") }}
        </p>
      </div>

      <!-- Options grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(option, index) in 3"
          :key="index"
          data-animate
          class="group relative p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] text-center"
          :class="`delay-${(index + 1) * 100}`"
        >
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>

          <div class="relative">
            <div
              class="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110"
              :class="optionStyles[index]"
            >
              {{ optionIcons[index] }}
            </div>

            <h3
              class="font-display text-lg font-semibold dark:text-white text-light-text mb-3"
            >
              {{ t(`workWithMe.options[${index}].title`) }}
            </h3>
            <p
              class="dark:text-text-secondary text-light-muted text-sm leading-relaxed"
            >
              {{ t(`workWithMe.options[${index}].desc`) }}
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

const optionStyles = ["bg-brand-500/10", "bg-cyan-glow/10", "bg-neon/10"];

const optionIcons = ["💻", "🤝", "🏗️"];
</script>
