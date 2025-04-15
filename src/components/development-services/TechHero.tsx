import Image from 'next/image'
import Link from 'next/link'

export default function TechHero() {
  return (
    <section className="bg-secondary-background rounded-lg">
      <div className="flex justify-between flex-col-reverse lg:flex-row gap-8 px-4 py-8 lg:p-8">
        {/* Left: Text Content */}
        <div className="flex flex-col lg:w-1/2 lg:mt-10 w-full text-center">
          <h1 className=" text-3xl lg:text-4xl text-heading font-semibold font-heading tracking-normal">
            Smart Code. Scalable Systems. Real Innovation.
          </h1>
          <article className="text-lg font-body text-text mt-5 lg:mt-8">
            <p className="mb-8 lg:mb-12">
              We build powerful digital solutions that don&apos;t just work,
              they scale, adapt, and last. From seamless APIs to cross-platform
              apps, everything we build is smart, secure, and ready for
              what&apos;s next.
            </p>
            <Link
              href="/contact-us"
              className="bg-button text-secondary-text cursor-pointer font-heading text-lg rounded-lg  border-0 w-full lg:max-w-[280px] p-3 hover:bg-hover"
            >
              Let&#39;s Build Together
            </Link>
          </article>
        </div>

        {/* Right: Hero Image */}

        <div className="relative flex lg:w-1/2 justify-center lg:justify-end">
          <Image
            src="/images/hero-technology-development.webp"
            alt="Hero Section Image"
            height={400}
            width={600}
            style={{ objectFit: 'cover' }}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
