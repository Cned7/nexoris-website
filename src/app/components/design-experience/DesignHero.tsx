import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-secondary-background rounded-lg">
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8 px-4 py-6 lg:px-8">
        <div className="flex flex-col md:w-1/2 lg:mt-10 w-full text-center">
          <h1 className="text-3xl lg:text-4xl text-heading font-semibold font-heading tracking-normal">
            Crafting digital experiences that connect, convert, and captivate
          </h1>
          <article className="text-lg font-body text-text mt-5 lg:mt-8">
            <p className="mb-8 lg:mb-12">
              We believe great design is more than beautiful visuals. It&apos;s
              about solving problems and creating emotional connections. From
              UI/UX to full product design and immersive AR/VR development,
              Nexoris helps brands bring digital ideas to life in ways users
              love.
            </p>
          </article>
          <Link
            href="/contact-us"
            className="bg-button text-secondary-text cursor-pointer font-heading text-lg rounded-lg  border-0 transition w-full lg:max-w-[240px] p-3 hover:bg-heading mx-auto"
          >
            Let&apos;s Build Together
          </Link>
        </div>
        <div className="relative flex md:w-1/2 justify-center">
          <Image
            src="/images/design-experience-hero.webp"
            alt="Product Design"
            height={100}
            width={450}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
