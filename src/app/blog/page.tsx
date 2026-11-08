import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, type BlogPost } from '@/lib/blog-posts'
import { absoluteUrl } from '@/lib/site'

interface BlogPageProps {
  searchParams?: { page?: string | string[] }
}

export function generateMetadata({ searchParams }: BlogPageProps): Metadata {
  const pageValue = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page
  const page = Math.max(1, Number.parseInt(pageValue || '1', 10) || 1)
  return {
    title: page > 1 ? `הבלוג — עמוד ${page}` : 'הבלוג לעיצוב ואדריכלות',
    description: 'טיפים, מדריכים ותשובות מעשיות על תכנון, שיפוץ, עיצוב פנים ומטבחים — מאת אילה כהן.',
    alternates: { canonical: absoluteUrl(page > 1 ? `/blog?page=${page}` : '/blog') },
  }
}

const POSTS_PER_PAGE = 5

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark">
      <div className="aspect-[16/9] overflow-hidden bg-secondary">
        <img src={post.coverImage} alt="" loading="lazy" className="h-full w-full object-contain" />
      </div>
      <div className="pt-5">
        <p className="text-xs tracking-wide text-[#8a7254]">{post.category} <span aria-hidden="true">·</span> {post.readTime}</p>
        <h3 className="mt-3 text-xl font-light leading-snug text-dark transition-opacity group-hover:opacity-65 md:text-2xl">{post.title}</h3>
        <span className="mt-4 inline-block border-b border-dark/40 pb-1 text-sm">לקריאת המאמר ←</span>
      </div>
    </Link>
  )
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const posts = getAllPosts()
  const pageValue = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page
  const requestedPage = Number.parseInt(pageValue || '1', 10)
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1
  const pagePosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
  const featuredPost = pagePosts[0]
  const additionalPosts = pagePosts.slice(1)

  return (
    <main className="min-h-screen bg-white pt-24 text-dark md:pt-28" dir="rtl">
      <div className="border-t border-dark/10">
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
          <header className="my-8 border-r-2 border-[#a18d72] bg-[#f7f6f3] px-6 py-9 sm:px-10 md:my-12 md:px-14 md:py-12">
            <p className="text-xs tracking-[0.2em] text-[#8a7254]">תכנון · עיצוב · השראה</p>
            <h1 className="mt-4 text-3xl font-light leading-tight md:text-4xl">בלוג אדריכלות ועיצוב פנים</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#595550] md:text-lg">רעיונות, מדריכים והשראה לתכנון ולעיצוב הבית.</p>
          </header>

          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="group grid overflow-hidden bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark md:grid-cols-2">
              <div className="flex h-80 items-center justify-center overflow-hidden bg-secondary md:h-96 lg:h-[26rem]">
                <img src={featuredPost.coverImage} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-6 py-7 sm:px-8 md:px-10 lg:px-12">
                <p className="text-xs tracking-wide text-[#8a7254]">מאמר נבחר <span aria-hidden="true">·</span> {featuredPost.category} <span aria-hidden="true">·</span> {featuredPost.readTime}</p>
                <h2 className="mt-4 text-2xl font-light leading-snug md:whitespace-nowrap md:text-[clamp(1rem,1.35vw,1.35rem)]">{featuredPost.title}</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#595550]">{featuredPost.description}</p>
                <span className="mt-6 w-fit border-b border-dark/50 pb-1 text-sm">לקריאת המאמר ←</span>
              </div>
            </Link>
          )}

          <section className="mt-16 md:mt-24" aria-labelledby="additional-posts-title">
            <div className="flex items-end justify-between gap-4 border-b border-dark/15 pb-5">
              <h2 id="additional-posts-title" className="text-2xl font-light md:text-3xl">מאמרים נוספים</h2>
              <p className="text-sm text-dark/55">עמוד {currentPage} מתוך {totalPages}</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {additionalPosts.map((post) => <PostCard key={post.slug} post={post} />)}
            </div>
          </section>

          {totalPages > 1 && (
            <nav aria-label="ניווט בין עמודי הבלוג" className="mt-16 flex items-center justify-center gap-2 border-t border-dark/15 pt-8">
              {currentPage > 1 && <Link href={currentPage === 2 ? '/blog' : `/blog?page=${currentPage - 1}`} className="inline-flex min-h-11 items-center px-3 text-sm hover:opacity-60">הקודם</Link>}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <Link key={page} href={page === 1 ? '/blog' : `/blog?page=${page}`} aria-label={`לעמוד ${page}`} aria-current={page === currentPage ? 'page' : undefined} className={`flex h-11 w-11 items-center justify-center text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-dark ${page === currentPage ? 'bg-dark text-white' : 'border border-dark/20 hover:bg-secondary'}`}>{page}</Link>
              ))}
              {currentPage < totalPages && <Link href={`/blog?page=${currentPage + 1}`} className="inline-flex min-h-11 items-center px-3 text-sm hover:opacity-60">הבא</Link>}
            </nav>
          )}
        </div>
      </div>
    </main>
  )
}
