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

  useEffect(() => {
    if (isLanding) {
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
  }, [isLanding])

  if (isLanding) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
