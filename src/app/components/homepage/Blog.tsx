'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Navigating Digital Transformation in 2025',
    description:
      'Explore key strategies you need to stay ahead in the evolving tech landscape.',
    image: '/images/digital-transformation.webp',
    link: '/blog/digital-transformation-2025',
  },
  {
    title: 'AI & Automation: Reshaping Business Efficiency',
    description:
      'How AI-driven solutions are revolutionizing industries and optimizing workflows.',
    image: '/images/ai-automation.webp',
    link: '/blog/ai-automation-business-efficiency',
  },
  {
    title: 'Scaling with Cloud: Future-Proofing Your Business',
    description:
      'Discover the benefits of scalable cloud solutions for long-term business growth.',
    image: '/images/cloud-solutions.webp',
    link: '/blog/cloud-scaling-business-growth',
  },
  {
    title: 'Telehealth: The Future of Healthcare Services',
    description: 'Learn how technology is revolutionizing healthcare services.',
    image: '/images/telehealth.webp',
    link: '/telehealth-future',
  },
]

export default function BlogSection() {
  return (
    <section className="relative bg-background rounded-lg mt-6 lg:mt-12 overflow-hidden xl-mt-5 py-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-heading font-heading">
          Latest Insights
        </h2>
        <p className="mt-4 text-lg text-text font-body">
          Stay ahead with expert insights, trends, and strategies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full mx-auto">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            href={post.link}
            className="relative group bg-background cursor-pointer rounded-2xl border border-button shadow-lg shadow-secondary-text hover:shadow-[#bfb9ef] transition-shadow duration-300 p-4"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={150}
              className="w-full md:h-72 lg:h-35 object-cover rounded-lg"
            />
            <div className="pt-5">
              <h3 className="text-lg font-bold text-heading transition font-heading">
                {post.title}
              </h3>
              <p className="mt-2 text-text font-body text-lg">
                {post.description}
              </p>

              {/* Read More Button with Dynamic Title */}
              <ReadMoreButton title={post.title} />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-block bg-heading text-secondary-text px-6 py-2 rounded-lg text-lg font-medium hover:bg-hover transition font-body"
        >
          View All Articles
        </Link>
      </div>
    </section>
  )
}

// Separate ReadMoreButton component to handle dynamic title
function ReadMoreButton({ title }: { title: string }) {
  const [accessibleTitle, setAccessibleTitle] = useState<string | null>(null)

  useEffect(() => {
    setAccessibleTitle(title) // Set the title only on the client
  }, [title])

  return (
    <p className="mt-4 inline-block text-secondary-text bg-button font-medium py-2 rounded-lg px-4 hover:bg-heading">
      Read More
      {accessibleTitle && (
        <span className="sr-only"> about {accessibleTitle}</span>
      )}
    </p>
  )
}
