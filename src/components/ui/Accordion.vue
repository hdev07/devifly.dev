<template>
  <div class="divide-y dark:divide-white/8 divide-light-border rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/40 bg-light-surface/80 backdrop-blur-xl overflow-hidden">
    <div v-for="(item, i) in items" :key="i" class="group">
      <button
        type="button"
        @click="toggle(i)"
        class="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-5 sm:py-6 text-left transition-colors hover:dark:bg-white/3 hover:bg-light-card/50"
        :aria-expanded="open === i ? 'true' : 'false'"
      >
        <span class="font-display text-base sm:text-lg font-semibold dark:text-white text-light-text">
          {{ item.q }}
        </span>
        <span
          class="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border dark:border-white/15 border-light-border dark:bg-base-800/60 bg-light-card transition-transform duration-300"
          :class="open === i ? 'rotate-45 dark:bg-brand-500/15 bg-brand-500/10 dark:border-brand-500/30 border-brand-500/40' : ''"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" :class="open === i ? 'text-brand-400' : 'dark:text-text-secondary text-light-muted'">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
        </span>
      </button>
      <div
        class="grid transition-all duration-500 ease-out"
        :class="open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="overflow-hidden">
          <p class="px-6 sm:px-8 pb-6 text-sm sm:text-base dark:text-text-secondary text-light-muted leading-relaxed max-w-3xl">
            {{ item.a }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  items: { type: Array, required: true },
});

const open = ref(0);

const toggle = (i) => {
  open.value = open.value === i ? -1 : i;
};
</script>
