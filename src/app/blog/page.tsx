import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, type BlogPost } from '@/lib/blog-posts'
import { absoluteUrl } from '@/lib/site'

interface BlogPageProps {
  searchParams?: { page?: string | string[]; category?: string | string[] }
}

export function generateMetadata({ searchParams }: BlogPageProps): Metadata {
  const rawPage = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page
  const page = Math.max(1, Number.parseInt(rawPage || '1', 10) || 1)
  return {
    title: page > 1 ? `בלוג אדריכלות ועיצוב פנים — עמוד ${page}` : 'בלוג אדריכלות ועיצוב פנים',
    description: 'מדריכים והשראה לתכנון אדריכלי, עיצוב פנים, שיפוץ ומטבחים מאת אילה כהן.',
    alternates: { canonical: absoluteUrl(page > 1 ? `/blog?page=${page}` : '/blog') },
  }
}

const POSTS_PER_PAGE = 9

function blogUrl(category: string, page = 1) {
  const params = new URLSearchParams()
  if (category) params.set('category', category)
  if (page > 1) params.set('page', String(page))
  const query = params.toString()
  return query ? `/blog?${query}` : '/blog'
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark">
      <div className="aspect-[4/3] overflow-hidden bg-[#f2f0ec]">
        <img src={post.coverImage} alt="" loading="lazy" className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-90" />
      </div>
      <div className="pt-5 text-right">
        <p className="text-[11px] tracking-wide text-[#8a7254]">{post.category} <span aria-hidden="true">·</span> {post.readTime}</p>
        <h3 className="mt-3 text-xl font-light leading-snug text-[#24221f] md:text-2xl">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#66615a]">{post.description}</p>
        <span className="mt-5 inline-block border-b border-[#8a7254] pb-1 text-sm">לקריאת המאמר ←</span>
      </div>
    </Link>
  )
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  const rawCategory = Array.isArray(searchParams?.category) ? searchParams.category[0] : searchParams?.category
  const category = rawCategory && categories.includes(rawCategory) ? rawCategory : ''
  const filtered = category ? posts.filter((post) => post.category === category) : posts
  const rawPage = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page
  const requestedPage = Number.parseInt(rawPage || '1', 10)
  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1
  const pagePosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
  const featuredPost = posts[0]

  return (
    <main className="min-h-screen bg-white pt-24 text-dark md:pt-28" dir="rtl">
      {featuredPost && (
        <section aria-label="מאמר נבחר" className="bg-[#f1eee9]">
          <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
            <div className="flex items-center justify-center px-6 pt-8 sm:px-10 md:order-1 md:px-10 md:py-10">
              <img src={featuredPost.coverImage} alt={featuredPost.title} className="block h-auto max-h-[38rem] w-auto max-w-full object-contain" />
            </div>
            <div className="flex flex-col items-start justify-center px-7 py-10 text-right text-[#24221f] sm:px-10 md:order-2 md:px-12 md:py-16">
              <p className="text-xs font-medium tracking-[0.2em] text-[#8a7254]">המאמר הנבחר · {featuredPost.category}</p>
              <h1 className="mt-5 text-3xl font-light leading-snug sm:text-4xl md:text-5xl">{featuredPost.title}</h1>
              <p className="mt-5 text-base leading-relaxed text-[#625b53]">{featuredPost.description.replace('המדריך המלא', 'המאמר המלא')}</p>
              <Link href={`/blog/${featuredPost.slug}`} className="mt-8 inline-flex min-h-11 items-center border border-[#24221f] px-7 text-sm transition-colors hover:bg-[#24221f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark">לקריאת המאמר ←</Link>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:px-10" aria-labelledby="journal-title">
        <header className="text-center">
          <p className="text-xs tracking-[0.2em] text-[#8a7254]">תכנון · עיצוב · השראה</p>
          <h2 id="journal-title" className="mt-4 text-2xl font-light leading-tight sm:text-3xl md:text-4xl">בלוג אדריכלות ועיצוב פנים</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">רעיונות, מדריכים והשראה לתכנון ולעיצוב הבית</p>
        </header>



        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {pagePosts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>

        {totalPages > 1 && (
          <nav aria-label="ניווט בין עמודי הבלוג" className="mt-16 flex flex-wrap items-center justify-center gap-2 border-t border-dark/15 pt-8">
            {currentPage > 1 && <Link href={blogUrl(category, currentPage - 1)} className="inline-flex min-h-11 items-center px-3 text-sm hover:opacity-60">הקודם</Link>}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Link key={page} href={blogUrl(category, page)} aria-label={`לעמוד ${page}`} aria-current={page === currentPage ? 'page' : undefined} className={`flex h-11 w-11 items-center justify-center text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-dark ${page === currentPage ? 'bg-dark text-white' : 'border border-dark/20 hover:bg-secondary'}`}>{page}</Link>
            ))}
            {currentPage < totalPages && <Link href={blogUrl(category, currentPage + 1)} className="inline-flex min-h-11 items-center px-3 text-sm hover:opacity-60">הבא</Link>}
          </nav>
        )}
      </section>
    </main>
  )
}
