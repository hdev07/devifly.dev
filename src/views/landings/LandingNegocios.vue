<script setup>
/**
 * Landing: Landings para Negocios (en general)
 * Estilo visual: Notion/Arc — editorial, warm, modular cards, mixed typography, emoji
 */
import LucideIcon from '../../components/LucideIcon.vue'

const WA = '+525583414659'
const waDemo = `https://wa.me/${WA}?text=${encodeURIComponent('¡Hola! Me interesa una landing page de alto impacto para mi negocio 🚀')}`
const waContratar = `https://wa.me/${WA}?text=${encodeURIComponent('Quiero cotizar una landing page para mi negocio 🚀')}`

const painPoints = [
  { emoji: '📱', text: 'Tu negocio depende solo de redes sociales' },
  { emoji: '🌐', text: 'No tienes página web o la que tienes no te genera clientes' },
  { emoji: '⏳', text: 'Te gustaría automatizar la captación de prospectos' },
]

const solutionPoints = [
  'Optimizada para convertir visitantes en prospectos',
  'Integración con WhatsApp y formularios inteligentes',
  'Diseño profesional y adaptable a cualquier giro',
]

const benefits = [
  { icon: 'users', title: 'Más clientes', desc: 'Sin invertir más en publicidad, tu landing trabaja 24/7' },
  { icon: 'sparkles', title: 'Imagen profesional', desc: 'Genera confianza y autoridad desde el primer vistazo' },
  { icon: 'zap', title: 'Captación automática', desc: 'Los prospectos llegan filtrados y listos para cerrar' },
  { icon: 'pen-tool', title: 'Fácil de actualizar', desc: 'Actualiza textos, fotos y ofertas cuando lo necesites' },
]

const mockupSections = [
  { label: 'Hero', desc: 'Propuesta de valor clara y directa' },
  { label: 'Beneficios', desc: 'Lo que resuelves para tu cliente' },
  { label: 'Formulario', desc: 'Contacto inteligente con filtros' },
  { label: 'WhatsApp', desc: 'Botón de contacto directo' },
  { label: 'Testimonios', desc: 'Prueba social que convence' },
]

const includes = [
  'Landing page personalizada',
  'Integración con WhatsApp y correo',
  'Formulario inteligente',
  'SEO básico',
  'Actualización sencilla',
]

const bonuses = [
  { emoji: '🔍', text: 'Auditoría digital gratis de tu presencia online actual' },
  { emoji: '✍️', text: 'Textos de venta incluidos — no te preocupes por el copy' },
  { emoji: '🎨', text: 'Demo sin costo antes de contratar' },
]

const testimonials = [
  {
    quote: 'Mi negocio creció desde que tengo la landing, recibo más mensajes y cierro más ventas.',
    name: 'Andrea',
    role: 'Emprendedora',
  },
  {
    quote: 'Ahora mis clientes me encuentran fácil y me contactan directo.',
    name: 'David',
    role: 'Servicios Express',
  },
]
</script>

