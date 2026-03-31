import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'פרויקטים | אילה כהן',
  description: 'צפו בפרויקטים של אילה כהן - עיצוב וארכיטקטורה יוקרתיים',
}

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4">פרויקטים</h1>
          <p className="text-lg text-gray-600">
            כל פרויקט מייצג אהדה לפרטים ותשומת לב למידות מדויקות
          </p>
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
                {/* Image Placeholder */}
                <div className="bg-secondary h-96 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition order-2 md:order-1">
                  <span className="text-gray-400">תמונה</span>
                </div>

                {/* Text Content */}
                <div className="space-y-4 order-1 md:order-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-light mb-2">
                        {project.name}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-sm bg-dark text-white px-3 py-1 rounded whitespace-nowrap">
                      {project.images} תמונות
                    </span>
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
