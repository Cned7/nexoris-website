import Head from 'next/head'
import Link from 'next/link'
import { Metadata } from 'next'
import MarketingHero from '@/components/marketing-analytics/MarketingHero'
import MarketingServiceCards from '@/components/marketing-analytics/ServiceCards'
import MarketingServices from '@/components/marketing-analytics/MarketingServices'
import Breadcrumbs from '@/components/Breadcrumbs'

// Metadata for the page
export const metadata: Metadata = {
  title: 'SEO, Content Marketing & Analytics',
  description:
    " Let's turn your insights into growth. We specialize in SEO, content marketing, and data analytics to help you engage the right audience and scale your business",
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  {
    name: 'Marketing & Analytics',
    href: '/marketing-and-analytics',
    isCurrentPage: true,
  },
]

// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexoris', // Use the exact name
  url: 'https://nexoris.com', // Use the official website URL
  logo: 'https://nexoris.com/logo.webp', // Use the correct logo URL
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1234567890', // Your phone number
    contactType: 'customer service',
    email: 'contact@nexoris.com', // Your email
  },
  sameAs: [
    'https://www.linkedin.com/company/nexoris', // Your LinkedIn
    'https://twitter.com/nexoris', // Your Twitter
    // Add other social media profiles
  ],
}

// Service schema
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO, Content & Analytics by Nexoris',
  url: 'https://nexoris.com/marketing-and-analytics',
  description:
    'Nexoris provides SEO, content marketing, and data analytics services to help you grow smarter, engage your audience, and make data-driven decisions.',
  provider: {
    '@type': 'Organization',
    name: 'Nexoris',
    url: 'https://nexoris.com',
  },
}

export default function MarketingAnalytics() {
  // Generate BreadcrumbList schema dynamically
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://nexoris.com${crumb.href}`,
    })),
  }

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://nexoris.com/marketing-and-analytics"
        />
        {/* Organization Schema in Head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>

      {/* Main content section */}
      <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21">
        {/* Breadcrumbs section */}
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero section */}
        <section>
          <MarketingHero />
        </section>

        {/* Service Cards section */}
        <section>
          <MarketingServiceCards />
        </section>

        {/* Additional marketing services section */}
        <section>
          <MarketingServices />
        </section>
      </main>

      {/* Call to Action section */}
      <aside className="bg-background pb-5 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 font-heading text-heading">
          Ready to turn insights into growth and visibility into value?
        </h2>
        <Link
          href="/contact-us"
          className="inline-block px-4 py-3 mt-8 text-secondary-text bg-button hover:bg-hover font-semibold rounded-xl transition-transform duration-300 hover:scale-105"
        >
          Talk to Our Team
        </Link>
      </aside>

      {/* JSON-LD Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* JSON-LD Schema for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  )
}
