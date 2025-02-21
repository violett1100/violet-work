'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
    const pathname = usePathname()

    console.log(pathname.match('/zh/') ? 'yes' : 'no')
    // if (!supportedLocales.includes(resolvedParams.lng)) {
    //     notFound() // 🚨 觸發 404
    // }
    return (
        <div className="wrapper flex justify-center items-center h-screen">
            <div className="container mx-auto px-4">
                {/* <h2>{resolvedParams.lng}</h2> */}
                <h2 className="title">404</h2>
                <div className="md:grid grid-cols-4 mb-12">
                    <div className="col-start-2 col-span-3">
                        <h3 className="subtitle">{pathname.match('/en/') ? 'Page Not Found' : '此頁不存在'}</h3>
                        <div className="mb-4 border-b border-tertiary pb-2">
                            <Link
                                href="/"
                                className="hover:text-primary inline-block md:flex justify-between items-baseline"
                            >
                                <p className="flex items-center">
                                    <ChevronRight className="inline size-6 pr-2" />
                                    {pathname.match('/en/') ? 'BACK HOME' : '返回首頁'}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
