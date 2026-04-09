<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useScrollAnimation } from "./composables/useScrollAnimation.js";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import SplashScreen from "./components/SplashScreen.vue";

useScrollAnimation();

const route = useRoute();
const isFullscreen = computed(() => route.meta?.fullscreen === true);
const splashDone = ref(false);
</script>

<template>
  <SplashScreen v-if="!splashDone" @done="splashDone = true" />
  <template v-if="splashDone">
    <Navbar v-if="!isFullscreen" />
    <router-view />
    <Footer v-if="!isFullscreen" />
  </template>
</template>
