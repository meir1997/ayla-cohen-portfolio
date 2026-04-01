'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Photo — on mobile comes first */}
          <div className="order-1 md:order-1">
            <img
              src="/ayala-portrait.jpg"
              alt="אילה כהן - אדריכלות ועיצוב פנים"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-light leading-tight text-dark">
              מי אני
            </h1>

            {/* Intro — always visible */}
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              בית הוא המקום בו מגשימים חלומות, הוא מלווה אותנו מידי יום בכל החוויות השגרתיות והאירועים המרגשים. כשהבית מתוכנן כראוי הוא יכול להכיל את כל הדברים החשובים לנו מבלי להתפשר על פרקטיקה, פונקציונליות ונוחות.
            </p>

            {/* Rest of text — hidden on mobile unless expanded */}
            <div className={`space-y-6 ${expanded ? 'block' : 'hidden md:block'}`}>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                כשנכנס העיצוב לתמונה - התוצאה מדברת בעד עצמה.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                מגיל צעיר מאד הבנתי שהאדריכלות והעיצוב הם חלק מחיי. אני זוכרת את עצמי כבר מגיל צעיר מאד משרטטת בעיפרון בתים וצובעת לפי סוגי החומרים. בגיל 15 החלטתי להיחשף לעולם הזה בצורה מקצועית במסגרת מגמת אדריכלות בתיכון ומאז הכול היסטוריה...
              </p>

              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                הסטודיו שלי מתמחה בתכנון אדריכלי ועיצוב פנים הן במגזר הפרטי והן במסחרי. אני מלווה את לקוחותי כבר מרכישת הנכס והבנת הצרכים הספציפיים, תוך תכנון אדריכלי מוקפד וניסיון עיצובי עשיר.
              </p>
            </div>

            {/* Read more button — mobile only */}
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="md:hidden text-sm text-dark underline underline-offset-4 hover:opacity-60 transition"
              >
                קרא עוד ↓
              </button>
            )}

            <div className="flex gap-4 pt-2">
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
        </div>
      </div>
    </div>
  )
}
