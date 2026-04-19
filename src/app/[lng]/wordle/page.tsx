import { getTranslations } from 'next-intl/server'

import { Wordle } from '@/app/componments/Wordle'

export default async function Page() {
  const t = await getTranslations('Games')

  return (
    <>
      <h1 className="title text-center">{t('Wordle')}</h1>
      <Wordle />
    </>
  )
}
