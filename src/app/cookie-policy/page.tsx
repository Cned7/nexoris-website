import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head' // Import the Head component
import Breadcrumbs from '../components/Breadcrumbs'

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
            Welcome to Nexoris Technologies (&quot;we&quot;, &quot;our&quot;,
            &quot;us&quot;). This Cookie Policy explains what cookies are, how
            we use them, and your choices regarding cookies. By using our
            website, you consent to the use of cookies as described in this
            policy.
          </p>

          {/* ... rest of your Cookie Policy content ... */}
        </section>
      </main>
    </>
  )
}

export default CookiePolicy
