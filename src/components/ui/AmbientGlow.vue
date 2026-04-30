<template>
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      v-for="(blob, i) in resolvedBlobs"
      :key="i"
      class="absolute rounded-full will-change-transform"
      :class="[blob.color, blob.size, blob.position, blob.blur, blob.animate ? 'animate-glow-pulse' : '']"
      :style="blob.delay ? `animation-delay: ${blob.delay}` : ''"
    ></div>
    <div
      v-if="grid"
      class="absolute inset-0 dark:opacity-[0.025] opacity-[0.04]"
      style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 44px 44px;"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (v) => ["default", "intense", "subtle", "split"].includes(v),
  },
  grid: { type: Boolean, default: false },
});

const presets = {
  default: [
    { color: "bg-brand-500/10", size: "w-[700px] h-[700px]", position: "-top-40 -left-40", blur: "blur-[160px]", animate: true },
    { color: "bg-violet-soft/8", size: "w-[500px] h-[500px]", position: "bottom-0 right-0", blur: "blur-[120px]", animate: true, delay: "500ms" },
  ],
  intense: [
    { color: "bg-brand-500/15", size: "w-[900px] h-[900px]", position: "-top-32 -left-20", blur: "blur-[180px]", animate: true },
    { color: "bg-cyan-glow/10", size: "w-[600px] h-[600px]", position: "top-1/3 right-0", blur: "blur-[140px]", animate: true, delay: "300ms" },
    { color: "bg-violet-soft/8", size: "w-[500px] h-[500px]", position: "bottom-0 left-1/4", blur: "blur-[120px]", animate: true, delay: "700ms" },
  ],
  subtle: [
    { color: "bg-brand-500/5", size: "w-[500px] h-[500px]", position: "top-1/4 left-1/4", blur: "blur-[120px]", animate: false },
    { color: "bg-violet-soft/5", size: "w-[400px] h-[400px]", position: "bottom-1/4 right-1/4", blur: "blur-[100px]", animate: false },
  ],
  split: [
    { color: "bg-brand-500/12", size: "w-[600px] h-[600px]", position: "top-0 -left-40", blur: "blur-[150px]", animate: true },
    { color: "bg-cyan-glow/10", size: "w-[500px] h-[500px]", position: "bottom-0 -right-40", blur: "blur-[130px]", animate: true, delay: "400ms" },
  ],
};

const resolvedBlobs = computed(() => presets[props.variant] || presets.default);
</script>
