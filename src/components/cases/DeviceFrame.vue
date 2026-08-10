<template>
  <div
    class="device-frame relative mx-auto"
    :class="[sizeClass, tilted ? 'device-tilt' : '']"
    :style="tiltStyle"
  >
    <div
      class="relative h-full w-full rounded-[2rem] sm:rounded-[2.35rem] border border-white/15 bg-zinc-950 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)] overflow-hidden"
    >
      <!-- Side buttons -->
      <span
        aria-hidden="true"
        class="absolute -left-[2px] top-[18%] h-8 w-[3px] rounded-l-full bg-zinc-700"
      />
      <span
        aria-hidden="true"
        class="absolute -left-[2px] top-[28%] h-12 w-[3px] rounded-l-full bg-zinc-700"
      />
      <span
        aria-hidden="true"
        class="absolute -right-[2px] top-[24%] h-16 w-[3px] rounded-r-full bg-zinc-700"
      />

      <!-- Bezel -->
      <div class="absolute inset-[7px] sm:inset-[8px] rounded-[1.65rem] sm:rounded-[1.9rem] overflow-hidden bg-black">
        <div
          aria-hidden="true"
          class="absolute top-2 left-1/2 z-10 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black"
        />
        <img
          v-if="src"
          :src="src"
          :alt="alt"
          class="h-full w-full object-cover object-top"
          :class="imgClass"
          loading="lazy"
          decoding="async"
        />
        <slot v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  src: { type: String, default: "" },
  alt: { type: String, default: "" },
  /** sm | md | lg */
  size: { type: String, default: "md" },
  tilted: { type: Boolean, default: false },
  /** degrees, only when tilted */
  tilt: { type: Number, default: -6 },
  imgClass: { type: String, default: "" },
});

const sizeClass = computed(() => {
  if (props.size === "sm") return "w-[140px] sm:w-[160px] aspect-[9/19.5]";
  if (props.size === "lg") return "w-[220px] sm:w-[260px] aspect-[9/19.5]";
  return "w-[180px] sm:w-[200px] aspect-[9/19.5]";
});

const tiltStyle = computed(() =>
  props.tilted ? { transform: `rotate(${props.tilt}deg)` } : undefined,
);
</script>

<style scoped>
.device-tilt {
  transform-origin: center bottom;
}
</style>
