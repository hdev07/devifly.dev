<template>
  <Transition name="splash" @after-leave="$emit('done')">
    <div
      v-if="visible"
      class="fixed inset-0 z-9999 flex flex-col items-center justify-center"
      style="background: #020617"
    >
      <!-- Glow background -->
      <div
        class="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full opacity-20 blur-3xl"
          style="
            background: radial-gradient(
              circle,
              #3b82f6 0%,
              #22d3ee 60%,
              transparent 100%
            );
          "
        ></div>
      </div>

      <!-- Logo -->
      <div class="relative flex flex-col items-center gap-5 splash-content">
        <!-- Icon badge -->
        <div class="relative">
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-white text-2xl shadow-2xl"
            style="background: linear-gradient(135deg, #3b82f6, #22d3ee)"
          >
            D
          </div>
          <div
            class="absolute inset-0 rounded-2xl blur-xl opacity-60"
            style="background: linear-gradient(135deg, #3b82f6, #22d3ee)"
          ></div>
        </div>

        <!-- Wordmark -->
        <div
          class="font-display text-3xl font-semibold text-white tracking-tight"
        >
          devifly<span style="color: #3b82f6">.dev</span>
        </div>

        <!-- Loading bar -->
        <div
          class="w-40 h-0.5 rounded-full overflow-hidden"
          style="background: rgba(255, 255, 255, 0.08)"
        >
          <div
            class="splash-bar h-full rounded-full"
            style="background: linear-gradient(90deg, #3b82f6, #22d3ee)"
          ></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

defineEmits(["done"]);

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 1800);
});
</script>

<style scoped>
.splash-content {
  animation: splash-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes splash-pop {
  from {
    opacity: 0;
    transform: scale(0.88) translateY(12px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.splash-bar {
  animation: splash-fill 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  width: 0%;
}

@keyframes splash-fill {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* Transition out */
.splash-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s cubic-bezier(0.4, 0, 1, 1);
}
.splash-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
