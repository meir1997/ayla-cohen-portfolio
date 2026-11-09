import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/lib/blog-posts'
import { services } from '@/lib/services'
import { absoluteUrl, siteConfig } from '@/lib/site'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'הפוסט לא נמצא',
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const nextPost = allPosts[currentIndex + 1]
  const prevPost = allPosts[currentIndex - 1]
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.coverImage),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'he-IL',
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.jpg') },
    },
  }


  return (
    <article className="pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-dark transition"
        >
          <span>←</span>
          חזרה לבלוג
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 mb-12">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
          <span className="bg-secondary px-3 py-1 rounded">
            {post.category}
          </span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-2xl font-light leading-tight mb-6 md:text-3xl lg:text-4xl">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {post.slug === 'accessories-and-finishing' ? (
            <>סיימתם שיפוץ והבית מרגיש ריק וחסר חיות?<br />אקססוריז הם הסוד להפוך חלל לבית אמיתי. קראו את המדריך המלא.</>
          ) : post.slug === 'color-palette-guide' ? (
            <>{post.description.split('קראו את המדריך המלא לבחירה נכונה.')[0]}<br />קראו את המדריך המלא לבחירה נכונה.</>
          ) : post.description}
        </p>
      </header>

      {/* Cover Image */}
      <figure className="mb-12 w-full md:mb-16" dir="rtl">
        <div className="flex items-center justify-center bg-secondary">
          {post.slug === 'building-permit-guide' ? (
            <div className="relative aspect-[1064/1600] w-[min(46.55vh,100vw)] overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="absolute left-1/2 top-1/2 h-auto w-[150.376%] max-w-none"
                style={{ transform: 'translate(-50%, -50%) rotate(90deg)' }}
              />
            </div>
          ) : (
            <img
              src={post.coverImage}
              alt={post.title}
              className={post.slug === 'five-critical-steps-before-renovation' ? 'block h-auto w-auto max-h-[70vh] max-w-[min(46.55vh,100%)] object-contain' : 'block h-auto max-h-[70vh] w-auto max-w-full object-contain'}
            />
          )}
        </div>
        <figcaption className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-4 border-b border-[#ded8cf] px-4 pb-4 text-xs tracking-[0.12em] text-[#84796d]">
          <span>{post.category}</span>
          <span dir="ltr">STUDIO AC</span>
        </figcaption>
      </figure>

      {/* Content */}
      <div
        className="blog-content max-w-5xl mx-auto px-4 text-right [&>*]:max-w-3xl [&>*]:ml-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Internal links to core services */}
      <aside className="mx-auto mt-16 max-w-3xl px-4" aria-labelledby="services-heading">
        <div className="border-y border-gray-200 py-8">
          <h2 id="services-heading" className="text-2xl font-light">מתכננים את הצעד הבא?</h2>
          <p className="mt-2 text-gray-600">הכירו את שירותי הסטודיו שיכולים להפוך את הידע מהמאמר לתוכנית מעשית.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="inline-flex min-h-11 items-center border border-dark/25 px-4 text-sm transition hover:bg-secondary">{service.title}</Link>
            ))}
          </div>
        </div>
      </aside>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 mt-20">
        <div className="bg-secondary p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            מתכננים שיפוץ או עיצוב?
          </h3>
          <p className="text-gray-600 mb-6 mx-auto max-w-none md:text-sm lg:text-base">
            מוזמנים לפנות אלינו לשיחת ייעוץ, ונבדוק יחד מהי הדרך הנכונה להגשים עבורכם את החלום.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-dark text-white hover:bg-gray-800 transition text-sm font-medium"
          >
            צרו קשר
          </Link>
        </div>
      </div>

      {/* Navigation between posts */}
      <nav className="max-w-3xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevPost && (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group block p-6 border border-gray-200 rounded-lg hover:border-dark transition"
            >
              <div className="text-xs text-gray-500 mb-2">למאמר הקודם →</div>
              <div className="text-lg font-light group-hover:opacity-70 transition">
                {prevPost.title}
              </div>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className={`group block p-6 border border-gray-200 rounded-lg hover:border-dark transition text-left ${!prevPost ? 'md:col-start-2' : ''}`}
            >
              <div className="text-xs text-gray-500 mb-2">← למאמר הבא</div>
              <div className="text-lg font-light group-hover:opacity-70 transition">
                {nextPost.title}
              </div>
            </Link>
          )}
        </div>
      </nav>


    </article>
  )
}
