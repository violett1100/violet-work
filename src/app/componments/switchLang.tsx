'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { supportedLngs } from '@/i18n/settings'

export function SwitchLangBtn(props: { lng: string }) {
  const { lng } = props
  const path = usePathname()
  const currPath = path.replace(`/${lng}`, '')
  const t = useTranslations('Header')

  return (
    <div className="mt-4">
      {supportedLngs.map((l, i) => {
        return (
          <Link
            key={i}
            href={`/${l}${currPath}`}
            className={clsx('inline-block px-2 py-1 mr-2 uppercase border border-tertiary', {
              'bg-foreground border-foreground text-background': l === lng,
            })}
          >
            {t(`lng_${l}`)}
          </Link>
        )
      })}
    </div>
  )
}
