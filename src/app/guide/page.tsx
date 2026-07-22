import LeadMagnet from '@/components/LeadMagnet'
import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'המדריך לעיצוב הבית',
  description: 'הורידו במתנה את המדריך המלא לעיצוב הבית שחלמתם עליו - מאת אילה כהן',
  alternates: { canonical: absoluteUrl('/guide') },
}

export default function GuidePage() {
  return (
    <div className="mobile-one-screen h-dvh overflow-hidden pt-24 md:pt-28">
      <LeadMagnet />
    </div>
  )
}
