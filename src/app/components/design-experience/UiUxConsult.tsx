import Image from 'next/image'
import Link from 'next/link'

export function UIUXConsulting() {
  return (
    <section
      className="bg-background text-white mt-10 lg:mt-15 bg-background shadow shadow-gray-300"
      id="uiux-consulting"
    >
      <h2 className="text-heading text-4xl font-bold text-center pt-8">
        UI/UX Consulting
      </h2>
      <div className="flex justify-between flex-col-reverse lg:flex-row gap-8 px-4 py-8 lg:mt-4 lg:p-8 container mx-auto">
        <div className="text-text font-lg flex flex-col lg:w-1/2 w-full justify-center sm:p-4">
          <p className="text-text font-body text-lg">
            User experience is the heart of every successful product. Our UI/UX
            Design Consulting services help you optimize user journeys,
            streamline interactions, and improve overall engagement. We work
            closely with your team to identify usability gaps and make strategic
            improvements that enhance your product&apos;s usability and appeal.
          </p>
          <Link
            href="/contact-us"
            className="text-heading underline mt-4 font-semibold"
          >
            Let&apos;s partner to bring your ideas to life
          </Link>
        </div>
        <div className="relative flex lg:w-1/2 w-full justify-end my-auto">
          <Image
            src="/images/ux-consulting.webp"
            alt="Product Design"
            height={300}
            width={700}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
