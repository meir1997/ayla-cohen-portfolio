'use client'

import { useState } from 'react'

interface GalleryProps {
  images: string[]
  projectId: string
  projectName: string
}

export default function Gallery({ images, projectId, projectName }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const getImageUrl = (imageName: string) => {
    return `/api/images/${encodeURIComponent(projectId)}/${encodeURIComponent(imageName)}`
  }

  return (
    <>
      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-auto">
            <img
              src={getImageUrl(selectedImage)}
              alt="Lightbox"
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-2">{projectName}</h2>
          <p className="text-gray-600">{images.length} תמונות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((imageName, index) => (
            <div
              key={index}
              className="bg-secondary aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition group"
              onClick={() => setSelectedImage(imageName)}
            >
              <img
                src={getImageUrl(imageName)}
                alt={`${projectName} - ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
