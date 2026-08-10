<template>
  <section id="demos" class="relative py-24 sm:py-32 overflow-hidden scroll-mt-20">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        :eyebrow="t('demos.eyebrow')"
        :title="t('demos.title')"
        :subtitle="t('demos.subtitle')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <router-link
          v-for="(demo, i) in demos"
          :key="demo.key"
          :to="demo.href"
          data-animate
          :class="`delay-${(i + 1) * 100}`"
          class="group relative rounded-2xl border dark:border-white/8 border-light-border dark:bg-base-900/55 bg-light-surface/85 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:dark:border-brand-500/40 hover:border-brand-500/50 hover:shadow-glass-hover"
        >
          <div
            class="relative aspect-[16/11] overflow-hidden dark:bg-zinc-950 bg-zinc-100"
          >
            <img
              :src="demo.thumb"
              :alt="demo.title[locale]"
              class="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-0"
              loading="lazy"
            />
            <img
              :src="demo.preview"
              :alt="demo.title[locale]"
              class="absolute inset-0 h-full w-full object-cover object-top opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"
            />
            <div
              class="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3"
            >
              <div>
                <h3 class="font-display text-lg font-bold text-white">
                  {{ demo.title[locale] }}
                </h3>
                <p class="text-xs text-white/70 mt-0.5">
                  {{ demo.subtitle[locale] }}
                </p>
              </div>
              <span
                class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white group-hover:bg-brand-500/90 transition-colors"
              >
                <LucideIcon name="play" class-name="w-4 h-4" />
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";
import LucideIcon from "./LucideIcon.vue";
import { musionCase } from "../data/cases/musion.js";
import { timbraCase } from "../data/cases/timbra.js";
import { confecdotarioCase } from "../data/cases/confecdotario.js";

const { t, locale } = useI18n();

const demos = computed(() => [
  {
    key: "timbra",
    href: timbraCase.path,
    thumb: timbraCase.demo.thumb,
    preview: timbraCase.demo.preview,
    title: timbraCase.demo.title,
    subtitle: timbraCase.demo.subtitle,
  },
  {
    key: "musion",
    href: musionCase.path,
    thumb: musionCase.demo.thumb,
    preview: musionCase.demo.preview,
    title: musionCase.demo.title,
    subtitle: musionCase.demo.subtitle,
  },
  {
    key: "confecdotario",
    href: confecdotarioCase.path,
    thumb: confecdotarioCase.demo.thumb,
    preview: confecdotarioCase.demo.preview,
    title: confecdotarioCase.demo.title,
    subtitle: confecdotarioCase.demo.subtitle,
  },
]);
</script>
