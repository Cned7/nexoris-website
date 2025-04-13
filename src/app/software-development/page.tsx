import Head from 'next/head'
import Link from 'next/link'
import TechHero from '../../../components/development-services/TechHero'
import TechServiceCards from '../../../components/development-services/ServiceCards'
import TechServices from '../../../components/development-services/TechServices'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { Metadata } from 'next'

// Metadata for the page
export const metadata: Metadata = {
  title: 'Web, Mobile Apps, & Custom Solutions',
  description:
    'Nexoris designs and builds custom software, mobile apps, APIs, and cloud infrastructure that drive growth. Partner with us to deliver real results.',
  openGraph: {
    title: 'Nexoris Software Development Services',
    description:
      'Custom software, mobile apps, APIs, DevOps, and cloud solutions tailored for scalable business growth.',
    url: 'https://nexoristech.com/software-development-services',
    images: [{ url: 'https://nexoristech.com/images/og-image.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexoris Software Development Services',
    description:
      'Custom software, mobile apps, APIs, DevOps, and cloud solutions tailored for scalable business growth.',
    images: ['https://nexoristech.com/images/twitter-image.jpg'],
  },
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  {
    name: 'Software Development',
    href: '/development-services',
    isCurrentPage: true,
  },
]

// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexoris Technologies Ltd', // Use the exact name
  url: 'https://nexoristech.com', // Use the official website URL
  logo: 'https://nexoristech.com/logo.webp', // Use the correct logo URL
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1234567890', // Your phone number
    contactType: 'customer service',
    email: 'contact@nexoris.com', // Your email
  },
  sameAs: [
    'https://www.linkedin.com/company/nexoris-technologies', // Your LinkedIn
    'https://twitter.com/nexoris_tech', // Your Twitter
    // Add other social media profiles
  ],
}

// Service schema
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nexoris Software Development Services',
  url: 'https://nexoristech.com/software-development',
  description:
    'Custom software, mobile apps, APIs, DevOps, and cloud solutions tailored for scalable business growth.',
  provider: {
    '@type': 'Organization',
    name: 'Nexoris',
    url: 'https://nexoristech.com',
  },
}

export default function DevelopmentServicePage() {
  // Generate BreadcrumbList schema dynamically
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://nexoristech.com${item.href}`, // Ensure absolute URLs
    })),
  }

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://nexoristech.com/software-development"
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
          <TechHero />
        </section>

        {/* Service Cards section */}
        <section>
          <TechServiceCards />
        </section>

        {/* Additional services section */}
        <section>
          <TechServices />
        </section>
      </main>

      {/* Call to Action section */}
      <aside className="bg-background pb-5 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 font-heading text-heading">
          Ready to build something better?
        </h2>
        <Link
          href="/contact-us"
          className="inline-block px-4 py-3 text-secondary-text bg-button hover:bg-hover font-semibold rounded-xl transition-transform duration-300 hover:scale-105"
        >
          Talk to Our Team
        </Link>
      </aside>

      {/* JSON-LD Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      {/* JSON-LD Schema for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  )
}
