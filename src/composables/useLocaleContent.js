import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Pick localized content from a { es, en } object based on the active locale.
 */
export function useLocaleContent(contentByLocale) {
  const { locale } = useI18n()

  const content = computed(() => contentByLocale[locale.value] ?? contentByLocale.es)

  const isEn = computed(() => locale.value === 'en')

  const txt = (es, en) => (locale.value === 'en' ? en : es)

  return { locale, content, isEn, txt }
}
