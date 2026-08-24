<template>
  <section class="relative py-20 sm:py-28 overflow-hidden">
    <AmbientGlow variant="default" />

    <div class="relative max-w-5xl mx-auto px-6">
      <SectionHeader
        align="center"
        :eyebrow="t('afterSales.eyebrow')"
        :title="t('afterSales.title')"
        :subtitle="t('afterSales.subtitle')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
        <article
          v-for="plan in afterSalesPlans"
          :key="plan.key"
          class="relative flex flex-col rounded-2xl border p-6 transition-all duration-300 cursor-pointer"
          :class="[
            plan.popular
              ? 'border-neon/40 dark:bg-neon/[0.04] bg-neon/[0.03] shadow-[0_20px_50px_-20px_rgba(0,255,178,0.2)] lg:-translate-y-1'
              : 'dark:bg-base-900/40 bg-white dark:border-base-700/50 border-light-border',
            expanded === plan.key
              ? 'ring-2 ring-brand-500/60'
              : 'hover:dark:border-base-600 hover:border-light-border/80 hover:-translate-y-0.5'
          ]"
          role="button"
          tabindex="0"
          :aria-expanded="expanded === plan.key"
          @click="toggle(plan.key)"
          @keydown.enter.space.prevent="toggle(plan.key)"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-neon text-base-950 text-[10px] font-bold uppercase tracking-wide"
          >
            {{ t('afterSales.popular') }}
          </div>

          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
            :class="plan.popular
              ? 'bg-neon/10'
              : 'dark:bg-brand-500/10 bg-brand-500/5'"
          >
            <LucideIcon
              :name="plan.icon"
              :class-name="'w-5 h-5 ' + (plan.popular ? 'text-neon' : 'text-brand-500')"
            />
          </div>

          <h3 class="font-display text-base font-bold dark:text-white text-light-text">
            {{ t(`afterSales.plans.${plan.key}.name`) }}
          </h3>
          <p class="text-sm dark:text-text-secondary text-light-muted mt-1 leading-relaxed flex-1">
            {{ t(`afterSales.plans.${plan.key}.desc`) }}
          </p>

          <div class="mt-4">
            <span class="font-display text-2xl font-bold dark:text-white text-light-text tabular-nums">
              {{ plan.priceEs }}
            </span>
            <span v-if="plan.priceAnnualEs" class="block text-xs dark:text-text-secondary text-light-muted mt-0.5">
              {{ plan.priceAnnualEs }}
            </span>
          </div>

          <ul class="mt-4 space-y-1.5">
            <li
              v-for="feat in tm(`afterSales.plans.${plan.key}.features`)"
              :key="feat"
              class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
            >
              <span
                class="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                :class="plan.popular ? 'bg-neon' : 'bg-brand-500'"
              ></span>
              <span>{{ feat }}</span>
            </li>
          </ul>

          <div class="mt-4 flex items-center gap-1.5 text-xs font-semibold" :class="plan.popular ? 'text-neon' : 'text-brand-400'">
            {{ expanded === plan.key ? t('afterSales.collapse') : t('afterSales.expand') }}
            <LucideIcon
              :name="expanded === plan.key ? 'chevron-up' : 'chevron-down'"
              class-name="w-3.5 h-3.5"
            />
          </div>
        </article>
      </div>

      <!-- Expanded detail panel -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[600px]"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-[600px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div
          v-if="expanded"
          ref="detailRef"
          class="mt-5 rounded-2xl border dark:border-base-700/50 border-light-border dark:bg-base-900/60 bg-white overflow-hidden"
        >
          <div class="p-6 sm:p-8">
            <div class="flex items-center justify-between mb-6">
              <h4 class="font-display text-lg font-bold dark:text-white text-light-text flex items-center gap-2">
                <span class="w-2 h-2 rounded-full" :class="expandedPlan?.popular ? 'bg-neon' : 'bg-brand-500'"></span>
                {{ t(`afterSales.plans.${expanded}.name`) }}
              </h4>
              <button
                class="text-xs dark:text-text-secondary text-light-muted border dark:border-base-700 border-light-border rounded-lg px-3 py-1.5 hover:dark:border-base-600 hover:border-light-border/80 transition"
                @click.stop="expanded = null"
              >
                {{ t('afterSales.close') }}
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h5 class="text-[11px] font-semibold uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted mb-3">
                  {{ t('afterSales.detailCovers') }}
                </h5>
                <ul class="space-y-2">
                  <li
                    v-for="item in tm(`afterSales.plans.${expanded}.covers`)"
                    :key="item"
                    class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
                  >
                    <LucideIcon name="check" class-name="w-4 h-4 text-neon shrink-0 mt-0.5" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-[11px] font-semibold uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted mb-3">
                  {{ t('afterSales.detailNotCovers') }}
                </h5>
                <ul class="space-y-2">
                  <li
                    v-for="item in tm(`afterSales.plans.${expanded}.notCovers`)"
                    :key="item"
                    class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
                  >
                    <LucideIcon name="x" class-name="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-[11px] font-semibold uppercase tracking-[0.16em] dark:text-text-secondary text-light-muted mb-3">
                  {{ t('afterSales.detailWhen') }}
                </h5>
                <ul class="space-y-2">
                  <li
                    v-for="item in tm(`afterSales.plans.${expanded}.whenToUse`)"
                    :key="item"
                    class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
                  >
                    <LucideIcon name="lightbulb" class-name="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Footer note -->
      <p class="mt-8 text-center text-xs dark:text-text-secondary text-light-muted max-w-xl mx-auto">
        {{ t('afterSales.footnote') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import LucideIcon from './LucideIcon.vue'
import SectionHeader from './ui/SectionHeader.vue'
import AmbientGlow from './ui/AmbientGlow.vue'
import { afterSalesPlans as plansData } from '../data/salesCatalog'

const { t, tm } = useI18n()

const afterSalesPlans = plansData.map(p => ({
  key: p.key,
  icon: p.icon,
  popular: p.popular || false,
  priceEs: p.priceMonthlyEs,
  priceAnnualEs: p.priceAnnualEs || null,
}))

const expanded = ref(null)
const detailRef = ref(null)

const expandedPlan = computed(() =>
  afterSalesPlans.find(p => p.key === expanded.value)
)

function toggle(key) {
  if (expanded.value === key) {
    expanded.value = null
  } else {
    expanded.value = key
    nextTick(() => {
      detailRef.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  }
}
</script>
