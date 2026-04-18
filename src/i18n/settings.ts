export const fallbackLng = 'en'
export const supportedLngs = [fallbackLng, 'zh']
export const cookieName = 'i18next'
export const defaultNS = 'translation'

// lng = 採用的語言, ns = 採用的 name space
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
