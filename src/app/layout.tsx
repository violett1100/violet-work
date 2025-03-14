import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Outfit, Ubuntu_Mono } from 'next/font/google'
import { ReactElement } from 'react'
// import { dir } from 'i18next'

import { languages } from '@/i18n/settings'

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
})

const ubuntuMono = Ubuntu_Mono({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-ubuntu-mono',
})

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: `Violet's Work`,
    description: 'Generated by create next app',
}

type RootLayoutProps = { children: ReactElement; params: Promise<{ lng: string }> }
export function generateStaticParams() {
    return [languages.map((lng) => ({ lng }))]
}

// {
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const resolvedParams = await params
    return (
        <html lang={resolvedParams.lng}>
            <body
                // 防止chrome擴充功能影響程式碼
                suppressHydrationWarning={true}
                className={`${outfit.className} ${ubuntuMono.variable} ${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black dark:text-white`}
            >
                {children}
            </body>
        </html>
    )
}
