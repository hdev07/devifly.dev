<template>
  <section id="stack" class="py-24 sm:py-32 relative">
    <div class="absolute inset-0 dark:bg-base-900/50 bg-light-card/50"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div data-animate class="text-center mb-16">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text"
        >
          {{ t("stack.title") }}
        </h2>
        <p
          class="mt-4 dark:text-text-secondary text-light-muted max-w-xl mx-auto"
        >
          {{ t("stack.subtitle") }}
        </p>
      </div>

      <!-- Tech categories -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(category, catIndex) in categories"
          :key="category.label"
          data-animate
          :class="`delay-${(catIndex + 1) * 100}`"
        >
          <h3
            class="text-sm font-semibold uppercase tracking-widest dark:text-text-secondary text-light-muted mb-6 text-center md:text-left"
          >
            {{ category.label }}
          </h3>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div
              v-for="tech in category.items"
              :key="tech.name"
              class="group flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-base-800/60 bg-light-surface border dark:border-base-700/50 border-light-border transition-all duration-300 hover:scale-105 hover:border-brand-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <span class="text-lg">{{ tech.icon }}</span>
              <span
                class="text-sm font-medium dark:text-text-primary text-light-text"
                >{{ tech.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const categories = [
  {
    label: "Frontend",
    items: [
      { name: "Vue", icon: "💚" },
      { name: "Nuxt", icon: "⚡" },
      { name: "Tailwind", icon: "🎨" },
      { name: "TypeScript", icon: "🔷" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "NestJS", icon: "🐈" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🔀" },
    ],
  },
];
</script>
