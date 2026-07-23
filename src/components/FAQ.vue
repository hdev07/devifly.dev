<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <!-- LEFT: heading -->
        <div class="lg:col-span-5 lg:sticky lg:top-28">
          <SectionHeader
            class="!mb-6"
            :eyebrow="t('faq.eyebrow')"
            :title="t('faq.title')"
            :subtitle="t('faq.subtitle')"
          />
          <a
            :href="callLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-emerald-950 text-sm font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:brightness-110 transition-all"
          >
            <LucideIcon name="message-circle" class-name="w-4 h-4" />
            {{ t("faq.ask") }}
          </a>
        </div>

        <!-- RIGHT: accordion -->
        <div class="lg:col-span-7" data-animate>
          <Accordion :items="faqItems" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useWhatsApp } from "../composables/useWhatsApp.js";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";
import Accordion from "./ui/Accordion.vue";

const { t, tm, locale } = useI18n();
const { linkFor } = useWhatsApp();

const callLink = computed(() => linkFor("call", locale.value));

// Contenido en src/i18n/{es,en}.js bajo `faq.items`
const faqItems = computed(() => tm("faq.items"));
</script>
