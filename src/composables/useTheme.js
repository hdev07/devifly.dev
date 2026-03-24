import { ref, watch } from 'vue'

const theme = ref(localStorage.getItem('devifly-theme') || 'dark')

function applyTheme(t) {
  const html = document.documentElement
  html.classList.remove('dark', 'light')
  html.classList.add(t)
}

applyTheme(theme.value)

watch(theme, (val) => {
  localStorage.setItem('devifly-theme', val)
  applyTheme(val)
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  const isDark = () => theme.value === 'dark'

  return { theme, toggleTheme, isDark }
}
