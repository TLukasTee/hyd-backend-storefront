import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (


    <div className=" mx-auto max-w-7xl px-7 sm:static sm:px-6 lg:px-10">
      <h1 className="font-bold text-base sm:text-2xl">Alle Produkte</h1>

      <RefinementList sortBy={sortBy || "price_desc"} />

      <Suspense fallback={<SkeletonProductGrid />}>
        <PaginatedProducts
          sortBy={sortBy || "price_desc"}
          page={pageNumber}
          countryCode={countryCode}
        />
      </Suspense>

    </div>
  )
}

export default StoreTemplate
