import Image from 'next/image'
import Link from 'next/link'

export function ARAVSolutions() {
  return (
    <section
      className="bg-background text-white mt-10 lg:mt-15 bg-secondary-background"
      id="arav-solutions"
    >
      <h2 className="text-heading text-4xl font-bold text-center pt-8">
        AR/AV Solutions
      </h2>
      <div className="flex justify-between flex-col lg:flex-row gap-8 px-4  mt-4 lg:px-8 lg:pb-8 pt-3 container mx-auto">
        <div className="relative flex lg:w-1/2 w-full justify-start my-auto">
          <Image
            src="/images/ar-av.webp"
            alt="Product Design"
            height={300}
            width={700}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
        <div className="text-text font-lg flex flex-col lg:w-1/2 w-full justify-center">
          <p className="text-text font-body text-lg">
            Push the boundaries of digital interaction with our Augmented
            Reality (AR) and Virtual Reality (VR) design solutions. We help
            businesses deliver immersive experience that captivate users and
            unlock dimensions of engagement across industries such as retail,
            education, real estate, and healthcare.
          </p>
          <h3 className="text-xl font-semibold mb-2 my-4 text-heading">
            Our AV/AR Capabilities:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-text text-lg">
            <li>Interactive Product Visualization</li>
            <li>Virtual Training and Simulations</li>
            <li>Immersive Brand Experiences</li>
            <li>AR Interface for Mobile Apps</li>
            <li>VR Environment or Presentation & Event</li>
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
