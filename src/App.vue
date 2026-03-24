<script setup>
import { useScrollAnimation } from "./composables/useScrollAnimation.js";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
import Process from "./components/Process.vue";
import Projects from "./components/Projects.vue";
import TechStack from "./components/TechStack.vue";
import WorkWithMe from "./components/WorkWithMe.vue";
import CTA from "./components/CTA.vue";
import Footer from "./components/Footer.vue";

useScrollAnimation();
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <Services />
    <Process />
    <Projects />
    <TechStack />
    <WorkWithMe />
    <CTA />
  </main>
  <Footer />
</template>
