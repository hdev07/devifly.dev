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

            <!-- Turnstile widget -->
            <div ref="turnstileContainer"></div>

            <p v-if="submitError" class="text-sm text-rose-500 text-center">
              {{ submitError }}
            </p>

            <button
              type="submit"
              :disabled="submitting"
              class="w-full px-8 py-3.5 rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-bold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.35)] transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              <span class="inline-flex items-center gap-2">
                <LucideIcon
                  v-if="submitting"
                  name="loader-circle"
                  class-name="w-4 h-4 animate-spin"
                />
                <LucideIcon v-else name="send" class-name="w-4 h-4" />
                {{ submitting ? t("contactPage.form.sending") : t("contactPage.form.submit") }}
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
                to="/#productos"
                class="block text-sm text-brand-500 hover:text-brand-400 transition-colors"
                ><span class="inline-flex items-center gap-1"
                  ><LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />{{
                    t("contactPage.explore.products")
                  }}</span
                ></router-link
              >
              <router-link
                to="/#enfoque"
                class="block text-sm text-brand-500 hover:text-brand-400 transition-colors"
                ><span class="inline-flex items-center gap-1"
                  ><LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />{{
                    t("contactPage.explore.solutions")
                  }}</span
                ></router-link
              >
              <router-link
                to="/#casos"
                class="block text-sm text-brand-500 hover:text-brand-400 transition-colors"
                ><span class="inline-flex items-center gap-1"
                  ><LucideIcon name="arrow-right" class-name="w-3.5 h-3.5" />{{
                    t("contactPage.explore.cases")
                  }}</span
                ></router-link
              >
              <router-link
                to="/#precios"
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
import { reactive, computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import CustomSelect from "../components/CustomSelect.vue";
import LucideIcon from "../components/LucideIcon.vue";
import { salesProducts, customSoftwareProduct } from "../data/salesCatalog.js";
import { siteConfig, siteLinks } from "../data/site.js";

const { t } = useI18n();

const submitted = ref(false);
const validationError = ref("");
const submitting = ref(false);
const submitError = ref("");

const turnstileContainer = ref(null);
const turnstileToken = ref("");
const turnstileWidgetId = ref(null);

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
  script.async = true;
  script.defer = true;
  script.onload = () => {
    if (window.turnstile && turnstileContainer.value) {
      turnstileWidgetId.value = window.turnstile.render(turnstileContainer.value, {
        sitekey: import.meta.env.VITE_CF_TURNSTILE_SITE_KEY,
        theme: "auto",
        callback: (token) => { turnstileToken.value = token; },
        "expired-callback": () => { turnstileToken.value = ""; },
        "error-callback": () => { turnstileToken.value = ""; },
      });
    }
  };
  document.head.appendChild(script);
});

onBeforeUnmount(() => {
  if (turnstileWidgetId.value !== null && window.turnstile) {
    window.turnstile.remove(turnstileWidgetId.value);
  }
});

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

const handleSubmit = async () => {
  if (!form.projectType) {
    validationError.value = t("contactPage.form.projectTypeRequired");
    return;
  }

  validationError.value = "";
  submitError.value = "";

  if (!turnstileToken.value) {
    submitError.value = t("contactPage.form.turnstileRequired");
    return;
  }

  submitting.value = true;

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

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        projectType: readableProjectType,
        budget: readableBudget,
        timeline: readableTimeline,
        message: form.message,
        turnstileToken: turnstileToken.value,
      }),
    });

    if (!res.ok) {
      throw new Error("send_failed");
    }

    submitted.value = true;
  } catch {
    submitError.value = t("contactPage.form.submitError");
    if (turnstileWidgetId.value !== null && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.value);
      turnstileToken.value = "";
    }
  } finally {
    submitting.value = false;
  }
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
