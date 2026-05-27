export interface Project {
  id: string
  name: string
  description: string
  aboutText?: string
  images: number
  category: 'residential' | 'kitchen' | 'living'
  featured: boolean
  year: number
}

export const projects: Project[] = [
  {
    id: 'mevo-choron',
    name: 'בית משפחתי מרווח במושב',
    description: 'בית פרטי דו קומתי, 300 מ"ר, סגנון עיצוב מודרני-קלאסי',
    aboutText: 'הבית הזה מספר סיפור של משפחה שהבית שלה גדל איתה — הילדים גדלו והשתנו, אורח החיים התעצב מחדש, והחללים שהתאימו לפעם התחילו להרגיש קצת מנותקים מההווה.\n\nהגענו לפרויקט עם משימה ברורה: לחדש את הבית בשפה עיצובית עכשווית, אך כזו שמכבדת את האופי המקורי שלו ומתאימה את עצמה לצרכים של המשפחה היום.\n\nכל חלל תוכנן מחדש מתוך מחשבה על האנשים שגרים בו — מרחבים פתוחים לזמן משפחתי משותף, פינות אישיות שכל אחד יכול לקרוא לעצמו, וחומרים שמחברים בין תחושת יוקרה לבין נוחות יומיומית.\n\nהתוצאה: בית שמרגיש חדש, מודרני ונקי — אבל בו זמנית, ביתי.',
    images: 37,
    category: 'residential',
    featured: true,
    year: 2022,
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
