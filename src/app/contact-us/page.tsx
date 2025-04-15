import ContactPage from './ContactClient'
import { Metadata } from 'next'
import Head from 'next/head' // Import Head component
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Us | Nexoris Technologies',
  description:
    "Get in touch with Nexoris Technologies. Let’s talk about your ideas, projects, and challenges. We’re here to help you build what's next.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nexoristech.com/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Nexoris Technologies',
    description:
      'Reach out to Nexoris Technologies for innovative solutions in software, cloud, design, and strategy.',
    url: 'https://nexoristech.com/contact-us',
    type: 'website',
    images: [
      {
        url: 'https://nexoristech.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexoris Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Nexoris Technologies',
    description:
      'Let’s talk about your project and how we can work together to create meaningful tech.',
    images: ['https://nexoristech.com/og-image.jpg'],
  },
}

// Breadcrumbs array
const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  { name: 'Contact Us', href: '/contact-us', isCurrentPage: true },
]

// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexoris Technologies Ltd', // Replace with your full company name
  url: 'https://nexoristech.com/contact-us', // Replace with your Contact Us page URL
  logo: 'https://nexoristech.com/images/logo.webp', // Replace with your logo URL
  description:
    'Contact Nexoris Technologies Ltd for inquiries about our software development, design, marketing, and consulting services. Reach out to our team to discuss your project needs.', // Replace with a relevant description
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address', // Replace with your street address
    addressLocality: 'Lagos', // Replace with your city
    addressRegion: 'Lagos', // Replace with your region/state
    postalCode: 'Your Postal Code', // Replace with your postal code
    addressCountry: 'NG', // Replace with your country code (NG for Nigeria)
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+234-XXXXXXXXXXX', // Replace with your primary phone number (Nigerian format)
      contactType: 'customer service',
      areaServed: 'NG', // Serving Nigeria
      availableLanguage: ['en'], // Available in English
    },
    {
      '@type': 'ContactPoint',
      email: 'info@nexoris.com', // Replace with your primary contact email
      contactType: 'general inquiries',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/nexoris-technologies', // Replace with your LinkedIn URL
    'https://twitter.com/nexoris', // Replace with your Twitter URL
    // Add other social media profiles
  ],
}

export default function Contact() {
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
        {/* Organization Schema in Head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>
      {/* Render the ContactPage component which contains the form */}
      <ContactPage />
      {/* BreadcrumbList Schema in return (placed after the main content) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  )
}
