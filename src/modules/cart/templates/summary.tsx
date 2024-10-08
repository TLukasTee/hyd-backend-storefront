"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { CartWithCheckoutStep } from "types/global"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartTotalsMain from "@modules/common/components/cart-totals-main"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Gesamtübersicht
      </Heading>
      <CartTotalsMain data={cart} />
      <LocalizedClientLink href={"/checkout?step=" + cart.checkout_step}>
        <div className="w-full text-white bg-red-600 rounded-full text-center font-semibold border-2 border-white px-6 py-3 "> Weiter zum Versand </div>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
