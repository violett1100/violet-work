import createNextIntlPlugin from 'next-intl/plugin'

const therapeuticNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default therapeuticNextIntl(nextConfig)
