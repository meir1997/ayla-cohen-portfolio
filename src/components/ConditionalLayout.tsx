'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLanding = pathname === '/'
  const isFullscreen = isLanding || pathname === '/about'

  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.classList.add('overflow-hidden')
      document.body.classList.add('overflow-hidden')
    } else {
      document.documentElement.classList.remove('overflow-hidden')
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.documentElement.classList.remove('overflow-hidden')
      document.body.classList.remove('overflow-hidden')
    }
  }, [isFullscreen])

  if (isLanding) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isFullscreen && <Footer />}
    </>
  )
}
