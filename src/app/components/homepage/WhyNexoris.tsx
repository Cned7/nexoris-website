"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const WhyNexoris: FC = () => {
  return (
    <section className="relative bg-background text-silver py-4 md:py-10 px-6 md:px-16 overflow-hidden xl-mt-5">
      {/* Background Shape */}
      <div className="absolute inset-0 flex justify-end">
        <div className="w-fit md:w-3/5 h-full bg-gradient-to-l from-transparent to-purple rounded-l-full" />
      </div>

      <h2 className="text-3xl text-center md:text-left mb-5 md:text-4xl lg:text-5xl font-bold text-silver leading-tight">
        Why Nexoris?
      </h2>

      <div className="relative container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left: Content */}
        <div className="lg:w-3/5 text-center md:text-left">
          <p className="md:mt-6 text-lg text-gray max-w-2xl">
            Your choice of a tech partner shapes your future. At Nexoris, we make your success our mission—transforming ideas into tailored solutions, leveraging cutting-edge technology, and keeping you ahead in a fast-moving digital world. With Nexoris, you don’t just get solutions — you gain a competitive advantage.
          </p>

          <blockquote className="mt-6 text-lg italic border-l-4 border-primary pl-4 text-silver">
            “We create innovative, tailored solutions that give you a strategic edge — empowering you to lead, adapt, and thrive in a rapidly evolving digital landscape.” 
            <span className="block mt-2 text-gray font-semibold">— Founder & CEO, Nexoris Technologies Ltd.</span>
          </blockquote>

          <div className="mt-8">
            <Link
              href="/about"
              className="px-6 py-3 bg-teal md:bg-purple text-silver font-semibold rounded-lg shadow-md md:hover:bg-teal hover:bg-purple hover:bg-opacity-90 transition cursor-pointer"
            >
              Learn About Us
            </Link>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="lg:w-2/5 flex justify-center relative">
          <div className="hidden md:block absolute -z-10 w-80 h-80 bg-gradient-to-l md:bg-gradient-to-r rounded-full opacity-20 blur-2xl" />
          <Image
            src="/images/why-us.webp"
            alt="Why Choose Nexoris"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyNexoris;
