import Image from 'next/image'
import Link from 'next/link'

export default function MarketingHero() {
  return (
    <section className="bg-secondary-background rounded-lg">
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8 px-4 py-8 lg:p-8">
        {/* Left: Text Content */}
        <div className="flex flex-col md:w-1/2 lg:mt-10 w-full text-center">
          <h1 className=" text-3xl lg:text-4xl text-heading font-semibold font-heading tracking-normal">
            Turn Insights into Growth and Visibility into Value
          </h1>
          <article className="text-lg font-body text-text mt-5 lg:mt-8">
            <p className="mb-8 lg:mb-12 text-left">
              Success isn&apos;t just about building products, it&apos;s about
              scaling them. Nexoris brings together SEO, marketing automation,
              and data analytics to help you grow smarter and measure what
              matters. We help you attract, engage, and convert the right
              audience using meaningful insights.
            </p>
            <Link
              href="/contact-us"
              className="bg-button text-secondary-text cursor-pointer font-heading text-lg rounded-lg  border-0 w-full lg:max-w-[280px] p-3 hover:bg-hover"
            >
              Let&#39;s Grow Your Business
            </Link>
          </article>
        </div>

        {/* Right: Hero Image */}

        <div className="relative flex md:w-1/2 justify-center lg:justify-end">
          <Image
            src="/images/marketing-analytics.webp"
            alt="Hero Section Image"
            height={400}
            width={500}
            style={{ objectFit: 'cover' }}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
