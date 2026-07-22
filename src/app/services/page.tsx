import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'שירותי אדריכלות ועיצוב פנים בירושלים',
  description:
    'תכנון אדריכלי, עיצוב פנים, ליווי שיפוץ ותכנון מטבחים בירושלים — שירות אישי ומדויק מאילה כהן.',
  alternates: { canonical: absoluteUrl('/services') },
  openGraph: {
    title: 'שירותי אדריכלות ועיצוב פנים | אילה כהן',
    description: 'תכנון ועיצוב שמחברים בין יופי, פונקציונליות והחיים בבית.',
    url: absoluteUrl('/services'),
  },
}

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f7f5] px-5 pb-20 pt-36 md:px-8 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#8a7254]">
            Interior Design &amp; Architecture
          </p>
          <h1 className="text-4xl font-light leading-tight md:text-6xl">
            אדריכלות ועיצוב פנים שמתחילים בחיים עצמם
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            הסטודיו של אילה כהן בירושלים מלווה בתים, דירות וחללים מסחריים
            משלב הבנת הצרכים והתכנון ועד לבחירות הקטנות שיוצרות חלל שלם.
          </p>
        </header>

        <section className="grid gap-px overflow-hidden border border-dark/15 bg-dark/15 md:grid-cols-2" aria-label="שירותי הסטודיו">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white p-7 transition-colors hover:bg-secondary md:p-10"
            >
              <span className="text-xs tracking-[0.2em] text-dark/45">0{index + 1}</span>
              <h2 className="mt-5 text-2xl font-light md:text-3xl">{service.title}</h2>
              <p className="mt-4 leading-relaxed text-gray-600">{service.description}</p>
              <span className="mt-7 inline-flex min-h-11 items-center border-b border-dark text-sm font-medium">
                לפרטים על השירות ←
              </span>
            </Link>
          ))}
        </section>

        <aside className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-dark/20 pt-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-light md:text-3xl">לא בטוחים מאיפה להתחיל?</h2>
            <p className="mt-2 text-gray-600">שיחת היכרות קצרה תעזור להבין מה נכון לפרויקט שלכם.</p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center bg-dark px-8 text-sm font-medium text-white transition hover:bg-black">
            בואו נדבר
          </Link>
        </aside>
      </div>
    </div>
  )
}
