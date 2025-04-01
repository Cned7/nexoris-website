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
      className={twMerge('text-secondary-text pt-5 pb-5 fixed bottom-0 mt-15 bg-heading', className)}
    >
      <div className="container px-6 mx-auto md:mx-6 lg:mx-12 mt-6 lg:mt-12 xl:mx-21 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        {/* Company Info */}
        <div className='w-full mx-auto container md:-ml-6'>
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold cursor-pointer hover:text-hover"
          >
            NEXORIS
          </Link>
          <p className="mt-4 md:max-w-48 lg:w-full text-[14px]">
            Delivering innovative technology solutions to help businesses succed
          </p>
          <ul className="mt-4 space-y-2 text-base text-secondary-text mb-3 md:mb-0">
            <li>
              <Link href="/about" className=" hover:text-hover transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-hover transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/insight" className="hover:text-hover transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-hover transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className='my-4 md:my-0'>
          <h3 className="font-bold lg:text-xl">
            Our Services
          </h3>
          <div className="grid grid-cols-1 gap-y-2">
            {services.map((service) => (
              <Link
                key={service.path}
                href={service.path}
                className="hover:text-hover transition text-base"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className='w-full'>
          <span>
            <h3 className="font-bold mb-3 lg:text-xl">Contact Us</h3>
            <p className="text-[14px] md:w-48 lg:full">
             No. 5, Mojisola Dokpesi Street, Allied Garden Estate, Badore, Ajah,
             Lagos, Nigeria
            </p>
            <p>Tel: +234 (0) 9023433016</p>
            <p>Email: nexoristech@gmail.com</p>
            </span>
          {/* Social Media */}
          <div>
            <h3 className="font-bold mt-5 mb-3">
              Connect With Us
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-hover transition"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="X (Twitter)"
                className="hover:text-hover transition"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-hover transition"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="hover:text-hover transition"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                aria-label="YouTube"
                className="hover:text-hover transition"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col lg:flex-row border-t border-purple mt-8 pt-4 text-center lg:justify-center lg:gap-10 text-sm md:text-[14px] list-none">
        <p>&copy; {new Date().getFullYear()} Nexoris. All rights reserved.</p>
        <li>
          <Link href="/privacy-policy" className="hover:text-hover transition">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms" className="hover:text-hover transition">
            Terms & Conditions
          </Link>
        </li>
      </div>
    </footer>
  )
}

export default Footer
