<template>
  <section id="services" class="py-24 sm:py-32 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div data-animate class="text-center mb-16">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text"
        >
          {{ t("services.title") }}
        </h2>
        <p
          class="mt-4 dark:text-text-secondary text-light-muted max-w-xl mx-auto"
        >
          {{ t("services.subtitle") }}
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.key"
          data-animate
          class="group relative p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
          :class="`delay-${(index + 1) * 100}`"
        >
          <!-- Glow on hover -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>

          <div class="relative">
            <!-- Icon -->
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
              :class="service.gradient"
            >
              <span class="text-2xl">{{ service.icon }}</span>
            </div>

            <h3
              class="font-display text-xl font-semibold dark:text-white text-light-text mb-3"
            >
              {{ t(`services.${service.key}.title`) }}
            </h3>
            <p
              class="dark:text-text-secondary text-light-muted leading-relaxed"
            >
              {{ t(`services.${service.key}.desc`) }}
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

const services = [
  { key: "product", icon: "🚀", gradient: "from-brand-500/20 to-cyan-glow/20" },
  { key: "saas", icon: "⚡", gradient: "from-cyan-glow/20 to-neon/20" },
  { key: "uiux", icon: "🎨", gradient: "from-violet-soft/20 to-brand-500/20" },
  { key: "api", icon: "🔗", gradient: "from-neon/20 to-brand-500/20" },
];
</script>
