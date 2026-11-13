import type { Metadata } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'קישורים',
  description: 'אילה כהן — אדריכלות ועיצוב פנים. כל הקישורים במקום אחד.',
  alternates: { canonical: absoluteUrl('/links') },
  robots: { index: false, follow: true },
}

const whatsapp = 'https://wa.me/message/K5HY32EGIVTFK1'
const tiktok = 'https://www.tiktok.com/@ayala.design'

const links = [
  { label: 'המדריך המלא לעיצוב הבית במתנה', href: '/guide', featured: true },
  { label: 'מוזמנים לכתוב לי בוואטסאפ', href: whatsapp, external: true },
  { label: 'האתר שלי', href: '/' },
  { label: 'הפרויקטים שלי', href: '/projects' },
  { label: 'האינסטגרם שלי', href: siteConfig.instagram, external: true },
  { label: 'הפייסבוק שלי', href: siteConfig.facebook, external: true },
]

const socials = [
  {
    label: 'Instagram',
    href: siteConfig.instagram,
    path: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 100 10.2 5.1 5.1 0 000-10.2zm0 8.4a3.3 3.3 0 110-6.6 3.3 3.3 0 010 6.6zm5.3-9.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z',
  },
  {
    label: 'Facebook',
    href: siteConfig.facebook,
    path: 'M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0022 12z',
  },
  {
    label: 'WhatsApp',
    href: whatsapp,
    path: 'M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z',
  },
  {
    label: 'TikTok',
    href: tiktok,
    path: 'M16.6 2h-3.4v13.4a2.9 2.9 0 11-2-2.8V9.1a6.4 6.4 0 105.4 6.3V8.6a8.3 8.3 0 004.9 1.6V6.8a4.9 4.9 0 01-4.9-4.8z',
  },
]

export default function LinksPage() {
  return (
    <div className="min-h-dvh bg-secondary px-5 py-12 md:py-16">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <img
          src="/ayala-profile.jpg"
          alt="אילה כהן"
          className="h-28 w-28 rounded-full object-cover shadow-sm ring-1 ring-accent/40"
        />

        <h1 className="mt-6 text-3xl font-light tracking-wide text-dark">אילה כהן</h1>
        <p className="mt-2 text-xs tracking-[0.2em] text-gray-500" dir="ltr">
          ARCHITECTURE &amp; INTERIOR DESIGN
        </p>
        <span className="mt-5 block h-px w-10 bg-accent" aria-hidden="true" />
        <p className="mt-5 text-base font-light text-gray-600">מגשימה לאנשים חלומות</p>

        <nav aria-label="קישורים" className="mt-10 w-full">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={
                    link.featured
                      ? 'flex min-h-14 w-full items-center justify-center bg-dark px-6 py-4 text-sm font-medium text-white transition hover:bg-gray-800'
                      : 'flex min-h-14 w-full items-center justify-center border border-dark bg-white px-6 py-4 text-sm font-medium text-dark transition hover:bg-dark hover:text-white'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-10 flex items-center justify-center gap-3" dir="ltr">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center text-dark transition hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <a href="/" className="mt-10 inline-block" aria-label="לאתר של אילה כהן">
          <img src="/logo-transparent.png" alt="" className="h-16 w-auto opacity-80" />
        </a>
      </div>
    </div>
  )
}
