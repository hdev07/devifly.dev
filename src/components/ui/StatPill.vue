<template>
  <div class="flex flex-col">
    <span
      class="font-display font-bold dark:text-white text-light-text tabular-nums leading-none"
      :style="`font-size: ${size}`"
    >
      <span v-if="prefix" class="text-brand-400">{{ prefix }}</span>{{ value }}<span v-if="suffix" class="text-brand-400">{{ suffix }}</span>
    </span>
    <span class="mt-2 text-[11px] uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
  prefix: { type: String, default: "" },
  suffix: { type: String, default: "" },
  size: { type: String, default: "2rem" },
});
</script>
