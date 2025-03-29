'use client';

import { FaCode, FaCloud, FaPalette, FaChartLine } from 'react-icons/fa';

const services = [
  {
    title: 'Technology & Development',
    description:
      'Custom software solutions, mobile apps, and scalable platforms. Built to solve complex problems and fuel growth.',
    icon: <FaCode className="text-cyan text-4xl lg:text-5xl mx-auto font-body font-light" />,
  },
  {
    title: 'Cloud & Automation',
    description:
      'Streamline operations, boost agility, and scale with confidence using our cloud solutions, DevOps engineering, and intelligent automation.',
    icon: <FaCloud className="text-cyan text-4xl lg:text-5xl mx-auto font-body font-light" />,
  },
  {
    title: 'Design & Experience',
    description:
      'Intuitive and human-centered designs. From concept to interface, we create digital experiences your customers will love.',
    icon: <FaPalette className="text-cyan text-4xl lg:text-5xl mx-auto font-body font-light" />,
  },
  {
    title: 'Marketing & Growth',
    description:
      'Data-driven marketing solutions. From customer acquisition to retention, we help your brand thrive in a competitive landscape.',
    icon: <FaChartLine className="text-cyan text-4xl lg:text-5xl mx-auto font-body font-light" />,
  },
];

export default function OurServices() {
  return (
    <section className="bg-background py-8 md:py-16 px-6 md:px-16 text-silver">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray max-w-2xl mx-auto mb-12">
          Empowering Progress. Enabling Possibilities. Discover how Nexoris helps businesses grow, innovate, and lead their industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 cursor-pointer rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
