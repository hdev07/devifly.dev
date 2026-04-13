<template>
  <main class="pt-24 pb-0">
    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-base-800/60 bg-light-card/80 border dark:border-base-700/50 border-light-border mb-6 text-sm dark:text-text-secondary text-light-muted"
      >
        <LucideIcon name="circle-dollar-sign" class-name="w-4 h-4" />
        {{ t("pricingPage.badge") }}
      </div>
      <h1
        class="font-display text-4xl sm:text-5xl font-bold dark:text-white text-light-text mb-6 max-w-3xl mx-auto"
      >
        {{ t("pricingPage.title") }}
      </h1>
      <p
        class="text-lg dark:text-text-secondary text-light-muted max-w-2xl mx-auto"
      >
        {{ t("pricingPage.subtitle") }}
      </p>
    </div>

    <!-- Product pricing sections -->
    <div class="max-w-7xl mx-auto px-6 space-y-20 mb-24">
      <!-- Landing Pages -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <LucideIcon name="rocket" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            Landing Pages
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Basic -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              One Page
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Página única para promocionar un servicio o captar leads."
                  : "Single page to promote a service or capture leads."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$4,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in landingBasicFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
          <!-- Pro -->
          <div
            class="p-6 rounded-2xl border-2 border-brand-500 relative"
            style="
              background: linear-gradient(
                145deg,
                rgba(59, 130, 246, 0.06),
                rgba(34, 211, 238, 0.04)
              );
            "
          >
            <div
              class="absolute -top-3 right-4 py-1 px-3 bg-brand-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Multi-Sección
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Sitio completo con múltiples páginas y catálogo."
                  : "Full website with multiple pages and catalog."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$7,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in landingProFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500 text-white font-bold hover:bg-brand-600 transition text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
          <!-- Premium -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="font-display text-lg font-bold dark:text-white text-light-text"
              >
                Portal Avanzado
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >Premium</span
              >
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Portal con CMS 100% autoadministrable y SEO."
                  : "Portal with 100% self-managed CMS and SEO."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$12,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in landingPremFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Invitaciones Digitales -->
      <div>
        <div class="flex items-center gap-3 mb-2">
          <LucideIcon name="mail" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            {{
              locale === "es" ? "Invitaciones Digitales" : "Digital Invitations"
            }}
          </h2>
        </div>
        <p class="text-sm dark:text-text-secondary text-light-muted mb-8 ml-12">
          {{
            locale === "es"
              ? "Bodas, XV años, bautizos, aniversarios y más."
              : "Weddings, quinceañeras, baptisms, anniversaries, and more."
          }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Esencial -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Esencial
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Bautizos, comuniones y eventos íntimos."
                  : "Baptisms, communions, and intimate events."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$499</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in invEsencialFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/invitaciones/esencial"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-brand-500 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- Pro -->
          <div
            class="p-6 rounded-2xl border-2 border-brand-500 relative"
            style="
              background: linear-gradient(
                145deg,
                rgba(59, 130, 246, 0.06),
                rgba(34, 211, 238, 0.04)
              );
            "
          >
            <div
              class="absolute -top-3 right-4 py-1 px-3 bg-brand-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Pro
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "XV años, graduaciones y fiestas temáticas."
                  : "Quinceañeras, graduations, and themed parties."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$899</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in invProFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-brand-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/invitaciones/pro"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-brand-500 text-white font-bold hover:bg-brand-600 transition text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- Premium -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Premium
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Bodas y eventos premium con gestión completa."
                  : "Weddings and premium events with full management."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$1,599</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in invPremiumFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/invitaciones/premium"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Menús Digitales -->
      <div>
        <div class="flex items-center gap-3 mb-2">
          <LucideIcon name="utensils-crossed" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            {{
              locale === "es"
                ? "Menús Digitales para Restaurantes"
                : "Digital Menus for Restaurants"
            }}
          </h2>
        </div>
        <p class="text-sm dark:text-text-secondary text-light-muted mb-8 ml-12">
          {{
            locale === "es"
              ? "Menú elegante con acceso por QR, categorías, búsqueda y más."
              : "Elegant menu with QR access, categories, search and more."
          }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Esencial -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Esencial
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Menú digital básico para restaurantes pequeños."
                  : "Basic digital menu for small restaurants."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$3,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in menuEsencialFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-amber-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/menus-digitales/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold hover:bg-amber-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-amber-500 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- Profesional -->
          <div
            class="p-6 rounded-2xl border-2 border-amber-500 relative"
            style="
              background: linear-gradient(
                145deg,
                rgba(245, 158, 11, 0.06),
                rgba(251, 191, 36, 0.04)
              );
            "
          >
            <div
              class="absolute -top-3 right-4 py-1 px-3 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Profesional
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para restaurantes medianos con carta completa."
                  : "For mid-size restaurants with a full menu."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$7,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in menuProFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-amber-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/menus-digitales/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold hover:bg-amber-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- Enterprise -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="font-display text-lg font-bold dark:text-white text-light-text"
              >
                Enterprise
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >Premium</span
              >
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Cadenas y franquicias con múltiples sucursales."
                  : "Chains and franchises with multiple locations."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$14,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in menuEnterpriseFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/menus-digitales/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Sistema de Citas -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <LucideIcon name="calendar-days" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            {{ locale === "es" ? "Sistema de Citas" : "Appointment System" }}
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Basic -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{ locale === "es" ? "Agenda Básica" : "Basic Scheduling" }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Calendario con confirmaciones automáticas."
                  : "Calendar with automatic confirmations."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$7,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in citasBasicFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-emerald-500"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold hover:bg-emerald-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
          <!-- Pro -->
          <div
            class="p-6 rounded-2xl border-2 border-emerald-500 relative"
            style="
              background: linear-gradient(
                145deg,
                rgba(16, 185, 129, 0.06),
                rgba(52, 211, 153, 0.04)
              );
            "
          >
            <div
              class="absolute -top-3 right-4 py-1 px-3 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{
                locale === "es" ? "Agenda Pro + CRM" : "Pro Scheduling + CRM"
              }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Historial de clientes, WhatsApp y pagos en línea."
                  : "Client history, WhatsApp, and online payments."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$14,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in citasProFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-emerald-500"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
          <!-- Premium -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="font-display text-lg font-bold dark:text-white text-light-text"
              >
                {{ locale === "es" ? "Franquicias" : "Franchise" }}
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >Premium</span
              >
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Múltiples sucursales, finanzas y PWA instalable."
                  : "Multiple branches, finances, and installable PWA."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$24,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in citasPremFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- E-commerce -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <LucideIcon name="shopping-cart" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            E-commerce
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Esencial -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Esencial
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Diseño estándar con pagos y gestión de pedidos."
                  : "Standard design with payments and orders."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$14,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in ecommerceBasicFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-amber-500"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold hover:bg-amber-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
          <!-- Básica -->
          <div
            class="p-6 rounded-2xl border-2 border-amber-500 relative"
            style="
              background: linear-gradient(
                145deg,
                rgba(245, 158, 11, 0.06),
                rgba(251, 191, 36, 0.04)
              );
            "
          >
            <div
              class="absolute -top-3 right-4 py-1 px-3 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Básica
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Inventario avanzado e integraciones logísticas."
                  : "Advanced inventory and logistics integrations."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$24,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in ecommerceProFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-amber-500"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
          <!-- Pro -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="font-display text-lg font-bold dark:text-white text-light-text"
              >
                Pro
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >Premium</span
              >
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Múltiples vendedores y app móvil instalable."
                  : "Multiple vendors and installable mobile app."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$39,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in ecommercePremFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2"
                >{{ t("pricingPage.cta")
                }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
              /></span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Catálogo Digital para Nenis -->
      <div>
        <div class="flex items-center gap-3 mb-2">
          <LucideIcon name="shopping-bag" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            {{
              locale === "es"
                ? "Catálogo Digital para Nenis"
                : "Digital Catalog for Sellers"
            }}
          </h2>
        </div>
        <p class="text-sm dark:text-text-secondary text-light-muted mb-8 ml-12">
          {{
            locale === "es"
              ? "Emprendedoras que venden por Facebook y WhatsApp."
              : "Entrepreneurs selling through Facebook and WhatsApp."
          }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Básico -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{ locale === "es" ? "Básico" : "Basic" }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para empezar a vender de forma profesional."
                  : "To start selling professionally."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$1,499</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in catalogoBasicFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-pink-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/catalogos-nenis/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-500 font-semibold hover:bg-pink-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-pink-500 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- Pro -->
          <div
            class="p-6 rounded-2xl border-2 border-pink-500 relative"
            style="
              background: linear-gradient(
                145deg,
                rgba(236, 72, 153, 0.06),
                rgba(232, 121, 249, 0.04)
              );
            "
          >
            <div
              class="absolute -top-3 right-4 py-1 px-3 bg-pink-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Pro
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para nenis que ya venden fuerte y quieren crecer."
                  : "For sellers already scaling their business."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$3,499</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in catalogoProFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-pink-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/catalogos-nenis/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition text-sm shadow-[0_0_20px_rgba(236,72,153,0.3)]"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-500 font-semibold hover:bg-pink-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- Premium -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="font-display text-lg font-bold dark:text-white text-light-text"
              >
                Premium
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >VIP</span
              >
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para negocios serios con múltiples vendedoras."
                  : "For serious businesses with multiple sellers."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$6,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in catalogoPremFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/catalogos-nenis/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="search" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- SaaS -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <LucideIcon name="zap" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            {{ locale === "es" ? "Plataformas SaaS" : "SaaS Platforms" }}
          </h2>
        </div>
        <div
          class="p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3
                class="font-display text-xl font-bold dark:text-white text-light-text mb-2"
              >
                {{
                  locale === "es" ? "Desarrollo a medida" : "Custom development"
                }}
              </h3>
              <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
                {{
                  locale === "es"
                    ? "Tu idea convertida en plataforma SaaS con arquitectura empresarial, multi-tenancy y pagos recurrentes."
                    : "Your idea turned into a SaaS platform with enterprise architecture, multi-tenancy, and recurring payments."
                }}
              </p>
              <div class="mb-6">
                <span
                  class="font-display text-2xl font-bold dark:text-white text-light-text"
                  >$39,999+</span
                >
                <span
                  class="text-sm dark:text-text-secondary text-light-muted ml-1"
                  >MXN</span
                >
              </div>
              <p
                class="text-xs dark:text-text-secondary text-light-muted italic"
              >
                {{
                  locale === "es"
                    ? "Precio varía según módulos, integraciones y complejidad. Cotización personalizada."
                    : "Price varies by modules, integrations, and complexity. Custom quote."
                }}
              </p>
            </div>
            <div>
              <ul class="space-y-2">
                <li
                  v-for="f in saasFeats"
                  :key="f"
                  class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
                >
                  <LucideIcon
                    name="sparkles"
                    class-name="w-4 h-4 mt-0.5 text-cyan-400"
                  />
                  {{ f }}
                </li>
              </ul>
              <router-link
                to="/contact"
                class="mt-6 block w-full text-center px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Salones de Eventos -->
      <div>
        <div class="flex items-center gap-3 mb-2">
          <LucideIcon name="calendar-heart" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            {{
              locale === "es"
                ? "Sistema PRO para Salones de Eventos"
                : "PRO System for Event Venues"
            }}
          </h2>
        </div>
        <p class="text-sm dark:text-text-secondary text-light-muted mb-8 ml-12">
          {{
            locale === "es"
              ? "Salones de fiestas, jardines de eventos y salones de bodas."
              : "Party halls, event gardens, and wedding venues."
          }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Esencial -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{ locale === "es" ? "Esencial" : "Essential" }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Para salones pequeños que empiezan a vender en línea."
                  : "For small venues starting to sell online."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$7,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in salonesEsencialFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-rose-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/salones-eventos/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 font-semibold hover:bg-rose-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="eye" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-rose-500 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- PRO (popular) -->
          <div
            class="p-6 rounded-2xl border-2 border-rose-500 relative"
            style="
              background: linear-gradient(
                145deg,
                rgba(244, 63, 94, 0.06),
                rgba(192, 38, 211, 0.04)
              );
            "
          >
            <div
              class="absolute -top-3 right-4 py-1 px-3 bg-rose-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              PRO
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "El sistema completo para conseguir más reservaciones."
                  : "The complete system to get more bookings."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$9,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in salonesPROFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="check"
                  class-name="w-4 h-4 mt-0.5 text-rose-500"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/salones-eventos/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-rose-500 text-white font-bold hover:bg-rose-600 transition text-sm shadow-[0_0_20px_rgba(244,63,94,0.3)]"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="eye" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 font-semibold hover:bg-rose-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
          <!-- Premium -->
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="font-display text-lg font-bold dark:text-white text-light-text"
              >
                Premium
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20 font-semibold"
                >Elite</span
              >
            </div>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Multi-salón con CRM, pagos y automatización total."
                  : "Multi-venue with CRM, payments, and full automation."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$16,999</span
              ><span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in salonesPremiumFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon
                  name="sparkles"
                  class-name="w-4 h-4 mt-0.5 text-violet-400"
                />
                {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/salones-eventos/demo"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  ><LucideIcon name="eye" class-name="w-4 h-4" />Demo</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"
                  >{{ t("pricingPage.cta")
                  }}<LucideIcon name="arrow-right" class-name="w-4 h-4"
                /></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Development -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <LucideIcon name="wrench" class-name="w-8 h-8" />
          <h2
            class="font-display text-2xl font-bold dark:text-white text-light-text"
          >
            {{ locale === "es" ? "Desarrollo a Medida" : "Custom Development" }}
          </h2>
        </div>
        <div
          class="p-8 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border text-center"
        >
          <p
            class="text-lg dark:text-text-secondary text-light-muted mb-2 max-w-2xl mx-auto"
          >
            {{
              locale === "es"
                ? "¿Tu proyecto no encaja en ninguna categoría?"
                : "Your project doesn't fit any category?"
            }}
          </p>
          <p
            class="text-sm dark:text-text-secondary text-light-muted mb-6 max-w-2xl mx-auto"
          >
            {{
              locale === "es"
                ? "Si lo puedes imaginar, lo podemos construir. Cuéntanos tu idea y te damos una cotización personalizada."
                : "If you can imagine it, we can build it. Tell us your idea and we'll give you a custom quote."
            }}
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all text-sm"
          >
            {{
              locale === "es"
                ? "Cotizar proyecto personalizado"
                : "Quote custom project"
            }}
            <LucideIcon name="arrow-right" class-name="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Note -->
    <div class="max-w-3xl mx-auto px-6 mb-24 text-center">
      <p class="text-sm dark:text-text-secondary text-light-muted">
        {{ t("pricingPage.note") }}
      </p>
    </div>

    <!-- CTA -->
    <div
      class="dark:bg-base-800/30 bg-light-card/50 border-t dark:border-base-700/50 border-light-border py-20 px-6 text-center"
    >
      <h2
        class="font-display text-3xl font-bold dark:text-white text-light-text mb-4"
      >
        {{ t("pricingPage.ctaTitle") }}
      </h2>
      <p
        class="dark:text-text-secondary text-light-muted mb-8 max-w-xl mx-auto"
      >
        {{ t("pricingPage.ctaSubtitle") }}
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
      >
        {{ t("pricingPage.ctaButton") }}
        <LucideIcon name="arrow-right" class-name="w-4 h-4" />
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LucideIcon from "../components/LucideIcon.vue";

const { t, locale } = useI18n();

const landingBasicFeats = [
  "Diseño UX/UI personalizado",
  "Responsive (móvil, tablet, desktop)",
  "Formulario de contacto / WhatsApp",
  "SEO básico optimizado",
  "Deploy en tu dominio",
  "Entrega: 1–2 semanas",
];

const landingProFeats = [
  "Todo lo de One Page",
  "Múltiples páginas",
  "Blog o catálogo básico",
  "Animaciones premium",
  "Integración con analytics",
  "Entrega: 2–3 semanas",
];

const landingPremFeats = [
  "Todo lo de Multi-Sección",
  "Panel CMS autoadministrable",
  "E-commerce básico",
  "SEO avanzado + CRM automations",
  "Soporte prioritario",
  "Entrega: 4–5 semanas",
];

const invEsencialFeats = [
  "Diseño responsivo de 1 página",
  "Galería de fotos (5)",
  "Formulario RSVP",
  "Google Calendar",
  "Enlace compartible",
];

const invProFeats = [
  "Todo lo de Esencial",
  "Cuenta regresiva en vivo",
  "Música de fondo",
  "Mesa de regalos",
  "Animaciones cinematográficas",
  "Galería (10 fotos)",
];

const invPremiumFeats = [
  "Todo lo de Pro",
  "Panel admin de invitados",
  "QR único por invitado",
  "Multi-idioma (ES/EN)",
  "Dominio personalizado",
  "Estadísticas completas",
];

const citasBasicFeats = [
  "Calendario interactivo",
  "Confirmaciones por email",
  "Hasta 3 tipos de servicio",
  "Google Calendar sync",
  "Landing page incluida",
  "Entrega: 2–3 semanas",
];

const citasProFeats = [
  "Todo lo de Agenda Básica",
  "Panel admin + CRM",
  "Recordatorios WhatsApp",
  "Pagos en línea (Stripe)",
  "Múltiples profesionales",
  "Entrega: 3–4 semanas",
];

const citasPremFeats = [
  "Todo lo de Agenda Pro",
  "Multi-sucursal / Franquicia",
  "PWA Instalable",
  "Facturación automatizada",
  "Roles de staff avanzados",
  "Entrega: 5–7 semanas",
];

const ecommerceBasicFeats = [
  "Catálogo de productos",
  "Carrito de compras",
  "Pagos (Stripe / PayPal)",
  "Panel admin de pedidos",
  "Notificaciones por email",
  "Entrega: 3–4 semanas",
];

const ecommerceProFeats = [
  "Todo lo de Tienda Básica",
  "Inventario avanzado",
  "Cupones y descuentos",
  "Integraciones logísticas",
  "Reportes de ventas",
  "Entrega: 4–6 semanas",
];

const ecommercePremFeats = [
  "Todo lo de Tienda Pro",
  "Multi-vendedor (Marketplace)",
  "Suscripciones recurrentes",
  "App PWA instalable",
  "Analíticas avanzadas",
  "Entrega: 8–10 semanas",
];

const catalogoBasicFeats = [
  "Hasta 50 productos",
  "1 categoría",
  "Galería de 2 fotos por producto",
  "Control de precios",
  "Link compartible",
  "Botón de WhatsApp",
  "Diseño responsive",
  "Entrega: 1 semana",
];

const catalogoProFeats = [
  "Todo lo del Básico",
  "Productos ilimitados",
  "Categorías ilimitadas",
  "Hasta 5 fotos por producto",
  "Control de tallas y colores",
  "Control de stock",
  "Buscador de productos",
  "Panel admin completo",
  "Entrega: 2 semanas",
];

const catalogoPremFeats = [
  "Todo lo del Pro",
  "Múltiples vendedoras (catálogos)",
  "Cupones y descuentos",
  "Reportes de productos más vistos",
  "Dominio personalizado",
  "Notificaciones por WhatsApp",
  "Integración con pagos en línea",
  "Soporte prioritario",
  "Entrega: 3–4 semanas",
];

const menuEsencialFeats = [
  "Hasta 30 platillos",
  "3 categorías",
  "Acceso por código QR",
  "Diseño responsive premium",
  "1 foto por platillo",
  "Entrega: 1 semana",
];

const menuProFeats = [
  "Todo lo de Esencial",
  "Platillos ilimitados",
  "Categorías y subcategorías",
  "Búsqueda de platillos",
  "Hasta 3 fotos por platillo",
  "Panel admin para editar menú",
  "Sección de promociones",
  "Entrega: 2 semanas",
];

const menuEnterpriseFeats = [
  "Todo lo de Profesional",
  "Multi-sucursal / Franquicia",
  "Menú por horario (desayuno/comida/cena)",
  "Analíticas de platillos más vistos",
  "Dominio personalizado",
  "Integración con POS",
  "Soporte prioritario",
  "Entrega: 3–4 semanas",
];

const salonesEsencialFeats = [
  "Página web de 1 sección",
  "Galería de fotos básica",
  "Botón de WhatsApp",
  "Integración Google Maps",
  "Responsive (móvil + desktop)",
  "SEO básico",
  "Entrega: 1–2 semanas",
];

const salonesPROFeats = [
  "Todo lo de Esencial",
  "Agenda de fechas disponibles",
  "Formulario de cotización inteligente",
  "WhatsApp con mensaje prellenado",
  "Galería premium con secciones",
  "Sección de paquetes y precios",
  "Textos de venta incluidos",
  "Entrega: 2 semanas",
];

const salonesPremiumFeats = [
  "Todo lo de PRO",
  "Panel admin para gestionar fechas",
  "CRM básico de prospectos",
  "Integración con pagos (apartado)",
  "Multi-salón / múltiples espacios",
  "Notificaciones por WhatsApp",
  "Dominio personalizado",
  "Garantía de resultados 30 días",
  "Entrega: 3–4 semanas",
];

const saasFeats = [
  "Arquitectura multi-tenant",
  "Autenticación + roles + permisos",
  "Pagos recurrentes con Stripe",
  "Dashboard completo",
  "API REST escalable",
  "Base de datos relacional",
  "CI/CD + deploy automatizado",
  "Soporte post-lanzamiento",
];
</script>

<style scoped>
:deep(.grid) > div {
  display: flex;
  flex-direction: column;
}

:deep(.grid) > div > a:last-child,
:deep(.grid) > div > div:last-child {
  margin-top: auto;
}
</style>
