import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts } from '@/lib/blog-posts'
import { getServiceBySlug, services } from '@/lib/services'
import { absoluteUrl, siteConfig } from '@/lib/site'

interface ServicePageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'השירות לא נמצא' }

  const url = absoluteUrl(`/services/${service.slug}`)
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | אילה כהן`,
      description: service.description,
      url,
      type: 'website',
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const posts = getAllPosts().filter((post) => service.relatedPosts.includes(post.slug))
  const serviceUrl = absoluteUrl(`/services/${service.slug}`)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: serviceUrl,
    areaServed: { '@type': 'City', name: siteConfig.city },
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.legalName,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
  }

  return (
    <div className="bg-white pb-20 pt-36 md:pt-44">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <article>
        <header className="mx-auto max-w-5xl px-5 md:px-8">
          <Link href="/services" className="inline-flex min-h-11 items-center text-sm text-gray-500 transition hover:text-dark">
            חזרה לכל השירותים ←
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.28em] text-[#8a7254]">אילה כהן · ירושלים</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-light leading-tight md:text-6xl">{service.title}</h1>
          <p className="mt-7 max-w-3xl text-xl font-light leading-relaxed text-gray-600 md:text-2xl">{service.intro}</p>
        </header>

        <section className="mx-auto mt-16 max-w-5xl border-y border-dark/15 px-5 py-12 md:px-8 md:py-16" aria-labelledby="suitable-title">
          <h2 id="suitable-title" className="text-3xl font-light">למי השירות מתאים?</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex gap-4 bg-[#f7f7f5] p-5 leading-relaxed">
                <span className="text-[#8a7254]" aria-hidden="true">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-16 max-w-5xl px-5 md:px-8" aria-labelledby="process-title">
          <h2 id="process-title" className="text-3xl font-light md:text-4xl">איך נראה התהליך?</h2>
          <ol className="mt-9 grid gap-px overflow-hidden border border-dark/15 bg-dark/15 md:grid-cols-2">
            {service.process.map((step, index) => (
              <li key={step.title} className="bg-white p-6 md:p-8">
                <span className="text-xs tracking-[0.2em] text-[#8a7254]">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-normal">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto mt-16 max-w-3xl px-5 md:px-8" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-light">שאלות נפוצות</h2>
          <div className="mt-7 divide-y divide-dark/15 border-y border-dark/15">
            {service.faq.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {posts.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl px-5 md:px-8" aria-labelledby="related-title">
            <h2 id="related-title" className="text-3xl font-light">מדריכים קשורים</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group border border-dark/15 p-5 transition hover:bg-secondary">
                  <span className="text-xs text-gray-500">{post.category} · {post.readTime}</span>
                  <h3 className="mt-3 text-lg font-light leading-snug group-hover:opacity-65">{post.title}</h3>
                  <span className="mt-5 inline-flex min-h-11 items-center text-sm font-medium">לקריאה ←</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <aside className="mx-auto mt-20 max-w-5xl bg-[#f1eee8] px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="text-3xl font-light md:text-4xl">מתכננים פרויקט?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">ספרו לאילה על הנכס, הצרכים והחלום שלכם, ונבדוק יחד מה הדרך הנכונה להתחיל.</p>
          <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center bg-dark px-8 text-sm font-medium text-white transition hover:bg-black">לתיאום שיחת היכרות</Link>
        </aside>
      </article>
    </div>
  )
}
