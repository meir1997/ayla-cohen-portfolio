'use client'

import { useState } from 'react'

export default function LeadMagnet() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" dir="rtl">
          {/* Marketing text - appears on right in RTL */}
          <div className="space-y-6 text-right order-1">
            <div className="inline-block bg-dark text-white text-xs px-3 py-1 rounded tracking-widest">
              מתנה
            </div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug">
              המדריך המלא<br />
              <span className="font-normal">לעיצוב הבית שחלמתם עליו</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              שנים של ניסיון בעיצוב פנים ריכזתי לכם במדריך אחד.
              תגלו איך לבחור סגנון עיצוב שמתאים לכם, מה עושה חלל להרגיש יוקרתי,
              ואיך להימנע מהטעויות הנפוצות שעולות ביוקר.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                'איך בוחרים פלטת צבעים שתעמוד במבחן הזמן',
                'הסודות מאחורי חלל שמרגיש מרווח ומאוורר',
                'חומרים ומרקמים – מה עובד ומה לא',
                'כיצד לשלב אסתטיקה עם פונקציונליות',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-dark mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form - appears on left in RTL */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 order-2">
            {!submitted ? (
              <>
                <h3 className="text-xl font-light mb-2 text-right">קבלו את המדריך במתנה</h3>
                <p className="text-sm text-gray-500 mb-6 text-right">
                  השאירו פרטים ונשלח לכם ישירות
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
                  <div>
                    <label className="block text-sm font-medium mb-1">שם מלא</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="השם שלך"
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
                      placeholder="050-0000000"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-dark transition text-right"
                      dir="ltr"
                    />
                  </div>
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
                  נשמח לעזור גם לכם –{' '}
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
