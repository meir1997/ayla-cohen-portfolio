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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-secondary px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 border-b border-dark/15 pb-8 md:mb-16 md:pb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#8a7254]" dir="ltr" style={{ textAlign: 'right' }}>
            Architecture &amp; Interior Design
          </p>
          <h1 className="text-2xl font-light leading-tight sm:text-3xl md:text-4xl">פרויקטים</h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            מבחר פרויקטים בתכנון אדריכלי ועיצוב פנים
          </p>
        </header>

        <section aria-label="פרויקטים נבחרים" className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={projectThumbnails[project.id]}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="border-b border-dark/20 pb-7 pt-6">
                <p className="text-xs tracking-[0.12em] text-[#8a7254]">
                  {project.category === 'residential' && 'דיור'}
                  {project.category === 'kitchen' && 'מטבח'}
                  {project.category === 'living' && 'סלון'}
                  <span aria-hidden="true"> · </span>
                  {project.year}
                </p>
                <h2 className="mt-3 text-2xl font-light leading-snug text-[#24221f] md:text-3xl">
                  {project.name}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{project.description}</p>
                <span className="mt-6 inline-block border-b border-dark pb-1 text-sm transition-opacity group-hover:opacity-60">
                  לצפייה בפרויקט ←
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
