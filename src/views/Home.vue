<script setup>
import Hero from "../components/Hero.vue";
import TrustBar from "../components/TrustBar.vue";
import ServicesPSR from "../components/ServicesPSR.vue";
import WhyDevifly from "../components/WhyDevifly.vue";
import CaseStudiesTeaser from "../components/CaseStudiesTeaser.vue";
import HowWeWork from "../components/HowWeWork.vue";
import TopSellers from "../components/TopSellers.vue";
import ROICalculator from "../components/ROICalculator.vue";
import PricingTeaser from "../components/PricingTeaser.vue";
import LeadMagnet from "../components/LeadMagnet.vue";
import FAQ from "../components/FAQ.vue";
import FounderSection from "../components/FounderSection.vue";
import CTAFinal from "../components/CTAFinal.vue";
</script>

<template>
  <main>
    <!-- 1. Hero above the fold -->
    <Hero />
    <!-- 2. Trust bar -->
    <TrustBar />
    <!-- 3. Services with Problem -> Solution -> Result -->
    <ServicesPSR />
    <!-- 4. Why Devifly comparison table -->
    <WhyDevifly />
    <!-- 5. Case studies -->
    <CaseStudiesTeaser />
    <!-- 6. Process (4 steps) -->
    <HowWeWork />
    <!-- 7. Packaged products -->
    <TopSellers />
    <!-- ROI Calculator (between products and pricing) -->
    <ROICalculator />
    <!-- 8. Pricing -->
    <PricingTeaser />
    <!-- Lead magnet (free audit) -->
    <LeadMagnet />
    <!-- 9. FAQ + Founder -->
    <FAQ />
    <FounderSection />
    <!-- 10. Final CTA: strategy session -->
    <CTAFinal />
  </main>
</template>
