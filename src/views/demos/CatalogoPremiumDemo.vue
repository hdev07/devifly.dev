<template>
  <CatalogDemoView :tier="tier" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDemoPlan } from "../../composables/useDemoPlan.js";
import CatalogDemoView from "../../components/demos/CatalogDemoView.vue";

const route = useRoute();
const planToTier = { esencial: "basico", pro: "pro", premium: "premium" };
const tier = computed(() => planToTier[useDemoPlan(route)] ?? "premium");
</script>
