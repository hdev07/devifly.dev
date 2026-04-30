<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-7xl mx-auto px-6">
      <SectionHeader
        align="center"
        :eyebrow="locale === 'es' ? 'ROI Calculator' : 'ROI Calculator'"
        :title="locale === 'es' ? '¿Cuánto puede recuperar tu negocio en 12 meses?' : 'How much can your business recover in 12 months?'"
        :subtitle="locale === 'es'
          ? 'Mueve los controles y descubre el impacto estimado de automatizar tu sitio y operación.'
          : 'Move the controls and discover the estimated impact of automating your site and operation.'"
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <!-- Inputs panel -->
        <div data-animate class="lg:col-span-7 rounded-3xl border dark:border-white/10 border-light-border dark:bg-base-900/65 bg-light-surface/90 backdrop-blur-xl p-6 sm:p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-500/15">
              <LucideIcon name="calculator" class-name="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <h3 class="font-display text-lg font-bold dark:text-white text-light-text">
                {{ locale === "es" ? "Tu negocio hoy" : "Your business today" }}
              </h3>
              <p class="text-xs dark:text-text-secondary text-light-muted">
                {{ locale === "es" ? "Datos aproximados son suficientes" : "Approximate numbers work fine" }}
              </p>
            </div>
          </div>

          <div class="space-y-7">
            <!-- Visitors -->
            <div>
              <div class="flex items-center justify-between mb-3">
                <label class="text-sm font-semibold dark:text-white text-light-text flex items-center gap-2">
                  <LucideIcon name="eye" class-name="w-4 h-4 text-brand-400" />
                  {{ locale === "es" ? "Visitas mensuales a tu sitio" : "Monthly visits to your site" }}
                </label>
                <span class="font-display text-lg font-bold text-gradient tabular-nums">
                  {{ formatNumber(visitors) }}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="20000"
                step="100"
                v-model.number="visitors"
                :style="`--fill: ${rangeFill(visitors, 100, 20000)}%`"
                class="roi-range"
              />
              <div class="flex justify-between text-[10px] uppercase tracking-wider dark:text-text-secondary text-light-muted mt-2">
                <span>100</span><span>20k</span>
              </div>
            </div>

            <!-- Conversion rate -->
            <div>
              <div class="flex items-center justify-between mb-3">
                <label class="text-sm font-semibold dark:text-white text-light-text flex items-center gap-2">
                  <LucideIcon name="percent" class-name="w-4 h-4 text-brand-400" />
                  {{ locale === "es" ? "Conversión actual" : "Current conversion" }}
                </label>
                <span class="font-display text-lg font-bold text-gradient tabular-nums">
                  {{ conversionRate.toFixed(1) }}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                v-model.number="conversionRate"
                :style="`--fill: ${rangeFill(conversionRate, 0.5, 10)}%`"
                class="roi-range"
              />
              <div class="flex justify-between text-[10px] uppercase tracking-wider dark:text-text-secondary text-light-muted mt-2">
                <span>0.5%</span><span>10%</span>
              </div>
            </div>

            <!-- Avg ticket -->
            <div>
              <div class="flex items-center justify-between mb-3">
                <label class="text-sm font-semibold dark:text-white text-light-text flex items-center gap-2">
                  <LucideIcon name="dollar-sign" class-name="w-4 h-4 text-brand-400" />
                  {{ locale === "es" ? "Ticket promedio (MXN)" : "Average ticket (MXN)" }}
                </label>
                <span class="font-display text-lg font-bold text-gradient tabular-nums">
                  ${{ formatNumber(avgTicket) }}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="20000"
                step="50"
                v-model.number="avgTicket"
                :style="`--fill: ${rangeFill(avgTicket, 100, 20000)}%`"
                class="roi-range"
              />
              <div class="flex justify-between text-[10px] uppercase tracking-wider dark:text-text-secondary text-light-muted mt-2">
                <span>$100</span><span>$20k</span>
              </div>
            </div>

            <!-- Hours saved -->
            <div>
              <div class="flex items-center justify-between mb-3">
                <label class="text-sm font-semibold dark:text-white text-light-text flex items-center gap-2">
                  <LucideIcon name="clock-4" class-name="w-4 h-4 text-brand-400" />
                  {{ locale === "es" ? "Horas/semana en tareas manuales" : "Hours/week on manual tasks" }}
                </label>
                <span class="font-display text-lg font-bold text-gradient tabular-nums">
                  {{ hoursManual }}h
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                v-model.number="hoursManual"
                :style="`--fill: ${rangeFill(hoursManual, 0, 40)}%`"
                class="roi-range"
              />
              <div class="flex justify-between text-[10px] uppercase tracking-wider dark:text-text-secondary text-light-muted mt-2">
                <span>0h</span><span>40h</span>
              </div>
            </div>
          </div>

          <!-- Reset row -->
          <div class="mt-6 pt-5 border-t dark:border-white/8 border-light-border flex items-center justify-between">
            <button
              type="button"
              @click="reset"
              class="text-xs font-semibold uppercase tracking-[0.18em] dark:text-text-secondary text-light-muted hover:text-brand-400 transition-colors flex items-center gap-1.5"
            >
              <LucideIcon name="timer-reset" class-name="w-3.5 h-3.5" />
              {{ locale === "es" ? "Reiniciar valores" : "Reset values" }}
            </button>
            <span class="text-xs dark:text-text-secondary text-light-muted">
              {{ locale === "es" ? "Cálculo en tiempo real" : "Live calculation" }}
            </span>
          </div>
        </div>

        <!-- Result panel -->
        <div data-animate class="lg:col-span-5 relative rounded-3xl border dark:border-brand-500/30 border-brand-500/40 bg-gradient-to-br dark:from-brand-500/15 from-brand-500/8 via-transparent to-transparent backdrop-blur-xl p-6 sm:p-8 overflow-hidden delay-200">
          <div aria-hidden="true" class="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-brand-500/15 blur-[80px]"></div>
          <div aria-hidden="true" class="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-cyan-glow/15 blur-[80px]"></div>

          <div class="relative">
            <div class="flex items-center gap-2 mb-3">
              <span class="block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-400">
                {{ locale === "es" ? "Estimación a 12 meses" : "12-month estimate" }}
              </span>
            </div>

            <!-- Big number: extra revenue -->
            <div class="mb-7">
              <p class="text-xs dark:text-text-secondary text-light-muted mb-2">
                {{ locale === "es" ? "Ingresos adicionales potenciales" : "Potential additional revenue" }}
              </p>
              <div class="font-display font-bold text-gradient leading-none tabular-nums" style="font-size: clamp(2.2rem, 6vw, 3.6rem)">
                ${{ formatNumber(extraRevenueYear) }}
              </div>
              <div class="text-xs dark:text-text-secondary text-light-muted mt-2 tabular-nums">
                {{ locale === "es" ? "≈ $" + formatNumber(extraRevenueMonth) + " / mes" : "≈ $" + formatNumber(extraRevenueMonth) + " / month" }}
              </div>
            </div>

            <!-- Breakdown stats -->
            <div class="space-y-4 mb-7">
              <div class="flex items-center justify-between p-3 rounded-xl dark:bg-white/5 bg-light-card/60">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-brand-500/15 flex items-center justify-center">
                    <LucideIcon name="users" class-name="w-4 h-4 text-brand-400" />
                  </div>
                  <span class="text-sm dark:text-text-secondary text-light-muted">
                    {{ locale === "es" ? "Leads extra al mes" : "Extra leads/month" }}
                  </span>
                </div>
                <span class="font-display font-bold dark:text-white text-light-text tabular-nums">
                  +{{ formatNumber(extraLeadsMonth) }}
                </span>
              </div>

              <div class="flex items-center justify-between p-3 rounded-xl dark:bg-white/5 bg-light-card/60">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                    <LucideIcon name="clock" class-name="w-4 h-4 text-emerald-400" />
                  </div>
                  <span class="text-sm dark:text-text-secondary text-light-muted">
                    {{ locale === "es" ? "Horas recuperadas/año" : "Hours saved/year" }}
                  </span>
                </div>
                <span class="font-display font-bold dark:text-white text-light-text tabular-nums">
                  {{ formatNumber(hoursSavedYear) }}h
                </span>
              </div>

              <div class="flex items-center justify-between p-3 rounded-xl dark:bg-white/5 bg-light-card/60">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-violet-soft/20 flex items-center justify-center">
                    <LucideIcon name="trending-up" class-name="w-4 h-4 dark:text-violet-300 text-violet-500" />
                  </div>
                  <span class="text-sm dark:text-text-secondary text-light-muted">
                    {{ locale === "es" ? "ROI estimado" : "Estimated ROI" }}
                  </span>
                </div>
                <span class="font-display font-bold text-gradient tabular-nums">
                  {{ roiPercent }}x
                </span>
              </div>
            </div>

            <!-- CTA -->
            <a
              :href="quoteLink"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-glow text-white font-semibold text-sm shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_45px_rgba(59,130,246,0.6)] hover:brightness-110 transition-all"
            >
              <LucideIcon name="message-circle" class-name="w-4 h-4" />
              {{ locale === "es" ? "Enviar mi resultado por WhatsApp" : "Send my result on WhatsApp" }}
              <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <p class="text-[10px] text-center dark:text-text-secondary text-light-muted mt-3 leading-relaxed">
              {{ locale === "es"
                ? "Estimación basada en lift promedio del 45% post-rediseño y 80% de eficiencia en tareas automatizables."
                : "Estimate based on a 45% average lift after redesign and 80% efficiency on automatable tasks." }}
            </p>
          </div>
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
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";

