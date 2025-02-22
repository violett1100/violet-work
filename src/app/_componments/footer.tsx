import Link from 'next/link'
export function Footer() {
    return (
        <footer className="wrapper mt-8">
            <div className="border-t border-tertiary pt-4 sm:grid grid-cols-2 text-center">
                <p className="sm:text-left">2025 Maded by Violet</p>
                <Link href="mailto:violett1100@gmail.com" className="sm:text-right underline hover:text-primary">
                    violett1100@gmail.com
                </Link>
            </div>
        </footer>
    )
}
