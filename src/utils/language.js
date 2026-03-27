export const LANGUAGE_KEY = 'portfolio-language'

export function getSavedLanguage() {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem(LANGUAGE_KEY) || 'en'
}

export function saveLanguage(language) {
  if (typeof window === 'undefined') return
  localStorage.setItem(LANGUAGE_KEY, language)
}