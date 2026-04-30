import { siteConfig } from "../data/site.js";

const buildUrl = (number, message) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
};

export const PRESET_MESSAGES = {
  call: {
    es: "Hola Devifly, me gustaria agendar una llamada estrategica para platicar sobre mi proyecto.",
    en: "Hi Devifly, I'd like to book a strategy call to discuss my project.",
  },
  audit: {
    es: "Hola Devifly, quiero solicitar mi auditoria gratuita. Mi sitio o negocio es:",
    en: "Hi Devifly, I'd like to request my free audit. My site or business is:",
  },
  invitations: {
    es: "Hola Devifly, me interesa una invitacion digital para mi evento.",
    en: "Hi Devifly, I'm interested in a digital invitation for my event.",
  },
  menus: {
    es: "Hola Devifly, me interesa un menu digital para mi restaurante.",
    en: "Hi Devifly, I'm interested in a digital menu for my restaurant.",
  },
  venues: {
    es: "Hola Devifly, me interesa una pagina con sistema de reservas para mi salon de eventos.",
    en: "Hi Devifly, I'm interested in a website with a booking system for my venue.",
  },
  catalogs: {
    es: "Hola Devifly, me interesa un catalogo digital con pedidos por WhatsApp.",
    en: "Hi Devifly, I'm interested in a digital catalog with WhatsApp ordering.",
  },
  generic: {
    es: "Hola Devifly, me gustaria recibir mas informacion.",
    en: "Hi Devifly, I'd like more information.",
  },
};

export function useWhatsApp() {
  const linkFor = (preset, locale = "es", appendix = "") => {
    const dict = PRESET_MESSAGES[preset] || PRESET_MESSAGES.generic;
    const base = dict[locale] || dict.es;
    const finalText = appendix ? `${base} ${appendix}` : base;
    return buildUrl(siteConfig.whatsappNumber, finalText);
  };

  const customLink = (message) => buildUrl(siteConfig.whatsappNumber, message);

  return { linkFor, customLink };
}
