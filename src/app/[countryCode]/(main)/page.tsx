import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Divider from "@modules/customcomponents/Divider"
import HeroBanner from "@modules/customcomponents/HeroBanner"
import HeroCustom from "@modules/layout/templates/HeroCustom"
import Outlet from "@modules/customcomponents/Outlet"
import ZNAthletes from "@modules/customcomponents/Athletes"
import FAQ from "@modules/customcomponents/FAQ"

export const metadata: Metadata = {
  title: "Z-NUTRITION - AUSTRIA",
  description:
    "Die besten Supplements aus Österreich.",
}

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

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>

      <HeroCustom />
      <Divider />
      <HeroBanner />
      <div className="container mx-auto max-w-7xl px-8"> 
      <FeaturedProducts specificCollectionId="pcol_01J35N9DE9J4XH9BQZMQ82SW34" collections={collections} region={region} />
      </div>
      <Outlet />
      <ZNAthletes />
      <FAQ />
    </>
  )
}
