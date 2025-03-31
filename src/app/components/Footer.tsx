'use client'
import Link from 'next/link'
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa6'
import services from './Services'
import { twMerge } from 'tailwind-merge'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={twMerge('text-gray pt-5 pb-5 fixed bottom-0 mt-15', className)}
    >
      <div className="container mx-auto text-center md:text-left px-6 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-x-8">
        {/* Company Info */}
        <div>
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold cursor-pointer hover:text-cyan"
          >
            NEXORIS
          </Link>
          <p className="mt-4">
            Delivering innovative technology solutions to help businesses succed
          </p>
          <ul className="mt-4 space-y-2 text-sm md:text-[14px] text-foreground">
            <li>
              <Link href="/about" className=" hover:text-cyan transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/insight" className="hover:text-cyan transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-cyan transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="col-span-1 md:col-span-2 items-center">
          <h3 className="font-bold mb-5 md:text-center lg:text-xl">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {services.map((service) => (
              <Link
                key={service.path}
                href={service.path}
                className="hover:text-cyan transition text-sm text-[12px] lg:text-[14px]"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="font-bold mb-3 lg:text-xl">Contact Us</h3>
          <p className="text-sm">
            No. 5, Mojisola Dokpesi Street, Allied Garden Estate, Badore, Ajah,
            Lagos, Nigeria
          </p>
          <p>Tel: +234 (0) 9023433016</p>
          <p>Email: nexoristech@gmail.com</p>

          {/* Social Media */}
          <div className="mt-6 text-center">
            <h3 className="font-bold mb-3 text-center md:text-left">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-cyan transition"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="X (Twitter)"
                className="hover:text-cyan transition"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-cyan transition"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="hover:text-cyan transition"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                aria-label="YouTube"
                className="hover:text-cyan transition"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" flex flex-col lg:flex-row border-t border-purple mt-8 pt-4 text-center lg:justify-center lg:gap-10 text-sm md:text-[14px] list-none">
        <p>&copy; {new Date().getFullYear()} Nexoris. All rights reserved.</p>
        <li>
          <Link href="/privacy-policy" className="hover:text-cyan transition">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms" className="hover:text-cyan transition">
            Terms & Conditions
          </Link>
        </li>
      </div>
    </footer>
  )
}

export default Footer
