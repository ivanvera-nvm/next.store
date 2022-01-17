import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Partytown, GoogleTagManager } from '@builder.io/partytown/react'

import storeConfig from '../../store.config'

const { platform, analytics } = storeConfig

const partytownForward: string[] = []

if (platform === 'vtex') {
  partytownForward.push('sendrc')
}

if (!analytics.gtmContainerId) {
  // eslint-disable-next-line
  console.warn('Check the analytics section on your store.config.js file.')
}

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          {analytics.gtmContainerId && (
            <GoogleTagManager
              containerId={analytics.gtmContainerId}
              enablePartytown
            />
          )}
          {platform === 'vtex' && (
            <>
              <script
                key="rc.js-init"
                type="text/partytown"
                dangerouslySetInnerHTML={{
                  __html: `
          window.sendrc=function(en,ed){window.NavigationCapture.sendEvent(en,ed)}
          `,
                }}
              />
              <script
                async
                key="rc.js-script"
                type="text/partytown"
                src="https://io.vtex.com.br/rc/rc.js"
              />
            </>
          )}
          <Partytown forward={partytownForward} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
