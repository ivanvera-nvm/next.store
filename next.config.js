const withBundleStats = require('next-plugin-bundle-stats')

const nextConfig = {
  images: {
    domains: [
      'storeframework.vtexassets.com',
      'storecomponents.vtexassets.com',
    ],
  },
}

const getConfig = withBundleStats({
  outDir: '../public',
})

module.exports = getConfig(nextConfig)
