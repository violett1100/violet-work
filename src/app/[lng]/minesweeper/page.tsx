import { getTranslations } from 'next-intl/server'

import { Minesweeper } from '@/app/componments/Minesweeper'

import '@/app/assets/css/Minesweeper.min.css'

export default async function Page() {
  const t = await getTranslations('Games')

  return (
    <>
      <h1 className="title text-center">{t('Minesweeper')}</h1>
      <div id="minesweeper" className="text-center">
        <Minesweeper />
      </div>
    </>
  )
}
