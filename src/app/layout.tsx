// layout.tsx
import './globals.css';
import { Lato, Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
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
    <html lang="en" className={`${lato.variable} ${poppins.variable}`}>
      <body>
      <Navbar />
      <main className='pt-28 flex-1 relative z-0'>{children}</main>
      <Footer className="relative z-0" />
      </body>
    </html>
  );
}