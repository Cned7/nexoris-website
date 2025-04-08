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
      className={twMerge(
        'text-secondary-text py-2 fixed bottom-0  bg-heading md:px-6 lg:px-12 mt-6  xl:px-21',
        className
      )}
    >
      <div className="container px-6 mx-auto grid mt-15 lg:mt-12 grid-cols-1 md:grid-cols-3 gap-4 xl:gap-10 xl:justify-between text-center md:text-left w-ful">
        {/* Company Info */}
        <div className="w-full mx-auto container md:-ml-6">
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold font-heading cursor-pointer hover:text-hover"
          >
            NEXORIS
          </Link>
          <p className="mt-4 md:max-w-58 lg:w-full text-base font-body text-secondary-text">
            Delivering innovative technology solutions to help businesses
            succeed
          </p>
          <ul className="mt-4 space-y-2 text-base text-secondary-text mb-3 md:mb-0">
            <li>
              <Link
                href="/about-us"
                className=" hover:text-hover transition font-body"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-hover transition font-body"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/insight"
                className="hover:text-hover transition font-body"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-hover transition font-body"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="my-4 md:my-0">
          <h3 className="font-bold lg:text-xl mb-3 font-heading">
            Our Services
          </h3>
          <div className="grid grid-cols-1 gap-y-2">
            {services.map((service) => (
              <Link
                key={service.path}
                href={service.path}
                className="hover:text-hover transition text-base font-body"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className="w-full">
          <span>
            <h3 className="font-bold mb-3 lg:text-xl font-heading">
              Contact Us
            </h3>
            <p className="text-[14px] md:w-48 lg:full">
              Allied Garden Estate, Badore, Ajah, Lagos, Nigeria
            </p>
            <p>Tel: +234 (0) 9023433000</p>
            <p>Email: nexoristech@gmail.com</p>
          </span>
          {/* Social Media */}
          <div>
            <h3 className="font-bold mt-5 mb-3 font-heading">
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
      <div className="flex flex-col lg:flex-row border-t border-purple mt-8 pt-4 text-center lg:justify-center gap-5 lg:gap-10 text-base list-none font-body">
        <p>&copy; {new Date().getFullYear()} Nexoris. All rights reserved.</p>
        <p>
          <Link href="/privacy-policy" className="hover:text-hover transition">
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link
            href="/cookie-policy"
            className="hover:text-hover transition font-body"
          >
            Cookie Policy
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
