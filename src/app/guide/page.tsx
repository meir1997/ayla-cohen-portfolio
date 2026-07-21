import LeadMagnet from '@/components/LeadMagnet'

export const metadata = {
  title: 'מדריך לעיצוב הבית | אילה כהן',
  description: 'הורידו במתנה את המדריך המלא לעיצוב הבית שחלמתם עליו - מאת אילה כהן',
}

export default function GuidePage() {
  return (
    <div className="mobile-one-screen h-dvh overflow-hidden pt-24 md:pt-28">
      <LeadMagnet />
    </div>
  )
}
