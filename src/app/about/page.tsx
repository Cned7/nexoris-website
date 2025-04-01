// app/about/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Nexoris Technologies – Enabling Possibilities',
  description:
    'Learn more about Nexoris Technologies, a leader in digital transformation, AI-driven automation, and cutting-edge technology solutions.',
  openGraph: {
    title: 'About Nexoris Technologies',
    description:
      'Discover our innovative approach to digital transformation, AI-driven automation, and high-quality technology solutions.',
    url: 'https://nexoristech.com/about',
    type: 'website',
    images: [{ url: '/about-og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Nexoris Technologies',
    description:
      'Explore Nexoris Technologies, a leading provider of AI, automation, and digital transformation solutions.',
    images: ['/about-og-image.jpg'],
  },
}

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexoris Technologies",
  "url": "https://nexoristech.com/about",
  "logo": "/logo.png",
  "description":
    "Nexoris Technologies is a leading provider of AI-driven digital transformation solutions, helping businesses achieve innovation, scalability, and efficiency.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Avenue",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "Country",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+123456789",
    "contactType": "Customer Service",
    "areaServed": "Worldwide",
    "availableLanguage": "English",
  },
}

// app/about/page.tsx
import { FC } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const AboutPage: FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      {/* Hero Section */}
      <section className="text-center my-16 container mx-auto">
        <h1 className="text-4xl font-extrabold text-heading mb-4">About Nexoris Technologies</h1>
        <article className="text-xl text-text mb-8 max-w-2xl mx-auto">
          <i><strong>Ideate. Build. Succeed.</strong></i> 
          <p className='mt-6 text-base'>At Nexoris Technologies, we don’t just provide technology solutions - we redefine what’s possible with intelligent automation and AI-driven digital transformation. Our proprietary frameworks and innovative methodologies empower businesses to accelerate time-to-market, enhance efficiency, and achieve sustainable growth.
          </p>
        </article>
        <div className="relative mb-12 items-center h-[500px] mx-auto container">
          <Image
            src="/images/about-us.webp"
            alt="About Nexoris Technologies"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary-text max-w-52">
            <h2 className="text-3xl font-semibold">Innovating the Future with Technology</h2>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Who We Are</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nextoris Technologies was founded with a bold vision: to bridge the gap between groundbreaking ideas and scalable solutions. What began in a small co-working space with a handful of passionate engineers has evolved into a global technology powerhouse. Today, we collaborate with startups and enterprises worldwide, designing secure, scalable, and future-proof digital products. Our ethos remains the same: **technology should be an enabler, not a barrier.**
        </p>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We pioneer the future with cutting-edge technology that drives transformative change across industries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Building strong partnerships to create customized solutions tailored to your unique needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We are committed to delivering high-quality, scalable, and secure solutions that exceed expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Agility</h3>
            <p className="text-gray-600">
              Rapid adaptation to new technological advancements and market shifts to stay ahead of the curve.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer-Centricity</h3>
            <p className="text-gray-600">
              Every solution is designed with the end-user in mind to ensure maximum impact and satisfaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We create solutions that not only drive business success but also contribute to a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What We Do</h2>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          We offer a comprehensive suite of services designed to support businesses at every stage of their digital transformation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Development</h3>
            <p className="text-gray-600">
              Custom-built, high-performance applications tailored to your business.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">
              Secure, agile cloud infrastructure for seamless scalability and performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cybersecurity</h3>
            <p className="text-text">
              Advanced security frameworks to protect your business from evolving threats.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Build the Future Together</h2>
        <p className="text-lg mb-8">
          At Nexoris Technologies, we don’t just develop solutions—we ignite possibilities. Whether you're looking to streamline operations, enhance customer experiences, or pioneer new digital ventures, we’re here to make it happen.
        </p>
        <a
          href="/contact"
          className="bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-lg inline-flex items-center"
        >
          Start Your Digital Transformation Today
          <FaArrowRight className="ml-2" />
        </a>
      </section>
    </div>
  )
}

export default AboutPage
