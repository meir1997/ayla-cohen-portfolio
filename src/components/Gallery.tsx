'use client'

import { useState, useEffect, useCallback } from 'react'

interface GalleryProps {
  images: string[]
  projectId: string
  projectName: string
}

export default function Gallery({ images, projectId, projectName }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const getImageUrl = (imageName: string) => {
    return `/api/images/${encodeURIComponent(projectId)}/${encodeURIComponent(imageName)}`
  }

  const close = () => setSelectedIndex(null)
  const prev = useCallback(() => setSelectedIndex(i => i !== null ? Math.max(0, i - 1) : null), [])
  const next = useCallback(() => setSelectedIndex(i => i !== null ? Math.min(images.length - 1, i + 1) : null), [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') next()
      if (e.key === 'ArrowRight') prev()
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selectedIndex, prev, next])

  return (
    <>
      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={close}
        >
          {/* Image — fills screen on mobile */}
          <img
            src={getImageUrl(images[selectedIndex])}
            alt={`${projectName} - ${selectedIndex + 1}`}
            className="w-full h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none">
            {selectedIndex + 1} / {images.length}
          </p>

          {/* Close button — small, top corner */}
          <button
            onClick={close}
            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev arrow — floating, semi-transparent */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            disabled={selectedIndex === 0}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center transition disabled:opacity-0 z-10"
            aria-label="הקודם"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Next arrow — floating, semi-transparent */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            disabled={selectedIndex === images.length - 1}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center transition disabled:opacity-0 z-10"
            aria-label="הבא"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-2">{projectName}</h2>
          <p className="hidden md:block text-gray-600">{images.length} תמונות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((imageName, index) => (
            <div
              key={index}
              className="bg-secondary aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition group"
              onClick={() => setSelectedIndex(index)}
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
