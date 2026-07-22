'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const close = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-24 md:h-28">
        {/* Logo */}
        <Link href="/" onClick={close} className="inline-flex min-h-11 items-center">
          <img src="/logo.jpg" alt="אילה כהן" className="h-20 md:h-24 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          <Link href="/" className="inline-flex min-h-11 items-center text-lg font-medium hover:opacity-60 transition">
            בית
          </Link>
          <Link href="/projects" className="inline-flex min-h-11 items-center text-lg font-medium hover:opacity-60 transition">
            פרויקטים
          </Link>
          <Link href="/services" className="inline-flex min-h-11 items-center text-lg font-medium hover:opacity-60 transition">
            שירותים
          </Link>
          <Link href="/blog" className="inline-flex min-h-11 items-center text-lg font-medium hover:opacity-60 transition">
            בלוג
          </Link>
          <Link href="/contact" className="inline-flex min-h-11 items-center text-lg font-medium hover:opacity-60 transition">
            יצירת קשר
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden min-h-11 min-w-11 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-5 py-4 space-y-1">
            <Link href="/" onClick={close} className="flex min-h-12 items-center text-base font-medium hover:opacity-60 transition">
              בית
            </Link>
            <Link href="/projects" onClick={close} className="flex min-h-12 items-center text-base font-medium hover:opacity-60 transition">
              פרויקטים
            </Link>
            <Link href="/services" onClick={close} className="flex min-h-12 items-center text-base font-medium hover:opacity-60 transition">
              שירותים
            </Link>
            <Link href="/blog" onClick={close} className="flex min-h-12 items-center text-base font-medium hover:opacity-60 transition">
              בלוג
            </Link>
            <Link href="/contact" onClick={close} className="flex min-h-12 items-center text-base font-medium hover:opacity-60 transition">
              יצירת קשר
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
