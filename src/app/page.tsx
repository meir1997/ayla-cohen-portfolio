import Link from 'next/link'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      {/* מי אני - Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <div className="order-2 md:order-1">
              <img
                src="/ayala-portrait.jpg"
                alt="אילה כהן - אדריכלות ועיצוב פנים"
                className="w-full rounded-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-light leading-tight text-dark">
                מי אני
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                בית הוא המקום בו מגשימים חלומות, הוא מלווה אותנו מידי יום בכל החוויות השגרתיות והאירועים המרגשים. כשהבית מתוכנן כראוי הוא יכול להכיל את כל הדברים החשובים לנו מבלי להתפשר על פרקטיקה, פונקציונליות ונוחות.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                כשנכנס העיצוב לתמונה - התוצאה מדברת בעד עצמה.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                מגיל צעיר מאד הבנתי שהאדריכלות והעיצוב הם חלק מחיי. אני זוכרת את עצמי כבר מגיל צעיר מאד משרטטת בעיפרון בתים וצובעת לפי סוגי החומרים. בגיל 15 החלטתי להיחשף לעולם הזה בצורה מקצועית במסגרת מגמת אדריכלות בתיכון ומאז הכול היסטוריה...
              </p>

              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                הסטודיו שלי מתמחה בתכנון אדריכלי ועיצוב פנים הן במגזר הפרטי והן במסחרי. אני מלווה את לקוחותי כבר מרכישת הנכס והבנת הצרכים הספציפיים, תוך תכנון אדריכלי מוקפד וניסיון עיצובי עשיר.
              </p>

              <div className="flex gap-4 pt-2">
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-dark text-white hover:bg-gray-800 transition text-sm font-medium"
                >
                  צפה בפרויקטים
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border border-dark text-dark hover:bg-gray-50 transition text-sm font-medium"
                >
                  יצירת קשר
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            פרויקטים נבחרים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'בית ביישוב',
                projects: 37,
                href: '/projects/mevo-choron',
                thumbnail: '/api/images/mevo-choron/14.jpg'
              },
              {
                name: 'פנטהאוז בירושלים',
                projects: 28,
                href: '/projects/penthouse-jerusalem',
                thumbnail: '/api/images/penthouse-jerusalem/18.jpg'
              },
              {
                name: 'סלון יוקרתי',
                projects: 5,
                href: '/projects/luxury-salon',
                thumbnail: '/api/images/luxury-salon/17.jpg'
              }
            ].map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="group bg-white p-6 hover:shadow-lg transition rounded-lg"
              >
                <div className="h-64 mb-4 rounded overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-lg font-light">{project.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="text-sm font-medium text-dark hover:opacity-60 transition"
            >
              צפה בכל הפרויקטים →
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}
