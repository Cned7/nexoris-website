"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiCheckCircle } from "react-icons/fi";
import services from "./Services";


const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 300);
  };

  return (
    <nav className="bg-[#f0f0f0] drop-shadow-md fixed top-0 z-10 w-full h-20 flex items-center">
      <div ref={navRef} className=" container mx-auto flex justify-between items-center px-8 lg:px-20 w-full">
        {/* Brand Name */}
        <Link href="/" className="text-2xl text-primary font-bold hover:text-secondary">
          NEXORIS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 text-primary font-semibold justify-between items-center ml-auto mr-24">
          <Link href="/about" className=" text-primary hover:text-white rounded-lg px-4 py-2 hover:bg-secondary">About Us</Link>

          {/* Services Dropdown (Desktop) */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-2 text-primary hover:text-white rounded-lg px-4 py-2 hover:bg-secondary cursor-pointer"
            >
              Services
              {isServicesOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
            </button>

            {isServicesOpen && (
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 bg-[#f0f0f0] text-secondary shadow-lg mt-10 z-20 rounded-lg flex justify-center py-4"
                style={{ width: navRef.current?.offsetWidth ? `${navRef.current.offsetWidth * 0.75}px` : "75%" }}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
              >
                <div className="grid grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-1 p-4 w-full text-[13px]">
                  {services.map((service, index) => (
                    <Link 
                      key={index} 
                      href={service.path} 
                      className="flex items-center gap-2 hover:bg-secondary text-secondary hover:text-white rounded-lg px-3 py-2 transition-colors duration-200 w-full"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <FiCheckCircle className="text-primary group-hover:text-secondary h-6 transition-colors duration-200" size={16} />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/insight" className="text-primary rounded-lg px-4 py-2 hover:bg-secondary  hover:text-white">Insight</Link>
          <Link href="/contact" className="hover:text-white text-primary rounded-lg px-4 py-2 hover:bg-secondary">Contact Us</Link>
        </div>

        {/* Discuss a Project (Desktop Only) */}
        <button className="hidden lg:block bg-primary text-white rounded-lg py-2 px-4 cursor-pointer hover:bg-secondary font-semibold">
          Discuss a Project
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-secondary" 
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsMobileServicesOpen(false); 
          }}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md p-4 w-full z-20 absolute top-20 left-0">
          <nav className="flex flex-col space-y-4 text-secondary font-semibold">
            <Link href="/about" className="text-secondary hover:text-white hover:bg-secondary rounded-lg px-3 py-2">About Us</Link>
            
            {/* Mobile Services Dropdown */}
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
              className="flex items-center justify-between w-full hover:bg-secondary rounded-lg hover:text-white px-3 py-2"
            >
              Services
              {isMobileServicesOpen ? <FiChevronUp size={18} className="text-primary" /> : <FiChevronDown size={18} className="text-primary" />}
            </button>

            {isMobileServicesOpen && (
              <div className="pl-4 space-y-2 w-full">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.path} 
                    className="flex items-center gap-2 hover:bg-secondary hover:text-white rounded-lg px-3 py-2 transition-colors duration-200 w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiCheckCircle className="text-primary group-hover:text-secondary transition-colors duration-200" size={16} />
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/insight" className="text-secondary hover:text-white hover:bg-secondary px-3 py-2 ">Insight</Link>
            <Link href="/contact" className="text-secondary hover:text-white hover:bg-secondary px-3 py-2 rounded-lg">Contact Us</Link>

            {/* Discuss a Project (Mobile Only) */}
            <button className="text-white hober:text-white bg-primary hover:bg-secondary rounded-lg py-2 px-4 cursor-pointer font-semibold mt-4">
              Discuss a Project
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
