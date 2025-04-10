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
    id: 'seo',
    title: 'SEO & Content Marketing',
    img: '/images/seo-content.webp',
    alt: 'SEO & Content Marketing',
    description: [
      "Be visible. Be valuable. Our SEO services cover everything from technical optimization and content strategy to link building and high-quality writing. Whether you're launching a new site or scaling an existing one, we help your content get discovered by the right audience.",
    ],
  },
  {
    id: 'automation',
    title: 'Marketing Automation',
    img: '/images/marketing-automation.webp',
    alt: 'Marketing Automation',
    description: [
      'Streamline your lead generation and customer nurturing. We set up and optimize intelligent marketing workflows using platforms like HubSpot, Mailchimp, and ActiveCampaign, ensuring your messages reach the right people at the right time.',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    img: '/images/analytics-reporting.webp',
    alt: 'Analytics & Reporting',
    description: [
      'Know exactly what’s working and what’s not. We implement GA4, BigQuery, custom event tracking, and dashboards with tools like Looker Studio or Power BI. Our analytics solutions turn raw data into decisions that move your business forward.',
    ],
  },
]

const MarketingServices = () => {
  return (
    <section className="bg-secondary-background py-2 px-4 sm:px-6 lg:px-12 my-12">
      {services.map(({ id, title, img, alt, description }, index) => (
        <article
          key={id}
          id={id}
          aria-labelledby={`heading-${id}`}
          className={`group transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] max-w-6xl mx-auto my-8 flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center gap-10 bg-background shadow-md rounded-2xl px-6 lg:px-10 py-10 cursor-pointer`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 order-2 md:order-1">
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
            <div className="mt-6 md:hidden lg:block">
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
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src={img}
                alt={alt}
                layout="responsive"
                width={600}
                height={400}
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

export default MarketingServices
