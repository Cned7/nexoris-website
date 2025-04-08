'use client'

import Image from 'next/image'
import React from 'react'
import TechStack from '../components/homepage/TechStack'
import Breadcrumbs from '../components/Breadcrumbs'

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false }, // explicitly setting isCurrentPage to false
  {
    name: 'About Us',
    href: '/about-us',
    isCurrentPage: true,
  }, // this is the current page
]

const AboutUsPage: React.FC = () => {
  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-28">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {/* Hero Section */}
      <section className="px-4 py-5 sm:px-6 lg:px-20 bg-secondary-background">
        <h1 className="text-4xl sm:text-4xl font-bold my-8 text-center sm:text-left text-heading font-heading">
          About Nexoris Technologies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 container mx-auto">
            <Image
              src="/images/about-us.webp"
              alt="About Nexoris Technologies Ltd"
              fill
              className="rounded-lg shadow-lg object-cover"
              priority
              loading="eager" // disables lazy loading
            />
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-heading mb-4 font-heading text-heading">
              Who We Are
            </h2>
            <p className="mb-4 text-justify text-body">
              At Nexoris Technologies, we&apos;re more than just a tech
              company—we’re a group of dreamers, doers, and problem-solvers who
              believe in the power of technology to make the world a better
              place. We’re here to help businesses grow and evolve, bringing
              innovative ideas and solutions to life, all while fostering a
              sense of trust and collaboration every step of the way.
            </p>
            <p className="text-justify text-body">
              Our journey began with a simple idea: to use technology to solve
              real problems. Since then, we’ve grown into a team of passionate
              experts dedicated to delivering solutions that not only meet our
              clients&apos; needs but exceed their expectations. Whether you’re
              just starting your journey or looking to take your business to the
              next level, we’re here to help you build what’s next.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="px-4 py-10 sm:px-6 lg:px-20 bg-secondary-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-secondary-background">
          <div className="bg-heading p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2 font-heading font-semibold">
              Our Mission
            </h3>
            <p className="text-base font-body">
              Our mission is simple: to empower businesses by providing
              innovative, secure, and scalable technology solutions that make a
              real difference. We&apos;re here to help you thrive in the digital
              age, building strong foundations for your success.
            </p>
          </div>
          <div className="bg-heading p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p>
              We envision a world where businesses are equipped with the tools
              they need to succeed, innovate, and grow. Our goal is to be the
              catalyst for that change, helping you reach new heights and
              redefine what&apos;s possible in your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-10 sm:px-6 lg:px-20 container mx-auto bg-secondary-background rounded-lg">
        <h2 className="text-4xl sm:text-3xl font-bold text-center mb-6 font-heading text-heading">
          What Drives Us
        </h2>
        <ul className="list-disc pl-6 space-y-3 max-w-3xl mx-auto text-left text-lg text-body">
          <li>
            <strong>Passion for Innovation:</strong> We&apos;re constantly
            exploring new ideas and pushing boundaries to create solutions that
            matter.
          </li>
          <li>
            <strong>Genuine Integrity:</strong> We believe in being open,
            honest, and doing right by our clients. Trust is the foundation of
            everything we do.
          </li>
          <li>
            <strong>Commitment to Excellence:</strong> We care deeply about the
            quality of our work, and we go the extra mile to ensure that our
            solutions are top-notch.
          </li>
          <li>
            <strong>Client-Focused:</strong> Your goals are our goals. We work
            alongside you to make sure we&apos;re always moving in the right
            direction together.
          </li>
          <li>
            <strong>Teamwork:</strong> We&apos;re stronger together.
            Collaboration is at the heart of how we work, both internally and
            with our clients.
          </li>
          <li>
            <strong>Security First</strong> We protect what matters most—your
            data, your systems, and your peace of mind.
          </li>
        </ul>
      </section>

      {/* Our Expertise */}

      <section className="px-4 py-10 sm:px-6 lg:px-20 my-10 bg-heading text-secondary-text rounded-lg w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left font-heading">
          Our Expertise
        </h2>
        <p className="mb-4 text-justify font-body text-base">
          At Nexoris Technologies, we don&apos;t just offer services—we craft
          experiences and solutions that transform the way businesses operate.
          Our expertise spans everything from custom software development to
          cutting-edge cloud solutions, each designed to make your business more
          agile, secure, and future-ready.
        </p>
        <ul className="list-disc pl-6 space-y-3 max-w-3xl mx-auto text-left">
          <li>Custom Software Development</li>
          <li>Cloud Solutions & Infrastructure</li>
          <li>Cybersecurity Solutions</li>
          <li>DevOps & Automation</li>
          <li>API Development & Integrations</li>
          <li>UI/UX Design & Consulting</li>
          <li>Digital Transformation & Consulting</li>
          <li>Product Design and Management</li>
          <li>...and lots more</li>
        </ul>
      </section>

      {/* Journey & Growth */}
      <section className="px-4 py-10 sm:px-6 lg:px-20 container mx-auto w-full bg-secondary-background text-body">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left text-heading font-heading">
          Our Journey & Growth
        </h2>
        <p className="mb-4 text-justify">
          From our early days as a small startup, we&apos;ve always believed in
          the power of technology to change the world. Today, we stand proud of
          what we&apos;ve accomplished, but our story is just beginning. We’re
          not just a company—we’re a movement, committed to helping businesses
          like yours adapt, grow, and succeed in an ever-evolving world.
        </p>
        <p className="text-justify">
          Our growth is built on a foundation of trust, innovation, and the
          relentless pursuit of excellence. As we continue to expand and serve
          clients across the globe, we remain deeply connected to our core
          values, ensuring that every project we touch reflects our commitment
          to making a real impact.
        </p>
      </section>
      <TechStack />
    </main>
  )
}

export default AboutUsPage
