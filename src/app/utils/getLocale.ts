import { cookies } from 'next/headers'

import { getTranslation } from '@/i18n'

export const getLocale = async () => {
  const cookieStore = await cookies()
  const lng = cookieStore.get('i18next')?.value
  const { t } = await getTranslation(lng, 'translation')
  return { t, lng }
}
