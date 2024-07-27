import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import Link from "next/link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-8 lg:px-12 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex flex-row text-3xl gap-x-2 items-baseline"
      >
        Warenkorb
      </Heading>
      <Text className="text-lg mt-4 mb-6 max-w-[32rem]">
        Du hast noch keine Artikel in deinem Warenkorb.
      </Text>
      <div >
        <Link href="/store" className="text-base bg-red-600 px-6 py-2 text-white rounded-full">Unser Sortiment ansehen</Link>
      </div>
    </div>
  )
}

export default EmptyCartMessage
