import Head from 'next/head'
import Hero from '@/components/design-experience/DesignHero'
import { ProductDesign } from '@/components/design-experience/ProductDesign'
import { UIUXDesign } from '@/components/design-experience/UiUxDesign'
import { ARVRDevelopment } from '@/components/design-experience/ArVrDevelopment'
import { DesignCtaSection } from '@/components/design-experience/UiUxCta'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import DesignServiceCards from '@/components/design-experience/DesignServicesCard'

export const metadata: Metadata = {
  title: 'Digital Experience & Design',
  description:
    'Bring your digital ideas to life with Nexoris. We offer UI/UX, product design, and AR/VR services that create memorable experiences.',
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  {
    name: 'Digital Experience & Design',
    href: '/digital-experience-design',
    isCurrentPage: true,
  },
]

// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexoris Technologies Ltd',
  url: 'https://nexoristech.com',
  logo: 'https://nexoristech.com/logo.webp',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1234567890',
    contactType: 'customer service',
    email: 'contact@nexoris.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/nexoris-technologies',
    'https://twitter.com/nexoris_tech',
  ],
}

// Service schema
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Design Services by Nexoris Technologies',
  url: 'https://nexoristech.com/digital-experience-design',
  description:
    'Nexoris offers UI/UX, product design, and AR/VR solutions that engage users and create impactful digital experiences.',
  provider: {
    '@type': 'Organization',
    name: 'Nexoris Technologies Ltd',
    url: 'https://nexoristech.com',
  },
}

export default function DesignServicePage() {
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
          href="https://nexoristech.com/digital-experience-design"
        />
        {/* Organization Schema in Head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>

      <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21">
        <section>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </section>

        <section>
          <Hero />
        </section>

        <section>
          <DesignServiceCards />
        </section>

        <section>
          <UIUXDesign />
        </section>

        <section>
          <ProductDesign />
        </section>

        <section>
          <ARVRDevelopment />
        </section>

        <section>
          <DesignCtaSection />
        </section>
      </main>

      {/* Service Schema in return */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* BreadcrumbList Schema in return */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  )
}
