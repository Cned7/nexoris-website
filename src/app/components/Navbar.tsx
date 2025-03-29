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
    <nav className="bg-background shadow shadow-purple fixed top-0 z-10 w-full h-10 lg:h-20 flex items-center">
      <div ref={navRef} className="container mx-auto flex justify-between px-6 md:px-8 lg:px-20">
        {/* Brand Name */}
        <Link href="/" className=" text-xl md:text-2xl text-silver font-bold hover:text-cyan">
          NEXORIS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-2 text-primary font-semibold justify-between items-center ml-auto mr-12">
          <Link href="/about" className=" text-silver hover:text-cyan border border-transparent hover:border-cyan rounded-lg px-4 py-2">About Us</Link>

          {/* Services Dropdown (Desktop) */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-2 text-silver hover:text-cyan border border-transparent hover:border-cyan rounded-lg px-4 py-2"
            >
              Services
              {isServicesOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
            </button>

            {isServicesOpen && (
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 bg-teal text-gray shadow-lg z-20 rounded-lg flex justify-center py-4 mt-5 lg:mt-10"
                style={{ width: navRef.current?.offsetWidth ? `${navRef.current.offsetWidth * 0.75}px` : "75%" }}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
              >
                <div className="grid grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-1 p-4 w-full text-[13px]">
                  {services.map((service, index) => (
                    <Link 
                      key={index} 
                      href={service.path} 
                      className="flex items-center gap-2 hover:bg-background text-silver hover:text-cyan rounded-lg px-3 py-2 transition-colors duration-200 w-full"
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

          <Link href="/insight" className="text-silver hover:text-cyan border border-transparent hover:border-cyan 
            rounded-lg px-4 py-2">Insight</Link>
          <Link href="/contact" className="text-silver hover:text-cyan border border-transparent hover:border-cyan 
            rounded-lg px-4 py-2">Contact Us</Link>
        </div>

        {/* Discuss a Project (Desktop Only) */}
        <button className="hidden lg:block cursor-pointer text-silver 
          rounded-lg px-4 py-2 bg-purple hover:bg-teal">
          Discuss a Project
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-cyan" 
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
        <div className="bg-teal p-4 mx-6 w-[90%] z-20 absolute top-13 rounded">
          <nav className="flex flex-col text-silver">
            <Link href="/about" className="hover:text-cyan hover:bg-background rounded-lg  py-1">About Us</Link>
            
            {/* Mobile Services Dropdown */}
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
              className="flex items-center justify-between w-full hover:bg-background rounded-lg py-1 hover:text-cyan"
            >
              Services
              {isMobileServicesOpen ? <FiChevronUp size={18} className="text-silver" /> : <FiChevronDown size={18} className="text-silver" />}
            </button>

            {isMobileServicesOpen && (
              <div className="w-full">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.path} 
                    className="flex items-center gap-2 hover:bg-background hover:text-cyan rounded-lg text-[14px] py-1 transition-colors duration-200 w-full px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiCheckCircle className="text-silver group-hover:text-cyan transition-colors duration-200" size={16} />
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/insight" className="hover:text-cyan hover:bg-background ">Insight</Link>
            <Link href="/contact" className="hover:text-cyan hover:bg-background rounded-lg py-1">Contact Us</Link>

            {/* Discuss a Project (Mobile Only) */}
            <button className="text-cyan border border-cyan rounded-lg py-2 px-4 cursor-pointer bg-background mt-4 hover:bg-purple hover:text-silver hover:border-transparent">
              Discuss a Project
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
