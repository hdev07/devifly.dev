<template>
  <CatalogDemoView :tier="tier" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import CatalogDemoView from "../../components/demos/CatalogDemoView.vue";

const route = useRoute();
const validTiers = { esencial: "basico", pro: "pro", premium: "premium" };
const tier = computed(() => validTiers[route.query.plan] ?? "premium");
</script>
