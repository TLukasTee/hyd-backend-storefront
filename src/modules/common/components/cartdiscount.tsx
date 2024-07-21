'use client'

import React from 'react'
import { Cart } from "@medusajs/medusa"
import DiscountCode from '@modules/checkout/components/discount-code'

type DiscountCodeSectionProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const DiscountCodeSection: React.FC<DiscountCodeSectionProps> = ({ cart }) => {
  return (
    <div className="mt-4">
      <DiscountCode cart={cart} />
    </div>
  )
}

export default DiscountCodeSection