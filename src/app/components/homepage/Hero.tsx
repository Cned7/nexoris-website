export default function HomeHero() {
  return (
    <section className="bg-secondary-background rounded-lg mx-4 md:mx-6 lg:mx-12 mt-18 lg:mt-24 xl:mx-20">
      <div className="flex justify-between flex-col-reverse md:flex-row gap-5">
        {/* Left: Text Content */}
        <div className="flex flex-col md:w-1/2 lg:mt-10 w-full p-4 lg:p-8">
          <h1 className="text-3xl md:text-3xl lg:text-5xl text-heading font-bold tracking-normal">
            Innovative Technology Solutions
          </h1>
          <article className="text-base text-text mt-5 lg:mt-8">
            <p>
              We provide cutting-edge solutions that help businesses succeed.
              From custom software and scalable cloud platforms to data-driven
              marketing strategies, we’re your partner in turning challenges
              into opportunities.
            </p>
            <button
              className="bg-button text-secondary-text cursor-pointer rounded-lg  border-0 w-full lg:max-w-[280px] py-3 
           mt-8 lg:mt-10 hover:bg-hover"
            >
              Let&#39;s Build Together
            </button>
          </article>
        </div>

        {/* Right: Hero Image */}
        <div className="relative hidden md:flex">
          <div className=" h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] absolute z-[2] top-3 bg-secondary-background"></div>
          <div className="relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] rounded-full border-12 border-e-0 border-t-0 border-b-0 border-button p-5 grid place-items-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] rounded-full border-8 border-cyan-500 border-e-0 border-t-0 border-b-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
