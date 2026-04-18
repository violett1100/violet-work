'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// import { Trans } from 'react-i18next/TransWithoutContext'
import { supportedLngs } from '@/i18n/settings'
// import { getTranslation } from '@/i18n'

export function SwitchLangBtn(props: { lng: string }) {
  const { lng } = props
  const path = usePathname()
  const currPath = path.replace(`/${lng}`, '')
  // const { t } = await getTranslation(lng, 'translation')
  return (
    <div className="mt-4">
      {/* <Trans i18nKey="languageSwitcher" t={t} values={{ lng }}>
                Switch from <strong>{lng}</strong> to:
            </Trans> */}
      {/* {i > 0 && ' or '} */}
      {/* .filter((l) => lng !== l) */}
      {supportedLngs.map((l, i) => {
        return (
          <Link
            key={i}
            href={`/${l}${currPath}`}
            className={clsx('inline-block px-2 py-1 mr-2 uppercase border border-tertiary', {
              'bg-foreground border-foreground text-background': l === lng,
            })}
          >
            {l}
          </Link>
        )
      })}
    </div>
  )
}
