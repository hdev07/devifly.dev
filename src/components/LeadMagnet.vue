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
              {{ locale === "es" ? "100% Gratis · 24h" : "100% Free · 24h" }}
            </span>
          </div>

          <h2 class="font-display font-bold dark:text-white text-light-text leading-[1.05] tracking-tight mb-5" style="font-size: clamp(2rem, 5vw, 3.4rem)">
            {{ locale === "es" ? "Auditoría gratuita de tu" : "Free audit of your" }}
            <span class="text-gradient">{{ locale === "es" ? "sitio actual" : "current site" }}</span>
          </h2>

          <p class="text-base sm:text-lg dark:text-text-secondary text-light-muted leading-relaxed mb-7 max-w-xl">
            {{ locale === "es"
              ? "Analizamos tu sitio en 24h y te enviamos un reporte con 5 mejoras concretas que pueden subir tu conversión. Sin venta posterior si no quieres."
              : "We analyze your site in 24h and send you a report with 5 concrete improvements that can lift your conversion. No upsell if you do not want it." }}
          </p>

          <!-- Audit checklist -->
          <ul class="space-y-3 mb-8">
            <li v-for="item in auditList" :key="item.icon" class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                <LucideIcon :name="item.icon" class-name="w-4 h-4 text-brand-400" />
              </div>
              <span class="text-sm dark:text-white text-light-text font-medium">
                {{ item.label[locale] }}
              </span>
            </li>
          </ul>

          <!-- Trust signals -->
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs dark:text-text-secondary text-light-muted">
            <span class="flex items-center gap-1.5">
              <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5 text-emerald-400" />
              {{ locale === "es" ? "Sin tarjeta de crédito" : "No credit card" }}
            </span>
            <span class="flex items-center gap-1.5">
              <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5 text-emerald-400" />
              {{ locale === "es" ? "Reporte en 24 horas" : "Report in 24 hours" }}
            </span>
            <span class="flex items-center gap-1.5">
              <LucideIcon name="check-circle-2" class-name="w-3.5 h-3.5 text-emerald-400" />
              {{ locale === "es" ? "100% confidencial" : "100% confidential" }}
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
                  {{ locale === "es" ? "Solicita tu auditoría" : "Request your audit" }}
                </h3>
                <p class="text-xs dark:text-text-secondary text-light-muted">
                  {{ locale === "es" ? "Completa estos campos y te respondemos por WhatsApp" : "Fill these fields and we'll reply on WhatsApp" }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-2">
                  {{ locale === "es" ? "Nombre" : "Name" }}<span class="text-brand-400 ml-1">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="locale === 'es' ? 'Tu nombre' : 'Your name'"
                  class="w-full px-4 py-3 rounded-xl dark:bg-base-800/70 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text placeholder:dark:text-text-secondary placeholder:text-light-muted/70 focus:dark:border-brand-500/50 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-2">
                  {{ locale === "es" ? "Sitio web o negocio" : "Website or business" }}<span class="text-brand-400 ml-1">*</span>
                </label>
                <input
                  v-model="form.site"
                  type="text"
                  required
                  :placeholder="locale === 'es' ? 'misitio.com o el nombre de tu negocio' : 'mysite.com or your business name'"
                  class="w-full px-4 py-3 rounded-xl dark:bg-base-800/70 bg-light-card border dark:border-white/10 border-light-border dark:text-white text-light-text placeholder:dark:text-text-secondary placeholder:text-light-muted/70 focus:dark:border-brand-500/50 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted mb-2">
                  {{ locale === "es" ? "Mayor reto actual" : "Current biggest challenge" }}
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
                    <span class="truncate">{{ ch.label[locale] }}</span>
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
              {{ locale === "es" ? "Enviar y abrir WhatsApp" : "Send and open WhatsApp" }}
              <span aria-hidden="true">→</span>
            </button>

            <p class="text-[10px] text-center dark:text-text-secondary text-light-muted mt-4 leading-relaxed">
              {{ locale === "es"
                ? "Al enviar abriremos WhatsApp con tu mensaje listo. Sólo presiona enviar y te respondemos en 24h."
                : "When you send, WhatsApp will open with your message ready. Just press send and we reply in 24h." }}
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

const { locale } = useI18n();
const { customLink } = useWhatsApp();

const form = ref({
  name: "",
  site: "",
  challenge: "",
});

const challenges = [
  { value: "leads", icon: "users", label: { es: "Pocos leads", en: "Few leads" } },
  { value: "speed", icon: "gauge", label: { es: "Sitio lento", en: "Slow site" } },
  { value: "design", icon: "palette", label: { es: "Diseño viejo", en: "Old design" } },
  { value: "mobile", icon: "smartphone", label: { es: "No es móvil", en: "Not mobile" } },
];

const isValid = computed(() => form.value.name.trim() && form.value.site.trim());

const onSubmit = () => {
  if (!isValid.value) return;
  const challengeLabel = challenges.find((c) => c.value === form.value.challenge)?.label?.[locale.value];
  const challengePart = challengeLabel
    ? locale.value === "es"
      ? ` Mi mayor reto: ${challengeLabel}.`
      : ` My biggest challenge: ${challengeLabel}.`
    : "";
  const message =
    locale.value === "es"
      ? `Hola Devifly, soy ${form.value.name} y quiero solicitar mi auditoria gratuita. Mi sitio o negocio es: ${form.value.site}.${challengePart}`
      : `Hi Devifly, I'm ${form.value.name} and I'd like to request my free audit. My site or business: ${form.value.site}.${challengePart}`;
  window.open(customLink(message), "_blank", "noopener,noreferrer");
};

const auditList = [
  { icon: "gauge", label: { es: "Velocidad y Lighthouse score", en: "Speed and Lighthouse score" } },
  { icon: "smartphone", label: { es: "Experiencia móvil real", en: "Real mobile experience" } },
  { icon: "target", label: { es: "Estructura de conversión y CTAs", en: "Conversion structure and CTAs" } },
  { icon: "search", label: { es: "SEO técnico y on-page", en: "Technical and on-page SEO" } },
  { icon: "trending-up", label: { es: "5 mejoras priorizadas por impacto", en: "5 improvements ranked by impact" } },
];
</script>
