import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'פרויקטים באדריכלות ועיצוב פנים',
  description: 'צפו בפרויקטים של אילה כהן: בתים, פנטהאוזים, מטבחים וחללי מגורים שתוכננו בשילוב של אסתטיקה, נוחות ופונקציונליות.',
  alternates: { canonical: absoluteUrl('/projects') },
}

const projectThumbnails: Record<string, string> = {
  'mevo-choron': '/api/images/mevo-choron/5.webp',
  'penthouse-jerusalem': '/api/images/penthouse-jerusalem/87.jpeg',
  'luxury-salon': '/api/images/luxury-salon/1.jpg',
  'luxury-kitchen': '/api/images/luxury-kitchen/92.jpeg',
}

const categoryLabels: Record<string, string> = {
  residential: 'מגורים',
  living: 'סלונים',
  kitchen: 'מטבחים',
}

export default function ProjectsPage({ searchParams }: { searchParams?: { category?: string | string[] } }) {
  const rawCategory = Array.isArray(searchParams?.category) ? searchParams?.category[0] : searchParams?.category
  const category = rawCategory && categoryLabels[rawCategory] ? rawCategory : ''
  const visibleProjects = projects

  return (
    <main className="min-h-screen bg-white px-4 pb-20 pt-28 md:pt-36" dir="rtl">
      <div className="mx-auto max-w-[1600px]">
        <header className="mb-8 bg-secondary px-6 py-10 sm:px-10 md:mb-12 md:py-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#8a7254]" dir="ltr" style={{ textAlign: 'right' }}>
            Architecture &amp; Interior Design
          </p>
          <h1 className="text-2xl font-light leading-tight sm:text-3xl md:text-4xl">כל הפרויקטים</h1>
        </header>

        <section aria-label="פרויקטים" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              aria-label={`לצפייה בפרויקט ${project.name}`}
              className="group relative block overflow-hidden bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={projectThumbnails[project.id]}
                  alt={project.name}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-5 text-center text-white transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                <h2 className="text-xl font-light md:text-2xl">{project.name}</h2>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
