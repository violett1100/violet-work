import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="wrapper">
            <div className="container mx-auto px-4">
                <h2 className="title">404</h2>
                <div className="md:grid grid-cols-4 mb-12">
                    <div className="col-start-2 col-span-3">
                        <h3 className="subtitle">Page Not Found</h3>
                        <div className="mb-4 border-b border-tertiary pb-2">
                            <Link
                                href="/"
                                className="hover:text-primary inline-block md:flex justify-between items-baseline"
                            >
                                <p className="flex items-center">
                                    <ChevronRight className="inline size-6 pr-2" />
                                    BACK HOME
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
