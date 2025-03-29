// layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const heading = Inter({
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['400', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "Nexoris Technologies – Enabling Possibilities",
    template: "%s | Nexoris Technologies",
  },
  description:
    "Nexoris Technologies provides cutting-edge software development, cloud solutions, product design, and digital transformation services.",

  openGraph: {
    title: "Nexoris Technologies – Enabling Possibilities",
    description:
      "Your partner in software development, cloud solutions, and digital transformation.",
    url: "",
    images: [{ url: "" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexoris Technologies – Enabling Possibilities",
    description:
      "Leading innovation in software, cloud solutions, and digital transformation.",
    images: [""],
  },

  metadataBase: new URL("https://nexoristech.com"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
      <Navbar />
      <main className='relative z-0 bg-background'>{children}</main>
      <Footer className="relative z-0" />
      </body>
    </html>
  );
}