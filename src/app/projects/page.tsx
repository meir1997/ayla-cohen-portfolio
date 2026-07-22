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
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4">פרויקטים</h1>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 hover:opacity-80 transition">
                {/* Project Image */}
                <div className="h-96 rounded-lg overflow-hidden order-2 md:order-1">
                  <img
                    src={projectThumbnails[project.id]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-4 order-1 md:order-2">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light mb-2">
                      {project.name}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <span className="text-sm text-gray-500">
                      {project.category === 'residential' && 'דיור'}
                      {project.category === 'kitchen' && 'מטבח'}
                      {project.category === 'living' && 'סלון'}
                    </span>
                  </div>

                  <div className="pt-4">
                    <span className="text-sm font-medium text-dark group-hover:translate-x-2 transition inline-block">
                      צפה בפרויקט →
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-b border-gray-200 pb-8" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
