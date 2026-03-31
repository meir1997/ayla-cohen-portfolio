import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'אילה כהן - עיצוב וארכיטקטורה',
  description: 'פורטפוליו של אילה כהן - עיצוב פנים וארכיטקטורה יוקרתית',
  openGraph: {
    title: 'אילה כהן - עיצוב וארכיטקטורה',
    description: 'פורטפוליו של אילה כהן - עיצוב פנים וארכיטקטורה יוקרתית',
    url: 'https://ayalacohen.co.il',
    siteName: 'אילה כהן',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
