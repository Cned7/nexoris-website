'use client'

import { FaCode, FaCloud, FaPalette, FaChartLine } from 'react-icons/fa'
import Link from 'next/link'

const services = [
  {
    title: 'Software Development',
    description:
      'Custom software solutions, mobile apps, and scalable platforms. Built to solve complex problems and fuel growth.',
    Icon: FaCode,
    link: '/software-development',
  },
  {
    title: 'Consulting & Immovation',
    description:
      'Boost efficiency, drive innovation, and scale confidently with our expert consulting and cloud solutions..',
    Icon: FaCloud,
    link: '/consulting-and-innovation',
  },
  {
    title: 'Design & Experience',
    description:
      'Intuitive and human-centered designs. From concept to interface, we create digital experiences your customers will love.',
    Icon: FaPalette,
    link: '/digital-experience-design',
  },
  {
    title: 'Marketing & Analytics',
    description:
      'Data-driven marketing solutions. From customer acquisition to retention, we help your brand thrive in a competitive landscape.',
    Icon: FaChartLine,
    link: '/marketing-and-analytics',
  },
]

export default function OurServices() {
  return (
    <section className="mt-10 lg:mt-15">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-heading font-heading">
          Our Services
        </h2>
        <p className="text-text max-w-2xl mx-auto mb-5 font-body text-lg">
          Discover how Nexoris helps businesses grow, innovate, and lead their
          industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {services.map(({ title, description, Icon, link }, index) => (
            <div
              key={index}
              className="p-4 bg-background cursor-pointer rounded-2xl border border-button shadow-lg shadow-secondary-text hover:shadow-[#bfb9ef] transition-shadow duration-300"
            >
              <div className="mb-4">
                <Icon
                  className="text-hover text-4xl lg:text-4xl mx-auto font-body font-light"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading text-heading">
                {title}
              </h3>
              <p className="text-text font-body text-lg mt-3">{description}</p>
              <div className="mt-6 text-center">
                <Link href={link}>
                  <span className="inline-block bg-heading text-secondary-text px-4 py-2 rounded-lg font-normal text-base hover:bg-button transition duration-300 font-heading">
                    View Services
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
