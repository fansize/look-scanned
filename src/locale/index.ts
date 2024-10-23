import { createI18n } from 'vue-i18n'

import { en } from './en'
import { zhCN } from './zh-CN'
import { es } from './es'
import { ru } from './ru'
import { ar } from './ar'
import { fi } from './fi'
import { sv } from './sv'
import { fr } from './fr'
import { de } from './de'

const currentLocale = navigator?.language

type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  : T

const languageVariants = {
  es: [
    'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-ES',
    'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-PY',
    'es-SV', 'es-UY', 'es-VE'
  ],
  ru: ['ru-BY', 'ru-KZ', 'ru-KG', 'ru-MD', 'ru-RU', 'ru-UA'],
  ar: [
    'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB',
    'ar-LY', 'ar-MA', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE'
  ],
  fi: ['fi-FI'],
  sv: ['sv-SE', 'sv-FI'],
  fr: ['fr-BE', 'fr-CA', 'fr-CH', 'fr-FR', 'fr-LU'],
  de: ['de-AT', 'de-CH', 'de-DE', 'de-LI', 'de-LU']
}

const messages = {
  en,
  'zh-CN': zhCN,
  es,
  ru,
  ar,
  fi,
  sv,
  fr,
  de,
  ...Object.entries(languageVariants).flatMap(([lang, variants]) =>
    variants.map(variant => [variant, { [lang]: eval(lang) }])
  ).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
} as { [key: string]: DeepPartial<typeof en> }

const fallbackLocale = {
  ...Object.entries(languageVariants).flatMap(([lang, variants]) =>
    variants.map(variant => [variant, [lang]])
  ).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
  'default': ['en']
}

const i18n = createI18n({
  locale: currentLocale,
  fallbackLocale,
  messages,
  legacy: false,
})

export default i18n

// 可选：添加一个辅助函数来设置语言
export function setLanguage(lang: string) {
  i18n.global.locale.value = lang
}
