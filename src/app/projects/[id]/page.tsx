import { getProjectById } from '@/lib/projects'
import { getProjectImages } from '@/lib/image-loader'
import Gallery from '@/components/Gallery'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const projects = getProjectById('') // This won't work, need to adjust
  return [
    { id: 'mevo-choron' },
    { id: 'penthouse-jerusalem' },
    { id: 'luxury-salon' },
    { id: 'luxury-kitchen' },
  ]
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const projectsData = require('@/lib/projects').projects
  const project = projectsData.find((p: any) => p.id === params.id)

  if (!project) {
    return {
      title: 'פרויקט לא נמצא',
    }
  }

  return {
    title: `${project.name} | אילה כהן`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectsData = require('@/lib/projects').projects
  const project = projectsData.find((p: any) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const projectImages = getProjectImages().find(p => p.projectId === params.id)

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-dark transition mb-8"
        >
          <span>←</span>
          חזור לפרויקטים
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-2">
                {project.name}
              </h1>
              <p className="text-lg text-gray-600">
                {project.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">{project.year}</div>
              <div className="text-lg font-light">
                {projectImages?.count || project.images} תמונות
              </div>
            </div>
          </div>

          {/* Project Meta */}
          <div className="flex gap-4 flex-wrap">
            <div className="bg-secondary px-3 py-1 rounded text-sm">
              {project.category === 'residential' && 'דיור יוקרתי'}
              {project.category === 'kitchen' && 'מטבח'}
              {project.category === 'living' && 'סלון'}
            </div>
          </div>
        </div>

        {/* Gallery */}
        {projectImages && projectImages.images.length > 0 ? (
          <Gallery
            images={projectImages.images}
            projectId={params.id}
            projectName={project.name}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">אין תמונות זמינות לפרויקט זה</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="bg-secondary p-8 rounded-lg text-center">
            <h3 className="text-2xl font-light mb-4">
              מעוניינים בפרויקט דומה?
            </h3>
            <p className="text-gray-600 mb-6">
              בואו נדבר על הרעיון שלכם
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-dark text-white hover:bg-gray-800 transition text-sm font-medium"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
