import Link from 'next/link'

export default function MarketingServiceCards() {
  return (
    <section className="bg-background rounded-lg py-2 px-4 sm:p-6 lg:p-12 xl:px-20 my-12 shadow shadow-gray-400">
      <div className="w-full mx-auto grid md:grid-cols-3 gap-8 text-center text-secondary-text">
        {[
          { title: 'SEO & Content Marketing', id: '#seo' },
          { title: 'Marketing Automation', id: '#automation' },
          { title: 'Analytics & Reporting', id: '#analytics' },
        ].map(({ title, id }) => (
          <Link
            key={title}
            href={`/marketing-and-analytics${id}`}
            className="block p-6 border border-heading hover:shadow-lg rounded-xl bg-secondary-background text-heading"
          >
            <p className="font-semibold text-lg mb-1">{title}</p>
            <p className="text-gray-600 text-base text-heading">Learn more</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
