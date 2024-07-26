import { Product, ProductCollection } from "@medusajs/medusa"
import { cache, Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import ProteinProducts from "@modules/home/components/featured-products copy"
import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import { ProductCollectionWithPreviews } from "types/global"


const getCollectionsWithProducts = cache(
    async (
      countryCode: string
    ): Promise<ProductCollectionWithPreviews[] | null> => {
      const { collections } = await getCollectionsList(0, 3)
  
      if (!collections) {
        return null
      }
  
      const collectionIds = collections.map((collection) => collection.id)
  
      await Promise.all(
        collectionIds.map((id) =>
          getProductsList({
            queryParams: { collection_id: [id] },
            countryCode,
          })
        )
      ).then((responses) =>
        responses.forEach(({ response, queryParams }) => {
          let collection
  
          if (collections) {
            collection = collections.find(
              (collection) => collection.id === queryParams?.collection_id?.[0]
            )
          }
  
          if (!collection) {
            return
          }
  
          collection.products = response.products as unknown as Product[]
        })
      )
  
      return collections as unknown as ProductCollectionWithPreviews[]
    }
  )
  
export default async function CollectionProtein({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)
  if (!collections || !region) {
    return null
  }

  const proteinProductIds = [
    "prod_01J359M42QKHV7MMJAHZD07RYP",
    "prod_01J359ANHYCF44N9X4YQRAANYW",
    "prod_01J3598S4S409A9WA6VCZWXC3Q",
    // Hydro Whey
    // Add more protein product IDs here
  ];
  return (
       <div className=" mx-auto max-w-7xl px-7 sm:static sm:px-6 lg:px-10"> 
       <h1 className="font-bold text-base sm:text-2xl">{collection.title}</h1>
      
       <RefinementList sortBy={sortBy || "created_at"} />
    
        <Suspense fallback={<SkeletonProductGrid />}>
        <ProteinProducts collections={collections} region={region} specificProductIds={proteinProductIds} />
        </Suspense>

    </div>
  )
}
