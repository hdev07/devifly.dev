<template>
  <main class="pb-0">

    <!-- ═══════════════════════════════════
         1. HERO
    ════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute inset-0"
          style="background: linear-gradient(135deg, #0f0308 0%, #1a0510 40%, #0a0a14 100%)"
        ></div>
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[150px] opacity-30"
          style="background: radial-gradient(ellipse, #be185d 0%, transparent 70%)"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
          style="background: radial-gradient(ellipse, #9333ea 0%, transparent 70%)"
        ></div>
      </div>

      <div class="relative max-w-5xl mx-auto px-6 text-center py-32 pt-40">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm border"
          style="background: rgba(190,24,93,0.12); border-color: rgba(190,24,93,0.3); color: #f9a8d4"
        >
          <LucideIcon name="calendar-heart" class-name="w-4 h-4" />
          Sistema PRO para Salones de Eventos · Devifly
        </div>

        <!-- Headline -->
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          ¿Tu salón tiene fechas libres<br />
          <span style="background: linear-gradient(135deg, #f43f5e, #c026d3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            que nadie está reservando?
          </span>
        </h1>

        <!-- Subheadline -->
        <p class="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Te ayudamos a conseguir más reservaciones de forma automática —
          sin perder el día respondiendo preguntas en WhatsApp.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <a
            :href="waHero"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-white text-base transition-all duration-300 hover:scale-105"
            style="background: linear-gradient(135deg, #f43f5e, #c026d3); box-shadow: 0 0 40px rgba(244,63,94,0.35)"
          >
            <LucideIcon name="message-circle" class-name="w-5 h-5" />
            Quiero más reservaciones
          </a>
          <router-link
            to="/salones-eventos/demo"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/80 text-base transition-all duration-300 hover:text-white border border-white/15 hover:border-rose-400/50"
          >
            <LucideIcon name="eye" class-name="w-5 h-5" />
            Ver demo en vivo
          </router-link>
        </div>

        <!-- Social proof numbers -->
        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="stat in heroStats" :key="stat.label" class="text-center">
            <p class="font-black text-2xl text-white">{{ stat.value }}</p>
            <p class="text-xs text-white/50 mt-0.5">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <LucideIcon name="chevron-down" class-name="w-6 h-6 text-white/30" />
      </div>
    </section>

    <!-- ═══════════════════════════════════
         2. PROBLEMA
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: #0a0a14">
      <div class="max-w-4xl mx-auto">
        <!-- Label -->
        <div class="flex items-center gap-3 mb-10 justify-center">
          <span class="block w-8 h-px bg-rose-500"></span>
          <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">
            ¿Te suena familiar?
          </span>
          <span class="block w-8 h-px bg-rose-500"></span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl font-black text-white text-center mb-14 leading-tight">
          Cada día que pasa sin sistema<br />
          <span class="text-rose-400">es un evento que alguien más se llevó.</span>
        </h2>

        <div class="grid sm:grid-cols-2 gap-5">
          <div
            v-for="pain in painPoints"
            :key="pain.text"
            class="flex items-start gap-4 p-6 rounded-2xl border border-white/5"
            style="background: rgba(255,255,255,0.03)"
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style="background: rgba(244,63,94,0.12); border: 1px solid rgba(244,63,94,0.2)"
            >
              <LucideIcon :name="pain.icon" class-name="w-5 h-5 text-rose-400" />
            </div>
            <p class="text-white/75 leading-relaxed text-sm">{{ pain.text }}</p>
          </div>
        </div>

        <!-- Mid CTA -->
        <div class="text-center mt-12">
          <a
            :href="waHero"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white transition-all hover:scale-105 text-sm"
            style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
          >
            <LucideIcon name="zap" class-name="w-4 h-4" />
            Quiero solucionar esto hoy
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         3. SOLUCIÓN
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: linear-gradient(180deg, #0a0a14 0%, #0d0814 100%)">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-6 justify-center">
          <span class="block w-8 h-px bg-rose-500"></span>
          <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">La solución</span>
          <span class="block w-8 h-px bg-rose-500"></span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl font-black text-white text-center mb-4 leading-tight">
          Un sistema que trabaja por ti<br />
          <span style="background: linear-gradient(135deg, #f43f5e, #c026d3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            mientras tú atiendes los eventos
          </span>
        </h2>
        <p class="text-white/60 text-center max-w-2xl mx-auto mb-16">
          Te hacemos una página profesional donde los interesados en rentar tu salón
          consultan disponibilidad, ven tus paquetes y te mandan un mensaje listo en segundos.
          Menos preguntas repetitivas. Más cotizaciones reales.
        </p>

        <div class="grid sm:grid-cols-3 gap-8">
          <div
            v-for="step in solutionSteps"
            :key="step.number"
            class="text-center"
          >
            <div
              class="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl font-black"
              style="background: rgba(244,63,94,0.12); border: 1px solid rgba(244,63,94,0.25); color: #f43f5e"
            >
              {{ step.number }}
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-2">{{ step.title }}</h3>
            <p class="text-white/55 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         4. BENEFICIOS
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: #0d0814">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div class="flex items-center gap-3 mb-6 justify-center">
            <span class="block w-8 h-px bg-rose-500"></span>
            <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">Beneficios reales</span>
            <span class="block w-8 h-px bg-rose-500"></span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-black text-white leading-tight">
            Lo que cambia en tu salón<br />
            <span class="text-rose-400">desde el primer mes</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="p-6 rounded-2xl border border-white/5 hover:border-rose-500/20 transition-colors duration-300"
            style="background: rgba(255,255,255,0.025)"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style="background: rgba(244,63,94,0.1); border: 1px solid rgba(244,63,94,0.2)"
            >
              <LucideIcon :name="benefit.icon" class-name="w-6 h-6 text-rose-400" />
            </div>
            <h3 class="font-display text-base font-bold text-white mb-2">{{ benefit.title }}</h3>
            <p class="text-sm text-white/55 leading-relaxed">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         5. DEMOSTRACIÓN
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: linear-gradient(180deg, #0d0814 0%, #0a0a14 100%)">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div class="flex items-center gap-3 mb-6 justify-center">
            <span class="block w-8 h-px bg-rose-500"></span>
            <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">Demo en vivo</span>
            <span class="block w-8 h-px bg-rose-500"></span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Así ve tu página
            <span class="text-rose-400">un cliente desde su celular</span>
          </h2>
          <p class="text-white/55 max-w-xl mx-auto">
            Haz clic en "Ver demo" y navega la página como si fuera tu salón.
            Eso recibe tu próximo cliente.
          </p>
        </div>

        <!-- Demo preview card -->
        <div
          class="relative rounded-3xl overflow-hidden border border-rose-500/15 max-w-3xl mx-auto"
          style="background: linear-gradient(135deg, #1a0510, #12071a)"
        >
          <div class="p-8 sm:p-12">
            <div class="grid sm:grid-cols-2 gap-8 items-center">
              <!-- Left: mock phone preview -->
              <div class="flex justify-center">
                <div
                  class="w-52 rounded-[2rem] overflow-hidden border-4"
                  style="border-color: rgba(244,63,94,0.3); box-shadow: 0 0 60px rgba(244,63,94,0.15)"
                >
                  <!-- Phone header -->
                  <div class="px-4 py-3 text-center" style="background: #1a0510">
                    <div class="w-16 h-1.5 rounded-full mx-auto mb-1" style="background: rgba(255,255,255,0.15)"></div>
                    <p class="text-[10px] text-rose-300/60">Jardines El Cielo</p>
                  </div>
                  <!-- Phone content -->
                  <div class="p-4 space-y-3" style="background: #0d0814">
                    <div class="rounded-xl overflow-hidden h-24" style="background: linear-gradient(135deg, #f43f5e20, #c026d320)">
                      <div class="h-full flex items-center justify-center">
                        <LucideIcon name="flower-2" class-name="w-8 h-8 text-rose-400/40" />
                      </div>
                    </div>
                    <div class="h-3 rounded-full" style="background: rgba(255,255,255,0.08); width: 80%"></div>
                    <div class="h-2 rounded-full" style="background: rgba(255,255,255,0.05); width: 60%"></div>
                    <div class="grid grid-cols-7 gap-1 mt-2">
                      <div
                        v-for="(day, i) in calDays"
                        :key="i"
                        class="h-5 rounded text-[8px] flex items-center justify-center font-bold"
                        :style="day.available ? 'background: rgba(244,63,94,0.2); color: #f43f5e' : 'background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.25)'"
                      >{{ day.n }}</div>
                    </div>
                    <div
                      class="py-2 rounded-xl text-[9px] font-bold text-center text-white"
                      style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
                    >
                      Cotizar mi fecha →
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: flow description -->
              <div>
                <h3 class="font-display text-xl font-bold text-white mb-6">La experiencia del cliente:</h3>
                <ol class="space-y-4">
                  <li
                    v-for="(flow, i) in demoFlow"
                    :key="flow"
                    class="flex items-start gap-3"
                  >
                    <span
                      class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                      style="background: rgba(244,63,94,0.2); color: #f43f5e; border: 1px solid rgba(244,63,94,0.3)"
                    >{{ i + 1 }}</span>
                    <p class="text-white/65 text-sm">{{ flow }}</p>
                  </li>
                </ol>
                <router-link
                  to="/salones-eventos/demo"
                  class="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
                  style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
                >
                  <LucideIcon name="eye" class-name="w-4 h-4" />
                  Ver demo completo en vivo
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         6. QUÉ INCLUYE
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: #0a0a14">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div class="flex items-center gap-3 mb-6 justify-center">
            <span class="block w-8 h-px bg-rose-500"></span>
            <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">Lo que recibes</span>
            <span class="block w-8 h-px bg-rose-500"></span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Todo lo que necesita<br />
            <span class="text-rose-400">tu página para vender</span>
          </h2>
          <p class="text-white/55 max-w-xl mx-auto">
            Cada pieza del sistema tiene un propósito claro: atraer, convencer y convertir visitantes en clientes que piden cotización.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="item in includes"
            :key="item.title"
            class="flex gap-5 p-6 rounded-2xl border border-white/5"
            style="background: rgba(255,255,255,0.025)"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style="background: rgba(244,63,94,0.1); border: 1px solid rgba(244,63,94,0.2)"
            >
              <LucideIcon :name="item.icon" class-name="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 class="font-display text-base font-bold text-white mb-1">{{ item.title }}</h3>
              <p class="text-sm text-white/55 leading-relaxed">{{ item.desc }}</p>
              <p class="text-xs text-rose-400 font-semibold mt-2">{{ item.why }}</p>
            </div>
          </div>
        </div>

        <!-- Mid CTA -->
        <div class="text-center mt-12">
          <a
            :href="waIncludes"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white transition-all hover:scale-105 text-sm"
            style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
          >
            <LucideIcon name="message-circle" class-name="w-4 h-4" />
            Quiero esto para mi salón
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         7. BONOS
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: linear-gradient(180deg, #0a0a14 0%, #0d0814 100%)">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <div class="flex items-center gap-3 mb-6 justify-center">
            <span class="block w-8 h-px bg-rose-500"></span>
            <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">Solo por tiempo limitado</span>
            <span class="block w-8 h-px bg-rose-500"></span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-black text-white mb-4">
            🎁 Bonos que incluimos
            <span class="text-rose-400">sin costo extra</span>
          </h2>
          <p class="text-white/55 max-w-xl mx-auto">
            Cada bono tiene un valor real. Te lo damos porque queremos que tu sistema
            funcione desde el primer día.
          </p>
        </div>

        <div class="grid sm:grid-cols-3 gap-6">
          <div
            v-for="bonus in bonuses"
            :key="bonus.title"
            class="relative p-6 rounded-2xl border text-center"
            style="background: rgba(244,63,94,0.04); border-color: rgba(244,63,94,0.2)"
          >
            <div
              class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
              style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
            >
              Bono #{{ bonus.num }}
            </div>
            <div class="text-3xl mb-3 mt-3">{{ bonus.emoji }}</div>
            <h3 class="font-display text-base font-bold text-white mb-2">{{ bonus.title }}</h3>
            <p class="text-sm text-white/55 mb-3">{{ bonus.desc }}</p>
            <p class="text-xs font-bold text-rose-400 line-through opacity-60">Valor: {{ bonus.value }}</p>
            <p class="text-xs font-black text-rose-300">→ Incluido GRATIS</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         8. PRUEBA SOCIAL
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: #0d0814">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div class="flex items-center gap-3 mb-6 justify-center">
            <span class="block w-8 h-px bg-rose-500"></span>
            <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">Lo que dicen nuestros clientes</span>
            <span class="block w-8 h-px bg-rose-500"></span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-black text-white mb-4">
            Resultados reales,<br />
            <span class="text-rose-400">salones reales</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="p-6 rounded-2xl border border-white/5"
            style="background: rgba(255,255,255,0.025)"
          >
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              <LucideIcon
                v-for="s in 5"
                :key="s"
                name="star"
                class-name="w-4 h-4 text-rose-400 fill-rose-400"
              />
            </div>
            <blockquote class="text-white/75 text-sm leading-relaxed mb-5 italic">
              "{{ t.quote }}"
            </blockquote>
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
              >
                {{ t.initial }}
              </div>
              <div>
                <p class="text-white font-semibold text-sm">{{ t.name }}</p>
                <p class="text-white/40 text-xs">{{ t.venue }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         9. OFERTA / PRECIO
    ════════════════════════════════════ -->
    <section class="py-24 px-6" style="background: linear-gradient(180deg, #0d0814 0%, #0a0a14 100%)">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <div class="flex items-center gap-3 mb-6 justify-center">
            <span class="block w-8 h-px bg-rose-500"></span>
            <span class="text-xs font-semibold tracking-[0.18em] uppercase text-rose-400">Inversión</span>
            <span class="block w-8 h-px bg-rose-500"></span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-black text-white mb-4">
            Lo que cuesta <span class="text-rose-400">no tenerlo</span><br />
            es mucho más que esto
          </h2>
          <p class="text-white/55 max-w-xl mx-auto">
            Cada evento que pierdes por no tener sistema vale entre $8,000 y $30,000 MXN.
            La inversión en tu página se paga sola con la primera reservación.
          </p>
        </div>

        <!-- Pricing card -->
        <div
          class="relative rounded-3xl overflow-hidden p-8 sm:p-12 border"
          style="background: linear-gradient(135deg, rgba(244,63,94,0.06), rgba(192,38,211,0.04)); border-color: rgba(244,63,94,0.25)"
        >
          <div
            class="absolute top-0 right-0 py-2 px-5 text-xs font-black text-white rounded-bl-2xl"
            style="background: linear-gradient(135deg, #f43f5e, #c026d3)"
          >
            🔥 Más solicitado
          </div>

          <div class="sm:grid sm:grid-cols-2 gap-10">
            <div>
              <h3 class="font-display text-2xl font-black text-white mb-2">Sistema PRO para Salones</h3>
              <p class="text-white/55 text-sm mb-6">Todo lo que necesitas para conseguir más reservaciones sin depender de Instagram o responder WhatsApp todo el día.</p>

              <div class="mb-6">
                <span class="text-white/30 text-sm line-through">Valor real: $18,000 MXN</span>
                <div class="flex items-end gap-2 mt-1">
                  <span class="font-display text-4xl font-black text-white">$9,999</span>
                  <span class="text-white/50 mb-1">MXN</span>
                </div>
                <p class="text-rose-400 text-xs font-bold mt-1">+ Bonos por valor de $4,500 MXN GRATIS</p>
              </div>

              <a
                :href="waOffer"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-white transition-all hover:scale-105 w-full justify-center"
                style="background: linear-gradient(135deg, #f43f5e, #c026d3); box-shadow: 0 0 40px rgba(244,63,94,0.3)"
              >
                <LucideIcon name="message-circle" class-name="w-5 h-5" />
                Quiero empezar ahora
              </a>
              <p class="text-white/30 text-xs text-center mt-3">Sin contratos. Sin mensualidades. Pago único.</p>
            </div>

            <div>
              <p class="text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">Lo que incluye:</p>
              <ul class="space-y-3">
                <li
                  v-for="feat in offerFeats"
                  :key="feat"
                  class="flex items-center gap-3 text-sm text-white/70"
                >
                  <LucideIcon name="check-circle" class-name="w-4 h-4 text-rose-400 shrink-0" />
                  {{ feat }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         10. GARANTÍA
    ════════════════════════════════════ -->
    <section class="py-20 px-6" style="background: #0a0a14">
      <div class="max-w-3xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border mb-8"
          style="background: rgba(244,63,94,0.06); border-color: rgba(244,63,94,0.2)"
        >
          <LucideIcon name="shield-check" class-name="w-6 h-6 text-rose-400" />
          <span class="text-white font-semibold">Garantía de resultados Devifly</span>
        </div>
        <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-6 leading-tight">
          Si en 30 días tu página no genera<br />
          más solicitudes de cotización,
          <span class="text-rose-400">la optimizamos sin costo.</span>
        </h2>
        <p class="text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
          Confiamos en nuestro trabajo. Si la página no está atrayendo clientes, revisamos el diseño,
          los textos y las llamadas a la acción — sin excusas y sin cobrar extra.
          Tu éxito es nuestro éxito.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         11. CTA FINAL
    ════════════════════════════════════ -->
    <section
      class="relative py-32 px-6 text-center overflow-hidden"
      style="background: linear-gradient(135deg, #1a0510 0%, #12071a 50%, #0f0308 100%)"
    >
      <!-- Glow -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style="background: radial-gradient(ellipse, #f43f5e 0%, transparent 70%)"
      ></div>

      <div class="relative max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm border"
          style="background: rgba(244,63,94,0.1); border-color: rgba(244,63,94,0.3); color: #fda4af"
        >
          <LucideIcon name="clock" class-name="w-4 h-4" />
          Cupos limitados este mes · Solo 5 salones por mes
        </div>

        <h2 class="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Tu salón merece<br />
          <span style="background: linear-gradient(135deg, #f43f5e, #c026d3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            estar reservado.
          </span>
        </h2>
        <p class="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Haz clic abajo y mándanos un mensaje. Te respondemos en menos de 2 horas
          con un demo personalizado para tu salón.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <a
            :href="waFinal"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-white text-lg transition-all duration-300 hover:scale-105"
            style="background: linear-gradient(135deg, #f43f5e, #c026d3); box-shadow: 0 0 60px rgba(244,63,94,0.35)"
          >
            <LucideIcon name="message-circle" class-name="w-6 h-6" />
            Quiero más reservaciones → WhatsApp
          </a>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/35">
          <span class="inline-flex items-center gap-1.5">
            <LucideIcon name="check" class-name="w-4 h-4 text-rose-500" />
            Sin compromisos
          </span>
          <span class="inline-flex items-center gap-1.5">
            <LucideIcon name="check" class-name="w-4 h-4 text-rose-500" />
            Demo personalizado gratis
          </span>
          <span class="inline-flex items-center gap-1.5">
            <LucideIcon name="check" class-name="w-4 h-4 text-rose-500" />
            Respuesta en menos de 2 horas
          </span>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import LucideIcon from "../components/LucideIcon.vue";

const WA_NUMBER = "+525583414659";

const waHero = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("¡Hola! Me interesa el Sistema PRO de Reservaciones para mi salón de eventos. ¿Pueden darme más información? 🌹")}`;
const waIncludes = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("¡Hola! Quiero saber más sobre el sistema para salones de eventos. ¿Qué incluye exactamente? 📅")}`;
const waOffer = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("¡Hola! Quiero contratar el Sistema PRO de Reservaciones para mi salón. ¿Cómo empezamos? 🎉")}`;
const waFinal = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("¡Hola! Quiero más reservaciones para mi salón de eventos. Me interesa el Sistema PRO de Devifly. 🌹")}`;

const heroStats = [
  { value: "+40", label: "salones con sistema activo" },
  { value: "3x", label: "más cotizaciones en promedio" },
  { value: "90%", label: "menos preguntas repetitivas" },
];

const calDays = [
  { n: "1", available: false }, { n: "2", available: false },
  { n: "3", available: true  }, { n: "4", available: false },
  { n: "5", available: false }, { n: "6", available: true  },
  { n: "7", available: false }, { n: "8", available: false },
  { n: "9", available: true  }, { n: "10", available: false },
  { n: "11", available: false }, { n: "12", available: false },
  { n: "13", available: false }, { n: "14", available: true },
];

const painPoints = [
  {
    icon: "message-square",
    text: "¿Sigues respondiendo lo mismo en WhatsApp todo el día? ¿Cuánto cobran? ¿Tienen el 15 de junio? ¿Qué incluye el paquete?",
  },
  {
    icon: "clock",
    text: "¿Pierdes clientes porque tardaste horas en contestar y ya se fueron con otro salón que sí tenía página?",
  },
  {
    icon: "wifi-off",
    text: "¿Tu único canal de ventas es Instagram? Si no publicas, los clientes no llegan — y eso no es un negocio, es una ruleta.",
  },
  {
    icon: "calendar-x",
    text: "¿Tienes fechas disponibles pero ningún interesado serio que llegue a cotizarte? El problema no es la demanda, es la visibilidad.",
  },
];

const solutionSteps = [
  {
    number: "01",
    title: "Tu cliente te encuentra",
    desc: "Con SEO básico y tu página bien construida, cuando alguien busca 'salón de eventos en [tu ciudad]' tu negocio aparece primero.",
  },
  {
    number: "02",
    title: "Se enamora del lugar",
    desc: "Galería premium, secciones claras y testimonios reales generan confianza inmediata. Sin dudas, sin irse a comparar.",
  },
  {
    number: "03",
    title: "Te escribe listo para reservar",
    desc: "El formulario inteligente filtra clientes serios. El botón de WhatsApp llega con toda la info que necesitas. Cero preguntas de más.",
  },
];

const benefits = [
  {
    icon: "trending-up",
    title: "Más cotizaciones reales",
    desc: "Clientes que ya saben el precio, las fechas y los paquetes antes de escribirte. Solo necesitan confirmar.",
  },
  {
    icon: "clock-3",
    title: "Ahorra horas en WhatsApp",
    desc: "Deja que la página responda las preguntas frecuentes. Tú solo atiende a quienes de verdad quieren reservar.",
  },
  {
    icon: "badge",
    title: "Imagen profesional",
    desc: "Una página que se ve como los grandes da confianza automáticamente. Los clientes te perciben como el mejor salón de la zona.",
  },
  {
    icon: "calendar-check",
    title: "Agenda visible y clara",
    desc: "Tus clientes ven qué fechas están disponibles sin preguntarte. Eso elimina las dudas y acelera la reservación.",
  },
  {
    icon: "map-pin",
    title: "Más fácil de encontrar",
    desc: "Google Maps integrado y SEO básico hacen que las personas en tu ciudad te encuentren cuando te buscan.",
  },
  {
    icon: "users",
    title: "Flujo constante de clientes",
    desc: "Ya no dependes de publicar en Instagram todos los días. La página trabaja para ti los 365 días del año.",
  },
];

const demoFlow = [
  "Entra a tu página desde Instagram o Google",
  "Ve la galería y se imagina su evento ahí",
  "Consulta las fechas disponibles en el calendario",
  "Selecciona el paquete y llena el formulario inteligente",
  "Te llega un WhatsApp con todos sus datos. Listo para cerrar.",
];

const includes = [
  {
    icon: "globe",
    title: "Página web profesional completa",
    desc: "Diseño premium adaptado a tu salón. Rápida, responsiva y lista para recibir clientes desde cualquier dispositivo.",
    why: "→ Tu carta de presentación digital que trabaja 24/7",
  },
  {
    icon: "calendar-days",
    title: "Agenda de fechas disponibles",
    desc: "Los clientes ven en tiempo real qué días tienes libres. Evita confusiones, ahorra tiempo y genera urgencia.",
    why: "→ La razón #1 por la que los clientes reservan más rápido",
  },
  {
    icon: "message-circle",
    title: "Botón WhatsApp con mensaje prellenado",
    desc: "El cliente llega con su nombre, fecha de interés y tipo de evento. Tú solo confirmas. Sin más preguntas de ida y vuelta.",
    why: "→ Convierte el interés en conversación de cierre",
  },
  {
    icon: "clipboard-list",
    title: "Formulario de cotización inteligente",
    desc: "Filtra a los curiosos de los clientes reales. Solo recibes solicitudes de personas con fecha y evento concreto.",
    why: "→ Mejor calidad de leads = menos tiempo perdido",
  },
  {
    icon: "images",
    title: "Galería tipo premium",
    desc: "Fotos de tus salones y jardines en un formato que genera deseo. La gente se imagina su evento ahí antes de cotizar.",
    why: "→ El deseo visual es lo que cierra la venta",
  },
  {
    icon: "map-pin",
    title: "Google Maps integrado + SEO básico",
    desc: "Tu salón aparece en búsquedas de Google y los clientes llegan directo a tu ubicación sin perderse.",
    why: "→ Clientes nuevos que nunca te habían visto",
  },
];

const bonuses = [
  {
    num: "1",
    emoji: "📱",
    title: "Auditoría de Instagram",
    desc: "Revisamos tu perfil y te decimos exactamente qué cambiar para atraer más clientes desde redes sociales.",
    value: "$1,500 MXN",
  },
  {
    num: "2",
    emoji: "✍️",
    title: "Textos de venta incluidos",
    desc: "No tienes que escribir nada. Nosotros redactamos todos los textos de tu página con lenguaje que convierte.",
    value: "$2,000 MXN",
  },
  {
    num: "3",
    emoji: "🖥️",
    title: "Demo personalizado GRATIS",
    desc: "Antes de que decidas, te mostramos cómo quedaría tu salón real en la página. Sin compromiso.",
    value: "$1,000 MXN",
  },
];

const testimonials = [
  {
    quote: "Antes contestaba el mismo mensaje 20 veces al día. Ahora la página lo hace por mí y me llegan clientes ya con la fecha lista para reservar. Triplicamos reservaciones en 6 semanas.",
    name: "Laura Mendoza",
    venue: "Jardines La Hacienda · Querétaro",
    initial: "L",
  },
  {
    quote: "Pensé que era muy caro, pero a los 2 meses ya me había pagado solo. La agenda de fechas fue lo que más me ayudó — los clientes ya saben si el día está libre sin escribirme.",
    name: "Roberto Sánchez",
    venue: "Salón Cielos Eventos · CDMX",
    initial: "R",
  },
  {
    quote: "Solo dependíamos de Instagram y era un caos. Desde que tenemos la página, nos llegan solicitudes de Google de gente que nunca nos había visto en redes. Fue un before y after total.",
    name: "Daniela Torres",
    venue: "Quinta Las Magnolias · Guadalajara",
    initial: "D",
  },
];

const offerFeats = [
  "Página web profesional lista para vender",
  "Calendario de fechas disponibles",
  "Botón de WhatsApp con mensaje prellenado",
  "Formulario de cotización inteligente",
  "Galería premium de tu salón",
  "Google Maps integrado",
  "SEO básico para aparecer en Google",
  "Textos de venta escritos por nosotros",
  "Auditoría de Instagram (Bono)",
  "Demo personalizado antes de contratar",
  "Garantía de resultados 30 días",
  "Entrega en 2 semanas",
];
</script>
