'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {  ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const AccordionDetails = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionData = [
    { id: 'lab', title: 'Beschreibung', content: 'Ergebnisse der Laboranalysen...' },

    { id: 'usage', title: 'Anwendung', content: 'Empfohlene Anwendung des Produkts...' },
  ];

  return (
    <div className=" mx-auto px-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
    
        </div>
        <div className="md:w-1/2 md:pl-8">
          {accordionData.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-200  rounded-lg transition-all"
                onClick={() => toggleAccordion(item.id)}
              >
                <span className="font-bold">{item.title}</span>
                <span className='transition-all'>{openAccordion === item.id ? <ChevronDownIcon className='w-5 h-5' /> : <ChevronUpIcon className='w-5 h-5'/>}</span>
              </button>
              {openAccordion === item.id && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionDetails;