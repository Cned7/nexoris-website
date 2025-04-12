'use client'

import { useState } from 'react'
import Head from 'next/head'
import Breadcrumbs from '../components/Breadcrumbs'

export default function ContactPage() {
  const [service, setService] = useState('')
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const services = [
    'Software Development',
    'Mobile App Development',
    'Cloud Solutions',
    'DevOps & Automations',
    'API Development & Integrations',
    'Cybersecurity Solutions',
    'Product Design',
    'UI/UX Design Consulting',
    'AR/VR Solutions',
    'SEO & Content Marketing',
    'Marketing Automation',
    'Analytics & Reporting',
    'Digital Transformation Consulting',
    'Corporate Training',
    'Others',
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/', isCurrentPage: false },
    { name: 'Contact Us', href: '/contact-us', isCurrentPage: true },
  ]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      event.preventDefault()
      alert('Please enter a valid email address')
    }
  }

  const targetEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'j.boscong7@gmail.com'

  const thankYouURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/thank-you'
      : 'https://nexoristech.com/thank-you'

  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21 bg-secondary-background">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: 'Contact Us',
              url: 'https://nexoristech.com/contact-us',
              mainEntity: {
                '@type': 'Organization',
                name: 'Nexoris Technologies',
                url: 'https://nexoristech.com',
                email: 'hello@nexoristech.com',
                telephone: '+234XXXXXXXXXX',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lagos',
                  addressCountry: 'NG',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'Customer Support',
                  email: 'hello@nexoristech.com',
                  telephone: '+234XXXXXXXXXX',
                  availableLanguage: ['English'],
                },
              },
            }),
          }}
        />
      </Head>

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <section className="max-w-4xl mx-auto px-6 md:py-8 container">
        <h1 className="text-3xl md:text-4xl font-bold text-heading font-heading mb-4">
          Let&apos;s Start Building Together
        </h1>
        <p className="text-lg text-body my-8">
          Got a bold idea, a complex challenge, or just need expert guidance on
          your next big move? We&apos;re here to help. Whether you&apos;re
          looking to launch a product, modernize your tech stack, or explore
          innovative digital strategies — let&apos;s talk. Reach out to us and
          let&apos;s explore how we can bring your vision to life.
        </p>

        <div className="space-y-4 text-body my-12 container mx-auto w-full">
          <div className="text-body text-lg">
            <h2 className="text-3xl font-semibold font-heading text-heading mb-8">
              Get in Touch
            </h2>
            <p>
              Email:{' '}
              <a href="mailto:hello@nexoristech.com" className="text-blue-600">
                hello@nexoristech.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+234XXXXXXXXXX" className="text-blue-600">
                +234 XXX XXX XXXX
              </a>
            </p>
            <p>Office Hours: Monday – Friday, 9:00 AM – 5:00 PM (WAT)</p>
            <p>
              Location: Lagos, Nigeria (Remote-first, serving clients globally)
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          action={`https://formsubmit.co/${targetEmail}`}
          method="POST"
          className="space-y-4 bg-background rounded-lg shadow shadow-[#bfb9ef] p-4 lg:p-8"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={thankYouURL} />
          <input type="hidden" name="service" value={service} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number (optional)"
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
            <input
              name="company"
              type="text"
              placeholder="Company (optional)"
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
          </div>

          <div className="relative w-full">
            <div
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="cursor-pointer p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            >
              <span>{service || 'Select a Service'}</span>
              <span className="float-right">&#9662;</span>
            </div>
            {isDropdownOpen && (
              <div className="absolute w-full bg-background border border-[#bfb9ef] mt-1 rounded-md max-h-60 overflow-auto z-10">
                {services.map((svc) => (
                  <div
                    key={svc}
                    className="cursor-pointer p-2 hover:bg-button hover:text-secondary-text transition-colors duration-200"
                    onClick={() => {
                      setService(svc)
                      setDropdownOpen(false)
                    }}
                  >
                    {svc}
                  </div>
                ))}
              </div>
            )}
          </div>

          <textarea
            name="message"
            placeholder="Tell us more about your project or inquiry"
            required
            rows={6}
            className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none resize-none"
          />

          <label className="flex items-start space-x-2 text-sm text-body">
            <input type="checkbox" name="consent" required className="mt-1" />
            <span>
              I consent to the processing of my data in accordance with Nexoris
              Technologies&apos; privacy policy.
            </span>
          </label>

          <button
            type="submit"
            className="bg-button hover:bg-heading cursor-pointer text-white font-semibold py-3 px-6 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}
