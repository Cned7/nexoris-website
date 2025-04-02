import React from 'react'
import Image from 'next/image'

interface Industry {
  title: string
  description: string
  image: string
}

const industries: Industry[] = [
  {
    title: 'FinTech',
    description:
      'Secure digital banking solutions, seamless payment systems, and fintech platforms built for trust and efficiency.',
    image: '/images/fintech.webp',
  },

  {
    title: 'E-Commerce',
    description:
      'High-performance e-commerce platforms with personalized shopping experiences and intuitive payment integrations.',
    image: '/images/e-commerce.webp',
  },

  {
    title: 'Education',
    description:
      'Next-gen digital learning platforms, adaptive learning tools, and seamless student management systems for a smarter future.',
    image: '/images/education.webp',
  },

  {
    title: 'Healthcare',
    description:
      'Innovative telehealth platforms, AI-powered diagnostics, and data-driven healthcare solutions that enhance patient care.',
    image: '/images/healthcare.webp',
  },
]

const IndustriesSection: React.FC = () => {
  return (
    <section className="bg-background mx-6 lg:mx-12 mt-10 lg:mt-15 xl:mx-21">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-heading mb-6 font-heading">
          The Industries We Serve
        </h2>
        <p className="text-text mb-12 text-lg max-w-3xl mx-auto font-base">
          We collaborate with visionary businesses across diverse industries,
          delivering tailored solutions that drive real-world impact.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="p-4 bg-background cursor-pointer rounded-2xl border border-button shadow-lg shadow-secondary-text hover:shadow-[#bfb9ef] transition-shadow duration-300 font-body font-base"
          >
            {/* Next.js Optimized Image */}
            <div className="relative w-full h-35">
              <Image
                src={industry.image}
                layout="fill"
                alt={industry.title}
                style={{ objectFit: 'cover' }}
                className="rounded-lg transition-opacity duration-300 opacity-90 group-hover:opacity-100"
              />
            </div>
            {/* Industry Content */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3 font-heading text-heading">{industry.title}</h3>
              <p className="text-body font-body">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IndustriesSection
