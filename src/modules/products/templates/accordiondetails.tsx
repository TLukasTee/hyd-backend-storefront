'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

type ProductNutritionsProps = {
  product: PricedProduct
  countryCode: string
}

const AccordionDetails = ({ product, countryCode }: ProductNutritionsProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const metadata = product.metadata || {}

  const getValue = (key: string): string | null => {
    const value = metadata[key]
    return typeof value === 'string' ? value : null
  }

  const accordionData = [
    { id: 'lab', title: 'Beschreibung', content: getValue("product_custom_desc1") },
    { id: 'usage1', title: 'Anwendung', content: getValue("product_custom_desc2") },
  ];

  useEffect(() => {
    // Force a reflow to enable the animation
    if (openAccordion) {
      const content = contentRefs.current[openAccordion];
      if (content) {
        content.style.height = `${content.scrollHeight}px`;
      }
    }
  }, [openAccordion]);

  return (
    <div className="accordion">
      {accordionData.map((item) => (
        <div key={item.id} className="mb-4">
          <button
            className="flex justify-between items-center w-full sm:p-4 sm:px-4 px-6 py-4 border-t-2 transition-all"
            onClick={() => toggleAccordion(item.id)}
          >
            <span className="font-bold">{item.title}</span>
            <span className='transition-all'>
              {openAccordion === item.id ? 
                <ChevronDownIcon className='w-5 h-5' /> : 
                <ChevronUpIcon className='w-5 h-5'/>
              }
            </span>
          </button>
          <div 
            ref={el => contentRefs.current[item.id] = el}
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              openAccordion === item.id ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-white rounded-b-lg">
              <p className='px-2.5'>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionDetails;