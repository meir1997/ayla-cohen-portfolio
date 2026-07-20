import Link from 'next/link'

export const metadata = {
  title: 'אודות | אילה כהן',
  description: 'הסטודיו שלנו מתמחה בתכנון אדריכלי ועיצוב פנים במגזר הפרטי ובמסחרי',
}

export default function AboutPage() {
  return (
    <div className="h-dvh overflow-hidden bg-white pt-24 md:pt-28">
      <section className="grid h-full grid-rows-[42%_58%] border-t border-[#d7d7d7] md:grid-cols-2 md:grid-rows-1" dir="ltr">
        <div
          className="relative overflow-hidden bg-cover bg-[center_18%] md:bg-[center_38%]"
          style={{ backgroundImage: "url('/about-video-poster.jpg')" }}
        >
          <video
            className="about-profile-video absolute inset-0 h-full w-full object-cover object-[center_18%] md:object-[center_38%]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/about-video-poster.jpg"
            aria-label="אילה כהן בסטודיו לעיצוב ואדריכלות"
          >
            <source src="/about-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" aria-hidden="true" />
        </div>

        <article
          className="about-panel flex min-h-0 items-center overflow-hidden px-6 py-4 sm:px-10 md:px-[clamp(2rem,4vw,5rem)] md:py-8 lg:px-[clamp(3rem,6vw,7rem)]"
          dir="rtl"
        >
          <div className="mx-auto w-full max-w-2xl">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8a7254] md:mb-3 md:text-xs">
              Interior Design &amp; Architecture
            </p>
            <h1 className="mb-3 text-3xl font-light leading-none tracking-tight text-[#24221f] sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl">
              מי אני
            </h1>

            <div className="space-y-2 text-[clamp(0.72rem,3.05vw,0.9rem)] leading-[1.5] text-[#595550] md:space-y-3 md:text-[clamp(0.78rem,1vw,1rem)] md:leading-[1.65]">
              <p>
                בית הוא המקום בו מגשימים חלומות. כשהבית מתוכנן כראוי הוא יכול להכיל את כל הדברים החשובים לנו, מבלי להתפשר על פרקטיקה, פונקציונליות ונוחות. כשנכנס העיצוב לתמונה — התוצאה מדברת בעד עצמה.
              </p>

              <p className="about-detail hidden md:block">
                מגיל צעיר מאד הבנתי שהאדריכלות והעיצוב הם חלק מחיי. אני זוכרת את עצמי משרטטת בעיפרון בתים וצובעת לפי סוגי החומרים. בגיל 15 החלטתי להיחשף לעולם הזה בצורה מקצועית במסגרת מגמת אדריכלות בתיכון, ומאז הכול היסטוריה.
              </p>

              <p className="about-detail hidden md:block">
                מידי תקופה אני דואגת ללמוד קורס עדכני ולבקר בתערוכות שמביאות את החידושים מהעולם, כדי שתמיד אוכל לתת ללקוחותיי את המידע הרלוונטי והעדכני ביותר.
              </p>

              <p>
                הסטודיו שלי מתמחה בתכנון אדריכלי ועיצוב פנים במגזר הפרטי והמסחרי. אני מלווה את לקוחותיי מרכישת הנכס והבנת הצרכים, דרך תכנון מוקפד ועד ליצירת חלל אישי, מדויק ועל־זמני.
              </p>
            </div>

            <Link
              href="/contact"
              className="about-cta mt-3 inline-flex min-h-11 items-center border border-[#24221f] px-5 text-xs font-medium tracking-wide text-[#24221f] transition-colors duration-200 hover:bg-[#24221f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#24221f] md:mt-5 md:px-7 md:text-sm"
            >
              רוצים להגשים חלום? צרו קשר
            </Link>
          </div>
        </article>
      </section>
    </div>
  )
}
