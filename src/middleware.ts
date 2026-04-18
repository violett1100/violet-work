import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'

import { fallbackLng, supportedLngs, cookieName } from '@/i18n/settings'

acceptLanguage.languages(supportedLngs)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}

export function middleware(req: NextRequest) {
  let lng: string
  // 1. cookie
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)!.value)
  // 2. header
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  // 3. fallback
  if (!lng) lng = fallbackLng

  const pathname = req.nextUrl.pathname
  const hasLng = supportedLngs.some((loc) => pathname.startsWith(`/${loc}`))
  // Redirect if lng in path is not supported
  if (!hasLng && !pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url))
  }

  const lngInPath = supportedLngs.find((loc) => pathname.startsWith(`/${loc}`))
  const response = NextResponse.next()

  if (lngInPath) {
    response.cookies.set(cookieName, lngInPath)
  }
  return response
}
