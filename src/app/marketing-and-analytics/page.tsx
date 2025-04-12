import Head from 'next/head'
import Link from 'next/link'
import { Metadata } from 'next' // This import might not be needed if you're using the pages directory, check your Next.js version
import MarketingHero from '../components/marketing-analytics/MarketingHero'
import MarketingServiceCards from '../components/marketing-analytics/ServiceCards'
import MarketingServices from '../components/marketing-analytics/MarketingServices'
import Breadcrumbs from '../components/Breadcrumbs'

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

export default function MarketingAnalytics() {
  return (
    <>
      <Head>
        <title>SEO & Marketing Automation for Growth | Nexoris</title>
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
              name: 'SEO & Insights for Growth by Nexoris',
              url: 'https://nexoris.com/marketing-and-analytics',
              description:
                'Nexoris provides SEO, marketing automation, and analytics services to help you grow smarter, engage your audience, and make data-driven decisions.',
              provider: {
                '@type': 'Organization',
                name: 'Nexoris',
                url: 'https://nexoris.com',
              },
            }),
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
      <footer className="bg-background pb-5 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 font-heading text-heading">
          Ready to turn insights into growth and visibility into value?
        </h2>
        <Link
          href="/contact-us"
          className="inline-block px-4 py-3 mt-8 text-secondary-text bg-button hover:bg-hover font-semibold rounded-xl transition-transform duration-300 hover:scale-105"
        >
          Talk to Our Team
        </Link>
      </footer>
    </>
  )
}
