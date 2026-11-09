export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 flex flex-col items-center text-center" dir="rtl">
          <div>
            <h3 className="mb-4 text-2xl font-light tracking-wider" dir="ltr">AC</h3>
            <p className="text-sm text-gray-400">
              <span className="block" dir="ltr">ARCHITECTURE &amp; INTERIOR DESIGN</span>
              <span className="mt-1 block">סטודיו לתכנון אדריכלי ועיצוב פנים</span>
            </p>
          </div>

          <nav aria-label="קישורים" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-gray-400 sm:gap-x-8">
              <li><a href="/" className="hover:text-white transition">בית</a></li>
              <li><a href="/projects" className="hover:text-white transition">פרויקטים</a></li>
              <li><a href="/services" className="hover:text-white transition">שירותים</a></li>
              <li><a href="/blog" className="hover:text-white transition">בלוג</a></li>
              <li><a href="/about" className="hover:text-white transition">מי אני</a></li>
              <li><a href="/contact" className="hover:text-white transition">יצירת קשר</a></li>
            </ul>
          </nav>

          <div className="mt-8">
            <h4 className="mb-3 font-light">עקבו אחריי</h4>
            <div className="flex justify-center gap-6 text-gray-400" dir="ltr">
              <a href="https://www.instagram.com/ayalacohen.design/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=100089356337105" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center text-sm text-gray-400">
            <p>© {currentYear} אילה כהן. כל הזכויות שמורות.</p>
            <a href="/accessibility" className="inline-flex min-h-11 items-center hover:text-white transition">הצהרת נגישות</a>
            <a
              href="https://meirweb.co.il/?utm_source=ayla&utm_medium=footer&utm_campaign=site_credit"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 inline-flex items-center font-medium text-gray-300 underline underline-offset-4 hover:text-white transition"
            >
              רוצים אתר שעובד בשבילכם? הכירו את מאירווב ←
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