const { locale } = useI18n();
const { customLink } = useWhatsApp();

const visitors = ref(2000);
const conversionRate = ref(2.0);
const avgTicket = ref(1500);
const hoursManual = ref(8);

const reset = () => {
  visitors.value = 2000;
  conversionRate.value = 2.0;
  avgTicket.value = 1500;
  hoursManual.value = 8;
};

const rangeFill = (val, min, max) => {
  return ((val - min) / (max - min)) * 100;
};

// Lift assumed after Devifly redesign: +45% conversion uplift
const LIFT = 0.45;
const HOURLY_RATE_MXN = 250; // proxy of operational hour cost
const AUTOMATION_EFFICIENCY = 0.8;

const currentLeadsMonth = computed(() => Math.round(visitors.value * (conversionRate.value / 100)));
const newLeadsMonth = computed(() => Math.round(currentLeadsMonth.value * (1 + LIFT)));
const extraLeadsMonth = computed(() => newLeadsMonth.value - currentLeadsMonth.value);

const extraRevenueMonth = computed(() => Math.round(extraLeadsMonth.value * avgTicket.value));
const hoursSavedYear = computed(() => Math.round(hoursManual.value * 52 * AUTOMATION_EFFICIENCY));
const hoursValueYear = computed(() => hoursSavedYear.value * HOURLY_RATE_MXN);
const extraRevenueYear = computed(() => extraRevenueMonth.value * 12 + hoursValueYear.value);

// ROI vs typical project investment of $9,999 MXN (Growth tier)
const PROJECT_INVESTMENT = 9999;
const roiPercent = computed(() => {
  const ratio = extraRevenueYear.value / PROJECT_INVESTMENT;
  return ratio.toFixed(1);
});

const formatNumber = (n) => {
  return new Intl.NumberFormat("es-MX").format(Math.round(n));
};

const quoteLink = computed(() => {
  const message =
    locale.value === "es"
      ? `Hola Devifly, calcule mi ROI: ${formatNumber(visitors.value)} visitas/mes, ${conversionRate.value.toFixed(1)}% conversion, ticket $${formatNumber(avgTicket.value)} y ${hoursManual.value}h/sem manuales. Estimacion: $${formatNumber(extraRevenueYear.value)} MXN extra al ano. Quiero agendar una llamada estrategica.`
      : `Hi Devifly, my ROI calc: ${formatNumber(visitors.value)} visits/mo, ${conversionRate.value.toFixed(1)}% conv, $${formatNumber(avgTicket.value)} ticket and ${hoursManual.value}h/wk manual. Estimate: $${formatNumber(extraRevenueYear.value)} MXN extra/year. I'd like to book a strategy call.`;
  return customLink(message);
});
</script>
