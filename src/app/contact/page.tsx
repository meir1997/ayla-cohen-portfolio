import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'יצירת קשר',
  description: 'צרו קשר עם אילה כהן לתכנון אדריכלי, עיצוב פנים וליווי שיפוץ בירושלים. טלפון, וואטסאפ, אימייל וטופס פנייה.',
  alternates: { canonical: absoluteUrl('/contact') },
}

const inputClassName =
  'h-11 w-full border border-gray-200 bg-white px-3 py-2 text-base transition focus:border-dark focus:outline-none focus:ring-1 focus:ring-dark md:px-4 md:py-2.5'

export default function ContactPage() {
  return (
    <div className="mobile-one-screen h-dvh overflow-hidden bg-white pt-24 md:pt-28">
      <section className="h-[calc(100dvh-6rem)] border-t border-[#d7d7d7] md:h-[calc(100dvh-7rem)]">
        <div className="mx-auto grid h-full max-w-7xl grid-rows-[1fr_auto] md:grid-cols-[minmax(0,1.35fr)_minmax(19rem,0.65fr)] md:grid-rows-1">
          <div className="flex items-start px-4 py-3 sm:px-10 md:items-center md:px-12 md:py-6 lg:px-16">
            <div className="w-full">
              <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.25em] text-[#8a7254] md:mb-2 md:text-xs">
                Let&apos;s create together
              </p>
              <h1 className="text-2xl font-light tracking-tight md:text-5xl">יצירת קשר</h1>
              <p className="mt-1 text-sm text-gray-600 md:mt-2 md:text-lg">
                בואו נדבר על הפרויקט החדש שלכם
              </p>

              <form className="mt-3 grid grid-cols-2 gap-2 md:mt-7 md:gap-4" aria-label="טופס יצירת קשר">
                <div>
                  <label htmlFor="contact-name" className="mb-0.5 block text-xs font-medium md:mb-1.5 md:text-sm">שם מלא</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" className={inputClassName} placeholder="שמך" />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-0.5 block text-xs font-medium md:mb-1.5 md:text-sm">טלפון</label>
                  <input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClassName} placeholder="050-0000000" />
                </div>

                <div className="col-span-2">
                  <label htmlFor="contact-email" className="mb-0.5 block text-xs font-medium md:mb-1.5 md:text-sm">אימייל</label>
                  <input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" className={inputClassName} placeholder="email@example.com" dir="ltr" />
                </div>

                <div className="col-span-2">
                  <label htmlFor="contact-message" className="mb-0.5 block text-xs font-medium md:mb-1.5 md:text-sm">הודעה</label>
                  <textarea id="contact-message" name="message" className={`${inputClassName} h-14 resize-none md:h-24`} placeholder="ספרו לנו על הפרויקט שלכם" />
                </div>

                <button type="submit" className="col-span-2 min-h-11 bg-dark px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark">
                  שליחת הודעה
                </button>
              </form>
            </div>
          </div>

          <aside className="flex items-center border-t border-gray-200 bg-[#f7f7f5] px-4 py-2 sm:px-10 md:border-r md:border-t-0 md:px-10 md:py-8" aria-label="פרטי התקשרות">
            <div className="w-full space-y-1 md:space-y-6">
              <div>
                <h2 className="text-base font-light md:mb-2 md:text-2xl">נדבר?</h2>
                <p className="text-[10px] leading-tight text-gray-600 md:text-sm md:leading-relaxed">אפשר ליצור קשר בכל אחת מהדרכים הבאות.</p>
              </div>

              <div className="grid grid-cols-[0.8fr_1.4fr_0.7fr] gap-2 border-y border-gray-200 py-1 md:block md:space-y-5 md:py-5">
                <div>
                  <h3 className="text-[9px] font-medium uppercase tracking-widest text-gray-500 md:mb-1 md:text-xs">טלפון</h3>
                  <a href="tel:0507374292" className="inline-flex min-h-11 items-center text-[11px] transition hover:opacity-60 md:text-base">050-7374292</a>
                </div>
                <div>
                  <h3 className="text-[9px] font-medium uppercase tracking-widest text-gray-500 md:mb-1 md:text-xs">אימייל</h3>
                  <a href="mailto:Ayalacohen.design@gmail.com" className="inline-flex min-h-11 items-center break-all text-[9px] leading-tight transition hover:opacity-60 md:text-base" dir="ltr">Ayalacohen.design@gmail.com</a>
                </div>
                <div>
                  <h3 className="text-[9px] font-medium uppercase tracking-widest text-gray-500 md:mb-1 md:text-xs">עיר</h3>
                  <p className="flex min-h-11 items-center text-[11px] md:text-base">ירושלים</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a href="https://api.whatsapp.com/send?phone=972507374292&text=%D7%A9%D7%9C%D7%95%D7%9D+%D7%90%D7%99%D7%9C%D7%94,+%D7%90%D7%A0%D7%99+%D7%A4%D7%95%D7%A0%D7%94+%D7%90%D7%9C%D7%99%D7%9A+%D7%93%D7%A8%D7%9A+%D7%94%D7%90%D7%AA%D7%A8+,+%D7%AA%D7%97%D7%96%D7%A8%D7%99+%D7%90%D7%9C%D7%99+%D7%91%D7%91%D7%A7%D7%A9%D7%94+" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border-b border-dark text-[11px] font-medium transition hover:opacity-60 md:text-sm">
                  וואטסאפ ←
                </a>
                <div className="flex gap-3 text-[11px] text-gray-600 md:gap-6 md:text-sm">
                  <a href="https://www.instagram.com/ayalacohen.design/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center transition hover:text-dark">Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=100089356337105" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center transition hover:text-dark">Facebook</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
