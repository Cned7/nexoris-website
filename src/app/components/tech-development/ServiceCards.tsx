import Link from 'next/link'

export default function TechServiceCards() {
  return (
    <section className="bg-background rounded-lg py-8 px-3 mx-4 md:mx-6 lg:mx-12 my-9 xl:mx-20 shadow">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center text-secondary-text">
        {[
          { title: 'Custom Software', id: '#custom' },
          { title: 'Mobile Apps', id: '#mobile' },
          { title: 'Cloud Solutions', id: '#cloud' },
          { title: 'DevOps & Automation', id: '#devops' },
          { title: 'API Integration', id: '#api' },
          { title: 'Cybersecurity', id: '#security' },
        ].map(({ title, id }) => (
          <Link
            key={title}
            href={`/technology-development${id}`}
            className="block p-6 border border-heading hover:shadow-lg rounded-xl bg-secondary-background text-heading"
          >
            <h3 className="font-semibold text-xl mb-1">{title}</h3>
            <p className="text-gray-600 text-base text-heading">Learn more</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
