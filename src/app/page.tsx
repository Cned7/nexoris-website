import HomeHero from './components/homepage/Hero'
import OurServices from './components/homepage/OurServices'
import WhyNexoris from './components/homepage/WhyNexoris'
import IndustriesSection from './components/homepage/IndustriesSection'
import OurProcess from './components/homepage/OurProcess'
import TechStack from './components/homepage/TechStack'
import Faqs from './components/homepage/Faqs'
import Blog from './components/homepage/Blog'
import Schema from './components/Schema'

export const metadata = {
  title: 'Next-Gen Software Solutions | Nexoris Technologies Ltd',
  description:
    'Nexoris Technologies delivers cutting-edge software development, cloud solutions, product design, and digital transformation services. Build the future with us.',

  openGraph: {
    title: 'Next-Gen Software Solutions | Nexoris Technologies',
    description:
      'Leading innovation in software development, cloud solutions, and digital transformation.',
    url: 'https://nexoris-liard.vercel.app/',
    images: [{ url: 'https://nexoris-liard.vercel.app/og-image.jpg' }],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Next-Gen Software Solutions | Nexoris Technologies',
    description:
      'Empowering businesses with advanced software solutions and cloud technologies.',
    images: ['https://nexoris-liard.vercel.app/twitter-image.jpg'],
  },
}

// JSON-LD Schema for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexoris Technologies Ltd',
  url: 'https://nexoris-liard.vercel.app/',
  logo: 'https://nexoris-liard.vercel.app/logo.webp',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1234567890', // Replace with actual contact number
    contactType: 'customer service',
    email: 'contact@nexoris.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/nexoris-technologies',
    'https://twitter.com/nexoris_tech',
  ],
}

// FAQ Schema (JSON-LD)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Nexoris different from other technology firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nexoris focuses on innovation-first, scalable solutions tailored to each client’s needs. We combine expertise in software, automation, and digital transformation to drive business growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Nexoris offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide custom software development, cloud solutions, AI-driven automation, SEO & content marketing, UX/UI design, and digital transformation consulting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who does Nexoris work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clients range from startups to enterprises in FinTech, Healthcare, E-commerce, Manufacturing, Education, Retail, Logistics, and AI-driven businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing support and maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We provide post-launch support, maintenance, and continuous optimization to ensure long-term performance and adaptability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with Nexoris?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply contact us through our form, book a free consultation, or send an email to discuss your project and partnership opportunities.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-28 lg:mt-36 xl:mx-21">
      {/* Schema for SEO */}
      <Schema schema={organizationSchema} />

      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section>
        <HomeHero />
      </section>

      <section>
        <OurServices />
      </section>

      <section>
        <WhyNexoris />
      </section>

      <section>
        <IndustriesSection />
      </section>

      <section>
        <OurProcess />
      </section>

      <section>
        <TechStack />
      </section>

      <section>
        <Faqs />
      </section>

      <section>
        <Blog />
      </section>
    </main>
  )
}
