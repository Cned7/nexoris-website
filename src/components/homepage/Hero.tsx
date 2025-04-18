import Image from 'next/image'
import Link from 'next/link'

export default function HomeHero() {
  return (
    <section className="bg-secondary-background rounded-lg">
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8 p-4 lg:p-8">
        {/* Left: Text Content */}
        <div className="flex flex-col md:w-1/2 lg:mt-10 w-full">
          <h1 className=" text-3xl lg:text-4xl text-heading font-bold tracking-normal">
            Innovative Technology Solutions
          </h1>
          <article className="text-lg font-body text-text mt-5 lg:mt-8">
            <p className="mb-8 lg:mb-12">
              We provide cutting-edge solutions that help businesses succeed.
              From custom software and scalable cloud platforms to data-driven
              marketing strategies, we’re your partner in turning challenges
              into opportunities.
            </p>
            <Link
              href="/contact-us"
              className="bg-button text-secondary-text cursor-pointer font-heading text-lg rounded-lg  border-0 w-full lg:max-w-[280px] p-3 
           hover:bg-hover"
            >
              Let&#39;s Build Together
            </Link>
          </article>
        </div>

        {/* Right: Hero Image */}

        <div className="relative flex md:w-1/2 justify-center lg:justify-end">
          <Image
            src="/images/nexoris-hero.webp"
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
