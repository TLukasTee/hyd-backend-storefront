'use client'
import React, { useState } from 'react';
import { formatAmount } from "@lib/util/prices";
import { Cart, LineItem, Order } from "@medusajs/medusa";
import { ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon, TagIcon } from '@heroicons/react/24/outline';
import DiscountCodeSection from '../cartdiscount';
import CartPrewiewImage from '../cartpreview';
import { getPercentageDiff } from '@lib/util/get-precentage-diff';
import { CalculatedVariant } from 'types/medusa';

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
}

const isCart = (obj: any): obj is Omit<Cart, "refundable_amount" | "refunded_total"> => {
  return 'payment_sessions' in obj;
}

const CartTotalsMain: React.FC<CartTotalsProps> = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { total, subtotal, items, shipping_total } = data;

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: data.region,
      includeTaxes: false,
    })
  }

  const calculateTotalSavings = () => {
    return items.reduce((acc, item) => {
      const originalPrice = (item.variant as CalculatedVariant).original_price * item.quantity;
      return acc + (originalPrice - (item.total || 0));
    }, 0);
  }

  const totalSavings = calculateTotalSavings();
  const originalTotal = (total || 0) + totalSavings;
  const savingsPercentage = getPercentageDiff(originalTotal, total || 0);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="bg-gray-100  border-gray-300 rounded-xl ">
     
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out `}>
        <div className="p-4">
          {isCart(data) && <CartPrewiewImage cart={data} />}
          
         
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Zwischensumme</span>
              <span>{getAmount(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Versand</span>
              <span>{getAmount(shipping_total)}</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between font-bold">
            <span className='text-xl'>Summe</span>
            <div>
              <span className="mr-2 text-sm text-gray-500">EUR</span>
              <span className='text-xl'>{getAmount(total)}</span>
            </div>
          </div>
          
          {totalSavings > 0 && (
            <div className="mt-2 flex justify-between text-ui-fg-interactive">
                <div className="gap-x-3 flex justify-start text-ui-fg-interactive">
              <TagIcon className="w-5 h-auto inline-flex text-black" />
              <span className='text-black tracking-wide text-base '>GESAMTERSPARNISSE</span>
              </div>
              <span className='text-red-600 font-semibold'>{getAmount(totalSavings)} ({savingsPercentage}%)</span>
            </div>
          )}
          
          <div className="text-right text-sm text-gray-500">inkl. MwSt</div>
        </div>
      </div>
    </div>
  );
}

export default CartTotalsMain;