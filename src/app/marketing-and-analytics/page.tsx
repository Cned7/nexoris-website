import Head from 'next/head'
import Link from 'next/link'
import { Metadata } from 'next'
import MarketingHero from '../components/marketing-analytics/MarketingHero'
import MarketingServiceCards from '../components/marketing-analytics/ServiceCards'
import MarketingServices from '../components/marketing-analytics/MarketingServices'
import Breadcrumbs from '../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'SEO, Marketing Automation & Analytics | Nexoris Growth Tools',
  description:
    'Drive growth with Nexoris. From SEO and content marketing to automation and analytics, we help you scale smarter and connect with the right audience.',
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false }, // explicitly setting isCurrentPage to false
  {
    name: 'Marketing & Analytics',
    href: '/marketing-and-analytics',
    isCurrentPage: true,
  }, // this is the current page
]

export default function MarketingAnalytics() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://nexoris.com/marketing-and-analytics"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Nexoris Marketing and Analytics',
              url: 'https://nexoris.com/marketing-and-analytics',
              description:
                'SEO & Content Marketing, Analytics & Reporting and Marketing Automation to help you grow smarter and measure what matters.',
              provider: {
                '@type': 'Organization',
                name: 'Nexoris',
                url: 'https://nexoris.com',
              },
            }),
          }}
        />
      </Head>

      <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <MarketingHero />
        <MarketingServiceCards />
        <MarketingServices />
      </main>

      <section className="bg-background pb-5 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 font-heading text-heading">
          Ready to turn insights into growth and visibility into value?
        </h2>
        <Link
          href="/contact-us"
          className="inline-block px-4 py-3 mt-8 text-secondary-text bg-button hover:bg-hover font-semibold rounded-xl transition-transform duration-300 hover:scale-105"
        >
          Talk to Our Team
        </Link>
      </section>
    </>
  )
}
