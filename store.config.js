module.exports = {
  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'storeframework',
    environment: 'vtexcommercestable',
  },

  // Default channel
  channel: '1',

  // Production URLs
  storeUrl: 'https://www.vtex-base1.tk',
  checkoutUrl: 'https://storeframework.vtexcommercestable.com.br/checkout',

  site: {
    title: 'Fashion Store',
    description: 'Fashion Demo Store',
    titleTemplate: '%s | Fashion Store',
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/sleek-metal-pizza-24041857/p',
      collection: '/office',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/sleek-metal-pizza-24041857/p',
      collection: '/office',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },
}
