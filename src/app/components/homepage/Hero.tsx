import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="bg-secondary-background rounded-lg mx-4 md:mx-6 lg:mx-12 mt-18 lg:mt-24 xl:mx-20">
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8 p-4 lg:p-8">
        {/* Left: Text Content */}
        <div className="flex flex-col md:w-1/2 lg:mt-10 w-full">
          <h1 className=" text-3xl lg:text-4xl text-heading font-bold tracking-normal">
            Innovative Technology Solutions
          </h1>
          <article className="text-base font-body text-text mt-5 lg:mt-8">
            <p>
              We provide cutting-edge solutions that help businesses succeed.
              From custom software and scalable cloud platforms to data-driven
              marketing strategies, we’re your partner in turning challenges
              into opportunities.
            </p>
            <button
              className="bg-button text-secondary-text cursor-pointer font-heading text-lg rounded-lg  border-0 w-full lg:max-w-[280px] py-3 
           mt-8 lg:mt-10 hover:bg-hover"
            >
              Let&#39;s Build Together
            </button>
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
