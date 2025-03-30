"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Navigating Digital Transformation in 2025",
    description: "Explore key strategies businesses need to stay ahead in the evolving tech landscape.",
    image: "/images/digital-transformation.webp",
    link: "/blog/digital-transformation-2025",
  },
  {
    title: "AI & Automation: Reshaping Business Efficiency",
    description: "How AI-driven solutions are revolutionizing industries and optimizing workflows.",
    image: "/images/ai-automation.webp",
    link: "/blog/ai-automation-business-efficiency",
  },
  {
    title: "Scaling with Cloud: Future-Proofing Your Business",
    description: "Discover the benefits of scalable cloud solutions for long-term business growth.",
    image: "/images/cloud-solutions.webp",
    link: "/blog/cloud-scaling-business-growth",
  },
];

export default function BlogSection() {
  return (
    <section className="py-8 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-silver">Latest Insights</h2>
        <p className="mt-4 text-lg text-gray">Stay ahead with expert insights, trends, and strategies.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <Link key={index} href={post.link} className="relative group p-6 bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-cyan-500/50 transition-shadow duration-300">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="pt-5">
              <h3 className="text-lg font-semibold text-silver transition">
                {post.title}
              </h3>
              <p className="mt-2 text-gray font-base">{post.description}</p>
              <span className="mt-4 inline-block text-silver hover:text-gray bg-teal bg-hover-purple font-medium py-2 rounded-lg px-4 hover:bg-purple">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/blog" className="inline-block bg-purple text-gray px-6 py-3 rounded-lg text-lg font-medium hover:bg-teal transition">
          View All Articles
        </Link>
      </div>
    </section>
  );
}
