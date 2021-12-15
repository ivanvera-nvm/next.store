const withBundleStats = require('next-plugin-bundle-stats')

module.exports = withBundleStats({
  images: {
    domains: [
      'storeframework.vtexassets.com',
      'storecomponents.vtexassets.com',
    ],
  },
})
