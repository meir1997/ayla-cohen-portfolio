import fs from 'fs'
import path from 'path'

export interface ProjectImages {
  projectId: string
  projectName: string
  images: string[]
  count: number
}

export function getProjectImages(): ProjectImages[] {
  const projects: ProjectImages[] = [
    {
      projectId: 'mevo-choron',
      projectName: 'מבוא חורון',
      images: [],
      count: 37,
    },
    {
      projectId: 'penthouse-jerusalem',
      projectName: 'פנטאוז בירושלים',
      images: [],
      count: 28,
    },
    {
      projectId: 'luxury-salon',
      projectName: 'סלון יוקרתי',
      images: [],
      count: 5,
    },
    {
      projectId: 'luxury-kitchen',
      projectName: 'מטבח יוקרתי',
      images: [],
      count: 14,
    },
  ]

  // Only try to read files at runtime, not during build
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production' || process.cwd().includes('node_modules')) {
    try {
      const portfolioPath = path.join(process.cwd(), 'portfolio_images', 'numbered')

      // Read all directories in portfolio_images/numbered
      const dirs = fs.readdirSync(portfolioPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

      // Map directories to projects
      const dirToProject: Record<string, string> = {
        'מבוא חורון': 'mevo-choron',
        'פנטאוז בירושלים': 'penthouse-jerusalem',
        'סלון יוקרתי': 'luxury-salon',
        'מטבח יוקרתי': 'luxury-kitchen',
      }

      // Load images for each project
      for (const dir of dirs) {
        const projectId = dirToProject[dir]
        if (!projectId) continue

        const projectPath = path.join(portfolioPath, dir)
        const files = fs.readdirSync(projectPath)
          .filter(f => /\.(jpg|jpeg|webp|png|gif)$/i.test(f))
          .sort((a, b) => {
            const aNum = parseInt(a.split('.')[0])
            const bNum = parseInt(b.split('.')[0])
            return aNum - bNum
          })

        const projectIndex = projects.findIndex(p => p.projectId === projectId)
        if (projectIndex !== -1) {
          projects[projectIndex].images = files
          projects[projectIndex].count = files.length
        }
      }
    } catch (error) {
      // Silently fail during build - use hardcoded counts
    }
  }

  return projects
}

export function getProjectById(projectId: string): ProjectImages | undefined {
  const projects = getProjectImages()
  return projects.find(p => p.projectId === projectId)
}

export function getImageUrl(projectId: string, imageName: string): string {
  return `/api/images/${projectId}/${imageName}`
}
