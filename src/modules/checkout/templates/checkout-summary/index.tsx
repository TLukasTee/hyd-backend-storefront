import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { cookies } from "next/headers"
import { getCart } from "@lib/data"

const CheckoutSummary = async () => {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) {
    return null
  }

  const cart = await getCart(cartId).then((cart) => cart)

  if (!cart) {
    return null
  }

  return (
    <div className="">
      <div className="">
        {/* <Divider className="my-6 small:hidden" />
        <Heading
          level="h2"
          className="flex flex-row text-3xl-regular items-baseline text-neutral-800"
        >
          In deinem Warenkorb
        </Heading>
        <Divider className="mb-4" /> */}
        {/* <ItemsPreviewTemplate region={cart?.region} items={cart?.items} /> */}
        <CartTotals data={cart} />
        <div className="my-6">
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
