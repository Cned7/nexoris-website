import React from "react";
import Image from "next/image";

interface Industry {
  title: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    title: "FinTech",
    description: "Secure digital banking solutions, seamless payment systems, and fintech platforms built for trust and efficiency.",
    image: "/images/fintech.webp",
  },

{
  title: "E-Commerce",
  description: "Personalized shopping experiences, intuitive payment integrations, and high-performance e-commerce platforms that maximize conversions.",
  image: "/images/e-commerce.webp",
},

  {
  title: "Education",
  description: "Next-gen digital learning platforms, adaptive learning tools, and seamless student management systems for a smarter future.",
  image: "/images/education.webp",
},

  {
    title: "Healthcare",
    description: "Innovative telehealth platforms, AI-powered diagnostics, and data-driven healthcare solutions that enhance patient care.",
    image: "/images/healthcare.webp",
  },
 
  {
    title: "Retail & Consumer Goods",
    description: "Omnichannel experiences, AI-driven inventory management, and automated retail solutions designed for customer-first growth.",
    image: "/images/retail.webp",
  },
  {
    title: "Logistics & Transportation",
    description: "Advanced tracking systems, route optimization, and logistics automation for supply chain efficiency.",
    image: "/images/logistics.webp",
  },
];

const IndustriesSection: React.FC = () => {
  return (
    <section className="bg-background text-silver py-8 px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">The Industries We Serve</h2>
        <p className="text-gray mb-12 text-lg max-w-3xl mx-auto">
          We collaborate with visionary businesses across diverse industries, delivering tailored solutions that drive real-world impact.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative group p-6 bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-cyan-500/50 transition-shadow duration-300"
          >
            {/* Next.js Optimized Image */}
            <div className="relative w-full h-40 md:h-48">
              <Image
                src={industry.image}
                alt={industry.title}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="rounded-lg transition-opacity duration-300 opacity-90 group-hover:opacity-100"
              />
            </div>
            {/* Industry Content */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
              <p className="text-gray-300">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
