<template>
  <component
    :is="tag"
    class="glass-card group relative rounded-2xl border backdrop-blur-xl transition-all duration-500"
    :class="[
      tone === 'default'
        ? 'dark:bg-base-900/55 bg-light-surface/85 dark:border-white/8 border-light-border'
        : '',
      tone === 'subtle'
        ? 'dark:bg-base-900/35 bg-light-surface/70 dark:border-white/6 border-light-border'
        : '',
      tone === 'highlight'
        ? 'dark:bg-base-900/70 bg-light-surface dark:border-brand-500/25 border-brand-500/30'
        : '',
      hover ? 'hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover' : '',
      padding,
    ]"
  >
    <div
      v-if="glow"
      aria-hidden="true"
      class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style="background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(59,130,246,0.08), transparent 40%);"
    ></div>
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: "div" },
  tone: {
    type: String,
    default: "default",
    validator: (v) => ["default", "subtle", "highlight"].includes(v),
  },
  hover: { type: Boolean, default: true },
  glow: { type: Boolean, default: false },
  padding: { type: String, default: "p-6 sm:p-7" },
});
</script>
