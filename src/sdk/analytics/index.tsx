import { useAnalyticsEvent } from '@faststore/sdk'
import React from 'react'
import type { PropsWithChildren } from 'react'

import storeConfig from '../../../store.config'

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer ?? []
}

export const AnalyticsHandler = ({ children }: PropsWithChildren<unknown>) => {
  useAnalyticsEvent((event) => {
    window.dataLayer.push({ event: event.name, ecommerce: event.params })

    import(`./platform/${storeConfig.platform}`).then(
      ({ default: sendEvent }) => {
        sendEvent(event)
      }
    )
  })

  return <>{children}</>
}

export default AnalyticsHandler