<template>
  <main class="pt-24 pb-0">
    <!-- Hero — Notion/Arc: editorial, warm, large mixed typography -->
    <section class="relative px-6 pt-16 pb-28 overflow-hidden">
      <!-- Warm gradient bg -->
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.04]"
        style="background: radial-gradient(ellipse at 30% 20%, #f97316, transparent 50%), radial-gradient(ellipse at 70% 80%, #3b82f6, transparent 50%)"
      ></div>

      <div class="relative max-w-5xl mx-auto">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl dark:bg-base-800/50 bg-white border dark:border-base-700/40 border-light-border mb-8 text-sm shadow-sm">
            <span>🚀</span>
            <span class="dark:text-text-secondary text-light-muted font-medium">Landing Pages de Alto Impacto</span>
          </div>
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white text-light-text leading-[1.06] tracking-tight mb-8">
            Lleva tu negocio al
            <span class="relative">
              siguiente nivel
              <span class="absolute -bottom-2 left-0 w-full h-3 rounded-sm opacity-20" style="background: linear-gradient(90deg, #f97316, #3b82f6)"></span>
            </span>
            con una web que vende
          </h1>
          <p class="text-xl dark:text-text-secondary text-light-muted max-w-xl leading-relaxed mb-10">
            Transforma tu presencia digital con una landing page diseñada para vender y captar clientes automáticamente.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              :href="waDemo"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
              style="background: linear-gradient(135deg, #f97316, #ea580c); box-shadow: 0 4px 16px rgba(249, 115, 22, 0.25)"
            >
              Solicita tu demo gratis
            </a>
            <a
              :href="waContratar"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 rounded-2xl dark:bg-base-800/60 bg-white border dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:text-white hover:text-light-text transition shadow-sm"
            >
              Quiero cotizar mi landing
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain points — emoji blocks, editorial feel -->
    <section class="dark:bg-base-800/20 bg-white/60 border-y dark:border-base-700/30 border-light-border py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold dark:text-white text-light-text mb-10 text-center">
          ¿Te identificas?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="pain in painPoints"
            :key="pain.text"
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/30 border-light-border shadow-sm"
          >
            <span class="text-3xl block mb-4">{{ pain.emoji }}</span>
            <p class="dark:text-text-primary text-light-text text-sm font-medium leading-relaxed">{{ pain.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution — warm accent block -->
    <section class="max-w-5xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div class="lg:col-span-2">
          <h2 class="text-3xl sm:text-4xl font-bold dark:text-white text-light-text leading-tight mb-4">
            La Solución
          </h2>
          <p class="dark:text-text-secondary text-light-muted leading-relaxed">
            Una landing page de alto impacto, diseñada específicamente para tu tipo de negocio.
          </p>
        </div>
        <div class="lg:col-span-3 space-y-3">
          <div
            v-for="point in solutionPoints"
            :key="point"
            class="flex items-center gap-4 p-5 rounded-2xl dark:bg-base-800/30 bg-white border dark:border-base-700/30 border-light-border shadow-sm"
          >
            <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(249, 115, 22, 0.08)">
              <LucideIcon name="check" class-name="w-4 h-4" style="color: #f97316" />
            </div>
            <p class="dark:text-text-primary text-light-text text-sm font-medium">{{ point }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits — card grid with soft shadows -->
    <section class="dark:bg-base-800/20 bg-light-card/30 py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold dark:text-white text-light-text text-center mb-4">
          Beneficios
        </h2>
        <p class="dark:text-text-secondary text-light-muted text-center mb-14 max-w-md mx-auto">
          Todo lo que consigues con tu nueva landing page
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="b in benefits"
            :key="b.title"
            class="p-7 rounded-2xl dark:bg-base-800/40 bg-white border dark:border-base-700/30 border-light-border shadow-sm hover:shadow-md transition"
          >
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style="background: rgba(249, 115, 22, 0.06)">
              <LucideIcon :name="b.icon" class-name="w-5 h-5" style="color: #f97316" />
            </div>
            <h3 class="font-bold dark:text-white text-light-text mb-2">{{ b.title }}</h3>
            <p class="dark:text-text-secondary text-light-muted text-sm leading-relaxed">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual mockup — modular blocks -->
    <section class="max-w-5xl mx-auto px-6 py-24">
      <h2 class="text-3xl font-bold dark:text-white text-light-text text-center mb-4">
        Así luce tu landing
      </h2>
      <p class="dark:text-text-secondary text-light-muted text-center mb-14 max-w-md mx-auto">
        Cada sección diseñada con un propósito de conversión
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div
          v-for="(s, i) in mockupSections"
          :key="s.label"
          class="p-5 rounded-2xl dark:bg-base-800/30 bg-white border dark:border-base-700/30 border-light-border text-center shadow-sm"
        >
          <p class="text-2xl font-bold mb-2" style="color: rgba(249, 115, 22, 0.2)">{{ i + 1 }}</p>
          <p class="dark:text-white text-light-text text-sm font-semibold mb-1">{{ s.label }}</p>
          <p class="dark:text-text-secondary/60 text-light-muted/60 text-xs leading-snug">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- What's included + Bonuses — two columns -->
    <section class="dark:bg-base-800/20 bg-white/60 border-y dark:border-base-700/30 border-light-border py-24 px-6">
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Includes -->
        <div>
          <h2 class="text-2xl font-bold dark:text-white text-light-text mb-8">
            ¿Qué incluye?
          </h2>
          <ul class="space-y-4">
            <li
              v-for="item in includes"
              :key="item"
              class="flex items-center gap-3"
            >
              <div class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(249, 115, 22, 0.06)">
                <LucideIcon name="check" class-name="w-3.5 h-3.5" style="color: #f97316" />
              </div>
              <p class="dark:text-text-primary text-light-text text-sm">{{ item }}</p>
            </li>
          </ul>
        </div>
        <!-- Bonuses -->
        <div>
          <h2 class="text-2xl font-bold dark:text-white text-light-text mb-8">
            Bonos exclusivos
          </h2>
          <div class="space-y-3">
            <div
              v-for="bonus in bonuses"
              :key="bonus.text"
              class="flex items-start gap-4 p-5 rounded-2xl dark:bg-base-800/30 bg-light-surface border dark:border-base-700/30 border-light-border"
            >
              <span class="text-xl shrink-0">{{ bonus.emoji }}</span>
              <p class="dark:text-text-primary text-light-text text-sm leading-relaxed">{{ bonus.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials — quote with left border accent -->
    <section class="max-w-4xl mx-auto px-6 py-24">
      <h2 class="text-2xl font-bold dark:text-white text-light-text text-center mb-14">
        Lo que dicen nuestros clientes
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="relative p-7 rounded-2xl dark:bg-base-800/30 bg-white border dark:border-base-700/30 border-light-border shadow-sm"
        >
          <div class="absolute left-0 top-7 bottom-7 w-1 rounded-full" style="background: linear-gradient(180deg, #f97316, #3b82f6)"></div>
          <p class="dark:text-text-primary text-light-text leading-relaxed mb-6 pl-5 text-sm">
            "{{ t.quote }}"
          </p>
          <div class="pl-5">
            <p class="font-semibold dark:text-white text-light-text text-sm">{{ t.name }}</p>
            <p class="dark:text-text-secondary/50 text-light-muted/50 text-xs">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Guarantee -->
    <section class="max-w-3xl mx-auto px-6 pb-12">
      <div class="p-8 rounded-2xl dark:bg-base-800/20 bg-white border dark:border-base-700/30 border-light-border text-center shadow-sm">
        <div class="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style="background: rgba(59, 133, 246, 0.06)">
          <LucideIcon name="shield" class-name="w-6 h-6 text-brand-500" />
        </div>
        <h3 class="font-bold dark:text-white text-light-text text-lg mb-2">Garantía de resultados</h3>
        <p class="dark:text-text-secondary text-light-muted text-sm">
          Si no recibes más prospectos en el primer mes, optimizamos tu landing gratis.
        </p>
      </div>
    </section>

    <!-- CTA Final — warm, inviting -->
    <section class="relative py-32 px-6 text-center overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.05]"
        style="background: radial-gradient(ellipse at center, #f97316, transparent 60%)"
      ></div>
      <div class="relative max-w-3xl mx-auto">
        <h2 class="text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 tracking-tight leading-tight">
          Empieza a captar clientes
          <span class="relative inline-block">
            hoy mismo
            <span class="absolute -bottom-1.5 left-0 w-full h-3 rounded-sm opacity-15" style="background: linear-gradient(90deg, #f97316, #3b82f6)"></span>
          </span>
        </h2>
        <p class="dark:text-text-secondary text-light-muted mb-10 text-lg max-w-lg mx-auto">
          Cuéntanos la idea, el público y el objetivo. Te entregamos propuesta en 24 horas.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            :href="waDemo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-2xl text-white font-bold text-sm transition-all hover:scale-105 hover:shadow-lg"
            style="background: linear-gradient(135deg, #f97316, #ea580c); box-shadow: 0 4px 16px rgba(249, 115, 22, 0.25)"
          >
            Solicita tu demo gratis
          </a>
          <a
            :href="waContratar"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-2xl dark:bg-base-800/60 bg-white border dark:border-base-700/50 border-light-border dark:text-text-secondary text-light-muted font-semibold text-sm hover:dark:text-white hover:text-light-text transition shadow-sm"
          >
            Ver ejemplos de páginas
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
