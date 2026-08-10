<template>
  <MenuDemoView :tier="tier" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MenuDemoView from "../../components/demos/MenuDemoView.vue";

const route = useRoute();
const validTiers = ["esencial", "pro", "premium"];
const tier = computed(() =>
  validTiers.includes(route.query.plan) ? route.query.plan : "premium",
);
</script>
