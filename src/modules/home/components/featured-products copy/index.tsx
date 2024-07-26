import React from 'react';
import { Region } from "@medusajs/medusa";
import ProductRail from "@modules/home/components/featured-products/product-rail";
import { ProductCollectionWithPreviews } from "types/global";

interface VitalProductsProps {
  collections: ProductCollectionWithPreviews[];
  region: Region;
  specificProductIds: string[]; // Array of specific product IDs to display
}

const VitalProducts: React.FC<VitalProductsProps> = ({
  collections,
  region,
  specificProductIds,
}) => {
  // Find the collection that contains the specific products
  const proteinCollection = collections.find((collection) =>
    collection.products?.some((product) => specificProductIds.includes(product.id))
  );

  if (!proteinCollection) {
    return null;
  }

  // Filter the products to only include those with the specific IDs
  const filteredProducts = proteinCollection.products?.filter((product) =>
    specificProductIds.includes(product.id)
  );

  // Create a new collection object with the filtered products
  const customCollection: ProductCollectionWithPreviews = {
    ...proteinCollection,
    products: filteredProducts || [],
  };

  return (
 

      <ProductRail collection={customCollection} region={region} />

  );
};

export default VitalProducts;