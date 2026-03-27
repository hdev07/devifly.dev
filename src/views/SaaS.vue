<script setup>
import CTA from '../components/CTA.vue'
</script>

<template>
  <main class="pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6">Plataformas SaaS Completas</h1>
        <p class="text-lg dark:text-text-secondary text-light-muted">De la idea a un modelo de negocio recurrente. Desarrollamos la plataforma para que factures mes con mes.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <!-- Feature 1 -->
        <div class="p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border">
          <h3 class="text-xl font-bold dark:text-white mb-2">Autenticación y Roles</h3>
          <p class="text-sm dark:text-text-secondary">Sistemas de acceso seguros, RBAC (Role-Based Access Control) multi-tenant con JWT y OAuth (Google, etc).</p>
        </div>
        
        <!-- Feature 2 -->
        <div class="p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border">
          <h3 class="text-xl font-bold dark:text-white mb-2">Facturación y Stripe</h3>
          <p class="text-sm dark:text-text-secondary">Integración con Stripe o PayPal. Gestión de suscripciones recurrentes, up-sells y tarjetas.</p>
        </div>

        <!-- Feature 3 -->
        <div class="p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border">
          <h3 class="text-xl font-bold dark:text-white mb-2">Arquitectura Escalable</h3>
          <p class="text-sm dark:text-text-secondary">Bases de datos en PostgreSQL, Redis para caché, microservicios o monolitos modulares en Node.js/Vue.</p>
        </div>
      </div>

      <div class="rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border overflow-hidden mb-24 lg:flex gap-8 items-center p-8 lg:p-12">
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <h2 class="font-display text-3xl font-bold dark:text-white mb-4">Caso de Éxito: MoviBase</h2>
          <p class="dark:text-text-secondary mb-6">Una plataforma SaaS desarrollada con todos los componentes necesarios: gestión de flotas, geocercas en PostGIS, cobros automáticos, múltiples niveles de permisos para dueños de unidades e inversores.</p>
          <a href="https://movibase.com/" target="_blank" class="px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition inline-block">
            Ver Caso de Estudio
          </a>
        </div>
        <div class="lg:w-1/2">
          <!-- Placeholder de imagen/grafico -->
           <div class="aspect-video w-full rounded-xl bg-base-900 border border-base-700 font-mono text-sm dark:text-brand-500/50 flex items-center justify-center p-6 text-center shadow-lg">
             <div class="space-y-4">
               <div>[ POSTGIS GEO FENCING ]</div>
               <div class="w-full h-1 bg-brand-500/20 rounded"></div>
               <div>[ STRIPE BILLING API ]</div>
               <div class="w-full h-1 bg-brand-500/20 rounded"></div>
               <div>[ WEBSOCKET LIVE GPS ]</div>
             </div>
           </div>
        </div>
      </div>

      <CTA />
    </div>
  </main>
</template>
