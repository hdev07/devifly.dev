<template>
  <div data-animate :class="['mb-12 sm:mb-16', align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl']">
    <div
      class="flex items-center gap-3 mb-5"
      :class="align === 'center' ? 'justify-center' : ''"
    >
      <span class="block w-8 h-px bg-gradient-to-r from-brand-500 to-cyan-glow"></span>
      <span class="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-400">
        {{ eyebrow }}
      </span>
      <span
        v-if="align === 'center'"
        class="block w-8 h-px bg-gradient-to-l from-brand-500 to-cyan-glow"
      ></span>
    </div>
    <h2
      class="font-display font-bold dark:text-white text-light-text leading-[1.08] tracking-tight"
      :style="`font-size: clamp(${minSize}, ${vw}, ${maxSize})`"
    >
      <slot name="title">{{ title }}</slot>
    </h2>
    <p
      v-if="$slots.subtitle || subtitle"
      class="mt-5 text-base sm:text-lg dark:text-text-secondary text-light-muted leading-relaxed"
      :class="align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'"
    >
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  align: { type: String, default: "left" },
  minSize: { type: String, default: "2rem" },
  maxSize: { type: String, default: "3.5rem" },
  vw: { type: String, default: "5vw" },
});
</script>
