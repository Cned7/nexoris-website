export default function HomeHero() {
  return (
    <section className=" mt-8 lg:mt-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-20 flex justify-between flex-col-reverse md:flex-row gap-5">
        {/* Left: Text Content */}
        <div className="flex flex-col md:w-1/2 mt-10 w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-silver font-bold tracking-normal">Innovative Technology Solutions</h1>
        <article className="text-base text-gray mt-5 lg:mt-8">
          <p>We provide cutting-edge solutions that help businesses succeed. From custom software and scalable cloud platforms to data-driven marketing strategies, we’re your partner in turning challenges into opportunities.</p>
          <button className="bg-purple text-silver cursor-pointer rounded-lg  border-0 w-full lg:max-w-[280px] py-3 
           mt-8 lg:mt-10 hover:bg-teal">Let&#39;s Build Together
          </button>
        </article>
        </div>

        {/* Right: Hero Image */}
        <div className="relative hidden md:flex">
   <div className=" h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] absolute z-[2] top-3 bg-background"></div>
   <div
     className="relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] rounded-full border-12 border-e-0 border-t-0 border-b-0 border-purple p-5 grid place-items-center"
   >
     <div
       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] rounded-full border-8 border-cyan border-e-0 border-t-0 border-b-0"
     ></div>
   </div>
 </div>
      </div>
    </section>
  );
}
