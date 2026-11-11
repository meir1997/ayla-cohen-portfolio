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
      projectId: 'country-house',
      projectName: 'בית פרטי כפרי מיוחד',
      images: Array.from({ length: 11 }, (_, index) => `/country-house/${index + 1}.jpg`),
      count: 11,
    },
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

  // Try to read files at runtime
  if (typeof process !== 'undefined' && !process.cwd().includes('node_modules')) {
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
          .filter(f => !(projectId === 'mevo-choron' && ['8.webp', '45.jpg', '46.jpg', '61.webp'].includes(f)))
          .filter(f => !(projectId === 'penthouse-jerusalem' && ['27.jpg', '40.jpg', '49.jpg', '64.jpg'].includes(f)))
          .filter(f => !(projectId === 'luxury-salon' && f === '17.jpg'))
          .filter(f => !(projectId === 'luxury-kitchen' && f === '99.jpeg'))
          .sort((a, b) => {
            const aNum = parseInt(a.split('.')[0])
            const bNum = parseInt(b.split('.')[0])
            return aNum - bNum
          })

        if (projectId === 'luxury-kitchen') {
          const heroIndex = files.indexOf('92.jpeg')
          if (heroIndex >= 0) files.unshift(...files.splice(heroIndex, 1))
          const firstIndex = files.indexOf('95.jpeg')
          const secondIndex = files.indexOf('97.jpeg')
          if (firstIndex >= 0 && secondIndex >= 0) {
            ;[files[firstIndex], files[secondIndex]] = [files[secondIndex], files[firstIndex]]
          }
        }

        if (projectId === 'luxury-salon') {
          const diningIndex = files.indexOf('67.jpg')
          const shelvingIndex = files.indexOf('102.jpg')
          if (diningIndex >= 0 && shelvingIndex >= 0) {
            ;[files[diningIndex], files[shelvingIndex]] = [files[shelvingIndex], files[diningIndex]]
          }
        }

        if (projectId === 'penthouse-jerusalem') {
          const featuredOrder = ['17.jpg', '82.jpg', '24.jpg', '22.jpg', '87.jpeg', '65.jpg', '72.jpg', '79.jpg', '29.jpg', '25.jpg', '31.jpg', '32.jpg', '77.jpg', '98.jpg', '18.jpg', '20.jpg']
          files.sort((a, b) => {
            const aIndex = featuredOrder.indexOf(a)
            const bIndex = featuredOrder.indexOf(b)
            return (aIndex < 0 ? featuredOrder.length : aIndex) - (bIndex < 0 ? featuredOrder.length : bIndex)
          })
          const toiletIndex = files.indexOf('60.jpg')
          const bedroomIndex = files.indexOf('51.jpg')
          if (toiletIndex >= 0 && bedroomIndex >= 0) {
            const [toiletImage] = files.splice(toiletIndex, 1)
            files.splice(files.indexOf('51.jpg'), 0, toiletImage)
          }
          const firstImageIndex = files.indexOf('60.jpg')
          const secondImageIndex = files.indexOf('55.jpg')
          if (firstImageIndex >= 0 && secondImageIndex >= 0) {
            ;[files[firstImageIndex], files[secondImageIndex]] = [files[secondImageIndex], files[firstImageIndex]]
          }
        }

        const projectIndex = projects.findIndex(p => p.projectId === projectId)
        if (projectIndex !== -1) {
          projects[projectIndex].images = files
          projects[projectIndex].count = files.length
        }
      }
    } catch (error) {
      // Silently fail - use hardcoded counts
    }
  }

  return projects
}

export function getProjectById(projectId: string): ProjectImages | undefined {
  const projects = getProjectImages()
  return projects.find(p => p.projectId === projectId)
}

export function getImageUrl(projectId: string, imageName: string): string {
  return `/project-images/${projectId}/${imageName}`
}
