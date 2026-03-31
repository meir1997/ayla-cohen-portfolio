export const metadata = {
  title: 'אודות | אילה כהן',
  description: 'הסטודיו שלנו מתמחה בתכנון אדריכלי ועיצוב פנים במגזר הפרטי ובמסחרי',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div className="order-2 md:order-1">
            <img
              src="/ayala-portrait.jpg"
              alt="אילה כהן - אדריכלות ועיצוב פנים"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-light mb-8">מי אני</h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              בית הוא המקום בו מגשימים חלומות, הוא מלווה אותנו מידי יום בכל החוויות השגרתיות והאירועים המרגשים. כשהבית מתוכנן כראוי הוא יכול להכיל את כל הדברים החשובים לנו מבלי להתפשר על פרקטיקה, פונקציונליות ונוחות.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              כשנכנס העיצוב לתמונה - התוצאה מדברת בעד עצמה.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              מגיל צעיר מאד הבנתי שהאדריכלות והעיצוב הם חלק מחיי. אני זוכרת את עצמי כבר מגיל צעיר מאד משרטטת בעיפרון בתים וצובעת לפי סוגי החומרים. בגיל 15 החלטתי להיחשף לעולם הזה בצורה מקצועית במסגרת מגמת אדריכלות בתיכון ומאז הכול היסטוריה...
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              מידי תקופה אני דואגת ללכת ללמוד עוד קורס עדכני וללכת לבקר בעוד תערוכה שמביאה את כל החידושים מהעולם, וזאת כדי שתמיד אוכל לתת לכם - לקוחותי את כל המידע הכי רלוונטי ועדכני.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              הסטודיו שלי מתמחה בתכנון אדריכלי ועיצוב פנים הן במגזר הפרטי והן במסחרי. אני מלווה את לקוחותי כבר מרכישת הנכס והבנת הצרכים הספציפיים, תוך תכנון אדריכלי מוקפד וניסיון עיצובי עשיר. הפרויקטים שלי מגוונים ובסגנונות עיצוב שונים - בין אם מדובר בשיפוץ חלל קיים או בנייה מאפס בהתאמה אישית, השאיפה היא להביא את הרעיונות והחומרים המתקדמים ביותר כדי שהפרויקט תמיד יישאר על זמני.
            </p>

            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-dark text-white hover:bg-gray-800 transition text-sm font-medium"
              >
                רוצים להגשים חלום? צרו קשר
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
