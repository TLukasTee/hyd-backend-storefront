import { Container } from "@medusajs/ui"

const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse flex flex-col">
      <div className="relative">
        <Container className="aspect-[3/4] w-full bg-gray-200" />
        <div className="absolute top-2 left-2 bg-gray-100 rounded-full w-16 h-8"></div>
      </div>
      <div className="mt-2 bg-gray-100 w-20 h-6"></div>
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center">
          <div className="w-24 h-6 bg-gray-200"></div>
          <div className="ml-2 w-16 h-6 bg-gray-100"></div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full ml-1"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview