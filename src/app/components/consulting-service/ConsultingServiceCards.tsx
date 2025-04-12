import Link from 'next/link'

export default function ConsultingServiceCards() {
  return (
    <section className="bg-background rounded-lg py-2 px-4 sm:p-6 lg:p-12 xl:px-20 my-12 shadow shadow-gray-400">
      <div className="w-full mx-auto grid md:grid-cols-3 gap-8 text-center text-secondary-text">
        {[
          { title: 'SEO Consulting', id: '#seo' },
          { title: 'Product Management Consulting', id: '#product' },
          { title: 'Digital Transformation Consulting', id: '#digital' },
        ].map(({ title, id }) => (
          <Link
            key={title}
            href={`/consulting-and-innovation${id}`}
            className="block p-6 border border-heading hover:shadow-lg rounded-xl bg-secondary-background text-heading"
          >
            <p className="font-semibold text-lg mb-1">{title}</p>
            <p className="text-text text-lg my-1">Learn more</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
