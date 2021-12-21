// @ts-check
const withBundleStats = require('next-plugin-bundle-stats')

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  images: {
    domains: [
      'storeframework.vtexassets.com',
      'storecomponents.vtexassets.com',
    ],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  // Leave to CDN (Vercel, Netlify etc) to decide how to compress
  compress: false,
}

const getConfig = withBundleStats({
  outDir: '../public',
})

module.exports = getConfig(nextConfig)
