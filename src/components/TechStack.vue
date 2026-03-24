<template>
  <section id="stack" class="py-24 sm:py-32 relative">
    <div class="absolute inset-0 dark:bg-base-900/50 bg-light-card/50"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div data-animate class="text-center mb-16">
        <h2 class="font-display text-3xl sm:text-4xl font-bold dark:text-white text-light-text">
          {{ t('stack.title') }}
        </h2>
        <p class="mt-4 text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto">
          {{ t('stack.subtitle') }}
        </p>
      </div>

      <!-- Tech categories grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(category, catIndex) in categories"
          :key="category.key"
          data-animate
          class="group relative p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
          :class="`delay-${(catIndex + 1) * 100}`"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="category.iconBg">
              <component :is="category.icon" class="w-5 h-5" :class="category.iconColor" />
            </div>
            <div>
              <h3 class="font-display text-lg font-semibold dark:text-white text-light-text">
                {{ t(`stack.categories.${category.key}.title`) }}
              </h3>
            </div>
          </div>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-2 mb-5">
            <span
              v-for="tech in category.techs"
              :key="tech"
              class="text-xs font-medium px-3 py-1.5 rounded-lg dark:bg-base-700/60 bg-light-card dark:text-text-primary text-light-text border dark:border-base-600/40 border-light-border transition-all duration-200 hover:border-brand-500/50 hover:scale-105"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm dark:text-text-secondary text-light-muted leading-relaxed mb-4">
            {{ t(`stack.categories.${category.key}.desc`) }}
          </p>

          <!-- Highlights -->
          <ul class="space-y-2">
            <li
              v-for="(highlight, hIdx) in getHighlights(category.key)"
              :key="hIdx"
              class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
            >
              <component :is="Check" class="w-4 h-4 mt-0.5 shrink-0 text-neon dark:text-neon text-emerald-600" />
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import {
  Palette,
  Server,
  Database,
  Blocks,
  TestTubeDiagonal,
  MapPin,
  Cloud,
  Plug,
  Smartphone,
  Check,
} from 'lucide-vue-next'

const { t, tm } = useI18n()

const categories = [
  {
    key: 'frontend',
    icon: Palette,
    iconBg: 'bg-brand-500/10',
    iconColor: 'text-brand-500',
    techs: ['Vue 3', 'Nuxt 3', 'React', 'TailwindCSS', 'TypeScript', 'Pinia'],
  },
  {
    key: 'backend',
    icon: Server,
    iconBg: 'dark:bg-cyan-glow/10 bg-cyan-500/10',
    iconColor: 'dark:text-cyan-glow text-cyan-600',
    techs: ['Node.js', 'Express', 'Python', 'Flask'],
  },
  {
    key: 'databases',
    icon: Database,
    iconBg: 'dark:bg-violet-soft/10 bg-violet-500/10',
    iconColor: 'dark:text-violet-soft text-violet-600',
    techs: ['PostgreSQL', 'Neon', 'Supabase', 'Turso', 'Redis'],
  },
  {
    key: 'architecture',
    icon: Blocks,
    iconBg: 'dark:bg-neon/10 bg-emerald-500/10',
    iconColor: 'dark:text-neon text-emerald-600',
    techs: ['SaaS', 'Multi-tenant', 'JWT', 'OAuth', 'RBAC', 'Microservices'],
  },
  {
    key: 'testing',
    icon: TestTubeDiagonal,
    iconBg: 'bg-brand-500/10',
    iconColor: 'text-brand-500',
    techs: ['Swagger', 'Postman', 'OpenAPI 3', 'Insomnia'],
  },
  {
    key: 'geo',
    icon: MapPin,
    iconBg: 'dark:bg-cyan-glow/10 bg-cyan-500/10',
    iconColor: 'dark:text-cyan-glow text-cyan-600',
    techs: ['Mapbox', 'Google Maps'],
  },
  {
    key: 'cloud',
    icon: Cloud,
    iconBg: 'dark:bg-violet-soft/10 bg-violet-500/10',
    iconColor: 'dark:text-violet-soft text-violet-600',
    techs: ['AWS', 'Vercel', 'GCP', 'Docker', 'NGINX', 'Render'],
  },
  {
    key: 'integrations',
    icon: Plug,
    iconBg: 'dark:bg-neon/10 bg-emerald-500/10',
    iconColor: 'dark:text-neon text-emerald-600',
    techs: ['GitHub', 'Git', 'Figma', 'Stripe', 'Firebase', 'CKEditor', 'Webhooks'],
  },
  {
    key: 'mobile',
    icon: Smartphone,
    iconBg: 'bg-brand-500/10',
    iconColor: 'text-brand-500',
    techs: ['PWA', 'Service Workers', 'Push Notifications'],
  },
]

function getHighlights(key) {
  return tm(`stack.categories.${key}.highlights`) || []
}
</script>
