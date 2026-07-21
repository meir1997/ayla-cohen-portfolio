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
  const isScrollLocked = isLanding || pathname === '/about'
  const isImmersive = isScrollLocked || pathname === '/contact' || pathname === '/guide'

  useEffect(() => {
    if (isScrollLocked) {
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
  }, [isScrollLocked])

  if (isLanding) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isImmersive && <Footer />}
    </>
  )
}
