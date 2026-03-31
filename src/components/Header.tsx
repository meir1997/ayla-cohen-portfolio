'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-light tracking-wider text-dark">
          AC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-sm hover:opacity-60 transition">
            בית
          </Link>
          <Link href="/projects" className="text-sm hover:opacity-60 transition">
            פרויקטים
          </Link>
          <Link href="/about" className="text-sm hover:opacity-60 transition">
            אודות
          </Link>
          <Link href="/contact" className="text-sm hover:opacity-60 transition">
            יצירת קשר
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-sm hover:opacity-60 transition">
              בית
            </Link>
            <Link href="/projects" className="block text-sm hover:opacity-60 transition">
              פרויקטים
            </Link>
            <Link href="/about" className="block text-sm hover:opacity-60 transition">
              אודות
            </Link>
            <Link href="/contact" className="block text-sm hover:opacity-60 transition">
              יצירת קשר
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
