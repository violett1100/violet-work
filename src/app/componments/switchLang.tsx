'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
// import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '@/i18n/settings'
// import { getTranslation } from '@/i18n'

export function SwitchLangBtn(params) {
    const path = usePathname()
    const currPath = path.replace(`/${params.lng}`, '')
    // const { t } = await getTranslation(lng, 'translation')
    return (
        <div className="mt-4">
            {/* <Trans i18nKey="languageSwitcher" t={t} values={{ lng }}>
                Switch from <strong>{lng}</strong> to:
            </Trans> */}
            {/* {i > 0 && ' or '} */}
            {/* .filter((l) => lng !== l) */}
            {languages.map((l, i) => {
                return (
                    <Link
                        key={i}
                        href={`/${l}${currPath}`}
                        className={clsx('inline-block px-2 py-1 mr-2 uppercase border border-tertiary', {
                            'bg-foreground border-foreground text-background': l === params.lng,
                        })}
                    >
                        {l}
                    </Link>
                )
            })}
        </div>
    )
}
