import Head from 'next/head'
import Hero from '../components/design-experience/DesignHero'
import { ProductDesign } from '../components/design-experience/ProductDesign'
import { UIUXDesign } from '../components/design-experience/UiUxDesign'
import { ARVRDevelopment } from '../components/design-experience/ArVrDevelopment'
import { DesignCtaSection } from '../components/design-experience/UiUxCta'
import Breadcrumbs from '../components/Breadcrumbs'
import { Metadata } from 'next'
import DesignServiceCards from '../components/design-experience/DesignServicesCard'

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

export default function DesignServicePage() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://nexoristech.com/digital-experience-design"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
        <Hero />
        <DesignServiceCards />
        <UIUXDesign />
        <ProductDesign />
        <ARVRDevelopment />
        <DesignCtaSection />
      </main>
    </>
  )
}
