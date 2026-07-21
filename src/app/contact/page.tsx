export const metadata = {
  title: 'יצירת קשר | אילה כהן',
  description: 'צור קשר עם אילה כהן לפרויקט החדש שלך',
}

const inputClassName =
  'min-h-11 w-full border border-gray-200 bg-white px-4 py-2.5 text-base transition focus:border-dark focus:outline-none focus:ring-1 focus:ring-dark'

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-white pt-24 md:pt-28">
      <section className="min-h-[calc(100dvh-6rem)] border-t border-[#d7d7d7] md:h-[calc(100dvh-7rem)] md:min-h-0">
        <div className="mx-auto grid max-w-7xl md:h-full md:grid-cols-[minmax(0,1.35fr)_minmax(19rem,0.65fr)]">
          <div className="flex items-center px-6 py-8 sm:px-10 md:px-12 md:py-6 lg:px-16">
            <div className="w-full">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#8a7254]">
                Let&apos;s create together
              </p>
              <h1 className="text-4xl font-light tracking-tight md:text-5xl">יצירת קשר</h1>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                בואו נדבר על הפרויקט החדש שלכם
              </p>

              <form className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="טופס יצירת קשר">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">שם מלא</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" className={inputClassName} placeholder="שמך" />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium">טלפון</label>
                  <input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClassName} placeholder="050-0000000" />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">אימייל</label>
                  <input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" className={inputClassName} placeholder="email@example.com" dir="ltr" />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">הודעה</label>
                  <textarea id="contact-message" name="message" className={`${inputClassName} h-24 resize-none`} placeholder="ספרו לנו על הפרויקט שלכם" />
                </div>

                <button type="submit" className="min-h-11 bg-dark px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark sm:col-span-2">
                  שליחת הודעה
                </button>
              </form>
            </div>
          </div>

          <aside className="flex items-center border-t border-gray-200 bg-[#f7f7f5] px-6 py-8 sm:px-10 md:border-r md:border-t-0 md:px-10" aria-label="פרטי התקשרות">
            <div className="w-full space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-light">נדבר?</h2>
                <p className="text-sm leading-relaxed text-gray-600">אפשר ליצור קשר בכל אחת מהדרכים הבאות.</p>
              </div>

              <div className="space-y-5 border-y border-gray-200 py-5">
                <div>
                  <h3 className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-500">טלפון</h3>
                  <a href="tel:0507374292" className="inline-flex min-h-11 items-center hover:opacity-60 transition">050-7374292</a>
                </div>
                <div>
                  <h3 className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-500">אימייל</h3>
                  <a href="mailto:Ayalacohen.design@gmail.com" className="inline-flex min-h-11 items-center break-all hover:opacity-60 transition" dir="ltr">Ayalacohen.design@gmail.com</a>
                </div>
                <div>
                  <h3 className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-500">עיר</h3>
                  <p className="flex min-h-11 items-center">ירושלים</p>
                </div>
              </div>

              <a href="https://api.whatsapp.com/send?phone=972507374292&text=%D7%A9%D7%9C%D7%95%D7%9D+%D7%90%D7%99%D7%9C%D7%94,+%D7%90%D7%A0%D7%99+%D7%A4%D7%95%D7%A0%D7%94+%D7%90%D7%9C%D7%99%D7%9A+%D7%93%D7%A8%D7%9A+%D7%94%D7%90%D7%AA%D7%A8+,+%D7%AA%D7%97%D7%96%D7%A8%D7%99+%D7%90%D7%9C%D7%99+%D7%91%D7%91%D7%A7%D7%A9%D7%94+" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border-b border-dark text-sm font-medium hover:opacity-60 transition">
                שלחו הודעה בוואטסאפ ←
              </a>

              <div className="flex gap-6 text-sm text-gray-600">
                <a href="https://www.instagram.com/ayalacohen.design/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-dark transition">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100089356337105" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-dark transition">Facebook</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
