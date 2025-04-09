import Head from 'next/head'
import Hero from '../components/design-experience/DesignHero'
import { ProductDesign } from '../components/design-experience/ProductDesign'
import { UIUXConsulting } from '../components/design-experience/UiUxConsult'
import { ARAVSolutions } from '../components/design-experience/ArAvSolutions'
import { DesignCtaSection } from '../components/design-experience/UiUxCta'
import Breadcrumbs from '../components/Breadcrumbs'
import { Metadata } from 'next'
import DesignServiceCards from '../components/design-experience/DesignServicesCard'

export const metadata: Metadata = {
  title: 'Product Design, UI/UX Consulting & AR/VR | Nexoris',
  description:
    'Nexoris creates user-centered digital experiences that drive engagement. From product design and UX consulting to immersive AR/VR solutions, we help you shape the future.',
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  {
    name: 'Design & Experience',
    href: '/design-experience',
    isCurrentPage: true,
  },
]

export default function DesignProductPage() {
  return (
    <>
      <Head>
        <title>Product Design, UI/UX Consulting & AR/VR | Nexoris</title>
        <meta
          name="description"
          content="Nexoris creates user-centered digital experiences that drive engagement. From product design and UX consulting to immersive AR/VR solutions, we help you shape the future."
        />
        <link rel="canonical" href="https://nexoris.com/design-experience" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Nexoris Design & Experience Solutions',
              url: 'https://nexoris.com/design-experience',
              description:
                'Nexoris delivers product design, UX consulting, and AR/VR experiences that engage, inspire, and convert.',
              provider: {
                '@type': 'Organization',
                name: 'Nexoris Technologies Ltd',
                url: 'https://nexoris.com',
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
                item: `https://nexoris.com${crumb.href}`,
              })),
            }),
          }}
        />
      </Head>

      <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Hero />
        <DesignServiceCards />
        <ProductDesign />
        <UIUXConsulting />
        <ARAVSolutions />
        <DesignCtaSection />
      </main>
    </>
  )
}
