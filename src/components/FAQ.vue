<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <AmbientGlow variant="subtle" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <!-- LEFT: heading -->
        <div class="lg:col-span-5 lg:sticky lg:top-28">
          <SectionHeader
            class="!mb-6"
            :eyebrow="locale === 'es' ? 'Preguntas frecuentes' : 'FAQ'"
            :title="locale === 'es' ? 'Resolvemos tus dudas antes de empezar' : 'We answer your questions before you start'"
            :subtitle="locale === 'es'
              ? 'Lo que clientes nos preguntan más seguido. Si tu duda no está aquí, escríbenos por WhatsApp.'
              : 'What clients most often ask. If your question is not here, message us on WhatsApp.'"
          />
          <a
            :href="callLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:brightness-110 transition-all"
          >
            <LucideIcon name="message-circle" class-name="w-4 h-4" />
            {{ locale === "es" ? "Pregunta por WhatsApp" : "Ask on WhatsApp" }}
          </a>
        </div>

        <!-- RIGHT: accordion -->
        <div class="lg:col-span-7" data-animate>
          <Accordion :items="faqItems" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useWhatsApp } from "../composables/useWhatsApp.js";
import LucideIcon from "./LucideIcon.vue";
import SectionHeader from "./ui/SectionHeader.vue";
import AmbientGlow from "./ui/AmbientGlow.vue";
import Accordion from "./ui/Accordion.vue";

const { locale } = useI18n();
const { linkFor } = useWhatsApp();

const callLink = computed(() => linkFor("call", locale.value));

const faqItems = computed(() => {
  if (locale.value === "es") {
    return [
      {
        q: "¿Cuánto tiempo tardan en entregar un proyecto?",
        a: "Los productos empaquetados (invitaciones, catálogos, menús) se entregan entre 1 y 2 semanas. Las landings y sitios para salones entre 2 y 3. Los proyectos a medida y SaaS se cotizan por alcance, pero siempre tienes una demo real publicada en máximo 21 días.",
      },
      {
        q: "¿Qué pasa si no me convence la primera versión?",
        a: "Trabajamos con entregas iterativas semanales. Cada entrega tiene una ronda de feedback incluida y los cambios mayores los aplicamos en vivo en la siguiente iteración. Además, ofrecemos un demo de 21 días por $999 MXN para validar antes de pagar el grueso del proyecto.",
      },
      {
        q: "¿Trabajan con clientes fuera de México?",
        a: "Sí. Trabajamos remoto con clientes en LATAM, Estados Unidos y Europa. Tenemos versión en inglés del sitio y todas las comunicaciones pueden ser bilingües. Los precios se ajustan a USD para clientes internacionales.",
      },
      {
        q: "¿El precio incluye hosting y dominio?",
        a: "Sí, los planes Starter incluyen hosting y dominio en subdominio .devifly.dev por 1 año. Los planes Growth y Scale incluyen dominio personalizado (.com / .mx) y hosting optimizado. Después del primer año el costo recurrente es de ~$199 MXN/mes.",
      },
      {
        q: "¿Puedo administrar el sitio yo después del lanzamiento?",
        a: "Depende del plan. Los planes Pro y superiores incluyen un panel admin para que edites contenido, productos, precios o platillos. Si quieres delegar los cambios, ofrecemos planes de mantenimiento mensual desde $999 MXN.",
      },
      {
        q: "¿Por qué Vue 3 y no WordPress?",
        a: "Porque queremos que tu sitio sea rápido (Lighthouse 90+), seguro (sin plugins vulnerables) y escalable. Vue 3 + Tailwind + Vite nos permite entregar productos premium con cargas de menos de 1.5s y SEO técnico fuerte. WordPress es genial para blogs, no para experiencias de venta de alta conversión.",
      },
      {
        q: "¿Tengo que pagar todo por adelantado?",
        a: "No. Pagas un anticipo del 50% para iniciar (que en muchos casos cubre la demo de 21 días) y el restante al lanzamiento. En proyectos largos cortamos por hitos para que pagues conforme avanzas.",
      },
      {
        q: "¿Firman acuerdo de confidencialidad (NDA)?",
        a: "Sí, sin problema. Para proyectos sensibles firmamos NDA antes del discovery y todo el código vive en repositorios privados con acceso controlado. Nunca compartimos detalles ni capturas sin tu autorización.",
      },
    ];
  }
  return [
    {
      q: "How long does it take to deliver a project?",
      a: "Packaged products (invitations, catalogs, menus) deliver in 1 to 2 weeks. Landings and venue sites take 2 to 3 weeks. Custom projects and SaaS are scoped individually, but you always have a real demo live within 21 days max.",
    },
    {
      q: "What if I am not convinced by the first version?",
      a: "We work in weekly iterative deliveries. Each delivery includes one feedback round, and major changes are applied live in the next iteration. We also offer a 21-day demo for $59 USD to validate before paying the bulk of the project.",
    },
    {
      q: "Do you work with clients outside Mexico?",
      a: "Yes. We work remote with clients across LATAM, the US, and Europe. The site has an English version and all communication can be bilingual. Prices adjust to USD for international clients.",
    },
    {
      q: "Does the price include hosting and domain?",
      a: "Yes. Starter plans include 1 year of hosting and a .devifly.dev subdomain. Growth and Scale plans include a custom domain (.com / .mx) and optimized hosting. After the first year, the recurring cost is ~$12 USD/month.",
    },
    {
      q: "Can I manage the site myself after launch?",
      a: "Depends on the plan. Pro and higher plans include an admin panel so you can edit content, products, prices, or dishes. If you prefer to delegate changes, we offer monthly maintenance plans from $59 USD.",
    },
    {
      q: "Why Vue 3 and not WordPress?",
      a: "Because we want your site to be fast (Lighthouse 90+), secure (no vulnerable plugins), and scalable. Vue 3 + Tailwind + Vite lets us ship premium products with under 1.5s loads and strong technical SEO. WordPress is great for blogs, not for high-conversion sales experiences.",
    },
    {
      q: "Do I have to pay everything upfront?",
      a: "No. You pay a 50% deposit to start (which often covers the 21-day demo) and the rest on launch. On longer projects we split by milestones so you pay as you progress.",
    },
    {
      q: "Do you sign NDAs?",
      a: "Yes, no problem. For sensitive projects we sign an NDA before discovery and all code lives in private repositories with access control. We never share details or screenshots without your authorization.",
    },
  ];
});
</script>
