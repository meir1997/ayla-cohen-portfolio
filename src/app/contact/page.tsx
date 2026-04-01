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
                placeholder="050-0000000"
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
              <a href="tel:0507374292" className="text-gray-600 hover:text-dark transition">050-7374292</a>
            </div>

            <div>
              <h3 className="text-lg font-light mb-2">וואטסאפ</h3>
              <a
                href="https://api.whatsapp.com/send?phone=972507374292&text=%D7%A9%D7%9C%D7%95%D7%9D+%D7%90%D7%99%D7%9C%D7%94,+%D7%90%D7%A0%D7%99+%D7%A4%D7%95%D7%A0%D7%94+%D7%90%D7%9C%D7%99%D7%9A+%D7%93%D7%A8%D7%9A+%D7%94%D7%90%D7%AA%D7%A8+,+%D7%AA%D7%97%D7%96%D7%A8%D7%99+%D7%90%D7%9C%D7%99+%D7%91%D7%91%D7%A7%D7%A9%D7%94+"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-dark transition"
              >
                שלחי הודעה בוואטסאפ ←
              </a>
            </div>

            <div>
              <h3 className="text-lg font-light mb-2">אימייל</h3>
              <a href="mailto:Ayalacohen.design@gmail.com" className="text-gray-600 hover:text-dark transition">
                Ayalacohen.design@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-light mb-2">עיר</h3>
              <p className="text-gray-600">ירושלים</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-light mb-4">עקבו אחריי</h3>
              <div className="space-y-2 text-gray-600">
                <p><a href="https://www.instagram.com/ayalacohen.design/" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition">Instagram</a></p>
                <p><a href="https://www.facebook.com/profile.php?id=100089356337105" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition">Facebook</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
