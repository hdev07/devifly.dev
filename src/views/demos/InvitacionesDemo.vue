<template>
  <component :is="demoComponent" :key="planKey" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDemoPlan } from "../../composables/useDemoPlan.js";
import InvitacionBasic from "./InvitacionBasic.vue";
import InvitacionPro from "./InvitacionPro.vue";
import InvitacionPremium from "./InvitacionPremium.vue";

const route = useRoute();

const demosByPlan = {
  esencial: InvitacionBasic,
  pro: InvitacionPro,
  premium: InvitacionPremium,
};

const planKey = computed(() => useDemoPlan(route));
const demoComponent = computed(() => demosByPlan[planKey.value]);
</script>
