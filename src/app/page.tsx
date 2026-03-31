import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-light leading-tight text-dark">
                עיצוב וארכיטקטורה מודרנית
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                אנחנו יוצרים חללים יוקרתיים שמשלבים עיצוב מודרני עם פונקציונליות מעולה. כל פרויקט הוא סיפור ייחודי של טעם וחדשנות.
              </p>
              <div className="flex gap-4">
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

            {/* Placeholder for Image */}
            <div className="bg-secondary h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">תמונה</span>
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
                name: 'בית במבוא חורון',
                projects: 37,
                href: '/projects/mevo-choron'
              },
              {
                name: 'פנטהאוז בירושלים',
                projects: 28,
                href: '/projects/penthouse-jerusalem'
              },
              {
                name: 'סלון יוקרתי',
                projects: 5,
                href: '/projects/luxury-salon'
              }
            ].map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="group bg-white p-6 hover:shadow-lg transition rounded-lg"
              >
                <div className="bg-gray-100 h-64 mb-4 rounded flex items-center justify-center group-hover:bg-gray-200 transition">
                  <span className="text-gray-400">תמונה</span>
                </div>
                <h3 className="text-lg font-light mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.projects} תמונות</p>
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

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            השירותים שלנו
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'עיצוב פנים', description: 'עיצוב מלא של חללים עם דגש על טעם וכיסוי' },
              { title: 'תכנון אדריכלי', description: 'תכנון מקצועי של פרויקטים מורכבים' },
              { title: 'ניהול פרויקטים', description: 'פיקוח מלא מרעיון להשלמה' },
              { title: 'הנדסה קדימה', description: 'ייעוץ בחומרים וטכנולוגיות חדשות' }
            ].map((service) => (
              <div key={service.title} className="space-y-3">
                <h3 className="text-lg font-light">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
