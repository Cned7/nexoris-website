import HomeHero from './components/homepage/Hero';
import OurServices from './components/homepage/OurServices';
import WhyNexoris from './components/homepage/WhyNexoris';
import IndustriesSection from './components/homepage/IndustriesSection';
import OurProcess from './components/homepage/OurProcess';
import TechStack from './components/homepage/TechStack';
import Faqs from './components/homepage/Faqs';
import Blog from './components/homepage/Blog';
import Schema from './components/Schema';

export const metadata = {
  title: 'Next-Gen Software Solutions | Nexoris Technologies Ltd',
  description:
    'Nexoris Technologies delivers cutting-edge software development, cloud solutions, product design, and digital transformation services. Build the future with us.',

  openGraph: {
    title: 'Next-Gen Software Solutions | Nexoris Technologies',
    description:
      'Leading innovation in software development, cloud solutions, and digital transformation.',
    url: 'https://nexoris-liard.vercel.app/',
    images: [{ url: 'https://nexoris-liard.vercel.app/og-image.jpg' }],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Next-Gen Software Solutions | Nexoris Technologies',
    description:
      'Empowering businesses with advanced software solutions and cloud technologies.',
    images: ['https://nexoris-liard.vercel.app/twitter-image.jpg'],
  },
};

// JSON-LD Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexoris Technologies Ltd",
  "url": "https://nexoris-liard.vercel.app/",
  "logo": "https://nexoris-liard.vercel.app/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1234567890",
    "contactType": "customer service",
    "email": "contact@nexoris.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/nexoris-technologies",
    "https://twitter.com/nexoris_tech"
  ]
};

export default function Home() {
  return (
    <>
      {/* Schema for SEO */}
      <Schema schema={organizationSchema} />
      <HomeHero />
      <OurServices />
      <WhyNexoris />
      <IndustriesSection />
      <OurProcess />
      <TechStack />
      <Faqs />
      <Blog />
    </>
  );
}
