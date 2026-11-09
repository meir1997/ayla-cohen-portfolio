'use client'

import { useState, useEffect, useCallback } from 'react'
import { projects } from '@/lib/projects'

interface GalleryProps {
  images: string[]
  projectId: string
  projectName: string
  aboutText?: string
}

export default function Gallery({ images, projectId, projectName, aboutText }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const orderedProjects = [...projects.filter(project => project.id !== 'country-house'), ...projects.filter(project => project.id === 'country-house')]
  const projectIndex = orderedProjects.findIndex(project => project.id === projectId)
  const projectNumber = projectIndex >= 0 ? String(projectIndex + 1).padStart(2, '0') : ''
  const projectYear = orderedProjects[projectIndex]?.year

  const getImageUrl = (imageName: string) => {
    return imageName.startsWith('/') ? imageName : `/project-images/${encodeURIComponent(projectId)}/${encodeURIComponent(imageName)}`
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
      <div className="space-y-12">
        {aboutText ? (
          <section className="relative py-10 md:py-14" dir="rtl">
            {projectYear && <span className="absolute left-0 top-10 text-xs tracking-[0.2em] text-dark/45 md:top-14">{projectYear}</span>}
            <div className="max-w-2xl mx-auto px-2">
              {/* Section label with decorative line */}
              <div className="mb-8 md:mb-10">
                {projectNumber && <p className="mb-5 text-xs tracking-[0.2em] text-dark/45">{projectNumber}</p>}
                <h2 className="text-2xl font-light text-dark md:text-3xl">
                  על הפרויקט
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="space-y-6 md:space-y-7">
                {aboutText.split('\n\n').map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      projectId === 'mevo-choron'
                        ? `text-lg leading-relaxed text-gray-600 md:text-xl ${i === 0 ? 'font-semibold' : ''}`
                        : i === 0
                          ? 'text-xl md:text-2xl font-light leading-relaxed text-dark'
                          : 'text-base md:text-lg leading-loose text-gray-600'
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {projectId !== 'mevo-choron' && (
                <div className="mt-10 md:mt-12 flex justify-start">
                  <div className="h-px w-16 bg-dark/30"></div>
                </div>
              )}
            </div>
          </section>
        ) : (
          <div className="relative" dir="rtl">
            {projectYear && <span className="absolute left-0 top-0 text-xs tracking-[0.2em] text-dark/45">{projectYear}</span>}
            {projectNumber && <p className="mb-5 text-xs tracking-[0.2em] text-dark/45">{projectNumber}</p>}
            <h2 className="text-3xl md:text-4xl font-light mb-2">{projectName}</h2>
          </div>
        )}

        <section aria-label={`גלריית תמונות של ${projectName}`} className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 md:gap-6">
          {images.map((imageName, index) => (
            <button
              key={imageName}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`הגדלת תמונה ${index + 1} מתוך ${images.length}`}
              className={`flex w-full justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark ${index === 0 ? 'col-span-2 md:col-span-3' : 'aspect-[4/5] overflow-hidden'}`}
            >
              <img
                src={getImageUrl(imageName)}
                alt={`${projectName} - תמונה ${index + 1} מתוך ${images.length}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`block ${index === 0 ? 'h-auto w-auto max-h-[85vh] max-w-full object-contain' : 'h-full w-full object-cover'}`}
              />
            </button>
          ))}
        </section>
      </div>
    </>
  )
}
