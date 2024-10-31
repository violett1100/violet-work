'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
    const pathname = usePathname()

    const links = [
        { name: 'HOME', path: '/' },
        { name: 'WORDLE', path: '/wordle' },
        { name: 'YUHUNG', path: '/yuhung' },
    ]
    return (
        <>
            <div className="text-center py-6">
                {links.map((link: { name: string; path: string }) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={clsx('p-2 px-3 rounded-full m-2 hover:text-cyan-500', {
                                'bg-cyan-600 text-white hover:text-white hover:bg-cyan-500': pathname === link.path,
                            })}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
