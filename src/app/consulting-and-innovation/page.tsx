import Head from 'next/head'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { Metadata } from 'next'
import ConsultingServiceCards from '../../../components/consulting-service/ConsultingServiceCards'
import ConsultingHero from '../../../components/consulting-service/ConsultingHero'
import ConsultingServices from '../../../components/consulting-service/ConsultationServices'
import { ConsultingCtaSection } from '../../../components/consulting-service/ConsultingCta'

// Metadata for the page
export const metadata: Metadata = {
  title: 'Smart Consulting for Growing Teams',
  description:
    'At Nexoris Technologies, we help startups and small businesses grow with expert consulting in digital transformation, product development, and SEO.',
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  {
    name: 'Consulting & Innovation',
    href: '/consulting-and-innovation',
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

// Service schema (aligning with the simpler structure)
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nexoris Consulting & Innovation Services', // More concise name
  url: 'https://nexoristech.com/consulting-and-innovation',
  description:
    'Expert consulting in digital transformation, product development, and SEO to help startups and small businesses grow.', // Shorter description
  provider: {
    '@type': 'Organization',
    name: 'Nexoris', // Shorter, consistent name
    url: 'https://nexoristech.com',
  },
}

export default function ConsultingServicePage() {
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
        <link
          rel="canonical"
          href="https://nexoristech.com/consulting-and-innovation"
        />
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>

      <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <section aria-labelledby="consulting-hero">
          <ConsultingHero />
        </section>

        <section aria-labelledby="consulting-service-cards">
          <ConsultingServiceCards />
        </section>

        <section aria-labelledby="consulting-services">
          <ConsultingServices />
        </section>

        <section
          aria-labelledby="cta-section"
          className="bg-background pb-5 px-6 text-center"
        >
          <ConsultingCtaSection />
        </section>
      </main>
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
