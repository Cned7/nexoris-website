import Head from 'next/head'
import Link from 'next/link'
import { Metadata } from 'next'
import TechHero from '../components/development-services/TechHero'
import TechServiceCards from '../components/development-services/ServiceCards'
import TechServices from '../components/development-services/TechServices'
import Breadcrumbs from '../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Custom Software, Mobile Apps & Cloud | Nexoris',
  description:
    'Nexoris designs and builds custom software, mobile apps, APIs, and cloud infrastructure that drive growth. Partner with us to deliver real results.',
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false }, // explicitly setting isCurrentPage to false
  {
    name: 'Software Development Services',
    href: '/development-services',
    isCurrentPage: true,
  }, // this is the current page
]

export default function DevelopmentServicePage() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://nexoristech.com/software-development-services"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Nexoris Software Development Services',
              url: 'https://nexoristech.com/software-development-services',
              description:
                'Custom software, mobile apps, APIs, DevOps, and cloud solutions tailored for scalable business growth.',
              provider: {
                '@type': 'Organization',
                name: 'Nexoris',
                url: 'https://nexoristech.com',
              },
            }),
          }}
        />
      </Head>

      <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TechHero />
        <TechServiceCards />
        <TechServices />
      </main>

      <section className="bg-background pb-5 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 font-heading text-heading">
          Ready to build something better?
        </h2>
        <Link
          href="/contact-us"
          className="inline-block px-4 py-3 text-secondary-text bg-button hover:bg-hover font-semibold rounded-xl transition-transform duration-300 hover:scale-105"
        >
          Talk to Our Team
        </Link>
      </section>
    </>
  )
}
