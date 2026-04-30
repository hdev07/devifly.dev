<script setup>
import LucideIcon from "./LucideIcon.vue";

defineProps({
  product: { type: Object, required: true },
});
</script>

<template>
  <main class="landing-shell pt-24 pb-0 overflow-hidden">
    <section class="max-w-7xl mx-auto px-6 py-20 text-center">
      <p class="inline-flex items-center gap-2 px-4 py-2 rounded-full border dark:border-base-700 border-light-border text-xs dark:text-brand-400 text-brand-600">
        <LucideIcon :name="product.badgeIcon || 'sparkles'" class-name="w-3.5 h-3.5" />
        {{ product.badge }}
      </p>
      <h1 class="font-display text-4xl sm:text-6xl font-bold mt-6 mb-5 dark:text-white text-light-text">
        {{ product.title }}
      </h1>
      <p class="max-w-2xl mx-auto dark:text-text-secondary text-light-muted mb-8">
        {{ product.subtitle }}
      </p>
      <div class="flex flex-wrap justify-center gap-3">
        <a :href="product.primaryCta.href" target="_blank" rel="noopener noreferrer" class="px-7 py-3.5 rounded-xl text-white font-semibold bg-brand-600 hover:bg-brand-500 transition">
          {{ product.primaryCta.label }}
        </a>
        <a :href="product.secondaryCta.href" target="_blank" rel="noopener noreferrer" class="px-7 py-3.5 rounded-xl border dark:border-base-700 border-light-border dark:text-text-secondary text-light-muted hover:dark:text-white transition">
          {{ product.secondaryCta.label }}
        </a>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="font-display text-3xl font-bold dark:text-white text-light-text mb-8">El problema</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article v-for="item in product.painPoints" :key="item" class="p-5 rounded-xl border dark:border-base-700 border-light-border dark:bg-base-900/40">
          <p class="dark:text-text-secondary text-light-muted">{{ item }}</p>
        </article>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="font-display text-3xl font-bold dark:text-white text-light-text mb-8">La solución</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article v-for="item in product.features" :key="item.title" class="p-5 rounded-xl border dark:border-base-700 border-light-border">
          <div class="flex items-center gap-2 mb-2">
            <LucideIcon :name="item.icon || 'check'" class-name="w-4 h-4 text-brand-500" />
            <h3 class="font-semibold dark:text-white text-light-text">{{ item.title }}</h3>
          </div>
          <p class="text-sm dark:text-text-secondary text-light-muted">{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="font-display text-3xl font-bold dark:text-white text-light-text mb-8">Beneficios</h2>
      <div class="flex flex-wrap gap-3">
        <div v-for="item in product.benefits" :key="item" class="px-4 py-2 rounded-full border dark:border-base-700 border-light-border text-sm dark:text-text-secondary text-light-muted">
          {{ item }}
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="font-display text-3xl font-bold dark:text-white text-light-text mb-8">Planes</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <article
          v-for="pkg in product.packages"
          :key="pkg.name"
          class="p-6 rounded-2xl border dark:border-base-700 border-light-border flex flex-col"
          :class="pkg.highlighted ? 'ring-2 ring-brand-500/50' : ''"
        >
          <h3 class="font-display text-2xl font-bold dark:text-white text-light-text">{{ pkg.name }}</h3>
          <p class="dark:text-text-secondary text-light-muted text-sm mb-2">{{ pkg.tagline }}</p>
          <p class="font-display text-3xl font-bold dark:text-white text-light-text mb-4">{{ pkg.price }}</p>
          <ul class="space-y-2 mb-5">
            <li v-for="feature in pkg.features" :key="feature" class="text-sm dark:text-text-secondary text-light-muted">
              - {{ feature }}
            </li>
          </ul>
          <a :href="pkg.wa" target="_blank" rel="noopener noreferrer" class="mt-auto text-center px-4 py-2.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-500 transition">
            Contratar
          </a>
        </article>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 class="font-display text-4xl font-bold dark:text-white text-light-text mb-4">
        {{ product.finalTitle }}
      </h2>
      <p class="dark:text-text-secondary text-light-muted mb-8">{{ product.finalSubtitle }}</p>
      <a :href="product.primaryCta.href" target="_blank" rel="noopener noreferrer" class="inline-flex px-8 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-500 transition">
        {{ product.primaryCta.label }}
      </a>
    </section>
  </main>
</template>
