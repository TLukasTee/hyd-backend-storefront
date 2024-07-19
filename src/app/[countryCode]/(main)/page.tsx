import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Divider from "@modules/customcomponents/Divider"
import HeroBanner from "@modules/customcomponents/HeroBanner"
import HeroCustom from "@modules/layout/templates/HeroCustom"
import Outlet from "@modules/customcomponents/Outlet"
import ZNAthletes from "@modules/customcomponents/Athletes"
import FAQ from "@modules/customcomponents/FAQ"

export const metadata: Metadata = {
  title: "ZNUTRITION - AUSTRIA",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
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
      <HeroBanner  />
      <ul className="flex flex-col gap-x-6 bg-white">
      <FeaturedProducts specificCollectionId="pcol_01J35N9DE9J4XH9BQZMQ82SW34" collections={collections} region={region} />
      </ul>
    
      <Outlet />
        <ZNAthletes />
        <FAQ />
    </>
  )
}
