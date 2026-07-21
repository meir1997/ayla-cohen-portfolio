import Link from 'next/link'
import { getAllPosts, type BlogPost } from '@/lib/blog-posts'

export const metadata = {
  title: 'הבלוג | אילה כהן',
  description: 'טיפים, מדריכים ותובנות מעולם העיצוב והאדריכלות - מאת אילה כהן',
}

const POSTS_PER_PAGE = 5

function ArrowIcon({ direction }: { direction: 'next' | 'previous' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d={direction === 'next' ? 'M8 5l7 7-7 7' : 'M16 5l-7 7 7 7'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CompactPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid min-h-0 grid-cols-[4.75rem_1fr] items-center gap-3 border-t border-dark/15 py-2 transition-colors duration-200 hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 md:block md:border md:border-dark/15 md:p-2.5"
    >
      <div className="h-12 overflow-hidden md:h-[clamp(4.5rem,9vh,6rem)]">
        <img
          src={post.coverImage}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="min-w-0 md:pt-2">
        <div className="mb-0.5 flex items-center gap-2 text-[0.65rem] text-dark/60 md:text-xs">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="line-clamp-2 text-sm font-normal leading-snug text-dark transition-opacity group-hover:opacity-65 md:text-base">
          {post.title}
        </h3>
      </div>
    </Link>
  )
}

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string | string[] }
}) {
  const posts = getAllPosts()
  const pageValue = Array.isArray(searchParams?.page)
    ? searchParams?.page[0]
    : searchParams?.page
  const requestedPage = Number.parseInt(pageValue || '1', 10)
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1
  const pagePosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )
  const featuredPost = pagePosts[0]
  const additionalPosts = pagePosts.slice(1)

  return (
    <div className="mobile-one-screen h-dvh overflow-hidden bg-primary pt-24 text-dark md:pt-28" dir="rtl">
      <section className="h-full border-t border-dark/20 px-4 py-2 sm:px-6 md:py-4 lg:px-10">
        <div className="mx-auto grid h-full min-h-0 max-w-7xl grid-rows-[auto_minmax(0,1fr)_auto_auto] gap-2 md:gap-3">
          <header className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-dark/55 md:text-xs">
                תכנון · עיצוב · השראה
              </p>
              <h1 className="text-2xl font-light leading-none md:text-4xl">הבלוג</h1>
            </div>
            <p className="pb-0.5 text-xs text-dark/55 md:text-sm" aria-live="polite">
              עמוד {currentPage} מתוך {totalPages}
            </p>
          </header>

          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid min-h-0 grid-cols-[42%_1fr] overflow-hidden bg-secondary transition-colors duration-200 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 md:grid-cols-2"
            >
              <div className="min-h-0 overflow-hidden">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
                />
              </div>
              <div className="flex min-h-0 flex-col justify-center p-3 sm:p-4 md:p-8 lg:p-10">
                <div className="mb-1.5 flex flex-wrap items-center gap-2 text-[0.65rem] text-dark/60 md:mb-3 md:text-sm">
                  <span>{featuredPost.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="line-clamp-3 text-lg font-light leading-tight sm:text-xl md:max-w-xl md:text-3xl lg:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 hidden max-w-xl line-clamp-2 text-sm leading-relaxed text-dark/65 md:block lg:text-base">
                  {featuredPost.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium md:mt-5 md:text-sm">
                  לקריאת המאמר
                  <ArrowIcon direction="previous" />
                </span>
              </div>
            </Link>
          )}

          <section aria-labelledby="additional-posts-title" className="min-h-0">
            <div className="mb-1 flex items-center justify-between md:mb-2">
              <h2 id="additional-posts-title" className="text-sm font-medium md:text-lg">
                מאמרים נוספים
              </h2>
              <span className="text-[0.65rem] text-dark/50 md:text-xs">
                {additionalPosts.length} מאמרים בעמוד
              </span>
            </div>
            <div className="grid min-h-0 grid-cols-1 md:grid-cols-4 md:gap-3">
              {additionalPosts.map((post) => (
                <CompactPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          <nav aria-label="ניווט בין עמודי הבלוג" className="flex min-h-11 items-center justify-center gap-3 border-t border-dark/15 pt-1">
            {currentPage > 1 ? (
              <Link
                href={currentPage === 2 ? '/blog' : `/blog?page=${currentPage - 1}`}
                aria-label="לעמוד הקודם"
                className="flex h-11 min-w-11 items-center justify-center border border-dark/25 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
              >
                <ArrowIcon direction="next" />
              </Link>
            ) : (
              <span className="h-11 min-w-11" aria-hidden="true" />
            )}

            <div className="flex items-center gap-2" aria-label={`עמוד ${currentPage} מתוך ${totalPages}`}>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <Link
                  key={page}
                  href={page === 1 ? '/blog' : `/blog?page=${page}`}
                  aria-label={`לעמוד ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                  className={`flex h-11 min-w-11 items-center justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 ${
                    page === currentPage
                      ? 'bg-dark text-white'
                      : 'border border-dark/25 hover:bg-secondary'
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>

            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                aria-label="לעמוד הבא"
                className="flex h-11 min-w-11 items-center justify-center border border-dark/25 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
              >
                <ArrowIcon direction="previous" />
              </Link>
            ) : (
              <span className="h-11 min-w-11" aria-hidden="true" />
            )}
          </nav>
        </div>
      </section>
    </div>
  )
}
