import HomeHero from "./components/homepage/Hero";
import OurServices from "./components/homepage/OurServices";
import WhyNexoris from "./components/homepage/WhyNexoris";

export const metadata = {
  title: "Next-Gen Software Solutions | Nexoris Technologies Ltd",
  description:
    "Nexoris Technologies delivers cutting-edge software development, cloud solutions, product design, and digital transformation services. Build the future with us.",

  openGraph: {
    title: "Next-Gen Software Solutions | Nexoris Technologies",
    description:
      "Leading innovation in software development, cloud solutions, and digital transformation.",
    url: "",
    images: [{ url: "" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next-Gen Software Solutions | Nexoris Technologies",
    description:
      "Empowering businesses with advanced software solutions and cloud technologies.",
    images: [""],
  },
};



export default function Home() {
  return ( 
    <>
    <HomeHero />
    <OurServices />
    <WhyNexoris />
    </>
  );
}
