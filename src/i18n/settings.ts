export const fallbackLng = 'en'
export const supportedLngs = [fallbackLng, 'zh'] as const
export type supportedLngsType = (typeof supportedLngs)[number]
