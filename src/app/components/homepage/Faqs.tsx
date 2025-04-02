'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Head from 'next/head'

const faqs = [
  {
    question: 'What makes Nexoris different from other technology firms?',
    answer:
      'Nexoris focuses on innovation-first, scalable solutions tailored to each client’s needs. We combine expertise in software, automation, and digital transformation to drive business growth.',
  },
  {
    question: 'What services does Nexoris offer?',
    answer:
      'We provide custom software development, cloud solutions, AI-driven automation, SEO & content marketing, UX/UI design, and digital transformation consulting.',
  },
  {
    question: 'Who does Nexoris work with?',
    answer:
      'Our clients range from startups to enterprises in FinTech, Healthcare, E-commerce, Manufacturing, Education, Retail, Logistics, and AI-driven businesses.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes! We provide post-launch support, maintenance, and continuous optimization to ensure long-term performance and adaptability.',
  },
  {
    question: 'How do I get started with Nexoris?',
    answer:
      'Simply contact us through our form, book a free consultation, or send an email to discuss your project and partnership opportunities.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative bg-secondary-background rounded-lg mx-4 md:mx-6 lg:mx-12 mt-6 lg:mt-12 xl:mx-21 overflow-hidden xl-mt-5 p-3 md:px-6">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-heading text-center font-heading">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-button rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-3 md:px-6 py-4 text-left text-heading font-semibold cursor-pointer focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`w-5 h-5 transition-transform transform ${
                    openIndex === index ? 'rotate-180 text-purple' : 'text-button'
                  } cursor-pointer`}
                />
              </button>
              {openIndex === index && (
                <div className="px-2 md:px-6 pb-4 text-text font-body">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
