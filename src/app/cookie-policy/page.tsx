import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head' // Import the Head component
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cookie Policy | Nexoris Technologies',
  description:
    'Learn about the cookie policy of Nexoris Technologies and how we use cookies on our website.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://nexoristech.com/cookie-policy',
  },
  // You can include other metadata like openGraph and twitter if needed
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  {
    name: 'Cookie Policy',
    href: '/cookie-policy',
    isCurrentPage: true,
  },
]

const CookiePolicy = () => {
  // BreadcrumbList schema
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://nexoristech.com${crumb.href}`,
    })),
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbsSchema),
          }}
        />
      </Head>
      <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-32 xl:mx-21">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className="text-3xl md:text-4xl font-bold text-heading font-heading  text-center mb-4">
          Cookie Policy
        </h1>
        <p className="text-lg text-heading font-semibold text-lg my-8 text-center">
          Effective Date: April 2025
        </p>

        <section className="space-y-6 text-body text-lg">
          <h2 className="text-2xl font-semibold text-heading">
            1. Introduction
          </h2>
          <p>
            At Nexoris Technologies Ltd, we believe in being clear and open
            about how we collect and use data. This Cookie Policy explains what
            cookies are, how we use them, and your choices when it comes to
            managing cookies on our website.
          </p>

          <article className="text-text">
            <h2 className="text-2xl">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer,
              tablet, or mobile) when you visit a website. They help websites
              remember your preferences, improve performance, and provide a more
              personalized experience.
            </p>
            <h2 className="text-2xl">Why we use cookies</h2>
            <p>We use cookies for a few key reasons:</p>
            <ul className="disc text-text font-lg">
              <li>
                <strong>To make our website work properly</strong> – some
                cookies are essential.
              </li>
              <li>
                <strong>To understand how people use our site</strong> – so we
                can keep improving it.
              </li>
              <li>
                <strong>To personalize your experience</strong> – based on your
                preferences and behavior.
              </li>
              <li>
                <strong>To serve relevant marketing</strong> – so our ads are
                meaningful and not spammy.
              </li>
            </ul>
            <h2>Types of cookies we use</h2>
          </article>
        </section>
      </main>
    </>
  )
}

export default CookiePolicy
