'use client'

import React from 'react'
import { Cart } from "@medusajs/medusa"
import DiscountCode from '@modules/checkout/components/discount-code'
import ItemsPreviewTemplate from '@modules/cart/templates/preview'

type CartPrewiewImageProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const CartPrewiewImage: React.FC<CartPrewiewImageProps> = ({ cart }) => {
  return (
    <div className="">
    <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />
    </div>
  )
}

export default CartPrewiewImage