import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/lib/blog-posts'
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
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)
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

  function formatDate(dateStr: string) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
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
      <header className="max-w-3xl mx-auto px-4 mb-12">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
          <span className="bg-secondary px-3 py-1 rounded">
            {post.category}
          </span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {post.description}
        </p>
      </header>

      {/* Cover Image */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="h-80 md:h-[500px] rounded-lg overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="blog-content max-w-3xl mx-auto px-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Internal links to core services */}
      <aside className="mx-auto mt-16 max-w-3xl px-4" aria-labelledby="services-heading">
        <div className="border-y border-gray-200 py-8">
          <h2 id="services-heading" className="text-2xl font-light">מתכננים את הצעד הבא?</h2>
          <p className="mt-2 text-gray-600">הכירו את שירותי הסטודיו שיכולים להפוך את הידע מהמאמר לתוכנית מעשית.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/services/interior-design-jerusalem" className="inline-flex min-h-11 items-center border border-dark/25 px-4 text-sm transition hover:bg-secondary">עיצוב פנים בירושלים</Link>
            <Link href="/services/architectural-planning" className="inline-flex min-h-11 items-center border border-dark/25 px-4 text-sm transition hover:bg-secondary">תכנון אדריכלי</Link>
            <Link href="/services/renovation-guidance" className="inline-flex min-h-11 items-center border border-dark/25 px-4 text-sm transition hover:bg-secondary">ליווי שיפוץ</Link>
            <Link href="/services/kitchen-design" className="inline-flex min-h-11 items-center border border-dark/25 px-4 text-sm transition hover:bg-secondary">תכנון מטבחים</Link>
          </div>
        </div>
      </aside>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 mt-20">
        <div className="bg-secondary p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            מתכננים שיפוץ או עיצוב?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            אני כאן לעזור לכם להגשים את הבית שתמיד חלמתם עליו.
            בואו נדבר על הרעיון שלכם.
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
              <div className="text-xs text-gray-500 mb-2">הפוסט הקודם →</div>
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
              <div className="text-xs text-gray-500 mb-2">← הפוסט הבא</div>
              <div className="text-lg font-light group-hover:opacity-70 transition">
                {nextPost.title}
              </div>
            </Link>
          )}
        </div>
      </nav>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 mt-20 pt-20 border-t border-gray-200">
          <h2 className="text-2xl md:text-3xl font-light mb-10 text-center">
            עוד בקטגוריה: {post.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <div className="h-56 rounded-lg overflow-hidden mb-4">
                  <img
                    src={relatedPost.coverImage}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <h3 className="text-xl font-light leading-snug group-hover:opacity-70 transition mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {relatedPost.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
