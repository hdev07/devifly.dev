import { ref, watch } from 'vue'

const theme = ref(localStorage.getItem('devifly-theme') || 'dark')

// Rutas con meta.darkOnly fuerzan modo oscuro sin tocar la preferencia guardada
// (las 3 landings de venta construidas 100% en dark: Negocios, Menús, Salones).
const forcedDark = ref(false)

function applyTheme() {
  const html = document.documentElement
  html.classList.remove('dark', 'light')
  html.classList.add(forcedDark.value ? 'dark' : theme.value)
}

applyTheme()

watch(theme, (val) => {
  localStorage.setItem('devifly-theme', val)
  applyTheme()
})

watch(forcedDark, applyTheme)

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  const isDark = () => forcedDark.value || theme.value === 'dark'

  const setForcedDark = (value) => {
    forcedDark.value = value === true
  }

  return { theme, toggleTheme, isDark, forcedDark, setForcedDark }
}
