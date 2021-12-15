import 'src/styles/global.css'

import { CartProvider, SessionProvider, UIProvider } from '@faststore/sdk'
import { DefaultSeo, SiteLinksSearchBoxJsonLd } from 'next-seo'
import NProgress from 'nextjs-progressbar'
import React from 'react'
import type { AppProps } from 'next/app'

import Layout from 'src/Layout'
import AnalyticsHandler from 'src/sdk/analytics'
import { validateCart } from 'src/sdk/cart/validate'
import ErrorBoundary from 'src/sdk/error/ErrorBoundary'
import TestProvider from 'src/sdk/tests'
import { uiActions, uiEffects, uiInitialState } from 'src/sdk/ui'
import { useSiteUrl } from 'src/sdk/useSiteUrl'
import type { CartItem } from 'src/sdk/cart/validate'

import storeConfig from '../../store.config'

const {
  site: { title, description, titleTemplate },
} = storeConfig

function App({ Component, pageProps }: AppProps) {
  const siteUrl = useSiteUrl()

  return (
    <ErrorBoundary>
      <AnalyticsHandler>
        <TestProvider>
          <UIProvider
            initialState={uiInitialState}
            actions={uiActions}
            effects={uiEffects}
          >
            <SessionProvider initialState={{ channel: storeConfig.channel }}>
              <CartProvider<CartItem>
                mode="optimistic"
                onValidateCart={validateCart}
              >
                <NProgress color="#E31C58" />
                <Layout>
                  <DefaultSeo
                    defaultTitle={title}
                    description={description}
                    titleTemplate={titleTemplate}
                    openGraph={{
                      type: 'website',
                      url: siteUrl,
                      title,
                      description,
                    }}
                  />
                  <SiteLinksSearchBoxJsonLd
                    url={siteUrl}
                    potentialActions={[
                      {
                        target: `${siteUrl}/s/?q={search_term_string}`,
                        queryInput: 'required name=search_term_string',
                      },
                    ]}
                  />

                  <Component {...pageProps} />
                </Layout>
              </CartProvider>
            </SessionProvider>
          </UIProvider>
        </TestProvider>
      </AnalyticsHandler>
    </ErrorBoundary>
  )
}

export default App
