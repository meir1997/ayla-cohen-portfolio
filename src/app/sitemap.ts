import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-posts'
import { projects } from '@/lib/projects'
import { services } from '@/lib/services'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-22')
  const staticPages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/projects', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/guide', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/accessibility', changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  return [
    ...staticPages.map((page) => ({
      url: `${siteConfig.url}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...getAllPosts().map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
