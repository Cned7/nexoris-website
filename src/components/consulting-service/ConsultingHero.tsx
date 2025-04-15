import Image from 'next/image'
import Link from 'next/link'

export default function ConsultingHero() {
  return (
    <section className="bg-secondary-background rounded-lg">
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8 px-4 py-6 lg:px-8">
        <div className="flex flex-col md:w-1/2 lg:mt-10 w-full text-center">
          <h1 className="text-3xl lg:text-4xl text-heading font-semibold font-heading tracking-normal">
            Empowering Your Team. Guiding Your Transformation
          </h1>
          <article className="text-lg font-body text-text mt-5 lg:mt-8">
            <p className="mb-8 lg:mb-12 lg:text-left">
              Whether you&apos;re evolving a product, leading a digital
              transformation, or leveling up internal capabilities, Nexoris
              offers high-impact consulting and training designed to unlock your
              full potential.
            </p>
          </article>
          <Link
            href="/contact-us"
            className="bg-button text-secondary-text cursor-pointer font-heading text-lg rounded-lg  border-0 transition w-full lg:max-w-[240px] p-3 hover:bg-heading mx-auto"
          >
            Let&apos;s Guide Your Team
          </Link>
        </div>
        <div className="relative flex md:w-1/2 justify-center">
          <Image
            src="/images/consultation.webp"
            alt="Product Design"
            height={400}
            width={700}
            className="object-contain max-w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
