"use client"

import { Cart } from "@medusajs/medusa"
import React, { useMemo } from "react"
import { useFormState } from "react-dom"
import Input from "@modules/common/components/input"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import ErrorMessage from "@modules/checkout/components/error-message"
import {
  removeDiscount,
  submitDiscountForm,
} from "@modules/checkout/actions"
import { formatAmount } from "@lib/util/prices"
import { ArrowRightIcon, TagIcon, XMarkIcon } from "@heroicons/react/24/outline"
import ItemsPreviewTemplate from "@modules/cart/templates/preview"

type DiscountCodeProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
  const { discounts, region } = cart

  const appliedDiscount = useMemo(() => {
    if (!discounts || !discounts.length) {
      return undefined
    }

    switch (discounts[0].rule.type) {
      case "percentage":
        return `${discounts[0].rule.value}%`
      case "fixed":
        return `- ${formatAmount({
          amount: discounts[0].rule.value,
          region: region,
        })}`
      default:
        return "Free shipping"
    }
  }, [discounts, region])

  const removeDiscountCode = async () => {
    await removeDiscount(discounts[0].code)
  }

  const [message, formAction] = useFormState(submitDiscountForm, null)

  return (
    <div className="w-full  flex flex-col">
      <form action={formAction} className="w-full">
        <div className="flex w-full items-center ">
                  <Input
                    label="Rabattcode"
                    name="code"
                    type="text"
                    autoFocus={false}
                  />
                  <SubmitButton className="bg-red-600 ml-4 font-bold outline-0 border-0 px-4 text-white" variant="transparent" >
                    <ArrowRightIcon className="w-6 h-6" />
                    
                    </SubmitButton>
                </div>
                <ErrorMessage
                  error={message}
                  data-testid="discount-error-message"
                />
           
      </form>
      {appliedDiscount && (
        <div className="mt-2 flex items-center  py-1 rounded">
          <div className="bg-gray-200 px-3 py-1 rounded-md"> 
          <TagIcon className="h-4 w-5 inline-flex relative text-black mr-2" /> 

          <span className=" ">
            {discounts[0].code}
          </span>
          <button
            onClick={removeDiscountCode}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5 relative top-1 ml-2" />
          </button>
        </div>
        </div>
      )}
    </div>
  )
}

export default DiscountCode