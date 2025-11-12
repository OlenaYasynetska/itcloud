import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'oy-theme'

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const saved = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
  if (saved === 'light' || saved === 'dark') {
    return saved
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    root.style.setProperty('color-scheme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return { theme, setTheme, toggleTheme }
}

