import React, { useState } from 'react'
import { Label, Text } from "@medusajs/ui"
import { ChevronDownIcon } from '@heroicons/react/24/outline'

type FilterDropdownProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  'data-testid'?: string
}

const FilterDropdown = ({
  title,
  items,
  value,
  handleChange,
  'data-testid': dataTestId
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const currentLabel = items.find(item => item.value === value)?.label || "Ausgewählt"

  return (
    <div className="relative" data-testid={dataTestId}>
      <Text className="txt-compact-small-plus text-ui-fg-muted mb-2">{title}</Text>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLabel}</span>
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          {items.map((item) => (
            <Label
              key={item.value}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleChange(item.value)
                setIsOpen(false)
              }}
            >
              {item.label}
            </Label>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterDropdown