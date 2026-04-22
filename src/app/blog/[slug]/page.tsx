import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog-posts'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'הפוסט לא נמצא',
    }
  }

  return {
    title: `${post.title} | הבלוג של אילה כהן`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
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
