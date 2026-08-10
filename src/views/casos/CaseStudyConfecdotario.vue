<script setup>
import CaseStudyLayout from "../../components/cases/CaseStudyLayout.vue";
import { confecdotarioCase } from "../../data/cases/confecdotario.js";
</script>

<template>
  <CaseStudyLayout :study="confecdotarioCase" />
</template>
