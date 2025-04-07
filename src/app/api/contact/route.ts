// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, phone, company, service, message } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: 'your-email@example.com', // Replace with your destination email
      subject: `Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Email error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
}
