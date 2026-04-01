import Link from 'next/link'
import Testimonials from '@/components/Testimonials'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />

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
                thumbnail: '/api/images/mevo-choron/14.webp'
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
