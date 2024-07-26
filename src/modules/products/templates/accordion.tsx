import { StoreGetProductsParams } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getProductsList, getRegion } from "@lib/data"

import ProductNutritions from "./nutritions"
import AccordionDetails from "./accordiondetails"

type RelatedProductsProps = {
  product: PricedProduct
  countryCode: string
}

export default async function ProductDetails({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const setQueryParams = (): StoreGetProductsParams => {
    const params: StoreGetProductsParams = {}

    if (region?.id) {
      params.region_id = region.id
    }

    if (region?.currency_code) {
      params.currency_code = region.currency_code
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }

  const queryParams = setQueryParams()

  const productPreviews = await getProductsList({
    queryParams,
    countryCode,
  }).then(({ response }) =>
    response.products.filter(
      (productPreview) => productPreview.id !== product.id
    )
  )

  if (!productPreviews.length) {
    return null
  }

  return (
    <div className="flex flex-col md:flex-row gap-x-12 ">


    <div className="md:w-1/2 ">
      <ProductNutritions product={product} countryCode={countryCode} />
      </div> 
      <div className="md:w-1/2 mt-8 sm:mt-0">
      <AccordionDetails  product={product}  countryCode={countryCode} />
      </div> 
    </div>
  )
}
