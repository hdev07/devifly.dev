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
          <!-- Success state -->
          <div
            v-if="submitted"
            class="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <div
              class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5"
            >
              <LucideIcon name="check" class-name="w-7 h-7 text-emerald-400" />
            </div>
            <h3
              class="font-display text-2xl font-bold dark:text-white text-light-text mb-2"
            >
              {{ t("contactPage.form.successTitle") }}
            </h3>
            <p class="dark:text-text-secondary text-light-muted mb-6 max-w-sm">
              {{ t("contactPage.form.successDesc") }}
            </p>
            <button
              @click="resetForm"
              class="px-6 py-2.5 rounded-xl border dark:border-base-700/60 border-light-border dark:text-text-secondary text-light-muted hover:border-brand-500/50 hover:text-brand-500 transition text-sm font-semibold"
            >
              {{ t("contactPage.form.sendAnother") }}
            </button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
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
              <p v-if="validationError" class="mt-2 text-sm text-rose-500">
                {{ validationError }}
              </p>
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
              class="w-full px-8 py-3.5 rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-bold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.35)] transition-all text-sm"
            >
              <span class="inline-flex items-center gap-2">
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
                {{ t("contactPage.form.submit") }}
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
                :href="siteLinks.whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
              >
                <LucideIcon name="message-circle" class-name="w-4 h-4" />
                {{ siteConfig.phoneDisplay }}
              </a>
              <a
                :href="siteLinks.email"
                class="flex items-center gap-3 text-sm dark:text-text-secondary text-light-muted hover:text-brand-500 transition-colors"
              >
                <LucideIcon name="mail" class-name="w-4 h-4" />
                {{ siteConfig.email }}
              </a>
              <a
                :href="siteConfig.githubUrl"
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
import { reactive, computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import CustomSelect from "../components/CustomSelect.vue";
import LucideIcon from "../components/LucideIcon.vue";
import { salesProducts, customSoftwareProduct } from "../data/salesCatalog.js";
import { siteConfig, siteLinks } from "../data/site.js";

const { t } = useI18n();

const submitted = ref(false);
const validationError = ref("");

const form = reactive({
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
});

const projectTypeOptions = computed(() => [
  ...salesProducts.map((product) => ({
    value: product.contactValue,
    label: t(`contactPage.form.types.${product.contactValue}`),
  })),
  {
    value: customSoftwareProduct.contactValue,
    label: t(`contactPage.form.types.${customSoftwareProduct.contactValue}`),
  },
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

const getOptionLabel = (options, value) => {
  const match = options.find((option) => option.value === value);
  return match?.label ?? value;
};

const handleSubmit = () => {
  if (!form.projectType) {
    validationError.value = t("contactPage.form.projectTypeRequired");
    return;
  }

  validationError.value = "";

  const readableProjectType = getOptionLabel(
    projectTypeOptions.value,
    form.projectType,
  );
  const readableBudget = form.budget
    ? getOptionLabel(budgetOptions, form.budget)
    : null;
  const readableTimeline = form.timeline
    ? getOptionLabel(timelineOptions.value, form.timeline)
    : null;

  const lines = [
    `👋 *Nuevo contacto desde devifly.dev*`,
    ``,
    `👤 *Nombre:* ${form.name}`,
    `📧 *Email:* ${form.email}`,
    `🛠️ *Tipo de proyecto:* ${readableProjectType}`,
    readableBudget ? `💰 *Presupuesto:* ${readableBudget}` : null,
    readableTimeline ? `⏱️ *Plazo:* ${readableTimeline}` : null,
    ``,
    `📝 *Mensaje:*`,
    form.message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  window.open(
    `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines)}`,
    "_blank",
    "noopener,noreferrer",
  );
  submitted.value = true;
};

const resetForm = () => {
  Object.assign(form, {
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  submitted.value = false;
  validationError.value = "";
};
</script>
