'use client'
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import React, { useState, useRef, useEffect } from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    } else if (touchEndX.current - touchStartX.current > 75) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      // Reset index if screen size changes (e.g., from mobile to desktop)
      setCurrentIndex(0)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="hidden  md:flex flex-col space-y-4">
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              className={`relative w-24 h-24 ${
                index === currentIndex ? ' border-gray-900' : 'border border-gray-200'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                quality={100}
                className={` object-cover ${
                  index === currentIndex ? 'border   border-gray-100' : 'border  border-gray-100'
                }`}
                fill
              />
            </button>
          ))}
        </div>
        <div className="relative flex-grow">
          <div 
            className="relative w-full h-[300px] md:h-[500px] sm:right-4 "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={images[currentIndex].url}
              alt={`Product image ${currentIndex + 1}`}
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-4 md:hidden">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery