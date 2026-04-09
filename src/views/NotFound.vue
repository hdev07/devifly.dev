<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
  >
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-[0.07] bg-brand-500 blur-[120px]"
      ></div>
    </div>

    <div class="relative text-center max-w-lg mx-auto">
      <!-- Eyebrow -->
      <div class="flex items-center justify-center gap-3 mb-6">
        <span class="block w-8 h-px dark:bg-brand-500 bg-brand-600"></span>
        <span
          class="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400"
          >Error 404</span
        >
        <span class="block w-8 h-px dark:bg-brand-500 bg-brand-600"></span>
      </div>

      <!-- Big number -->
      <p
        class="font-display font-bold dark:text-base-600 text-slate-200 select-none leading-none mb-8"
        style="font-size: clamp(7rem, 22vw, 14rem)"
        aria-hidden="true"
      >
        404
      </p>

      <!-- Message -->
      <h1
        class="font-display font-bold dark:text-white text-light-text mb-4"
        style="font-size: clamp(1.5rem, 4vw, 2.25rem)"
      >
        {{ t("notFound.title") }}
      </h1>
      <p
        class="dark:text-text-secondary text-light-muted text-sm leading-relaxed mb-10"
      >
        {{ t("notFound.subtitle") }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 hover:brightness-110 text-white font-semibold text-sm transition-all duration-200"
        >
          <LucideIcon name="house" class-name="w-4 h-4" />
          {{ t("notFound.cta") }}
        </router-link>
        <button
          type="button"
          class="inline-flex items-center gap-2 text-sm font-semibold dark:text-text-secondary text-light-muted hover:text-brand-400 transition-colors"
          @click="$router.go(-1)"
        >
          <LucideIcon name="arrow-left" class-name="w-4 h-4" />
          {{ t("notFound.back") }}
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";

const { t } = useI18n();
</script>
