import Link from 'next/link'
import { getAllPosts } from '@/lib/blog-posts'

export const metadata = {
  title: 'הבלוג | אילה כהן',
  description: 'טיפים, מדריכים ותובנות מעולם העיצוב והאדריכלות - מאת אילה כהן',
}

export default function BlogPage() {
  const posts = getAllPosts()

  function formatDate(dateStr: string) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">הבלוג</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            טיפים, מדריכים ותובנות מעולם העיצוב והאדריכלות
          </p>
        </div>

        {/* Featured Post */}
        {posts[0] && (
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group block mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-80 md:h-96 rounded-lg overflow-hidden order-2 md:order-1">
                <img
                  src={posts[0].coverImage}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="bg-secondary px-3 py-1 rounded">
                    {posts[0].category}
                  </span>
                  <span>{formatDate(posts[0].date)}</span>
                  <span>·</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light leading-tight group-hover:opacity-70 transition">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {posts[0].description}
                </p>
                <span className="inline-block text-sm font-medium text-dark group-hover:translate-x-2 transition">
                  קרא את הפוסט ←
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Divider */}
        <div className="border-b border-gray-200 mb-16" />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-secondary px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-light leading-snug group-hover:opacity-70 transition">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {post.description}
                </p>
                <div className="text-xs text-gray-400">
                  {formatDate(post.date)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
