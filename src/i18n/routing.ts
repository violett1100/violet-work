import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

import { fallbackLng, supportedLngs } from './settings'

export const routing = defineRouting({
  locales: supportedLngs,
  defaultLocale: fallbackLng,
  localePrefix: 'always', // 'always' | 'as-needed'
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
