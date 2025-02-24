import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '@/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}

export function middleware(req: NextRequest) {
    let lng

    console.log('---1---')
    console.log(req.nextUrl.pathname)
    console.log(req.cookies.get(cookieName))
    if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)!.value)
    console.log('---2---')
    console.log(lng)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng

    // Redirect if lng in path is not supported
    if (
        !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
    }

    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer')!)
        const lngInReferer = languages.find((l) => {
            console.log('---3---')
            console.log(refererUrl.pathname)
            console.log(l)
            return refererUrl.pathname.startsWith(`/${l}`)
        })
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(cookieName, req.nextUrl.pathname.replace('/', ''))
        console.log('---4---')
        console.log(response.cookies)
        return response
    } else {
        console.log('stop')
    }

    return NextResponse.next()
}
