import { NextSeo } from 'next-seo'
import React from 'react'

import { useSiteUrl } from 'src/sdk/useSiteUrl'

import storeConfig from '../../store.config'

const {
  site: { title },
} = storeConfig

function Page() {
  const siteUrl = useSiteUrl()

  return (
    <>
      {/* SEO */}
      <NextSeo title={title} canonical={siteUrl} />

      {/*
        Sections: Components imported from '../components/sections' only.
        Do not import or render components from any other folder in here.
      */}
      <h1>{title}</h1>
    </>
  )
}

export default Page
