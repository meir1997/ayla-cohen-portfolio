'use client'

import { useEffect, useState } from 'react'

const TYPE_DELAY = 90
const FULL_TEXT_PAUSE = 1400
const EMPTY_TEXT_PAUSE = 350

interface TypewriterTextProps {
  text: string
  className?: string
}

export default function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotionQuery.matches) {
      setVisibleCharacters(text.length)
      return
    }

    const delay = visibleCharacters === text.length
      ? FULL_TEXT_PAUSE
      : visibleCharacters === 0
        ? EMPTY_TEXT_PAUSE
        : TYPE_DELAY

    const timeoutId = window.setTimeout(() => {
      setVisibleCharacters((current) => current === text.length ? 0 : current + 1)
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [text, visibleCharacters])

  return (
    <p aria-label={text} className={`${className} min-h-[1.5em]`} dir="ltr">
      <span aria-hidden="true">
        {text.slice(0, visibleCharacters)}
        <span className="typewriter-cursor" aria-hidden="true" />
      </span>
    </p>
  )
}
