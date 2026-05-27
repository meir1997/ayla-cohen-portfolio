import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, phone, email, consent } = await request.json()

  if (!name || !phone || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const consentText = consent ? 'כן' : 'לא'

  // WhatsApp notification via CallMeBot
  const callmebotKey = process.env.CALLMEBOT_API_KEY
  const ayalaPhone = '972507374292'

  if (callmebotKey) {
    const message = encodeURIComponent(
      `ליד חדש מהאתר! 🎉\nשם: ${name}\nטלפון: ${phone}\nאימייל: ${email}\nקבלת דיוור: ${consentText}`
    )
    try {
      await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=${ayalaPhone}&text=${message}&apikey=${callmebotKey}`
      )
    } catch {
      // Don't fail the request if WhatsApp notification fails
    }
  }

  // Email notification via Resend
  const resendKey = process.env.RESEND_API_KEY
  const ayalaEmail = 'ayalacohen.design@gmail.com'

  if (resendKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Ayala Cohen Website <onboarding@resend.dev>',
          to: [ayalaEmail],
          reply_to: email,
          subject: `ליד חדש מהאתר - ${name}`,
          html: `<div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
  <h2 style="color: #2A2A2A; border-bottom: 2px solid #2A2A2A; padding-bottom: 8px;">ליד חדש מהאתר 🎉</h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">שם:</td><td>${escapeHtml(name)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: bold;">טלפון:</td><td><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
    <tr><td style="padding: 8px 0; font-weight: bold;">אימייל:</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding: 8px 0; font-weight: bold;">קבלת דיוור:</td><td>${consentText}</td></tr>
  </table>
  <p style="margin-top: 24px; color: #6B7280; font-size: 13px;">נשלח מטופס המדריך באתר ayla-cohen-portfolio.vercel.app</p>
</div>`,
        }),
      })
    } catch {
      // Don't fail the request if email notification fails
    }
  }

  return NextResponse.json({ success: true })
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
