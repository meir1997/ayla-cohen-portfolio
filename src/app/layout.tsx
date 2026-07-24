import type { Metadata } from 'next'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'אילה כהן | אדריכלות ועיצוב פנים בירושלים',
    template: '%s | אילה כהן',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'אילה כהן | אדריכלות ועיצוב פנים בירושלים',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [{ url: absoluteUrl('/hero-background-poster.jpg'), width: 1440, height: 810, alt: 'פרויקט בעיצוב אילה כהן' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אילה כהן | אדריכלות ועיצוב פנים בירושלים',
    description: siteConfig.description,
    images: [absoluteUrl('/hero-background-poster.jpg')],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.legalName,
        inLanguage: 'he-IL',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}/#business`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: absoluteUrl('/logo.jpg'),
        image: absoluteUrl('/ayala-portrait.jpg'),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: {
          '@type': 'City',
          name: siteConfig.city,
        },
        sameAs: [siteConfig.instagram, siteConfig.facebook],
      },
    ],
  }

  return (
    <html lang="he" dir="rtl">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
