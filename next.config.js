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
}

const getConfig = withBundleStats({
  outDir: '../public',
})

module.exports = getConfig(nextConfig)
