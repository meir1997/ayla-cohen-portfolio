export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-wider mb-4">AC</h3>
            <p className="text-sm text-gray-400">
              עיצוב וארכיטקטורה מודרנית לחללים יוקרתיים
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-light mb-4">קישורים</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition">בית</a></li>
              <li><a href="/projects" className="hover:text-white transition">פרויקטים</a></li>
              <li><a href="/about" className="hover:text-white transition">מי אני</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-light mb-4">עקבו אחריי</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="https://www.instagram.com/ayalacohen.design/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=100089356337105" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} אילה כהן. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
