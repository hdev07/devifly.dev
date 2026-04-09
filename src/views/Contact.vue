<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="message-circle" class-name="w-4 h-4" />
        {{ t("contactPage.badge") }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{ t("contactPage.title") }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{ t("contactPage.subtitle") }}
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- Form -->
        <div class="lg:col-span-3">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label
                class="block text-sm font-medium dark:text-white text-light-text mb-2"
                >{{ t("contactPage.form.name") }} *</label
              >
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl dark:bg-base-800/60 bg-light-surface border dark:border-base-700/50 border-light-border dark:text-white text-light-text placeholder:dark:text-text-secondary placeholder:text-light-muted focus:border-brand-500 focus:outline-none transition"
                :placeholder="t('contactPage.form.namePlaceholder')"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                class="block text-sm font-medium dark:text-white text-light-text mb-2"
                >{{ t("contactPage.form.email") }} *</label
              >
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-xl dark:bg-base-800/60 bg-light-surface border dark:border-base-700/50 border-light-border dark:text-white text-light-text placeholder:dark:text-text-secondary placeholder:text-light-muted focus:border-brand-500 focus:outline-none transition"
                :placeholder="t('contactPage.form.emailPlaceholder')"
              />
            </div>

            <!-- Project Type -->
            <div>
              <label
                class="block text-sm font-medium dark:text-white text-light-text mb-2"
                >{{ t("contactPage.form.projectType") }} *</label
              >
              <CustomSelect
                v-model="form.projectType"
                :options="projectTypeOptions"
                :placeholder="t('contactPage.form.selectOption')"
              />
            </div>

            <!-- Budget -->
            <div>
              <label
                class="block text-sm font-medium dark:text-white text-light-text mb-2"
                >{{ t("contactPage.form.budget") }}</label
              >
              <CustomSelect
                v-model="form.budget"
                :options="budgetOptions"
                :placeholder="t('contactPage.form.selectOption')"
              />
            </div>

            <!-- Timeline -->
            <div>
              <label
                class="block text-sm font-medium dark:text-white text-light-text mb-2"
                >{{ t("contactPage.form.timeline") }}</label
              >
              <CustomSelect
                v-model="form.timeline"
                :options="timelineOptions"
                :placeholder="t('contactPage.form.selectOption')"
              />
            </div>

            <!-- Message -->
            <div>
              <label
                class="block text-sm font-medium dark:text-white text-light-text mb-2"
                >{{ t("contactPage.form.message") }} *</label
              >
              <textarea
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-3 rounded-xl dark:bg-base-800/60 bg-light-surface border dark:border-base-700/50 border-light-border dark:text-white text-light-text placeholder:dark:text-text-secondary placeholder:text-light-muted focus:border-brand-500 focus:outline-none transition resize-none"
                :placeholder="t('contactPage.form.messagePlaceholder')"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all text-sm"
            >
              <span class="inline-flex items-center gap-2">
                {{ t("contactPage.form.submit") }}
                <LucideIcon name="arrow-right" class-name="w-4 h-4" />
              </span>
            </button>
          </form>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Direct contact -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-4"
            >
              {{ t("contactPage.direct.title") }}
            </h3>
            <div class="space-y-4">
              <a
                href="https://wa.me/+525583414659"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
              >
                <LucideIcon name="message-circle" class-name="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="mailto:devifly.dev@gmail.com"
                class="flex items-center gap-3 text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
              >
                <LucideIcon name="mail" class-name="w-4 h-4" />
                devifly.dev@gmail.com
              </a>
              <a
                href="https://github.com/devifly"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
              >
                <LucideIcon name="github" class-name="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          <!-- Response time -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-2"
            >
              {{ t("contactPage.response.title") }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted">
              {{ t("contactPage.response.desc") }}
            </p>
          </div>

          <!-- Quick links -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-4"
            >
              {{ t("contactPage.explore.title") }}
            </h3>
            <div class="space-y-2">
              <router-link
                to="/products"
                class="block text-sm text-brand-500 hover:text-brand-400 transition-colors"
                ><span class="inline-flex items-center gap-1"
                  ><LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />{{
                    t("contactPage.explore.products")
                  }}</span
                ></router-link
              >
              <router-link
                to="/solutions"
                class="block text-sm text-brand-500 hover:text-brand-400 transition-colors"
                ><span class="inline-flex items-center gap-1"
                  ><LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />{{
                    t("contactPage.explore.solutions")
                  }}</span
                ></router-link
              >
              <router-link
                to="/case-studies"
                class="block text-sm text-brand-500 hover:text-brand-400 transition-colors"
                ><span class="inline-flex items-center gap-1"
                  ><LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />{{
                    t("contactPage.explore.cases")
                  }}</span
                ></router-link
              >
              <router-link
                to="/pricing"
                class="block text-sm text-brand-500 hover:text-brand-400 transition-colors"
                ><span class="inline-flex items-center gap-1"
                  ><LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />{{
                    t("contactPage.explore.pricing")
                  }}</span
                ></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import CustomSelect from "../components/CustomSelect.vue";
import LucideIcon from "../components/LucideIcon.vue";

const { t } = useI18n();

const form = reactive({
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
});

const projectTypeOptions = computed(() => [
  { value: "landing", label: "Landing Page" },
  { value: "invitation", label: t("contactPage.form.types.invitation") },
  { value: "appointments", label: t("contactPage.form.types.appointments") },
  { value: "ecommerce", label: "E-commerce" },
  { value: "saas", label: t("contactPage.form.types.saas") },
  { value: "custom", label: t("contactPage.form.types.custom") },
]);

const budgetOptions = [
  { value: "< $5,000 MXN", label: "< $5,000 MXN" },
  { value: "$5,000 - $15,000 MXN", label: "$5,000 – $15,000 MXN" },
  { value: "$15,000 - $30,000 MXN", label: "$15,000 – $30,000 MXN" },
  { value: "$30,000+ MXN", label: "$30,000+ MXN" },
];

const timelineOptions = computed(() => [
  { value: "1-2 weeks", label: `1-2 ${t("contactPage.form.weeks")}` },
  { value: "2-4 weeks", label: `2-4 ${t("contactPage.form.weeks")}` },
  { value: "1-2 months", label: `1-2 ${t("contactPage.form.months")}` },
  { value: "flexible", label: t("contactPage.form.flexible") },
]);

const handleSubmit = () => {
  const subject = encodeURIComponent(`Nuevo proyecto: ${form.projectType}`);
  const body = encodeURIComponent(
    `Nombre: ${form.name}\nEmail: ${form.email}\nTipo: ${form.projectType}\nPresupuesto: ${form.budget}\nTimeline: ${form.timeline}\n\n${form.message}`,
  );
  window.open(`mailto:devifly.dev@gmail.com?subject=${subject}&body=${body}`);
};
</script>
