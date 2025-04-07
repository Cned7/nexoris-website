'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

// Tech stack logos
const techStack = [
  { name: 'Redux', logo: '/logos/redux.svg' },
  { name: 'React.js', logo: '/logos/react.svg' },
  { name: 'Node.js', logo: '/logos/node-js.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Puppet', logo: '/logos/puppet.svg' },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'Azure', logo: '/logos/azure.svg' },
  { name: 'GCP', logo: '/logos/gcp.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Kubernetes', logo: '/logos/kubernetes.svg' },
  { name: 'Terraform', logo: '/logos/terraform.svg' },
  { name: 'Redis', logo: '/logos/redis.svg' },
  { name: 'GraphQL', logo: '/logos/graphql.svg' },
  { name: 'Xcode', logo: '/logos/xcode.svg' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  { name: 'Flutter', logo: '/logos/xamarin.svg' },
  { name: 'Xamarin', logo: '/logos/flutter.svg' },
]

export default function TechStack() {
  return (
    <section className="relative mt-10 lg:mt-15 overflow-hidden xl-mt-5 py-6">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-heading font-heading">
          Our Technology Stack
        </h2>
        <p className="text-text max-w-2xl mx-auto mb-10 font-body">
          We use cutting-edge technology to drive innovation. Our diverse
          expertise ensures we select the right tools for your project.
        </p>
      </div>

      {/* Tech Stack Swiper */}
      <div className="bg-heading rounded-lg flex justify-center px-3 items-center relative w-full h-[180px]">
        {/* Swiper Logos */}
        <Swiper
          slidesPerView={3} // Default to 3 for mobile
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 3, // 3 icons on mobile
            },
            1024: {
              slidesPerView: 5, // 5 icons on desktop
            },

            1280: {
              slidesPerView: 6,
            },
          }}
          className="w-full"
        >
          {techStack.map(({ name, logo }, index) => (
            <SwiperSlide key={index} className="flex justify-center bg-inherit">
              <div className="flex flex-col items-center text-center p-4">
                <Image
                  src={logo}
                  alt={name}
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <span className="text-sm md:text-lg font-heading font-medium text-secondary-text mt-2">
                  {name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl md:text-3xl font-bold text-heading font-heading mb-4">
          Let’s Build Something Extraordinary
        </h3>
        <p className="text-text font-body text-lg max-w-xl mx-auto mb-10">
          Your vision. Our expertise. Together, we’ll drive innovation and
          achieve transformative success. Partner with Nexoris to bring your
          ideas to life and unlock new opportunities.
        </p>
        <Link
          href="/contact-us"
          className="bg-button text-secondary-text px-6 py-3 text-lg rounded-lg text-normal hover:bg-hover transition duration-300 font-heading"
          aria-label="Get started with Nexoris"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
