export const metadata = {
  title: 'יצירת קשר | אילה כהן',
  description: 'צור קשר עם אילה כהן לפרויקט החדש שלך',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-4">יצירת קשר</h1>
        <p className="text-lg text-gray-600 mb-12">
          בואו נדבר על הפרויקט החדש שלכם
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">שם מלא</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition"
                placeholder="שמך"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">אימייל</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">טלפון</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition"
                placeholder="+972-50-1234567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">הודעה</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition h-32 resize-none"
                placeholder="ספר לנו על הפרויקט שלך"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-dark text-white hover:bg-gray-800 transition text-sm font-medium"
            >
              שלח הודעה
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-light mb-2">טלפון</h3>
              <p className="text-gray-600"><a href="tel:+972501234567" className="hover:text-dark transition">+972-50-1234567</a></p>
            </div>

            <div>
              <h3 className="text-lg font-light mb-2">אימייל</h3>
              <p className="text-gray-600"><a href="mailto:hello@ayalacohen.co.il" className="hover:text-dark transition">hello@ayalacohen.co.il</a></p>
            </div>

            <div>
              <h3 className="text-lg font-light mb-2">עיר</h3>
              <p className="text-gray-600">תל אביב, ישראל</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-light mb-4">עקבו אחרינו</h3>
              <div className="space-y-2 text-gray-600">
                <p><a href="#" className="hover:text-dark transition">Instagram</a></p>
                <p><a href="#" className="hover:text-dark transition">WhatsApp</a></p>
                <p><a href="#" className="hover:text-dark transition">Facebook</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
