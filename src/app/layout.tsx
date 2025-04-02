import './globals.css';
import { Inter, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const heading = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '700'],
});

const body = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '700'],
});

// Default metadata
export const metadata: Metadata = {
  title: {
    default: 'Nexoris Technologies – Enabling Possibilities',
    template: '%s | Nexoris Technologies',
  },
  description:
    'Nexoris Technologies provides cutting-edge software development, cloud solutions, product design, and digital transformation services.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',

  openGraph: {
    title: 'Nexoris Technologies – Enabling Possibilities',
    description:
      'Your partner in software development, cloud solutions, and digital transformation.',
    url: 'https://nexoristech.com',
    images: [{ url: '/og-image.jpg' }],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nexoris Technologies – Enabling Possibilities',
    description:
      'Leading innovation in software, cloud solutions, and digital transformation.',
    images: ['/og-image.jpg'],
  },

  metadataBase: new URL('https://nexoristech.com'),
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" translate="yes" className={`${heading.variable} ${body.variable}`}>
      <head>
        {/* Essential Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        

        {/* Canonical Link */}
        <link rel="canonical" href="https://nexoristech.com" />

        {/* Open Graph Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:title" content="Nexoris Technologies – Enabling Possibilities" />
        <meta property="og:description" content="Your partner in software development, cloud solutions, and digital transformation." />
        <meta property="og:url" content="https://nexoristech.com" />
        <meta property="og:image" content="https://nexoristech.com/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nexoris Technologies – Enabling Possibilities" />
        <meta name="twitter:description" content="Leading innovation in software, cloud solutions, and digital transformation." />
        <meta name="twitter:image" content="https://nexoristech.com/og-image.jpg" />

        {/* Icon links for Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data (Schema.org) for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Nexoris Technologies",
              "url": "https://nexoristech.com",
              "logo": "https://nexoristech.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1234567890",
                "contactType": "Customer Support",
              },
            }),
          }}
        />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#ffffff" />

        {/* Title of the Page */}
        <title>Nexoris Technologies – Enabling Possibilities</title>
      </head>
      <body>
        {/* Navbar rendered across all pages */}
        <Navbar />

        {/* Main content area */}
        <main className="relative z-0 bg-background">{children}</main>

        {/* Footer rendered across all pages */}
        <Footer className="relative z-0" />
      </body>
    </html>
  );
}
