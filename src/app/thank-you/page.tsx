'use client'

// pages/thank-you.tsx

import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ThankYouPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect the user to the homepage after a few seconds (optional)
    setTimeout(() => {
      router.push('/') // You can redirect to any page you prefer after submission.
    }, 5000)
  }, [router])

  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21 bg-secondary-background">
      <section className="max-w-4xl mx-auto px-6 md:py-8 container text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-heading font-heading mb-4">
          Thank You for Reaching Out!
        </h1>
        <p className="text-lg text-body my-8 max-w-2xl mx-auto">
          We&apos;ve received your message and our team will get back to you
          shortly. We&apos;re excited to explore how we can collaborate and
          bring your vision to life. Thank you for considering Nexoris
          Technologies!
        </p>
        <p className="text-lg text-body my-4 max-w-2xl mx-auto">
          In the meantime, feel free to{' '}
          <a
            href="mailto:hello@nexoristech.com"
            className="text-button font-semibold"
          >
            email us directly
          </a>{' '}
          for anything urgent or to discuss further.
        </p>
        <div className="mt-12">
          <p className="text-lg text-body">
            You will be redirected to the homepage shortly.
          </p>
        </div>
      </section>
    </main>
  )
}

export default ThankYouPage
