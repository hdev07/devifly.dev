<template>
  <section id="how" class="py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section header — left-aligned -->
      <div data-animate class="mb-16 sm:mb-20">
        <div class="flex items-center gap-3 mb-5">
          <span class="block w-10 h-px dark:bg-brand-500 bg-brand-600"></span>
          <span
            class="text-xs font-semibold tracking-[0.18em] uppercase text-brand-400"
            >{{ locale === "es" ? "Proceso" : "Process" }}</span
          >
        </div>
        <h2
          class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text leading-tight"
        >
          {{ t("howWeWork.title") }}
        </h2>
        <p
          class="mt-4 dark:text-text-secondary text-light-muted max-w-lg leading-relaxed"
        >
          {{ t("howWeWork.subtitle") }}
        </p>
      </div>

      <!-- Steps -->
      <div class="divide-y dark:divide-base-800/80 divide-light-border">
        <div
          v-for="(step, i) in steps"
          :key="i"
          data-animate
          class="group relative py-8 sm:py-10 flex gap-6 sm:gap-10 items-start -mx-3 px-3 rounded-xl transition-colors duration-200 hover:dark:bg-base-800/25 hover:bg-light-card/60"
          :class="`delay-${(i + 1) * 75}`"
        >
          <!-- Big step number (decorative) -->
          <span
            class="font-display font-bold leading-none dark:text-base-800 text-light-border group-hover:dark:text-base-700 group-hover:text-light-card transition-colors tabular-nums select-none shrink-0 w-16 sm:w-20 text-right"
            style="font-size: clamp(2.5rem, 6vw, 4.5rem)"
          >
            {{ step.badge }}
          </span>

          <!-- Content -->
          <div class="pt-1 flex-1 min-w-0">
            <h3
              class="font-display text-lg sm:text-xl font-bold dark:text-white text-light-text mb-2"
            >
              {{ step.title }}
            </h3>
            <p
              class="dark:text-text-secondary text-light-muted leading-relaxed text-sm sm:text-base"
            >
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const steps = computed(() => [
  {
    badge: "01",
    title: t("howWeWork.steps[0].title"),
    desc: t("howWeWork.steps[0].desc"),
  },
  {
    badge: "02",
    title: t("howWeWork.steps[1].title"),
    desc: t("howWeWork.steps[1].desc"),
  },
  {
    badge: "03",
    title: t("howWeWork.steps[2].title"),
    desc: t("howWeWork.steps[2].desc"),
  },
  {
    badge: "04",
    title: t("howWeWork.steps[3].title"),
    desc: t("howWeWork.steps[3].desc"),
  },
  {
    badge: "05",
    title: t("howWeWork.steps[4].title"),
    desc: t("howWeWork.steps[4].desc"),
  },
]);
</script>
