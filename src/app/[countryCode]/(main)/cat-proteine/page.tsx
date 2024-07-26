import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getCollectionByHandle,
  getCollectionsList,
  listRegions,
} from "@lib/data"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import CollectionProtein from "./components/CollectionProtien"

type Props = {
  params: { countryCode: string }
  searchParams: {
    page?: string
    sortBy?: SortOptions
  }
}

export const PRODUCT_LIMIT = 12

export async function generateStaticParams() {
  const countryCodes = await listRegions().then((regions) =>
    regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
  )

  return countryCodes?.map((countryCode) => ({ countryCode })) || []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const collection = await getCollectionByHandle("proteine")

  if (!collection) {
    notFound()
  }

  const metadata = {
    title: `${collection.title} | Z-Nutrition Shop`,
    description: `${collection.title} collection`,
  } as Metadata

  return metadata
}

export default async function ProteinCategoryPage({ params, searchParams }: Props) {
  const { sortBy, page } = searchParams

  const collection = await getCollectionByHandle("proteine")

  if (!collection) {
    notFound()
  }

  return (
    <CollectionProtein
      collection={collection}
      page={page}
      sortBy={sortBy}
      countryCode={params.countryCode}
    />
  )
}