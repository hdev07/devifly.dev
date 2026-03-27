<template>
  <section id="how" class="py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <div data-animate class="text-center mb-16">
        <h2
          class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text mb-4"
        >
          {{ t("howWeWork.title") }}
        </h2>
        <p
          class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
        >
          {{ t("howWeWork.subtitle") }}
        </p>
      </div>

      <div class="relative">
        <!-- Vertical line -->
        <div
          class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px dark:bg-base-700/50 bg-light-border md:-translate-x-px"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(step, i) in steps"
            :key="i"
            data-animate
            class="relative flex items-start gap-6 md:gap-12"
            :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <!-- Dot -->
            <div
              class="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-brand-500 -translate-x-1.5 mt-2 ring-4 dark:ring-base-950 ring-light-bg z-10"
            ></div>

            <!-- Content -->
            <div
              class="ml-14 md:ml-0 md:w-1/2"
              :class="i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'"
            >
              <span class="text-xs font-bold text-brand-500 mb-1 block">{{
                step.badge
              }}</span>
              <h3
                class="font-display text-lg font-bold dark:text-white text-light-text mb-2"
              >
                {{ step.title }}
              </h3>
              <p class="text-sm dark:text-text-secondary text-light-muted">
                {{ step.desc }}
              </p>
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
