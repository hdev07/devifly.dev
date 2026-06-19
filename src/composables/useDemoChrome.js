import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/** Shared UI strings for fullscreen product demos (top bar, common actions). */
const DEMO_CHROME = {
  es: {
    back: 'Volver',
    hire: 'Contratar',
    demo: 'Demo',
    packages: 'Paquetes',
  },
  en: {
    back: 'Back',
    hire: 'Get started',
    demo: 'Demo',
    packages: 'Packages',
  },
}

export function useDemoChrome() {
  const { locale } = useI18n()
  const copy = computed(() => DEMO_CHROME[locale.value] ?? DEMO_CHROME.es)
  return { copy, locale }
}
