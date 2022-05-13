import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'
import en from 'i18n/locales/en'
import vi from 'i18n/locales/vi'

const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
}
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})
