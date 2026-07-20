'use client'

import { useEffect, useState } from 'react'

const TYPE_DELAY = 90
const DELETE_DELAY = 55
const FULL_TEXT_PAUSE = 1400
const EMPTY_TEXT_PAUSE = 350

interface TypewriterTextProps {
  text: string
  className?: string
}

export default function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotionQuery.matches) {
      setVisibleCharacters(text.length)
      return
    }

    const delay = isDeleting
      ? visibleCharacters === 0
        ? EMPTY_TEXT_PAUSE
        : DELETE_DELAY
      : visibleCharacters === text.length
        ? FULL_TEXT_PAUSE
        : TYPE_DELAY

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && visibleCharacters === text.length) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && visibleCharacters === 0) {
        setIsDeleting(false)
        return
      }

      setVisibleCharacters((current) => current + (isDeleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [isDeleting, text, visibleCharacters])

  return (
    <p aria-label={text} className={`${className} min-h-[1.5em]`} dir="ltr">
      <span aria-hidden="true">
        {text.slice(0, visibleCharacters)}
        <span className="typewriter-cursor" aria-hidden="true" />
      </span>
    </p>
  )
}
