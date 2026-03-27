<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useScrollAnimation } from "./composables/useScrollAnimation.js";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

useScrollAnimation();

const route = useRoute();
const isFullscreen = computed(() => route.meta?.fullscreen === true);
</script>

<template>
  <Navbar v-if="!isFullscreen" />
  <router-view />
  <Footer v-if="!isFullscreen" />
</template>
