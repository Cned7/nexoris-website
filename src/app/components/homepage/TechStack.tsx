"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Tech stack logos
const techStack = [
  { name: "Redux", logo: "/logos/redux.svg" },
  { name: "React.js", logo: "/logos/react.svg" },
  { name: "Node.js", logo: "/logos/node-js.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Puppet", logo: "/logos/puppet.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "GCP", logo: "/logos/gcp.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Terraform", logo: "/logos/terraform.svg" },
  { name: "Redis", logo: "/logos/redis.svg" },
  { name: "GraphQL", logo: "/logos/graphql.svg" },
  { name: "Xcode", logo: "/logos/xcode.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Flutter", logo: "/logos/xamarin.svg" },
  { name: "Xamarin", logo: "/logos/flutter.svg" },
];

export default function TechStack() {
  return (
    <section className="bg-background py-8 px-6 md:px-12 text-silver container mx-auto relative">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-silver">Our Technology Stack</h2>
        <p className="text-gray max-w-2xl mx-auto mb-10">
          We use cutting-edge technology to drive innovation. Our diverse expertise ensures we select the right tools for your project.
        </p>
      </div>

      {/* Mobile View - Grid Layout */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:hidden">
        {techStack.map(({ name, logo }, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <Image src={logo} alt={name} width={50} height={50} className="w-12 h-12" />
            <span className="text-sm font-medium text-gray mt-2">{name}</span>
          </div>
        ))}
      </div>

      {/* Desktop View - Circular Swiper + Neon Effect */}
      <div className="hidden md:flex justify-center items-center relative">
        {/* Neon Circular Effect - Reduced Size */}
        <div className="relative flex justify-center items-center">
          <div className="absolute h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] bg-background z-[1]"></div>
          <div
            className="relative h-[125px] w-[125px] lg:h-[200px] lg:w-[200px] rounded-full border-8 border-e-0 border-t-0 
            border-b-0 border-purple p-3 grid place-items-center"
          >
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] h-[100px] w-[100px] 
              lg:h-[150px] lg:w-[150px] rounded-full border-4 border-cyan border-e-0 border-t-0 border-b-0"
            ></div>
          </div>
        </div>

        {/* Swiper Logos - Positioned Above Neon Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] w-full max-w-3xl">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full"
          >
            {techStack.map(({ name, logo }, index) => (
              <SwiperSlide key={index} className="flex justify-center bg-inherit">
                <div className="flex flex-col items-center text-center p-4">
                  <Image src={logo} alt={name} width={50} height={50} className="w-12 h-12" />
                  <span className="text-sm font-medium text-gray-300 mt-2">{name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl md:text-3xl font-bold text-silver mb-4">Let’s Build Something Extraordinary</h3>
        <p className="text-gray max-w-xl mx-auto mb-10">
          Your vision. Our expertise. Together, we’ll drive innovation and achieve transformative success. Partner with Nexoris to bring your ideas to life and unlock new opportunities.
        </p>
        <Link
          href="/contact"
          className="bg-purple text-silver px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal transition duration-300"
          aria-label="Get started with Nexoris"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
