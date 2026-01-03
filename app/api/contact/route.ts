import { NextRequest } from 'next/server'
import { Resend } from 'resend'
import { ContactEmail } from '@/emails/contact-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Asam Tree Contact Form <noreply@asamtree.com>',
      to: process.env.CONTACT_EMAIL || 'info@asamtree.com.sg',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      react: ContactEmail({ name, email, phone, subject, message }),
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return Response.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}