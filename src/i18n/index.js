import { createI18n } from 'vue-i18n'
import en from './en.js'
import es from './es.js'

export const SUPPORTED_LOCALES = ['es', 'en']
export const LOCALE_STORAGE_KEY = 'devifly:locale'

/**
 * El idioma vive en `?lang=en` para que la versión en inglés tenga una URL
 * propia — sin eso no hay nada que indexar ni que compartir. El valor de la
 * query manda sobre lo guardado; si no hay ninguno, español.
 */
function resolveInitialLocale() {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const fromQuery = new URLSearchParams(window.location.search).get('lang')

  if (SUPPORTED_LOCALES.includes(fromQuery)) {
    return fromQuery
  }

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)

    if (SUPPORTED_LOCALES.includes(stored)) {
      return stored
    }
  } catch {
    // localStorage bloqueado (modo privado): se cae a español.
  }

  return 'es'
}

const i18n = createI18n({
  legacy: false,
  locale: resolveInitialLocale(),
  fallbackLocale: 'es',
  messages: { en, es },
})

export default i18n
