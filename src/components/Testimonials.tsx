'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'יוסי וולפא',
    phone: '0587014446',
    text: 'הגענו לאילה כהן אחרי אכזבות רבות. אילה הפתיעה אותנו לטובה — קשובה ומבינה כל אחד, מכוונת וגם מקרקעת למציאות, מגשימה חלומות הרבה מעבר לציפיות. ההבנה היתה מדויקת, העבודה מתוקתקת, זמינה תמיד. חדשנות ויופי של המילה האחרונה, אבל גם לא מוותרת על פרקטיות. הגענו לדירת החלומות שלנו בזכותה!',
  },
  {
    name: 'שירה ר.',
    phone: '0587134918',
    text: 'אני רוצה להמליץ על אילה האדריכלית המוכשרת, שליוותה אותנו בכל התהליך עם המון מסירות, הקשבה, סובלנות, מקצועיות, והכי חשוב — טעם טוב וכישרון! בזכותה יצא לנו בית מהמם שמשלב את הסגנון שרצינו ביחד עם מה שהולך בשוק. תודה אילה!',
  },
  {
    name: 'אלקי אלפא',
    phone: null,
    text: 'אני ממליצה על אילה, היא אלופה ממש. מאוד משקיעה, תקתקנית — הבינה את הראש שלי ותיכננה בהתאם. מתאימה לכל אחד את סגנון העיצוב שלו, זריזה, קשובה ועושה עבודה מכל הלב. יצירתית ועם מלא רעיונות לפתרון בעיות.',
  },
  {
    name: 'הושע איינהורן',
    phone: '0549099199',
    text: 'אני רוצה להמליץ על השירות שקיבלתי מאילה כהן. במהירות ובנעימות רבה אילה קלטה מה אני צריכה ללא הרבה דיבורים מיותרים והתוצאה היתה מושלמת, זריזה ומקצועית. שמחה לחזור לאילה כל פעם מחדש — כיף לעבוד איתה.',
  },
  {
    name: 'איציק ליכטנזון',
    phone: '0587134918',
    text: 'אני ממליץ בחום על אילה, היא מעצבת פנים מקצועית, יצירתית ובעלת ניסיון רב. היא תיכננה עבורינו דירת נופש מהממת להשכרה ויצרה בדירה אווירה נעימה ומזמינה. היא מקצועית, אדיבה ועם המון ניסיון — אני שמח מאד שלקחנו אותה לתכנון הדירה.',
  },
  {
    name: 'טליה פ.',
    phone: '0504196830',
    text: '״אני ממליצה על אילה, הבית יצא מהמם ובטוב טעם. היא מקצועית, אדיבה, וזמינה מאד עבור בעלי המקצוע השונים. נהנתי מאד מהשירות שלה״',
  },
  {
    name: 'יניב כהן',
    phone: null,
    text: 'היה מצויין! שירות מדהים! ממליץ בחום רב. מדויקת, זריזה — תכניס לכם המון אור לבית.',
  },
  {
    name: 'ליבית שפיצר',
    phone: null,
    text: 'אני ממליצה עליה מאוד. היא הייתה זמינה, קשובה ומאוד נעימה. עשתה את העבודה ממש בזריזות והתאימה את עצמה ללחץ של זמנים.',
  },
  {
    name: 'רונית אמסלם',
    phone: null,
    text: 'אני מאד ממליצה עליה. היא מסורה, יש לה טאצ׳ וכיוון חשיבה מקורי וצעיר — מביאה משהו מאוד טרי. מסורה בליווי שלה, יש לה יחסי אנוש יוצאים מן הכלל ואני ממליצה מכל הלב.',
  },
]

const PER_PAGE = 3

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(testimonials.length / PER_PAGE)
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
          מה אומרים הלקוחות
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[320px]">
          {visible.map((t) => (
            <div
              key={t.name}
              className="bg-secondary rounded-lg p-8 flex flex-col gap-4"
            >
              <span className="text-5xl font-serif text-gray-300 leading-none">&ldquo;</span>

              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                {t.text}
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-light text-dark">{t.name}</p>
                {t.phone && (
                  <a
                    href={`tel:${t.phone}`}
                    className="text-xs text-gray-400 hover:text-dark transition mt-1 block"
                  >
                    {t.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-dark transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="הקודם"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition ${i === page ? 'bg-dark' : 'bg-gray-300'}`}
                aria-label={`עמוד ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-dark transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="הבא"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, testimonials.length)} מתוך {testimonials.length} המלצות
        </p>
      </div>
    </section>
  )
}
