export interface Project {
  id: string
  name: string
  description: string
  images: number
  category: 'residential' | 'kitchen' | 'living'
  featured: boolean
  year: number
}

export const projects: Project[] = [
  {
    id: 'mevo-choron',
    name: 'בית ביישוב',
    description: 'בית משפחתי יוקרתי עם עיצוב מודרני וכיווני אדריכלי עדכני',
    images: 37,
    category: 'residential',
    featured: true,
    year: 2024,
  },
  {
    id: 'penthouse-jerusalem',
    name: 'פנטהאוז בירושלים',
    description: 'פנטהאוז יוקרתי בעלות גבוהה עם נוף פנורמי וגימורים מעולים',
    images: 28,
    category: 'residential',
    featured: true,
    year: 2024,
  },
  {
    id: 'luxury-salon',
    name: 'סלון יוקרתי',
    description: 'עיצוב סלון עדכני עם טקסטורות מהודרות וריהוט בחירה',
    images: 5,
    category: 'living',
    featured: false,
    year: 2024,
  },
  {
    id: 'luxury-kitchen',
    name: 'מטבח חלומות',
    description: 'מטבח מעוצב בטכנולוגיה מתקדמת וחומרים פרימיום',
    images: 14,
    category: 'kitchen',
    featured: false,
    year: 2026,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category)
}
