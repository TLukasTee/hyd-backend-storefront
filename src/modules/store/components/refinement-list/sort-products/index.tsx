"use client"

import React from "react"
import FilterDropdown from "@modules/common/components/filter-radio-group"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Neueste Produkte",
  },
  {
    value: "price_asc",
    label: "Preis: Niedrig -> Hoch",
  },
  {
    value: "price_desc",
    label: "Preis: Hoch -> Niedrig",
  },
]

const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
  const handleChange = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <FilterDropdown
      title="Sortieren nach"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
    />
  )
}

export default SortProducts