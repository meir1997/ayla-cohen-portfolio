'use client'

import { useState } from 'react'

export default function LeadMagnet() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !email.trim()) return
    setLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, consent }),
      })
    } catch {
      // Show download regardless
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="py-20 px-4 bg-[#F5F5F0]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" dir="rtl">
          {/* Marketing text - appears on right in RTL */}
          <div className="space-y-6 text-right order-1">
            <div className="inline-block bg-dark text-white text-xs px-3 py-1 rounded tracking-widest">
              AYALA COHEN
            </div>
            <h2 className="text-2xl md:text-3xl font-light leading-snug">
              אם אתם מתכננים שיפוץ או שאתם לפני קניית דירה חדשה - אל תתחילו בלי להבין את הדברים החשובים באמת!
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p className="font-medium">אני אילה כהן, אדריכלית ומעצבת פנים</p>
              <p>מלווה משפחות בתכנון ועיצוב הבית עם שילוב של נסיון, דיוק, וסטייל עולמי.</p>
              <p>יצרתי את המדריך הזה כדי שלא תכנסו לשיפוץ או בנייה בלי סדר, ידע, ותחושת שליטה.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">מה תמצאו במדריך?</h3>
              <ul className="space-y-2 text-gray-700 text-sm" dir="rtl">
                {[
                  'מחקר מקדים לקניית דירה',
                  'בחירת בעלי מקצוע',
                  'כל שלבי התכנון שחשוב להכיר מראש',
                  'הסבר פשוט על היתרי בנייה ומה נדרש באמת',
                  'סקירה של סגנונות עיצוב לבית',
                  'הבנה בסיסית של חומרים, תאורה, ועוד',
                  'טיפים מעשיים מתוך ליווי אישי וניסיון אמיתי בשטח',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-dark mt-0.5 shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed">
              המדריך ניתן במתנה - במטרה לעזור לכם לצאת לדרך רגועים, ממוקדים, ובסטייל.
            </p>
          </div>

          {/* Form - appears on left in RTL */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 order-2 md:sticky md:top-32">
            {!submitted ? (
              <>
                <h3 className="text-xl font-light mb-2 text-right">רוצים לקבל את המדריך למייל?</h3>
                <p className="text-sm text-gray-500 mb-6 text-right">
                  מלאו את פרטיכם כאן ותוך רגע הוא אצלכם
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
                  <div>
                    <label className="block text-sm font-medium mb-1">שם</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="שם"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">טלפון</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="טלפון"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition text-right"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">אימייל</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="אימייל"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition text-right"
                      dir="ltr"
                    />
                  </div>
                  <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 shrink-0 w-4 h-4 accent-dark"
                    />
                    <span>
                      <span className="block font-medium">קבלת דיוור</span>
                      <span className="block text-xs text-gray-500">מאשר/ת קבלת דיוור</span>
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-3 bg-dark text-white hover:bg-gray-800 transition text-sm font-medium disabled:opacity-60"
                  >
                    {loading ? '...' : 'שלחו לי את המדריך ←'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    לא נשלח ספאם. אנחנו שומרים על הפרטיות שלכם.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center space-y-6 py-4" dir="rtl">
                <div className="text-4xl">🎉</div>
                <h3 className="text-xl font-light">תודה, {name}!</h3>
                <p className="text-gray-600 text-sm">
                  המדריך מוכן להורדה. לחצו על הכפתור למטה.
                </p>
                <a
                  href="/design-guide.pdf"
                  download="מדריך לעיצוב הבית - אילה כהן.pdf"
                  className="inline-block w-full px-8 py-3 bg-dark text-white hover:bg-gray-800 transition text-sm font-medium text-center"
                >
                  הורידו את המדריך ↓
                </a>
                <p className="text-xs text-gray-400">
                  נשמח לעזור גם לכם -{' '}
                  <a href="/contact" className="underline hover:text-dark transition">
                    צרו קשר
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
