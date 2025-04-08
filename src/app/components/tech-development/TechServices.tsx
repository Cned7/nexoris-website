import Image from 'next/image'
import Link from 'next/link'

type Service = {
  id: string
  title: string
  img: string
  alt: string
  description: string[]
}

const services: Service[] = [
  {
    id: 'custom',
    title: 'Custom Software Development',
    img: '/images/software-development.webp',
    alt: 'Custom software development illustration',
    description: [
      'Every business is unique — your software should be too. Nexoris builds custom solutions that solve real problems and deliver measurable results, from internal tools to SaaS products. We’re your partner from idea to execution.',

      'We start by understanding your goals and pain points. Then, through agile development, we deliver fast, collaborate closely, and continuously optimize — creating software that drives growth, efficiency, and a real edge.',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    img: '/images/mobile-app-development.webp',
    alt: 'Mobile app development illustration',
    description: [
      'In today’s mobile-first world, your brand needs more than visibility — it needs seamless user experiences. Nexoris builds high-performance iOS and Android apps tailored to your goals, using native and cross-platform tools like React Native and Flutter.',

      "We handle everything from UX/UI design to backend integration and App Store deployment. Whether you're launching a new startup or adding mobile support to an existing platform, we make sure your app performs, looks great, and scales with confidence.",
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    img: '/images/cloud-solution.webp',
    alt: 'Cloud computing illustration',
    description: [
      'Modern businesses need scalable, secure infrastructure — and that’s exactly what we build. Nexoris architects cloud solutions with AWS, Azure, and Google Cloud to power your growth while reducing complexity. From cloud migration to serverless apps, we tailor every environment to your exact workload.',

      'We follow best practices for automation, compliance, and cost control — so you get resilience without surprises. Whether you’re optimizing or migrating, we guide every step.',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    img: '/images/devops.webp',
    alt: 'DevOps illustration',
    description: [
      'Speed and stability don’t have to be a trade-off. Nexoris helps engineering teams deliver faster and safer with efficient CI/CD pipelines, automated deployments, and modern infrastructure-as-code practices. We integrate tools, enforce best practices, and embed DevOps culture.',

      'From Docker and Kubernetes to GitOps and Terraform, we eliminate friction and reduce bugs — helping you ship better software, faster.',
    ],
  },
  {
    id: 'api',
    title: 'API Development & Integration',
    img: '/images/api-development.webp',
    alt: 'API development illustration',
    description: [
      'APIs connect your systems and power new capabilities. Nexoris builds secure, scalable APIs and integrates third-party services like CRMs, payments, or analytics tools. Every integration is fast, clean, and built for long-term use.',

      'Whether you’re connecting legacy systems or launching a modern platform, we make sure your data flows smoothly, securely, and reliably.',
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    img: '/images/cybersecurity.webp',
    alt: 'Cybersecurity illustration',
    description: [
      'In today’s digital world, security isn’t optional — it’s foundational. At Nexoris, we embed security best practices into every layer of your tech stack. From secure code and encryption to compliance and threat monitoring, we help you protect what matters most.',

      'Our goal is simple: help you move fast, innovate freely, and maintain trust with your users — without compromising on safety.',
    ],
  },
]

const TechServices = () => {
  return (
    <section className="bg-secondary-background py-2 px-4 sm:px-6 lg:px-12 xl:px-20 my-12">
      {services.map(({ id, title, img, alt, description }, index) => (
        <article
          key={id}
          id={id}
          aria-labelledby={`heading-${id}`}
          className={`group transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] max-w-6xl mx-auto my-8 flex flex-col lg:flex-row ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          } items-center gap-10 bg-background shadow-md rounded-2xl px-6 lg:px-10 py-10 cursor-pointer`}
        >
          {/* Text Section */}
          <div className="lg:w-1/2 order-2 md:order-1">
            <h2
              id={`heading-${id}`}
              className="text-3xl font-bold mb-4 font-heading text-heading lg:mt-2"
            >
              {title}
            </h2>
            <div className="text-body font-body text-lg space-y-5 leading-relaxed">
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Link href="/contact-us">
                <span className="text-heading underline hover:text-button">
                  Let’s Build Together
                </span>
              </Link>
              <p className="text-base text-muted mt-2 italic">
                We’re just one message away from starting something great.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src={img}
                alt={alt}
                layout="responsive"
                width={600}
                height={300}
                loading="eager" // disables lazy loading
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw" // Adjust sizes for responsiveness
              />
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default TechServices
