'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
} from 'react-icons/fi'
import services from './Services'
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 300)
  }

  return (
    <nav className="bg-background shadow-lg fixed top-0 z-10 w-full h-14 xl:h-18 flex items-center">
      <div ref={navRef} className="container flex justify-between items-center w-full mx-4 md:mx-6 lg:mx-12 xl:mx-21">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-28 h-8 sm:w-32 sm:h-10 md:w-36 md:h-12 lg:w-40 lg:h-14 xl:w-44 xl:h-16">
            <Image
              src="/logo.png"
              alt="Nexoris Technologies Ltd"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 text-heading font-normal text-base font-heading xl:ml-30">
          <Link href="/about-us" className="hover:bg-button hover:text-secondary-text border border-transparent hover:border-cyan rounded-lg px-4 py-2">
            About Us
          </Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center hover:text-secondary-text border border-transparent hover:border-button hover:bg-button cursor-pointer rounded-lg px-4 py-2 text-heading font-normal text-base font-heading"
            >
              Services
              {isServicesOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </button>

            {isServicesOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-background text-heading shadow-lg z-50 rounded-lg flex justify-center py-4 mt-5 lg:mt-10 font-heading"
                style={{
                  width: navRef.current?.offsetWidth
                    ? `${navRef.current.offsetWidth * 0.6}px`
                    : '60%',
                }}
              >
                <div className="grid grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-1 p-4 text-base content-between items-center">
                  {services.map((service, index) => (
                    <Link key={index} href={service.path}
                      className="group flex items-center gap-2 hover:bg-button text-heading  hover:text-secondary-text rounded-lg px-3 py-2 transition-colors duration-200 w-full bg-secondary-background"
                      onClick={() => setIsServicesOpen(false)} // Close on service selection
                    >
                      <FiCheckCircle className="text-heading group-hover:text-secondary-text h-6 transition-colors duration-200" size={16} />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/insight" className="hover:text-secondary-text border border-transparent hover:border-button hover:bg-button rounded-lg px-4 py-2 font-heading">
            Insight
          </Link>
          <Link href="/contact-us" className="text-heading hover:text-secondary-text border border-transparent hover:border-button hover:bg-button rounded-lg px-4 py-2">
            Contact Us
          </Link>
        </div>

        {/* Discuss a Project (Desktop Only) */}
        <Link href="/contact-us" className="hidden lg:block cursor-pointer text-secondary-text rounded-lg px-4 py-2 hover:bg-hover bg-button font-normal text-base font-body">
          Discuss a Project
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-heading" onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen)
          setIsMobileServicesOpen(false)
        }}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-background px-3 w-full z-20 absolute top-14 rounded mx-auto">
          <nav className="flex flex-col text-heading w-[95%] container">
            <Link href="/about-us" className="hover:text-secondary-text hover:bg-button rounded-lg py-1 px-3 font-normal text-base text-heading font-heading">
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full hover:bg-button rounded-lg py-1 hover:text-secondary-text cursor-pointer px-3 text-text font-normal text-lg font-heading"
            >
              Services
              {isMobileServicesOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
            </button>

            {isMobileServicesOpen && (
              <div className="w-full">
                {services.map((service, index) => (
                  <Link key={index} href={service.path}
                    className="group flex items-center gap-2 hover:bg-button hover:text-secondary-text rounded-lg text-[14px] py-1 transition-colors duration-200 w-full px-4 text-text font-normal text-base font-heading"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiCheckCircle className="text-heading group-hover:text-secondary-text transition-colors duration-200" size={16} />
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/insight" className="hover:text-secondary-text hover:bg-button px-3 text-heading font-normal text-base font-heading">
              Insight
            </Link>
            <Link href="/contact-us" className="hover:text-secondary-text hover:bg-button rounded-lg py-1 px-3 text-text font-normal text-base text-heading font-heading">
              Contact Us
            </Link>

            {/* Discuss a Project (Mobile Only) */}
            <button className="text-secondary-text border border-button rounded-lg py-2 px-4 cursor-pointer bg-button mt-4 hover:bg-heading hover:text-secondary-text hover:border-transparent font-normal text-lg font-heading">
              Discuss a Project
            </button>
          </nav>
        </div>
      )}
    </nav>
  )
}

export default Navbar
