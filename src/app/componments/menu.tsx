'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Menu() {
    const pathname = usePathname()

    const links = [
        { name: 'TO DO LIST', path: '/todo' },
        { name: 'REFERENCE', path: '/reference' },
        { name: '404', path: '/not-found' },
    ]
    return (
        <menu className="mt-4">
            {links.map((link, i) => {
                return (
                    <div key={i}>
                        <Link
                            href={link.path}
                            className={clsx('hover:text-purple-400 font-semibold', {
                                underline: pathname === link.path,
                            })}
                            scroll={false}
                        >
                            {/* <ChevronRight className="w-4 inline-block" /> */}
                            {link.name}
                        </Link>{' '}
                    </div>
                )
            })}
        </menu>
    )
}

export function Header_resume() {
    return (
        <div className="wrapper grid gap-8 grid-cols-2 sm:grid-cols-4">
            <div className="col-span-1 sm:col-span-3">
                <Link
                    href="/"
                    className="text-2xl sm:text-3xl after:block after:w-16 xs:after:w-36 sm:after:w-44 after:h-2 after:translate-x-0 xs:after:translate-x-12 sm:after:translate-x-16 after:translate-y-2 after:bg-purple-300"
                    scroll={false}
                >
                    Violet&rsquo;s Website
                </Link>
            </div>
            <div className="mt-2">
                <p>Website Designer & Frontend Developer</p>
            </div>
        </div>
    )
}

export function Header_basic() {
    const pathname = usePathname()

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark')
    }

    const links = [
        { name: 'HOME', path: '/' },
        { name: 'WORDLE', path: '/wordle' },
        { name: 'REFERENCE', path: '/reference' },
    ]
    return (
        <>
            <div className="text-center py-6">
                {links.map((link: { name: string; path: string }) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={clsx('p-2 px-3 rounded-full m-2 hover:text-cyan-500 inline-block', {
                                'bg-cyan-600 text-white hover:text-white hover:bg-cyan-500': pathname === link.path,
                            })}
                        >
                            {link.name}
                        </Link>
                    )
                })}
                <button
                    onClick={toggleDarkMode}
                    type="button"
                    className="p-2 px-3 rounded-full m-2 hover:text-cyan-500"
                >
                    Dark Mode
                </button>
            </div>
        </>
    )
}
