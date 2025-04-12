import Head from 'next/head'
import Link from 'next/link'
import { DesignCtaSection } from '../components/design-experience/UiUxCta'
import Breadcrumbs from '../components/Breadcrumbs'
import { Metadata } from 'next'
import ConsultingServiceCards from '../components/consulting-service/ConsultingServiceCards'
import ConsultingHero from '../components/consulting-service/ConsultingHero'
import ConsultingServices from '../components/consulting-service/ConsultationServices'
import { ConsultingCtaSection } from '../components/consulting-service/ConsultingCta'

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

export default function ConsultingServicePage() {
  return (
    <>
      <Head>
        <title>Smart Consulting for Growing Teams</title>
        <link
          rel="canonical"
          href="https://nexoristech.com/consulting-and-innovation"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Nexoris Technologies Consulting & Innovation',
              url: 'https://nexoristech.com/consulting-and-innovation',
              description:
                'Nexoris Technologies offers expert consulting and innovative solutions to help startups and small businesses achieve their digital transformation, product growth, and SEO objectives.',
              provider: {
                '@type': 'Organization',
                name: 'Nexoris Technologies Ltd',
                url: 'https://nexoristech.com',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumbs.map((crumb, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: crumb.name,
                item: `https://nexoristech.com${crumb.href}`,
              })),
            }),
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
    </>
  )
}
