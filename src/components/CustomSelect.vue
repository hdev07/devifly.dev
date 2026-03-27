<template>
  <div ref="wrapper" class="relative">
    <button
      type="button"
      @click="open = !open"
      class="w-full flex items-center justify-between px-4 py-3 rounded-xl dark:bg-base-800/60 bg-light-surface border transition-colors text-left text-sm"
      :class="
        open
          ? 'border-brand-500 dark:border-brand-500'
          : 'dark:border-base-700/50 border-light-border'
      "
    >
      <span
        :class="
          modelValue
            ? 'dark:text-white text-light-text'
            : 'dark:text-text-secondary text-light-muted'
        "
      >
        {{ displayLabel }}
      </span>
      <svg
        class="w-4 h-4 dark:text-text-secondary text-light-muted transition-transform duration-200 shrink-0 ml-2"
        :class="{ 'rotate-180': open }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1 scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-1 scale-[0.98]"
    >
      <ul
        v-if="open"
        class="absolute z-50 mt-2 w-full rounded-xl dark:bg-base-800 bg-light-surface border dark:border-base-700/50 border-light-border shadow-xl dark:shadow-black/40 shadow-black/10 py-1.5 max-h-60 overflow-auto"
      >
        <li
          v-for="opt in options"
          :key="opt.value"
          @click="select(opt)"
          class="flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer transition-colors"
          :class="
            modelValue === opt.value
              ? 'dark:bg-brand-500/15 bg-brand-500/10 dark:text-brand-400 text-brand-600 font-medium'
              : 'dark:text-text-secondary text-light-muted dark:hover:bg-base-700/50 hover:bg-light-card dark:hover:text-white hover:text-light-text'
          "
        >
          <span
            v-if="modelValue === opt.value"
            class="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0"
          ></span>
          {{ opt.label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  options: { type: Array, required: true },
  placeholder: { type: String, default: "Select" },
});

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const wrapper = ref(null);

const displayLabel = computed(() => {
  const found = props.options.find((o) => o.value === props.modelValue);
  return found ? found.label : props.placeholder;
});

const select = (opt) => {
  emit("update:modelValue", opt.value);
  open.value = false;
};

const onClickOutside = (e) => {
  if (wrapper.value && !wrapper.value.contains(e.target)) {
    open.value = false;
  }
};

onMounted(() => document.addEventListener("click", onClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
</script>
