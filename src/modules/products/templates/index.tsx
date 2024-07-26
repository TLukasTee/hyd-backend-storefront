import React, { Suspense } from "react"
import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { StarIcon, TruckIcon } from "@heroicons/react/24/outline"
import ChevronDown from "@modules/common/icons/chevron-down"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductActionsWrapper from "./product-actions-wrapper"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ProductDetails from "./accordion"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, region, countryCode }) => {
  if (!product || !product.id) {
    return null
  }

  return (
    <div className="md:px-12 mx-auto max-w-7xl mt-12">
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl pb-10  border-b ">
        <div className="md:w-3/5 ">
          <ImageGallery images={product?.images || []} />
        </div>

        <div className="bg-white md:w-3/5 px-6 lg:px-8 py-6 float-right">
          <div className="md:pl-8 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-5 h-5 ${i < Math.floor(899) ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">({Math.floor(Math.random() * 12)})</span>
            </div>
            <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">Bestseller</span>
            <ProductInfo product={product} />
            <ProductTabs product={product} />
            <div className="mb-4">
              <Suspense fallback={<ProductActions product={product} region={region} />}>
                <ProductActionsWrapper id={product.id} region={region} />
              </Suspense>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <TruckIcon className="mr-2 w-8 h-auto" />
              <span className="font-bold">Sofort Verfügbar</span>
              <span className="ml-2">Lieferzeit 2-3 Werktage</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8">
        <ProductDetails product={product} countryCode={countryCode} />
      </div>

      <div className="mx-auto max-w-7xl mt-12 lg:px-0 px-7">
        <RelatedProducts product={product} countryCode={countryCode} />
      </div>
    </div>
  )
}

export default ProductTemplate