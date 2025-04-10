import Image from 'next/image'
import Link from 'next/link'

export function UIUXDesign() {
  return (
    <section
      className="bg-background text-white mt-10 lg:mt-15 bg-background shadow shadow-gray-300"
      id="uiux-design"
    >
      <div className="flex justify-between flex-col-reverse lg:flex-row gap-8 px-4 py-8 lg:mt-4 lg:p-8 container mx-auto">
        <div className="text-text font-lg flex flex-col lg:w-1/2 w-full justify-center sm:p-4">
          <h2 className="text-heading text-4xl font-bold mb-8">
            UI/UX Design & Consulting
          </h2>
          <p className="text-text font-body text-lg">
            We turn user insights into intuitive interfaces. Our process
            involves user research, wireframing, prototyping, testing, and UI
            systems and ensuring every design decision supports usability and
            brand identity. Need design advisory? We offer consulting services
            to elevate your current UX.
          </p>
          <Link
            href="/contact-us"
            className="text-heading underline mt-4 font-semibold"
          >
            Let&apos;s bring your ideas to life
          </Link>
        </div>
        <div className="relative flex lg:w-1/2 w-full justify-end my-auto">
          <Image
            src="/images/uiux-design.webp"
            alt="UI/UX Design"
            height={200}
            width={500}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
