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
    alt: 'Custom software development',
    description: [
      "We build robust, secure, and scalable custom applications that solve complex business problems. Whether you're launching a B2B platform, internal tool, or client-facing web app, our team develops tailored solutions that align with your workflows, goals, and growth strategy",
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    img: '/images/mobile-app-development.webp',
    alt: 'Mobile app development',
    description: [
      'We design and develop cross-platform (React Native, Flutter) and native (iOS/Android) mobile apps with clean interfaces and high performance. From idea to deployment, we focus on usability, responsiveness, and stability to keep your users engaged.',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    img: '/images/cloud-solution.webp',
    alt: 'Cloud computing',
    description: [
      'Build for the future with cloud-native architecture. We help businesses migrate, manage, and optimize applications on AWS, Google Cloud, and Azure, improving uptime, scaling seamlessly, and reducing costs through smart cloud practices.',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    img: '/images/devops.webp',
    alt: 'DevOps',
    description: [
      'Deliver faster, safer, and with confidence. We set up CI/CD pipelines, infrastructure as code, automated testing, and container orchestration using tools like Docker, Kubernetes, and GitHub Actions, empowering your teams to ship reliably.',
    ],
  },
  {
    id: 'api',
    title: 'API Development & Integration',
    img: '/images/api-development.webp',
    alt: 'API development',
    description: [
      'Modern platforms rely on clean, reliable APIs. We develop RESTful and GraphQL APIs, as well as integrate third-party services like CRMs, ERPs, payment gateways,and  cloud tools into your infrastructure, creating a unified and efficient system.',
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity Solutions',
    img: '/images/cybersecurity.webp',
    alt: 'Cybersecurity illustration',
    description: [
      'We provide comprehensive cybersecurity strategies including threat modeling, vulnerability assessments, penetration testing, and secure architecture design. We help you meet regulatory standards like GDPR, HIPAA, ISO 27001, and more, while proactively reducing attack surfaces.',
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
                  Let&apos;s Build Together
                </span>
              </Link>
              <p className="text-base text-muted mt-2 italic">
                We&apos;re just one message away from starting something great.
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
