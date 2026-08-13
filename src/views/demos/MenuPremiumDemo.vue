<template>
  <MenuDemoView :tier="tier" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDemoPlan } from "../../composables/useDemoPlan.js";
import MenuDemoView from "../../components/demos/MenuDemoView.vue";

const route = useRoute();
const tier = computed(() => useDemoPlan(route));
</script>
