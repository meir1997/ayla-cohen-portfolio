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
    <section className="flex h-[calc(100dvh-6rem)] items-center border-t border-[#d7d7d7] bg-[#f7f7f5] px-3 py-1 md:h-[calc(100dvh-7rem)] md:px-8 md:py-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 md:gap-12" dir="rtl">
          {/* Marketing text - appears on right in RTL */}
          <div className="order-1 space-y-1.5 text-right md:space-y-4">
            <div className="inline-block bg-dark px-2 py-0.5 text-[9px] tracking-widest text-white md:px-3 md:py-1 md:text-xs">
              AYALA COHEN
            </div>
            <h2 className="text-[17px] font-light leading-tight md:text-3xl md:leading-snug">
              אם אתם מתכננים שיפוץ או שאתם לפני קניית דירה חדשה - אל תתחילו בלי להבין את הדברים החשובים באמת!
            </h2>
            <div className="text-[11px] leading-tight text-gray-700 md:space-y-2 md:text-base md:leading-relaxed">
              <p className="font-medium md:hidden">אני אילה כהן, אדריכלית ומעצבת פנים. יצרתי מדריך שיעשה סדר לפני שיפוץ או בנייה.</p>
              <p className="hidden font-medium md:block">אני אילה כהן, אדריכלית ומעצבת פנים</p>
              <p className="hidden md:block">מלווה משפחות בתכנון ועיצוב הבית עם שילוב של נסיון, דיוק, וסטייל עולמי.</p>
              <p className="hidden md:block">יצרתי את המדריך הזה כדי שלא תכנסו לשיפוץ או בנייה בלי סדר, ידע, ותחושת שליטה.</p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-medium md:mb-3 md:text-lg">מה תמצאו במדריך?</h3>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] leading-tight text-gray-700 md:gap-x-5 md:gap-y-2 md:text-sm" dir="rtl">
                {[
                  'מחקר מקדים לקניית דירה',
                  'בחירת בעלי מקצוע',
                  'כל שלבי התכנון שחשוב להכיר מראש',
                  'איך לזהות מתי ייתכן שנדרש היתר ולמי פונים לבדיקה',
                  'סקירה של סגנונות עיצוב לבית',
                  'הבנה בסיסית של חומרים, תאורה, ועוד',
                  'טיפים מעשיים מתוך ליווי אישי וניסיון אמיתי בשטח',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1 md:gap-2">
                    <span className="mt-0.5 shrink-0 text-[7px] text-dark md:text-sm">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[10px] leading-tight text-gray-600 md:text-base md:leading-relaxed">
              המדריך ניתן במתנה - במטרה לעזור לכם לצאת לדרך רגועים, ממוקדים, ובסטייל.
            </p>
          </div>

          {/* Form - appears on left in RTL */}
          <div className="order-2 border border-gray-200 bg-white p-3 shadow-sm md:p-8">
            {!submitted ? (
              <>
                <h3 className="mb-0.5 text-base font-light text-right md:mb-2 md:text-xl">רוצים לקבל את המדריך למייל?</h3>
                <p className="mb-2 text-[10px] text-gray-500 text-right md:mb-6 md:text-sm">
                  מלאו את פרטיכם כאן ותוך רגע הוא אצלכם
                </p>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-2 gap-y-1 md:gap-2" dir="rtl">
                  <div>
                    <label className="mb-0.5 block text-[10px] font-medium md:mb-1 md:text-sm">שם</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="שם"
                      className="h-11 w-full border border-gray-200 px-3 py-2 text-base text-right transition focus:border-dark focus:outline-none md:px-4 md:py-3"
                    />
                  </div>
                  <div>
                    <label className="mb-0.5 block text-[10px] font-medium md:mb-1 md:text-sm">טלפון</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="טלפון"
                      className="h-11 w-full border border-gray-200 px-3 py-2 text-base text-right transition focus:border-dark focus:outline-none md:px-4 md:py-3"
                      dir="ltr"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="mb-0.5 block text-[10px] font-medium md:mb-1 md:text-sm">אימייל</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="אימייל"
                      className="h-11 w-full border border-gray-200 px-3 py-2 text-base text-right transition focus:border-dark focus:outline-none md:px-4 md:py-3"
                      dir="ltr"
                    />
                  </div>
                  <label className="col-span-2 flex min-h-11 cursor-pointer items-center gap-2 text-[10px] text-gray-700 md:items-start md:pt-1 md:text-sm">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="h-4 w-4 shrink-0 accent-dark md:mt-1"
                    />
                    <span>
                      <span className="block font-medium">קבלת דיוור</span>
                      <span className="block text-[9px] text-gray-500 md:text-xs">מאשר/ת קבלת דיוור</span>
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="col-span-2 min-h-11 w-full bg-dark px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-60"
                  >
                    {loading ? '...' : 'שלחו לי את המדריך ←'}
                  </button>
                  <p className="col-span-2 text-center text-[9px] text-gray-400 md:text-xs">
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
