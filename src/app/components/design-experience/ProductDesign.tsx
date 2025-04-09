import Image from 'next/image'
import Link from 'next/link'

export function ProductDesign() {
  return (
    <section
      className="bg-background text-white mt-10 lg:mt-15 bg-secondary-background"
      id="product-design"
    >
      <h2 className="text-heading text-4xl font-bold text-center pt-8">
        Product Design
      </h2>
      <div className="flex justify-between flex-col lg:flex-row gap-8 px-4  mt-4 lg:px-8 lg:pb-8 pt-3 container mx-auto">
        <div className="relative flex lg:w-1/2 w-full justify-start my-auto">
          <Image
            src="/images/product-design.webp"
            alt="Product Design"
            height={300}
            width={700}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
        <div className="text-text font-lg flex flex-col lg:w-1/2 w-full justify-center">
          <p className="text-text font-body text-lg">
            We turn your ideas into powerful digital products built for real
            users. From research to high-fidelity design, we craft experiences
            that are intuitive, market-ready, and built to scale. Whether
            you&apos;re starting fresh or leveling up, we design with purpose,
            beauty, and impact.
          </p>
          <h3 className="text-xl font-semibold mb-2 my-4 text-heading">
            What We Offer:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-text text-lg">
            <li>User Research & Persona Development</li>
            <li>Journey Mapping & Infrastructure Architecture</li>
            <li>Wireframes & Prototypes</li>
            <li>Visual Design & Branding Integration</li>
            <li>Usability Testing & Iteration</li>
          </ul>
          <Link
            href="/contact-us"
            className="text-heading underline mt-4 font-semibold pb-8"
          >
            Let&apos;s bring your ideas to life
          </Link>
        </div>
      </div>
    </section>
  )
}
