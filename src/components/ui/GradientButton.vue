<template>
  <component
    :is="resolvedTag"
    v-bind="bindings"
    class="group inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-300 select-none"
    :class="[
      sizeClasses,
      variant === 'primary'
        ? 'rounded-full bg-gradient-to-r from-brand-500 via-brand-500 to-cyan-glow text-white shadow-[0_8px_30px_rgba(59,130,246,0.25)] hover:shadow-[0_12px_45px_rgba(59,130,246,0.45)] hover:brightness-110'
        : '',
      variant === 'secondary'
        ? 'rounded-full dark:bg-white/8 bg-light-card dark:text-white text-light-text border dark:border-white/12 border-light-border hover:dark:border-brand-500/40 hover:border-brand-500/50 backdrop-blur-md'
        : '',
      variant === 'ghost'
        ? 'rounded-full dark:text-text-secondary text-light-muted hover:dark:text-white hover:text-light-text'
        : '',
      variant === 'whatsapp'
        ? 'rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_45px_rgba(37,211,102,0.45)] hover:brightness-110'
        : '',
    ]"
  >
    <slot name="leading" />
    <slot />
    <span
      v-if="!hideArrow && variant !== 'ghost'"
      aria-hidden="true"
      class="transition-transform group-hover:translate-x-0.5"
    >→</span>
    <slot name="trailing" />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  variant: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "secondary", "ghost", "whatsapp"].includes(v),
  },
  hideArrow: { type: Boolean, default: false },
  external: { type: Boolean, default: false },
});

const resolvedTag = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "button";
});

const bindings = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href) {
    return props.external
      ? { href: props.href, target: "_blank", rel: "noopener noreferrer" }
      : { href: props.href };
  }
  return { type: "button" };
});

const sizeClasses = computed(() => {
  if (props.size === "sm") return "px-4 py-2 text-xs";
  if (props.size === "lg") return "px-8 py-4 text-sm sm:text-base";
  return "px-6 py-3 text-sm";
});
</script>
