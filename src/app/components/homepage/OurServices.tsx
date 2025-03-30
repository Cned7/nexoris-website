'use client';

import { FaCode, FaCloud, FaPalette, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    title: 'Technology & Development',
    description:
      'Custom software solutions, mobile apps, and scalable platforms. Built to solve complex problems and fuel growth.',
    Icon: FaCode,
    link: '/technology-development',
  },
  {
    title: 'Cloud & Automation',
    description:
      'Streamline operations, boost agility, and scale with confidence using our cloud solutions, DevOps engineering, and intelligent automation.',
    Icon: FaCloud,
    link: '/cloud-automation',
  },
  {
    title: 'Design & Experience',
    description:
      'Intuitive and human-centered designs. From concept to interface, we create digital experiences your customers will love.',
    Icon: FaPalette,
    link: '/design-experience',
  },
  {
    title: 'Marketing & Growth',
    description:
      'Data-driven marketing solutions. From customer acquisition to retention, we help your brand thrive in a competitive landscape.',
    Icon: FaChartLine,
    link: '/marketing-growth',
  },
];

export default function OurServices() {
  return (
    <section className="bg-background py-8 lg:py-16 px-6 md:px-8 text-silver container mx-auto mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray max-w-2xl mx-auto mb-12">
          Empowering Progress. Enabling Possibilities. Discover how Nexoris helps businesses grow, innovate, and lead their industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ title, description, Icon, link }, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 cursor-pointer rounded-2xl shadow-lg hover:shadow-teal transition-shadow duration-300"
            >
              <div className="mb-4">
                <Icon className="text-cyan-500 text-4xl lg:text-5xl mx-auto font-body font-light" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray mt-3">{description}</p>
              <div className="mt-6 text-center">
                <Link href={link}>
                  <span className="inline-block bg-teal text-silver px-5 py-2 rounded-lg font-semibold text-sm hover:bg-purple transition duration-300">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
