<template>
  <section id="projects" class="py-24 sm:py-32 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div data-animate class="text-center mb-16">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text"
        >
          {{ t("projects.title") }}
        </h2>
        <p
          class="mt-4 dark:text-text-secondary text-light-muted max-w-xl mx-auto"
        >
          {{ t("projects.subtitle") }}
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in 3"
          :key="index"
          data-animate
          class="group relative rounded-2xl overflow-hidden dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
          :class="`delay-${(index + 1) * 100}`"
        >
          <!-- Card top gradient bar -->
          <div class="h-1 w-full" :class="gradients[index]"></div>

          <div class="p-8">
            <!-- Project icon / placeholder -->
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110"
              :class="iconBgs[index]"
            >
              {{ icons[index] }}
            </div>

            <h3
              class="font-display text-xl font-semibold dark:text-white text-light-text mb-3"
            >
              {{ t(`projects.items[${index}].name`) }}
            </h3>

            <p
              class="dark:text-text-secondary text-light-muted text-sm leading-relaxed mb-6"
            >
              {{ t(`projects.items[${index}].desc`) }}
            </p>

            <!-- Tech stack tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in getTech(index)"
                :key="tech"
                class="text-xs px-3 py-1 rounded-full dark:bg-base-700/60 bg-light-card dark:text-text-secondary text-light-muted border dark:border-base-600/50 border-light-border"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const gradients = [
  "bg-gradient-to-r from-brand-500 to-cyan-glow",
  "bg-gradient-to-r from-cyan-glow to-neon",
  "bg-gradient-to-r from-violet-soft to-brand-500",
];

const iconBgs = ["bg-brand-500/10", "bg-cyan-glow/10", "bg-violet-soft/10"];

const icons = ["🎬", "📖", "📊"];

function getTech(index) {
  const items = tm("projects.items");
  return items[index]?.tech || [];
}
</script>
