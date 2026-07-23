<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    class="btn group"
    :class="[
      `btn-${variant}`,
      `btn-${size}`,
      `accent-${accent}`,
      block ? 'w-full sm:w-auto justify-center' : '',
    ]"
  >
    <slot />
    <span
      v-if="arrow"
      aria-hidden="true"
      class="transition-transform group-hover:translate-x-1"
      >→</span
    >
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Router destination — renders a <router-link> */
  to: { type: [String, Object], default: null },
  /** External/anchor URL — renders an <a> (http(s) gets target=_blank) */
  href: { type: String, default: null },
  /** primary | secondary | ghost */
  variant: { type: String, default: "primary" },
  /** brand | blue | amber | red | rose | violet | emerald */
  accent: { type: String, default: "brand" },
  /** sm | md | lg */
  size: { type: String, default: "md" },
  /** Append the animated → arrow */
  arrow: { type: Boolean, default: false },
  /** Full width on mobile, auto from sm: up */
  block: { type: Boolean, default: false },
});

const tag = computed(() =>
  props.to ? "router-link" : props.href ? "a" : "button"
);

const linkAttrs = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href) {
    const external = /^https?:\/\//.test(props.href);
    return {
      href: props.href,
      ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
    };
  }
  return { type: "button" };
});
</script>
