"use client"
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import services from "./Services";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={twMerge("bg-secondary text-white pt-5 pb-5 fixed bottom-0 w-full mt-15", className)}>
      <div className="container mx-auto px-4 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <Link href="/" className="text-2xl font-semibold text-[#f0f0f0] cursor-pointer hover:text-primary">NEXORIS</Link>
          <ul className="mt-4 space-y-2 text-sm md:text-[14px] text-[#f0f0f0]">
            <li><Link href="/about" className=" hover:text-primary transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">Contact Us</Link></li>
            <li><Link href="/insight" className="hover:text-primary transition">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition">Careers</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-semibold mb-5 text-xl text-left md:text-center text-[#f0f0f0]">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {services.map((service) => (
              <Link key={service.path} href={service.path} className=" text-[#f0f0f0] hover:text-primary transition text-sm text-[12px] lg:text-[14px]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className=" text-sm lg:text-[14px] text-[#f0f0f0]" >
          <h3 className="font-semibold mb-3 text-xl">Contact Us</h3>
          <p>No. 5, Mojisola Dokpesi Street, Allied Garden Estate, Badore, Ajah, Lagos, Nigeria</p>
          <p>Tel: +234 (0) 9023433016</p>
          <p>Email: nexoristech@gmail.com</p>

          {/* Social Media */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-xl">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-primary transition">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="X (Twitter)" className="hover:text-primary transition">
                <FaXTwitter size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-primary transition">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-primary transition">
                <FaFacebook size={20} />
              </Link>
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="hover:text-primary transition">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-foreground mt-8 pt-4 text-center text-sm md:text-[14px]">
        &copy; {new Date().getFullYear()} Nexoris. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
