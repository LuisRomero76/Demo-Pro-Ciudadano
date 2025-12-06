import { ref, watch } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'dark')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
    applyTheme()
  }

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  // Aplicar tema inicial
  applyTheme()

  // Watch para cambios de tema
  watch(theme, () => {
    applyTheme()
  })

  return {
    theme,
    toggleTheme,
    isDark: () => theme.value === 'dark',
  }
}
