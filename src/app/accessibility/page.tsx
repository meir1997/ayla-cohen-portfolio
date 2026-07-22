import type { Metadata } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת הנגישות של אתר אילה כהן — אדריכלות ועיצוב פנים.',
  alternates: { canonical: absoluteUrl('/accessibility') },
}

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-36 leading-relaxed md:px-8 md:pt-44">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a7254]">עודכן לאחרונה: 22 ביולי 2026</p>
      <h1 className="mt-3 text-4xl font-light md:text-5xl">הצהרת נגישות</h1>

      <div className="mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-light text-dark">המחויבות שלנו לנגישות</h2>
          <p className="mt-3">אנו פועלים כדי לאפשר לאנשים עם מוגבלויות להשתמש באתר ולקבל את המידע והשירותים המוצגים בו באופן מכבד, נוח ושוויוני.</p>
        </section>

        <section>
          <h2 className="text-2xl font-light text-dark">התאמות שבוצעו באתר</h2>
          <ul className="mt-3 list-disc space-y-2 pr-6">
            <li>מבנה כותרות וקישורים המאפשר ניווט ברור.</li>
            <li>אפשרות ניווט באמצעות מקלדת ברכיבים המרכזיים.</li>
            <li>טקסט חלופי לתמונות תוכן מרכזיות.</li>
            <li>התאמה למסכים בגדלים שונים ותמיכה בכיוון כתיבה מימין לשמאל.</li>
            <li>כיבוד העדפת המשתמש להפחתת תנועה והנפשות.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-light text-dark">סייגים ושיפור מתמשך</h2>
          <p className="mt-3">למרות המאמצים, ייתכן שחלקים מסוימים באתר עדיין אינם נגישים באופן מלא. אנו ממשיכים לבדוק ולשפר את האתר ונשמח לקבל דיווח מפורט על קושי שנתקלתם בו.</p>
        </section>

        <section>
          <h2 className="text-2xl font-light text-dark">יצירת קשר בנושא נגישות</h2>
          <p className="mt-3">אם נתקלתם בבעיית נגישות, אנא ציינו את העמוד, הפעולה שניסיתם לבצע והטכנולוגיה המסייעת שבה השתמשתם, ככל שרלוונטי.</p>
          <ul className="mt-4 space-y-2">
            <li>טלפון: <a className="underline underline-offset-4" href="tel:0507374292">050-7374292</a></li>
            <li>אימייל: <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`} dir="ltr">{siteConfig.email}</a></li>
          </ul>
        </section>
      </div>
    </article>
  )
}
