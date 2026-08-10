<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="split" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- LEFT: pitch -->
        <div class="lg:col-span-6" data-animate>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-emerald-500/15 bg-emerald-500/10 border dark:border-emerald-400/30 border-emerald-500/30 mb-6">
            <LucideIcon name="gift" class-name="w-3.5 h-3.5 text-emerald-400" />
            <span class="text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400">
              {{ t("leadMagnet.badge") }}
            </span>
          </div>

          <h2 class="font-display font-bold dark:text-white text-light-text leading-[1.05] tracking-tight mb-5" style="font-size: clamp(2rem, 5vw, 3.4rem)">
            {{ t("leadMagnet.title1") }}
            <span class="text-gradient"> {{ t("leadMagnet.title2") }}</span>
          </h2>

          <p class="text-base sm:text-lg dark:text-text-secondary text-light-muted leading-relaxed mb-7 max-w-xl">
            {{ t("leadMagnet.subtitle") }}
          </p>

          <!-- Audit checklist -->
          <ul class="space-y-3 mb-8">
            <li v-for="item in auditList" :key="item.icon" class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                <LucideIcon :name="item.icon" class-name="w-4 h-4 text-brand-400" />
              </div>
              <span class="text-sm dark:text-white text-light-text font-medium">
                {{ t(`leadMagnet.audit.${item.key}`) }}
              </span>
            </li>
          </ul>

          <!-- Trust signals -->
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs dark:text-text-secondary text-light-muted">
            <span class="flex items-center gap-1.5">
              <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5 text-emerald-400" />
              {{ t("leadMagnet.noCard") }}
            </span>
            <span class="flex items-center gap-1.5">
              <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5 text-emerald-400" />
              {{ t("leadMagnet.report24") }}
            </span>
            <span class="flex items-center gap-1.5">
              <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5 text-emerald-400" />
              {{ t("leadMagnet.confidential") }}
            </span>
          </div>
        </div>

        <!-- RIGHT: form -->
        <div class="lg:col-span-6" data-animate>
          <form
            @submit.prevent="onSubmit"
            class="relative rounded-3xl border dark:border-white/10 border-light-border dark:bg-base-900/65 bg-light-surface/95 backdrop-blur-xl p-7 sm:p-9 shadow-glass-hover"
          >
            <div aria-hidden="true" class="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-500/30 via-transparent to-cyan-glow/20 opacity-50 blur-xl pointer-events-none -z-10"></div>

            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-500 to-cyan-glow">
                <LucideIcon name="file-search" class-name="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="font-display text-lg font-bold dark:text-white text-light-text">
                  {{ t("leadMagnet.formTitle") }}
                </h3>
                <p class="text-xs dark:text-text-secondary text-light-muted">
                  {{ t("leadMagnet.formSubtitle") }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-2">
                  {{ t("leadMagnet.name") }}<span class="text-brand-400 ml-1">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="t('leadMagnet.namePlaceholder')"
                  class="w-full px-4 py-3 rounded-xl dark:bg-base-800/70 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text placeholder:dark:text-text-secondary placeholder:text-light-muted/70 focus:dark:border-brand-500/50 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-2">
                  {{ t("leadMagnet.site") }}<span class="text-brand-400 ml-1">*</span>
                </label>
                <input
                  v-model="form.site"
                  type="text"
                  required
                  :placeholder="t('leadMagnet.sitePlaceholder')"
                  class="w-full px-4 py-3 rounded-xl dark:bg-base-800/70 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text placeholder:dark:text-text-secondary placeholder:text-light-muted/70 focus:dark:border-brand-500/50 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-2">
                  {{ t("leadMagnet.challenge") }}
                </label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    v-for="ch in challenges"
                    :key="ch.value"
                    type="button"
                    @click="form.challenge = ch.value"
                    class="px-3 py-2.5 rounded-xl text-xs font-medium border transition-all flex items-center gap-2"
                    :class="form.challenge === ch.value
                      ? 'dark:bg-brand-500/15 bg-brand-500/10 dark:border-brand-500/40 border-brand-500/50 text-brand-400'
                      : 'dark:bg-base-800/60 bg-light-card dark:border-white/10 border-light-border dark:text-text-secondary text-light-muted hover:dark:border-brand-500/25 hover:border-brand-500/30'"
                  >
                    <LucideIcon :name="ch.icon" class-name="w-3.5 h-3.5" />
                    <span class="truncate">{{ t(`leadMagnet.challenges.${ch.value}`) }}</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="!isValid"
              class="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm transition-all"
              :class="isValid
                ? 'bg-gradient-to-r from-brand-500 to-cyan-glow text-white shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_45px_rgba(59,130,246,0.6)] hover:brightness-110'
                : 'dark:bg-white/5 bg-light-card dark:text-text-secondary text-light-muted cursor-not-allowed opacity-60'"
            >
              <LucideIcon name="send" class-name="w-4 h-4" />
              {{ t("leadMagnet.submit") }}
              <span aria-hidden="true">→</span>
            </button>

            <p class="text-[10px] text-center dark:text-text-secondary text-light-muted mt-4 leading-relaxed">
              {{ t("leadMagnet.disclaimer") }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useWhatsApp } from "../composables/useWhatsApp.js";
import LucideIcon from "./LucideIcon.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { t } = useI18n();
const { customLink } = useWhatsApp();

const form = ref({
  name: "",
  site: "",
  challenge: "",
});

// Textos en src/i18n/{es,en}.js bajo `leadMagnet.challenges.<value>`
const challenges = [
  { value: "leads", icon: "users" },
  { value: "speed", icon: "gauge" },
  { value: "design", icon: "palette" },
  { value: "mobile", icon: "smartphone" },
];

const isValid = computed(() => form.value.name.trim() && form.value.site.trim());

const onSubmit = () => {
  if (!isValid.value) return;
  const hasChallenge = challenges.some((c) => c.value === form.value.challenge);
  const challengePart = hasChallenge
    ? ` ${t("leadMagnet.waChallenge", { challenge: t(`leadMagnet.challenges.${form.value.challenge}`) })}`
    : "";
  const message =
    t("leadMagnet.waMessage", { name: form.value.name, site: form.value.site }) + challengePart;
  window.open(customLink(message), "_blank", "noopener,noreferrer");
};

// Textos en src/i18n/{es,en}.js bajo `leadMagnet.audit.<key>`
const auditList = [
  { key: "speed", icon: "gauge" },
  { key: "mobile", icon: "smartphone" },
  { key: "cro", icon: "target" },
  { key: "seo", icon: "search" },
  { key: "improvements", icon: "trending-up" },
];
</script>
