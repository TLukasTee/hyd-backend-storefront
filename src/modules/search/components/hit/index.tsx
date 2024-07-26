import { ProductVariant } from "@medusajs/medusa"
import { Container, Text } from "@medusajs/ui"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: ProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  return (
    <LocalizedClientLink
      href={`/products/${hit.handle}`}
      data-testid="search-result"
    >
      <div
        key={hit.id}
        className="flex sm:flex-col gap-2 w-full p-4 shadow-elevation-card-rest hover:shadow-elevation-card-hover justify-between items-between sm:justify-between bg-white rounded-3xl py-6 px-8"
      >
        <Thumbnail
          thumbnail={hit.thumbnail}
          size="square"
          className="group h-24 w-24 sm:h-full sm:w-full "
        />
        <div className="flex flex-col justify-right group">
          <div className="flex flex-col  justify-right">
            <Text
              className="font-bold text-base sm:text-xl items-center text-center justify pt-8"
              data-testid="search-result-title"
            >
              {hit.title}
              
            </Text>
            
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}

export default Hit
