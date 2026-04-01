import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, phone } = await request.json()

  if (!name || !phone) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const apiKey = process.env.CALLMEBOT_API_KEY
  const ayalaPhone = '972507374292'

  if (apiKey) {
    const message = encodeURIComponent(
      `ליד חדש מהאתר! 🎉\nשם: ${name}\nטלפון: ${phone}`
    )
    try {
      await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=${ayalaPhone}&text=${message}&apikey=${apiKey}`
      )
    } catch {
      // Don't fail the request if WhatsApp notification fails
    }
  }

  return NextResponse.json({ success: true })
}
