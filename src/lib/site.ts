export const siteConfig = {
  name: 'אילה כהן',
  legalName: 'אילה כהן — אדריכלות ועיצוב פנים',
  url: 'https://www.ayalacohen.co.il',
  locale: 'he_IL',
  description:
    'אילה כהן, הנדסאית אדריכלות ומעצבת פנים בירושלים. תכנון אדריכלי, עיצוב פנים וליווי אישי לבתים, דירות וחללים מסחריים.',
  phone: '+972-50-737-4292',
  email: 'Ayalacohen.design@gmail.com',
  city: 'ירושלים',
  instagram: 'https://www.instagram.com/ayalacohen.design/',
  facebook: 'https://www.facebook.com/profile.php?id=100089356337105',
} as const

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}
