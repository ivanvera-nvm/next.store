// Allow node.js path lib. This code only run on backend
// eslint-disable-next-line
const path = require('path')

// @ts-check
const withBundleStats = require('next-plugin-bundle-stats')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  images: {
    domains: [
      'storeframework.vtexassets.com',
      'storecomponents.vtexassets.com',
    ],
    minimumCacheTTL: 3600 * 24 * 365, // 1 year in seconds
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack: (config) => {
    // Copy partytown to bundle
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(
              __dirname,
              'node_modules',
              '@builder.io',
              'partytown',
              'lib'
            ),
            to: path.join(__dirname, 'public', '~partytown'),
          },
        ],
      })
    )

    return config
  },
}

const getConfig = withBundleStats({
  outDir: '../public',
})

module.exports = getConfig(nextConfig)
