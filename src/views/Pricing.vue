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
    <div class="max-w-6xl mx-auto px-6 space-y-20 mb-24">
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Landing One Page
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Página única con todas las secciones. Ideal para promocionar un servicio o captar leads."
                  : "Single page with all sections. Ideal for promoting a service or capturing leads."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$4,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in landingOneFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-brand-500" /> {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
            </router-link>
          </div>
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              Landing Multi-Sección
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Sitio web con múltiples páginas, blog o catálogo. Para negocios que necesitan más presencia."
                  : "Website with multiple pages, blog or catalog. For businesses that need more presence."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$7,999 – $14,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in landingMultiFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-brand-500" /> {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
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
                >$1,499</span
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
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-brand-500" /> {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/invitaciones/esencial"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"><LucideIcon name="search" class-name="w-4 h-4" />Demo</span>
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-brand-500 transition text-sm"
              >
                <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
              </router-link>
            </div>
          </div>
          <!-- Básica -->
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
              class="absolute top-0 right-0 py-1 px-3 bg-brand-500 text-white text-xs font-bold rounded-bl-xl"
            >
              {{ t("pricingPage.popular") }}
            </div>
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1 mt-2"
            >
              Básica
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
                >$2,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in invBasicaFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-brand-500" /> {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/invitaciones/basica"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-brand-500 text-white font-bold hover:bg-brand-600 transition text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span class="inline-flex items-center gap-2"><LucideIcon name="search" class-name="w-4 h-4" />Demo</span>
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
              </router-link>
            </div>
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
                  ? "Bodas y eventos premium con gestión completa."
                  : "Weddings and premium events with full management."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$5,999</span
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
                <LucideIcon name="sparkles" class-name="w-4 h-4 mt-0.5 text-violet-400" /> {{ f }}
              </li>
            </ul>
            <div class="flex flex-col gap-2">
              <router-link
                to="/invitaciones/pro"
                class="block w-full text-center px-4 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold hover:bg-violet-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2"><LucideIcon name="search" class-name="w-4 h-4" />Demo</span>
              </router-link>
              <router-link
                to="/contact"
                class="block w-full text-center px-4 py-2.5 rounded-xl dark:bg-base-700/50 bg-light-card border dark:border-base-600/50 border-light-border dark:text-text-secondary text-light-muted font-semibold hover:text-violet-400 transition text-sm"
              >
                <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  ? "Calendario online con confirmaciones automáticas. Ideal para consultores, estilistas y profesionistas."
                  : "Online calendar with automatic confirmations. Ideal for consultants, stylists, and professionals."
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
                v-for="f in citasBasicFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-emerald-500" /> {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold hover:bg-emerald-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
            </router-link>
          </div>
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{
                locale === "es"
                  ? "Agenda Completa + CRM"
                  : "Full Scheduling + CRM"
              }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Sistema completo con historial de clientes, múltiples servicios, pagos en línea y panel de gestión."
                  : "Complete system with client history, multiple services, online payments, and management panel."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$14,999 – $24,999</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in citasFullFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-emerald-500" /> {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold hover:bg-emerald-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{ locale === "es" ? "Tienda Online" : "Online Store" }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Catálogo de productos, carrito, pagos integrados y gestión de pedidos."
                  : "Product catalog, cart, integrated payments, and order management."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$14,999 – $24,999</span
              >
              <span
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
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-amber-500" /> {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold hover:bg-amber-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
            </router-link>
          </div>
          <div
            class="p-6 rounded-2xl dark:bg-base-800/40 bg-light-surface border dark:border-base-700/50 border-light-border"
          >
            <h3
              class="font-display text-lg font-bold dark:text-white text-light-text mb-1"
            >
              {{
                locale === "es" ? "E-commerce Avanzado" : "Advanced E-commerce"
              }}
            </h3>
            <p class="text-sm dark:text-text-secondary text-light-muted mb-4">
              {{
                locale === "es"
                  ? "Marketplace, multi-vendedor, inventario avanzado, cupones y reportes."
                  : "Marketplace, multi-vendor, advanced inventory, coupons, and reports."
              }}
            </p>
            <div class="mb-4">
              <span
                class="font-display text-2xl font-bold dark:text-white text-light-text"
                >$29,999+</span
              >
              <span
                class="text-sm dark:text-text-secondary text-light-muted ml-1"
                >MXN</span
              >
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="f in ecommerceAdvFeats"
                :key="f"
                class="flex items-start gap-2 text-sm dark:text-text-secondary text-light-muted"
              >
                <LucideIcon name="check" class-name="w-4 h-4 mt-0.5 text-amber-500" /> {{ f }}
              </li>
            </ul>
            <router-link
              to="/contact"
              class="block w-full text-center px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold hover:bg-amber-500/20 transition text-sm"
            >
              <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
            </router-link>
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
                  <LucideIcon name="sparkles" class-name="w-4 h-4 mt-0.5 text-cyan-400" /> {{ f }}
                </li>
              </ul>
              <router-link
                to="/contact"
                class="mt-6 block w-full text-center px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/20 transition text-sm"
              >
                <span class="inline-flex items-center gap-2">{{ t("pricingPage.cta") }}<LucideIcon name="arrow-right" class-name="w-4 h-4" /></span>
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

const landingOneFeats = [
  "Diseño UX/UI personalizado",
  "Responsive (móvil, tablet, desktop)",
  "Formulario de contacto / WhatsApp",
  "SEO básico optimizado",
  "Deploy en tu dominio",
  "Entrega: 1–2 semanas",
];

const landingMultiFeats = [
  "Todo lo de One Page",
  "Múltiples páginas (hasta 8)",
  "Blog o catálogo básico",
  "Animaciones avanzadas",
  "Integración con analytics",
  "Entrega: 2–3 semanas",
];

const invEsencialFeats = [
  "Diseño responsivo de 1 página",
  "Galería de fotos (5)",
  "Formulario RSVP",
  "Google Calendar",
  "Enlace compartible",
];

const invBasicaFeats = [
  "Todo lo de Esencial",
  "Cuenta regresiva en vivo",
  "Música de fondo",
  "Mesa de regalos",
  "Animaciones cinematográficas",
  "Galería (10 fotos)",
];

const invProFeats = [
  "Todo lo de Básica",
  "Panel admin de invitados",
  "QR único por invitado",
  "Multi-idioma (ES/EN)",
  "Dominio personalizado",
  "Estadísticas + restricciones alimenticias",
];

const citasBasicFeats = [
  "Calendario interactivo",
  "Confirmaciones por email",
  "Hasta 3 tipos de servicio",
  "Google Calendar sync",
  "Landing page incluida",
  "Entrega: 2–3 semanas",
];

const citasFullFeats = [
  "Todo lo de Agenda Básica",
  "Panel admin completo",
  "Historial de clientes (CRM)",
  "Pagos en línea (Stripe)",
  "Recordatorios WhatsApp + email",
  "Múltiples profesionales",
  "Reportes y métricas",
  "Entrega: 3–5 semanas",
];

const ecommerceBasicFeats = [
  "Catálogo de productos",
  "Carrito de compras",
  "Pagos (Stripe / PayPal)",
  "Panel admin de pedidos",
  "Notificaciones por email",
  "Entrega: 3–4 semanas",
];

const ecommerceAdvFeats = [
  "Todo lo de Tienda Online",
  "Multi-vendedor / marketplace",
  "Cupones y descuentos",
  "Inventario avanzado",
  "Reportes de ventas",
  "Integraciones logísticas",
  "Entrega: 5–8 semanas",
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
