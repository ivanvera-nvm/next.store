import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Props } from '@vtex/gatsby-theme-vtex/src/components/ProductSummary'
import { useLink } from '@vtex/gatsby-theme-vtex/src/sdk/product/useLink'
import { useSummaryImage } from '@vtex/gatsby-theme-vtex/src/sdk/product/useSummaryImage'
import {
  OfferContainer,
  ProductSummaryImage,
  ProductSummaryTitle,
  ProductSummaryContainer,
} from '@vtex/store-ui'

import BuyButton from '../BuyButton'
import Offer from './Offer'

const OfferPreview: FC = () => (
  <OfferContainer variant="productSummary">
    <Skeleton height={25} />
    <Skeleton height={40} />
    <Skeleton height={45} />
  </OfferContainer>
)

const ProductSummary: FC<Props> = ({
  product,
  loading = 'lazy',
  variant = 'default',
}) => {
  const {
    linkText,
    items: [sku],
    productName,
  } = product as any

  const {
    images: [{ imageUrl, imageText }],
    sellers,
  } = sku

  const to = useLink(linkText)
  const imgProps = useSummaryImage(imageUrl)

  return (
    <ProductSummaryContainer to={to} variant={variant}>
      <ProductSummaryImage
        alt={imageText ?? 'Product Image'}
        loading={loading}
        variant={variant}
        {...imgProps}
      />
      <ProductSummaryTitle variant={variant}>{productName}</ProductSummaryTitle>

      {sellers === undefined ? (
        <OfferPreview />
      ) : sellers.length > 0 ? (
        <Offer
          variant="productSummary"
          commercialOffer={sellers[0].commercialOffer}
        />
      ) : null}

      <BuyButton sku={sku} />
    </ProductSummaryContainer>
  )
}

export { fragment } from '@vtex/gatsby-theme-vtex/src/components/ProductSummary/index'

export default ProductSummary