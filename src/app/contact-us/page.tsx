'use client'

import { useState } from 'react'
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
    event.preventDefault()

    // Type-cast event.target to HTMLFormElement
    const form = event.target as HTMLFormElement

    // Access form fields and cast them individually
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const company = (form.elements.namedItem('company') as HTMLInputElement)
      .value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
      .value

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      return
    }

    // Proceed with form submission logic
    // (You can log or submit the data here)
    form.submit()
  }

  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21 bg-secondary-background">
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

        {/* Contact Details */}
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

        {/* Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit} // Using the handleSubmit function to process form submission
            action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            method="POST"
            className="space-y-4 bg-background rounded-lg shadow shadow-[#bfb9ef] p-4 lg:p-8"
          >
            {/* Hidden inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://nexoris-liard.vercel.app/thank-you" // Fixed URL
            />
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

            {/* Service Dropdown */}
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
                I consent to the processing of my data in accordance with
                Nexoris Technologies&apos; privacy policy.
              </span>
            </label>

            <button
              type="submit"
              className="bg-button hover:bg-heading cursor-pointer text-white font-semibold py-3 px-6 rounded-md transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
