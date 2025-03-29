import Image from "next/image";

export default function WhyNexoris() {
  return (
    <section className="relative bg-background text-silver py-4 md:py-10 px-6 md:px-16 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 flex justify-end">
        <div className="w-3/5 h-full bg-gradient-to-l from-transparent to-purple rounded-l-full" />
      </div>
      
      <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver leading-tight">
            Why Nexoris?
          </h2>
          <p className="mt-6 text-lg text-gray max-w-2xl">
            At Nexoris, we believe every challenge is an opportunity waiting to be unlocked. Our passion for innovation drives us to create transformative solutions that fuel your growth.
          </p>
          <blockquote className="mt-6 text-lg italic border-l-4 border-primary pl-4 text-silver">
            “We don’t just build technology; we build the future. Our mission is to turn your vision into reality, one groundbreaking solution at a time.” 
            <span className="block mt-2 text-gray font-semibold">— Founder & CEO, Nexoris Technologies Ltd.</span>
          </blockquote>
          <div className="mt-8">
            <button className="px-6 py-3 bg-teal md:bg-purple text-silver font-semibold rounded-lg shadow-md hover:bg-purple hover:bg-opacity-90 transition cursor-pointer">
              Learn About Us
            </button>
          </div>
        </div>
    
        {/* Right: Image Section */}
        <div className="md:w-2/5 flex justify-center relative">
          <div className="hidden md:block absolute -z-10 w-80 h-80 bg-gradient-to-r rounded-full opacity-20 blur-2xl" />
          <Image
            src="/images/why-us.webp"
            alt="Why Choose Nexoris"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
