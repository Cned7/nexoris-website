'use client'

import {
  FaSearch,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaSync,
} from 'react-icons/fa'

const steps = [
  {
    title: 'Consultation — Identifying Opportunities & Challenges',
    description:
      'We gather information about your operations, and business processes to identify obstacles slowing your growth. By analyzing workflows and market trends, we identify opportunities for growth. This sets the foundation for innovation and measurable results.',
    Icon: FaSearch,
  },
  {
    title: 'Strategy & Planning — Building a Custom Roadmap',
    description:
      'With a data-driven execution plan, we map out a clear, step-by-step roadmap for efficiency and scalability. This includes defining the scope, timelines, and resources required to ensure seamless execution. Finally, we align the best technologies with your strategic goals to maximize impact.',
    Icon: FaLightbulb,
  },
  {
    title: 'Research & Prototyping — Validating the Approach',
    description:
      'Bringing ideas to life begins with wireframes, prototypes, and feasibility models, ensuring a clear vision before full execution. With real feedback from stakeholders and users, we refine the concept, while testing AI models, automation workflows, and data insights to mitigate risks.',
    Icon: FaPencilRuler,
  },
  {
    title: 'Development & Execution — Bringing Ideas to Life',
    description:
      'With a solid strategy in place, the next step is transforming plans into scalable, high-performance solutions. Whether it’s software, AI-powered automation, or cloud infrastructure, every build is designed for long-term efficiency. Security and seamless functionality are ensured through robust cybersecurity, API integrations, and automation.',
    Icon: FaCode,
  },
  {
    title: 'Testing, Optimization & Quality Assurance',
    description:
      'We conduct comprehensive performance & security testing, identifying vulnerabilities and optimizing for reliability. SEO, UX & conversion rate optimization are also performed to ensure your digital assets drive engagement, traffic, and conversions.',
    Icon: FaCheckCircle,
  },
  {
    title: 'Launch & Deployment — Delivering Impact',
    description:
      'At this stage, your solution is deployed smoothly, integrating effortlessly with existing business operations. Every aspect is optimized for scalability, security, and long-term performance. Whether launching a product, software, or digital campaign, our strategic execution ensures maximum impact and market success.',
    Icon: FaRocket,
  },
  {
    title: 'Ongoing Support & Continuous Innovation',
    description:
      'Post-launch, we monitor performance, implement updates, and fine-tune optimizations to keep your solution running at its best. Real-time data insights drive continuous improvements, while our long-term consulting and innovation strategies ensure you stay ahead in an ever-evolving market.',
    Icon: FaSync,
  },
]

export default function OurProcess() {
  return (
    <section className="relative bg-background border border-button rounded-lg mx-4 md:mx-6 lg:mx-12 mt-6 lg:mt-12 xl:mx-21 overflow-hidden xl-mt-5 p-6">
      <div className="w-full mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-heading font-heading py-5">
          Our Step-by-Step Process: From Vision to Success
        </h2>
        <p className="text-text max-w-3xl mx-auto mt-4 font-body text-base">
          At Nexoris Technologies, we eliminate roadblocks and unlock new
          possibilities with a structured, adaptable approach that drives faster
          innovation, seamless execution, and long-term success.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        {steps.map(({ title, description, Icon }, index) => (
          <div key={index} className="relative flex items-start mb-5 lg:mb-8 -mx-3 md:mx-0">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-button rounded-full flex items-center justify-center shadow-lg">
              <Icon className="text-3xl text-secondary-text" />
            </div>
            <div className="px-3 lg:pl-6">
              <h3 className="text-xl font-semibold text-heading font-heading">{title}</h3>
              <p className="text-text w-full lg:w-2xl pt-3 font-body">{description}</p>
            </div>
            {index !== steps.length - 1 && (
              <div className="absolute left-5 md:left-7 top-16 w-1 h-14 bg-button"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
