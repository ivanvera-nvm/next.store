import { NextSeo } from 'next-seo'
import React from 'react'

import Carousel from 'src/components/sections/Carousel'
import Hero from 'src/components/sections/Hero'
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
      <div className="flex flex-col gap-12">
        <Carousel
          allItems={[
            {
              alt: 'Headset',
              src: 'https://storeframework.vtexassets.com/assets/faststore/images/carousel-1___c463f83e25637c02f902a91ba298a4ca.jpg',
            },
            {
              alt: 'Chair',
              src: 'https://storeframework.vtexassets.com/assets/faststore/images/carousel-2___7a0cfc57a0c8d09fea4ed46d1a412bb2.png',
            },
            {
              alt: 'Bags',
              src: 'https://storeframework.vtexassets.com/assets/faststore/images/carousel-1___8c276372fedb2420fa639cba99d066de.jpg',
            },
          ]}
        />
        <Hero
          title="New Products Available"
          subtitle="Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum."
          linkText="See all"
          link="/"
          imageSrc="https://storeframework.vtexassets.com/assets/faststore/images/banner-1___7aca7661f2b2996afaf4ccfc8096b102.jpg"
          imageAlt="A person with hands on the pocket, carrying a round straw bag"
        />
      </div>
    </>
  )
}

export default Page
