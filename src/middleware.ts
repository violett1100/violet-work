import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(zh|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
  // matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}
