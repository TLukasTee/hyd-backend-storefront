import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { getRegion } from "@lib/data"

type ProductNutritionsProps = {
  product: PricedProduct
  countryCode: string
}

type NutritionInfo = {
  label: string
  value: string | null
  unit: string
  barWidth: string
  barColor: string
}

export default async function ProductNutritions({
  product,
  countryCode,
}: ProductNutritionsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const getNutritionInfo = (): NutritionInfo[] => {
    const metadata = product.metadata || {}
    
    const getValue = (key: string): string | null => {
      const value = metadata[key]
      return typeof value === 'string' ? value : null
    }

    if (metadata.product_type === 'protein') {
      return [
        { label: 'Protein', value: getValue('proteinvalue'), unit: 'g', barWidth: 'w-32', barColor: 'bg-red-500' },
        { label: 'Kalorien', value: getValue('calvalue'), unit: 'kcal', barWidth: 'w-12', barColor: 'bg-gray-300' },
        { label: 'Fett', value: getValue('fatvalue'), unit: 'g', barWidth: 'w-12', barColor: 'bg-gray-300' },
        { label: 'Kohlenhydrate', value: getValue('carbvalue'), unit: 'g', barWidth: 'w-6', barColor: 'bg-gray-300' },
        { label: 'Zucker', value: getValue('sugarvalue'), unit: 'g', barWidth: 'w-3', barColor: 'bg-gray-300' },
      ]
    } else if (metadata.product_type === 'omega3') {
      return [
        { label: 'Konzentriertes Fischöl', value: '3000', unit: 'mg', barWidth: 'w-16', barColor: 'bg-red-500' },
        { label: 'EPA', value: '540', unit: 'mg', barWidth: 'w-14', barColor: 'bg-red-500' },
        { label: 'DHA', value: '360', unit: 'mg', barWidth: 'w-12', barColor: 'bg-red-300' },
      ]
    }

    else if (metadata.product_type === 'magnesium') {
        return [
          { label: 'Magnesium Zitrat', value: '200', unit: 'mg', barWidth: 'w-24', barColor: 'bg-red-500' },
         
     
        ]
      }
    // Default fallback if product type is not recognized
    return []
  }

  const nutritionInfo = getNutritionInfo()

  if (nutritionInfo.length === 0) {
    return <div className="bg-white p-4">Keine Nährwertinformationen verfügbar</div>
  }

  return (
    <div className="bg-white">
      <div className="bg-white p-7 sm:p-8 border-0 sm:border-2  sm:rounded-2xl border-gray-100/60 shadow-0 sm:shadow-sm">
        <div className="space-y-2">
          {nutritionInfo.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-bold">{item.label}</span>
              <div className="flex items-center">
                <div className={`${item.barColor} h-2 ${item.barWidth} rounded-full mr-2`}></div>
                <span>{item.value ?? 'N/A'} {item.unit}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="font-semibold text-sm text-right mt-4">
          *{product.metadata?.product_type === 'protein' ? 'pro 100g' : product.metadata?.product_type === 'magnesium' ? 'pro Kapsel' : product.metadata?.product_type === 'omega3' ? 'pro 3 Softgels' : 'pro Portion'}
        </p>
      </div>
    </div>
  )
}