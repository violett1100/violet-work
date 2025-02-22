import clsx from 'clsx'
import Link from 'next/link'
// import { Menu } from '@/app/_componments/menu'
import { SwitchLangBtn } from '@/app/_componments/switchLang'

export function Header_resume(params) {
    return (
        <div className="wrapper grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 md:col-span-3">
                <Link
                    href="/"
                    className="text-3xl after:block after:w-44 after:h-2 after:translate-x-16 after:translate-y-2 after:bg-purple-300"
                    scroll={false}
                >
                    Violet&rsquo;s Website
                </Link>
            </div>
            <div className="mt-2">
                <p>Website Designer & Frontend Developer</p>
                <SwitchLangBtn lng={params.lng} />
                {/* <Menu /> */}
            </div>
        </div>
    )
}

export function Header_basic() {
    // const pathname = usePathname()

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
                                // 'bg-cyan-600 text-white hover:text-white hover:bg-cyan-500': pathname === link.path,
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
