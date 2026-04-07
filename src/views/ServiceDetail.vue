<template>
  <main class="pt-24 pb-16">
    <div v-if="product" class="max-w-7xl mx-auto px-6">
      <!-- Breadcrumb / Header -->
      <div class="mb-8">
        <router-link to="/products" class="inline-flex items-center gap-2 text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 transition">
          <LucideIcon name="arrow-left" class-name="w-4 h-4" />
          {{ locale === 'es' ? 'Volver a productos' : 'Back to products' }}
        </router-link>
      </div>

      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted">
           <LucideIcon :name="product.icon" class-name="w-4 h-4" />
           {{ product.category }}
        </div>
        <h1 class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6">
          {{ locale === 'es' ? product.titleEs : product.titleEn }}
        </h1>
        <p class="text-lg dark:text-text-secondary text-light-muted">
          {{ locale === 'es' ? product.descEs : product.descEn }}
        </p>
      </div>

      <!-- Detail Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24 items-start">
        <div class="lg:col-span-3 p-8 lg:p-10 rounded-3xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border">
            <h2 class="font-display text-2xl font-bold dark:text-white text-light-text mb-6">
              {{ locale === 'es' ? '¿Qué incluye este servicio?' : 'What is included?' }}
            </h2>
            <ul class="space-y-4 mb-8">
              <li v-for="inc in (locale === 'es' ? product.includesEs : product.includesEn)" :key="inc" class="flex gap-3 items-start dark:text-text-secondary text-light-muted">
                 <LucideIcon name="check" class-name="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                 <span class="text-base">{{ inc }}</span>
              </li>
            </ul>

            <div class="pt-8 border-t dark:border-base-700/50 border-light-border mt-8">
              <h3 class="font-bold dark:text-white text-light-text mb-2">Ideal para:</h3>
              <p class="dark:text-text-secondary text-light-muted flex items-center gap-2">
                <LucideIcon name="users" class-name="w-4 h-4 text-brand-400" />
                {{ locale === 'es' ? product.forEs : product.forEn }}
              </p>
            </div>
        </div>
        
        <div class="lg:col-span-2 space-y-8">
          <div class="p-8 rounded-3xl border border-brand-500/20 relative overflow-hidden" style="background: linear-gradient(145deg, rgba(59, 130, 246, 0.05), transparent)">
            <div class="absolute -right-10 -top-10 opacity-10">
              <LucideIcon :name="product.icon" class-name="w-40 h-40" />
            </div>
            <div class="mb-3 uppercase text-xs font-bold text-brand-500 tracking-wider">
              {{ locale === 'es' ? 'El beneficio principal' : 'Main benefit' }}
            </div>
            <p class="text-xl font-display font-medium dark:text-white text-light-text relative z-10 flex flex-col gap-2">
              <LucideIcon name="sparkles" class-name="w-6 h-6 text-brand-500 shrink-0" />
              {{ locale === 'es' ? product.benefitEs : product.benefitEn }}
            </p>
          </div>
          
          <div class="p-8 rounded-3xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border text-center">
             <div class="mb-2 uppercase text-xs font-bold text-brand-500 tracking-wider">
               {{ locale === 'es' ? 'Inversión estimada' : 'Estimated investment' }}
             </div>
             <p class="text-3xl font-display font-bold dark:text-white text-light-text mb-6 mt-2">
                {{ locale === 'es' ? product.priceEs : product.priceEn }}
             </p>
             <router-link to="/contact" class="inline-flex items-center justify-center gap-2 w-full bg-brand-500 text-white py-4 rounded-xl font-bold hover:bg-brand-600 transition shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                {{ locale === 'es' ? 'Iniciar este proyecto' : 'Start this project' }}
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
             </router-link>
             <p class="mt-4 text-xs dark:text-text-secondary text-light-muted">
               {{ locale === 'es' ? 'Nos pondremos en contacto en menos de 24 hrs.' : 'We will reach out in less than 24 hours.' }}
             </p>
          </div>
        </div>
      </div>

      <CTA />
    </div>

    <!-- Not Found -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
       <LucideIcon name="search" class-name="w-16 h-16 dark:text-base-700 text-light-border mb-6" />
       <h1 class="text-2xl font-bold dark:text-white mb-2">Servicio no encontrado</h1>
       <p class="dark:text-text-secondary mb-8">El producto o servicio que buscas no existe o ha sido movido.</p>
       <router-link to="/products" class="px-6 py-3 rounded-xl bg-brand-500/10 text-brand-500 font-semibold hover:bg-brand-500/20 transition">
         Ver todo el catálogo
       </router-link>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { products } from '../data/products.js'
import LucideIcon from '../components/LucideIcon.vue'
import CTA from '../components/CTA.vue'

const { locale } = useI18n()
const route = useRoute()

// Computed product based on dynamic route param (e.g. /service/:key)
const product = computed(() => {
  return products.find(p => p.key === route.params.key)
})
</script>
