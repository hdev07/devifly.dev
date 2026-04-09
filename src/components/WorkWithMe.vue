<template>
  <section id="contact" class="py-24 sm:py-32 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header — left-aligned -->
      <div data-animate class="mb-14">
        <div class="flex items-center gap-3 mb-5">
          <span class="block w-8 h-px dark:bg-brand-500 bg-brand-600"></span>
          <span
            class="text-xs font-semibold tracking-[0.18em] uppercase text-brand-400"
            >{{ locale === "es" ? "Colaboración" : "Collaboration" }}</span
          >
        </div>
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text"
        >
          {{ t("workWithMe.title") }}
        </h2>
        <p class="mt-4 dark:text-text-secondary text-light-muted max-w-lg">
          {{ t("workWithMe.subtitle") }}
        </p>
      </div>

      <!-- Options — horizontal cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="(option, index) in 3"
          :key="index"
          data-animate
          class="group relative p-7 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border backdrop-blur-sm transition-all duration-300 hover:border-brand-500/40"
          :class="`delay-${(index + 1) * 100}`"
        >
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>

          <div class="relative">
            <!-- Number + Icon row -->
            <div class="flex items-center justify-between mb-6">
              <span
                class="font-display text-5xl font-bold dark:text-base-800 text-light-border leading-none tabular-nums"
              >
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                :class="optionStyles[index]"
              >
                <component
                  :is="optionIcons[index]"
                  class="w-5 h-5"
                  :class="optionIconColors[index]"
                />
              </div>
            </div>

            <h3
              class="font-display text-lg font-semibold dark:text-white text-light-text mb-2"
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
import { Code2, Handshake, Blocks } from "lucide-vue-next";

const { t, locale } = useI18n();

const optionStyles = [
  "bg-brand-500/10",
  "dark:bg-cyan-glow/10 bg-cyan-500/10",
  "dark:bg-neon/10 bg-emerald-500/10",
];

const optionIconColors = [
  "text-brand-500",
  "dark:text-cyan-glow text-cyan-600",
  "dark:text-neon text-emerald-600",
];

const optionIcons = [Code2, Handshake, Blocks];
</script>
