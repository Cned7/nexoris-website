import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import TechHero from '../components/tech-development/TechHero'
import TechServiceCards from '../components/tech-development/ServiceCards'
import TechServices from '../components/tech-development/TechServices'

export const metadata: Metadata = {
  title: 'Custom Software, Mobile Apps & Cloud | Nexoris',
  description:
    'Nexoris designs and builds custom software, mobile apps, APIs, and cloud infrastructure that drive growth. Partner with us to deliver real results.',
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://nexoris.com/technology-development"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Nexoris Custom Software Solutions',
              url: 'https://nexoris.com/technology-development',
              description:
                'Custom software, mobile apps, APIs, DevOps, and cloud solutions tailored for scalable business growth.',
              provider: {
                '@type': 'Organization',
                name: 'Nexoris',
                url: 'https://nexoris.com',
              },
            }),
          }}
        />
      </Head>
      <main className='className="relative bg-background overflow-hidden mt-18 lg:mt-16 xl:mx-20'>
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
